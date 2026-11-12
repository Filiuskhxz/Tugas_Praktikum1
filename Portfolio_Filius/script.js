// 1. Logika untuk Smooth Scrolling pada Navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// 2. Logika untuk Animasi Fade-in saat di-scroll (Intersection Observer)
const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

// 3. Mengaktifkan observer pada elemen dengan class 'fade-in'
document.querySelectorAll('.fade-in').forEach(section => {
    observer.observe(section);
});