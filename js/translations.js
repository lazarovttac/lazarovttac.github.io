/* =============================================================
   translations.js — EN / ES strings for index.html + case study pages
   ============================================================= */
const TRANSLATIONS = {
  en: {
    /* ── Nav ── */
    nav_projects: "Projects",
    nav_education: "Education",
    nav_about: "About",
    nav_cta: "Let's talk",

    /* ── Hero ── */
    hero_title: "Systems Engineer · \nAI & Web Developer",
    hero_subtitle:
      "Building production-grade web products and machine learning systems. Currently at TradeSpark, working on AI-driven algorithmic trading.",
    hero_btn_projects: "View Projects",

    /* ── Hero floating tags ── */
    tag_trading: "🤖 algorithmic trading",
    tag_ai: "🧠 AI / ML",
    tag_uiux: "✨ UI / UX",
    tag_fullstack: "🧩 full-stack",
    tag_e2e: "🚀 end-to-end",

    /* ── Projects section ── */
    section_projects: "Projects",

    proj1_tag: "ML Research · Internship",
    proj1_desc:
      "ML system for equity signal generation — sequential neural network trained on 2M+ rows, from raw market data to walk-forward validated predictions.",
    proj1_internal: "(Internal project)",

    proj2_tag: "Web App · Production",
    proj2_desc:
      "Multi-tenant platform for Agricultural Training Centers. Public sites + centralized admin panel managing registrations, capacitation lifecycle states, and data exports for government agencies.",

    proj3_tag: "Web App · Production",
    proj3_desc:
      "HR portal with candidate registration, CV upload, and admin backoffice for job postings and application management.",

    proj4_tag: "Web Tool · CS",
    proj4_desc:
      "Online editor for designing, testing, and sharing finite automata (DFA/NFA). Built to translate formal computation theory into an interactive tool.",

    proj5_tag: "Game Dev",
    proj5_desc:
      "Mobile games published on Google Play: Donut Tunnel, Neon Hover, Planet Dance. Procedural generation, orbit simulation, gameplay loops.",

    /* ── Education / Work section ── */
    section_education: "Work & Education",

    edu1_title: "Machine Learning Engineering Intern",
    edu1_desc:
      "Designed and implemented a machine learning pipeline for stock return prediction, integrating data preprocessing, feature engineering, and model evaluation. Applied AI and data-driven insights to algorithmic trading strategies.",

    edu2_title: "Systems Engineering",
    edu2_subtitle: "UNICEN | 5th Year",
    edu2_desc:
      "Currently pursuing a 5-year licentiate program equivalent to an MSc. Completed rigorous coursework in linear algebra, calculus, discrete math, data structures, and algorithms.",

    edu3_title: "Teaching Assistant",
    edu3_subtitle: "UNICEN | Faculty of ExactSciences",
    edu3_desc:
      'Teaching "Computer Science I", "Introduction to Information Systems" and "Computer Architecture II". Responsible for guiding practical classes, grading midterms, and explaining foundational concepts.',

    edu4_title: "Online Learning — Web, AI & Math Track",
    edu4_desc:
      "35+ courses spanning frontend development, machine learning, and mathematical foundations. Platzi is where I built my initial engineering intuition before university and where I keep learning whenever curiosity beats the syllabus.",
    edu4_link: "View Profile ↗",

    /* ── About section ── */
    section_about: "About",
    about_prose:
      "I'm a Systems Engineering student at UNICEN, Argentina — currently in my 5th year. I build web products end-to-end and research machine learning applied to financial markets.\n\nI also serve as a teaching assistant for Computer Science and Computer Architecture. I believe understanding fundamentals is what separates engineers from coders — and teaching them is the most effective way to really learn them.\n\nAt TradeSpark I'm building an ML pipeline for portfolio rotation — training a classifier to predict risk-adjusted forward returns using sequential neural networks.",

    /* ── Skills section ── */
    section_skills: "Skills",
    skills_group1: "Used in production",
    skills_group2: "Applied in research / learning",

    /* ── Contact section ── */
    section_contact_title: "Let's talk.",
    contact_text:
      "If you're working on something that sits at the edge of engineering and real-world impact — whether that's a product, a research problem, or something in between — I'd like to hear about it.",

    /* ── Lang toggle (label shows the language you'd switch TO) ── */
    lang_toggle: "ES",

    /* ══════════════════════════════════════════════════════════
       CEApp page
       ══════════════════════════════════════════════════════════ */
    ceapp_back: "← All Projects",
    ceapp_tag_production: "Production",
    ceapp_subtitle:
      "The definitive platform for managing Agricultural Training Centers. Dynamic public sites + centralized control panel for enrollment management, training lifecycle, and data exports for government agencies.",
    ceapp_cta_main: "CEApp Main Site",

    ceapp_stat_institutions: "Institutions",
    ceapp_stat_students: "Registered students",
    ceapp_stat_certificates: "Certificates issued",
    ceapp_stat_trainings: "Trainings created",

    ceapp_label_context: "Context",
    ceapp_what_are_ceas: "What are CEAs?",
    ceapp_context_p1:
      "Agricultural Training Centers (CEAs) are public institutions under the Provincial Directorate of Technical-Vocational Education. They offer initial professional training and job skills programs for youth and adults through learning itineraries: courses, talks, and technical workshops. There are around 30 CEAs in the province of Buenos Aires.",
    ceapp_context_p2:
      "Before CEApp, management was entirely manual — paper, spreadsheets, emails — with no visibility for the public and no clear workflow for administrators.",

    ceapp_hl1_label: "Public sites",
    ceapp_hl1_text:
      "Each CEA has its own site with real-time training listings and online enrollment",
    ceapp_hl2_label: "Admin panel",
    ceapp_hl2_text:
      "Centralized backoffice for managing trainings, users, and data exports",
    ceapp_hl3_label: "Government data",
    ceapp_hl3_text: "Export in formats required by public certifying agencies",

    ceapp_label_public: "Publicly accessible sites",
    ceapp_public_title: "A digital window for every CEA",
    ceapp_public_body:
      "Every institution joining CEApp gets its own dynamic website with up-to-date information on active trainings. Interested individuals create a single account and can enroll in multiple trainings, access virtual classrooms, and receive their certificate of completion upon finishing.",

    ceapp_cap_courses: "Training listings",
    ceapp_cap_course_detail: "Training details",
    ceapp_cap_create_profile: "User profile creation",
    ceapp_cap_user_profile: "User profile",

    ceapp_label_design: "Product design",
    ceapp_lifecycle_title: "Training lifecycle",
    ceapp_lifecycle_body:
      "Trainings go through clearly defined states — from creation to closure and certificate issuance. This state model guides both the end-user experience and the actions available to the administrator.",

    ceapp_state_prox: "Enrollment not yet available",
    ceapp_state_open: "Enrollment available",
    ceapp_state_soon: "Starting soon",
    ceapp_state_going: "In progress",
    ceapp_state_ended: "Finished",

    ceapp_admin_title: "Centralized admin panel",
    ceapp_admin_body:
      "Directors log in to red-cea.web.app to manage their institution. From there they can create, edit, and manage trainings, verify personal data of enrollees, and export information in the formats required by public agencies.",

    ceapp_cap_main_hub: "Main hub",
    ceapp_cap_admin_trainings: "Training management",
    ceapp_cap_admin_users: "User management",
    ceapp_cap_admin_images: "Image management",
    ceapp_cap_create_trainings: "Training creation",
    ceapp_cap_user_profiles: "User profiles",
    ceapp_cap_stats: "Usage statistics",

    ceapp_label_features: "New features",
    ceapp_features_title: "More tools for the CEAs",
    ceapp_features_body:
      "CEApp added new modules that complement the administrative workflow: from teacher management to bulk certificate generation with custom templates and official-format exports for the Directorate of Agricultural Education and the Ministry of Agricultural Development.",

    ceapp_feat1_title: "Forms",
    ceapp_feat1_text:
      "Create custom forms, view responses, and export results. Ideal for surveys, data collection, and internal requests.",
    ceapp_feat2_title: "Certificate templates",
    ceapp_feat2_text:
      "Visual design of reusable templates with dynamic fields. Bulk certificate generation in PNG or PDF from the admin panel.",
    ceapp_feat3_title: "Teachers",
    ceapp_feat3_text:
      "Management of teachers assigned to trainings, with an independent profile per institution.",
    ceapp_feat4_title: "Statistics",
    ceapp_feat4_text:
      "Enrollment and usage metrics per training. Real visibility into each institution's impact.",
    ceapp_feat5_title: "Data exports",
    ceapp_feat5_text:
      "Lists in DEA, BPM, and MDA formats. ID document images (front, back, photo) exportable as ZIP or PDF with one click.",
    ceapp_feat6_title: "Image gallery",
    ceapp_feat6_text:
      "Institutional image library for use in courses and publications. Stored in Firebase Storage.",

    ceapp_label_network: "Institution network",
    ceapp_network_title: "The CEAs already using CEApp",
    ceapp_network_body:
      "Each institution has its own Firebase project, public site, and access to the admin panel. The app detects the active CEA from the route and automatically loads the corresponding configuration.",

    /* ══════════════════════════════════════════════════════════
       My Games page
       ══════════════════════════════════════════════════════════ */
    games_back: "← All Projects",
    games_tag_gamedev: "Game Dev",
    games_title: "Games",
    games_subtitle:
      "Five mobile games published on Google Play and Itch.io — from arcade dodgers to orbit simulators. Each one a different design challenge: procedural generation, physics-based gameplay, and polished game feel.",

    games_label_published_gp: "Published · Google Play",
    games_label_published_itch: "Published · Itch.io",
    games_label_avoidarchived: "First release · Google Play (archived)",
    games_label_tryarchived: "Game jam · Google Play (archived)",

    games_donut_body:
      "My most recent release. Colorful, (bizarrely) entertaining, and dangerously addictive. You're a donut. The tunnel is made of donuts. You need to survive. I donut know how to explain it further — you'll just have to try it.",
    games_play_link_gp: "Available on Google Play Store for free",

    games_neon_body:
      "A fast-paced arcade game where you pilot a speeding spaceship through an endless, procedurally generated asteroid field.",

    games_planet_body:
      'A simulation of orbital mechanics that reveals a beautiful hidden pattern — "The Dance of Venus." Eight Earth years are roughly thirteen Venus years, and the ratio of their angular velocities traces a perfect five-petal flower as they orbit the Sun. Planet Dance lets you explore this and create your own orbital harmonies.',
    games_play_link_itch: "Download for free on Itch.io",

    games_avoid_body:
      "My first commercial release. A game about dodging incoming missiles with a plane. It's no longer available — I didn't know GitHub existed yet, lost the source files, and Google removed it when I couldn't update to the latest SDK. A lesson in version control before I knew what version control was.",
    games_instagram_link: "See more on Instagram",
    games_features_label: "Features",
    games_avoid_feat1: "Two game modes — Classic & Hard",
    games_avoid_feat2: "12 different vehicles",
    games_avoid_feat3: "Powerups with upgrades",
    games_avoid_feat4: "Daily rewards system",

    games_try_body:
      "Built in under 12 hours. No longer available — same story as A-void. But the speed of shipping this one taught me something about constraints being a feature, not a bug.",
    games_try_feat1: "Two game modes — Classic & Crazy",
    games_try_feat2: "Infinite level generation",

    games_label_disclaimer: "Notice",
    games_disclaimer_body:
      "My Google Play developer account was taken down due to low activity — very few players and downloads across my published games. The store listings are no longer accessible, but the games were real, shipped, and playable. Screenshots and details are preserved below.",

    /* ══════════════════════════════════════════════════════════
       Semillero page
       ══════════════════════════════════════════════════════════ */
    sem_back: "← All Projects",
    sem_subtitle:
      "HR portal with candidate registration, CV upload, and admin backoffice for managing job postings and applications. Built entirely for the Semillero Personas team.",
    sem_cta: "Visit the site",

    sem_who_title: "Who is Semillero?",
    sem_context_p1:
      "Semillero is a team of HR professionals that supports companies, entrepreneurs, and independent workers in the challenges of the professional world — talent selection, training, and onboarding of new hires.",
    sem_context_p2:
      "The site replaced a fully manual CV-intake process with a structured digital workflow, both for applicants and for the administrative team.",

    sem_hl1_label: "For people",
    sem_hl1_text:
      "Email registration, personal data and CV upload, and application to available job listings",
    sem_hl2_label: "For organizations",
    sem_hl2_text: "Candidate selection and support in onboarding new talent",
    sem_hl3_text:
      "Admin panel to create, edit, and manage job listings, and review applicants with their data",

    sem_admin_title: "Job listing & application management",
    sem_admin_body:
      "The Semillero team accesses a protected section of the site where they can manage available job listings — create, edit, close them — and browse the list of applicants with all their data and attached CV.",

    sem_status_label: "Semillero Personas — In production",

    /* ══════════════════════════════════════════════════════════
       Automaton Designer page
       ══════════════════════════════════════════════════════════ */
    aut_back: "← All Projects",
    aut_tag_webtool: "Web Tool",
    aut_tag_opensource: "Open Source",
    aut_subtitle:
      "An online editor for designing, testing, and sharing finite automata (DFA / NFA). Built to bridge the gap between formal computation theory and interactive intuition.",
    aut_cta: "Visit the app",

    aut_label_overview: "Overview",
    aut_overview_title: "From theory to interaction",
    aut_overview_p1:
      "Finite automata are a fundamental concept in computer science theory — but textbook diagrams are static and hard to reason about. My Automata makes them alive: drag nodes, draw transitions, and instantly test whether an input string is accepted or rejected.",
    aut_overview_p2:
      "The editor supports both Deterministic Finite Automata (DFA) and Non-Deterministic Finite Automata (NFA), letting you toggle ε-transitions and visualize the full state reachability tree.",

    aut_hl1_label: "Visual canvas",
    aut_hl1_text: "Drag-and-drop node placement with interactive arrow routing",
    aut_hl2_label: "Live simulation",
    aut_hl2_text: "Step-by-step string evaluation with state highlighting",
    aut_hl3_label: "Shareable links",
    aut_hl3_text: "Save and share automata via Firebase-backed URLs",
  },

  es: {
    /* ── Nav ── */
    nav_projects: "Proyectos",
    nav_education: "Educación",
    nav_about: "Sobre mí",
    nav_cta: "Hablemos",

    /* ── Hero ── */
    hero_title: "Ingeniero en Sistemas · \nDesarrollador Web e IA",
    hero_subtitle:
      "Construyo productos web y sistemas de machine learning para producción. Actualmente trabajo en TradeSpark, desarrollando trading algorítmico impulsado por IA.",
    hero_btn_projects: "Ver Proyectos",

    /* ── Hero floating tags ── */
    tag_trading: "🤖 trading algorítmico",
    tag_ai: "🧠 IA / ML",
    tag_uiux: "✨ UI / UX",
    tag_fullstack: "🧩 full-stack",
    tag_e2e: "🚀 end-to-end",

    /* ── Projects section ── */
    section_projects: "Proyectos",

    proj1_tag: "Investigación en ML · Pasantía",
    proj1_desc:
      "Sistema de ML para generación de señales de renta variable — red neuronal secuencial entrenada con más de 2M de filas, desde datos crudos de mercado hasta predicciones validadas con walk-forward.",
    proj1_internal: "(Proyecto interno)",

    proj2_tag: "Aplicación Web · Producción",
    proj2_desc:
      "Plataforma web para Centros de Educación Agrícola. Sitios públicos + panel de administración centralizado para gestión de capacitaciones, inscripciones y exportación de datos para organismos gubernamentales.",

    proj3_tag: "Aplicación Web · Producción",
    proj3_desc:
      "Portal de RRHH con registro de candidatos, carga de CV y backoffice de administración para publicación de empleos y gestión de postulaciones.",

    proj4_tag: "Herramienta Web · CS",
    proj4_desc:
      "Editor online para diseñar, probar y compartir autómatas finitos (AFD/AFN). Construido para trasladar la teoría formal de computación a una herramienta interactiva.",

    proj5_tag: "Desarrollo de Videojuegos",
    proj5_desc:
      "Juegos móviles publicados en Google Play: Donut Tunnel, Neon Hover, Planet Dance. Generación procedural, simulación orbital y mecánicas de gameplay.",

    /* ── Education / Work section ── */
    section_education: "Trabajo & Educación",

    edu1_title: "Pasante de Ingeniería en Machine Learning",
    edu1_desc:
      "Diseñé e implementé un pipeline de machine learning para predicción de retornos bursátiles, integrando preprocesamiento de datos, ingeniería de features y evaluación de modelos. Apliqué IA e insights basados en datos a estrategias de trading algorítmico.",

    edu2_title: "Ingeniería en Sistemas",
    edu2_subtitle: "UNICEN | 5to año",
    edu2_desc:
      "Sólida formación en álgebra lineal, cálculo, matemática discreta, estructuras de datos, algoritmos, arquitectura de computadoras, sistemas operativos, bases de datos y ciencias de la computación.",

    edu3_title: "Ayudante de Cátedra",
    edu3_subtitle: "UNICEN | Facultad de Ciencias Exactas",
    edu3_desc:
      'Dictado de clases prácticas de "Introducción a los Sistemas Informáticos", "Ciencias de la Computación I" y "Arquitectura de Computadoras II". Responsable de brindar clases prácticas, corregir parciales y explicar conceptos fundamentales.',

    edu4_title: "Aprendizaje Online — Web, IA & Matemáticas",
    edu4_desc:
      "Más de 35 cursos en desarrollo frontend, machine learning y fundamentos matemáticos. Platzi es donde construí mi intuición de ingeniería antes de la universidad y donde sigo aprendiendo cuando la curiosidad llama.",
    edu4_link: "Ver Perfil ↗",

    /* ── About section ── */
    section_about: "Sobre mí",
    about_prose:
      "Soy estudiante de Ingeniería en Sistemas en la UNCPBA, Argentina — actualmente en mi 5.° año. Construyo productos web fullstack e investigo machine learning aplicado a mercados financieros.\n\nMe he desempeñado como ayudante de cátedra en Ciencias de la Comptutación, Introducción a los Sistemas Informáticos y Arquitectura de Computadoras. Creo que entender los fundamentos es lo que diferencia a los ingenieros de los simples programadores — y enseñarlos es la forma más efectiva de realmente aprenderlos.\n\nEn TradeSpark estoy desarrollando un pipeline de ML para rotación de portafolios — un clasificador entrenado para predecir retornos futuros ajustados por riesgo usando redes neuronales secuenciales.",

    /* ── Skills section ── */
    section_skills: "Habilidades",
    skills_group1: "Usado en producción",
    skills_group2: "Aplicado en investigación / aprendizaje",

    /* ── Contact section ── */
    section_contact_title: "Hablemos.",
    contact_text:
      "Si estás trabajando en algo que se encuentra en la intersección entre la ingeniería y el impacto real — ya sea un producto, un problema de investigación o algo intermedio — me gustaría escucharte.",

    /* ── Lang toggle (label shows the language you'd switch TO) ── */
    lang_toggle: "EN",

    /* ══════════════════════════════════════════════════════════
       Página CEApp
       ══════════════════════════════════════════════════════════ */
    ceapp_back: "← Todos los proyectos",
    ceapp_tag_production: "Producción",
    ceapp_subtitle:
      "La plataforma definitiva para la administración de Centros de Educación Agraria. Sitios públicos dinámicos + panel de control centralizado para gestión de inscripciones, ciclo de vida de capacitaciones y exportación de datos para organismos gubernamentales.",
    ceapp_cta_main: "Página principal de CEApp",

    ceapp_stat_institutions: "Instituciones",
    ceapp_stat_students: "Estudiantes registrados",
    ceapp_stat_certificates: "Certificados emitidos",
    ceapp_stat_trainings: "Capacitaciones creadas",

    ceapp_label_context: "Contexto",
    ceapp_what_are_ceas: "¿Qué son los CEAs?",
    ceapp_context_p1:
      "Los Centros de Educación Agraria (CEAs) son instituciones públicas dependientes de la Dirección Provincial de Educación Técnico Profesional. Ofrecen formación profesional inicial y capacitación laboral para jóvenes y adultos mediante itinerarios formativos: cursos, charlas y jornadas técnicas. Existen alrededor de 30 CEAs en la provincia de Buenos Aires.",
    ceapp_context_p2:
      "Antes de CEApp, la gestión era completamente manual — papel, hojas de cálculo, emails — sin visibilidad para el público ni flujo claro para los administradores.",

    ceapp_hl1_label: "Sitios públicos",
    ceapp_hl1_text:
      "Cada CEA tiene su propio sitio con capacitaciones en tiempo real e inscripciones online",
    ceapp_hl2_label: "Panel administrativo",
    ceapp_hl2_text:
      "Backoffice centralizado para gestionar capacitaciones, usuarios y exportaciones",
    ceapp_hl3_label: "Datos para el estado",
    ceapp_hl3_text:
      "Exportación en formatos requeridos por organismos públicos certificadores",

    ceapp_label_public: "Sitios de acceso público",
    ceapp_public_title: "Una ventana digital para cada CEA",
    ceapp_public_body:
      "Cada institución incorporada a CEApp obtiene su propio sitio web dinámico con información actualizada de capacitaciones vigentes. Las personas interesadas crean una cuenta única y pueden inscribirse a múltiples capacitaciones, acceder a aulas virtuales y recibir su constancia de participación al finalizarlas.",

    ceapp_cap_courses: "Listado de capacitaciones",
    ceapp_cap_course_detail: "Detalles de una capacitación",
    ceapp_cap_create_profile: "Creación de perfil de usuario",
    ceapp_cap_user_profile: "Perfil de usuario",

    ceapp_label_design: "Diseño de producto",
    ceapp_lifecycle_title: "Ciclo de vida de las capacitaciones",
    ceapp_lifecycle_body:
      "Las capacitaciones atraviesan estados claramente definidos — desde su creación hasta el cierre y emisión de constancias. Este modelo de estados guía tanto la experiencia del usuario final como las acciones disponibles para el administrador.",

    ceapp_state_prox: "Inscripción aún no disponible",
    ceapp_state_open: "Inscripción disponible",
    ceapp_state_soon: "Comenzará a dictarse",
    ceapp_state_going: "Comenzó a dictarse",
    ceapp_state_ended: "Finalizó el dictado",

    ceapp_admin_title: "Panel administrativo centralizado",
    ceapp_admin_body:
      "Los directivos acceden a red-cea.web.app para administrar su institución. Desde allí pueden crear, editar y gestionar capacitaciones, verificar datos personales de inscriptos y exportar la información en los formatos requeridos por los organismos públicos.",

    ceapp_cap_main_hub: "Panel principal",
    ceapp_cap_admin_trainings: "Administración de capacitaciones",
    ceapp_cap_admin_users: "Administración de usuarios",
    ceapp_cap_admin_images: "Administración de imágenes",
    ceapp_cap_create_trainings: "Creación de capacitaciones",
    ceapp_cap_user_profiles: "Perfiles de usuario",
    ceapp_cap_stats: "Estadísticas de uso",

    ceapp_label_features: "Nuevas funcionalidades",
    ceapp_features_title: "Más herramientas para los CEAs",
    ceapp_features_body:
      "CEApp incorporó nuevos módulos que complementan el flujo administrativo: desde la gestión de docentes hasta la generación masiva de certificados con plantillas personalizadas y exportación en formatos oficiales para la Dirección de Educación Agraria y el Ministerio de Desarrollo Agrario.",

    ceapp_feat1_title: "Formularios",
    ceapp_feat1_text:
      "Crear formularios personalizados, visualizar respuestas y exportar resultados. Ideal para encuestas, relevamientos y solicitudes internas.",
    ceapp_feat2_title: "Plantillas de certificados",
    ceapp_feat2_text:
      "Diseño visual de plantillas reutilizables con campos dinámicos. Generación masiva de certificados en PNG o PDF desde el panel administrativo.",
    ceapp_feat3_title: "Docentes",
    ceapp_feat3_text:
      "Gestión de docentes asignados a capacitaciones, con perfil independiente por institución.",
    ceapp_feat4_title: "Estadísticas",
    ceapp_feat4_text:
      "Métricas de inscripciones y uso por capacitación. Visibilidad real del impacto de cada institución.",
    ceapp_feat5_title: "Exportación de datos",
    ceapp_feat5_text:
      "Listados en formatos DEA, BPM y MDA. Imágenes de DNI (frente, reverso, foto carnet) exportables en ZIP o PDF con un clic.",
    ceapp_feat6_title: "Galería de imágenes",
    ceapp_feat6_text:
      "Biblioteca de imágenes institucionales para uso en cursos y publicaciones. Almacenamiento en Firebase Storage.",

    ceapp_label_network: "Red de instituciones",
    ceapp_network_title: "Los CEAs que ya usan CEApp",
    ceapp_network_body:
      "Cada institución tiene su propio proyecto Firebase, su sitio público y acceso al panel administrativo. La app detecta el CEA activo por la ruta y carga la configuración correspondiente de forma automática.",

    /* ══════════════════════════════════════════════════════════
       Página de Juegos
       ══════════════════════════════════════════════════════════ */
    games_back: "← Todos los proyectos",
    games_tag_gamedev: "Desarrollo de Videojuegos",
    games_title: "Juegos",
    games_subtitle:
      "Cinco juegos móviles publicados en Google Play e Itch.io — desde arcades de esquiva hasta simuladores orbitales. Cada uno, un desafío de diseño distinto: generación procedural, mecánicas físicas y experiencia de juego pulida.",

    games_label_published_gp: "Publicado · Google Play",
    games_label_published_itch: "Publicado · Itch.io",
    games_label_avoidarchived: "Primera publicación · Google Play (archivado)",
    games_label_tryarchived: "Game jam · Google Play (archivado)",

    games_donut_body:
      "Mi lanzamiento más reciente. Colorido, (bizarramente) entretenido y peligrosamente adictivo. Sos una dona. El túnel está hecho de donas. Tenés que sobrevivir. No sé cómo explicarlo. Pruébalo.",
    games_play_link_gp: "Disponible en Google Play Store gratis",

    games_neon_body:
      "Un juego de arcade a alta velocidad donde piloteás una nave espacial a través de un campo de asteroides infinito generado de forma procedural.",

    games_planet_body:
      "Una simulación de mecánica orbital que revela un hermoso patrón oculto — «La Danza de Venus». Ocho años terrestres equivalen aproximadamente a trece años venusianos, y la relación de sus velocidades angulares traza una flor de cinco pétalos perfecta alrededor del Sol. Planet Dance te permite explorar esto y crear tus propias armonías orbitales.",
    games_play_link_itch: "Descargá gratis en Itch.io",

    games_avoid_body:
      "Mi primer lanzamiento comercial. Un juego de esquivar misiles con un avión. Ya no está disponible — en ese momento no sabía que existía GitHub, perdí los archivos fuente y Google lo eliminó cuando no pude actualizar al SDK más reciente. Una lección de control de versiones antes de saber qué era el control de versiones.",
    games_instagram_link: "Ver más en Instagram",
    games_features_label: "Características",
    games_avoid_feat1: "Dos modos de juego — Clásico y Difícil",
    games_avoid_feat2: "12 vehículos diferentes",
    games_avoid_feat3: "Potenciadores con mejoras",
    games_avoid_feat4: "Sistema de recompensas diarias",

    games_try_body:
      "Construido en menos de 12 horas. Ya no está disponible — misma historia que A-void. Pero la velocidad de lanzamiento me enseñó algo sobre las restricciones como característica, no como limitación.",
    games_try_feat1: "Dos modos de juego — Clásico y Loco",
    games_try_feat2: "Generación infinita de niveles",

    games_label_disclaimer: "Aviso",
    games_disclaimer_body:
      "Mi cuenta de desarrollador en Google Play fue dada de baja por baja actividad — muy pocos jugadores y descargas en los juegos publicados. Los listados en la tienda ya no están disponibles, pero los juegos fueron reales, publicados y jugables. Las capturas de pantalla y los detalles se conservan a continuación.",

    /* ══════════════════════════════════════════════════════════
       Página Semillero
       ══════════════════════════════════════════════════════════ */
    sem_back: "← Todos los proyectos",
    sem_subtitle:
      "Portal de RRHH con registro de candidatos, carga de CV y backoffice administrativo para la gestión de ofertas laborales y postulaciones. Desarrollado íntegramente para el equipo de Semillero Personas.",
    sem_cta: "Ir al sitio",

    sem_who_title: "¿Quiénes son Semillero?",
    sem_context_p1:
      "Semillero es un equipo de profesionales especializados en RRHH que acompaña a empresas, emprendedores y trabajadores independientes en los desafíos del mundo profesional — selección de personal, capacitación e inserción de nuevos talentos.",
    sem_context_p2:
      "El sitio reemplazó un proceso completamente manual de recepción de CVs por un flujo digital estructurado, tanto para los postulantes como para el equipo administrativo.",

    sem_hl1_label: "Para las personas",
    sem_hl1_text:
      "Registro con correo, carga de datos personales y CV, y postulación a ofertas disponibles",
    sem_hl2_label: "Para las organizaciones",
    sem_hl2_text:
      "Selección de candidatos y acompañamiento en la inserción de nuevos talentos",
    sem_hl3_text:
      "Panel administrativo para crear, editar y gestionar ofertas y ver postulantes con sus datos",

    sem_admin_title: "Gestión de ofertas y postulaciones",
    sem_admin_body:
      "El equipo de Semillero accede a una sección protegida del sitio donde puede administrar las ofertas disponibles — crearlas, editarlas, cerrarlas — y consultar el listado de postulantes con todos sus datos y CV adjunto.",

    sem_status_label: "Semillero Personas — En producción",

    /* ══════════════════════════════════════════════════════════
       Página Diseñador de Autómatas
       ══════════════════════════════════════════════════════════ */
    aut_back: "← Todos los proyectos",
    aut_tag_webtool: "Herramienta Web",
    aut_tag_opensource: "Código Abierto",
    aut_subtitle:
      "Un editor online para diseñar, probar y compartir autómatas finitos (AFD / AFN). Construido para salvar la brecha entre la teoría formal de la computación y la intuición interactiva.",
    aut_cta: "Visitar la app",

    aut_label_overview: "Descripción general",
    aut_overview_title: "De la teoría a la interacción",
    aut_overview_p1:
      "Los autómatas finitos son un concepto fundamental en la teoría de ciencias de la computación — pero los diagramas de los libros son estáticos y difíciles de razonar. My Automata los cobra vida: arrastrá nodos, dibujá transiciones y comprobá al instante si una cadena de entrada es aceptada o rechazada.",
    aut_overview_p2:
      "El editor soporta tanto Autómatas Finitos Deterministas (AFD) como Autómatas Finitos No Deterministas (AFN), permitiéndote activar ε-transiciones y visualizar el árbol completo de alcanzabilidad de estados.",

    aut_hl1_label: "Lienzo visual",
    aut_hl1_text:
      "Colocación de nodos con arrastre y enrutamiento interactivo de flechas",
    aut_hl2_label: "Simulación en vivo",
    aut_hl2_text: "Evaluación de cadenas paso a paso con resaltado de estados",
    aut_hl3_label: "Enlaces compartibles",
    aut_hl3_text:
      "Guardá y compartí autómatas mediante URLs respaldadas por Firebase",
  },
};
