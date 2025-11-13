document.getElementById('year').textContent = new Date().getFullYear();

  // Language toggle (ES default → EN when pressed)
  //  const toggle = document.getElementById('toggleLang');
  // let lang = 'es';
  // toggle.addEventListener('click', () => {
  //   if(lang === 'es') {
  //     lang = 'en';
  //     toggle.textContent = 'ES';
  //     document.getElementById('heroPhrase').innerHTML = "Peace Education promotes <strong>human development</strong> and <strong>well\u2011being</strong>, accompanying people in the development of skills to understand each other, dialogue, and build shared well\u2011being.";
  //     document.getElementById('ctaBtn').textContent = 'Explore my work';
  //     document.getElementById('aboutTextEs').innerHTML = "I\u2019m <strong>Milagros Ros\u00f3n</strong>, a Peace Education Specialist with a Master\u2019s degree from the United Nations\u2011mandated University for Peace (UPEACE) and postgraduate studies in Human Leadership and Emotional Education. I design and facilitate learning experiences that nurture empathy, resilience, and ethical action across Argentina, Chile, Costa Rica, and Switzerland.";
  //   } else {
  //     lang = 'es';
  //     toggle.textContent = 'EN';
  //     document.getElementById('heroPhrase').innerHTML = "La Educaci\u00f3n para la Paz promueve el <strong>desarrollo pleno</strong> y el <strong>bienestar integral</strong>, acompa\u00f1ando a las personas en el desarrollo de habilidades para comprenderse, dialogar y construir bienestar com\u00fan.";
  //     document.getElementById('ctaBtn').textContent = 'Explorar mi trabajo';
  //     document.getElementById('aboutTextEs').innerHTML = "Soy <strong>Milagros Ros\u00f3n</strong>, especialista en <strong>Educaci\u00f3n para la Paz</strong>, con una Maestr\u00eda de la <strong>Universidad para la Paz de Naciones Unidas (UPEACE)</strong> y estudios de posgrado en <strong>Liderazgo Humano y Educaci\u00f3n Emocional</strong>. Creo y acompa\u00f1o experiencias de aprendizaje que promueven la empat\u00eda, la resiliencia y la acci\u00f3n \u00e9tica. He trabajado con organizaciones internacionales, escuelas y comunidades en <strong>Argentina, Chile, Costa Rica y Suiza</strong>.<br><br>Mi trabajo se centra exclusivamente en la Educaci\u00f3n para la Paz, desde la cual promuevo herramientas para construir una <strong>cultura de paz sostenible</strong>.";
  //   }
  // });
// const toggle = document.getElementById("toggleLang");
// let lang = "es";

// toggle.addEventListener("click", () => {
//   lang = lang === "es" ? "en" : "es";
//   toggle.textContent = lang === "es" ? "Eng" : "Esp";

//   for (const id in translations[lang]) {
//     const element = document.getElementById(id);
//     if (element) element.innerHTML = translations[lang][id];
//   }
// });
// Guardar placeholders originales para restaurarlos al volver a ES
document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
  el.setAttribute("data-placeholder-original", el.placeholder);
});

const toggle = document.getElementById("toggleLang");
let lang = "es";

// Guardar placeholders originales
document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
  el.setAttribute("data-placeholder-original", el.placeholder);
});

toggle.addEventListener("click", () => {
  if (lang === "es") {
    // Cambiar a inglés
    lang = "en";
    toggle.textContent = "ESP";

    // Traducción de textos normales por ID
    for (const id in translations.en) {
      const element = document.getElementById(id);
      if (element) {
        element.innerHTML = translations.en[id];
      }
    }

    // Traducción de placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (translations.en[key]) {
        el.placeholder = translations.en[key];
      }
    });

  } else {
    // Volver al español recargando el HTML original
    lang = "es";
    toggle.textContent = "Eng";

    // Restaurar textos (la recarga limpia todo)
    window.location.reload();
  }
});



  const translations = {
  // es: {
  //   navServices: "Servicios",
  //   navAbout: "Sobre mí",
  //   navEdu: "EduPaz 🇦🇷",
  //   navPortfolio: "Portfolio",
  //   navContact: "Contacto",
  //   navContactBtn: "Contacto",

  //   // HERO
  //   heroTag: "Consultora & Facilitadora",
  //   nameTitle: "Especialista en Educación para la Paz",
  //   heroPhrase: `La Educación para la Paz promueve el <strong>desarrollo pleno</strong> y el <strong>bienestar integral</strong>, acompañando a las personas en el desarrollo de habilidades para comprenderse, dialogar y construir bienestar común.`,

  //   // SERVICES
  //   servicesLabel: "Servicios",
  //   servicesTitle: "Construyendo bienestar a través de la educación",

  //   service1Title: "Talleres y formaciones",
  //   service1Text: "Educación para la Paz | Nonviolent Learning | Resilience for a Culture of Peace | Human Leadership | Comunicación No Violenta y SEL (para docentes, jóvenes y equipos).",

  //   service2Title: "Consultoría curricular",
  //   service2Text: "Integración de paz, ética y ciudadanía global en planes de estudio (escuelas y universidades).",

  //   service3Title: "Diseño de proyectos",
  //   service3Text: "Creación y monitoreo de iniciativas educativas con enfoque de equidad e inclusión.",

  //   // ABOUT
  //   aboutLabel: "Sobre mí",
  //   aboutTitle: "Herramientas para construir una cultura de paz sostenible",
  //   aboutText: `Soy <strong>Milagros Rosón</strong>, especialista en <strong>Educación para la Paz</strong>, con una Maestría de la <strong>Universidad para la Paz de Naciones Unidas (UPEACE)</strong> y estudios de posgrado en <strong>Liderazgo Humano y Educación Emocional</strong>. Creo y acompaño experiencias de aprendizaje que promueven la empatía, la resiliencia y la acción ética. He trabajado con organizaciones internacionales, escuelas y comunidades en <strong>Argentina, Chile, Costa Rica y Suiza</strong>.`,
  //   aboutText2: `Facilito <strong>talleres</strong> y <strong>formaciones</strong> (online y presenciales), realizo <strong>consultoría curricular</strong> y apoyo el <strong>diseño y evaluación de proyectos</strong>.`,
  //   // EDUPAZ SECTION
  //   edupazLabel: "Proyecto",
  //   edupazTitle: "Sobre EduPaz Argentina",
  //   edupazIntro1: `EduPaz Argentina es una iniciativa dedicada a fortalecer una cultura de paz a través de programas de formación, acompañamiento e investigación educativa. Reconocida por la UNESCO y la Asamblea General de las Naciones Unidas como un pilar fundamental para la construcción de una Cultura de Paz (Declaración y Programa de Acción, 1999).`,
  //   edupazIntro2: `La Educación para la Paz constituye el marco integral desde el cual se desarrollan enfoques como la no violencia activa, la empatía, la resolución pacífica de conflictos, el diálogo intercultural y la educación socioemocional. Estos principios guían la labor de EduPaz en su propósito de unir el desarrollo interior con la transformación social.`,

  //   // PROJECTS
  //   auroraTitle: "Aurora – Formación Docente y Currículum para la Paz",
  //   auroraDesc: "Aurora representa el despertar educativo — llevar la paz del ámbito teórico al aula, formando educadores como agentes de cambio.",
    
  //   amanayTitle: "Amanay – Comunidad y Cultura de Paz",
  //   amanayDesc: "Simboliza la raíz social de la paz: construir vínculos de confianza, respeto y cooperación desde la comunidad.",

  //   AlvoradaTitle: "Alvorada – Investigación y Reflexión sobre la Paz",
  //   AlvoradaDesc: "Alvorada representa la quietud reflexiva y el pensamiento crítico desde el cual se generan nuevas comprensiones sobre la paz y la educación.",

  //   auroraDetails: `<strong>Público:</strong> docentes, equipos directivos y educadores.<br><strong>Ejes:</strong> educación no violenta (CNV), resolución de conflictos, integración curricular de la paz.<br><strong>Modalidades:</strong> diseño curricular, cursos, materiales pedagógicos y acompañamiento institucional.`,

  //   amanayDetails: `<strong>Público:</strong> estudiantes, familias, comunidades y organizaciones sociales.<br><strong>Ejes:</strong> aprendizaje socioemocional, ciudadanía global, liderazgo humano.<br><strong>Modalidades:</strong> talleres, círculos de diálogo y proyectos colaborativos.`,

  //   AlvoradaDetails: `<strong>Público:</strong> universidades y líderes educativos.<br><strong>Ejes:</strong> teoría de la paz, educación transformadora, investigación aplicada.<br><strong>Modalidades:</strong> seminarios, publicaciones y materiales teóricos.`,


  //   paihuenFootnote: "“Paihuen” significa estar en paz o lugar para estar en paz — un estado de tranquilidad, seguridad y libertad donde una persona puede ser ella misma.",

  //   // PORTFOLIO
  //   portfolioLabel: "Portfolio",
  //   portfolioTitle: "Formar, acompañar, transformar",
  //   portfolioLegend: "Imágenes de formaciones, conferencias y proyectos educativos en Argentina, Chile, Costa Rica y Suiza.",

  //   // CONTACT
  //   contactLabel: "Contacto",
  //   contactTitle: "Conectemos",
  //   contactName: "Nombre",
  //   contactEmail: "Correo electrónico",
  //   contactMessage: "Mensaje",
  //   contactButton: "Enviar mensaje",
  //   contactSuccess: "Gracias por contactarte — te responderé pronto."
  // },

  en: {
    navServices: "Services",
    navAbout: "About",
    navEdu: "EduPaz 🇦🇷",
    navPortfolio: "Portfolio",
    navContact: "Contact",
    navContactBtn: "Contact",
    navContactBtn2: "Contact",

    // HERO
    heroTag: "Consultant & Facilitator",
    nameTitle: "Peace Education Specialist",
    heroPhrase: `Peace Education promotes <strong>human development</strong> and <strong>integral well-being</strong>, helping people develop the skills to understand one another, dialogue, and build shared well-being.`,

    // SERVICES
    servicesLabel: "Services",
    servicesTitle: "Building well-being through education",

    service1Title: "Workshops & Trainings",
    service1Text: "Peace Education | Nonviolent Learning | Resilience for a Culture of Peace | Human Leadership | Nonviolent Communication & SEL (for teachers, youth and teams).",

    service2Title: "Curriculum Consulting",
    service2Text: "Integration of peace, ethics and global citizenship in educational programs (schools and universities).",

    service3Title: "Project Design",
    service3Text: "Creation and evaluation of educational initiatives with a focus on equity and inclusion.",

    // ABOUT
    aboutLabel: "About me",
    aboutTitle: "Tools to build a sustainable culture of peace",
    aboutText: `I am Milagros Rosón, a Peace Education Specialist with a Master’s degree from the United Nations-mandated University for Peace (UPEACE) and postgraduate studies in Human Leadership and Emotional Education. I design and facilitate learning experiences that foster empathy, resilience, and ethical action. I have worked with international organizations, schools, and communities in Argentina, Chile, Costa Rica, and Switzerland.`,
    aboutText2: `I facilitate <strong>workshops</strong> and <strong>trainings</strong> (online and in person), provide <strong>curriculum consulting</strong>, and support the <strong>design and evaluation of educational projects</strong>.`,

    // EDUPAZ
    edupazLabel: "Project",
    edupazTitle: "About EduPaz Argentina",
    edupazIntro1: `EduPaz Argentina is an initiative dedicated to strengthening a culture of peace through training programs, institutional accompaniment, and educational research. It is recognized by UNESCO and the United Nations General Assembly as a key pillar for building a Culture of Peace (Declaration and Programme of Action, 1999).`,
    edupazIntro2: `Peace Education provides the comprehensive framework from which approaches such as active nonviolence, empathy, peaceful conflict resolution, intercultural dialogue, and socio-emotional learning are developed. These principles guide EduPaz’s work in its mission to unite inner development with social transformation.`,

    auroraTitle: "Aurora – Teacher Training & Peace Curriculum",
    auroraDesc: "Aurora represents an educational awakening — bringing peace from theory into the classroom and preparing educators to be agents of change.",
    auroraDetails: `<strong>Audience:</strong> teachers, school leadership teams, and educators.<br><strong>Themes:</strong> nonviolent education (NVC), conflict resolution, and integrating peace into the curriculum.<br><strong>Formats:</strong> curriculum design, courses, pedagogical materials, and institutional accompaniment.`,

    amanayTitle: "Amanay – Community & Culture of Peace",
    amanayDesc: "It symbolizes the social roots of peace: building relationships of trust, respect, and cooperation within the community.",
    amanayDetails: `<strong>Audience:</strong> students, families, communities, and social organizations.<br><strong>Themes:</strong> socio-emotional learning, global citizenship, and human leadership.<br><strong>Formats:</strong> workshops, dialogue circles, and collaborative projects.`,
    
    AlvoradaTitle: "Alvorada – Peace Research & Reflection",
    AlvoradaDesc: "Alvorada represents reflective stillness and critical thinking — the space from which new understandings of peace and education emerge.",
    AlvoradaDetails: `<strong>Audience:</strong> universities and educational leaders.<br><strong>Themes:</strong> peace theory, transformative education, and applied research.<br><strong>Formats:</strong> seminars, publications, and theoretical materials.`,

    paihuenFootnote: "“Paihuen” means to be at peace, or a place for being at peace — a state of calm, safety, and freedom where a person can truly be themselves.",

    // PORTFOLIO
    portfolioLabel: "Portfolio",
    portfolioTitle: "Teach, accompany, transform",
    portfolioLegend: "Images from trainings, conferences and educational projects in Argentina, Chile, Costa Rica and Switzerland.",

    // CONTACT
    contactLabel: "Contact",
    contactTitle: "Let's connect",
    
    contactNameLabel: "Name",
    contactEmailLabel: "Email",
    contactMessageLabel: "Message",

    // Placeholders
    contactNamePlaceholder: "Your name",
    contactEmailPlaceholder: "your@email.com",
    contactMessagePlaceholder: "How can I help you?",

    // Botón
    contactButton: "Send message",

    // Mensaje de éxito
    contactSuccess: "Thanks for reaching out — I will get back to you soon.",

    contactButton: "Send message",
    contactSuccess: "Thanks for reaching out — I will get back to you soon."
  }
};

  
  // Simple lightbox
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightImg');
  document.getElementById('pfGrid').addEventListener('click', (e) => {
    const img = e.target.closest('img');
    if(!img) return;
    lbImg.src = img.getAttribute('data-full');
    lb.style.display = 'flex';
  });
  lb.addEventListener('click', () => lb.style.display = 'none');

  // Show a local success message on Netlify Forms submit (optional UX)
  const form = document.querySelector('form[name="contacto"]');
  const ok = document.getElementById('okMsg');
  form.addEventListener('submit', () => {
    setTimeout(() => ok.style.display = 'inline', 400);
  });
  // Scroll suave con offset para header fijo  
  function scrollToSection(id) {
    const el = document.getElementById(id.replace('#', ''));
    if (!el) return;

    const header = document.querySelector('header');
    const headerHeight = header ? header.offsetHeight : 0;

    const elementTop = el.offsetTop;

    window.scrollTo({
      top: elementTop - headerHeight,
      behavior: 'smooth'
    });
  }

  // Interceptar clicks del menú
  const navLinks = document.querySelectorAll('header nav a, .btn-rounded');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        e.preventDefault();
        scrollToSection(href);
      }
    });
  });