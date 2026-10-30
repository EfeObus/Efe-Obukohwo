// Research Work page: renders portfolioData.research into Articles / Journal Issues / Thesis tabs
// with a topic filter. All data passes through esc()/safeUrl() (js/safe-html.js).
document.addEventListener('DOMContentLoaded', function() {
    const data = window.portfolioData;
    if (!data) {
        console.error('Portfolio data not loaded!');
        return;
    }

    const research = data.research || [];
    const tabs = [...document.querySelectorAll('.research-tab')];
    const panel = document.getElementById('research-panel');
    const list = document.getElementById('research-list');
    const filter = document.getElementById('research-filter');

    const TYPES = ['article', 'issue', 'thesis'];
    const EMPTY = {
        article: { icon: 'fa-pen-nib', text: 'Articles will appear here soon.' },
        issue: { icon: 'fa-book-open', text: 'Journal issues I have contributed to will appear here soon.' },
        thesis: { icon: 'fa-graduation-cap', text: 'Thesis work will appear here soon.' }
    };
    const LINKS = [
        ['pdf', 'fas fa-file-pdf', 'PDF'],
        ['doi', 'fas fa-link', 'DOI'],
        ['url', 'fas fa-external-link-alt', 'Read Online'],
        ['code', 'fab fa-github', 'Code'],
        ['data', 'fas fa-table', 'Data']
    ];

    let currentType = 'article';
    let currentTag = null;

    // Newest first; entries keep their listed order within the same month.
    const MONTHS = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
    function dateValue(date) {
        const m = String(date || '').match(/^([A-Z][a-z]{2})\w*\s+(\d{4})$/);
        if (m) return Number(m[2]) * 12 + (MONTHS[m[1]] || 0);
        const y = String(date || '').match(/\d{4}/);
        return y ? Number(y[0]) * 12 : 0;
    }

    function citation(item) {
        const j = item.journal;
        if (!j || !j.name) return item.venue ? `<p class="research-citation">${esc(item.venue)}</p>` : '';
        let text = j.name;
        if (j.volume) text += `, ${j.volume}`;
        if (j.issue) text += `(${j.issue})`;
        if (j.pages) text += `, ${j.pages}`;
        return `<p class="research-citation"><i class="fas fa-book"></i> ${esc(text)}</p>`;
    }

    function linkUrl(key, value) {
        // A bare DOI ("10.1234/abc") becomes a resolvable link.
        if (key === 'doi' && /^10\./.test(value)) return `https://doi.org/${value}`;
        return value;
    }

    function card(item) {
        const meta = [
            item.date && `<span><i class="far fa-calendar"></i> ${esc(item.date)}</span>`,
            item.readTime && `<span><i class="far fa-clock"></i> ${esc(item.readTime)}</span>`,
            item.status && `<span><i class="fas fa-flag"></i> ${esc(item.status)}</span>`,
            item.role && `<span><i class="fas fa-user-edit"></i> ${esc(item.role)}</span>`
        ].filter(Boolean).join('');

        const tags = (item.tags || []).map(tag => `<span class="blog-tag">${esc(tag)}</span>`).join('');

        const links = [];
        if (item.page) {
            links.push(`<a href="${safeUrl(item.page)}" class="read-more">Read ${item.type === 'thesis' ? 'Thesis' : 'Article'} <i class="fas fa-arrow-right"></i></a>`);
        }
        const extra = item.links || {};
        LINKS.forEach(([key, icon, label]) => {
            if (!extra[key]) return;
            links.push(`<a href="${safeUrl(linkUrl(key, extra[key]))}" target="_blank" rel="noopener noreferrer" class="read-more"><i class="${icon}"></i> ${label}</a>`);
        });

        return `
            <article class="blog-card">
                <div class="blog-image">
                    <i class="fas ${esc(item.icon || 'fa-file-alt')}"></i>
                </div>
                <div class="blog-content">
                    <div class="blog-meta">${meta}</div>
                    <h3>${esc(item.title)}</h3>
                    ${citation(item)}
                    ${item.abstract ? `<p>${esc(item.abstract)}</p>` : ''}
                    <div class="blog-tags">${tags}</div>
                    <div class="research-links">${links.join('')}</div>
                </div>
            </article>
        `;
    }

    // Only topics shared by two or more pieces earn a filter button; one-off tags are clutter.
    function renderFilter(items) {
        const counts = {};
        items.flatMap(item => item.tags || []).forEach(tag => { counts[tag] = (counts[tag] || 0) + 1; });
        const tags = Object.keys(counts).filter(tag => counts[tag] > 1).sort();
        if (tags.length < 2) {
            filter.innerHTML = '';
            return;
        }
        filter.innerHTML = [`<button type="button" class="blog-tag" data-tag="" aria-pressed="${currentTag === null}">All</button>`]
            .concat(tags.map(tag => `<button type="button" class="blog-tag" data-tag="${esc(tag)}" aria-pressed="${tag === currentTag}">${esc(tag)}</button>`))
            .join('');
    }

    function render() {
        const ofType = research
            .filter(item => item.type === currentType)
            .map((item, index) => ({ item, index }))
            .sort((a, b) => dateValue(b.item.date) - dateValue(a.item.date) || a.index - b.index)
            .map(entry => entry.item);
        if (currentTag && !ofType.some(item => (item.tags || []).includes(currentTag))) currentTag = null;

        renderFilter(ofType);
        const shown = currentTag ? ofType.filter(item => (item.tags || []).includes(currentTag)) : ofType;

        list.innerHTML = shown.length
            ? shown.map(card).join('')
            : `<div class="research-empty"><i class="fas ${EMPTY[currentType].icon}"></i>${esc(EMPTY[currentType].text)}</div>`;
    }

    function selectTab(type, focus, initial) {
        currentType = type;
        currentTag = null;
        tabs.forEach(tab => {
            const selected = tab.dataset.type === type;
            tab.setAttribute('aria-selected', String(selected));
            tab.tabIndex = selected ? 0 : -1;
            if (selected) {
                panel.setAttribute('aria-labelledby', tab.id);
                if (focus) tab.focus();
            }
        });
        if (!initial && history.replaceState) history.replaceState(null, '', `#${type}`);
        render();
    }

    // Counts on each tab
    TYPES.forEach(type => {
        const count = research.filter(item => item.type === type).length;
        const el = document.querySelector(`[data-count="${type}"]`);
        if (el) el.textContent = `(${count})`;
    });

    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => selectTab(tab.dataset.type));
        // Arrow keys move between tabs (WAI-ARIA tabs pattern)
        tab.addEventListener('keydown', e => {
            if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
            e.preventDefault();
            const next = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
            selectTab(next.dataset.type, true);
        });
    });

    filter.addEventListener('click', e => {
        const button = e.target.closest('button[data-tag]');
        if (!button) return;
        currentTag = button.dataset.tag || null;
        render();
    });

    // Deep links: research.html#issue, #thesis
    const fromHash = location.hash.slice(1);
    selectTab(TYPES.includes(fromHash) ? fromHash : 'article', false, true);
});
