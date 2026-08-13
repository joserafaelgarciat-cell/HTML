# Documento Funcional – Superautos Carballo (v2)

- **Autor:** José Rafael García Torres
- **Fecha:** 05/08/2026 (revisión 2)
- **Proyecto:** Desarrollo web corporativo de Superautos Carballo
- **Documento de referencia:** `Garcia_Torres_Jose_Rafael_fito1_brief.pdf`
- **Fichero de entrega (PDF):** `Garcia_Torres_Jose_Rafael_Fito2_DocumentoFuncional.pdf`
- **Repositorio:** proyecto versionado con Git desde esta fase (repo local inicializado el 05/08/2026). URL pública de GitHub: `https://github.com/<usuario>/superautos-carballo` *(actualizar tras subir el repositorio)*

---

## Sobre esta revisión

Esta segunda versión corrige las observaciones de la evaluación del Fito 2. Los cambios principales, y el porqué de cada uno:

- **Fijé el catálogo en 8 vehículos de ejemplo.** Son los suficientes para que los filtros tengan sentido y no inflan el trabajo de imágenes y datos. Son una mezcla de gasolina, eléctricos e híbridos para que los filtros se vean funcionar.
- **Dejo de marcar el repositorio como "pendiente"**: inicialicé Git en el proyecto. La URL pública se añade al subir a GitHub.
- **El tema de los formularios era lo más flojo del documento anterior** y de hecho era lo que tenía menos claro. Lo decidí después de mirar cómo lo hacen concesionarios reales (AutoScout24, coches.net y las webs de Porsche y BMW): normalmente no hay un formulario único, sino **un formulario por contexto**, con el vehículo ya sabido. En la evaluación se sugirió además un formulario en la propia ficha para concertar la prueba; opté finalmente por hacerlo como **página hija de la ficha** porque así cumplíamos el requisito de tener dos páginas hijas y el formulario podía tener pasos y resumen propios, que en una ficha ya llena de contenido iban a encajar mal. Lo explico en la sección 6.
- **Reordené la jerarquía de páginas**: la ficha de vehículo es página hija del catálogo, y la solicitud de prueba de conducción es hija de la ficha. En el documento anterior decía que "no había subpáginas", lo cual era un error: el propio sitemap ya las tenía. (sección 2)
- **Añadí una sección de RGPD** (sección 9.1), que me faltaba por desarrollar.
- **Concreté lo que son supuestos** que todavía no me ha confirmado el cliente (entrega a domicilio, certificación, garantía, financiación, vehículo de sustitución, plazos de los recambios, perfiles de redes sociales y mapa). Están marcados como tales en la sección 9.4.
- **Pasé de WCAG 2.1 a WCAG 2.2** y cambié la redacción de los objetivos de rendimiento: Lighthouse, contraste y Core Web Vitals son **objetivos que se comprobarán**, no resultados que se puedan garantizar en una maqueta.
- **Simplifiqué la sección técnica**: me quedé solo con lo que puedo implementar, comprobar y explicar en esta fase. Todo lo que depende de un servidor (PHP, base de datos) queda descrito como fase posterior, que es donde realmente se resuelve la parte de envío y diferenciación de solicitudes.

No he avanzado a los wireframes ni al diseño UX/UI: ese es el siguiente fito.

---

## 1. Objetivo y alcance

### 1.1 Objetivo principal

Desarrollar el sitio web corporativo de **Superautos Carballo**, concesionario multimarca de vehículos de alta gama con sede en Carballo. La web presenta el catálogo de vehículos, explica los servicios de venta, mantenimiento y posventa, facilita la solicitud de recambios y ofrece un canal de contacto directo con el concesionario. El objetivo de fondo es convertir visitantes en clientes, algo que hoy se hace sobre todo por el boca a boca y de forma presencial.

### 1.2 Objetivos secundarios

- Mostrar un catálogo de demostración con fichas técnicas detalladas.
- Explicar los servicios (venta, mantenimiento, posventa) y el servicio de recambios bajo pedido.
- Permitir pedir información, concertar una prueba de conducción y contactar con el concesionario.
- Dejar la estructura (HTML, estilos, SEO, accesibilidad) preparada para conectarse en el futuro a una base de datos.

### 1.3 Alcance de esta fase

| Bloque | Detalle |
|---|---|
| Páginas tipo | `index.html`, `catalogo.html`, `servicios.html`, `recambios.html`, `contacto.html` + 2 páginas hijas (`ficha_vehiculo.html`, `proba_conduccion.html`). **7 páginas en total.** |
| Catálogo de demostración | **8 vehículos de ejemplo** con los datos en el propio sitio (objeto JS) y maquetado en HTML, sin servidor ni base de datos. |
| Formularios | Contacto (con selector de motivo), prueba de conducción (varios pasos) y recambios. Validación en cliente y estados de envío **simulados**. |
| Interacciones | Menú (con menú móvil), carrusel de destacados, filtros del catálogo, galería con zoom en la ficha, microinteracciones y animaciones de entrada. |
| Diseño | Adaptable (390 / 768 / 1440 px), accesible (WCAG 2.2 AA), SEO básico e imágenes optimizadas. |

### 1.4 Qué queda para una programación posterior

- Conexión del catálogo a una base de datos real y panel de administración.
- Envío real de los formularios por correo (backend PHP) y la diferenciación efectiva de las solicitudes según el motivo (sección 6.4).
- Gestión de citas y pruebas de conducción como sistema con confirmación y agenda.
- Presupuestador de recambios en línea con pago, área privada de clientes y gestión de usuarios.

---

## 2. Mapa web y jerarquía de páginas

### 2.1 Sitemap

```
Superautos Carballo
├── index.html                # Inicio: hero + carrusel, servicios, destacados, CTA
├── catalogo.html             # Catálogo (cuadrícula con filtros)
│   └── ficha_vehiculo.html   # Ficha del vehículo (página hija del catálogo)
│       └── proba_conduccion.html   # Solicitud de prueba de conducción (hija de la ficha)
├── servicios.html            # Venta, mantenimiento y posventa
├── recambios.html            # Recambios + formulario de solicitud
└── contacto.html             # Formulario de contacto, datos y mapa
```

### 2.2 Relaciones entre páginas

| Desde | Enlaces hacia | Tipo de relación |
|---|---|---|
| `index.html` | `catalogo.html`, `servicios.html`, `contacto.html` y `ficha_vehiculo.html` (destacados) | Navegación principal y contenidos destacados |
| `catalogo.html` | `ficha_vehiculo.html` (desde cada tarjeta) | **Descendente: listado → ficha** |
| `ficha_vehiculo.html` | `proba_conduccion.html` (CTA «Solicitar prueba») y `contacto.html` (CTA «Solicitar información», con datos prefilled) | **Descendente: ficha → prueba**; conversión |
| `proba_conduccion.html` | `contacto.html` (vía alternativa) | Complementaria |
| `servicios.html` | `contacto.html` (CTA de cada servicio) y `recambios.html` | Conversión |
| `recambios.html` | `contacto.html` (datos alternativos) | Complementaria |
| `contacto.html` | — (destino final de conversión) | — |

El **breadcrumb** se mostrará en las páginas hijas: *Inicio > Catálogo > [vehículo]* en la ficha, e *Inicio > Catálogo > [vehículo] > Solicitar prueba* en la solicitud de prueba. Así queda clara la jerarquía y es útil para que el usuario sepa dónde está.

Reglas de relación:

- Todas las páginas comparten el menú global y el footer.
- El logo del header enlaza siempre a `index.html`.
- **Hay dos páginas hijas**, que es un requisito de la fase: `ficha_vehiculo.html` (hija del catálogo) y `proba_conduccion.html` (hija de la ficha). En el documento anterior escribí que no había subpáginas y estaba equivocado: el sitemap que yo mismo había puesto ya las tenía.
- La ficha es siempre el mismo archivo, se rellena según el vehículo seleccionado (no hay una página por coche).

---

## 3. Descripción de cada página

### 3.1 Inicio (`index.html`)

Puerta de entrada: presentar la marca, captar la atención de una clientela de alto poder adquisitivo y dirigir el tráfico hacia el catálogo, los servicios y el contacto.

1. **Hero con carrusel de vehículos destacados.** Imagen de gran formato, marca/modelo, datos resumen, precio y botón de acción. Sobresombreado inferior para garantizar la legibilidad del texto.
2. **Resumen de servicios.** Tres bloques (Venta, Mantenimiento, Posventa) con icono, título, descripción breve y botón hacia `servicios.html`.
3. **Vehículos destacados.** Cuadrícula con las mismas tarjetas del catálogo, que enlazan a la ficha.
4. **Por qué elegirnos.** Bloque de confianza: trato directo, certificación, garantía, servicio integral y entrega a domicilio en Galicia *(supuesto por confirmar, ver 9.4)*.
5. **CTA final.** Botón «Contactar» y datos de contacto resumidos.

**CTAs.** «Ver catálogo», «Ver ficha», «Conocer servicios», «Contactar».

### 3.2 Catálogo (`catalogo.html`)

Mostrar los 8 vehículos de ejemplo en cuadrícula y permitir filtrarlos. Son estos (datos y precios ficticios):

| Vehículo | Combustible | Tipo |
|---|---|---|
| Ferrari 12 Cilindri | Gasolina | Deportivo |
| Porsche 911 Targa 4S | Gasolina | Deportivo |
| Audi Q8 | Gasolina | SUV de lujo |
| Lamborghini Revuelto | Híbrido | Deportivo |
| Lamborghini Urus | Híbrido | SUV de lujo |
| Porsche Taycan | Eléctrico | Deportivo |
| Mercedes EQS | Eléctrico | Berlina de lujo |
| Mercedes AMG EQE | Eléctrico | Berlina de lujo |

La mezcla de combustibles y tipos es intencionada: con solo 8 coches, los filtros de marca, combustible y precio tienen de qué distinguir sin que la demostración se haga inmanejable.

1. **Cabecera.** Titular, descripción breve y número de vehículos disponibles.
2. **Barra de filtros.** Por **marca**, **combustible** y **precio** (rango), y ordenación por precio (ascendente/descendente) y año. Los filtros se combinan entre sí y la cuadrícula se actualiza al momento.
3. **Cuadrícula de resultados.** Tarjetas de vehículo reutilizables (1 columna en móvil, 2 en tablet, 3 en escritorio).
4. **Estado vacío.** Mensaje cuando ningún vehículo cumple los filtros, con botón «Limpiar filtros».

**CTAs.** «Ver ficha» en cada tarjeta, «Limpiar filtros».

### 3.3 Ficha de vehículo (`ficha_vehiculo.html`) — hija del catálogo

Mostrar la información completa de un vehículo y ofrecer las acciones de conversión. Es la misma página para todos los vehículos, se rellena con los datos del seleccionado.

**Contenidos (se mantienen los del documento anterior):**

| Bloque | Contenido |
|---|---|
| Galería | Fotografías del vehículo, con ampliación/zoom (lightbox) |
| Resumen y precio | Marca, modelo, precio y etiquetas de año, kilometraje, combustible, cambio y potencia |
| Datos técnicos | Garantía, equipamiento, estado y disponibilidad |
| Equipamiento | Listado de extras incluidos |
| Bloque de confianza | Certificación, revisión y garantía del vehículo |
| CTAs | «Solicitar información» (→ `contacto.html` con el vehículo prefilled) y «Solicitar prueba» (→ `proba_conduccion.html` con el vehículo prefilled) |

La ficha lee el identificador del vehículo de la URL, busca los datos en el catálogo front-end y los vuelca en los bloques. Si el identificador no existe, muestra un aviso con enlace al catálogo.

### 3.4 Solicitud de prueba de conducción (`proba_conduccion.html`) — hija de la ficha

Formulario **en varios pasos** para solicitar una prueba de conducción. Se accede desde la ficha con el vehículo ya seleccionado. Detalles completos en la sección 6.2.

**Aviso importante que se muestra en esta página:** la solicitud **no es una reserva automática**. Es una petición que el concesionario confirma por teléfono o correo antes de cerrar la cita. Así se gestionan las expectativas del usuario y se evitan reservas fantasma.

### 3.5 Servicios (`servicios.html`)

Presentar los tres servicios con la misma estructura (icono o imagen, título, descripción, lista de servicios incluidos y CTA):

- **Venta.** Asesoramiento, financiación, prueba de conducción y tramitación de la compra.
- **Mantenimiento.** Revisiones oficiales, diagnóstico y reparación, preparación para la ITV y vehículo de sustitución *(supuesto, 9.4)*.
- **Posventa.** Garantía *(supuesto)*, atención al cliente, soporte técnico y consejos de mantenimiento.

**CTAs.** «Contactar» en cada sección y enlace a `recambios.html` desde mantenimiento.

### 3.6 Recambios (`recambios.html`)

Página informativa + formulario independiente de solicitud de recambios (sección 6.3). Explica el proceso (consulta → confirmación → pedido al proveedor → aviso al cliente) y que las piezas son **bajo pedido**, con plazo estimado de 1–2 semanas desde la confirmación *(supuesto, 9.4)*.

### 3.7 Contacto (`contacto.html`)

1. **Formulario de contacto** con **selector obligatorio de motivo de la consulta** (sección 6.1). Cuando se llega desde la ficha con el botón «Solicitar información», el vehículo (identificador, marca y modelo) y el motivo llegan prefilled por la URL.
2. **Datos del concesionario.** Dirección, teléfono, correo y horario.
3. **Mapa e indicaciones.** Mapa **incrustado** (iframe interactivo) con imagen estática de reserva, indicaciones de acceso en texto y botón «Cómo llegar» que **abre la app de navegación en el móvil** (enlace `geo:` que abre Google Maps o Apple Maps). Ver decisión en la sección 5.6.

---

## 4. Páginas tipo y componentes reutilizables

### 4.1 Ficha de vehículo

Es la página tipo reutilizable del proyecto. No hay una página por coche: el catálogo y la home enlazan siempre a `ficha_vehiculo.html`, que se rellena con los datos del vehículo seleccionado. Añadir o retirar un coche no obliga a crear ni borrar páginas: solo se actualiza la fuente de datos.

Datos que muestra: marca y modelo, precio, año, kilometraje, combustible, cambio, potencia, garantía, equipamiento, disponibilidad, galería de imágenes y las dos CTAs («Solicitar información», «Solicitar prueba»).

### 4.2 Tarjeta de vehículo

Componente reutilizable (catálogo y destacados de la home). Muestra imagen, marca/modelo, etiquetas de año, kilometraje, combustible y cambio, precio y botón «Ver ficha».

### 4.3 Bloque de servicio

Componente reutilizable en `servicios.html` y, en versión resumida, en la home.

---

## 5. Funcionalidades e interacciones

### 5.1 Menú y navegación

- **Menú principal:** Inicio, Catálogo, Servicios, Recambios y Contacto + CTA «Reservar cita». En escritorio horizontal; en tablet/móvil colapsa en un menú hamburguesa operable por teclado (`aria-expanded`, `aria-controls`, cierre con `Esc`).
- **Enlace activo** marcado visualmente y con `aria-current="page"`.
- **Breadcrumb** en las páginas hijas (ficha y prueba de conducción).
- **Footer:** columnas de enlaces, datos del concesionario y **redes sociales** (sección 5.2).
- **Enlace «saltar al contenido»** en todas las páginas.

### 5.2 Redes sociales

Decidí las que ya aparecían en el plan de diseño: **Instagram, Facebook y YouTube**, que son las que mejor se ajustan a un concesionario premium (fotos de los coches, vídeos y eventos). Comportamiento:

- Iconos en el footer, cada uno con su `aria-label`.
- Abren en **nueva pestaña** (`target="_blank"` con `rel="noopener"`).
- Enlazan a los **perfiles reales** del concesionario *(supuesto por confirmar con el cliente, ver 9.4)*.
- **No incrusto publicaciones externas** en la web: evitaría peticiones y cookies de terceros que penalizan el rendimiento y obligan a avisar de cookies. Enlaces directos bastan en esta fase. Si el cliente quiere feeds incrustados, será una decisión posterior con implicaciones de privacidad.

### 5.3 Carrusel de destacados (home)

Componente **Carousel de Bootstrap 5** (sin JS propio). Controles anterior/siguiente, indicadores de posición y autoplay con pausa al pasar el ratón; en móvil admite arrastre. Con `prefers-reduced-motion` se reduce el desplazamiento y se detiene el autoplay.

### 5.4 Catálogo y filtros

- Cuadrícula generada desde los datos del catálogo front-end.
- Filtros combinables (marca, combustible, precio) y ordenación (precio, año), sin recargar la página.
- **Respuesta visual de los filtros:** la cuadrícula se actualiza al momento y las tarjetas entran con un fade suave, de modo que el usuario ve el efecto del filtro.
- Contador de resultados y estado vacío con «Limpiar filtros».

### 5.5 Galería de la ficha

Imagen principal con miniaturas clicables, navegación por teclado y **ampliación/zoom** (lightbox accesible). `alt` descriptivo en cada imagen.

### 5.6 Mapa y acceso (contacto)

Decisión: **mapa incrustado** (iframe interactivo). Prefiero **OpenStreetMap** porque un iframe sencillo no carga cookies de terceros, con lo que no hace falta banner de cookies; si el cliente prefiere Google Maps (más conocido), se cambiará el iframe y se activará el aviso de cookies *(supuesto, 9.4)*. En los dos casos:

- Acompaña una **imagen estática de reserva** por si el iframe no carga.
- **Indicaciones de acceso en texto** (cómo llegar desde la AC-552, aparcamiento, etc.).
- Botón **«Cómo llegar»** que abre la **app de navegación del móvil** mediante un enlace `geo:` (Google Maps / Apple Maps) — `mailto:`/`tel:` hacen lo propio con teléfono y correo, así que aplico el mismo criterio.

### 5.7 Experiencia visual premium

Es una web de coches de lujo, y eso se nota en los detalles:

- **Fotografías de gran formato**, protagonistas en hero y ficha.
- **Transiciones suaves** (150–250 ms, curva `ease-out`) en hover, cambio de imagen y apertura de menú.
- **Hover en las tarjetas:** elevación con sombra y un leve zoom de la imagen.
- **Galería con ampliación y zoom** (lightbox).
- **Animaciones de entrada discretas** (fade + pequeño desplazamiento) en la primera carga de las secciones.
- **Respuesta visual de los filtros** (5.4).
- **Opcional:** un vídeo corto (≈30 s) o una **vista 360°** de algún vehículo, solo si hay material propio o autorizado; de momento queda como recurso opcional, no prometido.
- **Todo respeta `prefers-reduced-motion`** y nadie bloquea la navegación: las animaciones no son condición para llegar al contenido.

---

## 6. Formularios

Decidí, tras mirar las webs de referencia, que **no hay un único formulario universal**: hay un formulario por contexto, y el vehículo ya se sabe cuando viene de una ficha. En resumen:

| Formulario | Página | Motivo | Cómo llega el vehículo |
|---|---|---|---|
| Contacto con selector de motivo | `contacto.html` | Información, prueba, financiación, mantenimiento, posventa, consulta general | Prefilled desde la ficha vía URL |
| Prueba de conducción (varios pasos) | `proba_conduccion.html` | Reserva de una prueba | Prefilled desde la ficha vía URL |
| Recambios | `recambios.html` | Solicitud de piezas | El usuario escribe marca/modelo de la pieza |

### 6.1 Formulario de contacto (`contacto.html`)

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

**Prefill desde la ficha.** El botón «Solicitar información» de la ficha enlaza a `contacto.html?vehiculo=porsche-911-targa&motivo=informacion`. El formulario lee el parámetro, preselecciona el motivo y rellena el identificador, la marca y el modelo del vehículo. Al enviar, el identificador y el modelo van como campos ocultos (para que el concesionario sepa de qué coche se habla).

**Estados.** Inicial, error de campo, envío en proceso (spinner), éxito (mensaje de confirmación y vaciado) y error general (se conservan los datos).

### 6.2 Formulario de prueba de conducción (`proba_conduccion.html`)

Formulario en **3 pasos**, accesible y con resumen final:

1. **«El vehículo y la cita»:** vehículo (identificador, marca y modelo) **prefilled desde la ficha y de solo lectura**, fecha preferente y franja horaria.
2. **«Tus datos»:** nombre, apellidos, correo y teléfono.
3. **«Revisa y envía»:** resumen de la solicitud, checkbox RGPD y botón de envío.

Aviso destacado en la página y en el paso 1:

> **Tu solicitud está pendiente de confirmación.** No se reserva nada automáticamente: el concesionario contactará contigo por teléfono o correo para confirmar la fecha y la hora de la prueba.

En el estado de éxito se repite la misma idea: «Hemos recibido tu solicitud de prueba del *Porsche 911 Targa 4S*. En breve te confirmaremos la fecha y la hora». De este modo el usuario sabe exactamente qué pasará después.

### 6.3 Formulario de recambios (`recambios.html`)

Se mantiene como **formulario independiente**, con los campos ya definidos: referencia de la pieza, marca y modelo del vehículo, año (1980–2026), nombre, apellidos, correo, teléfono, comentarios y checkbox RGPD. El mensaje de éxito indica que la solicitud ha sido recibida y que el plazo de respuesta es de 1–2 semanas.

### 6.4 Cómo funciona por dentro la diferenciación de solicitudes

Este punto me faltaba por definir y es lo que más claro quería dejar.

- **En esta fase (maqueta):** los tres formularios validan en cliente (JS) y muestran estados de envío **simulados**. El selector de motivo solo condiciona qué campos se ven y qué texto de confirmación se muestra. **Ningún dato abandona el navegador**, y así lo indico en la política de privacidad.
- **Fase de programación (backend PHP):** aquí es donde la diferenciación cobra sentido de verdad. Cada formulario se envía a su script (`contacto.php`, `proba_conduccion.php`, `recambios.php` + `envia_email.php`). El servidor valida las entradas (no se fía del cliente), comprueba CSRF, honeypot y límite de intentos, y **encamina la solicitud según el motivo**: el selector decide el destinatario (por ejemplo, consultas de financiación a la persona de ventas, mantenimiento al taller) y el asunto del correo. En los formularios que vienen de una ficha, el identificador, la marca y el modelo del vehículo viajan en campos ocultos y van en el cuerpo del correo.
- **Qué no hago en esta fase:** no monto una agenda en línea ni un CRM. El concesionario recibe el correo y confirma manualmente (sobre todo la prueba de conducción, que es una solicitud, no una reserva). Si en el futuro el cliente quisiera gestionar las solicitudes como tickets o con agenda compartida, el mismo formulario podría escribir en una base de datos, pero eso queda fuera de este curso.

### 6.5 Reglas comunes a todos los formularios

- Validación en cliente con `blur` y al enviar; mensajes en español junto al campo con `role="alert"` y `aria-describedby`.
- `autocomplete` adecuado (`name`, `family-name`, `email`, `tel`).
- Campos obligatorios con `required` + `aria-required`.
- Checkbox de privacidad obligatorio y enlace a la política de privacidad.
- En fase futura se repite la misma validación en el servidor.

---

## 7. Real, simulado y futuro

| Funcionalidad | Tipo | Nota |
|---|---|---|
| Maquetación de las 7 páginas + componentes reutilizables | Real | En esta fase |
| Catálogo de demostración (8 vehículos, objeto JS) | Simulación front-end | Sin base de datos ni servidor |
| Filtros y ordenación | Real | Sobre datos locales, sin recargar |
| Carrusel, menú móvil, galería con zoom, microinteracciones | Real | Componentes Bootstrap + JS propio |
| Formularios (contacto, prueba, recambios) | Simulación front-end | Validación y estados funcionan; no se envía correo |
| SEO básico, adaptativo, accesibilidad | Real | En esta fase |
| Catálogo conectado a BD + panel de administración | Futuro | Cambia solo el origen de los datos |
| Envío real de los formularios + diferenciación por motivo (PHP) | Futuro | Ver sección 6.4 |
| Citas con confirmación y agenda, presupuestador, área privada | Futuro | Fuera de esta fase |

---

## 8. Navegación, adaptativo, usabilidad y accesibilidad

### 8.1 Navegación

Menú global en todas las páginas, logo a la home, «saltar al contenido», orden de tabulación lógica, foco visible, menú móvil por teclado, breadcrumb en las hijas y ninguna ligazón rota interna.

### 8.2 Diseño adaptativo

Mobile-first con tres resoluciones de diseño: **390 / 768 / 1440 px**. Cuadrícula del catálogo a 1/2/3 columnas. Imágenes con `srcset`/`sizes` y `width`/`height` para evitar desplazamientos (CLS). Comprobación en Chrome, Edge, Firefox y Safari.

### 8.3 Usabilidad

Un `h1` por página, CTAs evidentes y con texto de acción claro, textos breves orientados a una clientela de alto poder adquisitivo, formularios cortos con etiquetas visibles e información de contacto coherente en todo el sitio. Página 404 personalizada.

### 8.4 Accesibilidad (WCAG 2.2 AA)

Tomo **WCAG 2.2** como referencia (sustituye a 2.1). Sobre lo que ya tenía en 2.1, WCAG 2.2 añade criterios que tengo en cuenta:

- **Foco no obstruido** (2.4.11): el menú fijo no tapa el foco al navegar por teclado.
- **Tamaño mínimo de objetivo** (2.5.8): botones e iconos táctiles con al menos 24×24 px; los controles del carrusel y las miniaturas de la galería lo cumplen.
- **Navegación consistente** (3.2.6) y **Acción repetida** (3.3.7), aplicables sobre todo en la fase de backend.
- Mantengo el resto de 2.1: HTML semántico, contraste AA, `alt` correcto, formularios con `role="alert"`, carrusel accesible, no usar solo el color para comunicar estado.

**Contraste:** como objetivo se comprueba con los pares definidos (texto blanco sobre negro, texto negro sobre naranja `#FF9800`); el gris `#9CA3AF` solo para texto decorativo, y si el eje no lo pasa, subo el tono.

**Movimiento reducido:** todas las animaciones (carrusel, transiciones, entradas, hover, zoom) se reducen o desactivan con `prefers-reduced-motion`. Las animaciones nunca son necesarias para acceder al contenido.

---

## 9. Privacidad, seguridad y rendimiento

### 9.1 Protección de datos (RGPD y LOPDGDD)

Defino cómo se cumple la normativa, porque no lo tenía desarrollado:

- **Marco legal:** Reglamento (UE) 2016/679 (RGPD) y Ley Orgánica 3/2018 de Protección de Datos Personales (LOPDGDD).
- **Responsable:** Superautos Carballo. Los datos solo se usan para gestionar y responder a la consulta/solicitud; no se ceden a terceros.
- **Legitimación:** el consentimiento explícito de la persona usuaria (checkbox obligatorio) y el interés legítimo de responder a la solicitud.
- **Consentimiento:** en cada formulario, checkbox con texto claro («Acepto la política de privacidad») y **enlace a la página de política de privacidad**, que describe finalidad, conservación y derechos.
- **Derechos:** acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, ejercibles por correo (`info@superautoscarballo.es`) o presencialmente.
- **Conservación:** los datos se conservan solo mientras dure la gestión de la solicitud y los plazos legales aplicables; después, se eliminan.
- **Cookies:** en esta fase no se usan cookies propias. Solo se cargará servicio de terceros que pueda implicar cookies si el cliente pide el mapa de Google Maps; en ese caso se activa el **banner de cookies**. Con el mapa de OpenStreetMap no hace falta.
- **Nota de transparencia:** en la maqueta los formularios son simulaciones y **los datos no abandonan el navegador**; cuando se implemente el backend, se registrará el tratamiento en la política de privacidad y en el registro de actividades de tratamiento.

### 9.2 Seguridad básica

HTTPS con certificado TLS y redirección HTTP→HTTPS; cabeceras básicas (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`). En los formularios simulados no se almacena ni transmite nada. Cuando haya backend: validación en servidor, escape de entradas (anti-XSS), CSRF, honeypot y límite de intentos. No se exponen credenciales ni datos personales en el front-end.

### 9.3 Rendimiento

- Imágenes en **WebP** con fallback JPEG y `srcset`; `loading="lazy"` fuera del primer pliegue y `fetchpriority="high"` en el hero; `width`/`height` para evitar CLS.
- Fuentes con `preconnect`, solo pesos necesarios y `font-display: swap`.
- CSS/JS minificados y JS diferido.

**Objetivos que se comprobarán con Lighthouse** (no resultados garantizados en una maqueta): LCP < 2,5 s, INP < 200 ms, CLS < 0,1, y puntuación Lighthouse ≥ 90 en Performance, Accessibility, Best Practices y SEO. El contraste y los Core Web Vitals se indican como **objetivos de comprobación** en las pruebas finales, no como una promesa de la fase de maquetación.

### 9.4 Supuestos que conviene confirmar con el cliente

Estos puntos estaban en el documento anterior como hechos consumados y en realidad son **supuestos** que todavía no me ha confirmado el cliente:

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

Si alguna de estas condiciones no se confirma, se ajusta el texto correspondiente sin cambiar la estructura.

---

## 10. Contenidos y recursos necesarios

| Recurso | Origen | Estado |
|---|---|---|
| Fotografías de los **8 vehículos** de ejemplo | Propias o banco con licencia; registrar el origen | Algunas ya disponibles en el proyecto |
| Logotipo e identidad visual | Cliente | Logo de prueba en WebP |
| Textos de servicios y datos técnicos | Cliente / redacción | Pendiente de textos reales |
| Datos de contacto, horario y **redes sociales** reales | Cliente | Pendiente |
| Política de privacidad y aviso legal | Cliente / modelo adaptado | Hay que redactarla |
| Mapa e indicaciones de acceso | OpenStreetMap/Google | Por decidir con el cliente |
| Vídeo corto o vista 360° (opcional) | Material propio autorizado | Solo si existe |

---

## 11. Relación entre las referencias del brief y las decisiones de este documento

Para que se vea de dónde salen las decisiones:

| Decisión | Referencia del brief que la inspira |
|---|---|
| **Filtros** del catálogo (marca, precio, combustible) | AutoScout24 y coches.net: cuadrícula con filtros y ordenación |
| **Catálogo en cuadrícula** con tarjetas reutilizables | BMW y AutoScout24 |
| **Ficha de vehículo** con datos técnicos y CTA | Mercedes-Benz: ficha completa y coherencia de marca |
| **Diseño limpio, poco texto, fotos grandes** | Porsche: sensación de exclusividad |
| **Navegación sencilla** con CTA «Reservar cita» | Porsche y BMW: menú limpio con acción clara |
| **Formulario por contexto** y contacto del concesionario | coches.net: contacto entre comprador y vendedor en la misma ficha; concesionarios locales (Pensado Motor, VCAR) |

---

## 12. Por qué Bootstrap 5

Mantengo la decisión de Bootstrap 5, justificada:

- Es lo que viene en el **export del diseño Pencil** y en el plan de la fase anterior, así que no es una decisión nueva sin pensarla.
- Me resuelve con el componente oficial **Carousel** (requisito del plan), la **cuadrícula responsive** (390/768/1440), el **menú colapsable** y el **modal** de confirmación, sin escribir JS propio para eso.
- Tiene buena accesibilidad base (ARIA en los carrusel y collapse) y documentación amplia, lo que me permite **comprobar y explicar** cada uso que hago.
- El resto (estilos, tokens, microinteracciones, animaciones) es CSS propio: Bootstrap es la base, no el estilo.

Si en el futuro el cliente pidiera una razón para eliminarlo, es viable, pero en esta fase aporta más de lo que quita.

---

## 13. Criterios de comprobación

### Generales

- Páginas sin errores de consola ni imágenes rotas; un único `h1`; `<title>` y `meta description` únicos.
- Menú, logo, footer y breadcrumbs funcionando; enlaces activos marcados; sin 404 internos.
- Adaptación correcta a 390 / 768 / 1440 px; contraste AA; navegación completa por teclado; HTML y CSS validados en el W3C.
- **Lighthouse y Core Web Vitals como comprobación final** (objetivos de la sección 9.3).

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

## 14. Seguimiento y entrega

### 14.1 Hoja de seguimiento

La hoja de seguimiento se actualizó con el trabajo de esta fase (tiempo, herramientas, incidencias y uso de IA como apoyo). El resumen está en la sección siguiente y el detalle en la hoja individual en Google Sheets / `Folla_Seguimento_Fito2.md`.

### 14.2 Resumen del trabajo de esta fase

| Aspecto | Detalle |
|---|---|
| Trabajo realizado | Revisión del brief, estructura y jerarquía, definición de formularios y motivos, catálogo de 8 vehículos, selección de imágenes optimizadas, accesibilidad y rendimiento, revisión tras las observaciones |
| Tiempo estimado | Aprox. 12 h repartidas entre la semana del 03/08 y el 05/08 |
| Herramientas | VS Code, Git, Pencil (diseño .pen), GIMP (logos e imágenes), WebP para optimización, Lighthouse para comprobaciones |
| Incidencias | Imágenes de origen libre difíciles de encontrar para modelos muy nuevos (tuve que reutilizar y marcar el origen); decisión de fijar el catálogo en 8 por este motivo y por simplificar |
| Uso de IA | Usada como apoyo en la revisión de las observaciones, en la generación de ideas para los formularios y en la detección de errores de redacción. Todas las decisiones funcionales están revisadas y explicadas por mí en este documento |

### 14.3 Entrega

- **Documento funcional en PDF:** `Garcia_Torres_Jose_Rafael_Fito2_DocumentoFuncional.pdf`.
- **Repositorio Git:** inicializado en local; URL de GitHub: `https://github.com/<usuario>/superautos-carballo` (actualizar al subir).
- **Hoja de seguimiento:** `Folla_Seguimento_Fito2.md` y Google Sheets.
