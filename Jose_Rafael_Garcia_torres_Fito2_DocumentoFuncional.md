# Documento Funcional – Superautos Carballo (v2)

- **Autor:** José Rafael García Torres
- **Data:** 05/08/2026 (revisión 2)
- **Proxecto:** Desenvolvemento web corporativo de Superautos Carballo
- **Documento de referencia:** `Garcia_Torres_Jose_Rafael_Hito1_Brief.md`
- **Ficheiro de entrega (PDF):** `Garcia_Torres_Jose_Rafael_Fito2_DocumentoFuncional.pdf`
- **Repositorio:** proxecto versionado con Git desde esta fase (repo local inicializado o 05/08/2026). URL pública de GitHub: `https://github.com/<usuario>/superautos-carballo` *(actualizar tras subir o repositorio)*

---

## Sobre esta revisión

Esta segunda versión corrixe as observacións da avaliación do Fito 2. Os cambios principais, e o porqué de cada un:

- **Reducín o catálogo** de 15 a **8 vehículos de exemplo**. Os 15 eran demasiados para unha demostración: abonda para que os filtros teñan sentido e non infla o traballo de imaxes e datos. Son unha mestura de gasolina, eléctricos e híbridos para que os filtros se vexan funcionar.
- **Déixame de marcar o repositorio como "pendente"**: inicialicei Git no proxecto. A URL pública engádese ao subir a GitHub.
- **O tema dos formularios era o máis flojo do documento anterior** e de feito era o que tiña menos claro. Decideino despois de mirar como o fan concesionarios de verdade (AutoScout24, coches.net e as webs de Porsche e BMW): normalmente non hai un formulario único, senón **un formulario por contexto**, co vehículo xa sabido. Explícoo na sección 6.
- **Reordenei a xerarquía de páxinas**: a ficha de vehículo é páxina filla do catálogo, e a solicitude de proba de condución é filla da ficha. No documento anterior dicía que "non había subpáxinas", o cal era un erro: o propio sitemap xa as tiña. (sección 2)
- **Engadín unha sección de RGPD** (sección 9.1), que me faltaba por desenvolver.
- **Concretéi o que son supostos** que aínda non me confirmou o cliente (entrega a domicilio, certificación, garantía, financiamento, vehículo de substitución, prazos dos recambios). Están marcados como tales na sección 9.4.
- Pasei de **WCAG 2.1 a WCAG 2.2** e cambiei a redacción dos obxectivos de rendemento: Lighthouse, contraste e Core Web Vitals son **obxectivos que se comprobarán**, non resultados que se poidan garantir nunha maqueta.
- **Simplifiquei a sección técnica**: quedei só co que podo implementar, comprobar e explicar nesta fase. Todo o que depende dun servidor (PHP, base de datos) queda descrito como fase posterior, que é onde realmente se resolve a parte de envío e diferenciación de solicitudes.

Non avancei aos wireframes nin ao deseño UX/UI: ese é o seguinte fito.

---

## 1. Obxectivo e alcance

### 1.1 Obxectivo principal

Desenvolver o sitio web corporativo de **Superautos Carballo**, concesionario multimarca de vehículos de alta gama con sede en Carballo. A web presenta o catálogo de vehículos, explica os servizos de venda, mantemento e posvenda, facilita a solicitude de recambios e ofrece unha canle de contacto directa co concesionario. O obxectivo de fondo é converter visitantes en clientes, algo que hoxe se fai sobre todo polo boca a boca e de xeito presencial.

### 1.2 Obxectivos secundarios

- Amosar un catálogo de demostración con fichas técnicas detalladas.
- Explicar os servizos (venda, mantemento, posvenda) e o servizo de recambios baixo pedido.
- Permitir pedir información, concertar unha proba de condución e contactar co concesionario.
- Deixar a estrutura (HTML, estilos, SEO, accesibilidade) preparada para conectarse no futuro a unha base de datos.

### 1.3 Alcance desta fase

| Bloque | Detalle |
|---|---|
| Páxinas tipo | `index.html`, `catalogo.html`, `servicios.html`, `recambios.html`, `contacto.html` + 2 páxinas fillas (`ficha_vehiculo.html`, `proba_conduccion.html`). **7 páxinas en total.** |
| Catálogo de demostración | **8 vehículos de exemplo** cos datos no propio sitio (obxecto JS) e maquetado en HTML, sen servidor nin base de datos. |
| Formularios | Contacto (con selector de motivo), proba de condución (varios pasos) e recambios. Validación en cliente e estados de envío **simulados**. |
| Interaccións | Menú (con menú móbil), carrousel de destacados, filtros do catálogo, galería con zoom na ficha, microinteraccións e animacións de entrada. |
| Deseño | Adaptable (390 / 768 / 1440 px), accesible (WCAG 2.2 AA), SEO básico e imaxes optimizadas. |

### 1.4 Que queda para unha programación posterior

- Conexión do catálogo a unha base de datos real e panel de administración.
- Envío real dos formularios por correo (backend PHP) e a diferenciación efectiva das solicitudes segundo o motivo (sección 6.4).
- Xestión de citas e probas de condución como sistema con confirmación e axenda.
- Presupostador de recambios en liña con pago, área privada de clientes e xestión de usuarios.

---

## 2. Mapa web e xerarquía de páxinas

### 2.1 Sitemap

```
Superautos Carballo
├── index.html                # Inicio: hero + carrousel, servizos, destacados, CTA
├── catalogo.html             # Catálogo (grella con filtros)
│   └── ficha_vehiculo.html   # Ficha do vehículo (páxina filla do catálogo)
│       └── proba_conduccion.html   # Solicitude de proba de condución (filla da ficha)
├── servicios.html            # Venda, mantemento e posvenda
├── recambios.html            # Recambios + formulario de solicitude
└── contacto.html             # Formulario de contacto, datos e mapa
```

### 2.2 Relacións entre páxinas

| Desde | Enlaces cara a | Tipo de relación |
|---|---|---|
| `index.html` | `catalogo.html`, `servicios.html`, `contacto.html` e `ficha_vehiculo.html` (destacados) | Navegación principal e contidos destacados |
| `catalogo.html` | `ficha_vehiculo.html` (desde cada tarxeta) | **Descendente: listado → ficha** |
| `ficha_vehiculo.html` | `proba_conduccion.html` (CTA «Solicitar proba») e `contacto.html` (CTA «Solicitar información», con datos prefilled) | **Descendente: ficha → proba**; conversión |
| `proba_conduccion.html` | `contacto.html` (vía alternativa) | Complementaria |
| `servicios.html` | `contacto.html` (CTA de cada servizo) e `recambios.html` | Conversión |
| `recambios.html` | `contacto.html` (datos alternativos) | Complementaria |
| `contacto.html` | — (destino final de conversión) | — |

O **breadcrumb** amosarase nas páxinas fillas: *Inicio > Catálogo > [vehículo]* na ficha, e *Inicio > Catálogo > [vehículo] > Solicitar proba* na solicitude de proba. Así queda clara a xerarquía e é útil para o usuario saber onde está.

Regras de relación:

- Todas as páxinas comparten o menú global e o footer.
- O logo do header enlaza sempre a `index.html`.
- **Hai dúas páxinas fillas**, que é un requisito da fase: `ficha_vehiculo.html` (filla do catálogo) e `proba_conduccion.html` (filla da ficha). No documento anterior escribín que non había subpáxinas e estaba equivocado: o sitemap que eu mesmo puxera xa as tiña.
- A ficha é sempre o mesmo arquivo, enchese segundo o vehículo seleccionado (non hai unha páxina por coche).

---

## 3. Descrición de cada páxina

### 3.1 Inicio (`index.html`)

Porta de entrada: presentar a marca, captar a atención dunha clientela de alto poder adquisitivo e dirixir o tráfico cara ao catálogo, os servizos e o contacto.

1. **Hero con carrousel de vehículos destacados.** Imaxe de gran formato, marca/modelo, datos resumo, prezo e botón de acción. Sobrescurizado inferior para garantir a lexibilidade do texto.
2. **Resumo de servizos.** Tres bloques (Venda, Mantemento, Posvenda) con icona, título, descrición breve e botón cara a `servicios.html`.
3. **Vehículos destacados.** Grella coas mesmas tarxetas do catálogo, que enlazan á ficha.
4. **Por que elixirnos.** Bloque de confianza: trato directo, certificación, garantía, servizo integral e entrega a domicilio en Galicia *(suposto por confirmar, ver 9.4)*.
5. **CTA final.** Botón «Contactar» e datos de contacto resumidos.

**CTAs.** «Ver catálogo», «Ver ficha», «Coñecer servizos», «Contactar».

### 3.2 Catálogo (`catalogo.html`)

Amosar os 8 vehículos en grella e permitir filtralos.

1. **Cabeceira.** Titular, descrición breve e número de vehículos dispoñibles.
2. **Barra de filtros.** Por **marca**, **combustible** e **prezo** (rango), e ordenación por prezo (ascendente/descendente) e ano. Os filtros combínanse entre si e a grella actualízase ao momento.
3. **Grella de resultados.** Tarxetas de vehículo reutilizables (1 columna en móbil, 2 en tablet, 3 en escritorio).
4. **Estado baleiro.** Mensaxe cando ningún vehículo cumpre os filtros, con botón «Limpar filtros».

**CTAs.** «Ver ficha» en cada tarxeta, «Limpar filtros».

### 3.3 Ficha de vehículo (`ficha_vehiculo.html`) — filla do catálogo

Amosar a información completa dun vehículo e ofrecer as accións de conversión. É a mesma páxina para todos os vehículos, enchese cos datos do seleccionado.

**Contidos (mantéñense os do documento anterior):**

| Bloque | Contido |
|---|---|
| Galería | Fotografías do vehículo, con ampliación/zoom (lightbox) |
| Resumo e prezo | Marca, modelo, prezo e etiquetas de ano, quilometraxe, combustible, cambio e potencia |
| Datos técnicos | Garantía, equipamento, estado e dispoñibilidade |
| Equipamento | Listaxe de extras incluídos |
| Bloque de confianza | Certificación, revisión e garantía do vehículo |
| CTAs | «Solicitar información» (→ `contacto.html` co vehículo prefilled) e «Solicitar proba» (→ `proba_conduccion.html` co vehículo prefilled) |

A ficha le o identificador do vehículo da URL, busca os datos no catálogo front-end e volcaos nos bloques. Se o identificador non existe, amosa un aviso con enlace ao catálogo.

### 3.4 Solicitude de proba de condución (`proba_conduccion.html`) — filla da ficha

Formulario **en varios pasos** para solicitar unha proba de condución. Accédese desde a ficha co vehículo xa seleccionado. Detalles completos na sección 6.2.

**Aviso importante que se amosa nesta páxina:** a solicitude **non é unha reserva automática**. É unha petición que o concesionario confirma por teléfono ou correo antes de pechar a cita. Así se xestionan as expectativas do usuario e se evitan reservas fantasma.

### 3.5 Servizos (`servicios.html`)

Presentar os tres servizos coa mesma estrutura (icona ou imaxe, título, descrición, lista de servizos incluídos e CTA):

- **Venda.** Asesoramento, financiación, proba de condución e tramitación da compra.
- **Mantemento.** Revisións oficiais, diagnóstico e reparación, preparación para a ITV e vehículo de substitución *(suposto, 9.4)*.
- **Posvenda.** Garantía *(suposto)*, atención ao cliente, soporte técnico e consellos de mantemento.

**CTAs.** «Contactar» en cada sección e enlace a `recambios.html` desde mantemento.

### 3.6 Recambios (`recambios.html`)

Páxina informativa + formulario independente de solicitude de recambios (sección 6.3). Explica o proceso (consulta → confirmación → pedido ao provedor → aviso ao cliente) e que as pezas son **baixo pedido**, con prazo estimado de 1–2 semanas desde a confirmación *(suposto, 9.4)*.

### 3.7 Contacto (`contacto.html`)

1. **Formulario de contacto** con **selector obrigatorio de motivo da consulta** (sección 6.1). Cando se chega desde a ficha co botón «Solicitar información», o vehículo (identificador, marca e modelo) e o motivo chegan prefilled pola URL.
2. **Datos do concesionario.** Enderezo, teléfono, correo e horario.
3. **Mapa e indicacións.** Mapa **incrustado** (iframe interactivo) con imaxe estática de reserva, indicacións de acceso en texto e botón «Como chegar» que **abre a app de navegación no móbil** (ligazón `geo:` que abre Google Maps ou Apple Maps). Ver decisión na sección 5.6.

---

## 4. Páxinas tipo e compoñentes reutilizables

### 4.1 Ficha de vehículo

É a páxina tipo reutilizable do proxecto. Non hai unha páxina por coche: o catálogo e a home enlazan sempre a `ficha_vehiculo.html`, que se enche cos datos do vehículo seleccionado. Engadir ou retirar un coche non obriga a crear nin borrar páxinas: só se actualiza a fonte de datos.

Datos que amosa: marca e modelo, prezo, ano, quilometraxe, combustible, cambio, potencia, garantía, equipamento, dispoñibilidade, galería de imaxes e as dúas CTAs («Solicitar información», «Solicitar proba»).

### 4.2 Tarxeta de vehículo

Compoñente reutilizable (catálogo e destacados da home). Amosase imaxe, marca/modelo, etiquetas de ano, quilometraxe, combustible e cambio, prezo e botón «Ver ficha».

### 4.3 Bloque de servizo

Compoñente reutilizable en `servicios.html` e, en versión resumida, na home.

---

## 5. Funcionalidades e interaccións

### 5.1 Menú e navegación

- **Menú principal:** Inicio, Catálogo, Servizos, Recambios e Contacto + CTA «Reservar cita». En escritorio horizontal; en tablet/móbil colapsa nun menú hamburguesa operable por teclado (`aria-expanded`, `aria-controls`, peche con `Esc`).
- **Enlace activo** marcado visualmente e con `aria-current="page"`.
- **Breadcrumb** nas páxinas fillas (ficha e proba de condución).
- **Footer:** columnas de enlaces, datos do concesionario e **redes sociais** (sección 5.5).
- **Enlace «saltar ao contido»** en todas as páxinas.

### 5.2 Redes sociais

Decidín as que xa aparecían no plan de deseño: **Instagram, Facebook e YouTube**, que son as que mellor se axustan a un concesionario premium (fotos dos coches, vídeos e eventos). Comportamento:

- Iconas no footer, cada unha co seu `aria-label`.
- Abren en **nova pestana** (`target="_blank"` con `rel="noopener"`).
- Enlazan aos **perfís reais** do concesionario (por confirmar co cliente).
- **Non incrusto publicacións externas** na web: evitaría peticións e cookies de terceiros que penalizan o rendemento e obrigan a avisar de cookies. Enlaces directos bastan nesta fase. Se o cliente quere feeds incrustados, será unha decisión posterior con implicacións de privacidade.

### 5.3 Carrousel de destacados (home)

Compoñente **Carousel de Bootstrap 5** (sen JS propio). Controis anterior/seguinte, indicadores de posición e autoplay con pausa ao pasar o rato; en móbil admite arrastre. Con `prefers-reduced-motion` redúcese o desprazamento e detense o autoplay.

### 5.4 Catálogo e filtros

- Grella xerada desde os datos do catálogo front-end.
- Filtros combinables (marca, combustible, prezo) e ordenación (prezo, ano), sen recargar a páxina.
- **Resposta visual dos filtros:** a grella actualízase ao momento e as tarxetas entran cun fade suave, de xeito que o usuario ve o efecto do filtro.
- Contador de resultados e estado baleiro con «Limpar filtros».

### 5.5 Galería da ficha

Imaxe principal con miniaturas clicables, navegación por teclado e **ampliación/zoom** (lightbox accesible). `alt` descritivo en cada imaxe.

### 5.6 Mapa e acceso (contacto)

Decisión: **mapa incrustado** (iframe interactivo). Prefiro **OpenStreetMap** porque un iframe sinxelo non carrega cookies de terceiros, co que non fai falta banner de cookies; se o cliente prefire Google Maps (máis coñecido), cambiarase o iframe e activarase o aviso de cookies. Nos dous casos:

- Acompaña unha **imaxe estática de reserva** por se o iframe non carga.
- **Indicacións de acceso en texto** (como chegar desde a AC-552, aparcadoiro, etc.).
- Botón **«Como chegar»** que abre a **app de navegación do móbil** mediante unha ligazón `geo:` (Google Maps / Apple Maps) — `mailto:`/`tel:` fan o propio con teléfono e correo, así que aplico o mesmo criterio.

### 5.7 Experiencia visual premium

É unha web de coches de luxo, e iso notase nos detalles:

- **Fotografías de gran formato**, protagonistas en hero e ficha.
- **Transicións suaves** (150–250 ms, curva `ease-out`) en hover, cambio de imaxe e apertura de menú.
- **Hover nas tarxetas:** elevación con sombra e un leve zoom da imaxe.
- **Galería con ampliación e zoom** (lightbox).
- **Animacións de entrada discretas** (fade + pequeno desprazamento) na primeira carga das seccións.
- **Resposta visual dos filtros** (5.4).
- **Opcional:** un vídeo curto (≈30 s) ou unha **vista 360°** dalgún vehículo, só se hai material propio ou autorizado; de momento queda como recurso opcional, non prometido.
- **Todo respecta `prefers-reduced-motion`** e ninguén bloquea a navegación: as animacións non son condición para chegar ao contido.

---

## 6. Formularios

Decidín, tras mirar as webs de referencia, que **non hai un único formulario universal**: hai un formulario por contexto, e o vehículo xa se sabe cando vén dunha ficha. En resumo:

| Formulario | Páxina | Motivo | Como chega o vehículo |
|---|---|---|---|
| Contacto con selector de motivo | `contacto.html` | Información, proba, financiamento, mantemento, posvenda, consulta xeral | Prefilled desde a ficha vía URL |
| Proba de condución (varios pasos) | `proba_conduccion.html` | Reserva dunha proba | Prefilled desde a ficha vía URL |
| Recambios | `recambios.html` | Solicitude de pezas | O usuario escribe marca/modelo da peza |

### 6.1 Formulario de contacto (`contacto.html`)

**Campos comúns (sempre):**

| Campo | Tipo | Obrigatorio | Validación |
|---|---|---|---|
| Nome | texto | si | mínimo 2 caracteres |
| Apelidos | texto | si | mínimo 2 caracteres |
| Correo | `email` | si | formato de correo |
| Teléfono | `tel` | non | 9–15 díxitos |
| **Motivo da consulta** | **selector** | **si** | **debe elixirse unha opción** |
| Mensaxe | área de texto | si | mínimo 10, máximo 1000 caracteres |
| Privacidade (RGPD) | checkbox | si | debe estar marcada |

**Selector de motivo (obrigatorio):** información sobre un vehículo / reserva dunha proba de condución / financiamento / mantemento / posvenda / consulta xeral.

**Campos condicionais segundo o motivo:**

- **Información sobre un vehículo:** aparece o campo «Vehículo» (selector co catálogo, ou texto libre). Se vén da ficha, chega **prefilled e só lectura**.
- **Reserva dunha proba de condución:** aparecen «Vehículo», «Data preferente» e «Franxa horaria» (mañá 9:00–14:00 / tarde 15:00–20:00). Ademais, amosase o aviso de que **é unha solicitude pendente de confirmación**, non unha reserva automática.
- **Financiamento, mantemento, posvenda, consulta xeral:** só o campo de mensaxe.

**Prefill desde a ficha.** O botón «Solicitar información» da ficha enlaza a `contacto.html?vehiculo=porsche-911-targa&motivo=informacion`. O formulario le o parámetro, preselecciona o motivo e enche o identificador, a marca e o modelo do vehículo. Ao enviar, o identificador e o modelo van como campos ocultos (para que o concesionario saiba de que coche se fala).

**Estados.** Inicial, erro de campo, envío en proceso (spinner), éxito (mensaxe de confirmación e baleirado) e erro xeral (consérvanse os datos).

### 6.2 Formulario de proba de condución (`proba_conduccion.html`)

Formulario en **3 pasos**, accesible e con resumo final:

1. **«O vehículo e a cita»:** vehículo (identificador, marca e modelo) **prefilled desde a ficha e só lectura**, data preferente e franxa horaria.
2. **«Os teus datos»:** nome, apelidos, correo e teléfono.
3. **«Revisa e envía»:** resumo da solicitude, checkbox RGPD e botón de envío.

Aviso destacado na páxina e no paso 1:

> **A túa solicitude está pendente de confirmación.** Non se reserva nada automaticamente: o concesionario contactará contigo por teléfono ou correo para confirmar a data e a hora da proba.

No estado de éxito repítese a mesma idea: «Recibimos a túa solicitude de proba do *Porsche 911 Targa 4S*. En breve confirmarémosche a data e a hora». Deste xeito o usuario sabe exactamente que pasará despois.

### 6.3 Formulario de recambios (`recambios.html`)

Mantense como **formulario independente**, cos campos xa definidos: referencia da peza, marca e modelo do vehículo, ano (1980–2026), nome, apelidos, correo, teléfono, comentarios e checkbox RGPD. A mensaxe de éxito indica que a solicitude foi recibida e que o prazo de resposta é de 1–2 semanas.

### 6.4 Como funciona por dentro a diferenciación de solicitudes

Este punto faltábame por definir e é o que máis claro quería deixar.

- **Nesta fase (maqueta):** os tres formularios validan en cliente (JS) e amosan estados de envío **simulados**. O selector de motivo só condiciona que campos se ven e que texto de confirmación se amosa. **Ningún dato abandona o navegador**, e así o indico na política de privacidade.
- **Fase de programación (backend PHP):** aquí é onde a diferenciación cobra sentido de verdade. Cada formulario envíase ao seu script (`contacto.php`, `proba_conduccion.php`, `recambios.php` + `envia_email.php`). O servidor valida as entradas (non se fía do cliente), comproba CSRF, honeypot e límite de intentos, e **encamíña a solicitude segundo o motivo**: o selector decide o destinatario (por exemplo, consultas de financiamento á persoa de vendas, mantemento ao taller) e o asunto do correo. Nos formularios que veñen dunha ficha, o identificador, a marca e o modelo do vehículo viaxan en campos ocultos e van no corpo do correo.
- **Que non fago nesta fase:** non monto unha axenda en liña nin un CRM. O concesionario recibe o correo e confirma manualmente (sobre todo a proba de condución, que é unha solicitude, non unha reserva). Se no futuro o cliente quixese xestionar as solicitudes como tickets ou con axenda compartida, o mesmo formulario podería escribir nunha base de datos, pero iso queda fóra deste curso.

### 6.5 Regras comúns a todos os formularios

- Validación en cliente con `blur` e ao enviar; mensaxes en galego xunto ao campo con `role="alert"` e `aria-describedby`.
- `autocomplete` axeitado (`name`, `family-name`, `email`, `tel`).
- Campos obrigatorios con `required` + `aria-required`.
- Checkbox de privacidade obrigatorio e enlace á política de privacidade.
- En fase futura repítese a mesma validación no servidor.

---

## 7. Real, simulado e futuro

| Funcionalidade | Tipo | Nota |
|---|---|---|
| Maquetación das 7 páxinas + compoñentes reutilizables | Real | Nesta fase |
| Catálogo de demostración (8 vehículos, obxecto JS) | Simulación front-end | Sen base de datos nin servidor |
| Filtros e ordenación | Real | Sobre datos locais, sen recargar |
| Carrousel, menú móbil, galería con zoom, microinteraccións | Real | Compoñentes Bootstrap + JS propio |
| Formularios (contacto, proba, recambios) | Simulación front-end | Validación e estados funcionan; non se envía correo |
| SEO básico, adaptativo, accesibilidade | Real | Nesta fase |
| Catálogo conectado a BD + panel de administración | Futuro | Cambia só a orixe dos datos |
| Envío real dos formularios + diferenciación por motivo (PHP) | Futuro | Ver sección 6.4 |
| Citas con confirmación e axenda, presupostador, área privada | Futuro | Fóra desta fase |

---

## 8. Navegación, adaptativo, usabilidade e accesibilidade

### 8.1 Navegación

Menú global en todas as páxinas, logo á home, «saltar ao contido», orde de tabulación lóxica, foco visible, menú móbil por teclado, breadcrumb nas fillas e ningunha ligazón rota interna.

### 8.2 Deseño adaptativo

Mobile-first con tres resolucións de deseño: **390 / 768 / 1440 px**. Grella do catálogo a 1/2/3 columnas. Imaxes con `srcset`/`sizes` e `width`/`height` para evitar desprazamentos (CLS). Comprobación en Chrome, Edge, Firefox e Safari.

### 8.3 Usabilidade

Un `h1` por páxina, CTAs evidentes e con texto de acción claro, textos breves orientados a unha clientela de alto poder adquisitivo, formularios curtos con etiquetas visibles e información de contacto coherente en todo o sitio. Páxina 404 personalizada.

### 8.4 Accesibilidade (WCAG 2.2 AA)

Tomo **WCAG 2.2** como referencia (substitúe a 2.1). Sobre o que xa tiña en 2.1, WCAG 2.2 engade criterios que teño en conta:

- **Foco non obstruído** (2.4.11): o menú fixo non tapa o foco ao navegar por teclado.
- **Tamaño mínimo de obxectivo** (2.5.8): botóns e iconas táctiles con polo menos 24×24 px; os controis do carrousel e as miniaturas da galería cúmpleno.
- **Navegación consistente** (3.2.6) e **Acción repetida** (3.3.7), aplicables sobre todo na fase de backend.
- Manteño o resto de 2.1: HTML semántico, contraste AA, `alt` correcto, formularios con `role="alert"`, carrousel accesible, non usar só a cor para comunicar estado.

**Contraste:** como obxectivo compróbase cos pares definidos (texto branco sobre negro, texto negro sobre laranxa `#FF9800`); o gris `#9CA3AF` só para texto decorativo, e se o axe non o pasa, subo o ton.

**Movemento reducido:** todas as animacións (carrousel, transicións, entradas, hover, zoom) redúcense ou desactívanse con `prefers-reduced-motion`. As animacións nunca son necesarias para acceder ao contido.

---

## 9. Privacidade, seguridade e rendemento

### 9.1 Protección de datos (RGPD e LOPDGDD)

Defino como se cumpre a normativa, porque non o tiña desenvolvido:

- **Marco legal:** Regulamento (UE) 2016/679 (RGPD) e Lei Orgánica 3/2018 de Protección de Datos Personais (LOPDGDD).
- **Responsable:** Superautos Carballo. Os datos só se usan para xestionar e responder a consulta/solicitude; non se ceden a terceiros.
- **Lexitimación:** o consentemento explícito da persoa usuaria (checkbox obrigatorio) e o interese lexítimo de responder á solicitude.
- **Consentemento:** en cada formulario, checkbox con texto claro («Acepto a política de privacidade») e **enlace á páxina de política de privacidade**, que describe finalidade, conservación e dereitos.
- **Dereitos:** acceso, rectificación, supresión, oposición, limitación do tratamento e portabilidade, exercibles por correo (`info@superautoscarballo.es`) ou presencialmente.
- **Conservación:** os datos consérvanse só mentres dure a xestión da solicitude e os prazos legais aplicables; despois, elimínanse.
- **Cookies:** nesta fase non se usan cookies propias. Só se cargará servizo de terceiros que poida implicar cookies se o cliente pide o mapa de Google Maps; nese caso actívase o **banner de cookies**. Co mapa de OpenStreetMap non fai falta.
- **Nota de transparencia:** na maqueta os formularios son simulacións e **os datos non abandonan o navegador**; cando se implemente o backend, rexistrarase o tratamento na política de privacidade e no rexistro de actividades de tratamento.

### 9.2 Seguridade básica

HTTPS con certificado TLS e redirección HTTP→HTTPS; cabeceras básicas (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`). Nos formularios simulados non se almacena nin transmite nada. Cando haxa backend: validación en servidor, escape de entradas (anti-XSS), CSRF, honeypot e límite de intentos. Non se expoñen credenciais nin datos persoais no front-end.

### 9.3 Rendemento

- Imaxes en **WebP** con fallback JPEG e `srcset`; `loading="lazy"` fóra do primeiro pliegue e `fetchpriority="high"` no hero; `width`/`height` para evitar CLS.
- Fontes con `preconnect`, só pesos necesarios e `font-display: swap`.
- CSS/JS minificados e JS diferido.

**Obxectivos que se comprobarán con Lighthouse** (non resultados garantidos nunha maqueta): LCP < 2,5 s, INP < 200 ms, CLS < 0,1, e puntuación Lighthouse ≥ 90 en Performance, Accessibility, Best Practices e SEO. O contraste e os Core Web Vitals indícanse como **obxectivos de comprobación** nas probas finais, non como unha promesa da fase de maquetación.

### 9.4 Supostos que cómpre confirmar co cliente

Estes puntos estaban no documento anterior como feitos consumados e en realidade son **supostos** que aínda non me confirmou o cliente:

| Suposto | Como se tratará |
|---|---|
| **Entrega a domicilio** en Galicia | Vía opcional de entrega; texto da home e servizos condicionado á confirmación |
| **Certificación** de cada vehículo | Bloque de confianza da ficha e «Por que elixirnos» |
| **Garantía** (24 meses) | Dato da ficha e servizo de posvenda |
| **Financiamento** | Mención en venda e motivo de consulta do formulario |
| **Vehículo de substitución** en mantemento | Lista de servizos de mantemento |
| **Prazo de recambios** (1–2 semanas) | Páxina de recambios e mensaxe de éxito do formulario |

Se algunha destas condicións non se confirma, axústase o texto correspondente sen cambiar a estrutura.

---

## 10. Contidos e recursos necesarios

| Recurso | Orixe | Estado |
|---|---|---|
| Fotografías dos **8 vehículos** de exemplo | Propias ou banco con licenza; rexistrar a orixe | Algunhas xa dispoñibles no proxecto |
| Logotipo e identidade visual | Cliente | Logo de proba en WebP |
| Textos de servizos e datos técnicos | Cliente / redacción | Pendente de textos reais |
| Datos de contacto, horario e **redes sociais** reais | Cliente | Pendente |
| Política de privacidade e aviso legal | Cliente / modelo adaptado | Hai que redactala |
| Mapa e indicacións de acceso | OpenStreetMap/Google | Por decidir co cliente |
| Vídeo curto ou vista 360° (opcional) | Material propio autorizado | Só se existe |

---

## 11. Relación entre as referencias do brief e as decisións deste documento

Para que se vexa de onde saen as decisións:

| Decisión | Referencia do brief que a inspira |
|---|---|
| **Filtros** do catálogo (marca, prezo, combustible) | AutoScout24 e coches.net: grella con filtros e ordenación |
| **Catálogo en grella** con tarxetas reutilizables | BMW e AutoScout24 |
| **Ficha de vehículo** con datos técnicos e CTA | Mercedes-Benz: ficha completa e coherencia de marca |
| **Deseño limpo, pouco texto, fotos grandes** | Porsche: sensación de exclusividade |
| **Navegación sinxela** con CTA «Reservar cita» | Porsche e BMW: menú limpo con acción clara |
| **Formulario por contexto** e contacto do concesionario | coches.net: contacto entre comprador e vendedor na mesma ficha; concesionarios locais (Pensado Motor, VCAR) |

---

## 12. Por que Bootstrap 5

Mantéño a decisión de Bootstrap 5, xustificada:

- É o que vén no **export do deseño Pencil** e no plan da fase anterior, así que non é unha decisión nova sen pensala.
- Resólveme co compoñente oficial **Carousel** (requisito do plan), a **grella responsive** (390/768/1440), o **menú colapsable** e o **modal** de confirmación, sen escribir JS propio para iso.
- Ten boa accesibilidade base (ARIA nos carrousel e collapse) e documentación ampla, o que me permite **comprobar e explicar** cada uso que fago.
- O resto (estilos, tokens, microinteraccións, animacións) é CSS propio: Bootstrap é a base, non o estilo.

Se no futuro o cliente pedise unha razón para eliminalo, é viable, pero nesta fase aporta máis do que quita.

---

## 13. Criterios de comprobación

### Xerais

- Páxinas sen erros de consola nin imaxes rotas; un único `h1`; `<title>` e `meta description` únicos.
- Menú, logo, footer e breadcrumbs funcionando; enlaces activos marcados; sen 404 internos.
- Adaptación correcta a 390 / 768 / 1440 px; contraste AA; navegación completa por teclado; HTML e CSS validados no W3C.
- **Lighthouse e Core Web Vitals como comprobación final** (obxectivos da sección 9.3).

### Por páxina

| Páxina | Compróbase que… |
|---|---|
| Inicio | O carrousel funciona en escritorio (controis, indicadores, pausa) e móbil (arrastre); as CTAs dirixen aos destinos correctos |
| Catálogo | A grella amosa os 8 vehículos; os filtros combínanse; a ordenación funciona; o estado baleiro amosa «Limpar filtros»; cada tarxeta enlaza á ficha co id correcto |
| Ficha | Enchese cos datos do vehículo (prezo, técnicos, equipamento, dispoñibilidade); a galería fai zoom e é operable por teclado; id inexistente amosa aviso con enlace ao catálogo; as CTAs levan o vehículo **prefilled** |
| Proba | Os 3 pasos validan; o vehículo chega prefilled; amosase o aviso de **solicitude pendente de confirmación**; o envío con éxito amosa a mensaxe correcta |
| Servizos | As tres seccións coa mesma estrutura e CTA funcionando |
| Recambios | Información de baixo pedido e prazo visibles; o formulario valida e amosa os estados |
| Contacto | O selector de motivo é obrigatorio e cambia os campos; o prefill desde a ficha funciona; o mapa, as indicacións e o botón «Como chegar» están e funcionan; os datos do concesionario son coherentes |

---

## 14. Seguimento e entrega

### 14.1 Folla de seguimento

A folla de seguimento actualizouse co traballo desta fase (tempo, ferramentas, incidencias e uso de IA como apoio). O resumo está na sección seguinte e o detalle na folla individual en Google Sheets / `Folla_Seguimento_Fito2.md`.

### 14.2 Resumo do traballo desta fase

| Aspecto | Detalle |
|---|---|
| Traballo realizado | Revisión do breve, estrutura e xerarquía, definición de formularios e motivos, catálogo de 8 vehículos, selección de imaxes optimizadas, accesibilidade e rendemento, revisión tras as observacións |
| Tempo estimado | Aprox. 12 h repartidas entre a semana do 03/08 e o 05/08 |
| Ferramentas | VS Code, Git, Pencil (deseño .pen), GIMP (logos e imaxes), WebP para optimización, Lighthouse para comprobacións |
| Incidencias | Imaxes de orixe libre difíciles de atopar para modelos moi novos (tiven que reutilizar e marcar a orixe); decisión de reducir o catálogo de 15 a 8 por este motivo e por simplificar |
| Uso de IA | Usada como apoio na revisión das observacións, na xeración de ideas para os formularios e na detección de erros de redacción. Todas as decisións funcionais están revisadas e explicadas por min neste documento |

### 14.3 Entrega

- **Documento funcional en PDF:** `Garcia_Torres_Jose_Rafael_Fito2_DocumentoFuncional.pdf`.
- **Repositorio Git:** inicializado en local; URL de GitHub: `https://github.com/<usuario>/superautos-carballo` (actualizar ao subir).
- **Folla de seguimento:** `Folla_Seguimento_Fito2.md` e Google Sheets.
