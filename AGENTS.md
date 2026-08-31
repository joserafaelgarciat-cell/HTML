# AGENTS.md – Instrucciones del proyecto

## Idioma (IMPORTANTE)
- **Todo el trabajo, documentos, respuestas, mensajes y archivos que se generen o editen deben estar en ESPAÑOL.**
- **Nunca en gallego** (aunque los documentos de referencia o los títulos de archivos del cliente estén en gallego).
- Los nombres de archivos y carpetas existentes no se traducen.
- Si un documento previo del proyecto (ej. `Folla_Seguimento_Fito2.md`) está en gallego, no se edita en gallego: cualquier contenido nuevo se añade en español.

## Contexto del proyecto
- **Proyecto:** Sitio web corporativo de **Superautos Carballo**, concesionario multimarca de vehículos de alta gama en Carballo.
- **Alumno:** José Rafael García Torres.
- **Plan general:** `plan.md` (incluye sitemap, 8 vehículos, 3 formularios, paleta, tipografía, stack Bootstrap 5 + JS vanilla, WCAG 2.2 AA, SEO).
- **Diseño Pencil:** `diseño.pen` (3 resoluciones por página: 1440 / 768 / 390 px). **NO sobrescribir ni modificar sin orden explícita.**
- **Control de versiones:** Git local. No se hace commit salvo petición expresa.

## Tarea en curso / pendiente: Guía Visual (para el 14/08/2026)
- **Plan de trabajo:** `Plan_Guia_Visual.md` (este archivo debe estar en **español**; revisar/reescribir si quedó en gallego).
- **Objetivo:** crear las normas visuales del proyecto (design system reutilizable para aplicar a los wireframes), coherentes con la identidad premium y el público.
- **Entregables obligatorios de la tarea:**
  1. Paleta principal y secundaria: uso de cada color y códigos.
  2. Tipografías: familias, tamaños, pesos y jerarquías (títulos, subtítulos, parágrafos, textos auxiliares).
  3. Sistema de separaciones: márgenes, rellenos y tamaños de sección.
  4. Componentes: botones, campos de formulario, tarjetas, menús y otros del proyecto.
  5. Estados: normal, hover, foco, activo, desactivado y error.
  6. Contraste suficiente, texto legible y foco visible (WCAG 2.2 AA).
  7. Guía en **PDF o imágenes**.
  8. Ligazón al **archivo editable** (Figma/Penpot/Pencil) con permisos de visualización.

- **Estado anterior:** la carpeta `guia_visual/` quedó con archivos en blanco (PDF de 3 KB y PNG vacíos) y **no se creó** `guia_visual.pen`.

### Pasos clave para retomar mañana
1. Abrir Pencil y verificar conexión MCP (`pencil_status`).
2. Crear `guia_visual.pen` (nuevo, sin tocar `diseño.pen`).
3. Cargar fuentes Anton + Inter y assets de `assets/img/`.
4. Maquetar secciones en frames A4 (portada, logo, paleta, tipografía, espaciado, botones, formularios, tarjetas, menús, accesibilidad, usos).
5. **Verificar cada sección con screenshot antes de exportar** (evita el error de archivos en blanco).
6. Exportar PNG por sección y PDF a `guia_visual/`.
7. Confirmar que el PDF tiene contenido y subir el editable con permisos de visualización.

### Datos clave de identidad (para la guía)
- Paleta base: `#FFFFFF`, `#000000`, `#9CA3AF` (decorativo), `#E5E7EB`, acento `#FF9800`.
- Paleta secundaria propuesta: gris texto `#6B7280`, error `#DC2626`, éxito `#16A34A`, hover acento `#E68A00`, fondo sección `#F3F4F6`.
- Tipografía: **Anton** (titulares, mayúsculas, tracking amplio) + **Inter** (cuerpo/UI, pesos 400–700).
- Logos disponibles: `assets/img/Ferrari/ferrari_logo.webp`, `assets/img/Audi/logo_audi.webp`, `assets/img/Mercedes/mercedes_icono.webp`, `assets/img/Lamborghini/Lamborghini_logo.webp`, `assets/img/porche/porche_icono.webp`. Hero: `assets/img/hero.webp`.

## Memoria de trabajo reciente (sesión de migración a `html/`)

### 1. Paleta de colores documentada en `tokens.css`
- Se añadió al inicio del archivo `html/assets/css/tokens.css` la lista de colores oficial del proyecto (primarios y secundarios) en forma de comentario en tabla.
- NOTA: El color **TEXT GRAY** figura en la lista sin código HEX. Pendiente confirmar su valor con el cliente (posible `#6B7280`).

### 2. Renombrado de variables de color en `app/css/base.css` (y su copia en `html/assets/css/base.css`)
No se renombraron clases (el usuario descartó esa opción para no liarse), solo **variables de color** para alinearlas con los nombres de la paleta:

| Variable anterior        | Nueva variable      | HEX       |
|--------------------------|---------------------|-----------|
| `--color-acento`         | `--azul-electrico`  | #0052FF   |
| `--color-superficie`     | `--blanco`          | #FFFFFF   |
| `--color-borde`          | `--gris-borde`      | #CFD8E6   |
| `--color-superficie-inversa` | `--negro`      | #000000   |
| `--color-texto-secundario`   | `--text-gray`  | #6B7280   |
| `--color-acento-hover`   | `--hover-activo`    | #0038B8   |
| `--color-peligro`        | `--error`           | #DC2626   |
| `--color-exito`          | `--exito`           | #16A34A   |
| `--color-texto-principal`| `--negro`           | #000000   |
| `--color-texto-inverso`  | `--blanco`          | #FFFFFF   |

- Se actualizaron todas las referencias `var(--...)` dentro de `base.css` (las variables NO estaban en los HTML/JS, así que no hubo que tocar los `.html`).
- Las variables de tipografía (`--fuente-principal: 'Inter'`, `--fuente-acento: 'Montserrat'`) se mantienen igual.

### 3. La carpeta `html/` es ahora la carpeta OFICIAL del proyecto (para `index.html`)
Se trasladó a `html/` todo lo necesario para ejecutar `index.html` de forma autónoma:
- `app/css/base.css` → `html/assets/css/base.css`
- `app/js/main.js` → `html/assets/js/main.js`
- Todas las imágenes de `app/assets/img/` → `html/assets/img/` (incluidas subcarpetas por marca: Audi, Ferrari, Lamborghini, Mercedes, porche, y archivos raíz).

Se actualizó `html/index.html` para apuntar a rutas locales de `html/`:
- CSS: `assets/css/base.css` (antes `../app/css/base.css`)
- JS: `assets/js/main.js` (antes `../app/js/main.js`)
- Imágenes: `assets/img/...` (antes `../app/assets/img/...`)

Bootstrap 5 y las fuentes Google siguen cargándose por CDN (no son código local).

### Pendiente / decisiones abiertas
- `html/assets/css/tokens.css` sigue existiendo. Confirmar si se conserva o se elimina (contiene solo la paleta y la tipografía como comentarios).
- El resto de páginas (`catalogo.html`, `cita.html`, `contacto.html`, `ficha_vehiculo.html`, `servicios.html`, `recambios.html`, `privacidad.html`, `proba_conduccion.html`, `404.html`) aún pueden referencia `../app/...`: si `html/` es la carpeta oficial, habrá que migrar también sus CSS/JS/img cuando se trabaje en ellas.
