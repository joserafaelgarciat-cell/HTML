# Informe Inicial do Proxecto Web – Superautos Carballo

- **Autor:** José Rafael García Torres
- **Data:** 05/08/2026
- **Proxecto:** Desenvolvemento web corporativo
- **Documento:** `Garcia_Torres_Jose_Rafael_Hito1_Brief.md` (versión revisada)

---

## 1. Título provisional do proxecto

Deseño e desenvolvemento do sitio web corporativo de Superautos Carballo.

## 2. Tema e breve descrición da proposta

O proxecto consiste na creación dun sitio web moderno, funcional e orientado á conversión para Superautos Carballo, concesionario multimarca de vehículos de alta gama con sede en Carballo. A web presentará un catálogo de vehículos con fichas técnicas, unha páxina de servizos que agrupa venda, mantemento e posvenda, unha páxina informativa de recambios con formulario de solicitude e un formulario de contacto.

O alcance deste primeiro lanzamento é axustado: **cinco páxinas tipo e unha plantilla reutilizable de ficha de vehículo**, cun catálogo de demostración front-end preparado para conectarse no futuro a unha base de datos.

## 3. Ámbito territorial e proposta de valor

**Ámbito territorial.** O obxectivo principal da web é a clientela da comarca de Bergantiños (Carballo e concellos próximos), onde se atopa o concesionario. Como mercado secundario natural, a web estará dirixida a toda Galicia, coa posibilidade de chegar ao resto do Estado para vehículos moi concretos. A vía principal de entrega é a **recollida presencial no concesionario**; para clientes fóra de Carballo ofrecerase, de xeito opcional, **entrega do vehículo a domicilio** en Galicia.

**Proposta de valor.** Superautos Carballo diferencia os seus servizos fronte a outros concesionarios e ás plataformas de venda en liña porque:

- ofrece **trato directo e personalizado**, sen intermediarios, con asesoramento presencial e proba de condución;
- reúne **venda, financiación, mantemento e posvenda no mesmo establecemento** (servizo integral «todo nun só sitio»);
- selecciona e **certifica cada vehículo** antes de poñelo á venda, con revisión mecánica e documental completa;
- ofrece **garantía e apoio posvenda** con atención local, algo que as plataformas en liña non poden garantir;
- achega **confianza e proximidade** ao operar nun mercado coñecido, a comarca de Bergantiños.

## 4. Problema ou necesidade que se pretende resolver

Superautos Carballo precisa dunha presenza dixital profesional que permita mostrar o seu catálogo de vehículos premium, explicar con claridade os seus servizos e facilitar o contacto coa clientela potencial. Hoxe boa parte dos clientes descobre o concesionario polo boca a boca ou de xeito presencial; a web permitirá captar e converter visitantes en clientes.

## 5. Público obxectivo

Este sitio está dirixido exclusivamente a persoas de **alto poder adquisitivo**, que buscan vehículos premium, servizos exclusivos e un trato diferenciado. Non se trata dunha web orientada ao público xeral nin ás persoas de baixos recursos económicos: toda a comunicación, os prezos e os servizos están deseñados para unha clientela selecta.

- Persoas de alto poder adquisitivo interesadas na compra de coches de alta gama, novos e de ocasión.
- Clientes da comarca que buscan servizos especializados de mantemento e reparación de vehículos premium.
- Empresas que precisan vehículos exclusivos ou de representación.
- Persoas que buscan pezas de recambio para vehículos de alta gama sen desprazarse ao establecemento.

## 6. Obxectivos

### 6.1 Obxectivo principal

Desenvolver un sitio web corporativo completo, funcional e aliñado coa identidade da marca que facilite a conversión de visitantes en clientes.

### 6.2 Obxectivos secundarios

- Mostrar un catálogo de vehículos de demostración con fichas técnicas detalladas.
- Ofrecer información clara sobre os servizos (venda, mantemento, posvenda).
- Facilitar a solicitude de recambios mediante un formulario.
- Mellorar a comunicación coa clientela mediante un formulario de contacto.
- Sentar as bases (estrutura, estilos, SEO e accesibilidade) para unha futura conexión a unha base de datos.

## 7. Alcance do proxecto

Para axustar o traballo ao tempo dispoñible, distínguese entre o que se desenvolverá agora e o que quedará preparado para unha programación posterior.

### 7.1 Que se desenvolverá neste proxecto

- **Páxinas tipo:** Inicio, Catálogo, Servizos, Recambios e Contacto (5 páxinas maquetadas).
- **Plantilla reutilizable de ficha de vehículo:** unha única ficha dinámica que se enche cos datos de cada coche; non se crea unha páxina manual por vehículo.
- **Catálogo de demostración front-end:** varios vehículos de exemplo cos seus datos gardados no propio sitio (obxecto JS) e maquetado en HTML, sen servidor.
- **Formularios funcionais** de contacto e de solicitude de recambios, con validación en cliente.
- **Deseño responsive e accesible**, SEO básico e imaxes optimizadas.

### 7.2 Funcionalidades preparadas para unha programación posterior

- **Conexión do catálogo a unha base de datos real** e a un panel de administración para engadir, editar e retirar vehículos.
- **Backend con servidor real** (PHP) para o envío efectivo dos formularios por correo electrónico.
- Xestión de citas e probas de condución en liña.
- Presupostador de recambios en liña con pago.
- Área privada de clientes e xestión de usuarios.

## 8. Páxinas ou seccións previstas

### 8.1 Sitemap

```
Superautos Carballo
├── index.html            # Páxina de inicio (hero + carrousel, resumo de servizos e catálogo)
├── catalogo.html         # Catálogo de vehículos (listado/grella)
├── ficha_vehiculo.html   # Ficha de vehículo (plantilla reutilizable)
├── servicios.html        # Servizos: venda, mantemento e posvenda
├── recambios.html        # Recambios: información + formulario de solicitude
└── contacto.html         # Formulario de contacto
```

### 8.2 Descrición das páxinas

| Páxina | Descrición |
|---|---|
| index.html | Páxina de inicio: hero con carrousel de vehículos destacados, resumo dos servizos, vehículos en oferta e chamada á acción. |
| catalogo.html | Grella de vehículos de exemplo con imaxe, datos básicos, prezo e botón «Ver ficha». Filtros básicos (marca, combustible, prezo). |
| ficha_vehiculo.html | **Plantilla reutilizable**: mostra os datos completos dun vehículo e a súa chamada á acción; enchese dinamicamente segundo o vehículo seleccionado. |
| servicios.html | Agrupa venda, mantemento e posvenda en seccións coa mesma estrutura (icona, descrición, servizos incluídos e CTA). |
| recambios.html | Páxina informativa sobre recambios e as pezas que se poden solicitar, con formulario de solicitude. |
| contacto.html | Formulario de contacto (nome, apelidos, correo, teléfono, mensaxe) e datos do concesionario. |

### 8.3 Ficha de vehículo como plantilla reutilizable

Non se creará unha páxina por cada coche. O catálogo enlazará a **unha única ficha** (`ficha_vehiculo.html`), que se enche en función do vehículo seleccionado a partir dos datos do catálogo. Deste xeito, engadir ou quitar coches non obriga a crear nin borrar páxinas: basta con actualizar os datos.

## 9. Catálogo de vehículos: demostración front-end

O catálogo será unha **demostración front-end**: mostrará **varios vehículos de exemplo** (con imaxes, datos e prezos ficticios) codificados no propio sitio, sen necesidade de servidor. A estrutura quedará **preparada para conectarse posteriormente a unha base de datos**: a única peza que cambiará será a orixe dos datos (dun obxecto JS a unha resposta dunha API ou BD), sen redeseñar as páxinas.

### 9.1 Datos que amosará cada ficha

| Dato | Exemplo |
|---|---|
| Marca e modelo | Porsche 911 Targa 4S |
| Prezo | 179.900 € |
| Ano | 2023 |
| Quilometraxe | 12.500 km |
| Combustible | Gasolina |
| Cambio | Automático PDK |
| Potencia | 450 CV |
| Garantía | 24 meses |
| Equipamento | Asentos deportivos, teito panorámico, sistema BOSE… |
| Dispoñibilidade | En stock / Baixo pedido |
| Imaxes | Galería de fotografías do vehículo |
| Chamada á acción | Botóns «Solicitar información» e «Reservar proba» |

## 10. Servizos: venda, mantemento e posvenda

As antigas páxinas de `servicio_de_ventas.html`, `mantenimiento.html` e `pos_ventas.html` fusiónanse nunha única páxina **Servizos**, con tres seccións:

- **Venda:** asesoramento na elección, financiación, proba de condución e tramitación da compra.
- **Mantemento:** revisións oficiais, diagnóstico e reparación, preparación para a ITV e vehículo de substitución.
- **Posvenda:** garantía, atención ao cliente, soporte técnico e consellos de mantemento.

## 11. Recambios: páxina informativa con formulario

Recambios non será un segundo catálogo. Será unha **páxina informativa** que explica que pezas e marcas se poden solicitar e inclúe un **formulario de solicitude** (referencia da peza, marca e modelo do vehículo, datos de contacto). Unha solicitude de recambios é sempre personalizada e precisa dunha consulta previa, polo que o formulario é a solución máis axustada ao proxecto.

Os recambios serán **baixo pedido**: ao tratarse de vehículos de alta gama, as pezas non están dispoñibles no establecemento, senón que se encargan ao provedor. O prazo de subministración estimado será de **entre unha e dúas semanas** desde a confirmación do pedido, e esta condición comunicarase con claridade na páxina para xestionar as expectativas da clientela.

## 12. Funcionalidades principais

- Catálogo de demostración con fichas técnicas detalladas e filtros básicos.
- Ficha de vehículo reutilizable (plantilla dinámica).
- Formularios de contacto e de solicitude de recambios con validación.
- Carrousel de vehículos destacados na páxina de inicio.
- Imaxes de alta calidade, optimizadas e adaptativas.
- Deseño responsive e accesible (390 / 768 / 1440 px).

## 13. Contido e recursos necesarios

- Fotografías profesionais de vehículos (propias ou con licenza de uso).
- Logotipo corporativo e imaxes de marca.
- Textos descritivos dos servizos.
- Datos técnicos dos vehículos de exemplo.

## 14. Referencias web

### 14.1 Webs de fabricantes

- **Porsche (porsche.com):** destaca polo seu deseño limpo e elegante, a coherencia visual de marca e o seu configurador de vehículos. Gústame como transmite sensación de exclusividade con pouco texto.
- **BMW (bmw.es):** bo modelo de catálogo con filtros por modelo e serie, e fichas de produto claras con datos técnicos, forte xerarquía visual e chamadas á acción evidentes.
- **Mercedes-Benz (mercedes-benz.es):** fichas técnicas moi completas e configurador potente; a identidade corporativa mantense en todas as páxinas.

### 14.2 Concesionarios multimarca, empresas próximas e plataformas comparables

- **Pensado Motor (pensadomotor.es):** concesionario multimarca de Carballo; gústame a presentación dos vehículos de ocasión e como combina taller e venda.
- **VCAR Avis Carballo (vcar.es):** concesionario multimarca próximo; interesante pola súa grella de vehículos e a información de contacto clara.
- **O Largo Racing (automovilesolargoracing.com):** compravenda de vehículos de ocasión en Carballo con taller propio; referencia local de servizo integral.
- **Breogán Ocasión Carballo (grupobreogan.com):** concesionario da mesma zona especializado en ocasión; exemplo da estrutura de sitio dun grupo gallego.
- **NS Motor (nsmotor.es):** centro multimarca en Ordes, moi preto da comarca; útil para comparar como presentan o stock e os servizos.
- **AutoScout24 (autoscout24.es):** plataforma comparativa; excelente exemplo de grella de resultados con filtros (marca, prezo, quilometraxe, combustible) e de tarxetas de vehículo reutilizables.
- **Coches.net (coches.net):** plataforma comparativa; gústame a sinxeleza das fichas e o sistema de contacto entre comprador e vendedor.

## 15. Riscos, dificultades e dependencias

- **Exceso de alcance:** o maior risco é prometer máis do que o tempo permite. Mitigación: alcance reducido a 5 páxinas tipo e unha plantilla de ficha, coas funcionalidades futuras documentadas neste mesmo informe.
- **Actualización do catálogo:** ao ser unha demostración front-end, os vehículos actualizaranse manualmente no código; quedará preparado o mecanismo para facelo desde unha base de datos no futuro.
- **Dereitos das imaxes:** as fotografías deben ser propias ou contar coa licenza correspondente. Mitigación: usar imaxes propias ou bancos con licenza libre e rexistrar a orixe de cada unha.
- **Ausencia dun sistema real de servidor:** os formularios validan en cliente e funcionan na maqueta, pero o envío real do correo require hosting con PHP; deberá contratarse un servizo de aloxamento para a posta en produción.
- **Dispoñibilidade e calidade do contido multimedia:** as fotos de alta calidade son esenciais nunha web de coches premium.
- **Seguridade e protección de datos nos formularios:** cumprir o RGPD, enlazar a política de privacidade e obter o consentimento da persoa usuaria.
- **Dependencia de hosting e dominio:** o dominio e o aloxamento non dependen do equipo de desenvolvemento.
- **Compatibilidade entre navegadores e dispositivos:** garantir o funcionamento correcto en Chrome, Edge, Firefox e Safari, e nas tres resolucións do deseño.
