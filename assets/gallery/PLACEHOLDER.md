# Placeholder Images

Este directorio debe contener las fotos de la galería.

## Archivos requeridos

- `01.jpg` a `09.jpg` (usar formato .jpg)

## Especificaciones recomendadas

- **Tamaño**: 1200x1200 px (cuadrado)
- **Formato**: JPG
- **Compresión**: Máx 500KB por imagen
- **Herramienta**: Usar [Squoosh.app](https://squoosh.app) para comprimir

## Cómo obtener fotos placeholder

1. **Unsplash** (fotos gratuitas de stock):
   - Buscar: "wedding couple", "wedding celebration"
   - Descargar en tamaño cuadrado

2. **Picsum** (generador automático):
   - `https://picsum.photos/1200/1200?random=1` hasta `09`

3. **Generar localmente**:
   ```bash
   # Con ImageMagick (si está instalado)
   magick convert -size 1200x1200 xc:linear-gradient(#F2C4CE,#E8E8E8) 01.jpg
   ```

## Orden recomendado

| Archivo | Uso sugerido |
|---------|--------------|
| 01.jpg | Foto de compromiso |
| 02.jpg | Foto de la pareja |
| 03.jpg | Detalles de la boda |
| 04.jpg | Anillos |
| 05.jpg | Vestido/Traje |
| 06.jpg | Decoración |
| 07.jpg | Ceremony |
| 08.jpg | Celebración |
| 09.jpg | Primer baile o familia |