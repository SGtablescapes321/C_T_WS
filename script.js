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

// Chat Widget with Conversation Flow
function initChatWidget() {
    const chatWidget = document.getElementById('chatWidget');
    const chatToggle = document.getElementById('chatToggle');
    const chatClose = document.getElementById('chatClose');
    const chatBody = document.getElementById('chatBody');

    if (!chatWidget || !chatToggle || !chatBody) return;

    // Conversation data
    const conversations = {
        start: {
            message: "Hello! Welcome to Chantrieri' Tablescapes. I'm here to help you create something beautiful. What brings you here today?",
            options: [
                { text: "I'm planning an event", next: "eventType" },
                { text: "I want to see your work", next: "gallery" },
                { text: "Tell me about your services", next: "services" },
                { text: "I have questions", next: "questions" }
            ]
        },
        eventType: {
            message: "How exciting! We'd love to help make your event unforgettable. What kind of gathering are you planning?",
            options: [
                { text: "Intimate dinner / Date night", next: "intimate" },
                { text: "Tea party", next: "teaParty" },
                { text: "Wedding or engagement", next: "wedding" },
                { text: "Something else", next: "other" }
            ]
        },
        intimate: {
            message: "Our intimate table settings are perfect for romantic evenings or special one-on-one moments. We use vintage china, crystal glassware, and timeless decor to create an unforgettable atmosphere. Would you like to...",
            options: [
                { text: "Fill out our questionnaire", action: "scrollTo", target: "#connect" },
                { text: "See our collection", action: "scrollTo", target: "#gallery" },
                { text: "Email us directly", action: "email" },
                { text: "Go back", next: "start" }
            ]
        },
        teaParty: {
            message: "Our tea party settings range from proper Victorian elegance to whimsical Mad Hatter themes! We offer styles for bridal showers, girls' nights, Sweet 16s, and more. What sounds right for you?",
            options: [
                { text: "Classic & elegant", next: "teaClassic" },
                { text: "Whimsical & playful", next: "teaWhimsical" },
                { text: "Tell me more options", action: "scrollTo", target: "#offerings" },
                { text: "Go back", next: "eventType" }
            ]
        },
        teaClassic: {
            message: "Beautiful choice! Our Victorian and English tea settings feature fine china, crystal, and timeless elegance. Ready to start planning?",
            options: [
                { text: "Yes, let's begin!", action: "scrollTo", target: "#connect" },
                { text: "Show me examples first", action: "scrollTo", target: "#gallery" },
                { text: "Email us to discuss", action: "email" },
                { text: "Go back", next: "teaParty" }
            ]
        },
        teaWhimsical: {
            message: "How fun! Our Mad Hatter and storybook-inspired settings are full of character and charm. Perfect for memorable celebrations!",
            options: [
                { text: "I love it! Let's plan", action: "scrollTo", target: "#connect" },
                { text: "Show me the gallery", action: "scrollTo", target: "#gallery" },
                { text: "Email us to discuss", action: "email" },
                { text: "Go back", next: "teaParty" }
            ]
        },
        wedding: {
            message: "Congratulations! We specialize in creating stunning tablescapes for weddings and engagements. Every piece is carefully selected to reflect your unique love story.",
            options: [
                { text: "Fill out the questionnaire", action: "scrollTo", target: "#connect" },
                { text: "View our portfolio", action: "scrollTo", target: "#gallery" },
                { text: "Email us to schedule a call", action: "email" },
                { text: "Go back", next: "eventType" }
            ]
        },
        other: {
            message: "We love unique events! Whether it's a birthday, anniversary, photo shoot, or something entirely different, we can create the perfect setting. Tell us about your vision!",
            options: [
                { text: "Fill out our questionnaire", action: "scrollTo", target: "#connect" },
                { text: "Browse our collection", action: "scrollTo", target: "#gallery" },
                { text: "Email us your ideas", action: "email" },
                { text: "Go back", next: "eventType" }
            ]
        },
        gallery: {
            message: "Our collection features vintage china, crystal glassware, Depression glass, uranium glass, Victorian accents, and so much more. Each piece has its own story.",
            options: [
                { text: "View the gallery", action: "scrollTo", target: "#gallery" },
                { text: "Learn about Uranium Glow", next: "uranium" },
                { text: "I'm ready to plan my event", next: "eventType" },
                { text: "Go back", next: "start" }
            ]
        },
        uranium: {
            message: "The Uranium Glow Soirée is our signature experience! Featuring Depression glass and uranium glass that glows under special lighting, it's perfect for up to 15 guests who want something truly unique.",
            options: [
                { text: "I want this for my event!", action: "scrollTo", target: "#connect" },
                { text: "See more about it", action: "scrollTo", target: ".featured-experience" },
                { text: "Email to learn more", action: "email" },
                { text: "Go back", next: "gallery" }
            ]
        },
        services: {
            message: "We offer full-service tablescape design or item rentals so you can style your own. Everything we use is high-quality vintage—never plastic or mass-produced.",
            options: [
                { text: "Full tablescape design", next: "fullService" },
                { text: "Rent items myself", next: "rental" },
                { text: "What's included?", next: "included" },
                { text: "Go back", next: "start" }
            ]
        },
        fullService: {
            message: "With full-service design, we handle everything! From selecting pieces that match your vision to setting up your tablescape. You just show up—because you have enough on your plate.",
            options: [
                { text: "Perfect! Let's start", action: "scrollTo", target: "#connect" },
                { text: "See examples", action: "scrollTo", target: "#gallery" },
                { text: "Email for pricing", action: "email" },
                { text: "Go back", next: "services" }
            ]
        },
        rental: {
            message: "Love to DIY? Complete our questionnaire and we'll hand-select pieces based on your colors, theme, and style. You'll receive beautiful vintage items to arrange however you like!",
            options: [
                { text: "Fill out questionnaire", action: "scrollTo", target: "#connect" },
                { text: "Browse available pieces", action: "scrollTo", target: "#gallery" },
                { text: "Email with questions", action: "email" },
                { text: "Go back", next: "services" }
            ]
        },
        included: {
            message: "Our inventory includes fine china, crystal glassware, kerosene lamps, Italian art glass, Victorian accents, candelabras, linens, and unique conversation pieces. Every item is carefully curated.",
            options: [
                { text: "See the collection", action: "scrollTo", target: "#gallery" },
                { text: "Start planning", action: "scrollTo", target: "#connect" },
                { text: "Go back", next: "services" }
            ]
        },
        questions: {
            message: "Of course! What would you like to know?",
            options: [
                { text: "How does it work?", next: "howItWorks" },
                { text: "What areas do you serve?", next: "areas" },
                { text: "Can I see your work?", action: "scrollTo", target: "#gallery" },
                { text: "I'd rather email you", action: "email" }
            ]
        },
        howItWorks: {
            message: "It's simple! Fill out our questionnaire with your event details, colors, and vision. We'll review it and reach out within 24 hours to discuss options and help you create the perfect tablescape.",
            options: [
                { text: "Sounds great! Let's go", action: "scrollTo", target: "#connect" },
                { text: "What do you need to know?", action: "scrollTo", target: "#connect" },
                { text: "Email instead", action: "email" },
                { text: "Go back", next: "questions" }
            ]
        },
        areas: {
            message: "We'd be happy to discuss delivery and setup for your area! Please fill out our questionnaire or send us an email with your event location, and we'll let you know how we can help.",
            options: [
                { text: "Fill out questionnaire", action: "scrollTo", target: "#connect" },
                { text: "Email us", action: "email" },
                { text: "Go back", next: "questions" }
            ]
        }
    };

    let isFirstOpen = true;

    // Add message to chat
    function addMessage(text, isBot = true) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `chat-message ${isBot ? 'bot-message' : 'user-message'}`;
        msgDiv.innerHTML = `<p>${text}</p>`;
        chatBody.appendChild(msgDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Add options buttons
    function addOptions(options) {
        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'chat-options';

        options.forEach(opt => {
            const btn = document.createElement('button');
            btn.className = 'chat-option-btn';
            btn.textContent = opt.text;
            btn.addEventListener('click', () => handleOption(opt));
            optionsDiv.appendChild(btn);
        });

        chatBody.appendChild(optionsDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    // Handle option click
    function handleOption(option) {
        // Remove previous options
        const prevOptions = chatBody.querySelector('.chat-options:last-child');
        if (prevOptions) prevOptions.remove();

        // Show user's choice
        addMessage(option.text, false);

        // Small delay for natural feel
        setTimeout(() => {
            if (option.action === 'email') {
                addMessage("Great! I'll open your email app so you can reach us directly.");
                setTimeout(() => {
                    window.location.href = 'mailto:s.gtablescapes@gmail.com';
                    showConversation('start');
                }, 1000);
            } else if (option.action === 'scrollTo') {
                addMessage("Let me take you there!");
                setTimeout(() => {
                    chatWidget.classList.remove('is-open');
                    const target = document.querySelector(option.target);
                    if (target) {
                        const offsetTop = target.offsetTop - 100;
                        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                    }
                }, 800);
            } else if (option.next) {
                showConversation(option.next);
            }
        }, 400);
    }

    // Show a conversation step
    function showConversation(key) {
        const convo = conversations[key];
        if (!convo) return;

        setTimeout(() => {
            addMessage(convo.message);
            setTimeout(() => {
                addOptions(convo.options);
            }, 300);
        }, 300);
    }

    // Reset and start chat
    function startChat() {
        chatBody.innerHTML = '';
        showConversation('start');
    }

    // Toggle chat
    const toggleChat = () => {
        chatWidget.classList.toggle('is-open');
        if (chatWidget.classList.contains('is-open') && isFirstOpen) {
            isFirstOpen = false;
            startChat();
        }
    };

    chatToggle.addEventListener('click', toggleChat);

    if (chatClose) {
        chatClose.addEventListener('click', () => {
            chatWidget.classList.remove('is-open');
        });
    }

    // Close chat when clicking outside
    document.addEventListener('click', (e) => {
        if (chatWidget.classList.contains('is-open') &&
            !chatWidget.contains(e.target)) {
            chatWidget.classList.remove('is-open');
        }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && chatWidget.classList.contains('is-open')) {
            chatWidget.classList.remove('is-open');
        }
    });
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
    initChatWidget();

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
