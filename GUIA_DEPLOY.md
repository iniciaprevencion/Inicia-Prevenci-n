# Guía de despliegue · IniciaPrevención

Esta guía te lleva paso a paso desde tu repositorio local hasta tener `https://iniciaprevencion.cl` funcionando en producción, conectado a Vercel.

**Tiempo estimado:** 45-60 minutos
**Dificultad:** Intermedia (sin experiencia previa basta con seguir los pasos)

---

## Resumen del proceso

```
[Tu computador]  →  [GitHub]  →  [Vercel]  →  [NIC Chile DNS]  →  [iniciaprevencion.cl]
   archivos         repositorio    hosting        dominio          producción
```

---

## FASE 1 · Preparar tu computador

### 1.1 Instalar Git (si no lo tienes)

Descarga e instala Git desde https://git-scm.com/download/win — siguiente, siguiente, siguiente con los valores por defecto.

Verifica la instalación abriendo PowerShell o CMD:

```bash
git --version
```

Debe mostrarte algo como `git version 2.45.x`.

### 1.2 Configurar Git con tus datos

Solo la primera vez. Reemplaza con tu nombre y correo de GitHub:

```bash
git config --global user.name "Francisco Estay"
git config --global user.email "cisco.estay@gmail.com"
```

### 1.3 (Opcional) Instalar GitHub Desktop

Si prefieres interfaz gráfica en vez de comandos: https://desktop.github.com/

Recomendado si nunca has usado Git desde terminal.

---

## FASE 2 · Crear el repositorio en GitHub

### 2.1 Crear repositorio nuevo

1. Ingresa a https://github.com (debes haber iniciado sesión).
2. Click en el botón verde **"New"** (esquina superior izquierda) o ve directo a https://github.com/new
3. Completa:
   - **Repository name:** `iniciaprevencion-web`
   - **Description:** `Sitio web corporativo IniciaPrevención`
   - **Public** (para usar GitHub Pages gratis si Vercel falla)
   - **NO marques** ninguna opción de inicialización (README, .gitignore, license)
4. Click en **"Create repository"**

### 2.2 Anotar la URL del repositorio

GitHub te mostrará una URL como:

```
https://github.com/TU_USUARIO/iniciaprevencion-web.git
```

Anótala — la usarás en el siguiente paso.

---

## FASE 3 · Subir tus archivos por primera vez

### Opción A · Con línea de comandos (recomendada)

Abre PowerShell o CMD y navega a la carpeta del proyecto:

```bash
cd "C:\Users\Estay\Documents\Claude\Projects\CONSULTORIA\iniciaprevencion-web"
```

Inicializa Git y conecta con GitHub (reemplaza la URL):

```bash
git init
git branch -M main
git add .
git commit -m "Primer commit - estructura inicial del sitio"
git remote add origin https://github.com/TU_USUARIO/iniciaprevencion-web.git
git push -u origin main
```

GitHub te pedirá autenticarte. Si es la primera vez, abrirá una ventana del navegador para que confirmes el acceso. Después de unos segundos, tu código estará subido.

### Opción B · Con GitHub Desktop

1. Abre GitHub Desktop.
2. File → Add Local Repository → selecciona la carpeta `iniciaprevencion-web`.
3. Como no tiene Git inicializado, te ofrecerá "create a repository" — acepta.
4. Verás los archivos listados → escribe un summary "Primer commit" → click "Commit to main".
5. Click "Publish repository" → selecciona tu cuenta → Publish.

### 3.3 Verificar

Recarga la página de tu repositorio en GitHub. Deberías ver todos los archivos: `index.html`, `assets/`, `README.md`, etc.

---

## FASE 4 · Conectar Vercel

### 4.1 Crear cuenta en Vercel

1. Ve a https://vercel.com
2. Click en **"Sign Up"**
3. Selecciona **"Continue with GitHub"** (es la forma más rápida)
4. Autoriza a Vercel a acceder a tus repositorios

### 4.2 Importar el proyecto

1. En el dashboard de Vercel, click **"Add New..."** → **"Project"**
2. Te aparecerá la lista de tus repositorios de GitHub
3. Busca `iniciaprevencion-web` y haz click en **"Import"**

### 4.3 Configurar el deploy

Vercel detecta automáticamente que es HTML estático. Solo verifica:

- **Framework Preset:** `Other` (o lo dejas en automático)
- **Root Directory:** `./` (raíz del repo)
- **Build Command:** (déjalo vacío)
- **Output Directory:** (déjalo vacío)
- **Install Command:** (déjalo vacío)

Click en **"Deploy"**.

### 4.4 Esperar el primer deploy

En 30-60 segundos Vercel te muestra: **"Congratulations!"** y una URL temporal tipo:

```
https://iniciaprevencion-web.vercel.app
```

Abre esa URL — tu sitio ya está online en producción. 🎉

---

## FASE 5 · Conectar dominio iniciaprevencion.cl

### 5.1 Agregar el dominio en Vercel

1. En tu proyecto de Vercel, ve a **Settings** → **Domains**
2. En el campo "Add Domain" escribe: `iniciaprevencion.cl`
3. Click **"Add"**
4. Vercel te mostrará dos opciones. Selecciona **"Add www.iniciaprevencion.cl as a redirect"** (recomendado).
5. Vercel te entregará los registros DNS que debes configurar:

```
Tipo: A
Nombre: @
Valor: 76.76.21.21

Tipo: CNAME
Nombre: www
Valor: cname.vercel-dns.com
```

**IMPORTANTE:** Anota estos valores exactos que te muestra Vercel — pueden cambiar levemente.

### 5.2 Configurar DNS en NIC Chile

1. Ingresa a https://www.nic.cl con tu cuenta
2. Ve a **"Mis dominios"** → selecciona `iniciaprevencion.cl`
3. Busca la sección **"Servidores DNS"** o **"Zona DNS"**

**Opción A (recomendada): Usar DNS de Vercel directamente**

En NIC Chile, cambia los servidores DNS a los de Vercel:

```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

Después, en Vercel todo se configura automáticamente.

**Opción B: Mantener DNS de NIC Chile y crear registros**

Si quieres mantener el panel DNS en NIC Chile, crea estos registros:

| Tipo  | Nombre / Host | Valor / Apunta a       | TTL  |
|-------|---------------|------------------------|------|
| A     | @ (raíz)      | 76.76.21.21            | 3600 |
| CNAME | www           | cname.vercel-dns.com   | 3600 |

### 5.3 Esperar propagación DNS

Los cambios DNS pueden tardar entre **10 minutos y 24 horas** en propagarse. Normalmente en Chile demora 1-2 horas.

Puedes verificar el estado en https://dnschecker.org buscando `iniciaprevencion.cl`.

### 5.4 Vercel emite certificado SSL automático

Una vez que el DNS propaga, Vercel emite gratis el certificado SSL (Let's Encrypt). Tu sitio quedará disponible en:

- `https://iniciaprevencion.cl` ✓ con SSL
- `https://www.iniciaprevencion.cl` ✓ redirige a la versión sin www

---

## FASE 6 · Flujo de trabajo posterior

Cada vez que quieras actualizar el sitio:

### 6.1 Editar los archivos localmente

Modifica `index.html`, `styles.css` o lo que necesites.

### 6.2 Subir los cambios

```bash
cd "C:\Users\Estay\Documents\Claude\Projects\CONSULTORIA\iniciaprevencion-web"
git add .
git commit -m "Descripción del cambio"
git push origin main
```

### 6.3 Vercel actualiza automáticamente

En ~30 segundos verás los cambios reflejados en https://iniciaprevencion.cl

---

## Checklist de cierre

Marca cuando completes cada paso:

- [ ] Git instalado y configurado
- [ ] Cuenta GitHub creada y verificada
- [ ] Repositorio `iniciaprevencion-web` creado en GitHub
- [ ] Archivos subidos al repositorio (primer push)
- [ ] Cuenta Vercel creada (con login de GitHub)
- [ ] Proyecto importado en Vercel
- [ ] Primer deploy exitoso (URL `.vercel.app` funciona)
- [ ] Dominio `iniciaprevencion.cl` agregado en Vercel
- [ ] DNS configurado en NIC Chile (Vercel DNS o registros A/CNAME)
- [ ] Propagación DNS verificada (dnschecker.org)
- [ ] Sitio funcionando en `https://iniciaprevencion.cl` con SSL
- [ ] Personalización pendiente: teléfono, email Formspree, imagen OG, favicon ICO

---

## Soporte y recursos

**Git básico:**
- https://docs.github.com/es/get-started/start-your-journey

**Vercel docs:**
- https://vercel.com/docs/getting-started-with-vercel
- https://vercel.com/docs/projects/domains/working-with-domains

**NIC Chile:**
- https://www.nic.cl/contacto.html (soporte por correo)

**Verificar DNS:**
- https://dnschecker.org

---

## Errores comunes

**"Permission denied (publickey)" al hacer push**
→ Usa HTTPS en vez de SSH, o configura autenticación con token personal.
→ Tutorial: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens

**El sitio carga pero sin estilos**
→ Verifica que los archivos `assets/css/styles.css` se subieron al repo.
→ Revisa en F12 → Network si los CSS dan 404.

**Dominio no funciona después de 24 horas**
→ Verifica los registros DNS en NIC Chile.
→ Revisa que en Vercel el dominio aparezca con check verde.

**Vercel muestra "Domain configuration error"**
→ Significa que el DNS no apunta correctamente. Revisa los registros A y CNAME.

---

© 2026 · IniciaPrevención · Guía técnica de despliegue
