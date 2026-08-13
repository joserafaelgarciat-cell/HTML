# Informe Inicial do Proxecto Web – Superautos Carballo

- **Autor:** José Rafael García Torres
- **Data:** 06/08/2026
- **Proxecto:** Desenvolvemento web corporativo
- **Documento:** `Garcia_Torres_Jose_Rafael_Hito1_Brief.md`

---

## 1. Título provisional do proxecto

Deseño e desenvolvemento do sitio web corporativo de Superautos Carballo.

## 2. Tema e breve descrición da proposta

O proxecto consiste na creación dun sitio web moderno, funcional e orientado á conversión para **Superautos Carballo**, concesionario multimarca de vehículos de alta gama con sede en Carballo. A web presentará un catálogo de vehículos con fichas técnicas, os servizos de venda, mantemento e posvenda, unha páxina de recambios con formulario de solicitude e un formulario de contacto.

O alcance deste primeiro lanzamento é axustado: **cinco páxinas tipo e dúas páxinas fillas** (a ficha de vehículo, reutilizable, e a solicitude de proba de condución), cun catálogo de demostración front-end preparado para conectarse no futuro a unha base de datos.

## 3. Ámbito territorial e proposta de valor

**Ámbito territorial.** Cliente principal da comarca de Bergantiños (Carballo e concellos próximos), con Galicia como mercado secundario natural e o resto do Estado para vehículos moi concretos. A vía principal de entrega é a **recollida presencial** no concesionario; para clientes fóra de Carballo ofrecerase, de xeito opcional, **entrega a domicilio** en Galicia *(suposto por confirmar co cliente)*.

**Proposta de valor.** Superautos Carballo diferénciase doutros concesionarios e das plataformas de venda en liña porque:

- ofrece **trato directo e personalizado**, sen intermediarios, con asesoramento presencial e proba de condución;
- reúne **venda, financiación, mantemento e posvenda** no mesmo establecemento (servizo integral «todo nun só sitio»);
- selecciona e **certifica cada vehículo** antes de poñelo á venda *(suposto)*;
- ofrece **garantía e apoio posvenda** con atención local, algo que as plataformas en liña non poden garantir;
- achega **confianza e proximidade** ao operar nun mercado coñecido.

## 4. Problema, necesidade e público obxectivo

Superautos Carballo precisa dunha presenza dixital profesional que mostre o seu catálogo de vehículos premium, explique os seus servizos e facilite o contacto coa clientela. Hoxe boa parte dos clientes descubren o concesionario polo boca a boca ou de xeito presencial; a web permitirá captar e converter visitantes en clientes.

O sitio está dirixido ás persoas interesadas en vehículos de alta gama, novos e de ocasión, e nos servizos do concesionario:

- persoas interesadas na compra de coches de alta gama, novos e de ocasión;
- clientes da comarca que buscan mantemento e reparación de vehículos premium;
- empresas que precisan vehículos exclusivos ou de representación;
- persoas que buscan pezas de recambio para vehículos de alta gama sen desprazarse ao establecemento.

## 5. Obxectivos

**Obxectivo principal.** Desenvolver un sitio web corporativo completo, funcional e aliñado coa identidade da marca que facilite a conversión de visitantes en clientes.

**Obxectivos secundarios.**

- Amosar un catálogo de demostración con fichas técnicas detalladas e filtros.
- Ofrecer información clara sobre os servizos (venda, mantemento, posvenda).
- Facilitar a solicitude de recambios e o contacto co concesionario.
- Sentar as bases (estrutura, estilos, SEO e accesibilidade) para unha futura conexión a unha base de datos.

## 6. Alcance do proxecto

**Desenvolverase nesta fase:**

- **7 páxinas:** Inicio, Catálogo, Servizos, Recambios e Contacto (5 páxinas tipo) + **Ficha de vehículo** (filla do catálogo) e **Solicitude de proba de condución** (filla da ficha).
- **Plantilla reutilizable de ficha de vehículo:** unha única ficha dinámica que se enche cos datos de cada coche; non se crea unha páxina por vehículo.
- **Catálogo de demostración front-end:** 8 vehículos de exemplo cos datos no propio sitio (obxecto JS), sen servidor.
- **Formularios funcionais** de contacto (con selector de motivo), proba de condución (en pasos) e solicitude de recambios, con validación en cliente e estados de envío simulados.
- **Deseño responsive e accesible** (390 / 768 / 1440 px, WCAG 2.2 AA), SEO básico e imaxes optimizadas.

**Prepárase para unha programación posterior:**

- Conexión do catálogo a unha **base de datos real** e panel de administración.
- **Backend (PHP)** para o envío efectivo dos formularios por correo e a diferenciación das solicitudes segundo o motivo.
- Xestión de citas e probas de condución, presupostador de recambios en liña e área privada de clientes.

## 7. Mapa web e páxinas previstas

```
Superautos Carballo
├── index.html              # Inicio: hero + carrusel, servizos, destacados, CTA
├── catalogo.html           # Catálogo (grella con filtros)
│   └── ficha_vehiculo.html # Ficha do vehículo (plantilla reutilizable)
│       └── proba_conduccion.html   # Solicitude de proba de condución
├── servicios.html          # Venda, mantemento e posvenda
├── recambios.html          # Recambios + formulario de solicitude
└── contacto.html           # Formulario de contacto, datos e mapa
```

| Páxina | Descrición |
|---|---|
| Inicio | Hero con carrusel de destacados, resumo dos servizos, vehículos en oferta e CTA. |
| Catálogo | Grella de vehículos con imaxe, datos básicos, prezo e botón «Ver ficha»; filtros de marca, combustible e prezo. |
| Ficha de vehículo | **Plantilla reutilizable**: enchese dinamicamente co vehículo seleccionado; galería con zoom, datos técnicos e CTAs. |
| Solicitude de proba | Formulario en varios pasos para concertar unha proba de condución (petición pendente de confirmación). |
| Servizos | Venda, mantemento e posvenda coa mesma estrutura (icona, descrición, servizos incluídos e CTA). |
| Recambios | Páxina informativa de recambios baixo pedido (prazo estimado de 1–2 semanas, *suposto*) con formulario de solicitude. |
| Contacto | Formulario con selector de motivo, datos do concesionario, mapa e indicacións. |

## 8. Catálogo de vehículos: demostración front-end

O catálogo amosará **8 vehículos de exemplo** (imaxes, datos e prezos ficticios) codificados no propio sitio, sen necesidade de servidor. A estrutura quedará **preparada para conectarse posteriormente a unha base de datos**: cambiará só a orixe dos datos, sen redeseñar as páxinas.

Cada ficha amosará: marca e modelo, prezo, ano, quilometraxe, combustible, cambio, potencia, garantía, equipamento, dispoñibilidade, galería de imaxes e os botóns «Solicitar información» e «Reservar proba».

## 9. Funcionalidades principais

- Catálogo de demostración con fichas técnicas e **filtros combinables** (marca, combustible, prezo) e ordenación, sen recarga.
- **Ficha de vehículo reutilizable**, cunha única plantilla para todos os coches.
- **Formularios por contexto** (contacto, proba de condución, recambios) con validación en cliente e estados simulados.
- Menú responsive con menú móvil, breadcrumb nas páxinas fillas e enlace «saltar ao contido».
- Carrousel de destacados e galería con zoom na ficha.
- Imaxes de alta calidade, optimizadas e adaptativas; deseño responsive e accesible (WCAG 2.2 AA).

## 10. Contidos e recursos necesarios

- Fotografías profesionais dos vehículos (propias ou con licenza de uso) e imaxes de marca.
- Textos descritivos dos servizos e datos técnicos dos vehículos de exemplo.
- Política de privacidade e aviso legal (RGPD).

## 11. Referencias web

**Fabricantes:** Porsche (deseño limpo e exclusivo, pouco texto), BMW (catálogo con filtros e fichas claras) e Mercedes-Benz (fichas técnicas completas e coherencia de marca).

**Concesionarios e plataformas:** concesionarios locais da zona (Pensado Motor, VCAR, O Largo Racing, Breogán Ocasión e NS Motor) e plataformas comparativas AutoScout24 e coches.net, das que se toman a grella con filtros e o contacto entre comprador e vendedor.

## 12. Riscos, dificultades e dependencias

- **Exceso de alcance:** mitigado cun alcance reducido a 7 páxinas, coas funcionalidades futuras documentadas neste informe.
- **Dereitos das imaxes:** usar imaxes propias ou con licenza libre e rexistrar a orixe de cada unha.
- **Ausencia de servidor real:** os formularios validan e funcionan na maqueta; o envío real do correo require hosting con PHP.
- **RGPD:** consentimento nos formularios e política de privacidade.
- **Dependencias externas:** dominio e aloxamento, e dispoñibilidade do contido multimedia.
- **Supostos por confirmar co cliente:** entrega a domicilio, certificación, garantía, financiación, vehículo de substitución, prazos dos recambios, redes sociais e mapa.
