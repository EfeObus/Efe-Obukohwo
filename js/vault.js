// Document Vault: decrypts the files produced by scripts/build-vault.js in the browser.
// The AES key is derived from the password, kept non-extractable and held only in this
// closure (never in storage). Lock, reload or 10 idle minutes discards it.
// The page runs under Trusted Types, so all DOM is built with createElement/textContent.
(function () {
    // Refuse to render inside someone else's frame (clickjacking). GitHub Pages can't
    // send frame-ancestors, so the page starts hidden (html.vault-guard) until this check passes.
    if (window.top !== window.self) return;
    document.documentElement.classList.remove('vault-guard');

    const IDLE_LIMIT_MS = 10 * 60 * 1000;
    const MAGIC = 'EFV1';
    const ICONS = { 'application/pdf': 'fas fa-file-pdf', 'image/jpeg': 'fas fa-file-image', 'image/png': 'fas fa-file-image', 'image/webp': 'fas fa-file-image' };

    const $ = id => document.getElementById(id);
    const lockView = $('vault-lock');
    const contentView = $('vault-content');
    const form = $('vault-form');
    const passwordInput = $('vault-password');
    const submitBtn = $('vault-submit');
    const statusEl = $('vault-status');
    const list = $('vault-list');
    const viewer = $('vault-viewer');
    const viewerBody = $('vault-viewer-body');

    let session = null; // { key, manifest, urls: Map<id, blobUrl> }
    let idleTimer = null;
    let lastFocus = null;

    if (!window.crypto || !crypto.subtle) {
        setStatus('This browser can\'t open the vault (Web Crypto unavailable). Try a current version of Chrome, Safari, Edge or Firefox.', true);
        submitBtn.disabled = true;
        return;
    }

    function el(tag, className, text) {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (text !== undefined) node.textContent = text;
        return node;
    }

    function icon(className) {
        const i = el('i', className);
        i.setAttribute('aria-hidden', 'true');
        return i;
    }

    function setStatus(message, isError) {
        statusEl.textContent = message;
        statusEl.classList.toggle('error', !!isError);
    }

    function formatSize(bytes) {
        return bytes >= 1048576 ? `${(bytes / 1048576).toFixed(1)} MB` : `${Math.max(1, Math.round(bytes / 1024))} KB`;
    }

    async function fetchBytes(name) {
        const res = await fetch(`vault/${name}`, { cache: 'no-cache' });
        if (!res.ok) throw new Error(`fetch ${name}: ${res.status}`);
        return new Uint8Array(await res.arrayBuffer());
    }

    async function decrypt(key, bytes, aad) {
        return crypto.subtle.decrypt(
            { name: 'AES-GCM', iv: bytes.slice(0, 12), additionalData: new TextEncoder().encode(aad) },
            key, bytes.slice(12)
        );
    }

    async function unlock(password) {
        const blob = await fetchBytes('manifest.enc');
        if (new TextDecoder().decode(blob.slice(0, 4)) !== MAGIC) throw new Error('Unrecognised vault format');
        const iterations = new DataView(blob.buffer, 4, 4).getUint32(0);
        const salt = blob.slice(8, 24);
        const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveKey']);
        const key = await crypto.subtle.deriveKey(
            { name: 'PBKDF2', hash: 'SHA-256', salt, iterations },
            base, { name: 'AES-GCM', length: 256 }, false, ['decrypt']
        );
        let plain;
        try {
            plain = await decrypt(key, blob.slice(24), 'manifest');
        } catch (e) {
            const err = new Error('Incorrect password');
            err.wrongPassword = true;
            throw err;
        }
        return { key, manifest: JSON.parse(new TextDecoder().decode(plain)), urls: new Map() };
    }

    async function fileUrl(file) {
        if (!session) throw new Error('Vault is locked');
        if (!session.urls.has(file.id)) {
            const plain = await decrypt(session.key, await fetchBytes(`${file.id}.enc`), file.id);
            session.urls.set(file.id, URL.createObjectURL(new Blob([plain], { type: file.mime })));
        }
        return session.urls.get(file.id);
    }

    // ---------- Rendering ----------

    function renderList(manifest) {
        list.replaceChildren();
        for (const category of manifest.categories) {
            const files = manifest.files.filter(f => f.category === category);
            if (!files.length) continue;

            const section = el('section', 'vault-category');
            section.appendChild(el('h2', 'vault-category-title', category));
            const grid = el('div', 'vault-grid');

            for (const file of files) {
                const card = el('article', 'vault-card');
                const iconWrap = el('div', 'vault-card-icon');
                iconWrap.appendChild(icon(ICONS[file.mime] || 'fas fa-file'));
                card.appendChild(iconWrap);

                const body = el('div', 'vault-card-body');
                body.appendChild(el('h3', 'vault-card-title', file.label));
                body.appendChild(el('p', 'vault-card-issuer', file.issuer));
                const meta = [file.date, formatSize(file.size)].filter(Boolean).join(' · ');
                body.appendChild(el('p', 'vault-card-meta', meta));
                if (file.note) body.appendChild(el('p', 'vault-card-note', file.note));

                const actions = el('div', 'vault-card-actions');
                const viewBtn = el('button', 'btn btn-primary vault-card-btn');
                viewBtn.type = 'button';
                viewBtn.append(icon('fas fa-eye'), ' View');
                viewBtn.addEventListener('click', () => openViewer(file, viewBtn));

                const dlBtn = el('button', 'btn btn-outline vault-card-btn');
                dlBtn.type = 'button';
                dlBtn.append(icon('fas fa-download'), ' Download');
                dlBtn.addEventListener('click', () => download(file, dlBtn));

                actions.append(viewBtn, dlBtn);
                body.appendChild(actions);
                card.appendChild(body);
                grid.appendChild(card);
            }
            section.appendChild(grid);
            list.appendChild(section);
        }
    }

    async function withBusy(button, task) {
        button.disabled = true;
        button.classList.add('busy');
        try {
            return await task();
        } catch (e) {
            if (session) alert('Sorry, that document could not be opened. Please try again.');
        } finally {
            button.disabled = false;
            button.classList.remove('busy');
        }
    }

    function download(file, button) {
        return withBusy(button, async () => {
            const a = el('a');
            a.href = await fileUrl(file);
            a.download = file.fileName;
            document.body.appendChild(a);
            a.click();
            a.remove();
        });
    }

    function openViewer(file, button) {
        return withBusy(button, async () => {
            const url = await fileUrl(file);
            lastFocus = button;
            $('vault-viewer-title').textContent = file.label;
            $('vault-viewer-open').href = url;
            const dl = $('vault-viewer-download');
            dl.href = url;
            dl.download = file.fileName;

            let media;
            if (file.mime === 'application/pdf') {
                media = el('iframe', 'vault-viewer-frame');
                media.title = file.label;
                media.src = url;
            } else {
                media = el('img', 'vault-viewer-image');
                media.alt = file.label;
                media.src = url;
            }
            viewerBody.replaceChildren(media);
            viewer.hidden = false;
            document.body.classList.add('vault-viewer-open');
            $('vault-viewer-close').focus();
        });
    }

    function closeViewer() {
        if (viewer.hidden) return;
        viewer.hidden = true;
        viewerBody.replaceChildren();
        document.body.classList.remove('vault-viewer-open');
        if (lastFocus && document.contains(lastFocus)) lastFocus.focus();
    }

    // ---------- Lock / unlock ----------

    function resetIdleTimer() {
        if (!session) return;
        clearTimeout(idleTimer);
        idleTimer = setTimeout(() => lock('Locked after 10 minutes of inactivity.'), IDLE_LIMIT_MS);
    }

    function lock(message) {
        closeViewer();
        if (session) session.urls.forEach(url => URL.revokeObjectURL(url));
        session = null;
        clearTimeout(idleTimer);
        list.replaceChildren();
        contentView.hidden = true;
        lockView.hidden = false;
        form.reset();
        setStatus(message || '', false);
        passwordInput.focus();
    }

    form.addEventListener('submit', async e => {
        e.preventDefault();
        const password = passwordInput.value;
        if (!password) return;
        submitBtn.disabled = true;
        setStatus('Unlocking…', false);
        try {
            session = await unlock(password);
            passwordInput.value = '';
            setStatus('', false);
            renderList(session.manifest);
            lockView.hidden = true;
            contentView.hidden = false;
            $('vault-lock-btn').focus();
            resetIdleTimer();
        } catch (err) {
            session = null;
            setStatus(err.wrongPassword ? 'Incorrect password.' : 'The vault could not be opened right now. Please try again later.', true);
            passwordInput.select();
        } finally {
            submitBtn.disabled = false;
        }
    });

    $('vault-lock-btn').addEventListener('click', () => lock('Vault locked.'));
    $('vault-viewer-close').addEventListener('click', closeViewer);
    viewer.addEventListener('click', e => { if (e.target === viewer) closeViewer(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeViewer(); });
    ['pointerdown', 'keydown', 'scroll', 'touchstart'].forEach(evt =>
        window.addEventListener(evt, resetIdleTimer, { passive: true }));
})();
