# Requerimientos de Experiencia de Usuario (UX)

---

## Principios de diseño

1. **Institucional pero cercano** — Profesional como ieee.org, pero con calidez estudiantil
2. **Limpio y espacioso** — Mucho espacio blanco, sin saturar información
3. **Mobile-first** — Diseñado primero para móvil, adaptado a desktop
4. **Orientado a la acción** — Cada sección tiene un CTA claro
5. **Consistente** — Mismos patrones visuales en todas las páginas

---

## User Journey (recorrido del usuario)

El homepage está diseñado para responder preguntas en secuencia:

| Segundo | Pregunta del visitante | Sección que responde |
|---------|----------------------|---------------------|
| 0-3 | "¿Qué es esto?" | Hero: mensaje + imagen |
| 3-8 | "¿Es relevante para mí?" | Stats bar: números de impacto |
| 8-15 | "¿Qué es IEEE UNI?" | Sección descriptiva + foto |
| 15-25 | "¿Qué hacen exactamente?" | Grid de capítulos |
| 25-40 | "¿Tienen actividades?" | Eventos próximos |
| 40-50 | "¿Producen algo real?" | Proyectos destacados |
| 50-60 | "¿Cómo me uno?" | Sección membresía + CTA |

---

## Componentes de interfaz

### Hero
- Carrusel con 2-3 slides
- Fondo: imagen real con overlay oscuro semitransparente
- Texto: título grande (Poppins/Inter bold) + subtítulo + botón CTA
- Flechas de navegación en los laterales
- Indicadores de slide en la parte inferior
- Altura: 70-80vh en desktop, 50-60vh en mobile

### Stats Bar
- Fila horizontal con 4 contadores
- Animación: números que incrementan al entrar en viewport
- Fondo: blanco o gris muy claro
- Iconos opcionales acompañando cada stat

### Cards de capítulos
- Grid: 4 columnas en desktop, 2 en tablet, 1 en mobile
- Cada card: logo de la sociedad IEEE + nombre + color identitario
- Hover: elevación (shadow) + reveal de descripción corta
- Click: navega a página individual del capítulo

### Cards de eventos
- Grid: 3 columnas en desktop, 1 en mobile
- Cada card: imagen/banner + badge de fecha + título + capítulo organizador
- CTA: "Ver más" o "Registrarse"

### Cards de proyectos
- Similar a eventos pero con tags de tecnologías usadas
- Link a repositorio si es open source

### Sección de membresía
- 2-3 cards con tipo de membresía, beneficios clave, y CTA
- Alternativa: layout tipo comparación con checkmarks

### Banner CTA
- Fondo azul IEEE con patrón sutil o imagen
- Título blanco grande + botón contrastante
- Usado antes del footer como cierre

### Footer
- Fondo oscuro (#0A1628)
- 3 columnas + barra inferior
- Iconos de redes sociales con hover
- Logos de IEEE y UNI

---

## Patrones de interacción

- **Scroll reveal:** Secciones aparecen con fade-in al hacer scroll (Framer Motion)
- **Hover en cards:** Elevación suave + cambio de sombra
- **Navbar sticky:** Se fija al top al hacer scroll hacia abajo
- **Back to top:** Botón flotante que aparece al scrollear
- **Loading states:** Skeleton loaders para contenido dinámico

---

## Estilo visual

- **Apariencia general:** Moderna, profesional, tecnológica, minimalista
- **Fotografía:** Fotos reales de miembros y eventos (NO stock photos genéricas)
- **Iconografía:** Lucide React (línea, consistente)
- **Esquinas:** Border-radius 8-12px en cards y botones
- **Sombras:** Suaves, multi-capa para profundidad
- **Espaciado entre secciones:** 80-120px vertical

---

## Inspiraciones de diseño

| Referencia | Qué tomar |
|-----------|-----------|
| ieee.org | Hero con carrusel + card overlay, estructura "Happening Across IEEE", footer 3 columnas |
| ieee.org.pe | Top bar con links IEEE global, cards de membresía con iconos, footer con contacto completo |
| students.ieee.org | CTA "Join IEEE" permanente, bloques de valor en 3 columnas, paleta azul/verde/naranja |
