# Requerimientos Técnicos

---

## Stack tecnológico

| Capa | Tecnología | Versión | Justificación |
|------|-----------|---------|---------------|
| Framework | Next.js | 15 (App Router) | SSG, SEO nativo, Image optimization, despliega en Vercel |
| Estilos | Tailwind CSS | v4 | Utility-first, responsive, dark mode ready |
| Animaciones | Framer Motion | Última | Scroll reveals, transiciones, contadores animados |
| Iconos | Lucide React | Última | Consistente, ligero, open source |
| Hosting | Vercel | — | Free tier, deploy automático, previews por PR, HTTPS incluido |
| Control de versiones | GitHub | — | Repositorio: ieee_rama_uni |
| Analítica | Google Analytics 4 | — | Métricas de tráfico, eventos, conversiones |
| Formularios | Formspree o Resend | — | Contacto sin backend propio |

---

## Estructura del proyecto

```
ieee-rama-uni/
├── public/
│   ├── images/
│   │   ├── chapters/        → Logos de cada sociedad IEEE
│   │   ├── events/          → Banners de eventos
│   │   ├── projects/        → Imágenes de proyectos
│   │   ├── team/            → Fotos de directiva
│   │   └── general/         → Hero, fotos grupales, IEEE logo, UNI logo
│   ├── favicon.ico
│   └── robots.txt
│
├── src/
│   ├── app/
│   │   ├── layout.tsx       → Layout global (Navbar + Footer)
│   │   ├── page.tsx         → Homepage
│   │   ├── nosotros/
│   │   │   └── page.tsx
│   │   ├── capitulos/
│   │   │   ├── page.tsx     → Grid de capítulos
│   │   │   └── [slug]/
│   │   │       └── page.tsx → Página individual
│   │   ├── eventos/
│   │   │   └── page.tsx
│   │   ├── proyectos/
│   │   │   └── page.tsx
│   │   ├── noticias/
│   │   │   └── page.tsx
│   │   ├── membresia/
│   │   │   └── page.tsx
│   │   └── contacto/
│   │       └── page.tsx
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── TopBar.tsx
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── home/
│   │   │   ├── HeroCarousel.tsx
│   │   │   ├── StatsBar.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── ChaptersGrid.tsx
│   │   │   ├── EventsSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── MembershipSection.tsx
│   │   │   └── CTABanner.tsx
│   │   └── ui/
│   │       ├── ChapterCard.tsx
│   │       ├── EventCard.tsx
│   │       ├── ProjectCard.tsx
│   │       ├── SectionHeading.tsx
│   │       └── Button.tsx
│   │
│   ├── data/
│   │   ├── chapters.json    → Datos de los 8 capítulos
│   │   ├── events.json      → Datos de eventos
│   │   ├── projects.json    → Datos de proyectos
│   │   ├── team.json        → Directiva actual
│   │   ├── stats.json       → Estadísticas para la StatsBar
│   │   └── navigation.json  → Items de menú
│   │
│   └── lib/
│       └── utils.ts         → Funciones auxiliares
│
├── tailwind.config.ts
├── next.config.ts
├── package.json
└── README.md
```

---

## Gestión de contenido

### MVP (Fase 1-2): Archivos JSON/MDX
- Contenido almacenado en `/src/data/` como archivos JSON
- Editable directamente en GitHub por cualquier miembro de la directiva
- Sin necesidad de backend ni base de datos

### Futuro (Fase 4): CMS Headless — Sanity
- Migrar contenido dinámico (eventos, noticias, proyectos) a Sanity
- Panel de administración visual para la directiva
- Integración nativa con Next.js y Vercel
- Free tier suficiente para el volumen de contenido

---

## Optimización de imágenes

- Usar `next/image` con `sizes` y `priority` para imágenes above-the-fold
- Formatos: WebP/AVIF automático (Next.js lo maneja)
- Placeholder: `blur` para imágenes pesadas
- Imágenes de hero: máximo 1920px de ancho
- Logos de capítulos: SVG preferido, PNG como fallback
- Fotos de equipo: 400x400px, optimizadas

---

## Deploy y CI/CD

- **Rama principal:** `main` → deploy automático a producción en Vercel
- **Pull requests:** Preview deployment automático por PR
- **Dominio:** Configurar dominio personalizado en Vercel (cuando se tenga)
- **Variables de entorno:** GA_TRACKING_ID, FORMSPREE_ID en Vercel dashboard
