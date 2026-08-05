# Plan de Desarrollo Web – Superautos Carballo

- **Autor:** José Rafael García Torres
- **Fecha:** 03/08/2026
- **Proyecto:** Diseño y desarrollo del sitio web corporativo de Superautos Carballo
- **Documento de referencia:** `Garcia_Torres_Jose_Rafael_Hito1_Brief.md`
- **Diseño de origen:** archivo Pencil `pencil-new.pen`

---

## 1. Resumen ejecutivo

Desarrollo de un sitio web corporativo moderno, responsive y orientado a la conversión para
Superautos Carballo, concesionario premium de superautos. El sitio muestra catálogo de vehículos
de alta gama, servicios de venta, mantenimiento, recambios, posventa y un formulario de contacto.

El proyecto parte de un diseño ya definido en el archivo Pencil `.pen` con tres resoluciones por
página (desktop 1440 px, tablet 768 px y móvil 390 px) y se implementará en **HTML/CSS con
Bootstrap 5, JavaScript y PHP** semántico
y accesible, con especial atención a **SEO, indexación, rendimiento, accesibilidad y buenas
prácticas de desarrollo web**.

---

## 2. Stack tecnológico y estructura de archivos

### 2.1 Stack propuesto

| Área | Tecnología |
|---|---|
| Marcado | HTML5 semántico |
| Estilos | **Bootstrap 5** + CSS personalizado (tokens/variables CSS) |
| Comportamiento | JavaScript vanilla (sin dependencias para el núcleo) + componentes de Bootstrap. **El carrusel de la home usará obligatoriamente el componente Carousel de Bootstrap 5** (`bootstrap.bundle.min.js`), sin JS propio |
| Backend | **PHP** (procesamiento del formulario de contacto, envío de e-mail, seguridad) |
| Imágenes | Formatos modernos: AVIF / WebP con fallback JPEG |
| Fuentes | Google Fonts: Anton (titulares) + Inter (cuerpo) |
| Icons | Lucide (SVG inline) / Bootstrap Icons |

### 2.2 Estructura de carpetas

```
Proyecto/
├── index.html                 # Página principal
├── catalogo.html              # Catálogo de vehículos
├── servicio_de_ventas.html    # Servicios de venta
├── mantenimiento.html         # Servicios de mantenimiento
├── recambios.html             # Solicitud de recambios
├── pos_ventas.html            # Servicios posventa
├── contacto.html              # Formulario de contacto
├── assets/
│   ├── css/
│   │   ├── tokens.css         # Variables CSS (colores, tipografías, espaciado)
│   │   ├── base.css           # Reset y estilos base
│   │   ├── layout.css         # Header, footer, grid
│   │   └── componentes.css    # Botones, tarjetas, formularios, carrusel
│   ├── js/
│   │   ├── main.js            # Navegación y menú móvil (el carrusel usa el componente de Bootstrap)
│   │   └── contacto.js        # Validación y envío del formulario
│   ├── php/
│   │   ├── config.php         # Configuración (constantes, correo, seguridad)
│   │   ├── contacto.php       # Procesamiento del formulario (validación servidor, envío)
│   │   └── envia_email.php    # Envío de e-mail (PHPMailer o mail())
│   ├── bootstrap/
│   │   ├── bootstrap.min.css  # Framework Bootstrap 5
│   │   └── bootstrap.bundle.min.js
│   └── img/                   # Imágenes y fotos optimizadas (AVIF/WebP/JPEG, logo, iconos)
│       ├── Ferrari/           # Carrusel – Ferrari Testarosa Spider
│       │   ├── ferrari_12_cilindri.webp                 # móvil (390 px)
│       │   ├── ferrari_12_cilindri@2x.webp              # tablet (768 px)
│       │   ├── ferrari_12_cilindri@3x.webp              # desktop (1440 px)
│       │   ├── ferrari_849_testarosa_spider.webp        # móvil (390 px)
│       │   ├── ferrari_849_testarosa_spider@2x.webp     # tablet (768 px)
│       │   ├── ferrari_849_testarosa_spider@3x.webp     # desktop (1440 px)
│       │   ├── ferrari_849_testarrosa.webp              # móvil (390 px)
│       │   ├── ferrari_849_testarrosa@2x.webp           # tablet (768 px)
│       │   └── ferrari_849_testarrosa@3x.webp           # desktop (1440 px)
│       ├── porche/            # Carrusel – Porsche 911 Targa 4S
│       │   ├── porche_718_spyder_rs.webp                # móvil (390 px)
│       │   ├── porche_718_spyder_rs@2x.webp             # tablet (768 px)
│       │   ├── porche_718_spyder_rs@3x.webp             # desktop (1440 px)
│       │   ├── porche_911_targa_4s.webp                 # móvil (390 px)
│       │   ├── porche_911_targa_4s@2x.webp              # tablet (768 px)
│       │   ├── porche_911_targa_4s@3x.webp              # desktop (1440 px)
│       │   ├── Taycan_electrico.webp                    # móvil (390 px)
│       │   ├── Taycan_electrico@2x.webp                 # tablet (768 px)
│       │   └── Taycan_electrico@3x.webp                 # desktop (1440 px)
│       ├── Audi/              # Carrusel – Audi Q8 SUV
│       │   ├── audi_a1_sportback.webp                   # móvil (390 px)
│       │   ├── audi_a1_sportback@2x.webp                # tablet (768 px)
│       │   ├── audi_a1_sportback@3x.webp                # desktop (1440 px)
│       │   ├── audi_q7_suv.webp                         # móvil (390 px)
│       │   ├── audi_q7_suv@2x.webp                      # tablet (768 px)
│       │   ├── audi_q7_suv@3x.webp                      # desktop (1440 px)
│       │   ├── audi_q8_suv.webp                         # móvil (390 px)
│       │   ├── audi_q8_suv@2x.webp                      # tablet (768 px)
│       │   └── audi_q8_suv@3x.webp                      # desktop (1440 px)
│       ├── Lamborghini/       # Carrusel – Lamborghini
│       │   ├── lamborghini_rebuelt.webp                 # móvil (390 px)
│       │   ├── lamborghini_rebuelt@2x.webp              # tablet (768 px)
│       │   ├── lamborghini_rebuelt@3x.webp              # desktop (1440 px)
│       │   ├── lamborghini_temerarid.webp               # móvil (390 px)
│       │   ├── lamborghini_temerarid@2x.webp            # tablet (768 px)
│       │   ├── lamborghini_temerarid@3x.webp            # desktop (1440 px)
│       │   ├── Lamborghini_urus.webp                    # móvil (390 px)
│       │   ├── Lamborghini_urus@2x.webp                 # tablet (768 px)
│       │   └── Lamborghini_urus@3x.webp                 # desktop (1440 px)
│       └── Mercedes/          # Carrusel – Mercedes EQS Eléctrico
│           ├── Mercedes_amg_eqe_electrico.webp          # móvil (390 px)
│           ├── Mercedes_amg_eqe_electrico@2x.webp       # tablet (768 px)
│           ├── Mercedes_amg_eqe_electrico@3x.webp       # desktop (1440 px)
│           ├── Mercedes_cl_electrico.webp               # móvil (390 px)
│           ├── Mercedes_cl_electrico@2x.webp            # tablet (768 px)
│           ├── Mercedes_cl_electrico@3x.webp            # desktop (1440 px)
│           ├── Mercedes_eqs_electrico.webp              # móvil (390 px)
│           ├── Mercedes_eqs_electrico@2x.webp           # tablet (768 px)
│           └── Mercedes_eqs_electrico@3x.webp           # desktop (1440 px)
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── manifest.webmanifest       # PWA ligera (opcional)
├── 404.html
└── plan.md
```

---

## 3. Sitemap y estructura de páginas

### 3.1 Sitemap del sitio

```
Superautos Carballo
├── index.html                   # Página principal
│   ├── Hero + carrusel de vehículos destacados (componente Carousel de Bootstrap 5)
│   └── Enlaces a servicios y catálogo
├── catalogo.html                # Catálogo de vehículos
│   ├── Deportivos
│   ├── SUV de lujo
│   ├── Ediciones limitadas
│   └── Seminuevos certificados
├── servicio_de_ventas.html      # Servicio de venta (asesoría, financiación, prueba)
├── mantenimiento.html           # Servicios de mantenimiento
├── recambios.html               # Solicitud de recambios
├── pos_ventas.html              # Servicios posventa
└── contacto.html                # Formulario de contacto (nombre, apellidos, e-mail, teléfono)
```

### 3.2 Modelo de navegación (del diseño Pencil)

| Zona | Elemento |
|---|---|
| Header (88/80/72 px) | Logo, enlaces: Inicio, Catálogo, Servicios, Mantenimiento, Recambios, Contacto + CTA "RESERVAR CITA" |
| Footer (365/358/571 px) | Marca y descripción, columnas CATÁLOGO / SERVICIOS / CONTACTO, barra legal con copyright y redes sociales (Instagram, Facebook, YouTube) |

Breakpoints del diseño: **1440 px** (desktop), **768 px** (tablet), **390 px** (móvil).

### 3.3 Imágenes del catálogo por dispositivo

Las 45 imágenes de las 5 carpetas (`Ferrari/`, `porche/`, `Audi/`, `Lamborghini/`, `Mercedes/`) se usan en el catálogo según su sufijo:

- **Ordenador (desktop, 1440 px):** todos los archivos terminados en `@3x.webp`.
- **Tablet (768 px):** todos los archivos terminados en `@2x.webp`.
- **Móvil (390 px):** todos los archivos terminados **sin** `@3x` ni `@2x` (nombre base `.webp`).

| Vehículo | Móvil | Tablet | Ordenador |
|---|---|---|---|
| Ferrari 12 Cilindri | `assets/img/Ferrari/ferrari_12_cilindri.webp` | `@2x.webp` | `@3x.webp` |
| Ferrari 849 Testarosa Spider | `assets/img/Ferrari/ferrari_849_testarosa_spider.webp` | `@2x.webp` | `@3x.webp` |
| Ferrari 849 Testarrosa | `assets/img/Ferrari/ferrari_849_testarrosa.webp` | `@2x.webp` | `@3x.webp` |
| Porsche 718 Spyder RS | `assets/img/porche/porche_718_spyder_rs.webp` | `@2x.webp` | `@3x.webp` |
| Porsche 911 Targa 4S | `assets/img/porche/porche_911_targa_4s.webp` | `@2x.webp` | `@3x.webp` |
| Porsche Taycan Eléctrico | `assets/img/porche/Taycan_electrico.webp` | `@2x.webp` | `@3x.webp` |
| Audi A1 Sportback | `assets/img/Audi/audi_a1_sportback.webp` | `@2x.webp` | `@3x.webp` |
| Audi Q7 SUV | `assets/img/Audi/audi_q7_suv.webp` | `@2x.webp` | `@3x.webp` |
| Audi Q8 SUV | `assets/img/Audi/audi_q8_suv.webp` | `@2x.webp` | `@3x.webp` |
| Lamborghini Revuelto | `assets/img/Lamborghini/lamborghini_rebuelt.webp` | `@2x.webp` | `@3x.webp` |
| Lamborghini Temerario | `assets/img/Lamborghini/lamborghini_temerarid.webp` | `@2x.webp` | `@3x.webp` |
| Lamborghini Urus | `assets/img/Lamborghini/Lamborghini_urus.webp` | `@2x.webp` | `@3x.webp` |
| Mercedes AMG EQE Eléctrico | `assets/img/Mercedes/Mercedes_amg_eqe_electrico.webp` | `@2x.webp` | `@3x.webp` |
| Mercedes CL Eléctrico | `assets/img/Mercedes/Mercedes_cl_electrico.webp` | `@2x.webp` | `@3x.webp` |
| Mercedes EQS Eléctrico | `assets/img/Mercedes/Mercedes_eqs_electrico.webp` | `@2x.webp` | `@3x.webp` |

---

## 4. Identidad visual y colores del diseño

Paleta extraída del diseño `.pen` (variables del documento):

| Token | Valor | Uso |
|---|---|---|
| `$surface-primary` | `#FFFFFF` | Fondo de contenido de las páginas interiores |
| `$surface-inverse` | `#000000` | Fondo de la home, header y footer |
| `$foreground-primary` | `#000000` | Titulares y cuerpo sobre fondo claro |
| `$foreground-inverse` | `#FFFFFF` | Titulares y textos sobre negro |
| `$foreground-muted` | `#9CA3AF` | Descripciones, footer, placeholders |
| `$border-subtle` | `#E5E7EB` | Separadores, inputs, chips del menú |
| `$accent` | `#FF9800` | Botones, acentos, resaltados, icono del logo |
| Overlay de hero | `linear-gradient(180deg, #00000000 → #000000CC)` | Legibilidad del texto sobre imágenes |

### Tipografías

- **Anton** — titulares (tracking amplio, p. ej. `letter-spacing: 2px`), mayúsculas de marca.
- **Inter** — cuerpo, UI, etiquetas y botones (pesos 400–700).

### Reglas de uso

- El naranja `#FF9800` se usa **solo para acciones y acentos** (CTA, pestaña activa, icono de marca).
- Contraste garantizado: texto blanco sobre `#000000` y texto negro sobre `#FF9800` superan WCAG AA.
- Las páginas interiores usan fondo blanco; la home usa fondo negro (identidad del concesionario premium).

---

## 5. SEO

### 5.1 Metadatos por página

Cada página incluirá:

- `<title>` único y descriptivo (50–60 caracteres).
- `<meta name="description">` único (120–155 caracteres) con llamada a la acción.
- `<link rel="canonical">` con la URL absoluta de la página.
- `<html lang="es">`.
- Favicon (SVG con el icono de marca).

Ejemplos:

| Página | Title sugerido | Description sugerida |
|---|---|---|
| index.html | Superautos Carballo – Concesionario de coches de alta gama | Concesionario premium de superautos en Carballo. Catálogo, venta, mantenimiento y posventa. Reserva tu cita. |
| catalogo.html | Catálogo de Superautos en Carballo – Deportivos y SUV de lujo | Explora deportivos, SUV de lujo, ediciones limitadas y seminuevos certificados en Superautos Carballo. |
| contacto.html | Contacto – Superautos Carballo | Escríbenos, llámanos o visita nuestras instalaciones. Formulario de contacto y atención personalizada. |

### 5.2 Open Graph y Twitter Cards

- `og:type`, `og:title`, `og:description`, `og:image` (1200×630 px), `og:url`, `og:site_name`.
- `twitter:card = summary_large_image` y las propiedades `twitter:*` equivalentes.

### 5.3 Datos estructurados (JSON-LD)

- **`AutoDealer`** en la home (nombre, dirección "Av. A Coruña 45, 15100 Carballo, A Coruña", teléfono "+34 981 700 200", email, horario, geolocalización).
- **`ContactPage`** en `contacto.html`.
- **`WebSite`** con `SearchAction` (si aplica) y `Organization` con `sameAs` de redes sociales.

### 5.4 URLs y enlazado interno

- URLs limpias, en minúsculas y con guiones bajos según el brief (`servicio_de_ventas.html`, `pos_ventas.html`).
- Enlazado interno jerárquico (home → catálogo/servicios → contacto).
- Migas de pan (`breadcrumbs`) en las páginas de contenido (opcional).
- Atributo `aria-current="page"` en el enlace de la página activa del menú.

---

## 6. Indexación (sitemap, robots, Search Console)

### 6.1 robots.txt

```
User-agent: *
Allow: /

Sitemap: https://www.superautoscarballo.es/sitemap.xml
```

### 6.2 sitemap.xml

Incluir las 7 páginas públicas (sin versiones tablet/móvil separadas, ya que el sitio es responsive):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.superautoscarballo.es/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://www.superautoscarballo.es/catalogo.html</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.superautoscarballo.es/servicio_de_ventas.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.superautoscarballo.es/mantenimiento.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.superautoscarballo.es/recambios.html</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.superautoscarballo.es/pos_ventas.html</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.superautoscarballo.es/contacto.html</loc><changefreq>yearly</changefreq><priority>0.8</priority></url>
</urlset>
```

### 6.3 Configuración y verificación

- Subir el proyecto a un dominio definitivo (`https://www.superautoscarballo.es`).
- Verificar dominio en **Google Search Console** y **Bing Webmaster Tools**.
- Enviar `sitemap.xml` y validar `robots.txt`.
- Configurar **404.html** personalizado y su estado HTTP 404.
- Canonical absoluto en producción; `noindex` en entornos de desarrollo/preproducción si es necesario.

---

## 7. Rendimiento y performance

### 7.1 Imágenes (mayor impacto)

- Convertir a **WebP/AVIF** y servir fallback JPEG.
- Resolver en función del contexto: hero (1080 px), tarjetas de coche (~410 px), thumbnails.
- `loading="lazy"` en imágenes fuera del primer pliegue; `fetchpriority="high"` en el hero.
- `width` y `height` explícitos para evitar *layout shift* (CLS).
- `srcset`/`sizes` para las distintas resoluciones (desktop/tablet/móvil). Convención de nombres del carrusel: sufijo `@3x` (desktop 1440 px), `@2x` (tablet 768 px) y base sin sufijo (móvil 390 px), en `assets/img/<marca>/<vehiculo>@<factor>.webp`.
- Considerar imágenes del catálogo servidas por CDN (p. ej. Cloudinary o similar) en producción.

### 7.2 Carga de fuentes

- `preconnect` a `fonts.googleapis.com` y `fonts.gstatic.com`.
- Usar solo los pesos necesarios (Anton 400; Inter 400/500/600/700).
- `font-display: swap` (el export de Pencil ya usa `&display=swap`).
- Considerar `preload` de la fuente principal del hero.

### 7.3 CSS y JS

- Minificar y concatenar CSS/JS en producción.
- CSS crítico inline para el primer render.
- JavaScript diferido (`defer`) y, si aplica, dividido por página.
- No bloquear el render con scripts de terceros; cargar mapas/social analytics asíncronamente.
- Eliminar CSS/JS no utilizado (auditar con Lighthouse).

### 7.4 Objetivos de rendimiento (Lighthouse / Core Web Vitals)

| Métrica | Objetivo |
|---|---|
| LCP (Largest Contentful Paint) | < 2,5 s |
| INP (Interaction to Next Paint) | < 200 ms |
| CLS (Cumulative Layout Shift) | < 0,1 |
| Tiempo de carga total | < 3 s en 4G |
| Puntuación Lighthouse | ≥ 90 en Performance, Accessibility, Best Practices y SEO |

- Activar **compresión gzip/Brotli** y **caché de navegador** (cabeceras `Cache-Control`).
- Uso de **CDN** y HTTPS obligatorio.
- Servir **HTTP/2** y, si es posible, **HTTP/3** en producción.

---

## 8. Accesibilidad (WCAG 2.1)

### 8.1 Estructura y semántica

- Encabezados jerárquicos (`h1` único por página, `h2`/`h3` en secciones).
- HTML semántico: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Un único `<h1>` por página y contenido principal dentro de `<main>`.
- Botones y enlaces reales (`<button>` para acciones, `<a href>` para navegación).

### 8.2 Contraste de color (AA)

- Texto blanco sobre `#000000` (ratio ~21:1) ✓
- Texto negro sobre `#FF9800` (ratio ~10:1) ✓
- `#9CA3AF` (gris) sobre `#FFFFFF` y sobre `#000000`: **revisar** y ajustar en textos de tamaño pequeño (aumentar a `#6B7280` en texto informativo si es necesario).
- No usar el color como único indicador de estado (acompañar con icono/texto).

### 8.3 Navegación y teclado

- **Saltar al contenido** (`skip link`).
- Foco visible (`:focus-visible`) con anillo de 2–3 px en color acento sobre todos los elementos interactivos.
- Orden de tabulación lógico (DOM en el mismo orden visual).
- Menú móvil operativo por teclado: apertura/cierre con `Esc`, botón con `aria-expanded` y `aria-controls`.
- `aria-current="page"` en el enlace activo.

### 8.4 Formularios

- `<label>` asociado a cada campo (Nombre, Apellidos, E-mail, Teléfono).
- Tipos adecuados: `type="email"`, `type="tel"`, `autocomplete` correctos (name, family-name, email, tel).
- Mensajes de error asociados con `aria-describedby` y `role="alert"`.
- Validación en cliente y en servidor; campos requeridos marcados con `required` + `aria-required`.
- Estado de envío anunciado a lectores de pantalla (`aria-live`).

### 8.5 Imágenes y multimedia

- `alt` descriptivo en todas las imágenes informativas; `alt=""` (vacío) en las decorativas.
- Iconos sociales con texto alternativo accesible (`aria-label` en los enlaces, o texto visible).
- El carrusel (componente Carousel de Bootstrap 5): controles accesibles, indicadores, pausa automática y semántica de lista (`role="list"`/`listitem` o `ul/li`).

### 8.6 Otros

- `prefers-reduced-motion`: desactivar o reducir animaciones del carrusel y transiciones.
- `lang="es"` y textos correctamente acentuados.
- Texto siempre con `title` y `description` coherentes; no depender del color para comunicar.

---

## 9. Prácticas recomendadas

### 9.1 HTML/CSS/JS/PHP

- HTML válido (validar con W3C).
- **Tecnologías:** HTML5 + CSS + **Bootstrap 5** + JavaScript vanilla + **PHP** (backend del formulario en `assets/php/`).
- Código organizado en `assets/css`, `assets/js`, `assets/php` y `assets/bootstrap`; imágenes y fotos en `assets/img`.
- Diseño **mobile-first** con breakpoints del diseño (390 / 768 / 1440).
- **Metodología BEM** o equivalentemente clases descriptivas para los componentes.
- **Variables CSS** para los tokens del diseño (sección 4).
- JavaScript sin errores en consola; eventos delegados; sin dependencias innecesarias.
- `defer` para scripts; scripts inline mínimos.
- PHP: separar lógica en `assets/php/` (config, validación, envío de e-mail), sin lógica en las plantillas.

### 9.2 Seguridad

- **HTTPS** obligatorio (certificado TLS, redirección HTTP→HTTPS).
- Cabeceras de seguridad: `X-Content-Type-Options`, `Content-Security-Policy`, `Referrer-Policy`, `X-Frame-Options`.
- Formulario de contacto:
  - Validación en servidor (no confiar solo en el cliente).
  - **Protección CSRF** (token por sesión).
  - Honeypot contra spam + límite de intentos.
  - Escape de todas las entradas antes de mostrar/almacenar (anti-XSS).
  - Aviso y consentimiento **RGPD** (checkbox de privacidad + política de privacidad enlazada).
- No exponer credenciales ni datos personales en el front.

### 9.3 Calidad del contenido

- Textos reales de la marca (descripciones de servicios, fichas de vehículos).
- Información de contacto coherente en todo el sitio: Av. A Coruña 45, 15100 Carballo, A Coruña · +34 981 700 200 · info@superautoscarballo.es.

---

## 10. Funcionalidades clave por página

| Página | Funcionalidad |
|---|---|
| index.html | Hero, carrusel de vehículos destacados, secciones de servicio, CTA |
| catalogo.html | Listado/grid de vehículos con fichas (imagen, nombre, especificaciones, precio, botón) |
| servicio_de_ventas.html | Descripción del servicio, asesoramiento, financiación, prueba de conducción |
| mantenimiento.html | Servicios de mantenimiento e información de talleres |
| recambios.html | **Formulario de solicitud de recambios**: Referencia da peza, Marca, Modelo, Ano + datos de contacto (Nome, Apelidos, E-mail, Teléfono), Comentarios, RGPD y botón "ENVIAR SOLICITUDE" |
| pos_ventas.html | Servicios posventa, garantías y soporte |
| contacto.html | **Formulario de contacto**: Nombre, Apellidos, E-mail, Teléfono + botón "ENVIAR MENSAJE" (validación, seguridad y RGPD) |

### 10.1 Formulario de solicitud de recambios (recambios.html)

Diseño definido en Pencil para las 3 resoluciones (desktop 1440 px, tablet 768 px, móvil 390 px), replicando el estilo del formulario de contacto:

**Estructura de la sección**

- Cabecera: eyebrow "FORMULARIO DE SOLICITUDE", título "Solicita o teu recambio" y descripción introductoria.
- Grupo **DATOS DO VEHÍCULO**: Referencia da peza (*), Marca, Modelo, Ano.
- Grupo **DATOS DE CONTACTO**: Nome (*), Apelidos (*), E-mail (*), Teléfono (*).
- **Comentarios**: textarea opcional para ampliar la solicitud.
- Checkbox **RGPD** con texto de consentimiento de privacidad y enlace a la política.
- Botón de envío **"ENVIAR SOLICITUDE"** con icono de flecha.

**Especificaciones de implementación**

| Campo | Tipo HTML | Requerido | Autocomplete |
|---|---|---|---|
| Referencia da peza | text | ✓ | off |
| Marca | text | – | organization (vehículo) |
| Modelo | text | – | – |
| Ano | number (4 dígitos) | – | – |
| Nome | text | ✓ | name |
| Apelidos | text | ✓ | family-name |
| E-mail | email | ✓ | email |
| Teléfono | tel | ✓ | tel |
| Comentarios | textarea | – | – |

- Validación en cliente (JS) y en servidor (PHP: `assets/php/recambios.php` y `envia_email.php`), reutilizando la misma seguridad del formulario de contacto: CSRF, honeypot, límite de intentos y escape de entradas (anti-XSS).
- Aviso y consentimiento **RGPD** obligatorio antes del envío.
- Mensajes de error accesibles (`aria-describedby`, `role="alert"`, estado `aria-live`).
- Campos con `<label>` asociado, `required` + `aria-required`, y `autocomplete` según la tabla.
- Diseño mobile-first (390 / 768 / 1440 px) con los mismos tokens visuales (inputs `#E5E7EB`, esquinas 12 px, acento `#FF9800`, fuente Anton/Inter).

---

## 11. Plan de fases

### Fase 1 – Preparación (sprint 1)
1. Revisión final del diseño `.pen` (desktop/tablet/móvil) y extracción de assets.
2. Export de HTML/Tailwind del diseño y creación de la estructura de carpetas (`assets/css`, `assets/js`, `assets/php`, `assets/bootstrap`, `assets/img`).
3. Inclusión de Bootstrap 5 (`assets/bootstrap/`) y definición de tokens (variables CSS) y archivos base.

### Fase 2 – Maquetación (sprint 2)
1. Header (nav + CTA) y footer en las 3 resoluciones.
2. Maquetación de las 7 páginas desde el diseño Pencil.
3. Responsive con Bootstrap + CSS propio: 390 / 768 / 1440 px.

### Fase 3 – Funcionalidad (sprint 3)
1. Menú móvil accesible (JS + componentes de Bootstrap).
2. Carrusel de la home con el componente **Carousel de Bootstrap 5** (controles, indicadores y pausa automática de Bootstrap; sin JS personalizado).
3. Formulario de contacto: validación cliente (JS) + validación y envío en servidor (**PHP**: `assets/php/contacto.php`, `envia_email.php`), honeypot, CSRF, RGPD.
4. Microinteracciones (estados hover/focus) respetando `prefers-reduced-motion`.

### Fase 4 – Optimización y QA (sprint 4)
1. SEO: metadatos, Open Graph, JSON-LD, sitemap.xml, robots.txt, 404.html.
2. Rendimiento: imágenes WebP/AVIF + lazy loading, fuentes, minificación.
3. Accesibilidad: teclado, contraste, ARIA, lectores de pantalla.
4. Pruebas en navegadores y dispositivos.

### Fase 5 – Publicación (sprint 5)
1. Despliegue en hosting + HTTPS + CDN.
2. Google Search Console / Bing y envío de sitemap.
3. Pruebas de producción y monitorización.

---

## 12. QA y pruebas

- **Cross-browser:** Chrome, Edge, Firefox, Safari (últimas versiones).
- **Responsive:** 390, 768, 1024 y 1440 px.
- **Lighthouse:** Performance, Accessibility, Best Practices, SEO (≥ 90).
- **W3C Validator:** HTML y CSS.
- **Accesibilidad:** revisión con axe DevTools y navegación solo teclado.
- **Formulario:** validación, errores, envío real, spam/honeypot.
- **Enlaces:** comprobación de todos los enlaces internos (sin 404).
- **Pesos:** bundle total de la página de entrada < 500 KB (imágenes aparte, optimizadas).

---

## 13. Checklist de lanzamiento

- [ ] Dominio definitivo y HTTPS configurados.
- [ ] `robots.txt` y `sitemap.xml` publicados y validados.
- [ ] Canonical, meta description y Open Graph en las 7 páginas.
- [ ] JSON-LD (AutoDealer) verificado con Rich Results Test.
- [ ] Google Search Console verificada y sitemap enviado.
- [ ] Lighthouse ≥ 90 en las 4 categorías.
- [ ] Imágenes WebP/AVIF con lazy loading y dimensiones definidas.
- [ ] Formulario de contacto funcional, seguro y con RGPD.
- [ ] Cabeceras de seguridad y compresión activadas.
- [ ] Pruebas de accesibilidad y navegación por teclado superadas.
- [ ] Página 404 personalizada.
