const base = import.meta.env.BASE_URL

export const profile = {
  name: 'Hariharan Thiyagarajan',
  shortName: 'Hariharan',
  initials: 'HT',
  role: 'Frontend Developer & Software Engineer',
  specialization: 'React.js, Angular, and Generative AI',
  location: 'Chennai, Tamil Nadu, India',
  availability: 'Open to frontend, full-stack, and React Native roles',
  email: 'hariharansept12@gmail.com',
  phone: '+916382731018',
  phoneDisplay: '+91 63827 31018',
  linkedin: 'https://www.linkedin.com/in/hariharan-thiyagarajan-564ab1246',
  linkedinLabel: 'linkedin.com/in/hariharan-thiyagarajan',
  resume: `${base}resume.pdf`,
  resumeFileName: 'Hariharan_Thiyagarajan_Resume.pdf',
  photo: `${base}profile.jpg`,
  aboutPhoto: `${base}about.jpg`,
  taglines: [
    'React Specialist',
    'Generative AI Builder',
    'Angular Engineer',
    'React Native Developer',
    'PostgreSQL Craftsman',
  ],
  summary:
    'High-impact frontend and full-stack developer with hands-on experience building dynamic web applications, interactive presentation systems, and cloud backend integrations. Proficient in React.js, Angular, modern TypeScript, HTML5/CSS3, Node.js, Express, PostgreSQL, and Google Gemini API integration.',
  about: [
    'I build interfaces that stay clear under real product pressure — responsive screens, typed data flows, and backends that do not lose the plot. At Akranta Software Technologies I translate production workflows into React and React Native experiences, and I connect them to Spring Boot APIs, TypeScript validation, and PostgreSQL functions.',
    'Outside the product backlog I design interactive presentation systems: a Gemini-powered slide platform, an IoT monitoring dashboard, and a Google Apps Script engine that standardizes image placement across master layouts. I also care about the database layer — triggers, foreign keys, and archiving that keep history intact when records are removed.',
  ],
  now: {
    title: 'Full Stack Developer',
    org: 'Akranta Software Technologies',
    since: 'March 2026',
  },
}

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export const stats = [
  { value: 'B.E.', label: 'Electronics & Communication' },
  { value: '7.3', label: 'CGPA, M. Kumarasamy College' },
  { value: '2024', label: 'Best Intern, Shiash Info Solutions' },
  { value: 'Patent', label: 'IoT smart agriculture system' },
]

export const skillGroups = [
  {
    title: 'Frontend',
    tone: 'lavender',
    items: [
      'React.js',
      'Angular v21',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'DOM Manipulation',
      'Responsive Web Design',
    ],
  },
  {
    title: 'Mobile',
    tone: 'teal',
    items: [
      'React Native CLI',
      'Android',
      'iOS',
      'Cross-platform UI',
      'Mobile API integration',
    ],
  },
  {
    title: 'Backend & Databases',
    tone: 'slate',
    items: [
      'Node.js',
      'Express',
      'Spring Boot',
      'Java OOP',
      'RESTful APIs',
      'PostgreSQL',
      'PL/pgSQL triggers',
      'Stored procedures',
      'MySQL',
      'MongoDB',
    ],
  },
  {
    title: 'AI & Automation',
    tone: 'neon',
    items: [
      'Gemini API integration',
      'Prompt engineering',
      'Google Apps Script',
      'Generative presentation flows',
    ],
  },
  {
    title: 'Tools & Environment',
    tone: 'crimson',
    items: [
      'VS Code',
      'Eclipse IDE',
      'Antigravity IDE',
      'Git',
      'GitHub Pages',
      'NPM',
      'Postman',
      'Figma',
      'Maven',
    ],
  },
]

export const projects = [
  {
    id: 'ai-presentation',
    index: '01',
    title: 'AI-Powered Interactive Presentation Platform',
    summary:
      'A 30-slide web application with a dark visual system, live Gemini responses, and layouts that reflow cleanly from a laptop stage to a phone.',
    points: [
      'Dark, presentation-first interface built for live walkthroughs rather than static decks.',
      'Gemini API calls wired into the session so copy and prompts can update while the deck is in use.',
      'Responsive slide geometry that keeps type, media, and controls readable at every breakpoint.',
    ],
    stack: ['React.js', 'Gemini API', 'TypeScript', 'Responsive UI'],
    art: 'slides',
    outcome: 'Live walkthrough on request',
  },
  {
    id: 'iot-factory',
    index: '02',
    title: 'IoT Smart Factory & Digital Twin Dashboard',
    summary:
      'Interactive 2D presentation graphics and a monitoring dashboard for production metrics coming off an IoT line.',
    points: [
      '2D factory graphics used as a presentation surface, not a static illustration.',
      'Dashboard views for production metrics operators and stakeholders can read at a glance.',
      'Layout tuned so the same story holds on a wide display and a smaller review screen.',
    ],
    stack: ['Dashboard UI', '2D Graphics', 'IoT Metrics', 'React.js'],
    art: 'factory',
    outcome: 'Live walkthrough on request',
  },
  {
    id: 'apps-script',
    index: '03',
    title: 'Google Apps Script Presentation Workflow',
    summary:
      'A custom script engine that batch-standardizes image metrics, alignment, and coordinates in Google Slides against master layouts.',
    points: [
      'Measures image size and position, then snaps each asset to the master layout rules.',
      'Runs as a batch so a long deck can be corrected without hand-nudging every slide.',
      'Keeps coordinates consistent when source images arrive at different aspect ratios.',
    ],
    stack: ['Google Apps Script', 'Google Slides', 'Automation', 'Layout Math'],
    art: 'script',
    outcome: 'Workflow demo on request',
  },
  {
    id: 'postgres-archive',
    index: '04',
    title: 'Enterprise PostgreSQL Archiving Engine',
    summary:
      'Database automation that archives deleted records in real time with PL/pgSQL triggers while preserving foreign-key integrity.',
    points: [
      'Triggers capture deletes and write a faithful archive row as the change happens.',
      'Foreign keys stay valid so archived history can still be joined to the records that remain.',
      'Built for operational tables where “delete” should mean “move,” not “forget.”',
    ],
    stack: ['PostgreSQL', 'PL/pgSQL', 'Triggers', 'Foreign Keys'],
    art: 'database',
    outcome: 'Schema walkthrough on request',
  },
  {
    id: 'smart-agriculture',
    index: '05',
    title: 'IoT Smart Agriculture System',
    summary:
      'A multi-sensor farm monitor on Arduino, Raspberry Pi, and ESP32, with calibration and data acquisition. A patent was filed for the smart-farming approach.',
    points: [
      'Sensor integration for real-time agricultural monitoring.',
      'Calibration and acquisition pipeline across Arduino, Raspberry Pi, and ESP32.',
      'Patent filed for the smart-farming innovation.',
    ],
    stack: ['Arduino', 'Raspberry Pi', 'ESP32', 'Sensors'],
    art: 'farm',
    outcome: 'Patent-backed project',
  },
]

export const experience = [
  {
    role: 'Full Stack Developer',
    org: 'Akranta Software Technologies',
    location: 'India',
    dates: 'Mar 2026 — Present',
    points: [
      'Engineered a real-time React Native CLI application, translating production web workflows into responsive Android and iOS screens with mobile API flows.',
      'Architected Spring Boot REST APIs and microservices from Java business logic so web and mobile clients share one contract.',
      'Implemented TypeScript validation plus PostgreSQL tables, SQL functions, and stored procedures for core modules.',
      'Shipped inside Agile/Scrum with Git, code reviews, debugging, and unit testing.',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    org: 'Akranta Software Technologies',
    location: 'India',
    dates: 'Jan 2026 — Mar 2026',
    points: [
      'Developed Java and Spring Boot REST APIs and improved JSP/jQuery screens that connect enterprise modules.',
      'Migrated Oracle functions, stored procedures, and complex queries to PostgreSQL without dropping data integrity.',
      'Debugged and tuned performance across frontend, backend, and database layers.',
    ],
  },
  {
    role: 'Web Developer Intern',
    org: 'Shiash Info Solutions',
    location: 'India',
    dates: 'Jan 2024 — Mar 2024',
    points: [
      'Contributed across the website build, tightening responsive layout and visual hierarchy.',
      'Recognized as Best Intern of the Month for the quality of the UI work.',
    ],
  },
]

export const education = {
  school: 'M. Kumarasamy College of Engineering, Karur',
  degree: 'B.E. in Electronics and Communication Engineering',
  dates: 'Nov 2020 — Jun 2024',
  detail: 'CGPA 7.3',
}

export const certifications = [
  'Advanced Frontend Development — Anudip Foundation',
  'Google Generative AI',
  'Node.js Intermediate — HackerRank',
  'SQL — HackerRank',
  'Java — Great Learning',
  'Best Intern of the Month — Shiash Info Solutions',
]

export const marqueeItems = [
  'React.js',
  'Angular v21',
  'TypeScript',
  'React Native',
  'Gemini API',
  'PostgreSQL',
  'Spring Boot',
  'Node.js',
  'Tailwind CSS',
  'Google Apps Script',
]
