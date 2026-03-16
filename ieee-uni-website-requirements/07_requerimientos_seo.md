# Requerimientos SEO

---

## Estrategia de posicionamiento

IEEE UNI no compite con ieee.org en autoridad de dominio. La estrategia es **posicionamiento local y de nicho**: ser el primer resultado para búsquedas relacionadas con IEEE + UNI + Perú + estudiantes de ingeniería.

---

## Keywords objetivo

### Primarias (deben aparecer en homepage)
- IEEE UNI
- IEEE Rama UNI
- IEEE Student Branch UNI
- Rama Estudiantil IEEE Universidad Nacional de Ingeniería

### Secundarias (por capítulo)
- IEEE CAS UNI
- IEEE RAS UNI
- IEEE SPS UNI
- IEEE EMB UNI / IEEE EMBS UNI
- IEEE IAS UNI
- IEEE WIE UNI
- IEEE PES UNI
- IEEE ComSoc UNI

### Long-tail (blog/noticias)
- eventos de ingeniería UNI Lima
- comunidad estudiantes ingeniería Perú IEEE
- talleres electrónica UNI
- robótica estudiantes UNI
- circuitos y sistemas UNI
- cómo unirse a IEEE Perú estudiante

---

## SEO On-Page (por página)

### Homepage
- **Title:** IEEE UNI | Rama Estudiantil IEEE — Universidad Nacional de Ingeniería
- **Meta description:** Rama Estudiantil IEEE de la UNI. Desde 1967 formando ingenieros. 8 capítulos técnicos, +100 miembros. Únete a la comunidad más grande de ingeniería.
- **H1:** "Rama Estudiantil IEEE — Universidad Nacional de Ingeniería" (dentro del hero)

### Páginas internas
Cada página debe tener:
- `<title>` único con keyword principal + "IEEE UNI"
- `<meta description>` única de 150-160 caracteres
- Un solo `<h1>` por página
- Jerarquía de headings: H1 → H2 → H3 (sin saltar niveles)
- URLs semánticas en español: `/capitulos/cas/`, `/eventos/`, `/nosotros/`

---

## SEO Técnico

### Meta tags (Next.js Metadata API)
```
- title (único por página)
- description (único por página)
- keywords
- og:title, og:description, og:image, og:url
- twitter:card, twitter:title, twitter:description, twitter:image
- canonical URL
- robots: index, follow
- viewport
- charset: utf-8
- lang: es
```

### Archivos requeridos
- `/robots.txt` — Permitir indexación completa
- `/sitemap.xml` — Generado automáticamente por Next.js
- `/favicon.ico` + app icons (192x192, 512x512)
- `/manifest.json` — Para PWA básico

### Datos estructurados (JSON-LD)
- **Organization** — Para IEEE RAMA UNI (nombre, logo, redes, dirección)
- **Event** — Para cada evento (nombre, fecha, lugar, organizador)
- **BreadcrumbList** — Para navegación en resultados de Google
- **WebSite** — Con SearchAction para búsqueda interna

---

## Estrategia de contenido para SEO

### Contenido recurrente (impulsa tráfico orgánico a largo plazo)
- Reportes post-evento (fotos, resumen, asistentes)
- Entrevistas a miembros destacados
- Anuncios de convocatorias y resultados
- Logros y reconocimientos de la rama

### Linking interno
- Cada evento debe linkear al capítulo organizador
- Cada proyecto debe linkear al capítulo y a eventos relacionados
- El footer debe tener links a todas las secciones principales
- Breadcrumbs en páginas internas

### Linking externo (backlinks naturales)
- Link desde ieee.org.pe hacia el sitio de la rama
- Link desde vtools.ieee.org (registro oficial de la rama)
- Compartir en redes sociales de IEEE UNI
- Solicitar link desde la página de la FIEE-UNI

---

## Métricas SEO a monitorear

| Métrica | Herramienta | Objetivo |
|---------|------------|----------|
| Posición para "IEEE UNI" | Google Search Console | Top 3 |
| Tráfico orgánico mensual | Google Analytics | Crecimiento mes a mes |
| Páginas indexadas | Google Search Console | Todas las rutas indexadas |
| Core Web Vitals | PageSpeed Insights | Todas en verde |
| CTR en resultados | Google Search Console | > 5% promedio |
