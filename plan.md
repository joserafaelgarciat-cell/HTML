# Plan de Desarrollo Web – Superautos Carballo

- **Autor:** José Rafael García Torres
- **Fecha:** 14/08/2026 (reconstrucción tras el Fito 2, mapa web, flujograma y guía visual)
- **Proyecto:** Diseño y desarrollo del sitio web corporativo de Superautos Carballo
- **Documentos de referencia (estudiar antes del desarrollo):**
  - Brief: `Garcia_Torres_Jose_Rafael_Hito1_Brief.md` (+ PDF `Garcia_Torres_Jose_Rafael_fito1_brief.pdf`)
  - Documento funcional: `Jose_Rafael_Garcia_torres_Fito2_DocumentoFuncional.md` (+ PDF `Garcia_Torres_Jose_Rafael_Fito2_DocumentoFuncional.pdf`)
  - Mapa web / sitemap: `jose_rafael_Garcia_Torres_sitemap.xlsx` (+ PDF `MAPA_WEB.pdf`)
  - Flujograma de formularios: carpeta `flujograma/` (+ PDF `Garcia_Torres_Jose_Rafael_Flujograma.pdf`)
  - Guía visual: `Plan_Guia_Visual.md`, `guia_visual.pen`, exportaciones en `guia_visual/` (12 PNG + PDF `guia_visual_superautos_carballo.pdf`)
  - Wireframes / diseño: `diseño.pen` (diseño original), `diseño2.pen` (wireframes), `HIJAS.PEN`, exports `Garcia_Torres_Jose_Rafael_Diseño2.pdf` y `export1.pdf`
- **Repositorio:** Git local inicializado; URL pública de GitHub pendiente (`https://github.com/<usuario>/superautos-carballo`)
- **Archivos de solo lectura:** todos los anteriores. **El único documento que se edita en esta reconstrucción es `plan.md`.**

---

## Sobre esta revisión (v3)

Esta versión reconstruye y completa el plan anterior (07/08/2026) con toda la información disponible del proyecto, para que sirva de única fuente de consulta en la fase de desarrollo:

- **Guía visual integrada:** el plan incorpora ahora el **design system completo** (paleta principal y secundaria, tipografías y jerarquía, sistema de espaciado, componentes con estados y accesibilidad visual) definido en `guia_visual.pen` y exportado a `guia_visual/`. Sustituye a la sección 8 anterior.
- **Sitemap definitivo:** se adopta el del mapa web (`jose_rafael_Garcia_Torres_sitemap.xlsx` / `MAPA_WEB.pdf`), con **identificadores de página (P01–P07)** y **componentes reutilizables (C01–C09)**. Se añade de forma explícita la página `404.html` (P06) y `privacidad.html` (P07) a la estructura.
- **Flujograma documentado:** los tres formularios quedan ligados a su flujo (`flujograma/`), que define el recorrido completo (entrada, campos, validación, estados de envío y mensajes) del contacto, la prueba de conducción y los recambios.
- **Wireframes como referencia de diseño:** se actualiza el origen de diseño (antes solo `diseño.pen`) para incluir `diseño2.pen` (wireframes) y `HIJAS.PEN`, con sus exports PDF. Las 3 resoluciones por página siguen siendo **390 / 768 / 1440 px**.
- **Tokens finales del diseño:** los valores de color se han alineado con los tokens reales del diseño (p. ej. texto `#111111`, gris informativo `#6B7280`, error `#DC2626`, éxito `#16A34A`), que sustituyen a las propuestas previas.

---

## 1. Resumen ejecutivo

Desarrollo de un sitio web corporativo moderno, responsive y orientado a la conversión para **Superautos Carballo**, concesionario multimarca de vehículos de alta gama con sede en Carballo. El sitio presenta el catálogo de vehículos (8 de ejemplo), explica los servicios de venta, mantenimiento y posventa, facilita la solicitud de recambios bajo pedido y ofrece canales de conversión: contacto con selector de motivo y solicitud de prueba de conducción en 3 pasos.

Esta fase desarrolla una **maqueta front-end funcional**: **7 páginas tipo**, un **catálogo de demostración** con los datos en el propio sitio (objeto JS), **tres formularios** con validación en cliente y estados de envío **simulados**, y todo el trabajo de **diseño responsive, SEO, accesibilidad y rendimiento** preparado para conectarse en el futuro a una base de datos y a un backend PHP.

La ficha de vehículo es la **plantilla reutilizable** del proyecto: no hay una página por coche; el catálogo y la home enlazan siempre a `ficha_vehiculo.html`, que se rellena según el vehículo seleccionado.

---

## 2. Alcance y límites

### 2.1 Alcance de esta fase

| Bloque | Detalle |
|---|---|
| Páginas tipo | `index.html`, `catalogo.html`, `servicios.html`, `recambios.html`, `contacto.html` + 2 páginas hijas (`ficha_vehiculo.html`, `proba_conduccion.html`). **7 páginas en total** + `privacidad.html` (RGPD, P07) y `404.html` (P06). |
| Catálogo de demostración | **8 vehículos de ejemplo** con los datos en el propio sitio (objeto JS) y maquetado en HTML, sin servidor ni base de datos. |
| Formularios | Contacto (con selector de motivo), prueba de conducción (3 pasos) y recambios. Validación en cliente y estados de envío **simulados**. Flujos definidos en `flujograma/`. |
| Interacciones | Menú (con menú móvil por teclado), carrusel de destacados (Bootstrap 5), filtros del catálogo, galería con zoom en la ficha, microinteracciones y animaciones de entrada. |
| Diseño | Adaptable (390 / 768 / 1440 px), accesible (WCAG 2.2 AA), SEO básico e imágenes optimizadas. Design system definido en la guía visual (sección 8 de este plan). |

### 2.2 Qué queda para una programación posterior

- Conexión del catálogo a una base de datos real y panel de administración para gestionar vehículos.
- Envío real de los formularios por correo (backend PHP) y la diferenciación efectiva de las solicitudes según el motivo.
- Gestión de citas y pruebas de conducción como sistema con confirmación y agenda.
- Presupuestador de recambios en línea con pago, área privada de clientes y gestión de usuarios.

---

## 3. Sitemap y jerarquía de páginas

### 3.1 Sitemap con identificadores (fuente: mapa web, `jose_rafael_Garcia_Torres_sitemap.xlsx`)

```
Superautos Carballo
├── P01 index.html                 # Inicio: hero + carrusel, servicios, destacados, por qué elegirnos, CTA final
├── P02 catalogo.html              # Catálogo (cabecera, filtros, cuadrícula 8 vehículos, estado vacío)
│   └── P02.1 ficha_vehiculo.html  # Ficha del vehículo (plantilla reutilizable, hija del catálogo)
│       └── P02.1.1 proba_conduccion.html   # Solicitud de prueba de conducción (3 pasos, hija de la ficha)
├── P03 servicios.html             # Venta, mantenimiento y posventa
├── P04 recambios.html             # Recambios + formulario de solicitud
├── P05 contacto.html              # Formulario de contacto, datos y mapa
├── P06 404.html                   # Página de error 404 personalizada
└── P07 privacidad.html            # Política de privacidad y aviso legal (RGPD/LOPDGDD)
```

### 3.2 Relaciones entre páginas

| Desde | Enlaces hacia | Tipo de relación |
|---|---|---|
| `index.html` | `catalogo.html`, `servicios.html`, `contacto.html` y `ficha_vehiculo.html` (destacados) | Navegación principal y contenidos destacados |
| `catalogo.html` | `ficha_vehiculo.html` (desde cada tarjeta) | **Descendente: listado → ficha** |
| `ficha_vehiculo.html` | `proba_conduccion.html` (CTA «Solicitar prueba») y `contacto.html` (CTA «Solicitar información», con datos prefilled) | **Descendente: ficha → prueba**; conversión |
| `proba_conduccion.html` | `contacto.html` (vía alternativa) | Complementaria |
| `servicios.html` | `contacto.html` (CTA de cada servicio) y `recambios.html` | Conversión |
| `recambios.html` | `contacto.html` (datos alternativos) | Complementaria |
| `contacto.html` | — (destino final de conversión) | — |
| `404.html` | `index.html` | Recuperación de error |
| `privacidad.html` | — (legal; enlazada desde los checkbox RGPD) | — |

Reglas de relación:

- Todas las páginas comparten el **menú global (C01)** y el **footer (C02)**. El logo del header enlaza siempre a `index.html`.
- **Dos páginas hijas** (requisito de la fase): `ficha_vehiculo.html` (hija del catálogo) y `proba_conduccion.html` (hija de la ficha).
- La ficha es **siempre el mismo archivo**; se rellena según el vehículo seleccionado (no hay una página por coche).
- **Breadcrumb (C06)** en las páginas hijas: *Inicio > Catálogo > [vehículo]* en la ficha e *Inicio > Catálogo > [vehículo] > Solicitar prueba* en la solicitud de prueba.
- **Enlace «saltar al contenido» (C08)** en todas las páginas.

### 3.3 Componentes reutilizables (fuente: mapa web)

| ID | Componente | Dónde se usa | Contenido |
|---|---|---|---|
| C01 | Menú de navegación global | Todas las páginas | Inicio, Catálogo, Servicios, Recambios, Contacto + CTA «Reservar cita»; hamburguesa en móvil |
| C02 | Footer | Todas las páginas | Columnas de enlaces, datos del concesionario y redes sociales (Instagram, Facebook, YouTube) |
| C03 | Tarjeta de vehículo | Catálogo y destacados de la home | Imagen, marca/modelo, etiquetas (año, km, combustible, cambio), precio y botón «Ver ficha» |
| C04 | Carrusel de destacados | Inicio | Slides con imagen de gran formato, marca/modelo, datos, precio y CTA (Carousel Bootstrap 5) |
| C05 | Bloque de servicio | Servicios y home (versión resumida) | Icono/imagen, título, descripción, lista de servicios y CTA |
| C06 | Breadcrumb | Páginas hijas | Enlaces de texto con la jerarquía |
| C07 | Estados de formularios | Contacto, prueba y recambios | Inicial, error de campo, envío (spinner), éxito, error general |
| C08 | Saltar al contenido + SEO básico | Todas las páginas | Enlace de salto, `title`/`meta description` únicos, un `h1`, HTML semántico |
| C09 | Bloque de confianza | Ficha de vehículo y home | Certificación, revisión y garantía del vehículo (en home: «Por qué elegirnos») |

---

## 4. Descripción de cada página

### 4.1 Inicio (`index.html`) — P01

Puerta de entrada: presentar la marca, captar la atención de una clientela de alto poder adquisitivo y dirigir el tráfico hacia el catálogo, los servicios y el contacto.

1. **Hero con carrusel de vehículos destacados (C04).** Imagen de gran formato, marca/modelo, datos resumen, precio y botón de acción. Sobresombreado inferior para garantizar la legibilidad del texto.
2. **Resumen de servicios (C05).** Tres bloques (Venta, Mantenimiento, Posventa) con icono, título, descripción breve y botón hacia `servicios.html`.
3. **Vehículos destacados (C03).** Cuadrícula con las mismas tarjetas del catálogo, que enlazan a la ficha.
4. **Por qué elegirnos (C09).** Bloque de confianza: trato directo, certificación, garantía, servicio integral y entrega a domicilio en Galicia *(supuesto por confirmar, ver 12.4)*.
5. **CTA final.** Botón «Contactar» y datos de contacto resumidos.

**CTAs.** «Ver catálogo», «Ver ficha», «Conocer servicios», «Contactar».

### 4.2 Catálogo (`catalogo.html`) — P02

Mostrar los 8 vehículos de ejemplo en cuadrícula y permitir filtrarlos. Estructura:

1. **Cabecera.** Titular, descripción breve y número de vehículos disponibles.
2. **Barra de filtros.** Por **marca**, **combustible** y **precio** (rango), y ordenación por precio (ascendente/descendente) y año. Los filtros se combinan entre sí y la cuadrícula se actualiza al momento (respuesta visual con fade + contador de resultados).
3. **Cuadrícula de resultados (C03).** Tarjetas de vehículo reutilizables (1 columna en móvil, 2 en tablet, 3 en escritorio).
4. **Estado vacío.** Mensaje cuando ningún vehículo cumple los filtros, con botón «Limpiar filtros».

**CTAs.** «Ver ficha» en cada tarjeta, «Limpiar filtros».

### 4.3 Ficha de vehículo (`ficha_vehiculo.html`) — P02.1, hija del catálogo

Muestra la información completa de un vehículo y ofrece las acciones de conversión. Es la **misma página para todos los vehículos**: lee el identificador de la URL, busca los datos en el catálogo front-end y los vuelca en los bloques. Si el identificador no existe, muestra un aviso con enlace al catálogo.

| Bloque | Contenido |
|---|---|
| Breadcrumb (C06) | Inicio > Catálogo > [vehículo] |
| Galería | Fotografías del vehículo (4–6), con ampliación/zoom (lightbox accesible) |
| Resumen y precio | Marca, modelo, precio y etiquetas de año, kilometraje, combustible, cambio y potencia |
| Datos técnicos | Garantía, equipamiento, estado y disponibilidad |
| Equipamiento | Listado de extras incluidos |
| Bloque de confianza (C09) | Certificación, revisión y garantía del vehículo |
| CTAs | «Solicitar información» (→ `contacto.html?vehiculo=<id>&motivo=informacion`, prefilled) y «Solicitar prueba» (→ `proba_conduccion.html?vehiculo=<id>`, prefilled) |
| Aviso de id inexistente | Mensaje de aviso y enlace a `catalogo.html` |

### 4.4 Solicitud de prueba de conducción (`proba_conduccion.html`) — P02.1.1, hija de la ficha

Formulario **en 3 pasos** para solicitar una prueba de conducción (detalles en 7.2). Se accede desde la ficha con el vehículo ya seleccionado. Breadcrumb: *Inicio > Catálogo > [vehículo] > Solicitar prueba*.

**Aviso importante mostrado en esta página:** la solicitud **no es una reserva automática**. Es una petición que el concesionario confirma por teléfono o correo antes de cerrar la cita, para gestionar expectativas y evitar reservas fantasma.

### 4.5 Servicios (`servicios.html`) — P03

Presenta los tres servicios con la misma estructura (C05: icono o imagen, título, descripción, lista de servicios incluidos y CTA):

- **Venta.** Asesoramiento, financiación, prueba de conducción y tramitación de la compra.
- **Mantenimiento.** Revisiones oficiales, diagnóstico y reparación, preparación para la ITV y vehículo de sustitución *(supuesto, ver 12.4)*.
- **Posventa.** Garantía *(supuesto)*, atención al cliente, soporte técnico y consejos de mantenimiento.

**CTAs.** «Contactar» en cada sección y enlace a `recambios.html` desde mantenimiento.

### 4.6 Recambios (`recambios.html`) — P04

Página informativa + formulario independiente de solicitud de recambios (sección 7.3). Explica el proceso (**consulta → confirmación → pedido al proveedor → aviso al cliente**) y que las piezas son **bajo pedido**, con plazo estimado de **1–2 semanas** desde la confirmación *(supuesto, ver 12.4)*.

### 4.7 Contacto (`contacto.html`) — P05

1. **Formulario de contacto** con **selector obligatorio de motivo de la consulta** (sección 7.1). Cuando se llega desde la ficha con el botón «Solicitar información», el vehículo (identificador, marca y modelo) y el motivo llegan prefilled por la URL.
2. **Datos del concesionario.** Dirección, teléfono, correo y horario (coherentes con el footer y la home).
3. **Mapa e indicaciones.** Mapa **incrustado** (iframe interactivo de OpenStreetMap, o Google Maps si el cliente lo prefiere) con imagen estática de reserva, indicaciones de acceso en texto y botón «Cómo llegar» que **abre la app de navegación del móvil** (enlace `geo:`). Si se usa Google Maps, se activa el banner de cookies.

### 4.8 Página 404 (`404.html`) — P06

Página de error personalizada: mensaje claro, enlace de vuelta al inicio y (opcionalmente) al catálogo. Debe responder con estado HTTP 404.

### 4.9 Política de privacidad y aviso legal (`privacidad.html`) — P07

Página legal (no es página tipo): explica finalidad del tratamiento, legitimación (consentimiento), derechos (acceso, rectificación, supresión, oposición, limitación y portabilidad), conservación, cookies y aviso legal. Enlazada desde el checkbox RGPD de los tres formularios.

---

## 5. Catálogo de vehículos

### 5.1 Los 8 vehículos de ejemplo

Datos y precios ficticios. La mezcla de combustibles y tipos es intencionada: con solo 8 coches, los filtros de marca, combustible y precio tienen de qué distinguir sin que la demostración se haga inmanejable.

| id | Vehículo | Combustible | Tipo |
|---|---|---|---|
| `ferrari-12-cilindri` | Ferrari 12 Cilindri | Gasolina | Deportivo |
| `porsche-911-targa-4s` | Porsche 911 Targa 4S | Gasolina | Deportivo |
| `audi-q8` | Audi Q8 | Gasolina | SUV de lujo |
| `lamborghini-revuelto` | Lamborghini Revuelto | Híbrido | Deportivo |
| `lamborghini-urus` | Lamborghini Urus | Híbrido | SUV de lujo |
| `porsche-taycan` | Porsche Taycan | Eléctrico | Deportivo |
| `mercedes-eqs` | Mercedes EQS | Eléctrico | Berlina de lujo |
| `mercedes-amg-eqe` | Mercedes AMG EQE | Eléctrico | Berlina de lujo |

### 5.2 Datos de cada ficha

| Dato | Ejemplo |
|---|---|
| Marca y modelo | Porsche 911 Targa 4S |
| Precio | 179.900 € |
| Año | 2023 |
| Quilometraje | 12.500 km |
| Combustible | Gasolina |
| Cambio | Automático PDK |
| Potencia | 450 CV |
| Garantía | 24 meses |
| Equipamiento | Asientos deportivos, techo panorámico, sistema BOSE… |
| Disponibilidad | En stock / Bajo pedido |
| Imágenes | Galería de fotografías del vehículo |
| CTAs | «Solicitar información» y «Solicitar prueba» |

### 5.3 Ficha como plantilla reutilizable

El catálogo y la home enlazan siempre a `ficha_vehiculo.html?id=<id>`. La página busca el id en el objeto JS del catálogo y rellena los bloques de la sección 4.3. Añadir o retirar un coche no obliga a crear ni borrar páginas: solo se actualiza la fuente de datos. La estructura quedará **preparada para conectarse a una base de datos**: la única pieza que cambiará será el origen de los datos (de un objeto JS a una respuesta de API/BD), sin rediseñar las páginas.

### 5.4 Imágenes por dispositivo

Cada vehículo dispone de 3 resoluciones en `assets/img/<marca>/<vehiculo>@<factor>.webp`:

| Vehículo | Móvil (390) | Tablet (768) | Ordenador (1440) |
|---|---|---|---|
| Ferrari 12 Cilindri | `assets/img/Ferrari/ferrari_12_cilindri.webp` | `@2x.webp` | `@3x.webp` |
| Porsche 911 Targa 4S | `assets/img/porche/porche_911_targa_4s.webp` | `@2x.webp` | `@3x.webp` |
| Audi Q8 | `assets/img/Audi/audi_q8_suv.webp` | `@2x.webp` | `@3x.webp` |
| Lamborghini Revuelto | `assets/img/Lamborghini/lamborghini_rebuelt.webp` | `@2x.webp` | `@3x.webp` |
| Lamborghini Urus | `assets/img/Lamborghini/Lamborghini_urus.webp` | `@2x.webp` | `@3x.webp` |
| Porsche Taycan | `assets/img/porche/Taycan_electrico.webp` | `@2x.webp` | `@3x.webp` |
| Mercedes EQS | `assets/img/Mercedes/Mercedes_eqs_electrico.webp` | `@2x.webp` | `@3x.webp` |
| Mercedes AMG EQE | `assets/img/Mercedes/Mercedes_amg_eqe_electrico.webp` | `@2x.webp` | `@3x.webp` |

- **Ordenador (1440 px):** archivos terminados en `@3x.webp`.
- **Tablet (768 px):** archivos terminados en `@2x.webp`.
- **Móvil (390 px):** nombre base `.webp` (sin sufijo).

Además: `assets/img/hero.webp` para el hero, los logos de marca (`.webp` + `.xcf` de origen en GIMP) y el logo corporativo de prueba. Las imágenes restantes de `assets/img/` (modelos no incluidos en el catálogo: Ferrari 849 Testarrosa, Porsche 718 Spyder RS, Audi Q7/A1, Mercedes CL, Lamborghini Temerario…) quedan como **material disponible para el carrusel o futuras ampliaciones**.

---

## 6. Stack tecnológico y estructura de archivos

### 6.1 Stack propuesto

| Área | Tecnología |
|---|---|
| Marcado | HTML5 semántico |
| Estilos | **Bootstrap 5** + CSS personalizado (tokens/variables CSS de la guía visual, sección 8) |
| Comportamiento | JavaScript vanilla (sin dependencias para el núcleo) + componentes de Bootstrap. **El carrusel de la home usa obligatoriamente el componente Carousel de Bootstrap 5** (`bootstrap.bundle.min.js`), sin JS propio |
| Backend (fase futura) | **PHP** (procesamiento de formularios, envío de e-mail, seguridad) |
| Imágenes | **WebP con fallback JPEG** (3 resoluciones por imagen) |
| Fuentes | Google Fonts: **Inter** (títulos y cuerpo) + **Montserrat** (negrita y botones) |
| Iconos | Lucide (SVG inline) / Bootstrap Icons |
| Diseño | Bootstrap 5 (grid responsive 390/768/1440, menú colapsable, carrusel, modal de confirmación) |

### 6.2 Por qué Bootstrap 5

- Es lo que viene en el **export del diseño Pencil** (`diseño.pen` / `diseño2.pen`).
- Resuelve con el componente oficial el **Carousel** (requisito del plan), la **cuadrícula responsive** (390/768/1440), el **menú colapsable** y el **modal** de confirmación, sin JS propio para eso.
- Tiene buena accesibilidad base (ARIA en carrusel y collapse) y documentación amplia.
- El resto (estilos, tokens de la guía visual, microinteracciones, animaciones) es CSS propio: Bootstrap es la base, no el estilo.

### 6.3 Estructura de carpetas prevista

```
Proyecto/
├── index.html                 # Inicio (P01)
├── catalogo.html              # Catálogo (P02)
├── ficha_vehiculo.html        # Ficha del vehículo (P02.1, plantilla reutilizable)
├── proba_conduccion.html      # Solicitud de prueba (P02.1.1, 3 pasos)
├── servicios.html             # Servicios (P03)
├── recambios.html             # Recambios (P04)
├── contacto.html              # Contacto (P05)
├── 404.html                   # Página 404 (P06)
├── privacidad.html            # Política de privacidad (P07)
├── assets/
│   ├── css/
│       │   ├── tokens.css         # Variables CSS de la guía visual (sección 8) — colores #0052FF, #FFFFFF, #CFD8E6, #000000, #6B7280, #0038B8, #DC2626, #16A34A + tipografía Inter/Montserrat
│   │   ├── base.css           # Reset y estilos base
│   │   ├── layout.css         # Header, footer, grid
│   │   └── componentes.css    # Botones, tarjetas, formularios, carrusel
│   ├── js/
│   │   ├── main.js            # Navegación, menú móvil, interacciones comunes
│   │   ├── catalogo.js        # Datos del catálogo (objeto JS), filtros y ordenación
│   │   ├── ficha.js           # Carga de la ficha según id de la URL + galería/lightbox
│   │   ├── contacto.js        # Validación y estados del formulario de contacto
│   │   ├── proba.js           # Formulario de prueba de conducción en 3 pasos
│   │   └── recambios.js       # Validación y estados del formulario de recambios
│   ├── php/                   # (FASE FUTURA – backend) config, contacto, proba, recambios, envia_email
│   ├── bootstrap/
│   │   ├── bootstrap.min.css  # Framework Bootstrap 5
│   │   └── bootstrap.bundle.min.js
│   └── img/                   # Imágenes optimizadas (WebP + fallback JPEG)
│       ├── hero.webp
│       ├── Ferrari/           # ferrari_12_cilindri (y material de la marca)
│       ├── porche/            # porche_911_targa_4s, Taycan_electrico
│       ├── Audi/              # audi_q8_suv
│       ├── Lamborghini/       # lamborghini_rebuelt, Lamborghini_urus
│       └── Mercedes/          # Mercedes_eqs_electrico, Mercedes_amg_eqe_electrico
├── favicon.svg
├── robots.txt
├── sitemap.xml
├── guia_visual/               # Guía visual exportada (12 PNG + PDF) — referencia de diseño
├── flujograma/                # Flujograma de formularios (referencia)
└── plan.md
```

En esta fase la carpeta `assets/php/` no contiene código: documenta la estructura prevista para la fase de programación.

---

## 7. Formularios

Decisión tomada en el Fito 2 tras revisar las webs de referencia: **no hay un único formulario universal, hay un formulario por contexto**, y el vehículo ya se sabe cuando se viene de una ficha.

| Formulario | Página | Motivo | Cómo llega el vehículo |
|---|---|---|---|
| Contacto con selector de motivo | `contacto.html` (P05) | Información, prueba, financiación, mantenimiento, posventa, consulta general | Prefilled desde la ficha vía URL |
| Prueba de conducción (3 pasos) | `proba_conduccion.html` (P02.1.1) | Reserva de una prueba | Prefilled desde la ficha vía URL |
| Recambios | `recambios.html` (P04) | Solicitud de piezas | El usuario escribe marca/modelo de la pieza |

> Los flujos completos de los tres formularios están definidos en el flujograma (`flujograma/` y `Garcia_Torres_Jose_Rafael_Flujograma.pdf`): entrada, campos, decisión de motivo, validación, envío, estados de éxito/error y fin. Este plan recoge el resumen operativo; el flujograma es la fuente detallada.

### 7.1 Formulario de contacto (`contacto.html`)

**Campos comunes (siempre):**

| Campo | Tipo | Obligatorio | Validación |
|---|---|---|---|
| Nombre | texto | sí | mínimo 2 caracteres |
| Apellidos | texto | sí | mínimo 2 caracteres |
| Correo | `email` | sí | formato de correo |
| Teléfono | `tel` | no | 9–15 dígitos |
| **Motivo de la consulta** | **selector** | **sí** | **debe elegirse una opción** |
| Mensaje | área de texto | sí | mínimo 10, máximo 1000 caracteres |
| Privacidad (RGPD) | checkbox | sí | debe estar marcada |

**Selector de motivo (obligatorio):** información sobre un vehículo / reserva de una prueba de conducción / financiación / mantenimiento / posventa / consulta general.

**Campos condicionales según el motivo:**

- **Información sobre un vehículo:** aparece el campo «Vehículo» (selector con el catálogo, o texto libre). Si viene de la ficha, llega **prefilled y de solo lectura**.
- **Reserva de una prueba de conducción:** aparecen «Vehículo», «Fecha preferente» y «Franja horaria» (mañana 9:00–14:00 / tarde 15:00–20:00). Además, se muestra el aviso de que **es una solicitud pendiente de confirmación**, no una reserva automática.
- **Financiación, mantenimiento, posventa, consulta general:** solo el campo de mensaje.

**Prefill desde la ficha.** El botón «Solicitar información» de la ficha enlaza a `contacto.html?vehiculo=<id>&motivo=informacion`. El formulario lee el parámetro, preselecciona el motivo y rellena el identificador, la marca y el modelo del vehículo. Al enviar, el identificador y el modelo van como campos ocultos (para que el concesionario sepa de qué coche se habla).

**Estados (C07).** Inicial, error de campo, envío en proceso (spinner), éxito (mensaje de confirmación y vaciado) y error general (se conservan los datos). **Ningún dato abandona el navegador** (envío simulado).

### 7.2 Formulario de prueba de conducción (`proba_conduccion.html`)

Formulario en **3 pasos**, accesible y con resumen final:

1. **«El vehículo y la cita»:** vehículo (identificador, marca y modelo) **prefilled desde la ficha y de solo lectura**, fecha preferente y franja horaria.
2. **«Tus datos»:** nombre, apellidos, correo y teléfono.
3. **«Revisa y envía»:** resumen de la solicitud, checkbox RGPD y botón de envío.

Aviso destacado en la página y en el paso 1:

> **Tu solicitud está pendiente de confirmación.** No se reserva nada automáticamente: el concesionario contactará contigo por teléfono o correo para confirmar la fecha y la hora de la prueba.

En el estado de éxito se repite la misma idea: «Hemos recibido tu solicitud de prueba del *Porsche 911 Targa 4S*. En breve te confirmaremos la fecha y la hora». El concesionario confirma por teléfono o correo antes de cerrar la cita (evita reservas fantasma).

### 7.3 Formulario de recambios (`recambios.html`)

Formulario independiente, con los campos ya definidos: referencia de la pieza, marca y modelo del vehículo, año (1980–2026), nombre, apellidos, correo, teléfono, comentarios y checkbox RGPD. El mensaje de éxito indica que la solicitud ha sido recibida y que el plazo de respuesta es de **1–2 semanas**.

**Estructura del formulario:**

- Grupo **DATOS DEL VEHÍCULO:** Referencia de la pieza (*), Marca, Modelo, Año.
- Grupo **DATOS DE CONTACTO:** Nombre (*), Apellidos (*), E-mail (*), Teléfono (*).
- **Comentarios:** textarea opcional.
- Checkbox **RGPD** con enlace a la política de privacidad.
- Botón **«ENVIAR SOLICITUD»** con icono de flecha.

| Campo | Tipo HTML | Requerido | Autocomplete |
|---|---|---|---|
| Referencia de la pieza | text | ✓ | off |
| Marca | text | – | organization |
| Modelo | text | – | – |
| Año | number (1980–2026) | – | – |
| Nombre | text | ✓ | name |
| Apellidos | text | ✓ | family-name |
| E-mail | email | ✓ | email |
| Teléfono | tel | ✓ | tel |
| Comentarios | textarea | – | – |

### 7.4 Diferenciación de solicitudes (cómo funciona por dentro)

- **En esta fase (maqueta):** los tres formularios validan en cliente (JS) y muestran estados de envío **simulados**. El selector de motivo solo condiciona qué campos se ven y qué texto de confirmación se muestra. **Ningún dato abandona el navegador**, y así se indica en la política de privacidad.
- **Fase de programación (backend PHP):** cada formulario se envía a su script (`contacto.php`, `proba_conduccion.php`, `recambios.php` + `envia_email.php`). El servidor valida las entradas, comprueba CSRF, honeypot y límite de intentos, y **encamina la solicitud según el motivo** (el selector decide destinatario y asunto del correo). En los formularios que vienen de una ficha, el id, la marca y el modelo viajan en campos ocultos y van en el cuerpo del correo.
- **Qué no se hace en esta fase:** ni agenda en línea ni CRM. El concesionario recibe el correo y confirma manualmente (sobre todo la prueba de conducción, que es una solicitud, no una reserva).

### 7.5 Reglas comunes a todos los formularios

- Validación en cliente con `blur` y al enviar; mensajes en español junto al campo con `role="alert"` y `aria-describedby`.
- `autocomplete` adecuado (`name`, `family-name`, `email`, `tel`).
- Campos obligatorios con `required` + `aria-required`.
- Checkbox de privacidad obligatorio y enlace a `privacidad.html`.
- En la fase futura se repite la misma validación en el servidor.

---

## 8. Guía visual y design system

Fuente: `guia_visual.pen`, `Plan_Guia_Visual.md` y exportaciones en `guia_visual/` (12 secciones en frames A4: portada, logotipo, paletas, tipografía, espaciado, botones, formularios, tarjetas, menús, accesibilidad y usos). **Los valores canónicos están en la guía; este plan los recoge para implementarlos como tokens CSS.**

### 8.1 Paleta principal (tokens del diseño)

| Token | Valor | Uso |
|---|---|---|
| `$accent` | `#0052FF` | **Azul eléctrico:** separadores, bordes, chips, **botones primarios** |
| `$surface-primary` | `#FFFFFF` | **Blanco puro:** fondos de tarjetas y superficies |
| `$border-subtle` | `#CFD8E6` | **Gris borde:** fondo home, cabecera, contraste |
| `$surface-inverse` | `#000000` | **Negro puro:** color de fondo |
| `$foreground-muted` | `#6B7280` | **Gris texto:** textos secundarios, subtítulos y metadata |
| `$foreground-primary` | `#000000` | Texto principal sobre fondo claro |
| `$foreground-inverse` | `#FFFFFF` | Textos sobre fondo negro |
| Overlay de hero | `linear-gradient(180deg, #00000000 → #000000CC)` | Legibilidad del texto sobre imágenes |

### 8.2 Paleta secundaria (confirmada en la guía visual)

| Token | Valor | Uso |
|---|---|---|
| `$accent-hover` | `#0038B8` | **Hover activo:** estado hover y activo de botones y enlaces con acento azul |
| `$danger` | `#DC2626` | **Error:** mensajes de error y bordes de campos inválidos |
| `$success` | `#16A34A` | **Éxito:** confirmaciones y estados correctos en formularios |

> **Reglas de uso:** el azul eléctrico `#0052FF` se usa para botones, separadores, bordes y chips. El hover se oscurece a `#0038B8`. El gris `#6B7280` es para textos secundarios, subtítulos y metadata. El negro `#000000` es el color de fondo principal. El blanco `#FFFFFF` es para fondos de tarjetas y superficies. El gris borde `#CFD8E6` se usa para fondos de home, cabecera y contraste.

### 8.3 Tipografías y jerarquía

| Rol | Fuente | Peso | Tamaño | Uso |
|---|---|---|---|---|
| Título Gigante / Impacto | Inter | 400 (Regular) | 64 px | Títulos de impacto |
| Título Impactante | Inter | 700 (Bold) | 40 px | Títulos de impactante normal |
| Título Principal H1 | Inter | 700 (Bold) | 36 px | Texto H1 |
| Subtítulo H2 | Inter | 700 (Bold) | 24 px | Etiquetas H2 en secciones |
| Apartado H3 | Inter | 700 (Bold) | 20 px | Títulos H3 |
| Texto Base | Inter | 700 (Bold) | 16 px | Texto normal body |
| Párrafo Resaltado | Inter | 700 (Bold) | 16 px | Párrafo resaltado |
| Texto Secundario | Inter | 700 (Bold) | 14 px | Texto secundario en negrita |
| Texto Negrita | Montserrat | 700 (Bold) | 16 px | Etiqueta strong/bold en texto del body |
| Texto Botón | Montserrat | 400 (Regular) | 12 px | Botones |
| Notas / Pie de página | Inter | 400 (Regular) | 12 px | Notas pie de página y footer |

**Fuentes:** **Inter** (Regular, Bold) + **Montserrat** (Regular, Bold). Cargar solo los pesos necesarios con `font-display: swap`.

**Reglas:** **Inter** es la fuente principal para títulos y cuerpo. **Montserrat** se usa específicamente para texto en negrita (`<strong>`, `<b>`) y botones.

### 8.4 Sistema de espaciado (base 8 px)

- **Escala:** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 px (múltiplos de 8; la guía usa la base de Bootstrap).
- **Padding de sección:** 96 px en escritorio / 48 px en móvil.
- **Contenedor:** ancho máximo 1200 px (columna útil ≈ 1140 px), `gutter` de 24 px (16 px en móvil).
- **Radios:** 4 px (inputs y campos), 8 px (tarjetas), 50 % (botones pill cuando aplique).
- **Separación entre campos de un formulario:** 24 px verticales.

### 8.5 Componentes (resumen de especificaciones)

- **Botones:** primario (fondo `#0052FF`, texto `#FFFFFF`), secundario (outline/borde `#CFD8E6` o versión sobre negro), terciario (enlace con subrayado). Radio 8 px, altura mínima 44–48 px, icono opcional (Lucide inline).
- **Campos de formulario:** fondo `#FFFFFF`, borde 1 px `#CFD8E6`, radio 4 px, placeholder `#6B7280`, foco con anillo 2 px `#0052FF` (o negro), error con borde `#DC2626` y mensaje junto al campo.
- **Tarjetas de vehículo (C03):** fondo blanco, borde 1 px `#CFD8E6`, radio 8 px; hover con elevación (sombra) y leve zoom de la imagen.
- **Menú (C01):** escritorio horizontal; enlace activo con `aria-current="page"` marcado en acento azul; móvil en menú hamburguesa operable por teclado.
- **Estados de formulario (C07):** inicial, error de campo, envío (spinner), éxito, error general — definidos en la guía y en el flujograma.

### 8.6 Estados de los componentes

| Estado | Botones | Campos | Tarjetas |
|---|---|---|---|
| Normal | Fondo `#0052FF` / outline `#CFD8E6` | Borde `#CFD8E6` | Borde `#CFD8E6` |
| Hover | Fondo `#0038B8` (primario) | Borde `#6B7280` | Elevación + sombra, zoom suave de imagen |
| Foco (visible) | Anillo 2 px contrastado | Anillo 2 px `#0052FF`/negro | Anillo 2 px contrastado |
| Activo | Acento `#0038B8` / presionado | `aria-invalid` si aplica | — |
| Desactivado | Opacidad 50 % (`disabled`) | Opacidad 50 % (`disabled`) | — |
| Error | — | Borde `#DC2626` + mensaje `role="alert"` | — |

### 8.7 Accesibilidad visual (WCAG 2.2 AA)

- **Contraste:** pares garantizados (blanco/negro ≈ 21:1; blanco/`#0052FF` ≈ 8,6:1; `#6B7280`/blanco ≈ 4,9:1). `#0052FF` sobre blanco supera WCAG AA para texto normal.
- **Foco visible:** anillo de 2 px con contraste suficiente en todos los elementos interactivos (`:focus-visible`).
- **Objetivos táctiles:** mínimo 24×24 px (WCAG 2.5.8); en la práctica 44–48 px en botones e iconos.
- **Movimiento reducido:** todas las animaciones se reducen o desactivan con `prefers-reduced-motion`.
- **Texto legible:** interlineados de la sección 8.3, anchos de línea ≤ 75 caracteres y párrafos breves.

---

## 9. Funcionalidades e interacciones

### 9.1 Menú y navegación

- **Menú principal (C01):** Inicio, Catálogo, Servicios, Recambios y Contacto + CTA «Reservar cita» (→ `contacto.html?motivo=prueba`). En escritorio horizontal; en tablet/móvil colapsa en un menú hamburguesa operable por teclado (`aria-expanded`, `aria-controls`, cierre con `Esc`).
- **Enlace activo** marcado visualmente y con `aria-current="page"`.
- **Breadcrumb (C06)** en las páginas hijas (ficha y prueba de conducción).
- **Footer (C02):** columnas de enlaces, datos del concesionario y **redes sociales**.
- **Enlace «saltar al contenido» (C08)** en todas las páginas.

### 9.2 Redes sociales

**Instagram, Facebook y YouTube** (las que mejor se ajustan a un concesionario premium). Comportamiento:

- Iconos en el footer, cada uno con su `aria-label`.
- Abren en **nueva pestaña** (`target="_blank"` con `rel="noopener"`).
- Enlazan a los **perfiles reales** del concesionario *(supuesto por confirmar con el cliente, ver 12.4)*.
- **No se incrustan publicaciones externas** en la web: evitaría peticiones y cookies de terceros. Enlaces directos bastan en esta fase.

### 9.3 Carrusel de destacados (home)

Componente **Carousel de Bootstrap 5** (sin JS propio). Controles anterior/siguiente, indicadores de posición y autoplay con pausa al pasar el ratón; en móvil admite arrastre. Con `prefers-reduced-motion` se reduce el desplazamiento y se detiene el autoplay. Máximo 8 slides (los 8 vehículos del catálogo).

### 9.4 Catálogo y filtros

- Cuadrícula generada desde los datos del catálogo front-end.
- Filtros combinables (marca, combustible, precio) y ordenación (precio asc/desc, año), sin recargar la página.
- **Respuesta visual de los filtros:** la cuadrícula se actualiza al momento y las tarjetas entran con un fade suave.
- Contador de resultados y estado vacío con «Limpiar filtros».

### 9.5 Galería de la ficha

Imagen principal con miniaturas clicables, navegación por teclado y **ampliación/zoom** (lightbox accesible). `alt` descriptivo en cada imagen. En la demostración, cada vehículo dispone de su imagen principal en 3 resoluciones; si se dispone de más tomas propias, se añaden a la carpeta de la marca para ampliar la galería (4–6 fotos por vehículo).

### 9.6 Mapa y acceso (contacto)

**Mapa incrustado** (iframe interactivo). Se prefiere **OpenStreetMap** porque un iframe sencillo no carga cookies de terceros, con lo que no hace falta banner de cookies; si el cliente prefiere Google Maps, se cambia el iframe y se activa el aviso de cookies *(supuesto, ver 12.4)*. En los dos casos:

- Imagen **estática de reserva** por si el iframe no carga.
- **Indicaciones de acceso en texto** (cómo llegar desde la AC-552, aparcamiento, etc.).
- Botón **«Cómo llegar»** que abre la **app de navegación del móvil** mediante un enlace `geo:` (Google Maps / Apple Maps). `mailto:`/`tel:` hacen lo propio con teléfono y correo.

### 9.7 Experiencia visual premium

- **Fotografías de gran formato**, protagonistas en hero y ficha.
- **Transiciones suaves** (150–250 ms, curva `ease-out`) en hover, cambio de imagen y apertura de menú.
- **Hover en las tarjetas:** elevación con sombra y un leve zoom de la imagen.
- **Galería con ampliación y zoom** (lightbox).
- **Animaciones de entrada discretas** (fade + pequeño desplazamiento) en la primera carga de las secciones.
- **Opcional:** un vídeo corto (≈30 s) o una **vista 360°** de algún vehículo, solo si hay material propio o autorizado; queda como recurso opcional, no prometido.
- **Todo respeta `prefers-reduced-motion`** y las animaciones nunca son condición para llegar al contenido.

---

## 10. SEO e indexación

### 10.1 Metadatos por página

Cada página incluirá: `<title>` único (50–60 caracteres), `<meta name="description">` único (120–155) con llamada a la acción, `<link rel="canonical">` con URL absoluta, `<html lang="es">` y favicon.

| Página | Title sugerido | Description sugerida |
|---|---|---|
| index.html | Superautos Carballo – Concesionario de coches de alta gama | Concesionario premium en Carballo. Catálogo, venta, mantenimiento y posventa. Solicita una prueba de conducción. |
| catalogo.html | Catálogo de coches de alta gama en Carballo – Superautos Carballo | Explora deportivos, SUV de lujo, híbridos y eléctricos en Superautos Carballo. Filtra por marca, combustible y precio. |
| ficha_vehiculo.html | [Marca y modelo] – Superautos Carballo | Ficha del [modelo]: precio, año, kilometraje, técnicos y equipamiento. Solicita información o reserva una prueba. |
| proba_conduccion.html | Solicitar prueba de conducción – Superautos Carballo | Solicita una prueba de conducción del [modelo]. Te confirmamos fecha y hora por teléfono o correo. |
| servicios.html | Servicios: venta, mantenimiento y posventa – Superautos Carballo | Asesoramiento en la compra, revisiones oficiales, preparación para la ITV y atención posventa en Carballo. |
| recambios.html | Recambios para coches de alta gama – Superautos Carballo | Solicita recambios bajo pedido para tu vehículo. Plazo de entrega estimado de 1–2 semanas. |
| contacto.html | Contacto – Superautos Carballo | Escríbenos, llámanos o visita nuestras instalaciones. Formulario de contacto y atención personalizada. |
| 404.html | Página no encontrada – Superautos Carballo | La página que buscas no existe. Vuelve al inicio de Superautos Carballo. |

La ficha y la prueba de conducción comparten URL única (la ficha lee el vehículo por parámetro), por lo que no se generan URLs duplicadas que indexar.

### 10.2 Open Graph y Twitter Cards

`og:type`, `og:title`, `og:description`, `og:image` (1200×630 px), `og:url`, `og:site_name` y `twitter:card = summary_large_image` con sus equivalentes `twitter:*`.

### 10.3 Datos estructurados (JSON-LD)

- **`AutoDealer`** en la home (nombre, dirección, teléfono, email, horario, geolocalización).
- **`ContactPage`** en `contacto.html`.
- **`WebSite`** con `Organization` y `sameAs` de redes sociales.

### 10.4 robots.txt y sitemap.xml

`robots.txt` con `Allow: /` y `Sitemap:` apuntando al dominio de producción.

`sitemap.xml` con las 7 páginas públicas (sin versiones tablet/móvil separadas, el sitio es responsive):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://www.superautoscarballo.es/</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://www.superautoscarballo.es/catalogo.html</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://www.superautoscarballo.es/ficha_vehiculo.html</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.superautoscarballo.es/proba_conduccion.html</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.superautoscarballo.es/servicios.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://www.superautoscarballo.es/recambios.html</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>
  <url><loc>https://www.superautoscarballo.es/contacto.html</loc><changefreq>yearly</changefreq><priority>0.8</priority></url>
</urlset>
```

### 10.5 Configuración y verificación

- Subir el proyecto a un dominio definitivo (`https://www.superautoscarballo.es`).
- Verificar en **Google Search Console** y **Bing Webmaster Tools**; enviar `sitemap.xml` y validar `robots.txt`.
- Configurar **404.html** personalizado con estado HTTP 404.
- Canonical absoluto en producción; `noindex` en entornos de desarrollo si es necesario.

---

## 11. Rendimiento y performance

### 11.1 Imágenes (mayor impacto)

- Convertir a **WebP con fallback JPEG** y `srcset`/`sizes` para las 3 resoluciones (sufijos `@3x`/`@2x`/base).
- Resolver por contexto: hero (1080 px), tarjetas (~410 px), miniaturas.
- `loading="lazy"` fuera del primer pliegue; `fetchpriority="high"` en el hero.
- `width` y `height` explícitos para evitar *layout shift* (CLS).
- Considerar CDN de imágenes en producción (p. ej. Cloudinary o similar).

### 11.2 Carga de fuentes

- `preconnect` a `fonts.googleapis.com` y `fonts.gstatic.com`.
- Solo los pesos necesarios (Inter 400/700; Montserrat 400/700).
- `font-display: swap` (el export de Pencil ya usa `&display=swap`).

### 11.3 CSS y JS

- Minificar y concatenar CSS/JS en producción.
- JavaScript diferido (`defer`) y, si aplica, dividido por página.
- No bloquear el render con scripts de terceros.
- Eliminar CSS/JS no utilizado (auditar con Lighthouse).

### 11.4 Objetivos de rendimiento (Lighthouse / Core Web Vitals)

| Métrica | Objetivo |
|---|---|
| LCP (Largest Contentful Paint) | < 2,5 s |
| INP (Interaction to Next Paint) | < 200 ms |
| CLS (Cumulative Layout Shift) | < 0,1 |
| Tiempo de carga total | < 3 s en 4G |
| Puntuación Lighthouse | ≥ 90 en Performance, Accessibility, Best Practices y SEO |

LCP, INP, CLS, contraste y puntuación Lighthouse son **objetivos de comprobación** en las pruebas finales de la maqueta, no resultados garantizados. En producción se activan compresión gzip/Brotli, caché de navegador (`Cache-Control`), HTTPS y HTTP/2.

---

## 12. Privacidad, seguridad y accesibilidad

### 12.1 Accesibilidad (WCAG 2.2 AA)

- **Estructura:** un `<h1>` por página, HTML semántico (`header`, `nav`, `main`, `section`, `article`, `footer`), botones reales (`<button>`) y enlaces reales (`<a href>`).
- **Contraste AA:** pares definidos en la sección 8.7 (blanco/negro, negro/`#FF9800`, `#6B7280`/blanco); `#9CA3AF` solo decorativo.
- **Teclado:** saltar al contenido, foco visible (`:focus-visible`), orden de tabulación lógico, menú móvil por teclado, `aria-current="page"`.
- **Foco no obstruido (WCAG 2.4.11):** el menú fijo no tapa el foco al navegar por teclado.
- **Tamaño mínimo de objetivo (WCAG 2.5.8):** botones e iconos táctiles ≥ 24×24 px; los controles del carrusel y las miniaturas de la galería lo cumplen.
- **Navegación consistente (3.2.6) y Acción repetida (3.3.7):** aplicables sobre todo en la fase de backend.
- **Formularios:** `<label>` asociado, tipos y `autocomplete` correctos, mensajes con `role="alert"` y `aria-describedby`, estado anunciado con `aria-live`.
- **Imágenes:** `alt` descriptivo (o vacío en decorativas), iconos sociales con `aria-label`.
- **Movimiento reducido:** todas las animaciones se reducen o desactivan con `prefers-reduced-motion`.

### 12.2 Protección de datos (RGPD y LOPDGDD)

- **Marco legal:** Reglamento (UE) 2016/679 (RGPD) y Ley Orgánica 3/2018 (LOPDGDD).
- **Responsable:** Superautos Carballo. Los datos solo se usan para gestionar y responder a la consulta/solicitud; no se ceden a terceros.
- **Legitimación:** consentimiento explícito (checkbox obligatorio) e interés legítimo de responder a la solicitud.
- **Consentimiento:** checkbox con texto claro y **enlace a `privacidad.html`** en cada formulario.
- **Derechos:** acceso, rectificación, supresión, oposición, limitación y portabilidad, por correo (`info@superautoscarballo.es`) o presencialmente.
- **Conservación:** solo mientras dure la gestión de la solicitud y los plazos legales aplicables.
- **Cookies:** en esta fase no se usan cookies propias. Solo se cargará servicio de terceros que implique cookies si el cliente pide Google Maps; en ese caso se activa el banner de cookies. Con OpenStreetMap no hace falta.
- **Nota de transparencia:** en la maqueta los formularios son simulaciones y **los datos no abandonan el navegador**; cuando se implemente el backend, se registrará el tratamiento en la política de privacidad.

### 12.3 Seguridad básica

- HTTPS con certificado TLS y redirección HTTP→HTTPS.
- Cabeceras: `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` (y `Content-Security-Policy` en producción).
- En los formularios simulados no se almacena ni transmite nada.
- Cuando haya backend: validación en servidor, escape de entradas (anti-XSS), CSRF, honeypot y límite de intentos.
- No se exponen credenciales ni datos personales en el front-end.

### 12.4 Supuestos que conviene confirmar con el cliente

| Supuesto | Cómo se tratará |
|---|---|
| **Entrega a domicilio** en Galicia | Vía opcional de entrega; texto de la home y servicios condicionado a la confirmación |
| **Certificación** de cada vehículo | Bloque de confianza de la ficha y «Por qué elegirnos» |
| **Garantía** (24 meses) | Dato de la ficha y servicio de posventa |
| **Financiación** | Mención en venta y motivo de consulta del formulario |
| **Vehículo de sustitución** en mantenimiento | Lista de servicios de mantenimiento |
| **Plazo de recambios** (1–2 semanas) | Página de recambios y mensaje de éxito del formulario |
| **Perfiles de redes sociales** | Enlaces del footer; se activan cuando el cliente los confirme |
| **Mapa** (OpenStreetMap o Google Maps) | Decisión con el cliente; condiciona el aviso de cookies |

Si alguna condición no se confirma, se ajusta el texto correspondiente sin cambiar la estructura.

---

## 13. Contenidos y recursos necesarios

| Recurso | Origen | Estado |
|---|---|---|
| Fotografías de los **8 vehículos** de ejemplo | Propias o banco con licencia; registrar el origen | Ya disponibles (WebP, 3 resoluciones) |
| Logotipo e identidad visual | Cliente | Logo de prueba en WebP |
| Textos de servicios y datos técnicos | Cliente / redacción | Pendiente de textos reales |
| Datos de contacto, horario y **redes sociales** reales | Cliente | Pendiente |
| Política de privacidad y aviso legal | Cliente / modelo adaptado | Por redactar (`privacidad.html`) |
| Mapa e indicaciones de acceso | OpenStreetMap / Google | Por decidir con el cliente |
| Vídeo corto o vista 360° (opcional) | Material propio autorizado | Solo si existe |
| Design system (paleta, tipografía, componentes) | Guía visual (`guia_visual.pen`, `guia_visual/`) | Completado (14/08/2026) |
| Flujograma de formularios | `flujograma/` + PDF | Completado |

---

## 14. Plan de fases

### Fase 0 – Referencias (completado)
1. Brief (Fito 1), documento funcional (Fito 2), mapa web y sitemap.
2. Wireframes y diseño (`diseño.pen`, `diseño2.pen`, `HIJAS.PEN`).
3. Flujograma de los 3 formularios (`flujograma/`).
4. **Guía visual completa** (`guia_visual.pen`, PDF y PNG) — design system listo para aplicar.

### Fase 1 – Preparación
1. Revisión final del diseño (`diseño.pen` / `diseño2.pen`, 1440 / 768 / 390 px) y extracción de assets.
2. Export de HTML del diseño y creación de la estructura de carpetas (`assets/css`, `assets/js`, `assets/bootstrap`, `assets/img`).
3. Inclusión de Bootstrap 5 y definición de **tokens de la guía visual** (sección 8: colores #0052FF/#FFFFFF/#CFD8E6/#000000/#6B7280/#0038B8/#DC2626/#16A34A + tipografía Inter/Montserrat) y archivos base.

### Fase 2 – Maquetación
1. Header (nav + CTA «Reservar cita») y footer en las 3 resoluciones.
2. Maquetación de las 7 páginas + `privacidad.html` y `404.html` desde el diseño Pencil.
3. Responsive con Bootstrap + CSS propio: 390 / 768 / 1440 px.

### Fase 3 – Funcionalidad front-end
1. Menú móvil accesible (JS + componentes de Bootstrap).
2. Carrusel de la home con el componente **Carousel de Bootstrap 5** (controles, indicadores y pausa automática; sin JS propio).
3. **Catálogo:** objeto JS con los 8 vehículos, cuadrícula generada, filtros (marca, combustible, precio) y ordenación, estado vacío y contador.
4. **Ficha:** carga por id desde la URL, relleno de bloques, galería con lightbox, CTAs con prefill a contacto y prueba, aviso de id inexistente.
5. **Formularios (según el flujograma):** contacto (motivo + condicionales + prefill), prueba de conducción (3 pasos + resumen) y recambios. Validación en cliente y estados de envío **simulados**.
6. Microinteracciones (estados hover/focus de la guía visual, sección 8.6) respetando `prefers-reduced-motion`.

### Fase 4 – Optimización y QA
1. SEO: metadatos, Open Graph, JSON-LD, sitemap.xml, robots.txt, 404.html.
2. Rendimiento: WebP/JPEG + lazy loading, fuentes, minificación.
3. Accesibilidad: teclado, contraste AA, ARIA, lectores de pantalla (WCAG 2.2).
4. Pruebas en navegadores y dispositivos; Lighthouse y W3C.

### Fase 5 – Publicación
1. Despliegue en hosting + HTTPS + CDN.
2. Google Search Console / Bing y envío de sitemap.
3. Pruebas de producción y monitorización.

### Fase 6 – Programación (posterior)
1. Backend PHP: `config.php`, `contacto.php`, `proba_conduccion.php`, `recambios.php`, `envia_email.php`; validación en servidor, CSRF, honeypot, límite de intentos y encaminamiento por motivo.
2. Catálogo conectado a base de datos + panel de administración.
3. Citas con confirmación y agenda, presupuestador de recambios, área privada.

---

## 15. QA y pruebas

- **Cross-browser:** Chrome, Edge, Firefox, Safari (últimas versiones).
- **Responsive:** 390 / 768 / 1440 px (y comprobación intermedia en 1024 px).
- **Lighthouse:** Performance, Accessibility, Best Practices, SEO (≥ 90 como objetivo de comprobación).
- **W3C Validator:** HTML y CSS.
- **Accesibilidad:** axe DevTools, navegación solo teclado, WCAG 2.2 AA.
- **Formularios (frente al flujograma):** validación en cliente, errores accesibles, estados simulados (éxito/error/spinner), prefill desde la ficha.
- **Filtros:** combinación, ordenación, contador y estado vacío.
- **Enlaces:** comprobación de todos los enlaces internos (sin 404).
- **Pesos:** bundle total de la página de entrada < 500 KB (imágenes aparte, optimizadas).
- **Design system:** verificar que los tokens CSS coinciden con la guía visual (sección 8) y que los estados de los componentes son los definidos (8.6).

---

## 16. Criterios de comprobación por página

### Generales

- Páginas sin errores de consola ni imágenes rotas; un único `h1`; `<title>` y `meta description` únicos.
- Menú, logo, footer y breadcrumbs funcionando; enlaces activos marcados; sin 404 internos.
- Adaptación correcta a 390 / 768 / 1440 px; contraste AA; navegación completa por teclado; HTML y CSS validados en el W3C.
- Lighthouse y Core Web Vitals como comprobación final (objetivos de la sección 11.4).
- Tokens de la guía visual aplicados (colores, tipografías, espaciado, estados).

### Por página

| Página | Se comprueba que… |
|---|---|
| Inicio (P01) | El carrusel funciona en escritorio (controles, indicadores, pausa) y móvil (arrastre); las CTAs dirigen a los destinos correctos |
| Catálogo (P02) | La cuadrícula muestra los 8 vehículos; los filtros se combinan; la ordenación funciona; el estado vacío muestra «Limpiar filtros»; cada tarjeta enlaza a la ficha con el id correcto |
| Ficha (P02.1) | Se rellena con los datos del vehículo (precio, técnicos, equipamiento, disponibilidad); la galería hace zoom y es operable por teclado; id inexistente muestra aviso con enlace al catálogo; las CTAs llevan el vehículo **prefilled** |
| Prueba (P02.1.1) | Los 3 pasos validan; el vehículo llega prefilled; se muestra el aviso de **solicitud pendiente de confirmación**; el envío con éxito muestra el mensaje correcto |
| Servicios (P03) | Las tres secciones con la misma estructura y CTA funcionando |
| Recambios (P04) | Información de bajo pedido y plazo visibles; el formulario valida y muestra los estados |
| Contacto (P05) | El selector de motivo es obligatorio y cambia los campos; el prefill desde la ficha funciona; el mapa, las indicaciones y el botón «Cómo llegar» están y funcionan; los datos del concesionario son coherentes |
| 404 (P06) | Muestra el mensaje y enlaza al inicio con estado HTTP 404 |
| Privacidad (P07) | Contenido legal completo y enlazado desde los checkbox RGPD de los tres formularios |

---

## 17. Checklist de lanzamiento

- [ ] Dominio definitivo y HTTPS configurados.
- [ ] `robots.txt` y `sitemap.xml` publicados y validados.
- [ ] Canonical, meta description y Open Graph en las 7 páginas.
- [ ] JSON-LD (AutoDealer) verificado con Rich Results Test.
- [ ] Google Search Console verificada y sitemap enviado.
- [ ] Lighthouse ≥ 90 en las 4 categorías (objetivo de comprobación).
- [ ] Imágenes WebP/JPEG con lazy loading y dimensiones definidas.
- [ ] Tres formularios funcionales (validación cliente + estados simulados, según flujograma) y con RGPD.
- [ ] Política de privacidad publicada y enlazada desde todos los formularios.
- [ ] Cabeceras de seguridad y compresión activadas.
- [ ] Pruebas de accesibilidad (WCAG 2.2) y navegación por teclado superadas.
- [ ] Página 404 personalizada.
- [ ] Design system de la guía visual aplicado y verificado (tokens, componentes y estados).
- [ ] Supuestos de la sección 12.4 confirmados con el cliente (textos ajustados).

---

## 18. Referencias y origen de las decisiones

| Decisión | Referencia que la inspira |
|---|---|
| **Filtros** del catálogo (marca, precio, combustible) | AutoScout24 y coches.net: cuadrícula con filtros y ordenación |
| **Catálogo en cuadrícula** con tarjetas reutilizables | BMW y AutoScout24 |
| **Ficha de vehículo** con datos técnicos y CTA | Mercedes-Benz: ficha completa y coherencia de marca |
| **Diseño limpio, poco texto, fotos grandes** | Porsche: sensación de exclusividad |
| **Navegación sencilla** con CTA «Reservar cita» | Porsche y BMW: menú limpio con acción clara |
| **Formulario por contexto** y contacto del concesionario | coches.net; concesionarios locales (Pensado Motor, VCAR, O Largo Racing, Breogán, NS Motor) |
| **Servicios unificados en una sola página** | Fito 1 (sección 10): fusión de venta, mantenimiento y posventa |
| **8 vehículos de ejemplo** | Fito 2 (sección 3.2): catálogo fijado para que los filtros tengan sentido |
| **Prueba de conducción como página hija en 3 pasos** | Fito 2 (sección 6.2): requisito de dos páginas hijas y formulario con pasos y resumen propios |
| **Design system (paleta, tipografía, espaciado, componentes, estados)** | Guía visual (`guia_visual.pen`, `Plan_Guia_Visual.md`) |
| **Sitemap e IDs de páginas y componentes (P01–P07, C01–C09)** | Mapa web (`jose_rafael_Garcia_Torres_sitemap.xlsx`, `MAPA_WEB.pdf`) |
| **Flujos de los formularios** | Flujograma (`flujograma/`, `Garcia_Torres_Jose_Rafael_Flujograma.pdf`) |

---

## 19. Seguimiento y entrega

- **Hoja de seguimiento:** `Folla_Seguimento_Fito2.md` (actualizada en cada fase) y Google Sheets.
- **Control de versiones:** Git local; subida a GitHub pendiente (`https://github.com/<usuario>/superautos-carballo`). Incluye la guía visual (`.pen` + PNG + PDF) y el flujograma.
- **Herramientas:** VS Code, Git, Pencil (diseño `.pen`), GIMP (logos e imágenes), WebP para optimización, Lighthouse para comprobaciones.
- **Pendiente de la guía visual (entrega):** guardar el documento de trabajo como `guia_visual.pen` (ya presente en la raíz), subir el repo a GitHub con permisos de lectura para la persona evaluadora y documentar la ligazón editable (ver `Plan_Guia_Visual.md` secciones 3 y 8).
