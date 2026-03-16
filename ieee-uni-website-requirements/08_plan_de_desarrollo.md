# Plan de Desarrollo del Proyecto

---

## Resumen de fases

| Fase | Nombre | Entregable principal |
|------|--------|---------------------|
| 1 | Fundación | Homepage funcional + layout base desplegado en Vercel |
| 2 | Páginas internas | Todas las rutas con contenido placeholder |
| 3 | Contenido y pulido | Contenido real, SEO, performance optimizada |
| 4 | CMS y mantenimiento | Panel de administración + documentación de traspaso |

---

## Fase 1: Fundación

**Objetivo:** Tener el homepage completo y desplegado.

### Tareas
1. Inicializar proyecto Next.js 15 + Tailwind CSS v4
2. Configurar estructura de carpetas (src/app, components, data)
3. Crear layout global:
   - TopBar (links IEEE global + redes)
   - Navbar (logo + menú + CTA "Únete" + hamburger mobile)
   - Footer (3 columnas + copyright)
4. Construir homepage con todas las secciones:
   - HeroCarousel
   - StatsBar (contadores animados)
   - AboutSection (¿Qué es IEEE UNI?)
   - ChaptersGrid (8 cards)
   - EventsSection (3 cards placeholder)
   - ProjectsSection (2-3 cards placeholder)
   - MembershipSection
   - CTABanner
5. Responsive: mobile + tablet + desktop
6. Crear archivos de datos JSON (chapters, events, projects, team)
7. Deploy en Vercel desde GitHub

### Entregable
- URL de Vercel funcional con homepage completa
- Repositorio en GitHub con README

---

## Fase 2: Páginas internas

**Objetivo:** Todas las rutas navegables con estructura completa.

### Tareas
1. `/nosotros` — Historia con timeline visual, misión, directiva
2. `/capitulos` — Grid de 8 capítulos
3. `/capitulos/[slug]` — 8 páginas individuales con datos del JSON
4. `/eventos` — Lista con filtro por capítulo y estado
5. `/proyectos` — Grid con filtro por capítulo
6. `/noticias` — Lista de noticias/anuncios
7. `/membresia` — Beneficios + guía paso a paso + FAQ
8. `/contacto` — Formulario + mapa/ubicación + redes
9. Página 404 personalizada
10. Breadcrumbs en páginas internas

### Entregable
- 17 rutas funcionales y navegables
- Navegación completa entre todas las páginas

---

## Fase 3: Contenido y pulido

**Objetivo:** Reemplazar placeholders con contenido real y optimizar.

### Tareas
1. Recopilar y colocar contenido real:
   - Fotos de eventos, directiva, grupo
   - Logos oficiales de cada sociedad IEEE
   - Textos de descripción de cada capítulo
   - Datos de eventos reales (pasados y próximos)
   - Datos de proyectos reales
2. SEO:
   - Meta tags únicos por página
   - Open Graph images
   - JSON-LD (Organization, Event, BreadcrumbList)
   - sitemap.xml automático
   - robots.txt
3. Performance:
   - Optimizar imágenes (next/image, WebP)
   - Lighthouse audit >= 90 en las 4 métricas
   - Lazy loading de secciones below-the-fold
4. Accesibilidad:
   - Audit WCAG 2.1 AA
   - Alt texts en todas las imágenes
   - Navegación por teclado
5. Animaciones:
   - Scroll reveal con Framer Motion
   - Contadores animados en StatsBar
   - Transiciones de página suaves

### Entregable
- Sitio con contenido real, listo para presentar
- Lighthouse >= 90 en Performance, SEO, Accessibility, Best Practices

---

## Fase 4: CMS y mantenimiento

**Objetivo:** Permitir que la directiva actualice contenido sin tocar código.

### Tareas
1. Configurar Sanity CMS:
   - Schemas: eventos, noticias, proyectos, miembros directiva
   - Panel de administración con roles
2. Migrar contenido de JSON a Sanity
3. Conectar Next.js con Sanity (fetch de datos)
4. Google Analytics 4: configurar eventos y conversiones
5. Documentación:
   - Guía de uso del CMS para la directiva
   - Guía de traspaso anual (cómo actualizar directiva, eventos, etc.)
   - README técnico del proyecto
6. Dominio personalizado (cuando se tenga)

### Entregable
- CMS funcional con panel de administración
- Documentación completa de mantenimiento
- Guía de traspaso para nueva directiva

---

## Futuro (post-lanzamiento)

Ideas para iteraciones futuras:
- Portal de investigación y publicaciones
- Directorio de miembros activos
- Red de alumni (egresados)
- Sistema de registro a eventos
- Blog con contribuciones de miembros
- Galería multimedia
- Integración con calendario (Google Calendar)
- Soporte multilingüe (español/inglés)
- PWA para acceso offline
