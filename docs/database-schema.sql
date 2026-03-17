-- ============================================
-- IEEE UNI — Supabase Database Schema
-- Ejecutar en Supabase SQL Editor
-- ============================================

-- ============================================
-- 1. TABLAS PRINCIPALES
-- ============================================

-- Capítulos (11 + futuros)
CREATE TABLE chapters (
  slug VARCHAR(20) PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  full_name VARCHAR(100) NOT NULL,
  description TEXT,
  color VARCHAR(7) DEFAULT '#00629b',
  year_founded INT,
  global_url VARCHAR(255),
  icon VARCHAR(50),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Eventos
CREATE TABLE events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(200) NOT NULL,
  date DATE NOT NULL,
  chapter_slug VARCHAR(20) NOT NULL REFERENCES chapters(slug) ON DELETE CASCADE,
  description TEXT,
  image_url VARCHAR(500),
  status VARCHAR(20) NOT NULL DEFAULT 'upcoming' CHECK (status IN ('upcoming', 'past')),
  location VARCHAR(255),
  registration_url VARCHAR(500),
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Proyectos
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(200) NOT NULL,
  description TEXT,
  chapter_slug VARCHAR(20) NOT NULL REFERENCES chapters(slug) ON DELETE CASCADE,
  tags TEXT[] DEFAULT '{}',
  image_url VARCHAR(500),
  repo_url VARCHAR(500),
  full_description TEXT,
  impact TEXT,
  status VARCHAR(20) DEFAULT 'active' CHECK (status IN ('active', 'completed')),
  contact_name VARCHAR(200),
  contact_email VARCHAR(100),
  support_info TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Estadísticas del home
CREATE TABLE stats (
  id SERIAL PRIMARY KEY,
  label VARCHAR(100) NOT NULL,
  value INT NOT NULL,
  prefix VARCHAR(10) DEFAULT '',
  suffix VARCHAR(10) DEFAULT '',
  icon VARCHAR(50),
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Hero slides del home
CREATE TABLE hero_slides (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  cta_label VARCHAR(100),
  cta_href VARCHAR(255),
  sort_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Junta Directiva
CREATE TABLE board_members (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  role VARCHAR(100) NOT NULL,
  email VARCHAR(100),
  image_url VARCHAR(500),
  sort_order INT DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Beneficios de membresía
CREATE TABLE membership_benefits (
  id SERIAL PRIMARY KEY,
  icon VARCHAR(50),
  title VARCHAR(100) NOT NULL,
  description TEXT,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Navegación
CREATE TABLE navigation_items (
  id SERIAL PRIMARY KEY,
  section VARCHAR(20) NOT NULL CHECK (section IN ('topBar', 'mainNav')),
  label VARCHAR(100) NOT NULL,
  href VARCHAR(255) NOT NULL,
  sort_order INT DEFAULT 0,
  is_external BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Redes sociales
CREATE TABLE social_links (
  id SERIAL PRIMARY KEY,
  platform VARCHAR(50) NOT NULL,
  href VARCHAR(255) NOT NULL,
  icon VARCHAR(50),
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Timeline de historia
CREATE TABLE timeline_events (
  id SERIAL PRIMARY KEY,
  year INT NOT NULL,
  title VARCHAR(200) NOT NULL,
  description TEXT,
  image_url VARCHAR(500),
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Presidentes históricos
CREATE TABLE presidents (
  id SERIAL PRIMARY KEY,
  year VARCHAR(20) NOT NULL,
  name VARCHAR(200) NOT NULL,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Premios/reconocimientos
CREATE TABLE awards (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Configuración general del sitio
CREATE TABLE site_config (
  key VARCHAR(50) PRIMARY KEY,
  value TEXT NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- 2. AUTENTICACIÓN Y ROLES
-- ============================================

-- Perfiles de admin (vinculado a auth.users de Supabase)
CREATE TABLE admin_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role VARCHAR(20) NOT NULL DEFAULT 'chapter_admin' CHECK (role IN ('superadmin', 'chapter_admin')),
  chapter_slug VARCHAR(20) REFERENCES chapters(slug) ON DELETE SET NULL,
  display_name VARCHAR(100),
  created_at TIMESTAMPTZ DEFAULT now()
);

-- ============================================
-- 3. ÍNDICES
-- ============================================

CREATE INDEX idx_events_chapter ON events(chapter_slug);
CREATE INDEX idx_events_status ON events(status);
CREATE INDEX idx_events_date ON events(date DESC);
CREATE INDEX idx_projects_chapter ON projects(chapter_slug);
CREATE INDEX idx_projects_status ON projects(status);
CREATE INDEX idx_admin_profiles_chapter ON admin_profiles(chapter_slug);

-- ============================================
-- 4. ROW LEVEL SECURITY (RLS)
-- ============================================

-- Habilitar RLS en todas las tablas
ALTER TABLE chapters ENABLE ROW LEVEL SECURITY;
ALTER TABLE events ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE stats ENABLE ROW LEVEL SECURITY;
ALTER TABLE hero_slides ENABLE ROW LEVEL SECURITY;
ALTER TABLE board_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE membership_benefits ENABLE ROW LEVEL SECURITY;
ALTER TABLE navigation_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE social_links ENABLE ROW LEVEL SECURITY;
ALTER TABLE timeline_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE presidents ENABLE ROW LEVEL SECURITY;
ALTER TABLE awards ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_config ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_profiles ENABLE ROW LEVEL SECURITY;

-- LECTURA PÚBLICA: cualquiera puede leer (el sitio público)
CREATE POLICY "public_read" ON chapters FOR SELECT USING (true);
CREATE POLICY "public_read" ON events FOR SELECT USING (true);
CREATE POLICY "public_read" ON projects FOR SELECT USING (true);
CREATE POLICY "public_read" ON stats FOR SELECT USING (true);
CREATE POLICY "public_read" ON hero_slides FOR SELECT USING (is_active = true);
CREATE POLICY "public_read" ON board_members FOR SELECT USING (is_active = true);
CREATE POLICY "public_read" ON membership_benefits FOR SELECT USING (true);
CREATE POLICY "public_read" ON navigation_items FOR SELECT USING (true);
CREATE POLICY "public_read" ON social_links FOR SELECT USING (true);
CREATE POLICY "public_read" ON timeline_events FOR SELECT USING (true);
CREATE POLICY "public_read" ON presidents FOR SELECT USING (true);
CREATE POLICY "public_read" ON awards FOR SELECT USING (true);
CREATE POLICY "public_read" ON site_config FOR SELECT USING (true);

-- SUPERADMIN: acceso total a todo
CREATE POLICY "superadmin_all" ON chapters FOR ALL USING (
  EXISTS (SELECT 1 FROM admin_profiles WHERE id = auth.uid() AND role = 'superadmin')
);
CREATE POLICY "superadmin_all" ON events FOR ALL USING (
  EXISTS (SELECT 1 FROM admin_profiles WHERE id = auth.uid() AND role = 'superadmin')
);
CREATE POLICY "superadmin_all" ON projects FOR ALL USING (
  EXISTS (SELECT 1 FROM admin_profiles WHERE id = auth.uid() AND role = 'superadmin')
);
CREATE POLICY "superadmin_all" ON stats FOR ALL USING (
  EXISTS (SELECT 1 FROM admin_profiles WHERE id = auth.uid() AND role = 'superadmin')
);
CREATE POLICY "superadmin_all" ON hero_slides FOR ALL USING (
  EXISTS (SELECT 1 FROM admin_profiles WHERE id = auth.uid() AND role = 'superadmin')
);
CREATE POLICY "superadmin_all" ON board_members FOR ALL USING (
  EXISTS (SELECT 1 FROM admin_profiles WHERE id = auth.uid() AND role = 'superadmin')
);
CREATE POLICY "superadmin_all" ON membership_benefits FOR ALL USING (
  EXISTS (SELECT 1 FROM admin_profiles WHERE id = auth.uid() AND role = 'superadmin')
);
CREATE POLICY "superadmin_all" ON navigation_items FOR ALL USING (
  EXISTS (SELECT 1 FROM admin_profiles WHERE id = auth.uid() AND role = 'superadmin')
);
CREATE POLICY "superadmin_all" ON social_links FOR ALL USING (
  EXISTS (SELECT 1 FROM admin_profiles WHERE id = auth.uid() AND role = 'superadmin')
);
CREATE POLICY "superadmin_all" ON timeline_events FOR ALL USING (
  EXISTS (SELECT 1 FROM admin_profiles WHERE id = auth.uid() AND role = 'superadmin')
);
CREATE POLICY "superadmin_all" ON presidents FOR ALL USING (
  EXISTS (SELECT 1 FROM admin_profiles WHERE id = auth.uid() AND role = 'superadmin')
);
CREATE POLICY "superadmin_all" ON awards FOR ALL USING (
  EXISTS (SELECT 1 FROM admin_profiles WHERE id = auth.uid() AND role = 'superadmin')
);
CREATE POLICY "superadmin_all" ON site_config FOR ALL USING (
  EXISTS (SELECT 1 FROM admin_profiles WHERE id = auth.uid() AND role = 'superadmin')
);
CREATE POLICY "superadmin_all" ON admin_profiles FOR ALL USING (
  EXISTS (SELECT 1 FROM admin_profiles WHERE id = auth.uid() AND role = 'superadmin')
);

-- CHAPTER ADMIN: solo su capítulo (eventos y proyectos)
CREATE POLICY "chapter_admin_events" ON events FOR ALL USING (
  EXISTS (
    SELECT 1 FROM admin_profiles
    WHERE id = auth.uid()
    AND role = 'chapter_admin'
    AND chapter_slug = events.chapter_slug
  )
);

CREATE POLICY "chapter_admin_projects" ON projects FOR ALL USING (
  EXISTS (
    SELECT 1 FROM admin_profiles
    WHERE id = auth.uid()
    AND role = 'chapter_admin'
    AND chapter_slug = projects.chapter_slug
  )
);

CREATE POLICY "chapter_admin_own_chapter" ON chapters FOR UPDATE USING (
  EXISTS (
    SELECT 1 FROM admin_profiles
    WHERE id = auth.uid()
    AND role = 'chapter_admin'
    AND chapter_slug = chapters.slug
  )
);

-- ============================================
-- 5. FUNCIONES ÚTILES
-- ============================================

-- Auto-update de updated_at
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers para updated_at
CREATE TRIGGER tr_chapters_updated BEFORE UPDATE ON chapters FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER tr_events_updated BEFORE UPDATE ON events FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER tr_projects_updated BEFORE UPDATE ON projects FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER tr_stats_updated BEFORE UPDATE ON stats FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER tr_hero_slides_updated BEFORE UPDATE ON hero_slides FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER tr_board_members_updated BEFORE UPDATE ON board_members FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER tr_site_config_updated BEFORE UPDATE ON site_config FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Función para obtener el rol del usuario actual
CREATE OR REPLACE FUNCTION get_my_role()
RETURNS TEXT AS $$
  SELECT role FROM admin_profiles WHERE id = auth.uid();
$$ LANGUAGE sql SECURITY DEFINER;

-- Función para obtener el capítulo del usuario actual
CREATE OR REPLACE FUNCTION get_my_chapter()
RETURNS TEXT AS $$
  SELECT chapter_slug FROM admin_profiles WHERE id = auth.uid();
$$ LANGUAGE sql SECURITY DEFINER;
