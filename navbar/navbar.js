document.addEventListener("DOMContentLoaded", () => {
    loadNavbar();
});

function loadNavbar() {
    fetch('navbar/navbar.html')
        .then(res => {
            if (!res.ok) throw new Error('Navbar HTML not found');
            return res.text();
        })
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
            setupNavbarScroll();
            highlightCurrentPage();
        })
        .catch(err => {
            console.error('Failed to load navbar:', err);
        });
}

function setupNavbarScroll() {
    const navbar = document.getElementById("navbar");
    const scrollHint = document.getElementById("scroll-hint");
    
    if (!navbar) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                
                // Only hide if we've scrolled down past a small threshold (e.g., 80px)
                if (currentScrollY > lastScrollY && currentScrollY > 80) {
                    // Scrolling DOWN and past threshold -> hide navbar
                    navbar.classList.add("hidden");
                    if (scrollHint) scrollHint.classList.add("visible");
                } else if (currentScrollY < lastScrollY) {
                    // Scrolling UP -> show navbar
                    navbar.classList.remove("hidden");
                    if (scrollHint) scrollHint.classList.remove("visible");
                }
                
                lastScrollY = currentScrollY;
                ticking = false;
            });
            ticking = true;
        }
    });

    // Click scroll hint to show navbar
    if (scrollHint) {
        scrollHint.addEventListener("click", () => {
            navbar.classList.remove("hidden");
            scrollHint.classList.remove("visible");
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

function highlightCurrentPage() {
    // Highlight the nav link for the current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const pageName = currentPage.replace('.html', '');
    
    const links = document.querySelectorAll('.navbar a');
    links.forEach(link => {
        const linkPage = link.getAttribute('data-page');
        if (linkPage === pageName || (pageName === '' && linkPage === 'index')) {
            link.classList.add('active');
        }
    });
}