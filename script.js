// ===== PORTFOLIO DEVOPS - script.js =====
// Giovanny Orjuela | github.com/poswark

// ===== NAVIGATION HANDLER =====
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const section = document.querySelector(href);
                if (section) section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ===== SCROLL SUAVE =====
function smoothScrollTo(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
}

// ===== DESCARGA CV — descarga directa del archivo estático =====
function descargarCV() {
    const btn = document.getElementById('btn-download');
    if (btn.disabled) return;

    const textoOriginal = btn.textContent;
    btn.textContent = '↓ Descargando...';
    btn.disabled = true;

    // Descarga directa del archivo estático cv.pdf
    const enlace = document.createElement('a');
    //abrir otro tab con el pdf
    enlace.target = '_blank';
    enlace.href = 'cv.pdf';
    enlace.download = 'Giovanny_Orjuela_DevOps_SRE_CV.pdf';
    enlace.style.display = 'none';
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);

    // Restaurar botón después de un momento
    setTimeout(() => {
        btn.textContent = textoOriginal;
        btn.disabled = false;
    }, 2000);
}

// ===== TIMELINE ANIMATION =====
function initTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const observador = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('active');
        });
    }, { threshold: 0.2 });
    timelineItems.forEach(item => observador.observe(item));
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const elementos = document.querySelectorAll('.glass-card, .stat, .skill-category, .cert-card, .contact-item');
    const observador = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                }, index * 80);
            }
        });
    }, { threshold: 0.1 });

    elementos.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
    });
    elementos.forEach(element => observador.observe(element));
}

// ===== CURSOR GLOW =====
function initCursorGlow() {
    const cursorGlow = document.querySelector('.cursor-glow');
    if (!cursorGlow) return;
    if (window.matchMedia('(hover: none)').matches) {
        cursorGlow.style.display = 'none';
        return;
    }
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = (e.clientX - 200) + 'px';
        cursorGlow.style.top  = (e.clientY - 200) + 'px';
    });
}

// ===== TERMINAL TYPING EFFECT =====
function initTerminalEffect() {
    const lines = document.querySelectorAll('.terminal-body .line');
    lines.forEach((line, index) => {
        line.style.opacity = '0';
        line.style.animation = `slideInLeft 0.4s ease-out ${index * 0.15}s forwards`;
    });
}

// ===== BUTTON HANDLERS =====
function initButtonHandlers() {
    const downloadBtn = document.getElementById('btn-download');
    const contactBtn  = document.getElementById('btn-contact');

    if (downloadBtn) downloadBtn.addEventListener('click', descargarCV);
    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            window.location.href = 'mailto:giovannyorjuel2@gmail.com?subject=Hola%20Giovanny%20-%20Oportunidad%20DevOps';
        });
    }
}

// ===== ANIMACIONES CSS DINÁMICAS =====
function loadDynamicAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInUp {
            from { opacity: 0; transform: translateY(30px); }
            to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
            from { opacity: 0; transform: translateX(-20px); }
            to   { opacity: 1; transform: translateX(0); }
        }
        button:active { transform: scale(0.96); }
        .nav-link { position: relative; }
        .nav-link::before {
            content: '';
            position: absolute;
            bottom: 0; left: 0;
            width: 0; height: 2px;
            background: #00ff88;
            transition: width 0.3s ease;
        }
        .nav-link:hover::before,
        .nav-link.active::before { width: 100%; }
        #btn-download:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none !important;
        }
    `;
    document.head.appendChild(style);
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Portfolio DevOps — Giovanny Orjuela');

    initNavigation();
    initTimelineAnimation();
    initScrollAnimations();
    initCursorGlow();
    initTerminalEffect();
    initButtonHandlers();
    loadDynamicAnimations();

    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.8s ease-in';
    }, 50);
});

// ===== ERROR HANDLING =====
window.addEventListener('error', (e) => console.error('Error:', e.error));
window.addEventListener('unhandledrejection', (e) => console.error('Promise rejected:', e.reason));
// ===== END OF SCRIPT =====