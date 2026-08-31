# Nota de Seguimiento – Prototipo Navegable (Superautos Carballo)

- **Alumno/a:** José Rafael García Torres
- **Proyecto:** Superautos Carballo
- **Tarea:** Prototipo navegable de alta fidelidad (aplicación de la guía visual a los wireframes)
- **Última sesión:** 14/08/2026 · **Próxima sesión:** lunes (17/08/2026)
- **Idioma de trabajo:** español

---

## 1. Qué estamos haciendo

Construir en **Pencil** (`pencil-new.pen`) un **prototipo navegable** del sitio web del concesionario, aplicando la guía visual (paleta, tipografía, espaciado y componentes con estados) sobre los wireframes de `diseño2.pen`. Incluye todas las páginas del sitemap (P01–P07 + 404 + privacidad) en resoluciones 1440 / 768 / 390 y una pantalla de estados de componentes (C07).

La tarea previa (guía visual) está **completada** (ver `Plan_Guia_Visual.md`).

## 2. Estado actual del prototipo (al cierre de la sesión)

**Archivo de trabajo:** `C:\xampp\htdocs\Proyecto\pencil-new.pen` (guardado con contenido completo, ~373 KB).

### 2.1 Componentes reutilizables

| Componente | ID | Descripción |
|---|---|---|
| Nav Desktop | `UEY9S` | 1440×88, negro, logo + 5 enlaces + CTA "RESERVAR CITA" |
| Nav Tablet 768 | `D9FzD` | 80 px de alto, logo + CTA + botón menú |
| Nav Móvil 390 | `EW3uu` | 72 px de alto, logo + botón menú |
| Footer Desktop | `xdejc` | 1440×396, negro, columnas CATÁLOGO/SERVICIOS/CONTACTO |
| Footer Tablet 768 | `Dsk5n` | versión 768 |
| Footer Móvil 390 | `fNBx3` | versión 390 |
| Vehicle Card | `EFgRW` | 410×461; hijos: Image `I7Zv1`, Model `hm0vq`, Price `fJOBj`, Tags `xMsRO`, HP `t0qgp`, Gear `O3bDV` |
| Form Field | `bCsW8` | 588×77; hijos: label `J2zcG`, input `HIhsx`, placeholder `HIhsx.ofMWW` |

> Al instanciar refs con datos por coche se usa `descendants` (NO `overrides`), p. ej. `{"I7Zv1":{fill:{...}},"hm0vq":{content:"..."}}`.

### 2.2 Páginas construidas

| Página | 1440 | 768 | 390 |
|---|---|---|---|
| P01 Inicio | ✅ | ✅ | ✅ |
| P02 Catálogo (8 vehículos) | ✅ | ✅ | ✅ |
| P02.1 Ficha de vehículo | ✅ | — | — |
| P02.1.1 Prueba de conducción | ✅ | — | — |
| P03 Servicios | ✅ | — | — |
| P04 Recambios | ✅ | — | — |
| P05 Contacto | ✅ | ✅ | ✅ |
| P06 404 | ✅ | — | — |
| P07 Privacidad | ✅ | — | — |
| C07 Estados y accesibilidad | ✅ | — | — |

Los 8 vehículos usan los datos reales de `plan.md` §5 y las imágenes `assets/img/<marca>/…@[webp|2x|3x]`.

### 2.3 Tokens aplicados

- `$surface-primary` `#FFFFFF` · `$surface-inverse` `#000000` · `$foreground-primary` `#000000` · `$foreground-muted` `#9CA3AF` · `$foreground-inverse` `#FFFFFF` · `$border-subtle` `#E5E7EB` · `$accent` `#FF9800`
- Secundarios (verificados): `$accent-hover` `#E68A00` · `$error` `#DC2626` · `$success` `#16A34A` · `$surface-secondary` `#F3F4F6`
- Fuentes: `$font-heading` Anton · `$font-body` Inter

## 3. Cómo se guardó el archivo (importante)

Durante la sesión, el MCP de Pencil trabajaba sobre el documento **activo en la app**, y el `pencil-new.pen` del disco seguía en blanco (315 bytes, solo el frame `bi8Au`). El contenido real estaba en el **backup automático** de Pencil en `C:\Users\Usuario.EQUIPO13\.pencil\backup\3e47a76c…` (mismo `fileToken`).

**Acción realizada:** se copió ese backup sobre `C:\xampp\htdocs\Proyecto\pencil-new.pen`, dejando el archivo del proyecto con el contenido completo. Verificado: el backup es el más reciente (14/08 13:20) y el archivo guardado tiene el mismo `fileToken` (`46e3db9c-…`).

## 4. Pendiente para el lunes

1. **Abrir `pencil-new.pen` en Pencil** y confirmar que se ve todo el contenido (si Pencil no lo muestra, abrir el archivo desde `Archivo → Abrir`; el backup es la copia de seguridad).
2. **Enlazar las interacciones** entre páginas (inicio → catálogo → ficha → prueba, etc.) si el objetivo "navegable" lo requiere en Pencil.
3. **Compartir el editable**: botón Compartir en Pencil → copiar **enlace con permisos de visualización** → pegar en la entrega (requisito 9 de la guía visual) y **comprobar en ventana privada**.
4. Opcional: construir versiones 768/390 de ficha, recambios, servicios, 404 y privacidad (hoy solo se hicieron inicio, catálogo y contacto).
5. Actualizar `Plan_Guia_Visual.md` §8.3 con el enlace compartido.

## 5. Notas técnicas aprendidas en la sesión

- El MCP de Pencil solo trabaja con el **archivo activo** de la app; `filePath` se ignora si no coincide con el activo.
- Los **globales de `execute` no persisten** entre llamadas: usar siempre los IDs reales (strings).
- `FindEmptySpace` usa `direction: "bottom"` / `"right"` (no "down").
- El esquema de `.pen` no tiene layout "grid": las cuadrículas se hacen con filas `horizontal`.
- En refs, los overrides de descendientes usan la propiedad `descendants` con rutas como `"HIhsx.ofMWW"`.
- Los problemas de clipping detectados por `bounds` en P01 eran un **artefacto del resolver** (offset +50 px en Y); el layout real es correcto.
- Este modelo no puede leer imágenes: la verificación es estructural (Get/bounds, export HTML, grep de colores).
