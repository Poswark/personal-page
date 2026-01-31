// ===== NAVIGATION HANDLER =====
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Scroll spy
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
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

    // Smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const section = document.querySelector(href);
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}

// ===== SCROLL TO FUNCTION =====
function scrollTo(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===== DESCARGAR CV EN PDF =====
async function descargarCV() {
    try {
        const btn = document.getElementById('btn-download');
        const textoOriginal = btn.textContent;
        btn.textContent = '⏳ GENERATING...';
        btn.disabled = true;

        // Cargar librería html2pdf
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';

        script.onload = function() {
            const contenidoPDF = `
                <div style="font-family: 'Courier New', monospace; padding: 30px; color: #ffffff; background: #0a0e27;">
                    <div style="text-align: center; border-bottom: 2px solid #00ff88; padding-bottom: 20px; margin-bottom: 30px;">
                        <h1 style="color: #00ff88; font-size: 28px; margin: 0; letter-spacing: 2px;">GIOVANNY ORJUELA</h1>
                        <p style="color: #00d9ff; font-size: 14px; margin: 5px 0; letter-spacing: 1px;">DEVOPS & SRE ENGINEER</p>
                        <p style="color: #b0bec5; font-size: 11px; margin: 10px 0;">
                            📧 giovannyorjuel2@gmail.com | 📱 +57 311 479 3397 | 💼 linkedin.com/in/giovannyorjuel2 | 📍 Bogotá, Colombia
                        </p>
                    </div>

                    <div style="margin-bottom: 25px;">
                        <h2 style="color: #00ff88; border-left: 3px solid #00ff88; padding-left: 10px; font-size: 14px; margin-bottom: 10px; letter-spacing: 1px;">PROFILE</h2>
                        <p style="color: #b0bec5; font-size: 11px; line-height: 1.6;">
                            DevOps & SRE Specialist with 8+ years of experience optimizing critical infrastructure, automating processes, and reducing operational costs. 
                            Expert in Kubernetes, Jenkins, Ansible, Terraform, AWS, Azure, and FinOps. Proven track record of designing scalable, resilient architectures and implementing CI/CD pipelines.
                        </p>
                    </div>

                    <div style="margin-bottom: 25px;">
                        <h2 style="color: #00ff88; border-left: 3px solid #00ff88; padding-left: 10px; font-size: 14px; margin-bottom: 10px; letter-spacing: 1px;">EXPERIENCE</h2>
                        
                        <div style="margin-bottom: 15px;">
                            <h3 style="color: #00d9ff; font-size: 12px; margin-bottom: 3px;">DevOps & Infrastructure Specialist</h3>
                            <p style="color: #00ff88; font-size: 10px; font-weight: bold; margin-bottom: 2px;">SETI S.A.S | Bogotá, D.C. | Jan 2019 - Present (5+ years)</p>
                            <ul style="margin-left: 15px; font-size: 10px; color: #b0bec5; line-height: 1.6;">
                                <li>Designed & implemented Kubernetes HA reducing downtime by 40%</li>
                                <li>Created 50+ Ansible playbooks saving 25h/week of manual work</li>
                                <li>Deployed Jenkins CI/CD pipelines achieving 70% faster deployments</li>
                                <li>Implemented FinOps strategy optimizing cloud costs by 35%</li>
                                <li>Administered 50+ Linux/AIX servers maintaining 99.8% uptime</li>
                                <li>Deployed Helm charts for standardized Kubernetes deployments</li>
                                <li>Implemented Prometheus & Grafana monitoring with AI anomaly detection</li>
                            </ul>
                        </div>

                        <div style="margin-bottom: 15px;">
                            <h3 style="color: #00d9ff; font-size: 12px; margin-bottom: 3px;">Unix Systems Administrator</h3>
                            <p style="color: #00ff88; font-size: 10px; font-weight: bold; margin-bottom: 2px;">INDRA | Bogotá, D.C. | Jan 2018 - Dec 2018 (1 year)</p>
                            <ul style="margin-left: 15px; font-size: 10px; color: #b0bec5; line-height: 1.6;">
                                <li>UNIX Level 2 administration with SLA < 4h incident response</li>
                                <li>RHEL hardening on 20+ servers achieving 100% vulnerability remediation</li>
                                <li>High-impact incident management and escalation procedures</li>
                            </ul>
                        </div>

                        <div>
                            <h3 style="color: #00d9ff; font-size: 12px; margin-bottom: 3px;">Junior Administrator - IBM Pseries</h3>
                            <p style="color: #00ff88; font-size: 10px; font-weight: bold; margin-bottom: 2px;">DB-SYSTEM LTDA | Nov 2016 - Dec 2017 (1.2 years)</p>
                            <ul style="margin-left: 15px; font-size: 10px; color: #b0bec5; line-height: 1.6;">
                                <li>AIX servers administration and performance optimization</li>
                                <li>System performance monitoring (CPU, memory, I/O analysis)</li>
                                <li>Incident resolution maintaining 95% SLA compliance</li>
                            </ul>
                        </div>
                    </div>

                    <div style="margin-bottom: 25px;">
                        <h2 style="color: #00ff88; border-left: 3px solid #00ff88; padding-left: 10px; font-size: 14px; margin-bottom: 10px; letter-spacing: 1px;">TECHNICAL SKILLS</h2>
                        <div style="font-size: 10px; color: #b0bec5; line-height: 1.8;">
                            <p><span style="color: #00ff88; font-weight: bold;">Operating Systems:</span> Linux (RHEL, CentOS), AIX, Unix</p>
                            <p><span style="color: #00ff88; font-weight: bold;">Kubernetes & Orchestration:</span> Kubernetes HA, Helm, OpenShift, Docker, Docker Compose</p>
                            <p><span style="color: #00ff88; font-weight: bold;">CI/CD & Automation:</span> Jenkins, Ansible, Terraform, Infrastructure-as-Code</p>
                            <p><span style="color: #00ff88; font-weight: bold;">Cloud & FinOps:</span> AWS, Azure, Cost Optimization, Reserved Instances, Tagging</p>
                            <p><span style="color: #00ff88; font-weight: bold;">Programming:</span> Python (automation, APIs), Bash/Shell scripting</p>
                            <p><span style="color: #00ff88; font-weight: bold;">Monitoring:</span> Prometheus, Grafana, Alerting, ELK Stack</p>
                            <p><span style="color: #00ff88; font-weight: bold;">AI/ML Infrastructure:</span> Anomaly Detection, Capacity Prediction, MLOps</p>
                            <p><span style="color: #00ff88; font-weight: bold;">Security:</span> RBAC, Hardening, Vulnerability Management, Compliance</p>
                        </div>
                    </div>

                    <div style="margin-bottom: 25px;">
                        <h2 style="color: #00ff88; border-left: 3px solid #00ff88; padding-left: 10px; font-size: 14px; margin-bottom: 10px; letter-spacing: 1px;">CERTIFICATIONS</h2>
                        <ul style="margin-left: 15px; font-size: 10px; color: #b0bec5; line-height: 1.8;">
                            <li>Red Hat Certified System Administrator (RHCSA) - 2019 | ID: 190-028-894</li>
                            <li>The Linux Foundation: LFS158x - Introduction to Kubernetes - 2019</li>
                            <li>CertiProf: Scrum Foundation Professional (SFP) - 2020</li>
                        </ul>
                    </div>

                    <div>
                        <h2 style="color: #00ff88; border-left: 3px solid #00ff88; padding-left: 10px; font-size: 14px; margin-bottom: 10px; letter-spacing: 1px;">EDUCATION</h2>
                        <p style="color: #b0bec5; font-size: 10px;">
                            <span style="color: #00ff88; font-weight: bold;">Bachelor of Engineering - Systems Engineering</span><br>
                            Corporación Universitaria Remington | 2011 - 2015
                        </p>
                    </div>
                </div>
            `;

            const opt = {
                margin: 8,
                filename: 'Giovanny_Orjuela_DevOps_SRE.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            html2pdf().set(opt).from(contenidoPDF).save();

            setTimeout(() => {
                btn.textContent = textoOriginal;
                btn.disabled = false;
            }, 1500);
        };

        document.head.appendChild(script);

    } catch (error) {
        console.error('Error al descargar CV:', error);
        alert('Error generating PDF. Please try again.');
    }
}

// ===== TIMELINE ANIMATION =====
function initTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observador = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.5 });

    timelineItems.forEach(item => observador.observe(item));
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const elementos = document.querySelectorAll('.glass-card, .stat, .skill-category, .cert-card, .contact-item');

    const observador = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.animation = 'slideInUp 0.6s ease-out forwards';
                    entry.target.style.opacity = '0';
                }, index * 50);
            }
        });
    }, { threshold: 0.1 });

    elementos.forEach(element => observador.observe(element));
}

// ===== CURSOR GLOW EFFECT =====
function initCursorGlow() {
    const cursorGlow = document.querySelector('.cursor-glow');
    
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = (e.clientX - 200) + 'px';
        cursorGlow.style.top = (e.clientY - 200) + 'px';
    });
}

// ===== TERMINAL TYPING EFFECT =====
function initTerminalEffect() {
    const lines = document.querySelectorAll('.terminal-body .line:not(.output)');
    
    lines.forEach((line, index) => {
        line.style.animation = `slideInLeft 0.5s ease-out ${index * 0.1}s both`;
    });
}

// ===== BUTTON HANDLERS =====
function initButtonHandlers() {
    const downloadBtn = document.getElementById('btn-download');
    const contactBtn = document.getElementById('btn-contact');

    if (downloadBtn) {
        downloadBtn.addEventListener('click', descargarCV);
    }

    if (contactBtn) {
        contactBtn.addEventListener('click', () => {
            window.location.href = 'mailto:giovannyorjuel2@gmail.com?subject=Interested in DevOps Engineer';
        });
    }
}

// ===== AGREGAR ANIMACIONES CSS DINÁMICAS =====
function loadDynamicAnimations() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes slideInLeft {
            from {
                opacity: 0;
                transform: translateX(-30px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        .glass-card {
            animation: slideInUp 0.6s ease-out both;
        }

        button:active {
            transform: scale(0.98);
        }

        .nav-link {
            position: relative;
        }

        .nav-link::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background: #00ff88;
            transition: width 0.3s ease;
        }
    `;
    document.head.appendChild(style);
}

// ===== INICIALIZACIÓN =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Portfolio DevOps loaded successfully');
    
    initNavigation();
    initTimelineAnimation();
    initScrollAnimations();
    initCursorGlow();
    initTerminalEffect();
    initButtonHandlers();
    loadDynamicAnimations();

    // Fade in effect
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.8s ease-in';
    }, 50);
});

// ===== ERROR HANDLING =====
window.addEventListener('error', (event) => {
    console.error('Error:', event.error);
});