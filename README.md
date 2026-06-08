# IniciaPrevención · Sitio web corporativo

Sitio web oficial de **IniciaPrevención**, consultora chilena especializada en Prevención de Riesgos, Seguridad y Salud Ocupacional.

**URL producción:** https://iniciaprevencion.cl

## Stack técnico

- HTML5 semántico
- CSS3 (sin frameworks, custom properties)
- JavaScript vanilla (sin dependencias)
- Fonts: Montserrat + Open Sans (Google Fonts)
- Hosting: **Vercel** (deploy automático desde GitHub)
- Dominio: NIC Chile (iniciaprevencion.cl)

## Estructura del proyecto

```
iniciaprevencion-web/
├── index.html              Página principal
├── 404.html                Página de error 404
├── robots.txt              Directivas para crawlers
├── sitemap.xml             Mapa del sitio para SEO
├── vercel.json             Configuración de deploy Vercel
├── README.md               Este archivo
├── .gitignore              Archivos excluidos del repo
└── assets/
    ├── css/
    │   └── styles.css      Hoja de estilos principal
    ├── js/
    │   └── main.js         JavaScript principal
    └── img/
        ├── favicon.svg     Favicon vectorial
        └── og-image.jpg    Imagen Open Graph (pendiente)
```

## Desarrollo local

Para previsualizar en tu computador no necesitas instalar nada complejo. Tienes dos opciones:

**Opción 1: Abrir directamente en navegador**

Doble click sobre `index.html` y se abre en tu navegador predeterminado.

**Opción 2: Servidor local con Python (recomendado)**

```bash
# Desde la carpeta del proyecto
python -m http.server 8000
```

Luego abre http://localhost:8000

**Opción 3: Live Server (Visual Studio Code)**

Instala la extensión "Live Server" y haz click derecho sobre `index.html` → "Open with Live Server".

## Deploy a producción

Cada `git push` a la rama `main` despliega automáticamente en Vercel.

```bash
git add .
git commit -m "Descripción del cambio"
git push origin main
```

Vercel detecta el cambio y publica en ~30 segundos.

## Personalización pendiente

Antes de publicar definitivamente, reemplazar los siguientes placeholders en `index.html`:

- [ ] `+56 9 XXXX XXXX` → número de teléfono real
- [ ] `https://formspree.io/f/REEMPLAZAR_ID` → ID real de Formspree o servicio de formulario
- [ ] `assets/img/og-image.jpg` → imagen Open Graph (1200×630px)
- [ ] `assets/img/apple-touch-icon.png` → icono Apple (180×180px)
- [ ] `assets/img/favicon.ico` → favicon en formato ICO para compatibilidad

## SEO checklist

- [x] Meta description y keywords configurados
- [x] Open Graph y Twitter Cards
- [x] Schema.org (ProfessionalService)
- [x] Canonical URL
- [x] Sitemap.xml
- [x] Robots.txt
- [ ] Google Search Console (verificar dominio)
- [ ] Google Analytics 4 (insertar ID)
- [ ] Google Business Profile (crear ficha)

## Licencia

Propietario · IniciaPrevención © 2026
