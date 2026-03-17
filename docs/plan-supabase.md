# Plan: Migración a Supabase — IEEE UNI

## Contexto
Migrar todos los datos del sitio (JSON/TS) a Supabase (PostgreSQL). Panel admin con roles: superadmin (acceso total) + admin por capítulo (solo su capítulo). El sitio público lee de la DB.

## Arquitectura

```
Visitante → Sitio público (Next.js) → Supabase (lectura pública)
Admin     → Panel /admin (Next.js)  → Supabase Auth + RLS
```

## Roles

| Rol | Permisos |
|-----|----------|
| superadmin | CRUD total en todas las tablas, gestiona usuarios |
| chapter_admin | CRUD en eventos/proyectos de su capítulo, editar info de su capítulo |
| visitante | Solo lectura (sitio público) |

## Tablas

| Tabla | Registros | Quién edita |
|-------|-----------|-------------|
| chapters | 11 | superadmin + chapter_admin (solo el suyo) |
| events | dinámico | superadmin + chapter_admin (solo los suyos) |
| projects | dinámico | superadmin + chapter_admin (solo los suyos) |
| stats | ~4 | superadmin |
| hero_slides | ~3 | superadmin |
| board_members | ~4-8 | superadmin |
| membership_benefits | ~3-5 | superadmin |
| navigation_items | ~11 | superadmin |
| social_links | ~3 | superadmin |
| timeline_events | ~8 | superadmin |
| presidents | ~20+ | superadmin |
| awards | ~5 | superadmin |
| site_config | key-value | superadmin |
| admin_profiles | ~12 | superadmin |

## Seguridad (RLS)

- Lectura pública en todas las tablas (el sitio público)
- Superadmin: CRUD total
- Chapter admin: CRUD solo en eventos/proyectos de su capítulo
- updated_at se actualiza automáticamente con triggers

## Archivos SQL

- `docs/database-schema.sql` — Tablas, índices, RLS, funciones
- `docs/database-seed.sql` — Datos iniciales (capítulos, eventos, proyectos, etc.)

## Pasos de implementación

### Fase 1: Setup Supabase
1. Crear proyecto en supabase.com
2. Ejecutar `database-schema.sql` en SQL Editor
3. Ejecutar `database-seed.sql` en SQL Editor
4. Guardar URL y anon key

### Fase 2: Integrar en Next.js
1. `npm install @supabase/supabase-js`
2. Crear `src/lib/supabase.ts` (cliente público + servidor)
3. Crear `.env.local` con `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Crear tipos TypeScript generados desde Supabase

### Fase 3: Migrar componentes
1. Reemplazar `import data from "@/data/*.json"` por queries a Supabase
2. Componentes server → fetch directo
3. Componentes client → useEffect + supabase client
4. Eliminar archivos JSON cuando ya no se usen

### Fase 4: Panel Admin
1. Crear `/admin/login` con Supabase Auth
2. Crear layout admin protegido (middleware)
3. Dashboard con stats
4. CRUD para eventos, proyectos, capítulos, etc.
5. Upload de imágenes a Supabase Storage

### Fase 5: Deploy
1. Agregar env vars en Vercel
2. Deploy y verificar
