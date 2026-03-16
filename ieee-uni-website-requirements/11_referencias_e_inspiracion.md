# Referencias e Inspiración

---

## Sitios analizados

### 1. ieee.org (IEEE Global)

**URL:** https://www.ieee.org/

**Patrones adoptados:**
- Hero con carrusel de slides (fondo oscuro + card azul overlay + CTA)
- Sección "Happening Across IEEE" con grid de 3 columnas de cards
- Footer 3 columnas: About IEEE | Quick Links | Follow Us
- CTA "Join IEEE" permanente en el header
- Doble barra de navegación: top bar (links globales) + nav principal
- Hamburger menu (menú colapsado en icono)
- Tipografía serif elegante para títulos de sección

**Estructura del sitemap:**
- /membership, /conferences, /standards, /education, /publications, /about, /communities
- Clusters temáticos que facilitan indexación SEO
- Sitemap.xml bien estructurado por secciones

**SEO:**
- Autoridad de dominio extremadamente alta
- Millones de backlinks académicos
- Keywords informacionales y de marca
- Datos estructurados: Organization, Event, Article

**Paleta de colores:**
- Azul IEEE: `#00629B`
- Verde: `#668D42`
- Naranja: `#E2722E`
- Fondos neutros

---

### 2. ieee.org.pe (IEEE Peru Section)

**URL:** https://ieee.org.pe/

**Patrones adoptados:**
- Top bar azul con links a IEEE.org, Xplore, Standards, Spectrum + iconos redes sociales
- Logo "IEEE Peru Section" en navbar
- Cards de membresía (4 tipos) con iconos y CTA uniformes
- Footer oscuro con 3 columnas: descripción + contacto + eventos
- Datos de contacto completos: dirección, teléfono, email, horario

**Patrones NO adoptados (problemas detectados):**
- Contenido placeholder de template WordPress visible (Stock Market Analysis, HR Recruiting)
- Hero enfocado solo en INTERCON, sin mensaje institucional
- No muestra capítulos en homepage
- Sin estadísticas de impacto
- UX del template genérica

**Stack detectado:**
- WordPress con theme institucional
- Slider Revolution 7 para banners
- Slick Carousel para secciones
- GSAP para animaciones
- Tipografía: Poppins (headings) + Roboto (body)
- Color primario: `#1273EB`

---

### 3. students.ieee.org (IEEE Students)

**URL:** https://students.ieee.org/

**Patrones adoptados:**
- Banner hero con foto grupal de estudiantes + CTA "JOIN IEEE" y "RENEW MEMBERSHIP"
- 3 bloques de valor: Membership Benefits, Volunteering, Join the Community
- Carrusel de acciones rápidas (4 items)
- 5 tarjetas de colaboración
- CTA "JOIN IEEE" prominente en el header
- Footer con políticas + redes (Facebook, LinkedIn, Instagram, Twitter, YouTube)

**Paleta de colores:**
- Verde oscuro: `#668D42`
- Naranja: `#E2722E`
- Azul: `#00629B`
- Neutros claros
- Tipografía: Oswald para números destacados

---

## Decisiones de diseño basadas en las referencias

| Decisión | Inspirado en | Justificación |
|----------|-------------|---------------|
| Doble nav (top bar + navbar) | ieee.org, ieee.org.pe | Separar links IEEE global del nav local |
| Hero con carrusel y overlay | ieee.org | Impacto visual + mensaje claro + CTA |
| CTA "Únete" siempre visible | ieee.org, students.ieee.org | Conversión permanente |
| Grid de capítulos en homepage | Propio (ieee.org.pe NO lo hace) | Diferenciador: mostrar la diversidad de la rama |
| Stats bar con contadores | students.ieee.org | Validación social con números |
| Footer 3 columnas oscuro | ieee.org, ieee.org.pe | Patrón estándar institucional |
| Cards de membresía con iconos | ieee.org.pe | Visual, claro, accionable |
| Next.js + Tailwind (no WordPress) | Decisión técnica | Rendimiento superior, SEO nativo, mantenimiento moderno |
| Contenido real desde día 1 | Lección de ieee.org.pe | Evitar el error de templates con placeholder |
| Color primario `#00629B` | ieee.org (oficial) | Consistencia con marca IEEE global |
| Inter como tipografía | Estándar moderno | Una sola familia = menos carga, más consistencia |

---

## Benchmarks de rendimiento

| Sitio | LCP estimado | Observación |
|-------|-------------|-------------|
| ieee.org | ~3-4s | Sitio grande, muchos scripts |
| ieee.org.pe | ~4-5s | WordPress pesado con plugins |
| students.ieee.org | ~3s | Aceptable |
| **IEEE RAMA UNI (objetivo)** | **< 2.5s** | **Next.js SSG + Vercel = ventaja técnica** |

La ventaja de usar Next.js + Vercel es que podemos superar en rendimiento a los 3 sitios de referencia.
