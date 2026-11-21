// ===== PORTFOLIO DEVOPS - script.js =====
// Giovanny Orjuela | github.com/poswark

// ===== TRANSLATIONS DICTIONARY =====
const translations = {
    es: {
        "nav.home": "Inicio",
        "nav.about": "Acerca",
        "nav.experience": "Experiencia",
        "nav.skills": "Skills",
        "nav.contact": "Contacto",
        "nav.download": "↓ Descargar HV",
        "nav.download_aria": "Descargar hoja de vida en PDF",
        "nav.downloading": "↓ Descargando...",
        "hero.subtitle": "DevOps & SRE Engineer",
        "hero.description": "8+ años optimizando infraestructuras críticas, automatizando procesos y reduciendo costos operacionales. Especialista en Kubernetes, Jenkins, Ansible y Cloud Architecture.",
        "hero.btn_about": "Más sobre mí",
        "hero.btn_contact": "Contactar",
        "hero.scroll": "Scroll to discover",
        "about.title": "Acerca de mí",
        "about.whoami_title": "#whoami",
        "about.whoami_desc": "Ingeniero especializado en infraestructura moderna y operaciones en la nube. Mi pasión es transformar operaciones manuales en automatización inteligente, reduciendo costos y mejorando la confiabilidad de sistemas críticos.",
        "about.focus_title": "Enfoque",
        "about.focus_desc": "DevOps & SRE: Diseño de pipelines CI/CD, automatización con Ansible, orquestación Kubernetes y optimización de costos cloud (FinOps).",
        "about.stack_title": "Tech Stack",
        "about.stack_desc": "Kubernetes · Docker · Jenkins · Terraform · Ansible · Python · AWS · Azure · Prometheus · Grafana · IA/ML para infraestructura",
        "about.achieve_title": "Logros",
        "about.achieve_desc": "Impulsar transformación digital mediante infraestructura automatizada, observabilidad avanzada y arquitecturas cloud-native resilientes.",
        "stats.exp": "Años de Experiencia",
        "stats.servers": "Servidores Administrados",
        "stats.uptime": "Disponibilidad",
        "stats.certs": "Certificaciones",
        "exp.title": "Experiencia",
        "exp.scotia.role": "DevOps y SRE Engineer",
        "exp.scotia.date": '<time datetime="2023-08">Agosto 2023</time> — Actualidad',
        "exp.scotia.task1": "Migrar aplicaciones a cloud native infrastructure GCP - Kubernetes",
        "exp.scotia.task2": "Crear playbooks en Ansible para automatización de tareas",
        "exp.scotia.task3": "Jenkins CI/CD pipelines para nuestro IDP",
        "exp.scotia.task4": "Implementar la estrategia de FinOps | 35% cloud cost optimization",
        "exp.scotia.task5": "Mejorar la resiliencia de las aplicaciones en entornos cloud",
        "exp.periferia.role": "Site Reliability Engineering (SRE)",
        "exp.periferia.date": '<time datetime="2021-07">Julio 2021</time> — <time datetime="2023-08">Agosto 2023</time>',
        "exp.periferia.task1": "Creación de CI/CD con Jenkins",
        "exp.periferia.task2": "Definición de SLO y SLI",
        "exp.periferia.task3": "Diseño de soluciones orientadas a confiabilidad, disponibilidad, rendimiento, resiliencia, seguridad y automatización",
        "exp.periferia.task4": "Lenguaje de programación Python y scripting",
        "exp.periferia.task5": "Implementación y mejora de informes postmortem",
        "exp.seti.role": "Administrador Unix y Kubernetes",
        "exp.seti.company": "SETI S.A.S - Cliente ATH",
        "exp.seti.date": '<time datetime="2019-01">Enero 2019</time> — <time datetime="2021-07">Julio 2021</time>',
        "exp.seti.task1": "Administración de Sistema Operativo Linux RHEL 7",
        "exp.seti.task2": "Implementar y administrar clúster de Kubernetes HA, Docker EE Mirantis Kubernetes Engine",
        "exp.seti.task3": "Implementación de playbooks con Ansible",
        "exp.seti.task4": "Monitoreo de servidores mediante Grafana y Prometheus",
        "exp.seti.task5": "Hardening de las plataformas administradas (Red Hat 6 y 7)",
        "exp.indra.role": "Administrador Unix",
        "exp.indra.company": "INDRA - Cliente Claro",
        "exp.indra.date": '<time datetime="2018-01">Enero 2018</time> — <time datetime="2018-12">Diciembre 2018</time>',
        "exp.indra.task1": "Administración de Sistema Operativo Unix nivel 2",
        "exp.indra.task2": "Solución de incidentes de complejidad mediana y alta",
        "exp.indra.task3": "Automatización de despliegues utilizando GitOps, Helm y Jenkins",
        "exp.indra.task4": "Gestión de alarmas de mediano y mayor impacto (RHEL y AIX)",
        "exp.indra.task5": "Remediación de vulnerabilidades y actualización de los SO",
        "exp.indra.task6": "Hardening de las plataformas administradas (Red Hat 6 y 7)",
        "exp.dbsystem.role": "Administrador Sistemas Operativos Junior - IBM PSeries",
        "exp.dbsystem.date": '<time datetime="2016-11">Noviembre 2016</time> — <time datetime="2017-12">Diciembre 2017</time>',
        "exp.dbsystem.task1": "Administración y optimización de servidores AIX",
        "exp.dbsystem.task2": "Gestión de monitoreo de performance (CPU, RAM, IO)",
        "exp.dbsystem.task3": "Respuesta a requerimientos técnicos e incidentes de SO",
        "exp.dbsystem.task4": "Gestión de estado de usuarios, cambio de contraseñas y validación de parámetros",
        "skills.title": "Habilidades y Experiencia",
        "skills.os": "🐧 Sistemas Operativos",
        "skills.k8s": "☸️ Kubernetes & Orquestación",
        "skills.containers": "🐳 Contenedorización",
        "skills.cicd": "⚙️ CI/CD & Automatización",
        "skills.cloud": "☁️ Plataformas Cloud",
        "skills.programming": "🐍 Programación",
        "skills.monitoring": "📊 Monitoreo & Observabilidad",
        "skills.ai": "🤖 IA & Machine Learning",
        "skills.ai_anomalies": "Detección de Anomalías",
        "skills.ai_capacity": "Predicción de Capacidad",
        "skills.languages": "🌐 Idiomas",
        "skills.lang_es": "Español (Nativo)",
        "skills.lang_en": "Inglés (B1 - Intermedio)",
        "certs.title": "Certificaciones",
        "certs.subtitle": "Revise aquí los certificados que he obtenido hasta el momento.",
        "certs.credly": "Ver todos en Credly →",
        "certs.credly_aria": "Ver todas las certificaciones en Credly (abre en nueva pestaña)",
        "contact.title": "Contacto",
        "contact.email": "Correo electrónico",
        "contact.phone": "Teléfono",
        "contact.linkedin": "LinkedIn",
        "contact.location": "Ubicación",
        "footer.copy": "© 2026 Giovanny Orjuela. ❤️ Todos los derechos reservados."
    },
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.skills": "Skills",
        "nav.contact": "Contact",
        "nav.download": "↓ Download CV",
        "nav.download_aria": "Download resume in PDF",
        "nav.downloading": "↓ Downloading...",
        "hero.subtitle": "DevOps & SRE Engineer",
        "hero.description": "8+ years optimizing critical infrastructure, automating processes, and reducing operational costs. Specialist in Kubernetes, Jenkins, Ansible, and Cloud Architecture.",
        "hero.btn_about": "More about me",
        "hero.btn_contact": "Contact",
        "hero.scroll": "Scroll to discover",
        "about.title": "About Me",
        "about.whoami_title": "#whoami",
        "about.whoami_desc": "Engineer specializing in modern infrastructure and cloud operations. My passion is transforming manual operations into intelligent automation, reducing costs, and improving the reliability of critical systems.",
        "about.focus_title": "Focus",
        "about.focus_desc": "DevOps & SRE: CI/CD pipeline design, automation with Ansible, Kubernetes orchestration, and cloud cost optimization (FinOps).",
        "about.stack_title": "Tech Stack",
        "about.stack_desc": "Kubernetes · Docker · Jenkins · Terraform · Ansible · Python · AWS · Azure · Prometheus · Grafana · AI/ML for infrastructure",
        "about.achieve_title": "Key Achievements",
        "about.achieve_desc": "Driving digital transformation through automated infrastructure, advanced observability, and resilient cloud-native architectures.",
        "stats.exp": "Years of Experience",
        "stats.servers": "Managed Servers",
        "stats.uptime": "Uptime",
        "stats.certs": "Certifications",
        "exp.title": "Experience",
        "exp.scotia.role": "DevOps & SRE Engineer",
        "exp.scotia.date": '<time datetime="2023-08">August 2023</time> — Present',
        "exp.scotia.task1": "Migrate applications to GCP cloud-native infrastructure - Kubernetes",
        "exp.scotia.task2": "Create Ansible playbooks for task automation",
        "exp.scotia.task3": "Jenkins CI/CD pipelines for our Internal Developer Platform (IDP)",
        "exp.scotia.task4": "Implement FinOps strategy | 35% cloud cost optimization",
        "exp.scotia.task5": "Improve application resilience in cloud environments",
        "exp.periferia.role": "Site Reliability Engineer (SRE)",
        "exp.periferia.date": '<time datetime="2021-07">July 2021</time> — <time datetime="2023-08">August 2023</time>',
        "exp.periferia.task1": "CI/CD pipeline creation with Jenkins",
        "exp.periferia.task2": "Definition of SLOs and SLIs",
        "exp.periferia.task3": "Design solutions focused on reliability, availability, performance, resilience, security, and automation",
        "exp.periferia.task4": "Python programming language and scripting",
        "exp.periferia.task5": "Implementation and improvement of post-mortem reports",
        "exp.seti.role": "Unix & Kubernetes Administrator",
        "exp.seti.company": "SETI S.A.S - ATH Client",
        "exp.seti.date": '<time datetime="2019-01">January 2019</time> — <time datetime="2021-07">July 2021</time>',
        "exp.seti.task1": "Linux RHEL 7 Operating System administration",
        "exp.seti.task2": "Deploy and administer Kubernetes HA clusters, Docker EE Mirantis Kubernetes Engine",
        "exp.seti.task3": "Ansible playbook implementation",
        "exp.seti.task4": "Server monitoring using Grafana and Prometheus",
        "exp.seti.task5": "Hardening of managed platforms (Red Hat 6 and 7)",
        "exp.indra.role": "Unix Administrator",
        "exp.indra.company": "INDRA - Claro Client",
        "exp.indra.date": '<time datetime="2018-01">January 2018</time> — <time datetime="2018-12">December 2018</time>',
        "exp.indra.task1": "Tier 2 Unix Operating System administration",
        "exp.indra.task2": "Troubleshooting and resolution of mid and high complexity incidents",
        "exp.indra.task3": "Deployment automation using GitOps, Helm, and Jenkins",
        "exp.indra.task4": "Management of medium and major impact alarms (RHEL and AIX)",
        "exp.indra.task5": "Vulnerability remediation and OS updates",
        "exp.indra.task6": "Hardening of managed platforms (Red Hat 6 and 7)",
        "exp.dbsystem.role": "Junior OS Administrator - IBM Power Systems",
        "exp.dbsystem.date": '<time datetime="2016-11">November 2016</time> — <time datetime="2017-12">December 2017</time>',
        "exp.dbsystem.task1": "AIX server administration and performance optimization",
        "exp.dbsystem.task2": "Performance monitoring management (CPU, RAM, I/O)",
        "exp.dbsystem.task3": "Resolution of technical requests and OS incidents",
        "exp.dbsystem.task4": "User management, password policies, and parameter validation",
        "skills.title": "Skills & Experience",
        "skills.os": "🐧 Operating Systems",
        "skills.k8s": "☸️ Kubernetes & Orchestration",
        "skills.containers": "🐳 Containerization",
        "skills.cicd": "⚙️ CI/CD & Automation",
        "skills.cloud": "☁️ Cloud Platforms",
        "skills.programming": "🐍 Programming",
        "skills.monitoring": "📊 Monitoring & Observability",
        "skills.ai": "🤖 AI & Machine Learning",
        "skills.ai_anomalies": "Anomaly Detection",
        "skills.ai_capacity": "Capacity Forecasting",
        "skills.languages": "🌐 Languages",
        "skills.lang_es": "Spanish (Native)",
        "skills.lang_en": "English (B1 - Intermediate)",
        "certs.title": "Certifications",
        "certs.subtitle": "Explore the certifications I have obtained so far.",
        "certs.credly": "View all on Credly →",
        "certs.credly_aria": "View all certifications on Credly (opens in new tab)",
        "contact.title": "Contact",
        "contact.email": "Email",
        "contact.phone": "Phone",
        "contact.linkedin": "LinkedIn",
        "contact.location": "Location",
        "footer.copy": "© 2026 Giovanny Orjuela. ❤️ All rights reserved."
    }
};

// ===== LANGUAGE HANDLER =====
let currentLang = 'es';

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    document.documentElement.lang = lang;

    // Actualizar elementos con data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key] !== undefined) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Actualizar atributos aria con data-i18n-aria
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        if (translations[lang][key] !== undefined) {
            el.setAttribute('aria-label', translations[lang][key]);
        }
    });

    // Actualizar botones de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        const btnLang = btn.getAttribute('data-lang');
        const isActive = btnLang === lang;
        btn.classList.toggle('active', isActive);
        btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    // Guardar preferencia del usuario
    try {
        localStorage.setItem('portfolio_lang', lang);
    } catch (e) {
        /* storage error handling */
    }
}

function initLanguage() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            if (lang && lang !== currentLang) {
                setLanguage(lang);
            }
        });
    });

    // Por defecto es 'es' (mantener como está). Si guardó 'en', aplicar inglés.
    let savedLang = 'es';
    try {
        savedLang = localStorage.getItem('portfolio_lang') || 'es';
    } catch (e) {
        savedLang = 'es';
    }

    if (savedLang === 'en') {
        setLanguage('en');
    } else {
        setLanguage('es');
    }
}

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

// ===== DESCARGA CV — descarga según el idioma seleccionado =====
function descargarCV() {
    const btn = document.getElementById('btn-download');
    if (!btn || btn.disabled) return;

    const span = btn.querySelector('[data-i18n]') || btn;
    const textoOriginal = span.innerHTML;
    const msgDescargando = translations[currentLang]?.["nav.downloading"] || (currentLang === 'en' ? '↓ Downloading...' : '↓ Descargando...');
    span.textContent = msgDescargando;
    btn.disabled = true;

    // Archivo y nombre de descarga según el idioma actual
    const isEnglish = currentLang === 'en';
    const archivoCV = isEnglish ? 'cv-en.pdf' : 'cv.pdf';
    const nombreDescarga = isEnglish 
        ? 'Giovanny_Orjuela_DevOps_SRE_Resume_EN.pdf' 
        : 'Giovanny_Orjuela_DevOps_SRE_CV_ES.pdf';

    const enlace = document.createElement('a');
    enlace.target = '_blank';
    enlace.href = archivoCV;
    enlace.download = nombreDescarga;
    enlace.style.display = 'none';
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);

    // Restaurar botón después de un momento
    setTimeout(() => {
        span.innerHTML = translations[currentLang]?.["nav.download"] || textoOriginal;
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
            const subject = currentLang === 'en'
                ? 'Hello%20Giovanny%20-%20DevOps%20Opportunity'
                : 'Hola%20Giovanny%20-%20Oportunidad%20DevOps';
            window.location.href = `mailto:giovannyorjuel2@gmail.com?subject=${subject}`;
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

    initLanguage();
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
