# Design System — IEEE RAMA UNI

---

## Paleta de colores

### Colores globales

| Nombre | HEX | Uso |
|--------|-----|-----|
| IEEE Blue (primario) | `#00629B` | Header, botones principales, links, títulos |
| Dark Blue | `#003A6F` | Navbar, footer, fondos oscuros |
| Accent | `#00A0B0` | Botones secundarios, hover states, badges |
| Background | `#F5F7FA` | Fondo de secciones alternas |
| Surface | `#FFFFFF` | Cards, contenido principal |
| Text Primary | `#1E293B` | Texto del cuerpo |
| Text Secondary | `#64748B` | Subtítulos, texto auxiliar |
| Dark (hero/footer) | `#0A1628` | Fondos oscuros, hero overlay |
| CTA Accent | `#F59E0B` | Botones de acción destacados (opcional) |
| Success | `#22C55E` | Estados positivos |
| Error | `#EF4444` | Validación de formularios |

### Colores por capítulo

Cada capítulo tiene un color identitario para diferenciarse visualmente:

| Capítulo | Color | HEX | Basado en |
|----------|-------|-----|-----------|
| PES | Amarillo | `#EAB308` | Energía eléctrica |
| ComSoc | Azul cielo | `#0EA5E9` | Comunicaciones |
| RAS | Naranja | `#F97316` | Robótica |
| CAS | Morado | `#8B5CF6` | Circuitos |
| SPS | Verde | `#22C55E` | Señales |
| EMB | Rojo | `#EF4444` | Medicina |
| IAS | Ámbar | `#D97706` | Industria |
| WIE | Magenta | `#EC4899` | Identidad WIE |

Uso: Borde/acento en cards de capítulo, badge en eventos, color de hero en página individual.

---

## Tipografía

| Rol | Fuente | Weight | Tamaño | Fallback |
|-----|--------|--------|--------|----------|
| H1 | Inter | 700 (Bold) | 48px / 3rem | system-ui, sans-serif |
| H2 | Inter | 700 | 36px / 2.25rem | system-ui, sans-serif |
| H3 | Inter | 600 (Semibold) | 28px / 1.75rem | system-ui, sans-serif |
| H4 | Inter | 600 | 22px / 1.375rem | system-ui, sans-serif |
| Body | Inter | 400 (Regular) | 16px / 1rem | system-ui, sans-serif |
| Small | Inter | 400 | 14px / 0.875rem | system-ui, sans-serif |
| Caption | Inter | 500 (Medium) | 12px / 0.75rem | system-ui, sans-serif |
| Button | Inter | 600 | 16px / 1rem | system-ui, sans-serif |

**Alternativa:** Poppins (headings) + Roboto (body) — usado por ieee.org.pe.

Usar una sola familia (Inter) es más limpio y reduce carga de fonts.

---

## Espaciado

| Elemento | Valor |
|----------|-------|
| Padding de sección (vertical) | 80px (desktop) / 48px (mobile) |
| Gap entre cards en grid | 24px |
| Padding interno de cards | 24px |
| Max-width del contenedor | 1280px |
| Margen lateral del contenedor | 16px (mobile) / 24px (tablet) / auto (desktop) |
| Separación entre heading y contenido | 16px |
| Separación entre secciones | 0 (fondos alternos hacen la separación) |

---

## Componentes visuales

### Botones

| Variante | Fondo | Texto | Borde | Hover |
|----------|-------|-------|-------|-------|
| Primary | `#00629B` | `#FFFFFF` | none | `#003A6F` |
| Secondary | `transparent` | `#00629B` | 2px `#00629B` | bg `#00629B/10` |
| CTA | `#F59E0B` | `#FFFFFF` | none | `#D97706` |
| Ghost | `transparent` | `#1E293B` | none | bg `#F5F7FA` |

Todos: `border-radius: 8px`, `padding: 12px 24px`, `font-weight: 600`.

### Cards

```
- Background: white
- Border: 1px solid #E2E8F0
- Border-radius: 12px
- Shadow: 0 1px 3px rgba(0,0,0,0.1)
- Hover shadow: 0 4px 12px rgba(0,0,0,0.15)
- Transition: all 0.2s ease
- Padding: 24px
```

### Badges / Tags

```
- Background: color del capítulo con 10% opacity
- Text: color del capítulo
- Border-radius: 6px
- Padding: 4px 12px
- Font-size: 12px
- Font-weight: 600
- Text-transform: uppercase
```

---

## Iconografía

- **Librería:** Lucide React
- **Estilo:** Stroke (línea), no filled
- **Tamaño estándar:** 20px (en texto), 24px (en cards), 32px (en features)
- **Color:** Hereda del contexto (text color o brand color)

---

## Imágenes

| Tipo | Dimensiones | Formato | Notas |
|------|------------|---------|-------|
| Hero background | 1920x1080 | JPG/WebP | Con overlay oscuro 60% |
| Card de evento | 800x450 (16:9) | JPG/WebP | Thumbnail |
| Card de proyecto | 800x450 (16:9) | JPG/WebP | Thumbnail |
| Foto de directiva | 400x400 (1:1) | JPG/WebP | Circular con border |
| Logo de capítulo | 200x200 | SVG/PNG | Fondo transparente |
| Logo IEEE UNI | Variable | SVG | Para navbar y footer |
| Logo UNI | Variable | SVG/PNG | Para footer |
| Open Graph | 1200x630 | JPG | Para compartir en redes |

---

## Fondos alternos

Para separar secciones visualmente sin bordes:

```
Sección 1 (Hero):      bg #0A1628 (oscuro)
Sección 2 (Stats):     bg #FFFFFF
Sección 3 (About):     bg #F5F7FA
Sección 4 (Chapters):  bg #FFFFFF
Sección 5 (Events):    bg #F5F7FA
Sección 6 (Projects):  bg #FFFFFF
Sección 7 (Membership): bg #F5F7FA
Sección 8 (CTA):       bg #00629B (azul IEEE)
Footer:                bg #0A1628 (oscuro)
```
