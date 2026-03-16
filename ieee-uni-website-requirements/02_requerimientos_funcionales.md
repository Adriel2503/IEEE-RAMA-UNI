# Requerimientos Funcionales

---

## RF-01 Página de inicio (Homepage)

El sistema debe mostrar una página principal que incluya las siguientes secciones en orden:

1. **Hero con carrusel** — Mínimo 2 slides con imagen de fondo, título, subtítulo y CTA
2. **Barra de estadísticas** — Contadores: años de historia, capítulos, miembros, eventos
3. **Sección "¿Qué es IEEE UNI?"** — Breve descripción + foto grupal
4. **Grid de capítulos** — 8 cards con logo, nombre y link a página individual
5. **Eventos próximos** — 3 eventos destacados con fecha, título e imagen
6. **Proyectos destacados** — 2-3 proyectos con imagen, título y capítulo
7. **Sección de membresía** — Cards con tipos de membresía y CTA
8. **Banner CTA** — Fondo azul con invitación a unirse
9. **Footer institucional** — 3 columnas con links, contacto y redes sociales

**Criterio de aceptación:** Todas las secciones visibles sin scroll horizontal en desktop, tablet y mobile.

---

## RF-02 Información institucional (/nosotros)

El sistema debe mostrar:
- Historia de IEEE UNI (texto basado en documento histórico oficial)
- **Timeline visual** con hitos: 1967, 1982, 1984, 2004, premios
- Misión y visión de la rama
- Directiva actual con foto, nombre y cargo de cada miembro
- Reconocimientos obtenidos (Rama Ejemplar R9, Premio Larry K. Wilson, etc.)

**Criterio de aceptación:** Timeline interactivo/visual con mínimo 5 hitos históricos.

---

## RF-03 Capítulos técnicos (/capitulos)

El sistema debe mostrar los **8 capítulos** activos de la rama:

| Capítulo | Nombre completo | Año de creación |
|----------|----------------|-----------------|
| PES | Power & Energy Society | 2004 |
| ComSoc | Communications Society | 2004 |
| RAS | Robotics and Automation Society | — |
| CAS | Circuits and Systems Society | — |
| SPS | Signal Processing Society | — |
| EMB | Engineering in Medicine and Biology Society | — |
| IAS | Industry Applications Society | — |
| WIE | Women in Engineering (grupo de afinidad) | — |

### RF-03.1 Página general de capítulos
Grid con card por capítulo: logo oficial de la sociedad IEEE, nombre, descripción corta, color identitario, link a página individual.

### RF-03.2 Página individual por capítulo (/capitulos/[slug])
Cada capítulo debe tener su página con:
- Logo y nombre completo de la sociedad IEEE
- Descripción y objetivos del capítulo en IEEE UNI
- Directiva del capítulo (presidente, vicepresidente)
- Eventos realizados por el capítulo
- Proyectos del capítulo
- Galería de fotos (opcional)
- Link al sitio global de la sociedad IEEE

**Criterio de aceptación:** 8 páginas individuales accesibles desde el grid y desde la URL directa.

---

## RF-04 Eventos (/eventos)

El sistema debe mostrar eventos organizados por IEEE UNI:

### RF-04.1 Lista de eventos
- Grid/lista con imagen, título, fecha, capítulo organizador, estado (próximo/pasado)
- Filtro por: capítulo, estado (próximo/pasado), año
- Ordenamiento por fecha (más reciente primero)

### RF-04.2 Detalle de evento (opcional para MVP)
- Título, fecha, hora, lugar
- Descripción completa
- Capítulo organizador
- Imagen/banner del evento
- Link de registro (si aplica)

**Criterio de aceptación:** Mínimo 3 eventos visibles. Filtro por capítulo funcional.

---

## RF-05 Proyectos (/proyectos)

El sistema debe mostrar proyectos técnicos desarrollados por miembros:
- Grid con imagen, título, descripción corta, capítulo, tags tecnológicos
- Filtro por capítulo
- Link a repositorio (GitHub) si es open source
- Detalle con descripción completa, equipo, tecnologías usadas

**Criterio de aceptación:** Mínimo 2 proyectos con información completa.

---

## RF-06 Noticias (/noticias)

El sistema debe mostrar anuncios y novedades:
- Lista con título, fecha, imagen, extracto
- Página de detalle con contenido completo
- Categorías: anuncios, logros, convocatorias

**Criterio de aceptación:** Sección funcional con al menos 1 noticia publicada.

---

## RF-07 Contacto (/contacto)

El sistema debe permitir comunicación con IEEE UNI:
- Formulario de contacto: nombre, email, asunto, mensaje
- Información de contacto: email oficial, redes sociales
- Ubicación: FIEE — Universidad Nacional de Ingeniería, Lima
- Links directos a redes sociales (Instagram, LinkedIn, Facebook)

**Criterio de aceptación:** Formulario envía datos (puede ser a email o servicio como Formspree). Redes sociales con links reales.

---

## RF-08 Membresía (/membresia)

El sistema debe mostrar información para unirse a IEEE:
- Beneficios de ser miembro IEEE (acceso a IEEE Xplore, networking, eventos, descuentos)
- Tipos de membresía relevantes: Estudiante pregrado, Estudiante posgrado
- Guía paso a paso para registrarse en ieee.org
- Cómo unirse a la Rama UNI después de ser miembro IEEE
- CTA prominente: link directo a ieee.org/join
- FAQ con preguntas frecuentes sobre membresía

**Criterio de aceptación:** Guía paso a paso con al menos 4 pasos claros. Link funcional a ieee.org/join.

---

## RF-09 Navegación global

- **Top bar:** Links a IEEE.org, IEEE Xplore, IEEE Standards, ieee.org.pe + iconos de redes sociales
- **Navbar principal:** Logo IEEE UNI + items del menú + botón "Únete a IEEE" destacado + búsqueda
- **Navbar mobile:** Hamburger menu con todos los items
- **Botón "Únete"** visible en todo momento (sticky en el header)
- **Footer:** Presente en todas las páginas

**Criterio de aceptación:** Navegación funcional en desktop (>1024px), tablet (768-1024px) y mobile (<768px).
