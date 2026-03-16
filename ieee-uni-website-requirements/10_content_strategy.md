# Estrategia de Contenido

---

## Inventario de contenido necesario

### Para el MVP (Fase 1-2)

| Página | Contenido requerido | Responsable | Estado |
|--------|-------------------|-------------|--------|
| Homepage - Hero | 2-3 fotos grupales/eventos de alta calidad | Directiva | Pendiente |
| Homepage - About | Texto de 2-3 párrafos sobre IEEE UNI | Desarrollador (del doc histórico) | Disponible |
| Homepage - Stats | Números: año fundación, capítulos, miembros, eventos/año | Directiva | Confirmado: 1967, 8, 100 |
| Nosotros - Historia | Texto histórico completo | Disponible (Historia REIEEE-UNI.docx.md) | Disponible |
| Nosotros - Directiva | Foto, nombre, cargo de cada miembro | Directiva | Pendiente |
| Capítulos | Por cada uno: nombre, descripción, logo, líder, actividades | Presidentes de capítulo | Pendiente |
| Eventos | Mínimo 3 eventos: título, fecha, imagen, descripción, capítulo | Directiva | Pendiente |
| Proyectos | Mínimo 2 proyectos: título, descripción, equipo, tecnologías, repo | Capítulos | Pendiente |
| Membresía | Beneficios, pasos para unirse, FAQ | Desarrollador | Redactable |
| Contacto | Email oficial, redes sociales, ubicación FIEE | Directiva | Pendiente |

### Assets gráficos necesarios

| Asset | Formato | Quién lo tiene |
|-------|---------|---------------|
| Logo IEEE UNI (rama) | SVG o PNG alta resolución | Directiva |
| Logo UNI | SVG o PNG | Página de la UNI |
| Logos de las 8 sociedades IEEE | SVG | ieee.org (públicos) |
| Fotos de eventos pasados | JPG alta resolución | Redes sociales / archivo |
| Fotos de directiva actual | JPG 400x400 mínimo | Directiva |
| Foto grupal de la rama | JPG alta resolución | Archivo / evento reciente |
| Cuadro de los 50 años | JPG | Documento histórico |

---

## Roles de contenido

| Rol | Responsabilidad | Quién lo asume |
|-----|----------------|---------------|
| **Administrador web** | Deploy, configuración técnica, actualizaciones de código | Desarrollador / miembro técnico |
| **Editor principal** | Aprobar y publicar contenido | Presidente de la rama |
| **Editores de capítulo** | Enviar contenido de su capítulo (eventos, proyectos) | Presidente de cada capítulo |
| **Fotógrafo** | Documentar eventos con fotos de calidad | Voluntario asignado |

---

## Flujo de actualización de contenido

### MVP (archivos JSON)
```
1. Editor crea/edita contenido
2. Modifica archivo JSON correspondiente en GitHub
3. Crea Pull Request
4. Administrador web revisa y aprueba
5. Merge → deploy automático en Vercel
```

### Futuro (Sanity CMS)
```
1. Editor accede al panel de Sanity
2. Crea/edita evento, noticia o proyecto
3. Publica directamente
4. El sitio se actualiza automáticamente
```

---

## Guía editorial (tono y voz)

### Tono general
- **Profesional pero accesible** — No usar jerga excesiva
- **Activo y directo** — "Únete", "Participa", "Descubre" (no "Se invita a...")
- **En español** — Contenido principal en español. Nombres oficiales IEEE en inglés
- **Inclusivo** — Lenguaje que incluya a todos los géneros

### Estilo de escritura
- Títulos: cortos, directos, con verbo de acción cuando sea posible
- Descripciones: máximo 2-3 oraciones por sección del homepage
- Eventos: siempre incluir fecha, hora, lugar, capítulo organizador
- Números: usar datos concretos ("100 miembros" no "muchos miembros")

### Convenciones de nombres
- "IEEE UNI" o "Rama Estudiantil IEEE UNI" (no "la rama del IEEE")
- Capítulos por sigla: "CAS", "RAS", etc. (primera mención: nombre completo)
- "Universidad Nacional de Ingeniería" (primera mención), luego "UNI"
- "IEEE" siempre en mayúsculas

---

## Contenido recurrente post-lanzamiento

Para mantener el SEO y la relevancia del sitio:

| Tipo de contenido | Frecuencia | Responsable |
|-------------------|-----------|-------------|
| Eventos próximos | Semanal/quincenal | Editores de capítulo |
| Reportes post-evento (fotos + resumen) | Después de cada evento | Editor del capítulo que organizó |
| Noticias / anuncios | Mensual mínimo | Editor principal |
| Actualización de directiva | Anual | Administrador web |
| Actualización de estadísticas | Semestral | Editor principal |
| Nuevos proyectos | Cuando se completen | Editores de capítulo |

---

## Traspaso anual de directiva

Cada año cambia la directiva de la rama. El traspaso debe incluir:

1. Actualizar datos de directiva (fotos, nombres, cargos)
2. Transferir acceso al repositorio de GitHub
3. Transferir acceso al panel de Sanity (cuando se implemente)
4. Transferir acceso a Google Analytics
5. Transferir acceso a Vercel (o agregar como miembro del equipo)
6. Revisar y actualizar contenido obsoleto
7. Capacitar al nuevo administrador web en el flujo de actualización
