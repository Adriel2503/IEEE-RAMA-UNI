# Requerimientos No Funcionales

---

## RNF-01 Rendimiento

| Métrica | Objetivo |
|---------|----------|
| Tiempo de carga inicial (LCP) | < 2.5 segundos |
| First Input Delay (FID) | < 100ms |
| Cumulative Layout Shift (CLS) | < 0.1 |
| Lighthouse Performance | >= 90 |
| Lighthouse SEO | >= 90 |
| Lighthouse Accessibility | >= 90 |
| Lighthouse Best Practices | >= 90 |

Estrategia: Usar `next/image` para optimización automática de imágenes, lazy loading, y generación estática (SSG) para páginas de contenido.

---

## RNF-02 Responsividad

El sitio debe funcionar correctamente en:

| Dispositivo | Breakpoint | Requisito |
|-------------|-----------|-----------|
| Mobile | < 768px | Navegación hamburger, layout single column |
| Tablet | 768px - 1024px | Grid adaptativo 2 columnas |
| Desktop | > 1024px | Layout completo, grid hasta 3-4 columnas |

Estrategia: Mobile-first con Tailwind CSS responsive utilities.

---

## RNF-03 Seguridad

- HTTPS obligatorio (provisto automáticamente por Vercel)
- Headers de seguridad: X-Content-Type-Options, X-Frame-Options, CSP básico
- Formulario de contacto con protección anti-spam (honeypot o reCAPTCHA)
- No almacenar datos sensibles en el frontend
- Variables de entorno para API keys (nunca en código)

---

## RNF-04 Accesibilidad

- Cumplir con **WCAG 2.1 nivel AA**
- Contraste mínimo de texto: 4.5:1 (normal), 3:1 (grande)
- Todas las imágenes con atributo `alt` descriptivo
- Navegación por teclado funcional
- Roles ARIA donde corresponda
- Skip-to-content link
- Textos legibles (mínimo 16px body)

---

## RNF-05 Compatibilidad de navegadores

| Navegador | Versión mínima |
|-----------|---------------|
| Chrome | Últimas 2 versiones |
| Firefox | Últimas 2 versiones |
| Safari | Últimas 2 versiones |
| Edge | Últimas 2 versiones |
| Mobile Safari (iOS) | iOS 15+ |
| Chrome Mobile (Android) | Últimas 2 versiones |

---

## RNF-06 Mantenibilidad

- El contenido (eventos, noticias, proyectos) debe poder actualizarse **sin modificar código**
- MVP: Contenido en archivos JSON/MDX editables por la directiva
- Futuro: Migración a CMS headless (Sanity) con panel de administración
- Código documentado con README en el repositorio
- Guía de traspaso para cambio anual de directiva

---

## RNF-07 Escalabilidad

El sitio debe permitir agregar futuras secciones sin rediseño:
- Portal de investigación y publicaciones
- Directorio de miembros / alumni
- Blog con contribuciones de miembros
- Integración con calendario de eventos
- Sistema de registro a eventos
- Galería multimedia

---

## RNF-08 Disponibilidad

- Uptime objetivo: 99.9% (provisto por Vercel)
- Deploy automático desde rama `main` de GitHub
- Previews automáticos por pull request (Vercel)
- Rollback inmediato a versión anterior si hay problemas

---

## RNF-09 Internacionalización

- Contenido principal en **español**
- Preparar estructura para futuro soporte en inglés (i18n)
- URLs en español para SEO local: `/capitulos/`, `/eventos/`, `/nosotros/`
