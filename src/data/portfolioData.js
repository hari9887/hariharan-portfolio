const base = import.meta.env.BASE_URL

export const profile = {
  name: 'Hariharan Thiyagarajan',
  shortName: 'Hariharan',
  initials: 'HT',
  role: 'Full Stack Developer | React Native Mobile Developer',
  location: 'Chennai, Tamil Nadu, India',
  email: 'hariharansept12@gmail.com',
  phone: '+916382731018',
  phoneDisplay: '+91 63827 31018',
  linkedin: 'https://www.linkedin.com/in/hariharan-thiyagarajan-564ab1246',
  linkedinLabel: 'linkedin.com/in/hariharan-thiyagarajan',
  resume: `${base}resume.pdf`,
  resumeFileName: 'Hariharan_Thiyagarajan_Resume.pdf',
  photo: `${base}about.jpg`,
  tabImage: `${base}profile.jpg`,
  now: {
    title: 'Full Stack Developer',
    org: 'Akranta Software Technologies',
    since: 'Mar 2026',
  },
}

export const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export const intro = [
  'I am a Full Stack Developer with hands-on experience building cross-platform React Native applications for Android and iOS. Those mobile screens sit on RESTful APIs, PostgreSQL, TypeScript, Java, and Spring Boot rather than on a separate stack.',
  'Most of the work is translation: take a complex business workflow that already exists on the web, then turn it into a responsive mobile experience that still talks to a scalable end-to-end architecture.',
  'I currently work at Akranta Software Technologies in Chennai. Before that I interned there as a Full Stack Developer, and earlier as a Web Developer Intern at Shiash Info Solutions, where I was recognized as Best Intern of the Month.',
]

export const skillGroups = [
  {
    title: 'Languages',
    items: ['Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML5', 'CSS3', 'PHP'],
  },
  {
    title: 'Mobile',
    items: [
      'React Native CLI',
      'Android',
      'iOS',
      'Cross-platform development',
      'Mobile UI integration',
      'API integration',
    ],
  },
  {
    title: 'Frontend',
    items: ['React JS', 'jQuery', 'Responsive web design', 'JSON', 'XML', 'TypeScript validation'],
  },
  {
    title: 'Backend & APIs',
    items: [
      'Node.js',
      'Spring Boot',
      'Spring MVC',
      'RESTful APIs',
      'Microservices',
      'OOP',
      'Design patterns',
      'Multithreading',
    ],
  },
  {
    title: 'Databases',
    items: [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Oracle',
      'Stored procedures',
      'SQL functions',
      'Database migration',
      'Query optimization',
    ],
  },
  {
    title: 'Tools & delivery',
    items: [
      'Git',
      'GitHub',
      'VS Code',
      'Postman',
      'Maven',
      'Eclipse',
      'Selenium',
      'Figma',
      'CI/CD',
      'Agile / Scrum',
      'SDLC',
      'Unit testing',
      'Debugging',
    ],
  },
]

export const experience = [
  {
    role: 'Full Stack Developer',
    org: 'Akranta Software Technologies',
    dates: 'Mar 2026 — Present',
    body: [
      'This is the current role. The brief is to keep web production workflows and mobile clients on one contract, not two separate products.',
      'I engineered a real-time React Native CLI application. Production web workflows were mapped into responsive Android and iOS screens, then those screens were connected to the same mobile API flows the rest of the system already used.',
      'On the server I architected Spring Boot REST APIs and microservices from existing Java business logic so web and mobile clients could share one integration surface.',
      'For the modules that actually hold data, I implemented TypeScript form and data validation together with PostgreSQL tables, SQL functions, and stored procedures.',
      'Delivery is Agile and Scrum: Git for version control, code reviews, debugging, and unit testing as part of the same loop.',
    ],
  },
  {
    role: 'Full Stack Developer Intern',
    org: 'Akranta Software Technologies',
    dates: 'Jan 2026 — Mar 2026',
    body: [
      'The internship sat on the same product family as the current role, with more time on the Java and database side of the house.',
      'I developed Java and Spring Boot RESTful APIs and improved JSP and jQuery interfaces so enterprise application modules could talk through reliable backend integrations.',
      'A large part of the work was migration: Oracle functions, stored procedures, and complex queries moved to PostgreSQL while keeping data integrity and improving query performance.',
      'I also supported end-to-end debugging, unit testing, and performance work across frontend, backend, and database layers rather than treating each layer as a separate ticket.',
    ],
  },
  {
    role: 'Web Developer Intern',
    org: 'Shiash Info Solutions',
    dates: 'Jan 2024 — Mar 2024',
    body: [
      'This was an earlier internship focused on the public website rather than the mobile product.',
      'I contributed to full-cycle website development, improving UI and UX through responsive layouts and visual design that had to hold on a phone as well as a desktop browser.',
      'The same internship recognized the work as Best Intern of the Month.',
    ],
  },
]

export const projects = [
  {
    title: 'IoT Based Smart Agriculture',
    stack: ['Arduino', 'Raspberry Pi', 'ESP32', 'Sensors'],
    body: [
      'This is a real-time agricultural monitoring system. Multiple sensors feed a calibration and data-acquisition pipeline instead of a single one-off reading.',
      'The hardware mix is Arduino, Raspberry Pi, and ESP32. Each board has a role in collecting, calibrating, or forwarding farm data so the monitor stays live.',
      'A patent was filed for the smart-farming approach. The project sits on the resume as the hardware and sensing counterpart to the later software work.',
    ],
  },
  {
    title: 'Personal Portfolio Website',
    stack: ['HTML', 'CSS', 'JavaScript', 'Neocities'],
    body: [
      'The first public portfolio was a responsive site built in HTML, CSS, and JavaScript and hosted on Neocities.',
      'The goal was interactivity, usability, and a URL that could be shared. This current site is the next version of that same idea: still a public record of the same resume, with a layout that is meant to be read on a phone first.',
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
  'Node.js Intermediate — HackerRank',
  'SQL — HackerRank',
  'Java — Great Learning',
  'Best Intern of the Month — Shiash Info Solutions',
]
