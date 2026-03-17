-- ============================================
-- IEEE UNI — Datos iniciales (Seed)
-- Ejecutar DESPUÉS de database-schema.sql
-- ============================================

-- Configuración del sitio
INSERT INTO site_config (key, value) VALUES
  ('email', 'ieee.uni.rama@gmail.com'),
  ('site_name', 'IEEE UNI'),
  ('about_narrative', '["La Rama Estudiantil IEEE de la Universidad Nacional de Ingeniería fue fundada el 13 de abril de 1967, siendo una de las ramas estudiantiles más antiguas de Latinoamérica.","Con 11 capítulos técnicos y más de 100 miembros activos, organizamos eventos, talleres, conferencias y proyectos de investigación que conectan a nuestros estudiantes con la comunidad global de ingeniería.","Hemos sido reconocidos como Rama Ejemplar de la Región 9 y galardonados con el Premio Larry K. Wilson de IEEE."]');

-- Capítulos (11)
INSERT INTO chapters (slug, name, full_name, description, color, year_founded, global_url, icon) VALUES
  ('pes', 'PES', 'Power & Energy Society', 'Capítulo dedicado a la generación, transmisión y distribución de energía eléctrica, promoviendo la innovación en sistemas de potencia.', '#EAB308', 2004, 'https://www.ieee-pes.org/', 'Zap'),
  ('comsoc', 'ComSoc', 'Communications Society', 'Enfocado en telecomunicaciones, redes y sistemas de comunicación, conectando a estudiantes con la industria de las comunicaciones.', '#0EA5E9', 2004, 'https://www.comsoc.org/', 'Radio'),
  ('ras', 'RAS', 'Robotics and Automation Society', 'Capítulo de robótica y automatización, donde los estudiantes diseñan y construyen robots, y exploran la automatización industrial.', '#F97316', NULL, 'https://www.ieee-ras.org/', 'Bot'),
  ('cas', 'CAS', 'Circuits and Systems Society', 'Dedicado al diseño de circuitos electrónicos, sistemas embebidos, procesamiento de señales y diseño de chips.', '#8B5CF6', NULL, 'https://ieee-cas.org/', 'Cpu'),
  ('sps', 'SPS', 'Signal Processing Society', 'Enfocado en procesamiento de señales, visión por computadora, aprendizaje automático y aplicaciones de inteligencia artificial.', '#22C55E', NULL, 'https://signalprocessingsociety.org/', 'Activity'),
  ('emb', 'EMBS', 'Engineering in Medicine and Biology Society', 'Capítulo que une la ingeniería con la medicina, desarrollando tecnologías biomédicas para mejorar la salud.', '#EF4444', NULL, 'https://www.embs.org/', 'HeartPulse'),
  ('ias', 'IAS', 'Industry Applications Society', 'Enfocado en aplicaciones industriales de la ingeniería eléctrica y electrónica, automatización y control de procesos.', '#D97706', NULL, 'https://ias.ieee.org/', 'Factory'),
  ('wie', 'WIE', 'Women in Engineering', 'Grupo de afinidad que promueve la participación y el liderazgo de las mujeres en la ingeniería y la tecnología.', '#EC4899', NULL, 'https://wie.ieee.org/', 'Sparkles'),
  ('cis', 'CIS', 'Computational Intelligence Society', 'Enfocado en inteligencia computacional, redes neuronales, lógica difusa y computación evolutiva.', '#6366F1', NULL, 'https://cis.ieee.org/', 'BrainCircuit'),
  ('cs', 'CS', 'Computer Society', 'La sociedad más grande de IEEE, dedicada a la computación, software, hardware y tecnologías de la información.', '#14B8A6', NULL, 'https://www.computer.org/', 'Monitor'),
  ('aess', 'AESS', 'Aerospace & Electronic Systems Society', 'Sistemas aeroespaciales, radar, navegación, aviónica y satélites para aplicaciones de espacio y defensa.', '#1E3A5F', NULL, 'https://ieee-aess.org/', 'Rocket');

-- Eventos
INSERT INTO events (title, date, chapter_slug, description, image_url, status, location, registration_url) VALUES
  ('CAS Legacy 2025', '2025-12-20', 'cas', 'Conferencia anual del capítulo CAS con ponentes nacionales e internacionales sobre circuitos integrados y sistemas embebidos.', '/images/events/placeholder.jpg', 'past', 'Auditorio FIEE — UNI, Lima', NULL),
  ('Workshop de Inteligencia Artificial', '2026-04-15', 'sps', 'Taller práctico de deep learning y visión por computadora con herramientas de Python y PyTorch.', '/images/events/placeholder.jpg', 'upcoming', 'Laboratorio FIEE — UNI, Lima', 'https://forms.google.com/'),
  ('RoboChallenge UNI 2026', '2026-05-10', 'ras', 'Competencia de robótica abierta a todos los estudiantes de la UNI. Categorías: seguidor de línea y robots autónomos.', '/images/events/placeholder.jpg', 'upcoming', 'Campus UNI, Lima', 'https://forms.google.com/'),
  ('CAS Design Workshop 2026', '2026-06-07', 'cas', 'Taller de diseño de circuitos analógicos y digitales con herramientas EDA. Simulación en LTSpice y diseño de PCBs.', '/images/events/placeholder.jpg', 'upcoming', 'Laboratorio FIEE — UNI, Lima', 'https://forms.google.com/');

-- Proyectos
INSERT INTO projects (title, description, chapter_slug, tags, image_url, repo_url, full_description, impact, status, contact_name, contact_email, support_info) VALUES
  ('Sistema de Asistencia Visual para Invidentes', 'Aplicación de visión por computadora que describe el entorno en tiempo real mediante inteligencia artificial, ayudando a personas con discapacidad visual.', 'sps', '{"Python","OpenCV","OpenAI","TTS"}', '/images/projects/placeholder.jpg', 'https://github.com/ieee-uni', 'Este proyecto desarrolla una aplicación móvil que utiliza la cámara del dispositivo para capturar el entorno y, mediante modelos de visión por computadora e inteligencia artificial, genera descripciones en audio en tiempo real.', 'Mejorar la autonomía y calidad de vida de personas con discapacidad visual en el Perú.', 'active', 'Capítulo SPS — IEEE UNI', 'sps@ieee-uni.org', 'Buscamos sponsors para cubrir costos de API de IA, dispositivos de prueba y producción de prototipos.'),
  ('Robot Seguidor de Línea Autónomo', 'Diseño y construcción de un robot seguidor de línea con sensores infrarrojos y control PID para competencias de robótica.', 'ras', '{"Arduino","Control PID","Electrónica"}', '/images/projects/placeholder.jpg', NULL, 'Proyecto integral que abarca el diseño mecánico, electrónico y de software de un robot autónomo capaz de seguir trayectorias marcadas en el suelo.', 'Formar a estudiantes en robótica aplicada, control automático y trabajo en equipo.', 'active', 'Capítulo RAS — IEEE UNI', 'ras@ieee-uni.org', 'Necesitamos apoyo para la compra de componentes electrónicos, motores de alta velocidad y baterías LiPo.'),
  ('Diseño de Amplificador Operacional en CMOS', 'Proyecto de diseño de un amplificador operacional de dos etapas en tecnología CMOS 180nm usando herramientas EDA.', 'cas', '{"VLSI","Cadence","CMOS","Analog Design"}', '/images/projects/placeholder.jpg', NULL, 'Diseño completo de un amplificador operacional de dos etapas en tecnología CMOS 180nm.', 'Capacitar a estudiantes en diseño de circuitos integrados analógicos.', 'completed', 'Capítulo CAS — IEEE UNI', 'cas@ieee-uni.org', 'Para futuros proyectos de diseño VLSI, buscamos acceso a licencias de software EDA.');

-- Estadísticas
INSERT INTO stats (label, value, prefix, suffix, icon, sort_order) VALUES
  ('Años de historia', 1967, '', '', 'Calendar', 1),
  ('Miembros activos', 100, '+', '', 'Users', 2),
  ('Capítulos técnicos', 11, '', '', 'UserCheck', 3),
  ('Eventos al año', 30, '+', '', 'CalendarDays', 4);

-- Hero slides
INSERT INTO hero_slides (title, description, cta_label, cta_href, sort_order) VALUES
  ('Sé Parte de Algo Más Grande con IEEE UNI', 'Únete a más de 100 estudiantes innovadores y transforma el futuro de la ingeniería desde la Universidad Nacional de Ingeniería.', 'Únete ahora', 'https://www.ieee.org/membership/join/index.html', 1),
  ('11 Capítulos Técnicos para Tu Pasión', 'Robótica, circuitos, inteligencia artificial, biomedicina, energía y más. Encuentra tu camino en la ingeniería.', 'Ver capítulos', '/capitulos', 2),
  ('Desde 1967, Formando Ingenieros', 'Una de las ramas estudiantiles IEEE más antiguas de Latinoamérica. Reconocida como Rama Ejemplar de la Región 9.', 'Nuestra historia', '/nosotros', 3);

-- Navegación
INSERT INTO navigation_items (section, label, href, sort_order, is_external) VALUES
  ('topBar', 'IEEE.org', 'https://www.ieee.org', 1, true),
  ('topBar', 'IEEE Xplore', 'https://ieeexplore.ieee.org', 2, true),
  ('topBar', 'IEEE Standards', 'https://standards.ieee.org', 3, true),
  ('topBar', 'IEEE Peru', 'https://ieee.org.pe', 4, true),
  ('mainNav', 'Inicio', '/', 1, false),
  ('mainNav', 'Nosotros', '/nosotros', 2, false),
  ('mainNav', 'Historia', '/historia', 3, false),
  ('mainNav', 'Capítulos', '/capitulos', 4, false),
  ('mainNav', 'Eventos', '/eventos', 5, false),
  ('mainNav', 'Proyectos', '/proyectos', 6, false),
  ('mainNav', 'Contacto', '/contacto', 7, false);

-- Redes sociales
INSERT INTO social_links (platform, href, icon, sort_order) VALUES
  ('instagram', 'https://www.instagram.com/ieee.uni/', 'Instagram', 1),
  ('linkedin', 'https://www.linkedin.com/company/ieee-uni/', 'Linkedin', 2),
  ('facebook', 'https://www.facebook.com/IEEE.UNI/', 'Facebook', 3);

-- Beneficios de membresía
INSERT INTO membership_benefits (icon, title, description, sort_order) VALUES
  ('BookOpen', 'Acceso a IEEE Xplore', 'Más de 5 millones de documentos técnicos, papers y estándares de la industria.', 1),
  ('Globe', 'Red Global', 'Conecta con más de 400,000 miembros IEEE en 160 países del mundo.', 2),
  ('Award', 'Certificaciones', 'Obtén certificados de participación en eventos, talleres y cursos IEEE.', 3);

-- Junta Directiva
INSERT INTO board_members (name, role, email, image_url, sort_order) VALUES
  ('Por definir', 'Presidente', 'presidente@ieee-uni.org', NULL, 1),
  ('Ariel Amado', 'Vicepresidente', 'vicepresidente@ieee-uni.org', NULL, 2),
  ('Por definir', 'Secretario', 'secretario@ieee-uni.org', NULL, 3),
  ('Por definir', 'Tesorero', 'tesorero@ieee-uni.org', NULL, 4);
