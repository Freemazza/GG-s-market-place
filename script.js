// Mobile Menu Toggle
const mobileBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Optional: change icon (hamburger ↔ close)
    if (navLinks.classList.contains('active')) {
        mobileBtn.textContent = '✕';
    } else {
        mobileBtn.textContent = '☰';
    }
});

// Smooth Scrolling for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu after click
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    mobileBtn.textContent = '☰';
                }
            }
        }
    });
});

// Sticky Navbar + Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.backgroundColor = '#ffffff';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Simple Contact Form Handling
const contactForm = document.querySelector('.contact form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // You can add real form submission (Fetch/API) here later
        alert('Thank you! Your message has been received. We will get back to you soon. 😊');
        
        // Reset form
        this.reset();
    });
}

// Optional: Simple counter animation for stats (if you add any)
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const increment = target / 100;
        
        const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
                counter.textContent = target;
                clearInterval(timer);
            } else {
                counter.textContent = Math.ceil(count);
            }
        }, 20);
    });
}

// Trigger counters when scrolled into view (optional)
window.addEventListener('scroll', () => {
    // Add your counters with class="counter" and data-target="123" if needed
});
