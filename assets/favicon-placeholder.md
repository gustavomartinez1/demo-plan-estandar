# Favicon

Este directorio debe contener el favicon del sitio.

## Especificaciones

- **Archivo**: `favicon.ico`
- **Tamaños mínimos**: 16x16, 32x32, 48x48 px
- **Formato**: ICO (Windows) o PNG (moderno)

## Cómo generar

1. **Online** (recomendado):
   - [favicon.io](https://favicon.io/) — Subir texto o imagen
   - [real favicon generator](https://realfavicongenerator.net/) — Generador completo

2. ** Photoshop/GIMP**:
   - Crear en 512x512 px
   - Exportar como .png
   - Convertir a .ico con herramienta online

3. **Command line (ImageMagick)**:
   ```bash
   magick convert input.png -define icon:auto-resize="16,32,48" favicon.ico
   ```

## Diseño sugerido

- Iniciales de los novios (ej: "J & M")
- Monograma decorativo
- Corazón estilizado
- Combinación de anillos