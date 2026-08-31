# Plan de Trabajo – Guía Visual Superautos Carballo (14/08/2026)

- **Autor:** José Rafael García Torres
- **Fecha:** 13/08/2026 (plan previo a la sesión del 14/08/2026)
- **Estado:** COMPLETADO (14/08/2026)
- **Documentos de referencia:** `plan.md` (sección 8), `diseño.pen`, `Garcia_Torres_Jose_Rafael_Hito1_Brief.md`, `Jose_Rafael_Garcia_torres_Fito2_DocumentoFuncional.md`
- **Idioma de trabajo:** español (todo el contenido, documentos y entregables)

---

## 1. Objetivo de la tarea

Definir las **normas visuales** que se aplicarán posteriormente al diseño de las pantallas y a la maquetación de la web. **No se trata de diseñar todas las páginas**: se crea un **sistema visual reutilizable** (design system) que se aplicará a los wireframes, coherente con la identidad y el público del proyecto (concesionario premium multimarca en Carballo, clientela de alto poder adquisitivo).

### 1.1 Requisitos explícitos de la tarea (texto compartido)

| # | Requisito | Entregable |
|---|---|---|
| 1 | **Paleta principal y secundaria** con el uso de cada color y sus códigos | Secciones de color (HEX, nombre, uso, contraste) |
| 2 | **Familias tipográficas, tamaños, pesos y jerarquías** para títulos, subtítulos, parágrafos y textos auxiliares | Sección de tipografía con escala completa |
| 3 | **Sistema básico de separaciones:** márgenes, rellenos y tamaños de sección | Grid/espaciado con base numérica |
| 4 | **Componentes:** botones, campos de formulario, tarjetas, menús y otros elementos necesarios | Secciones de componentes |
| 5 | **Estados:** normal, hover, foco, activo, desactivado y error | Cada componente con todos sus estados |
| 6 | **Contraste suficiente, texto legible y foco visible** (WCAG AA) | Notas de accesibilidad en toda la guía |
| 7 | **Coherencia** con la identidad y el público del proyecto | Criterio transversal |
| 8 | **Guía visual en PDF o imágenes** | Exportación a `guia_visual/` |
| 9 | **Ligazón al archivo editable** (Figma, Penpot, Pencil…) **con permisos de visualización** | `.pen` + ligazón/URL compartida |

---

## 2. Información ya disponible en el proyecto

### 2.1 Paleta base (de `plan.md` sección 8)

| Token | Valor | Uso |
|---|---|---|
| `$surface-primary` | `#FFFFFF` | Fondo de páginas interiores |
| `$surface-inverse` | `#000000` | Fondo de la home, header y footer |
| `$foreground-primary` | `#000000` | Titulares y cuerpo sobre fondo claro |
| `$foreground-inverse` | `#FFFFFF` | Titulares y textos sobre negro |
| `$foreground-muted` | `#9CA3AF` | Descripciones, footer, placeholders (solo decorativo) |
| `$border-subtle` | `#E5E7EB` | Separadores, inputs, chips del menú |
| `$accent` | `#FF9800` | Botones, acentos, resaltados, icono del logo |
| Overlay hero | `linear-gradient(180deg, #00000000 → #000000CC)` | Legibilidad del texto sobre imágenes |

### 2.2 Paleta secundaria (a definir/validar mañana)

Base propuesta (tonos neutros derivados de `#9CA3AF`/`#E5E7EB` y acento oscurecido para estados):

| Uso propuesto | Valor orientativo | Observación |
|---|---|---|
| Texto informativo gris (AA) | `#6B7280` | El `#9CA3AF` solo decorativo |
| Borde/input activo | `#FF9800` o `#000000` | Estado focus del formulario |
| Acento oscurecido (hover) | `#E68A00` | Hover del botón primario |
| Error | `#DC2626` (red-600) | Mensajes de error + borde del campo |
| Éxito | `#16A34A` (green-600) | Mensajes de confirmación |
| Fondo secundario / secciones | `#F3F4F6` (gray-100) | Alternar secciones en interiores |

> **Decisión a tomar mañana:** confirmar estos valores y dejarlos documentados con su código exacto, nombre de uso y contraste (texto sobre fondo ≥ 4,5:1; componentes UI ≥ 3:1).

### 2.3 Tipografías (Google Fonts)

- **Anton** — titulares (mayúsculas de marca, `letter-spacing` amplio).
- **Inter** — cuerpo y UI, pesos 400 / 500 / 600 / 700.

### 2.4 Assets disponibles

- Logos: `assets/img/Ferrari/ferrari_logo.webp`, `assets/img/Audi/logo_audi.webp`, `assets/img/Mercedes/mercedes_icono.webp`, `assets/img/Lamborghini/Lamborghini_logo.webp`, `assets/img/porche/porche_icono.webp`.
- Hero: `assets/img/hero.webp`. Vehículos: `assets/img/<marca>/…@[base|2x|3x].webp`.
- Stack del sitio: **Bootstrap 5** (base responsive), iconos **Lucide**, fotos grandes propias de estética Porsche.

---

## 3. Entregables

| Entregable | Formato | Destino |
|---|---|---|
| Guía visual | **PDF** (una página por sección) | `guia_visual/guia_visual_superautos_carballo.pdf` |
| Secciones por imagen | **PNG** (una imagen por frame) | `guia_visual/` |
| Archivo editable | **`.pen`** (Pencil) | `guia_visual.pen` en la raíz del proyecto |
| Ligazón editable con permisos de visualización | URL / ruta | Subir a **GitHub** (repo pendiente, ver `plan.md` §19) y apuntar en la entrega |

**Nota sobre la ligazón editable:** Pencil es una herramienta de escritorio. Para cumplir el requisito 9 (permisos de visualización) el plan es: (a) subir el `.pen` al repo de GitHub con permiso de lectura para la persona evaluadora, y (b) incluir la ruta del archivo en la documentación de la entrega. Si se requiere una ligazón de visualización en navegador, se valorará exportar la guía a Figma/Penpot solo si es viable el tiempo; **decisión a confirmar mañana con el profesor** (recomendado: `.pen` en el repo, ya que es la herramienta utilizada en el proyecto).

---

## 4. Estructura de la guía (secciones y frames en `.pen`)

Lienzo: **A4 vertical (794 × 1123 px)** por sección, para una exportación PDF limpia.

| # | Frame | Contenido |
|---|---|---|
| 00 | `00_portada` | Logotipo, nombre, versión, fecha, herramienta |
| 01 | `01_logotipo` | Versión principal/inversa, área de seguridad, tamaños mínimos, usos incorrectos |
| 02 | `02_paleta_principal` | Colores, nombres, HEX, % de uso, contraste AA |
| 03 | `03_paleta_secundaria` | Grises, estado error/éxito, tonos de acento, uso de cada color |
| 04 | `04_tipografia` | Anton (títulos H1–H4) e Inter (subtítulos, cuerpo, auxiliares): tamaño, peso, `line-height`, `letter-spacing`, jerarquía |
| 05 | `05_espaciado` | Sistema 8 px (base Bootstrap): márgenes, rellenos, tamaño de secciones, ancho máx. de contenido |
| 06 | `06_botones` | Primario, secundario, terciario/enlace, sizes; estados normal/hover/focus/activo/desactivado |
| 07 | `07_formularios` | Input, select, textarea, checkbox RGPD, campo con error, mensaje de éxito, placeholder, focus visible |
| 08 | `08_tarjetas_vehiculo` | Tarjeta del catálogo: imagen, marca/modelo, datos, CTA; estados normal/hover/focus |
| 09 | `09_menus` | Header, menú escritorio/móvil, chips, enlace activo (`aria-current`), footer |
| 10 | `10_accesibilidad` | Contraste, foco visible, objetivos táctiles ≥ 24 px, `prefers-reduced-motion` |
| 11 | `11_uso_redes` | Snippets de las 3 resoluciones (390 / 768 / 1440) e imágenes destacadas |

---

## 5. Flujo de trabajo de mañana (paso a paso)

**Preparación (antes de abrir Pencil)**
1. Confirmar con profesor: herramienta de compartición del editable (`.pen` en el repo vs. Figma/Penpot).
2. Definir y cerrar la paleta secundaria (valores de la sección 2.2) y la escala tipográfica concreta (tamaños H1–H4, cuerpo, auxiliar).
3. Abrir Pencil y ejecutar `pencil_status` para verificar la conexión MCP.

**Construcción**
4. Crear `guia_visual.pen` (documento nuevo; **no tocar** `diseño.pen`).
5. Cargar fuentes (Anton + Inter, `display=swap`) y comprobar que renderizan.
6. Crear los frames de la tabla de la sección 4, uno por sección, con nombres claros.
7. Maquetar cada sección con los tokens reales (paleta, tipografía, espaciado, componentes con todos los estados del requisito 5).
8. Añadir notas de accesibilidad en cada sección (requisito 6).

**Verificación (crítica: evita el error de ayer)**
9. Después de **cada sección**, capturar screenshot (`pencil_get_screenshot`) y confirmar que **no está en blanco** y que fuentes/imágenes cargan.

**Exportación**
10. Exportar PNG por sección → `guia_visual/`.
11. Exportar PDF completo → `guia_visual/guia_visual_superautos_carballo.pdf`.
12. Abrir el PDF y revisar que todas las páginas tienen contenido (peso muy superior a los 3 KB de ayer).

**Entrega**
13. Subir el repo a GitHub (pendiente, `plan.md` §19) con el `.pen` y la guía, permisos de lectura activados.
14. Commit (p. ej. «Añade guía visual de Superautos Carballo») y documentar la ligazón editable en la entrega.

---

## 6. Criterios de comprobación (checklist de éxito)

- [x] `guia_visual.pen` existe con los frames `00`–`11` nombrados.
- [x] Paleta principal y secundaria con nombre, código y **uso de cada color**.
- [x] Jerarquía tipográfica completa: título, subtítulo, parágrafo, auxiliar (tamaño + peso).
- [x] Sistema de espaciado (base 8 px), márgenes, rellenos y tamaños de sección.
- [x] Componentes: botones, campos de formulario, tarjetas, menús, con los estados **normal, hover, foco, activo, desactivado y error**.
- [x] Notas de contraste AA, legibilidad y foco visible en toda la guía.
- [x] PDF con contenido visible en todas las páginas (no en blanco).
- [x] PNG por sección no en blanco.
- [ ] Archivo editable `.pen` subido con permisos de visualización y ligazón documentada (pendiente: guardar como `guia_visual.pen` en la raíz y subir repo a GitHub).
- [x] Coherencia con la identidad premium (negro, blanco, acento `#FF9800`, Anton+Inter, fotos grandes).
- [x] Todo el contenido en **español** (nunca en gallego).

---

## 8. Registro de ejecución (14/08/2026)

### 8.1 Resultado

Guía visual construida y verificada en Pencil, con las 12 secciones maquetadas en frames A4 (794 × 1123 px) y exportada a `guia_visual/`:

| Entregable | Estado | Ruta |
|---|---|---|
| PDF (12 páginas, verificado con contenido) | ✅ | `guia_visual/guia_visual_superautos_carballo.pdf` (~2,7 MB) |
| PNG por sección (00–11, ninguno en blanco) | ✅ | `guia_visual/00_portada.png` … `11_uso_redes.png` |
| Archivo editable `.pen` | ⏳ Pendiente de guardado | `guia_visual.pen` (raíz del proyecto) |

### 8.2 Verificación realizada

- Export de cada sección comprobado por **análisis de píxeles** (colores de la paleta presentes en cada PNG; ninguno 100 % blanco).
- PDF validado: 12 páginas y 56 marcadores de imagen internos.
- Se corrigieron durante la sesión:
  - **Bug de export en blanco**: los nodos creados con `Insert` no se renderizaban en export; la solución adoptada fue duplicar con `Copy` y usar la copia como canónica (se verificó en todas las secciones).
  - Sección 10 (accesibilidad): `lineHeight` corregido a multiplicador (no px) y tabla de contraste compactada para caber en el A4.
  - Sección 09 (menús): items del nav con colapso de layout resueltos (ancho fijo + `space_between`).

### 8.3 Pendiente de entrega

1. Guardar el documento de trabajo de Pencil como `guia_visual.pen` en `C:\xampp\htdocs\Proyecto\` (Archivo → Guardar como).
2. Subir el repo a GitHub con el `.pen` y la guía (permisos de lectura para el evaluador, `plan.md` §19) y documentar la ligazón editable en la entrega.
3. Decidir con el profesor si se necesita una ligazón de visualización en navegador (opcional; recomendado: `.pen` en el repo).

### 8.4 Notas técnicas de la sesión

- Las secciones se dejaron en **cuadrícula 2×6** en el lienzo (columna izquierda: 00, 02, 04, 06, 08, 10; derecha: 01, 03, 05, 07, 09, 11) para facilitar la revisión con scroll vertical.
- Componente reutilizable `logo_SC` disponible para instanciar el logotipo en el sitio.
- Los tokens de color y tipografía quedaron definidos como variables en el documento de Pencil.

---

## 7. Riesgos y prevención

| Riesgo | Prevención |
|---|---|
| Export en blanco (error de ayer) | Verificación con screenshot **antes** de cada export |
| Fuentes no cargadas | Cargar al inicio y comprobar visualmente |
| Imágenes rotas (rutas) | Insertar siempre desde `assets/img/` y verificar |
| Sobrescribir `diseño.pen` | Trabajar solo en `guia_visual.pen` |
| Pencil/MCP no conectado | `pencil_status` al comienzo; abrir Pencil primero |
| Permisos de visualización de la ligazón | Comprobar que el repo/ligazón abre en sesión anónima/evaluador |
| Paleta secundaria sin decidir | Cerrarla antes de maquetar (sección 2.2) |
| Contenido en gallego | Redactar todo en español; revisar antes de entregar |
