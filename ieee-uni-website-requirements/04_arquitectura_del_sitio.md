# Arquitectura del Sitio

---

## Mapa de rutas

```
ieeeuni.org (o dominio asignado)
│
├── /                          → Homepage
│
├── /nosotros                  → Información institucional
│   ├── Historia (sección en la misma página)
│   ├── Misión y visión
│   ├── Directiva actual
│   └── Reconocimientos
│
├── /capitulos                 → Grid de los 8 capítulos
│   ├── /capitulos/pes         → Power & Energy Society
│   ├── /capitulos/comsoc      → Communications Society
│   ├── /capitulos/ras         → Robotics and Automation Society
│   ├── /capitulos/cas         → Circuits and Systems Society
│   ├── /capitulos/sps         → Signal Processing Society
│   ├── /capitulos/emb         → Engineering in Medicine and Biology
│   ├── /capitulos/ias         → Industry Applications Society
│   └── /capitulos/wie         → Women in Engineering
│
├── /eventos                   → Lista de eventos (próximos y pasados)
│
├── /proyectos                 → Portfolio de proyectos técnicos
│
├── /noticias                  → Anuncios, logros, convocatorias
│
├── /membresia                 → Información y guía para unirse a IEEE
│
└── /contacto                  → Formulario + redes + ubicación
```

**Total: 9 páginas principales + 8 sub-páginas de capítulos = 17 rutas**

---

## Estructura del Homepage

```
┌──────────────────────────────────────────────────────┐
│ TOP BAR                                              │
│ ieee.org │ Xplore │ Standards │ ieee.org.pe  [redes]  │
├──────────────────────────────────────────────────────┤
│ NAVBAR                                               │
│ [Logo] Inicio│Nosotros│Capítulos│Eventos│            │
│        Proyectos│Noticias│Membresía│Contacto  [Únete]│
├──────────────────────────────────────────────────────┤
│ HERO CARRUSEL                                        │
│ Slide 1: Mensaje institucional + CTA "Únete"         │
│ Slide 2: Próximo evento destacado                    │
│ Slide 3: Convocatoria de capítulos                   │
├──────────────────────────────────────────────────────┤
│ STATS BAR                                            │
│ [Desde 1967] [8 Capítulos] [+100 Miembros] [Premios]│
├──────────────────────────────────────────────────────┤
│ ¿QUÉ ES IEEE UNI?                                   │
│ Descripción breve + foto grupal                      │
├──────────────────────────────────────────────────────┤
│ NUESTROS CAPÍTULOS                                   │
│ Grid 4x2: cards con logo, nombre, color, link        │
├──────────────────────────────────────────────────────┤
│ PRÓXIMOS EVENTOS                                     │
│ 3 cards: imagen + fecha + título + CTA               │
├──────────────────────────────────────────────────────┤
│ PROYECTOS DESTACADOS                                 │
│ 2-3 cards: imagen + título + capítulo + tags         │
├──────────────────────────────────────────────────────┤
│ MEMBRESÍA                                            │
│ Cards: beneficios + CTA "Únete a IEEE"               │
├──────────────────────────────────────────────────────┤
│ BANNER CTA                                           │
│ "¿Listo para innovar?" + [Únete ahora →]             │
├──────────────────────────────────────────────────────┤
│ FOOTER                                               │
│ IEEE UNI info │ Links rápidos │ Redes sociales        │
│ [Logo IEEE] [Logo UNI]  © 2026 IEEE Rama UNI         │
└──────────────────────────────────────────────────────┘
```

---

## Jerarquía de navegación

### Top bar (presente en todas las páginas)
- IEEE.org
- IEEE Xplore
- IEEE Standards
- ieee.org.pe (IEEE Peru Section)
- Iconos: Instagram, LinkedIn, Facebook

### Navbar principal (sticky)
- Logo IEEE UNI (link a /)
- Inicio
- Nosotros
- Capítulos (con dropdown de los 8)
- Eventos
- Proyectos
- Noticias
- Membresía
- Contacto
- **[Únete a IEEE]** (botón destacado, siempre visible)

### Footer (presente en todas las páginas)
- Columna 1: Logo + descripción breve de IEEE UNI
- Columna 2: Links rápidos (Nosotros, Capítulos, Eventos, Proyectos, Membresía)
- Columna 3: Contacto (email, ubicación FIEE-UNI) + redes sociales
- Barra inferior: © Copyright + links a políticas + logos IEEE y UNI
