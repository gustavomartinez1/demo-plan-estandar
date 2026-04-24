# Veltrux Wedding — Plan Estándar

Plantilla de sitio de bodas para el Plan Estándar de Veltrux.

## 📁 Estructura del Proyecto

```
/
├── index.html           # Página principal (single page)
├── styles.css           # Estilos personalizados + Tailwind CDN
├── main.js              # Countdown, Lightbox, Animaciones, RSVP
├── assets/
│   ├── hero.jpg         # Foto principal del hero (1920x1080 recomendado)
│   ├── gallery/
│   │   ├── 01.jpg ... 09.jpg  # Fotos de la galería (1200x1200 recomendado)
│   └── favicon.ico      # Ícono del sitio
└── .github/
    └── workflows/
        └── deploy.yml   # GitHub Actions para Cloudflare Pages
```

---

## 🎨 Personalización

### 1. Colores

Editar los valores en `styles.css`:

```css
:root {
  --color-primary: #F2C4CE;   /* Color principal (botones, acentos) */
  --color-accent: #3A3A3A;      /* Color oscuro (footer, fondos) */
  --color-bg: #FEFEFE;          /* Color de fondo */
  --color-text: #3A3A3A;       /* Color del texto */
}
```

**Ejemplo - Boda de Otoño:**
```css
:root {
  --color-primary: #D4A574;   /* Dorado/arena */
  --color-accent: #5D4E37;    /* Marrón oscuro */
  --color-bg: #FDF8F3;         /* Crema */
  --color-text: #3D3D3D;
}
```

### 2. Fuente

Cambiar en `<head>` de `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=PLAYFAIR&family=YOUR_FONT&display=swap" rel="stylesheet">
```

Y en `tailwind.config` dentro de `index.html`:
```javascript
fontFamily: {
  display: ['PLAYFAIR', 'serif'],
  body: ['YOUR_FONT', 'sans-serif'],
}
```

### 3. Fecha del Evento

Editar `main.js` — línea 12:

```javascript
weddingDate: new Date('2026-08-15T16:00:00'),
```

**Formato:** `YYYY-MM-DDTHH:MM:SS`

### 4. Nombres de los Novios

Buscar y reemplazar en `index.html`:
- Título de la página: `<title>Boda de [Nombre] & [Nombre]</title>`
- Hero: `Nombre` / `Nombre`
- Footer: `Nombre & Nombre`

### 5. Ubicación (Google Maps)

1. Ir a [Google Maps](https://maps.google.com)
2. Buscar la ubicación de la ceremonia
3. Clic en **Compartir** → **Incorporar un mapa**
4. Copiar el código `<iframe>` y reemplazar en `index.html`

### 6. Formspree (RSVP)

1. Ir a [Formspree.io](https://formspree.io) y crear cuenta gratuita
2. Crear un nuevo formulario
3. Copiar el **Form ID** (ej: `xyzabc123`)
4. Editar `index.html` línea ~150:
   ```html
   action="https://formspree.io/f/TU_FORM_ID"
   ```
5. Editar `main.js` línea 18:
   ```javascript
   formspreeEndpoint: 'https://formspree.io/f/TU_FORM_ID',
   ```

### 7. Fotos

Reemplazar en `assets/`:
- `hero.jpg` — Foto fullscreen del hero (recomendado: 1920x1080px, formato landscape)
- `gallery/01.jpg` a `gallery/09.jpg` — Fotos de la pareja (recomendado: 1200x1200px, formato cuadrado)

**Tips para fotos:**
- Usar formato .jpg para mejor compresión
- Optimizar tamaño: máximo 500KB por imagen
- Usar herramientas como [Squoosh.app](https://squoosh.app) para comprimir

### 8. Información del Evento

Editar en `index.html` sección `#info`:
- Nombre del lugar
- Dirección
- Hora de ceremonia y recepción
- Código de vestimenta

---

## 🌐 Deploy en Cloudflare Pages

### Configuración Manual

1. Ir a [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Ir a **Workers & Pages** → **Create application** → **Pages** → **Upload assets**
3. Arrastrar todos los archivos del proyecto
4. Asignar nombre al proyecto (ej: `boda-juan-maria`)

### Deploy Automático (GitHub Actions)

1. **Obtener credenciales de Cloudflare:**
   
   a. Ir a [Cloudflare API Token](https://dash.cloudflare.com/profile/api-tokens)
   
   b. Crear token con permisos:
      - **Account** → **Cloudflare Pages** → Edit
      - **Zone** → **Cloudflare Pages** → Edit
   
   c. Guardar el token

2. **Configurar GitHub Secrets:**
   
   a. Ir al repositorio → **Settings** → **Secrets and variables** → **Actions**
   
   b. Agregar:
      - `CLOUDFLARE_API_TOKEN` → Tu API token de Cloudflare
      - `CLOUDFLARE_ACCOUNT_ID` → ID de tu cuenta (encontrado en Cloudflare Dashboard)
   
   c. Opcional: Agregar variable `CLOUDFLARE_PROJECT_NAME` con el nombre del proyecto

3. **Primeros commits:**
   ```bash
   git init
   git add .
   git commit -m "feat: wedding site v1"
   git branch -M main
   git remote add origin https://github.com/USUARIO/repo.git
   git push -u origin main
   ```

### Dominio Personalizado

1. En Cloudflare Pages → Tu proyecto → **Custom domains**
2. Agregar tu dominio (ej: `boda.juanymaria.com`)
3. En tu proveedor de dominio:
   - Crear CNAME apuntando a `<project>.pages.dev`
   - O configurar como proxy de Cloudflare

---

## ✅ Checklist de Entrega al Cliente

### Datos Requeridos (antes de empezar)

| Dato | Ejemplo | Estado |
|------|---------|--------|
| **Nombres de los novios** | Juan Pérez & María García | ☐ |
| **Fecha de la boda** | 15 de Agosto de 2026 | ☐ |
| **Hora de la ceremonia** | 4:00 PM | ☐ |
| **Hora de la recepción** | 6:00 PM | ☐ |
| **Nombre del lugar (ceremonia)** | Parroquia de San José | ☐ |
| **Dirección completa (ceremonia)** | Calle Principal 123, Centro, Ciudad | ☐ |
| **Nombre del lugar (recepción)** | Salón Arcoíris | ☐ |
| **Dirección completa (recepción)** | Av. Flores 456 | ☐ |
| **Código de vestimenta** | Formal / Casual / Temático | ☐ |
| **Fecha límite RSVP** | 1 de Julio de 2026 | ☐ |
| **Email para confirmaciones** | confirmaciones@boda.com | ☐ |
| **Foto hero** | Archivo .jpg/.png (1920x1080) | ☐ |
| **Fotos para galería** | 6-9 fotos (1200x1200) | ☐ |
| **Favicon** | Archivo .ico (32x32, 48x48) | ☐ |
| **Dominio personalizado** | `boda.juanymaria.com` | ☐ |

### Información Adicional (opcional)

- [ ] Mesa de regalos / registry
- [ ] Hashtag de redes sociales
- [ ] Información de estacionamiento
- [ ] Restricciones dietéticas comunes a considerar
- [ ] Música / playlist especial
- [ ] Contacto de emergencia para el día del evento

### Después del Deploy

- [ ] Probar formulario RSVP
- [ ] Verificar countdown timer (¿funciona?)
- [ ] Probar lightbox con navegación de teclado
- [ ] Verificar mapa de Google Maps
- [ ] Probar en móvil (responsive)
- [ ] Compartir enlace de preview con el cliente
- [ ] Documentar credenciales de Cloudflare

---

## 🛠️ Desarrollo Local

Para probar localmente:

```bash
# Usando Python
python -m http.server 8000

# O usando Node.js
npx serve

# Luego abrir http://localhost:8000
```

---

## 📝 Notas Técnicas

- **Tailwind CDN**: Usado para desarrollo rápido. Para producción, considerar compilar CSS.
- **Sin dependencias externas**: Countdown, lightbox y animaciones son vanilla JS puro.
- **Accesibilidad**: Soporte para keyboard navigation, screen readers, y reduced-motion.
- **SEO**: Meta tags básicos incluidos. Considerar agregar Open Graph tags para redes sociales.

---

## 📞 Soporte

Para soporte técnico adicional, contactar al equipo Veltrux.