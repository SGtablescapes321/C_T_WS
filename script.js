/* =============================================
   CHANTRIERI - EDITORIAL INTERACTIONS
   ============================================= */

// Scroll Reveal Animation - Staggered, Magazine-Style
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal-fade');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger the reveal slightly for smoother flow
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 30);
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.08,
        rootMargin: '0px 0px -80px 0px'
    });
    
    revealElements.forEach(el => revealObserver.observe(el));
}

// Add reveal classes to elements
function addRevealClasses() {
    // Statement section
    const statementContent = document.querySelector('.statement-content');
    if (statementContent) statementContent.classList.add('reveal-fade');
    
    // Vision card
    const visionCard = document.querySelector('.vision-text-card');
    if (visionCard) visionCard.classList.add('reveal-fade');
    
    // Featured content
    const featuredContent = document.querySelector('.featured-content-diagonal');
    if (featuredContent) featuredContent.classList.add('reveal-fade');
    
    // Service cards
    document.querySelectorAll('.service-card-editorial').forEach((card, index) => {
        card.classList.add('reveal-fade');
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Gallery items
    document.querySelectorAll('.gallery-item').forEach((item, index) => {
        item.classList.add('reveal-fade');
        item.style.transitionDelay = `${(index % 10) * 0.05}s`;
    });
}

// Smooth Scroll for Navigation
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 100;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
}

// Mobile Navigation Toggle
function initMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close on link click
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
}

// Parallax Effect on Hero
function initHeroParallax() {
    const heroImage = document.querySelector('.hero-image');
    const heroContent = document.querySelector('.hero-content-float');
    
    if (!heroImage) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroHeight = document.querySelector('.hero-editorial').offsetHeight;
        
        if (scrolled < heroHeight) {
            const parallaxSpeed = scrolled * 0.5;
            if (heroImage) {
                heroImage.style.transform = `translateY(${parallaxSpeed}px)`;
            }
            
            if (heroContent) {
                const opacity = 1 - (scrolled / heroHeight);
                heroContent.style.opacity = Math.max(opacity, 0);
            }
        }
    });
}

// Form Enhancement
function initFormEnhancements() {
    const forms = [
        document.getElementById('stylingForm'),
        document.getElementById('quickForm')
    ].filter(Boolean);

    if (!forms.length) return;

    forms.forEach(form => {
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                if (input.parentElement) input.parentElement.classList.add('focused');
            });

            input.addEventListener('blur', () => {
                if (!input.value && input.parentElement) {
                    input.parentElement.classList.remove('focused');
                }
            });

            if (input.value && input.parentElement) {
                input.parentElement.classList.add('focused');
            }
        });
    });
}

// Contact Form Toggle (Questionnaire <-> Quick)
function initContactFormToggle() {
    const toggleButtons = document.querySelectorAll('[data-form-toggle]');
    const panels = document.querySelectorAll('[data-form-panel]');

    if (!toggleButtons.length || !panels.length) return;

    const setActive = (panelId) => {
        panels.forEach(panel => {
            const isActive = panel.id === panelId;
            panel.hidden = !isActive;
            panel.classList.toggle('is-active', isActive);
        });

        toggleButtons.forEach(btn => {
            const isActive = btn.getAttribute('data-form-toggle') === panelId;
            btn.classList.toggle('is-active', isActive);
            btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
            btn.tabIndex = isActive ? 0 : -1;
        });
    };

    toggleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const panelId = btn.getAttribute('data-form-toggle');
            if (panelId) setActive(panelId);
        });
    });

    const initial = Array.from(toggleButtons).find(b => b.getAttribute('aria-selected') === 'true');
    const initialPanelId = initial?.getAttribute('data-form-toggle') || panels[0].id;
    setActive(initialPanelId);
}

// Room Progress Indicator (subtle)
function initRoomProgress() {
    const sections = document.querySelectorAll('section');
    let currentRoom = 0;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionIndex = Array.from(sections).indexOf(entry.target);
                if (sectionIndex !== currentRoom) {
                    currentRoom = sectionIndex;
                    // Subtle console log for development
                    console.log(`Entering room ${currentRoom + 1}`);
                }
            }
        });
    }, {
        threshold: 0.5
    });
    
    sections.forEach(section => observer.observe(section));
}

// Initialize all functions
document.addEventListener('DOMContentLoaded', () => {
    addRevealClasses();
    initScrollReveal();
    initSmoothScroll();
    initMobileNav();
    initHeroParallax();
    initContactFormToggle();
    initFormEnhancements();
    initRoomProgress();
    
    console.log('✨ Chantrieri editorial experience loaded');
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        if (window.innerWidth > 768) {
            const navLinks = document.querySelector('.nav-links');
            const navToggle = document.getElementById('navToggle');
            if (navLinks) navLinks.classList.remove('active');
            if (navToggle) navToggle.classList.remove('active');
        }
    }, 250);
});
