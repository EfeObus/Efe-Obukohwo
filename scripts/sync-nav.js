#!/usr/bin/env node
// Writes the one canonical navbar into every page that has one, so the 30+ copies
// can't drift apart. Run after changing NAV below: `node scripts/sync-nav.js`.
// The active item is baked in per page (works without JavaScript); js/nav.js only
// handles behaviour (mobile menu, dropdown).
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

// Top-level items. A `children` entry renders as a dropdown. `ifExists` hides an
// item until its page has been created.
const NAV = [
    { label: 'Home', href: 'index.html' },
    { label: 'About', href: 'about.html' },
    { label: 'Experience', href: 'experience.html' },
    { label: 'Skills', href: 'skills.html' },
    { label: 'Projects', href: 'projects.html', also: /^case-study-/ },
    { label: 'Research', href: 'research.html', ifExists: true, also: /^research-/ },
    { label: 'Blog', href: 'blog.html', also: /^blog-/ },
    {
        label: 'Credentials', id: 'nav-credentials', children: [
            { label: 'Education', href: 'education.html' },
            { label: 'Certifications', href: 'certifications.html' },
            { label: 'Recommendations', href: 'recommendations.html' },
            { label: 'Document Vault', href: 'vault.html', icon: 'fas fa-lock', ifExists: 'vault/manifest.enc' }
        ]
    },
    { label: 'Contact', href: 'contact.html' }
];

const exists = href => fs.existsSync(path.join(ROOT, href));
// ifExists: true checks the page itself; a path checks that file instead (the vault link waits for a built vault).
const visible = item => !item.ifExists || exists(item.ifExists === true ? item.href : item.ifExists);
const isActive = (item, page) => item.href === page || (item.also && item.also.test(page));

function renderNav(page) {
    const I = '                ';
    const items = NAV.filter(visible).map(item => {
        if (!item.children) {
            const cls = isActive(item, page) ? 'nav-link active' : 'nav-link';
            const current = isActive(item, page) ? ' aria-current="page"' : '';
            return `${I}<a href="${item.href}" class="${cls}"${current}>${item.label}</a>`;
        }
        const children = item.children.filter(visible);
        const groupActive = children.some(c => isActive(c, page));
        const links = children.map(c => {
            const cls = isActive(c, page) ? 'nav-dropdown-link active' : 'nav-dropdown-link';
            const current = isActive(c, page) ? ' aria-current="page"' : '';
            const icon = c.icon ? `<i class="${c.icon}" aria-hidden="true"></i> ` : '';
            return `${I}        <a href="${c.href}" class="${cls}"${current}>${icon}${c.label}</a>`;
        }).join('\n');
        return [
            `${I}<div class="nav-dropdown">`,
            `${I}    <button type="button" class="nav-link nav-dropdown-toggle${groupActive ? ' active' : ''}" aria-expanded="false" aria-controls="${item.id}">`,
            `${I}        ${item.label} <i class="fas fa-chevron-down" aria-hidden="true"></i>`,
            `${I}    </button>`,
            `${I}    <div class="nav-dropdown-menu" id="${item.id}">`,
            links,
            `${I}    </div>`,
            `${I}</div>`
        ].join('\n');
    }).join('\n');

    return `<nav class="navbar" aria-label="Main">
        <div class="nav-container">
            <div class="nav-logo">
                <a href="index.html" class="logo-link">
                    <img src="images/Efe Logo.png" alt="Efe Obukohwo Logo" class="logo-image">
                </a>
            </div>
            <div class="nav-menu" id="nav-menu">
${items}
            </div>
            <button type="button" class="hamburger" id="hamburger" aria-label="Menu" aria-expanded="false" aria-controls="nav-menu">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
        </div>
    </nav>`;
}

let changed = 0;
for (const page of fs.readdirSync(ROOT).filter(f => f.endsWith('.html'))) {
    const file = path.join(ROOT, page);
    const html = fs.readFileSync(file, 'utf8');
    if (!/<nav class="navbar"/.test(html)) continue;

    let out = html.replace(/<nav class="navbar"[\s\S]*?<\/nav>/, renderNav(page));
    if (!out.includes('src="js/nav.js"')) {
        out = out.replace('<script src="script.js"></script>', '<script src="js/nav.js"></script>\n    <script src="script.js"></script>');
    }
    if (out !== html) {
        fs.writeFileSync(file, out);
        changed++;
    }
}
console.log(`Navbar synced (${changed} page${changed === 1 ? '' : 's'} updated).`);
