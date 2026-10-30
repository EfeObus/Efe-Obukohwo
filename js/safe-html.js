// Escaping helpers for pages that build markup from portfolio data.
// Every data value that goes into a template string passes through esc() (text/attributes)
// or safeUrl() (href/src) so a stray quote or <script> in the data can't become live markup.
(function () {
    const ENTITIES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

    function esc(value) {
        if (value === null || value === undefined) return '';
        return String(value).replace(/[&<>"']/g, ch => ENTITIES[ch]);
    }

    // Allows https/http/mailto links and same-site relative paths; anything else
    // (javascript:, data:, vbscript:, ...) collapses to '#'.
    function safeUrl(value) {
        if (!value) return '#';
        const url = String(value).trim();
        const scheme = url.match(/^([a-z][a-z0-9+.-]*):/i);
        if (scheme && !['http', 'https', 'mailto'].includes(scheme[1].toLowerCase())) return '#';
        return esc(url);
    }

    window.esc = esc;
    window.safeUrl = safeUrl;
})();
