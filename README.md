# 👨‍💻 Giovanny Orjuela — DevOps & SRE Engineer Portfolio

<div align="center">

![Portfolio Preview](images/profile.jpeg)

**🌐 [Ver Portfolio en Vivo](https://poswark.github.io)**  
[![LinkedIn](https://img.shields.io/badge/LinkedIn-giovannyorjuel2-0077B5?style=flat&logo=linkedin)](https://linkedin.com/in/giovannyorjuel2)
[![GitHub](https://img.shields.io/badge/GitHub-poswark-181717?style=flat&logo=github)](https://github.com/poswark)
[![Deploy](https://github.com/poswark/poswark.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/poswark/poswark.github.io/actions/workflows/deploy.yml)

</div>

---

## 🚀 Sobre este proyecto

Portfolio personal de **Giovanny Orjuela**, Ingeniero DevOps & SRE con 8+ años de experiencia en infraestructura crítica, automatización y cloud. Construido como sitio estático con HTML, CSS y JavaScript puro — sin frameworks, sin dependencias de build.

Incluye:
- ⚡ Diseño glassmorphism con animaciones CSS
- 🖥️ Terminal interactivo simulado en el hero
- 📄 Descarga de HV en PDF generada en el cliente
- 📱 Responsive design para mobile, tablet y desktop
- 🌐 Deploy automático a GitHub Pages vía GitHub Actions

---

## 🗂️ Estructura del proyecto

```
portfolio/
├── index.html          # Estructura principal del sitio
├── styles.css          # Estilos, variables CSS y responsive
├── script.js           # Lógica: navegación, animaciones, PDF
├── images/
│   └── profile.jpeg    # Foto de perfil
├── cv.pdf              # (Opcional) CV estático para descarga directa
├── .github/
│   └── workflows/
│       └── deploy.yml  # Pipeline de GitHub Actions
└── README.md
```

---

## 🛠️ Stack técnico

| Área | Tecnología |
|------|-----------|
| Frontend | HTML5, CSS3, Vanilla JS |
| PDF | [html2pdf.js](https://github.com/eKoopmans/html2pdf.js) (cargado dinámicamente) |
| Iconos | [Font Awesome 6](https://fontawesome.com) |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |

---

## ⚙️ Deploy

El sitio se despliega automáticamente a **GitHub Pages** al hacer push a la rama `trunk`.

```yaml
# .github/workflows/deploy.yml
on:
  push:
    branches: ["trunk"]
```

Para hacer deploy manualmente, ve a **Actions → Deploy static content to Pages → Run workflow**.

---

## 🖥️ Correr localmente

No requiere instalación. Simplemente sirve los archivos desde un servidor local:

```bash
# Con Python
python3 -m http.server 8080

# Con Node.js (npx)
npx serve .

# Con VS Code
# Instala la extensión Live Server y haz clic en "Go Live"
```

Luego abre `http://localhost:8080` en tu navegador.

> ⚠️ **Nota**: Abrir `index.html` directamente como archivo (`file://`) puede bloquear la carga de la foto de perfil por políticas CORS del browser. Usa siempre un servidor local.

---

## 📄 Personalización del CV descargable

El botón **"Descargar HV"** tiene dos modos:

1. **Archivo estático** *(recomendado)*: Si colocas un archivo `cv.pdf` en la raíz del proyecto, el botón lo descargará directamente. Más rápido y con mejor calidad tipográfica.

2. **Generación dinámica**: Si no hay `cv.pdf`, el script genera el PDF automáticamente en el navegador usando `html2pdf.js`.

Para usar el modo estático, simplemente agrega tu CV:
```bash
cp ~/Giovanny_Orjuela_CV.pdf ./cv.pdf
git add cv.pdf && git commit -m "feat: add static CV" && git push
```

---

## 📬 Contacto

| Canal | Info |
|-------|------|
| 💼 LinkedIn | [linkedin.com/in/giovannyorjuel2](https://linkedin.com/in/giovannyorjuel2) |

---

<div align="center">

© 2026 Giovanny Orjuela · Hecho con ❤️ en Bogotá

</div>