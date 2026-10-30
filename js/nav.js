// Site navigation: mobile menu, Credentials dropdown, scroll styling.
// Shared by every page (including the vault, which doesn't load script.js),
// so it builds no markup and uses no innerHTML.
(function () {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    if (!navbar || !hamburger || !navMenu) return;

    function setMenuOpen(open) {
        hamburger.classList.toggle('active', open);
        navMenu.classList.toggle('active', open);
        hamburger.setAttribute('aria-expanded', String(open));
    }

    hamburger.addEventListener('click', () => {
        setMenuOpen(!navMenu.classList.contains('active'));
    });

    // Close the mobile menu after following a link
    navMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuOpen(false)));

    // Dropdowns (Credentials)
    const dropdowns = [...navMenu.querySelectorAll('.nav-dropdown')];

    function setDropdownOpen(dropdown, open) {
        dropdown.classList.toggle('open', open);
        dropdown.querySelector('.nav-dropdown-toggle').setAttribute('aria-expanded', String(open));
    }

    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.nav-dropdown-toggle');
        toggle.addEventListener('click', e => {
            e.stopPropagation();
            const open = !dropdown.classList.contains('open');
            dropdowns.forEach(d => setDropdownOpen(d, false));
            setDropdownOpen(dropdown, open);
        });
        // Close when keyboard focus leaves the dropdown
        dropdown.addEventListener('focusout', e => {
            if (!dropdown.contains(e.relatedTarget)) setDropdownOpen(dropdown, false);
        });
    });

    document.addEventListener('click', e => {
        dropdowns.forEach(d => { if (!d.contains(e.target)) setDropdownOpen(d, false); });
    });

    document.addEventListener('keydown', e => {
        if (e.key !== 'Escape') return;
        dropdowns.forEach(d => {
            if (d.classList.contains('open')) {
                setDropdownOpen(d, false);
                d.querySelector('.nav-dropdown-toggle').focus();
            }
        });
        setMenuOpen(false);
    });

    // The "Open to Opportunities" banner wraps to a different height per screen size;
    // publish its real height so the navbar sits directly underneath it.
    const banner = document.querySelector('.opportunity-banner');
    if (banner && 'ResizeObserver' in window) {
        new ResizeObserver(() => {
            document.documentElement.style.setProperty('--banner-h', `${banner.offsetHeight}px`);
        }).observe(banner);
    }

    // Slightly darker bar once the page scrolls
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 100);
    }, { passive: true });
})();
