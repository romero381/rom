import anime from 'animejs';

document.addEventListener('DOMContentLoaded', () => {

    // --- Mobile Menu ---
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    if (menuBtn && navLinks) {
        // Add close icon
        const closeIcon = document.createElement('i');
        closeIcon.classList.add('fas', 'fa-times');
        menuBtn.appendChild(closeIcon);

        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.classList.toggle('close');
        });
    }

    // --- Active Nav Link ---
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // --- Page Load Animations ---
    anime({
        targets: '.main-heading, .sub-heading',
        translateY: [20, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, {start: 200}),
        easing: 'easeOutExpo',
        duration: 1000
    });

    anime({
        targets: '.card, .btn',
        translateY: [30, 0],
        opacity: [0, 1],
        delay: anime.stagger(100, {start: 400}),
        easing: 'easeOutExpo',
        duration: 1200
    });

    // --- Contact Form ---
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const status = document.querySelector('#form-status');
            status.textContent = 'Sending...';
            status.style.color = 'var(--text-muted)';
            
            // Simulate form submission
            setTimeout(() => {
                status.textContent = 'Message sent successfully!';
                status.style.color = 'var(--primary-color)';
                contactForm.reset();
                setTimeout(() => {
                    status.textContent = '';
                }, 5000);
            }, 1500);
        });
    }
});

