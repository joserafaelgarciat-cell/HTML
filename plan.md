# Plan de Desarrollo Web – Superautos Carballo

- **Autor:** José Rafael García Torres
- **Fecha:** 07/08/2026 (revisión tras el Fito 2)
- **Proyecto:** Diseño y desarrollo del sitio web corporativo de Superautos Carballo
- **Documentos de referencia:**
  - `Garcia_Torres_Jose_Rafael_Hito1_Brief.md` (Fito 1 – Brief)
  - `Jose_Rafael_Garcia_torres_Fito2_DocumentoFuncional.md` (Fito 2 – Documento funcional)
- **Diseño de origen:** archivo Pencil `diseño.pen` (3 resoluciones por página: 1440 / 768 / 390 px)
- **Repositorio:** Git inicializado en local (05/08/2026); URL pública pendiente de subir a GitHub

---

## Sobre esta revisión

Este plan actualiza la versión anterior (03/08/2026) para alinearla con las decisiones tomadas en el Fito 1 y, sobre todo, en el Fito 2. Los cambios principales:

- **Estructura de páginas corregida:** los antiguos `servicio_de_ventas.html`, `mantenimiento.html` y `pos_ventas.html` se fusionan en **una única página `servicios.html`**. El sitemap pasa a ser el definitivo del Fito 2: **7 páginas** con dos páginas hijas (`ficha_vehiculo.html` hija del catálogo y `proba_conduccion.html` hija de la ficha).
- **Catálogo fijado en 8 vehículos** de ejemplo (mezcla de gasolina, híbridos y eléctricos) para que los filtros tengan sentido sin inflar el trabajo de imágenes y datos.
- **Tres formularios por contexto** (contacto con selector de motivo, prueba de conducción en 3 pasos y recambios), no un único formulario universal.
- **El backend PHP y la base de datos pasan a fase posterior.** En esta fase los formularios validan en cliente y los estados de envío son **simulados**; ningún dato abandona el navegador.
- **Accesibilidad WCAG 2.2 AA** (sustituye a 2.1) y rendimiento con objetivos de comprobación en Lighthouse.
- Imágenes en **WebP con fallback JPEG** (no AVIF) y nombre correcto del archivo de diseño (`diseño.pen`).

---

## 1. Resumen ejecutivo

Desarrollo de un sitio web corporativo moderno, responsive y orientado a la conversión para Superautos Carballo, concesionario multimarca de vehículos de alta gama con sede en Carballo. El sitio presenta el catálogo de vehículos (8 de ejemplo), explica los servicios de venta, mantenimiento y posventa, facilita la solicitud de recambios bajo pedido y ofrece canales de conversión: contacto con selector de motivo y solicitud de prueba de conducción en varios pasos.

Esta fase desarrolla una **maqueta front-end funcional**: **7 páginas tipo**, un **catálogo de demostración** con los datos en el propio sitio (objeto JS), **tres formularios** con validación en cliente y estados simulados, y todo el trabajo de **diseño responsive, SEO, accesibilidad y rendimiento** preparado para conectarse en el futuro a una base de datos y a un backend PHP.

La ficha de vehículo es la **plantilla reutilizable** del proyecto: no hay una página por coche; el catálogo y la home enlazan siempre a `ficha_vehiculo.html`, que se rellena según el vehículo seleccionado.

---

## 2. Alcance y límites

### 2.1 Alcance de esta fase

| Bloque | Detalle |
|---|---|
| Páginas tipo | `index.html`, `catalogo.html`, `servicios.html`, `recambios.html`, `contacto.html` + 2 páginas hijas (`ficha_vehiculo.html`, `proba_conduccion.html`). **7 páginas en total** + `privacidad.html` (requerida por RGPD). |
| Catálogo de demostración | **8 vehículos de ejemplo** con los datos en el propio sitio (objeto JS) y maquetado en HTML, sin servidor ni base de datos. |
| Formularios | Contacto (con selector de motivo), prueba de conducción (varios pasos) y recambios. Validación en cliente y estados de envío **simulados**. |
| Interacciones | Menú (con menú móvil por teclado), carrusel de destacados (Bootstrap 5), filtros del catálogo, galería con zoom en la ficha, microinteracciones y animaciones de entrada. |
| Diseño | Adaptable (390 / 768 / 1440 px), accesible (WCAG 2.2 AA), SEO básico e imágenes optimizadas. |

### 2.2 Qué queda para una programación posterior

- Conexión del catálogo a una base de datos real y panel de administración para gestionar vehículos.
- Envío real de los formularios por correo (backend PHP) y la diferenciación efectiva de las solicitudes según el motivo.
- Gestión de citas y pruebas de conducción como sistema con confirmación y agenda.
- Presupuestador de recambios en línea con pago, área privada de clientes y gestión de usuarios.

---

## 3. Sitemap y jerarquía de páginas

### 3.1 Sitemap

```
Superautos Carballo
├── index.html                # Inicio: hero + carrusel, servicios, destacados, CTA
├── catalogo.html             # Catálogo (cuadrícula con filtros)
│   └── ficha_vehiculo.html   # Ficha del vehículo (página hija del catálogo) – plantilla reutilizable
│       └── proba_conduccion.html   # Solicitud de prueba de conducción (hija de la ficha)
├── servicios.html            # Venta, mantenimiento y posventa
├── recambios.html            # Recambios + formulario de solicitud
├── contacto.html             # Formulario de contacto, datos y mapa
└── privacidad.html           # Política de privacidad (RGPD, enlazada desde los formularios)
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

Reglas de relación:

- Todas las páginas comparten el menú global y el footer. El logo del header enlaza siempre a `index.html`.
- **Dos páginas hijas** (requisito de la fase): `ficha_vehiculo.html` (hija del catálogo) y `proba_conduccion.html` (hija de la ficha).
- La ficha es **siempre el mismo archivo**; se rellena según el vehículo seleccionado (no hay una página por coche).
- **Breadcrumb** en las páginas hijas: *Inicio > Catálogo > [vehículo]* en la ficha e *Inicio > Catálogo > [vehículo] > Solicitar prueba* en la solicitud de prueba.
- **Enlace «saltar al contenido»** en todas las páginas.

---

## 4. Descripción de cada página

### 4.1 Inicio (`index.html`)

Puerta de entrada: presentar la marca, captar la atención de una clientela de alto poder adquisitivo y dirigir el tráfico hacia el catálogo, los servicios y el contacto.

1. **Hero con carrusel de vehículos destacados.** Imagen de gran formato, marca/modelo, datos resumen, precio y botón de acción. Sobresombreado inferior para garantizar la legibilidad del texto.
2. **Resumen de servicios.** Tres bloques (Venta, Mantenimiento, Posventa) con icono, título, descripción breve y botón hacia `servicios.html`.
3. **Vehículos destacados.** Cuadrícula con las mismas tarjetas del catálogo, que enlazan a la ficha.
4. **Por qué elegirnos.** Bloque de confianza: trato directo, certificación, garantía, servicio integral y entrega a domicilio en Galicia *(supuesto por confirmar, ver 12.4)*.
5. **CTA final.** Botón «Contactar» y datos de contacto resumidos.

**CTAs.** «Ver catálogo», «Ver ficha», «Conocer servicios», «Contactar».

### 4.2 Catálogo (`catalogo.html`)

Mostrar los 8 vehículos de ejemplo en cuadrícula y permitir filtrarlos (ver sección 5). Estructura:

1. **Cabecera.** Titular, descripción breve y número de vehículos disponibles.
2. **Barra de filtros.** Por **marca**, **combustible** y **precio** (rango), y ordenación por precio (ascendente/descendente) y año. Los filtros se combinan entre sí y la cuadrícula se actualiza al momento.
3. **Cuadrícula de resultados.** Tarjetas de vehículo reutilizables (1 columna en móvil, 2 en tablet, 3 en escritorio).
4. **Estado vacío.** Mensaje cuando ningún vehículo cumple los filtros, con botón «Limpiar filtros».

**CTAs.** «Ver ficha» en cada tarjeta, «Limpiar filtros».

### 4.3 Ficha de vehículo (`ficha_vehiculo.html`) — hija del catálogo

Muestra la información completa de un vehículo y ofrece las acciones de conversión. Es la **misma página para todos los vehículos**: lee el identificador de la URL, busca los datos en el catálogo front-end y los vuelca en los bloques. Si el identificador no existe, muestra un aviso con enlace al catálogo.

| Bloque | Contenido |
|---|---|
| Galería | Fotografías del vehículo, con ampliación/zoom (lightbox) |
| Resumen y precio | Marca, modelo, precio y etiquetas de año, kilometraje, combustible, cambio y potencia |
| Datos técnicos | Garantía, equipamiento, estado y disponibilidad |
| Equipamiento | Listado de extras incluidos |
| Bloque de confianza | Certificación, revisión y garantía del vehículo |
| CTAs | «Solicitar información» (→ `contacto.html` con el vehículo prefilled) y «Solicitar prueba» (→ `proba_conduccion.html` con el vehículo prefilled) |

### 4.4 Solicitud de prueba de conducción (`proba_conduccion.html`) — hija de la ficha

Formulario **en 3 pasos** para solicitar una prueba de conducción. Se accede desde la ficha con el vehículo ya seleccionado (detalles en la sección 7.2).

**Aviso importante mostrado en esta página:** la solicitud **no es una reserva automática**. Es una petición que el concesionario confirma por teléfono o correo antes de cerrar la cita, para gestionar expectativas y evitar reservas fantasma.

### 4.5 Servicios (`servicios.html`)

Presenta los tres servicios con la misma estructura (icono o imagen, título, descripción, lista de servicios incluidos y CTA):

- **Venta.** Asesoramiento, financiación, prueba de conducción y tramitación de la compra.
- **Mantenimiento.** Revisiones oficiales, diagnóstico y reparación, preparación para la ITV y vehículo de sustitución *(supuesto, ver 12.4)*.
- **Posventa.** Garantía *(supuesto)*, atención al cliente, soporte técnico y consejos de mantenimiento.

**CTAs.** «Contactar» en cada sección y enlace a `recambios.html` desde mantenimiento.

### 4.6 Recambios (`recambios.html`)

Página informativa + formulario independiente de solicitud de recambios (sección 7.3). Explica el proceso (consulta → confirmación → pedido al proveedor → aviso al cliente) y que las piezas son **bajo pedido**, con plazo estimado de **1–2 semanas** desde la confirmación *(supuesto, ver 12.4)*.

### 4.7 Contacto (`contacto.html`)

1. **Formulario de contacto** con **selector obligatorio de motivo de la consulta** (sección 7.1). Cuando se llega desde la ficha con el botón «Solicitar información», el vehículo (identificador, marca y modelo) y el motivo llegan prefilled por la URL.
2. **Datos del concesionario.** Dirección, teléfono, correo y horario.
3. **Mapa e indicaciones.** Mapa **incrustado** (iframe interactivo de OpenStreetMap) con imagen estática de reserva, indicaciones de acceso en texto y botón «Cómo llegar» que **abre la app de navegación del móvil** (enlace `geo:` que abre Google Maps o Apple Maps). Si el cliente prefiere Google Maps, se cambia el iframe y se activa el aviso de cookies *(supuesto, ver 12.4)*.

### 4.8 Política de privacidad (`privacidad.html`)

Página simple (no es página tipo): explica finalidad del tratamiento, legitimación (consentimiento), derechos ARCO+portabilidad, conservación y cookies. Enlazada desde el checkbox RGPD de los tres formularios.

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
| CTAs | «Solicitar información» y «Reservar prueba» |

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

Además: `assets/img/hero.webp` para el hero, los logos de marca (`.webp` + `.xcf` de origen en GIMP) y el logo corporativo de prueba. Las imágenes restantes de la carpeta `assets/img/` (modelos no incluidos en el catálogo) quedan como material disponible para el carrusel o futuras ampliaciones.

---

## 6. Stack tecnológico y estructura de archivos

### 6.1 Stack propuesto

| Área | Tecnología |
|---|---|
| Marcado | HTML5 semántico |
| Estilos | **Bootstrap 5** + CSS personalizado (tokens/variables CSS) |
| Comportamiento | JavaScript vanilla (sin dependencias para el núcleo) + componentes de Bootstrap. **El carrusel de la home usa obligatoriamente el componente Carousel de Bootstrap 5** (`bootstrap.bundle.min.js`), sin JS propio |
| Backend (fase futura) | **PHP** (procesamiento de formularios, envío de e-mail, seguridad) |
| Imágenes | **WebP con fallback JPEG** (3 resoluciones por imagen) |
| Fuentes | Google Fonts: Anton (titulares) + Inter (cuerpo) |
| Iconos | Lucide (SVG inline) / Bootstrap Icons |

### 6.2 Por qué Bootstrap 5

- Es lo que viene en el **export del diseño Pencil** (`diseño.pen`).
- Resuelve con el componente oficial el **Carousel** (requisito del plan), la **cuadrícula responsive** (390/768/1440), el **menú colapsable** y el **modal** de confirmación, sin JS propio para eso.
- Tiene buena accesibilidad base (ARIA en carrusel y collapse) y documentación amplia.
- El resto (estilos, tokens, microinteracciones, animaciones) es CSS propio: Bootstrap es la base, no el estilo.

### 6.3 Estructura de carpetas

```
Proyecto/
├── index.html                 # Inicio (hero + carrusel, servicios, destacados, CTA)
├── catalogo.html              # Catálogo (cuadrícula con filtros)
├── ficha_vehiculo.html        # Ficha del vehículo (plantilla reutilizable, hija del catálogo)
├── proba_conduccion.html      # Solicitud de prueba de conducción (3 pasos, hija de la ficha)
├── servicios.html             # Venta, mantenimiento y posventa
├── recambios.html             # Recambios + formulario de solicitud
├── contacto.html              # Formulario de contacto, datos y mapa
├── privacidad.html            # Política de privacidad (RGPD)
├── 404.html                   # Página 404 personalizada
├── assets/
│   ├── css/
│   │   ├── tokens.css         # Variables CSS (colores, tipografías, espaciado)
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
└── plan.md
```

En esta fase la carpeta `assets/php/` no contiene código: documenta la estructura prevista para la fase de programación.

---

## 7. Formularios

Decisión tomada en el Fito 2 tras revisar las webs de referencia: **no hay un único formulario universal, hay un formulario por contexto**, y el vehículo ya se sabe cuando se viene de una ficha.

| Formulario | Página | Motivo | Cómo llega el vehículo |
|---|---|---|---|
| Contacto con selector de motivo | `contacto.html` | Información, prueba, financiación, mantenimiento, posventa, consulta general | Prefilled desde la ficha vía URL |
| Prueba de conducción (3 pasos) | `proba_conduccion.html` | Reserva de una prueba | Prefilled desde la ficha vía URL |
| Recambios | `recambios.html` | Solicitud de piezas | El usuario escribe marca/modelo de la pieza |

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

**Estados.** Inicial, error de campo, envío en proceso (spinner), éxito (mensaje de confirmación y vaciado) y error general (se conservan los datos).

### 7.2 Formulario de prueba de conducción (`proba_conduccion.html`)

Formulario en **3 pasos**, accesible y con resumen final:

1. **«El vehículo y la cita»:** vehículo (identificador, marca y modelo) **prefilled desde la ficha y de solo lectura**, fecha preferente y franja horaria.
2. **«Tus datos»:** nombre, apellidos, correo y teléfono.
3. **«Revisa y envía»:** resumen de la solicitud, checkbox RGPD y botón de envío.

Aviso destacado en la página y en el paso 1:

> **Tu solicitud está pendiente de confirmación.** No se reserva nada automáticamente: el concesionario contactará contigo por teléfono o correo para confirmar la fecha y la hora de la prueba.

En el estado de éxito se repite la misma idea: «Hemos recibido tu solicitud de prueba del *Porsche 911 Targa 4S*. En breve te confirmaremos la fecha y la hora».

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

- Validación en cliente con `blur` y al enviar; mensajes junto al campo con `role="alert"` y `aria-describedby`.
- `autocomplete` adecuado (`name`, `family-name`, `email`, `tel`).
- Campos obligatorios con `required` + `aria-required`.
- Checkbox de privacidad obligatorio y enlace a `privacidad.html`.
- En la fase futura se repite la misma validación en el servidor.

---

## 8. Identidad visual y colores del diseño

Paleta extraída del diseño `diseño.pen` (variables del documento):

| Token | Valor | Uso |
|---|---|---|
| `$surface-primary` | `#FFFFFF` | Fondo de contenido de las páginas interiores |
| `$surface-inverse` | `#000000` | Fondo de la home, header y footer |
| `$foreground-primary` | `#000000` | Titulares y cuerpo sobre fondo claro |
| `$foreground-inverse` | `#FFFFFF` | Titulares y textos sobre negro |
| `$foreground-muted` | `#9CA3AF` | Descripciones, footer, placeholders (solo decorativo) |
| `$border-subtle` | `#E5E7EB` | Separadores, inputs, chips del menú |
| `$accent` | `#FF9800` | Botones, acentos, resaltados, icono del logo |
| Overlay de hero | `linear-gradient(180deg, #00000000 → #000000CC)` | Legibilidad del texto sobre imágenes |

### Tipografías

- **Anton** — titulares (tracking amplio, p. ej. `letter-spacing: 2px`), mayúsculas de marca.
- **Inter** — cuerpo, UI, etiquetas y botones (pesos 400–700).

### Reglas de uso

- El naranja `#FF9800` se usa **solo para acciones y acentos** (CTA, pestaña activa, icono de marca).
- Contraste garantizado: texto blanco sobre `#000000` (≈21:1) y texto negro sobre `#FF9800` (≈10:1) superan WCAG AA.
- El gris `#9CA3AF` solo para texto decorativo; si el contraste AA no se supera en texto informativo, se sube el tono (p. ej. `#6B7280`).
- Las páginas interiores usan fondo blanco; la home usa fondo negro (identidad del concesionario premium).

---

## 9. Funcionalidades e interacciones

### 9.1 Menú y navegación

- **Menú principal:** Inicio, Catálogo, Servicios, Recambios y Contacto + CTA «Reservar cita» (→ `contacto.html?motivo=prueba`). En escritorio horizontal; en tablet/móvil colapsa en un menú hamburguesa operable por teclado (`aria-expanded`, `aria-controls`, cierre con `Esc`).
- **Enlace activo** marcado visualmente y con `aria-current="page"`.
- **Breadcrumb** en las páginas hijas (ficha y prueba de conducción).
- **Footer:** columnas de enlaces, datos del concesionario y **redes sociales**.
- **Enlace «saltar al contenido»** en todas las páginas.

### 9.2 Redes sociales

**Instagram, Facebook y YouTube** (las que mejor se ajustan a un concesionario premium). Comportamiento:

- Iconos en el footer, cada uno con su `aria-label`.
- Abren en **nueva pestaña** (`target="_blank"` con `rel="noopener"`).
- Enlazan a los **perfiles reales** del concesionario *(supuesto por confirmar con el cliente, ver 12.4)*.
- **No se incrustan publicaciones externas** en la web: evitaría peticiones y cookies de terceros. Enlaces directos bastan en esta fase.

### 9.3 Carrusel de destacados (home)

Componente **Carousel de Bootstrap 5** (sin JS propio). Controles anterior/siguiente, indicadores de posición y autoplay con pausa al pasar el ratón; en móvil admite arrastre. Con `prefers-reduced-motion` se reduce el desplazamiento y se detiene el autoplay.

### 9.4 Catálogo y filtros

- Cuadrícula generada desde los datos del catálogo front-end.
- Filtros combinables (marca, combustible, precio) y ordenación (precio asc/desc, año), sin recargar la página.
- **Respuesta visual de los filtros:** la cuadrícula se actualiza al momento y las tarjetas entran con un fade suave.
- Contador de resultados y estado vacío con «Limpiar filtros».

### 9.5 Galería de la ficha

Imagen principal con miniaturas clicables, navegación por teclado y **ampliación/zoom** (lightbox accesible). `alt` descriptivo en cada imagen. En la demostración, cada vehículo dispone de su imagen principal en 3 resoluciones; si se dispone de más tomas propias, se añaden a la carpeta de la marca para ampliar la galería.

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
- Solo los pesos necesarios (Anton 400; Inter 400/500/600/700).
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
- **Contraste AA:** texto blanco sobre negro y texto negro sobre `#FF9800`; el gris `#9CA3AF` solo decorativo y ajustado si no pasa.
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

---

## 14. Plan de fases

### Fase 1 – Preparación
1. Revisión final del diseño `diseño.pen` (1440 / 768 / 390 px) y extracción de assets.
2. Export de HTML del diseño y creación de la estructura de carpetas (`assets/css`, `assets/js`, `assets/bootstrap`, `assets/img`).
3. Inclusión de Bootstrap 5 y definición de tokens (variables CSS) y archivos base.

### Fase 2 – Maquetación
1. Header (nav + CTA «Reservar cita») y footer en las 3 resoluciones.
2. Maquetación de las 7 páginas desde el diseño Pencil (incluyendo `privacidad.html`).
3. Responsive con Bootstrap + CSS propio: 390 / 768 / 1440 px.

### Fase 3 – Funcionalidad front-end
1. Menú móvil accesible (JS + componentes de Bootstrap).
2. Carrusel de la home con el componente **Carousel de Bootstrap 5** (controles, indicadores y pausa automática; sin JS propio).
3. **Catálogo:** objeto JS con los 8 vehículos, cuadrícula generada, filtros (marca, combustible, precio) y ordenación, estado vacío y contador.
4. **Ficha:** carga por id desde la URL, relleno de bloques, galería con lightbox, CTAs con prefill a contacto y prueba, aviso de id inexistente.
5. **Formularios:** contacto (motivo + condicionales + prefill), prueba de conducción (3 pasos + resumen) y recambios. Validación en cliente y estados de envío **simulados**.
6. Microinteracciones (estados hover/focus) respetando `prefers-reduced-motion`.

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
- **Formularios:** validación en cliente, errores accesibles, estados simulados (éxito/error/spinner), prefill desde la ficha.
- **Filtros:** combinación, ordenación, contador y estado vacío.
- **Enlaces:** comprobación de todos los enlaces internos (sin 404).
- **Pesos:** bundle total de la página de entrada < 500 KB (imágenes aparte, optimizadas).

---

## 16. Criterios de comprobación por página

### Generales

- Páginas sin errores de consola ni imágenes rotas; un único `h1`; `<title>` y `meta description` únicos.
- Menú, logo, footer y breadcrumbs funcionando; enlaces activos marcados; sin 404 internos.
- Adaptación correcta a 390 / 768 / 1440 px; contraste AA; navegación completa por teclado; HTML y CSS validados en el W3C.
- Lighthouse y Core Web Vitals como comprobación final (objetivos de la sección 11.4).

### Por página

| Página | Se comprueba que… |
|---|---|
| Inicio | El carrusel funciona en escritorio (controles, indicadores, pausa) y móvil (arrastre); las CTAs dirigen a los destinos correctos |
| Catálogo | La cuadrícula muestra los 8 vehículos; los filtros se combinan; la ordenación funciona; el estado vacío muestra «Limpiar filtros»; cada tarjeta enlaza a la ficha con el id correcto |
| Ficha | Se rellena con los datos del vehículo (precio, técnicos, equipamiento, disponibilidad); la galería hace zoom y es operable por teclado; id inexistente muestra aviso con enlace al catálogo; las CTAs llevan el vehículo **prefilled** |
| Prueba | Los 3 pasos validan; el vehículo llega prefilled; se muestra el aviso de **solicitud pendiente de confirmación**; el envío con éxito muestra el mensaje correcto |
| Servicios | Las tres secciones con la misma estructura y CTA funcionando |
| Recambios | Información de bajo pedido y plazo visibles; el formulario valida y muestra los estados |
| Contacto | El selector de motivo es obligatorio y cambia los campos; el prefill desde la ficha funciona; el mapa, las indicaciones y el botón «Cómo llegar» están y funcionan; los datos del concesionario son coherentes |

---

## 17. Checklist de lanzamiento

- [ ] Dominio definitivo y HTTPS configurados.
- [ ] `robots.txt` y `sitemap.xml` publicados y validados.
- [ ] Canonical, meta description y Open Graph en las 7 páginas.
- [ ] JSON-LD (AutoDealer) verificado con Rich Results Test.
- [ ] Google Search Console verificada y sitemap enviado.
- [ ] Lighthouse ≥ 90 en las 4 categorías (objetivo de comprobación).
- [ ] Imágenes WebP/JPEG con lazy loading y dimensiones definidas.
- [ ] Tres formularios funcionales (validación cliente + estados simulados) y con RGPD.
- [ ] Política de privacidad publicada y enlazada desde todos los formularios.
- [ ] Cabeceras de seguridad y compresión activadas.
- [ ] Pruebas de accesibilidad (WCAG 2.2) y navegación por teclado superadas.
- [ ] Página 404 personalizada.
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

---

## 19. Seguimiento y entrega

- **Hoja de seguimiento:** `Folla_Seguimento_Fito2.md` (actualizada en cada fase) y Google Sheets.
- **Control de versiones:** Git local; subida a GitHub pendiente (`https://github.com/<usuario>/superautos-carballo`).
- **Herramientas:** VS Code, Git, Pencil (diseño `.pen`), GIMP (logos e imágenes), WebP para optimización, Lighthouse para comprobaciones.
