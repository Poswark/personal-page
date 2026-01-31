// ===== NAVIGATION HANDLER =====
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    // Scroll spy
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
    const btn = document.getElementById('btn-download');

    // Evitar múltiples clics mientras se genera
    if (btn.disabled) return;

    const textoOriginal = btn.textContent;
    btn.textContent = '⏳ Generando...';
    btn.disabled = true;

    try {
        // Cargar html2pdf solo si todavía no está cargada
        if (typeof html2pdf === 'undefined') {
            await new Promise((resolve, reject) => {
                const script = document.createElement('script');
                script.src = 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            });
        }

        // Fecha dinámica para el footer del PDF
        const hoy = new Date();
        const fechaFormateada = hoy.toLocaleDateString('es-CO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const contenidoPDF = `
            <div style="font-family: 'Segoe UI', Arial, sans-serif; padding: 40px; color: #2c2c2c; background: #ffffff; min-height: 100vh; line-height: 1.6;">
                
                <!-- HEADER -->
                <div style="text-align: center; margin-bottom: 30px; padding-bottom: 22px; border-bottom: 2px solid #1a73e8;">
                    <img src="images/profile.jpeg" alt="Giovanny Orjuela" style="width: 95px; height: 95px; border-radius: 50%; object-fit: cover; border: 2px solid #1a73e8; margin-bottom: 12px;">
                    <h1 style="color: #1a1a1a; font-size: 26px; margin: 6px 0; font-weight: 700; letter-spacing: 0.5px;">GIOVANNY ORJUELA</h1>
                    <p style="color: #1a73e8; font-size: 13px; margin: 4px 0; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">DevOps & SRE Engineer</p>
                    <div style="color: #555; font-size: 10.5px; margin-top: 10px; line-height: 1.8;">
                        giovannyorjuel2@gmail.com &nbsp;|&nbsp; +57 311 479 3397&nbsp;|&nbsp; linkedin.com/in/giovannyorjuel2 &nbsp;|&nbsp; Bogotá, Colombia
                    </div>
                </div>

                <!-- RESUMEN PROFESIONAL -->
                <div style="margin-bottom: 22px;">
                    <h2 style="color: #1a1a1a; font-size: 11.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; padding-bottom: 6px; border-bottom: 1.5px solid #1a73e8;">Resumen Profesional</h2>
                    <p style="color: #555; font-size: 10.5px; line-height: 1.7; text-align: justify; margin: 0;">
                        Ingeniero DevOps & SRE especializado con 8+ años de experiencia optimizando infraestructura crítica, automatizando procesos y reduciendo costos operacionales. 
                        Experto en Kubernetes, Jenkins, Ansible, Terraform, AWS, Azure y FinOps. Diseño de arquitecturas escalables y resilientes con implementación de pipelines CI/CD eficientes. 
                        Pasión por la automatización de infraestructura y mejora continua.
                    </p>
                </div>

                <!-- EXPERIENCIA PROFESIONAL -->
                <div style="margin-bottom: 22px;">
                    <h2 style="color: #1a1a1a; font-size: 11.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px; padding-bottom: 6px; border-bottom: 1.5px solid #1a73e8;">Experiencia Profesional</h2>
                    
                    <!-- Scotiabank Colpatria - Directo -->
                    <div style="margin-bottom: 14px;">
                        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px;">
                            <h3 style="color: #1a1a1a; font-size: 10.5px; font-weight: 700; margin: 0;">DevOps y SRE Engineer</h3>
                            <span style="color: #666; font-size: 9.5px;">Ago 2023 - Actualidad</span>
                        </div>
                        <p style="color: #1a73e8; font-size: 9.5px; font-weight: 600; margin: 2px 0 6px 0;">Scotiabank Colpatria | Bogotá, D.C.</p>
                        <ul style="margin: 0; padding-left: 16px; font-size: 9.5px; color: #555;">
                            <li style="margin-bottom: 3px;">Migración de aplicaciones a cloud native infrastructure en GCP con Kubernetes</li>
                            <li style="margin-bottom: 3px;">Creación de playbooks en Ansible para automatización de tareas operativas</li>
                            <li style="margin-bottom: 3px;">Implementación de pipelines Jenkins CI/CD para el IDP del equipo</li>
                            <li style="margin-bottom: 3px;">Estrategia FinOps con optimización de costos cloud del 35%</li>
                            <li>Mejora de la resiliencia de aplicaciones en entornos cloud</li>
                        </ul>
                    </div>

                    <!-- Periferia IT Group - Scotiabank -->
                    <div style="margin-bottom: 14px;">
                        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px;">
                            <h3 style="color: #1a1a1a; font-size: 10.5px; font-weight: 700; margin: 0;">Site Reliability Engineer (SRE)</h3>
                            <span style="color: #666; font-size: 9.5px;">Jul 2021 - Ago 2023</span>
                        </div>
                        <p style="color: #1a73e8; font-size: 9.5px; font-weight: 600; margin: 2px 0 6px 0;">Periferia IT Group - Scotiabank Colpatria | Bogotá, D.C.</p>
                        <ul style="margin: 0; padding-left: 16px; font-size: 9.5px; color: #555;">
                            <li style="margin-bottom: 3px;">Creación de pipelines CI/CD con Jenkins</li>
                            <li style="margin-bottom: 3px;">Definición de SLO y SLI para sistemas críticos</li>
                            <li style="margin-bottom: 3px;">Diseño de soluciones orientadas a confiabilidad, disponibilidad, rendimiento, resiliencia y seguridad</li>
                            <li style="margin-bottom: 3px;">Desarrollo en Python y scripting para automatización</li>
                            <li>Implementación y mejora de informes postmortem</li>
                        </ul>
                    </div>

                    <!-- SETI - Cliente ATH -->
                    <div style="margin-bottom: 14px;">
                        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px;">
                            <h3 style="color: #1a1a1a; font-size: 10.5px; font-weight: 700; margin: 0;">Administrador Unix y Kubernetes</h3>
                            <span style="color: #666; font-size: 9.5px;">Ene 2019 - Jul 2021</span>
                        </div>
                        <p style="color: #1a73e8; font-size: 9.5px; font-weight: 600; margin: 2px 0 6px 0;">SETI S.A.S - Cliente ATH | Bogotá, D.C.</p>
                        <ul style="margin: 0; padding-left: 16px; font-size: 9.5px; color: #555;">
                            <li style="margin-bottom: 3px;">Administración de sistemas Linux RHEL 7</li>
                            <li style="margin-bottom: 3px;">Implementación y administración de clúster Kubernetes HA, Docker EE Mirantis Kubernetes Engine</li>
                            <li style="margin-bottom: 3px;">Creación de playbooks con Ansible</li>
                            <li style="margin-bottom: 3px;">Monitoreo de servidores mediante Grafana y Prometheus</li>
                            <li>Hardening de plataformas Red Hat 6 y 7</li>
                        </ul>
                    </div>

                    <!-- INDRA - Cliente Claro -->
                    <div style="margin-bottom: 14px;">
                        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px;">
                            <h3 style="color: #1a1a1a; font-size: 10.5px; font-weight: 700; margin: 0;">Administrador Unix</h3>
                            <span style="color: #666; font-size: 9.5px;">Ene 2018 - Dic 2018</span>
                        </div>
                        <p style="color: #1a73e8; font-size: 9.5px; font-weight: 600; margin: 2px 0 6px 0;">INDRA - Cliente Claro | Bogotá, D.C.</p>
                        <ul style="margin: 0; padding-left: 16px; font-size: 9.5px; color: #555;">
                            <li style="margin-bottom: 3px;">Administración de Sistema Operativo Unix nivel 2</li>
                            <li style="margin-bottom: 3px;">Solución de incidentes de complejidad mediana y alta</li>
                            <li style="margin-bottom: 3px;">Automatización de despliegues utilizando GitOps, Helm y Jenkins</li>
                            <li style="margin-bottom: 3px;">Gestión de alarmas de mediano y mayor impacto (RHEL y AIX)</li>
                            <li style="margin-bottom: 3px;">Remediación de vulnerabilidades y actualización de SO</li>
                            <li>Hardening de plataformas Red Hat 6 y 7</li>
                        </ul>
                    </div>

                    <!-- DB-SYSTEM -->
                    <div style="margin-bottom: 0;">
                        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 2px;">
                            <h3 style="color: #1a1a1a; font-size: 10.5px; font-weight: 700; margin: 0;">Administrador Sistemas Operativos Junior - IBM PSeries</h3>
                            <span style="color: #666; font-size: 9.5px;">Nov 2016 - Dic 2017</span>
                        </div>
                        <p style="color: #1a73e8; font-size: 9.5px; font-weight: 600; margin: 2px 0 6px 0;">DB-SYSTEM LTDA | Bogotá, D.C.</p>
                        <ul style="margin: 0; padding-left: 16px; font-size: 9.5px; color: #555;">
                            <li style="margin-bottom: 3px;">Administración y optimización de servidores AIX</li>
                            <li style="margin-bottom: 3px;">Gestión de monitoreo de performance (CPU, RAM, IO)</li>
                            <li style="margin-bottom: 3px;">Respuesta a requerimientos técnicos e incidentes de SO</li>
                            <li>Gestión de estado de usuarios, cambio de contraseñas y validación de parámetros</li>
                        </ul>
                    </div>
                </div>

                <!-- COMPETENCIAS TÉCNICAS -->
                <div style="margin-bottom: 20px;">
                    <h2 style="color: #1a1a1a; font-size: 11.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; padding-bottom: 6px; border-bottom: 1.5px solid #1a73e8;">Competencias Técnicas</h2>
                    <table style="width: 100%; border-collapse: collapse; font-size: 9.5px;">
                        <tr>
                            <td style="padding: 4px 0; color: #1a73e8; font-weight: 600; width: 28%;">Sistemas Operativos</td>
                            <td style="padding: 4px 0; color: #555;">Linux (RHEL, CentOS), AIX, Unix</td>
                        </tr>
                        <tr>
                            <td style="padding: 4px 0; color: #1a73e8; font-weight: 600;">Kubernetes & Orquestación</td>
                            <td style="padding: 4px 0; color: #555;">Kubernetes HA, Helm, OpenShift, Docker, Docker Compose</td>
                        </tr>
                        <tr>
                            <td style="padding: 4px 0; color: #1a73e8; font-weight: 600;">CI/CD & Automatización</td>
                            <td style="padding: 4px 0; color: #555;">Jenkins, Ansible, Terraform, Infrastructure-as-Code</td>
                        </tr>
                        <tr>
                            <td style="padding: 4px 0; color: #1a73e8; font-weight: 600;">Plataformas Cloud</td>
                            <td style="padding: 4px 0; color: #555;">AWS, Azure, GCP, FinOps, Optimización de Costos</td>
                        </tr>
                        <tr>
                            <td style="padding: 4px 0; color: #1a73e8; font-weight: 600;">Programación</td>
                            <td style="padding: 4px 0; color: #555;">Python, Bash/Shell, Scripting</td>
                        </tr>
                        <tr>
                            <td style="padding: 4px 0; color: #1a73e8; font-weight: 600;">Monitoreo & Observabilidad</td>
                            <td style="padding: 4px 0; color: #555;">Prometheus, Grafana, Alertas</td>
                        </tr>
                        <tr>
                            <td style="padding: 4px 0; color: #1a73e8; font-weight: 600;">IA & Machine Learning</td>
                            <td style="padding: 4px 0; color: #555;">Detección de Anomalías, Predicción de Capacidad, MLOps</td>
                        </tr>
                    </table>
                </div>

                <!-- CERTIFICACIONES -->
                <div style="margin-bottom: 20px;">
                    <h2 style="color: #1a1a1a; font-size: 11.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 8px; padding-bottom: 6px; border-bottom: 1.5px solid #1a73e8;">Certificaciones</h2>
                    
                    <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                        <div style="flex: 1; min-width: 45%;">
                            <p style="font-size: 9.5px; margin: 0 0 1px 0; color: #1a1a1a; font-weight: 600;">Red Hat Certified System Administrator (RHCSA)</p>
                            <p style="font-size: 9px; margin: 0 0 8px 0; color: #777;">2019 &nbsp;|&nbsp; ID: 190-028-894</p>

                            <p style="font-size: 9.5px; margin: 0 0 1px 0; color: #1a1a1a; font-weight: 600;">AWS Certified Cloud Practitioner (CLF-C01)</p>
                            <p style="font-size: 9px; margin: 0 0 8px 0; color: #777;">2022 &nbsp;|&nbsp; Certificate of Completion</p>

                            <p style="font-size: 9.5px; margin: 0 0 1px 0; color: #1a1a1a; font-weight: 600;">Harness Chaos Engineering</p>
                            <p style="font-size: 9px; margin: 0; color: #777;">2023 &nbsp;|&nbsp; Harness University Course</p>
                        </div>
                        <div style="flex: 1; min-width: 45%;">
                            <p style="font-size: 9.5px; margin: 0 0 1px 0; color: #1a1a1a; font-weight: 600;">Kubernetes and Cloud Native Essentials (LFS250)</p>
                            <p style="font-size: 9px; margin: 0 0 8px 0; color: #777;">2024 &nbsp;|&nbsp; Certificate of Completion</p>

                            <p style="font-size: 9.5px; margin: 0 0 1px 0; color: #1a1a1a; font-weight: 600;">LFS169: Introduction to GitOps</p>
                            <p style="font-size: 9px; margin: 0; color: #777;">2024 &nbsp;|&nbsp; Certificate of Completion</p>
                        </div>
                    </div>
                </div>

                <!-- LOGROS CLAVE -->
                <div style="margin-bottom: 18px; background: #f0f4ff; padding: 10px 12px; border-left: 3px solid #1a73e8; border-radius: 0 4px 4px 0;">
                    <h2 style="color: #1a1a1a; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 7px 0;">Logros Clave</h2>
                    <ul style="padding-left: 16px; font-size: 9.5px; color: #555; margin: 0;">
                        <li style="margin-bottom: 3px;"><strong>Optimización de costos:</strong> Reducción del 35% en costos cloud mediante estrategias FinOps</li>
                        <li style="margin-bottom: 3px;"><strong>Automatización:</strong> Playbooks Ansible que eliminan tareas manuales repetitivas</li>
                        <li style="margin-bottom: 3px;"><strong>CI/CD:</strong> Pipelines Jenkins que acelerad el ciclo de despliegue</li>
                        <li style="margin-bottom: 3px;"><strong>Alta disponibilidad:</strong> Clústeres Kubernetes HA en entornos de producción</li>
                        <li><strong>Observabilidad:</strong> Stack de monitoreo con Prometheus y Grafana en 50+ servidores</li>
                    </ul>
                </div>

                <!-- FOOTER -->
                <div style="text-align: center; border-top: 1px solid #ddd; padding-top: 12px; margin-top: 14px;">
                    <p style="color: #999; font-size: 8.5px; margin: 0; line-height: 1.6;">
                        Giovanny Orjuela | DevOps & SRE Engineer | giovannyorjuel2@gmail.com<br>
                        linkedin.com/in/giovannyorjuel2 | Bogotá, Colombia<br>
                        <span style="color: #1a73e8; font-size: 7.5px;">CV generado el ${fechaFormateada}</span>
                    </p>
                </div>
            </div>
        `;

        const opt = {
            margin: 8,
            filename: 'Giovanny_Orjuela_DevOps_SRE_CV.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2.5, useCORS: true },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };

        await html2pdf().set(opt).from(contenidoPDF).save();

    } catch (error) {
        console.error('Error al generar PDF:', error);
        alert('Error al generar el CV. Por favor intenta nuevamente.');
    } finally {
        // Restaurar botón siempre, sin importar si hubo error o no
        btn.textContent = '↓ Descargar HV';
        btn.disabled = false;
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

    // Estado inicial oculto
    elementos.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
    });

    elementos.forEach(element => observador.observe(element));
}

// ===== CURSOR GLOW EFFECT =====
function initCursorGlow() {
    const cursorGlow = document.querySelector('.cursor-glow');
    if (!cursorGlow) return;

    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = (e.clientX - 200) + 'px';
        cursorGlow.style.top = (e.clientY - 200) + 'px';
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

// ===== ANIMACIONES CSS DINÁMICAS =====
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
                transform: translateX(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        button:active {
            transform: scale(0.96);
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

        .nav-link:hover::before,
        .nav-link.active::before {
            width: 100%;
        }

        /* Botón descarga deshabilitado */
        #btn-download:disabled {
            opacity: 0.6;
            cursor: not-allowed;
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

    // Fade in inicial de la página
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
window.addEventListener('unhandledrejection', (event) => {
    console.error('Promise rejected:', event.reason);
});
// ===== END OF SCRIPT =====
