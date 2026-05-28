// Mobile menu toggle
function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    nav.style.position = 'absolute';
    nav.style.top = '64px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.background = '#0a0a0a';
    nav.style.flexDirection = 'column';
    nav.style.padding = '20px';
    nav.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Lazy load AdSense ads when visible
const adObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            (adsbygoogle = window.adsbygoogle || []).push({});
            adObserver.unobserve(entry.target);
        }
    });
}, { rootMargin: '100px' });

document.querySelectorAll('.ad-container ins').forEach(ad => {
    adObserver.observe(ad);
});

console.log('Vidiofy Blog carregado com sucesso!');
