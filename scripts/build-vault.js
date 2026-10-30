#!/usr/bin/env node
// Builds the Document Vault: encrypts each credential listed in the (git-ignored)
// config into vault/<random-id>.enc, plus an encrypted manifest of labels and file names.
//
//   node scripts/build-vault.js [vault-source/vault.config.json]
//
// The password is read from a hidden prompt and never written anywhere. (VAULT_PASSWORD
// is honoured for automated tests only; don't type it inline in a shell, since that
// lands in your shell history.)
//
// Format (all AES-256-GCM, key = PBKDF2-SHA256(password, salt, ITERATIONS)):
//   manifest.enc = "EFV1" | iterations (uint32 BE) | salt (16) | iv (12) | ciphertext+tag
//   <id>.enc     = iv (12) | ciphertext+tag
// Each blob is bound to its name via AES-GCM additional data ("manifest" or the file id),
// so encrypted files can't be swapped around. A wrong password fails the GCM tag check.
// Every build uses a fresh salt, IVs and file ids, so it doubles as password rotation.
const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { webcrypto, randomBytes } = require('crypto');
const { subtle } = webcrypto;

const ROOT = path.join(__dirname, '..');
const OUT = path.join(ROOT, 'vault');
const ITERATIONS = 1_000_000;
const MAGIC = Buffer.from('EFV1');
const MIME = { '.pdf': 'application/pdf', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.webp': 'image/webp' };

function promptHidden(question) {
    return new Promise(resolve => {
        const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: true });
        rl._writeToOutput = s => { if (s.includes(question)) process.stdout.write(s); };
        rl.question(question, answer => {
            rl.close();
            process.stdout.write('\n');
            resolve(answer);
        });
    });
}

async function getPassword() {
    if (process.env.VAULT_PASSWORD) return process.env.VAULT_PASSWORD;
    if (!process.stdin.isTTY) throw new Error('Run this in an interactive terminal so the password can be typed privately.');
    const first = await promptHidden('Vault password: ');
    const second = await promptHidden('Confirm password: ');
    if (first !== second) throw new Error('Passwords did not match. Nothing was changed.');
    return first;
}

function strengthNote(pw) {
    if (pw.length < 12) throw new Error('Password must be at least 12 characters.');
    if (pw.length < 20) {
        return 'Note: anyone can download the encrypted files and guess offline. A passphrase of 4-5 random words (20+ characters) is much stronger.';
    }
    return null;
}

async function deriveKey(password, salt) {
    const base = await subtle.importKey('raw', Buffer.from(password, 'utf8'), 'PBKDF2', false, ['deriveKey']);
    return subtle.deriveKey(
        { name: 'PBKDF2', hash: 'SHA-256', salt, iterations: ITERATIONS },
        base, { name: 'AES-GCM', length: 256 }, false, ['encrypt']
    );
}

async function encrypt(key, data, aad) {
    const iv = randomBytes(12);
    const ct = await subtle.encrypt({ name: 'AES-GCM', iv, additionalData: Buffer.from(aad) }, key, data);
    return Buffer.concat([iv, Buffer.from(ct)]);
}

async function main() {
    const configPath = path.resolve(process.argv[2] || path.join(ROOT, 'vault-source', 'vault.config.json'));
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    const sourceDir = config.source;

    // Validate everything before asking for the password.
    const entries = config.files.map(f => {
        const src = path.join(sourceDir, f.file);
        if (!fs.existsSync(src)) throw new Error(`Missing source file: ${f.file}`);
        const mime = MIME[path.extname(f.file).toLowerCase()];
        if (!mime) throw new Error(`Unsupported file type: ${f.file}`);
        if (!config.categories.includes(f.category)) throw new Error(`Unknown category "${f.category}" for ${f.file}`);
        return { ...f, src, mime };
    });

    const password = await getPassword();
    const note = strengthNote(password);

    const salt = randomBytes(16);
    console.log(`Deriving key (PBKDF2-SHA256, ${ITERATIONS.toLocaleString()} iterations)...`);
    const key = await deriveKey(password, salt);

    // Write into a staging folder, then swap, so a failed build never leaves a half-vault.
    const staging = `${OUT}.staging`;
    fs.rmSync(staging, { recursive: true, force: true });
    fs.mkdirSync(staging);

    const manifest = { version: 1, built: new Date().toISOString().slice(0, 10), categories: config.categories, files: [] };
    for (const e of entries) {
        const id = randomBytes(12).toString('hex');
        const data = fs.readFileSync(e.src);
        fs.writeFileSync(path.join(staging, `${id}.enc`), await encrypt(key, data, id));
        manifest.files.push({
            id, label: e.label, category: e.category, issuer: e.issuer || '', date: e.date || '',
            note: e.note || '', fileName: e.downloadName || e.file, mime: e.mime, size: data.length
        });
        console.log(`  encrypted  ${e.label}`);
    }

    const header = Buffer.alloc(4);
    header.writeUInt32BE(ITERATIONS);
    const body = await encrypt(key, Buffer.from(JSON.stringify(manifest)), 'manifest');
    fs.writeFileSync(path.join(staging, 'manifest.enc'), Buffer.concat([MAGIC, header, salt, body]));

    fs.rmSync(OUT, { recursive: true, force: true });
    fs.renameSync(staging, OUT);
    console.log(`\nVault built: ${entries.length} documents in vault/ (encrypted).`);
    if (note) console.log(note);
}

main().catch(err => {
    console.error(`\n${err.message}`);
    process.exit(1);
});
