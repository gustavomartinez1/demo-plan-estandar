# 📋 Checklist de Entrega — Boda Veltrux Plan Estándar

## 🎀 Datos del Cliente (requeridos antes de iniciar)

### Información Principal
- [ ] **Nombres de los novios**: _______________________
- [ ] **Fecha de la boda**: _______________________
- [ ] **Hora de la ceremonia**: _______________________
- [ ] **Hora de la recepción**: _______________________

### Ubicación Ceremonia
- [ ] **Nombre del lugar**: _______________________
- [ ] **Dirección completa**: _______________________
- [ ] **Ciudad / Estado**: _______________________

### Ubicación Recepción
- [ ] **Nombre del lugar**: _______________________
- [ ] **Dirección completa**: _______________________
- [ ] **Ciudad / Estado**: _______________________

### Detalles del Evento
- [ ] **Código de vestimenta**: _______________________
- [ ] **Fecha límite RSVP**: _______________________
- [ ] **Email para confirmaciones**: _______________________

---

## 📷 Assets (fotos y gráficos)

### Fotos Obligatorias
- [ ] **Hero** (1920x1080, landscape, .jpg)
- [ ] **Galería** 6-9 fotos (1200x1200, cuadrado, .jpg)

### Iconos y Gráficos
- [ ] **Favicon** (.ico, múltiples tamaños)

---

## 🔧 Configuración Técnica

### Formspree (RSVP)
- [ ] Cuenta de Formspree creada
- [ ] Formulario configurado
- [ ] Form ID copiado
- [ ] Endpoint actualizado en `index.html`
- [ ] Endpoint actualizado en `main.js`

### Fecha del Evento
- [ ] Actualizada en `main.js` línea 12
- [ ] Verificada que la fecha sea futura

### Colores (si se modifican)
- [ ] `--color-primary` definido
- [ ] `--color-accent` definido
- [ ] `--color-bg` definido
- [ ] `--color-text` definido

### Información editable en HTML
- [ ] Nombres en `<title>`
- [ ] Nombres en hero
- [ ] Fecha en hero
- [ ] Nombre/parroquia/salón en sección Info
- [ ] Direcciones en sección Info
- [ ] Horas en sección Info
- [ ] Dress code en sección Info
- [ ] iframe de Google Maps
- [ ] Fecha límite RSVP
- [ ] Footer

---

## 🌐 Deploy

### GitHub
- [ ] Repositorio creado
- [ ] Archivos subidos (git add + commit + push)
- [ ] Rama main configurada

### Cloudflare
- [ ] Cuenta de Cloudflare vinculada
- [ ] Secrets configurados:
  - [ ] `CLOUDFLARE_API_TOKEN`
  - [ ] `CLOUDFLARE_ACCOUNT_ID`
- [ ] Workflow de GitHub Actions ejecutado
- [ ] URL de producción obtenida

### Dominio Personalizado (si aplica)
- [ ] Dominio comprado
- [ ] CNAME configurado en Cloudflare
- [ ] SSL/HTTPS funcionando

---

## ✅ Testing / QA

### Funcionalidad
- [ ] Countdown muestra tiempo correcto
- [ ] Countdown se detiene en cero
- [ ] Countdown muestra mensaje "¡Hoy es el gran día!"
- [ ] Lightbox abre al hacer click
- [ ] Lightbox cierra con X
- [ ] Lightbox navegación con flechas
- [ ] Lightbox cierra con Escape
- [ ] Lightbox cierra al hacer click fuera
- [ ] Formulario valida campos requeridos
- [ ] Formulario muestra errores en campos inválidos
- [ ] Formulario envía datos a Formspree
- [ ] Mensaje de éxito aparece después de enviar
- [ ] Mapa de Google Maps carga correctamente
- [ ] Botón "Abrir en Maps" funciona

### Responsive
- [ ] Desktop (1920px)
- [ ] Laptop (1366px)
- [ ] Tablet (768px)
- [ ] Mobile (375px)

### Accesibilidad
- [ ] Navegación con teclado funciona
- [ ] Focus visible en elementos interactivos
- [ ] Imágenes tienen alt text
- [ ] Botones tienen aria-labels (lightbox)

### Rendimiento
- [ ] Imágenes optimizadas (< 500KB)
- [ ] No hay errores de consola
- [ ] Animaciones suaves (60fps)

---

## 📤 Entrega al Cliente

### Checklist Pre-Entrega
- [ ] Todas las fotos del cliente incorporadas
- [ ] Información verificada y correcta
- [ ] Formspree recibe confirmaciones
- [ ] Link de producción compartido con el cliente
- [ ] Cliente probó formulario RSVP

### Documentación Entregada
- [ ] README.md con instrucciones
- [ ] Este checklist completado
- [ ] Credenciales Cloudflare entregadas (si aplica)

---

## 📝 Notas

_espacio para observaciones adicionales_

---

**Fecha de entrega estimada**: _______________________

**URL de producción**: _______________________

**Cliente**: _______________________

**Responsable Veltrux**: _______________________
