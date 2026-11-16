/* ============================================================================
   DATA.JS — ALL of your portfolio content lives in this ONE file.
   ----------------------------------------------------------------------------
   js/main.js reads PORTFOLIO_DATA below and renders every section of the
   page from it. To add a project, a skill, a timeline item, etc., you only
   edit this file — never index.html.

   HOW TO USE
   1. Find the section you want to change below.
   2. Edit the text between the "quotes".
   3. Save and refresh the browser. Done.

   PLACEHOLDERS: anything marked [FILL ME] is waiting for your real info.
   Search this file for "[FILL ME]" to find them all.
   Copy-paste templates for every section type are at the bottom of this file.
   ============================================================================ */

const PORTFOLIO_DATA = {

  /* ------------------------------------------------------------------
     SITE — browser tab title, logo text
     ------------------------------------------------------------------ */
  site: {
    title: "Abdullah Al Noman — Aspiring Software Engineer | Game Developer",
    description: "Portfolio of Abdullah Al Noman, a Software Engineering student at Daffodil International University passionate about Web Development, Game Development and AI.",
    logo: { text: "Noman", accent: ".dev" }, // navbar / footer brand text
  },

  /* ------------------------------------------------------------------
     NAVBAR — desktop links (order matters). Add/remove lines freely.
     Mobile menu shows these links + the Contact button automatically.
     ------------------------------------------------------------------ */
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Projects", href: "#projects" },
    // { label: "Certifications", href: "#certifications" },  // example
  ],
  navCta: { label: "Contact", href: "#contact" }, // the pill button in the navbar

  /* ------------------------------------------------------------------
     HERO — the big top section
     ------------------------------------------------------------------ */
  hero: {
    greeting: "Hello, I'm",
    name: "Abdullah Al Noman",
    typingPrefix: "I'm exploring",
    // Phrases cycled by the typing effect (80ms type / 40ms delete / 2s pause)
    typingPhrases: [
      "Web Development",
      "Game Development",
      "Artificial Intelligence",
      "C++",
      "Python",
      "Unity",
    ],
    tagline: "Aspiring Software Engineer | Game Developer",
    location: "DSC, Savar, Dhaka, Bangladesh",
    primaryButton: { label: "View My Work", href: "#projects" },
    secondaryButton: { label: "Get In Touch", href: "#contact" },
  },

  /* ------------------------------------------------------------------
     SOCIAL LINKS — used in the hero, contact section and footer
     ------------------------------------------------------------------ */
  socials: [
    { name: "Facebook", icon: "facebook", url: "https://www.facebook.com/AbdullahA1N0man/" },
    { name: "LinkedIn", icon: "linkedin", url: "https://www.linkedin.com/in/abdullah-a1-noman/" },
    { name: "GitHub", icon: "github", url: "https://github.com/Abdullah-Al-Noman001" },
  ],

  /* ------------------------------------------------------------------
     ABOUT — photo, bio, quick facts, CV
     ------------------------------------------------------------------ */
  about: {
    // [FILL ME] replace with your photo file, e.g. "assets/images/profile.jpg"
    photo: "assets/images/profile.svg",
    photoAlt: "Portrait of Abdullah Al Noman",
    // Small badge shown at the bottom edge of the photo
    photoBadge: "Daffodil International University",
    // [FILL ME] put your CV in assets/cv/ and set the path, e.g.
    //           "assets/cv/Abdullah_Al_Noman_CV.pdf"
    cvUrl: "[FILL ME]",
    paragraphs: [
      "Software engineering student at Daffodil International University, driven to create impactful and innovative solutions. Interested in Web Development, Game Development, and AI. Committed to continuous learning, collaboration, and a growth mindset. Eager to contribute to real-world projects.",
    ],
    // Quick facts shown under the bio (icon names come from PORTFOLIO_ICONS)
    facts: [
      { icon: "pin", label: "Location", value: "DSC, Savar, Dhaka, Bangladesh" },
      { icon: "graduation", label: "University", value: "Daffodil International University" },
      { icon: "book", label: "Program", value: "B.Sc. in Software Engineering" },
    ],
  },

  /* ------------------------------------------------------------------
     STAT CARDS (4) — value can be:
       - a NUMBER  → the counter animates from 0 up to it
       - a STRING  → shown as-is (no counting), e.g. "[FILL ME]"
     suffix is optional: "+" or "%" etc.
     ------------------------------------------------------------------ */
  stats: [
    { icon: "code", value: 10, suffix: "+", label: "Repositories" },
    { icon: "rocket", value: 6, suffix: "+", label: "Personal Projects" },
    { icon: "users", value: 2, suffix: "+", label: "Collaborative Projects" },
    { icon: "clock", value: 4, suffix: "+", label: "Years of Learning" },
  ],

  /* ------------------------------------------------------------------
     SKILLS — each group becomes one glass card with badges
     ------------------------------------------------------------------ */
  skills: [
    {
      icon: "code",
      title: "Programming",
      description: "Core languages from coursework and practice, plus JavaScript used in my browser projects.",
      items: ["C", "C++", "Java", "JavaScript"],
    },
    {
      icon: "globe",
      title: "Web Development",
      description: "Building interactive browser apps with HTML, CSS, and JavaScript.",
      items: ["HTML", "CSS", "DOM & Events", "localStorage", "JSON & File APIs"],
    },
    {
      icon: "layers",
      title: "Problem Solving & Game Logic",
      description: "Applying algorithms and rules to track game states and calculate outcomes.",
      items: ["Data Structures & Algorithms", "Probability & Combinatorics", "Game-State Modeling", "Input Validation", "Settlement Calculations"],
    },
    {
      icon: "book",
      title: "Software Engineering Foundations",
      description: "Coursework in requirements, analysis, databases, and system design.",
      items: ["Requirements & SRS", "SDLC", "System Analysis & Design", "SQL & Relational Databases", "Computer Systems"],
    },
    {
      icon: "wrench",
      title: "Tools & Workflow",
      description: "Using version control and project documentation to manage and share my work.",
      items: ["Git", "GitHub", "VS Code"],
    },
    {
      icon: "cpu",
      title: "Currently Learning",
      description: "Building foundations in game development and operating systems.",
      items: ["C#", "Unity (2D/3D)", "Operating Systems"],
    },
  ],

  /* ------------------------------------------------------------------
     EDUCATION — timeline, rendered top to bottom in this order.
     Set isCurrent: true on the latest item → its dot pulses.
     ------------------------------------------------------------------ */
  education: [
    {
      title: "SSC — Secondary School Certificate",
      institution: "Bogura Cantonment Public School and College",
      period: "2021",
      result: "GPA 5.00",
      description: "Completed the Secondary School Certificate examination with a perfect GPA of 5.00.",
      isCurrent: false,
    },
    {
      title: "HSC — Higher Secondary Certificate",
      institution: "Govt Azizul Haque College, Bogura",
      period: "2023",
      result: "GPA 5.00",
      description: "Completed the Higher Secondary Certificate examination with a perfect GPA of 5.00.",
      isCurrent: false,
    },
    {
      title: "B.Sc. in Software Engineering",
      institution: "Daffodil International University",
      period: "Present",
      result: "",
      description: "Studying Software Engineering at Daffodil International University.",
      isCurrent: true,
    },
  ],

  /* ------------------------------------------------------------------
     PROJECTS — selected personal and collaborative projects.
     image (optional): set e.g. "assets/images/project-placeholder.svg"
     to use a picture banner instead of the gradient + icon banner.
     ------------------------------------------------------------------ */
  projects: [
    {
      title: "BS Card Game Bluff Tracker",
      category: "Browser Game Companion",
      icon: "gamepad",
      description: "A browser-based companion for the BS (Bullshit) card game. Track 2–10 players' hands, log rank claims, estimate bluff probability from known cards and plays, resolve challenges, and save the current game in the browser.",
      tech: ["HTML", "CSS", "JavaScript", "localStorage"],
      demoUrl: "https://abdullah-al-noman001.github.io/bs-card-game-bluff-tracker/",
      codeUrl: "https://github.com/Abdullah-Al-Noman001/bs-card-game-bluff-tracker",
    },
    {
      title: "Daily Habit Tracker",
      category: "Personal Project",
      icon: "layers",
      description: "A lightweight habit tracker for adding, renaming, and removing habits, logging daily progress, and reviewing a 16-week history with per-habit and combined activity heatmaps. Supports JSON backup and restore, with data saved in the browser.",
      tech: ["HTML", "CSS", "JavaScript", "localStorage", "JSON", "File API"],
      demoUrl: "https://abdullah-al-noman001.github.io/activity-tracker/",
      codeUrl: "https://github.com/Abdullah-Al-Noman001/activity-tracker",
    },
    {
      title: "Space Relics 3D — Solar System Explorer",
      category: "Collaborative Project",
      icon: "globe",
      description: "Built with my team for NASA Space Apps Challenge 2026, this interactive 3D Solar System explorer connects planets with spacecraft and missions. It includes a 1962–2031 timeline, procedural 3D hardware models, and a NASA-filtered dataset.",
      tech: ["Next.js", "React", "Three.js", "React Three Fiber", "Drei"],
      demoUrl: "https://space-relics-3d-two.vercel.app/",
      codeUrl: "https://github.com/Abdullah-Al-Noman001/space-relics-3d_V2",
    },
    {
      title: "Bangladesh Monopoly",
      category: "Collaborative Game",
      icon: "gamepad",
      description: "I collaborated with a friend on this Bangladesh-themed, real-time multiplayer Monopoly-style game. It features local landmarks, BDT currency, localized Luck and Public Fund cards, property management, and player trading.",
      tech: ["React", "TypeScript", "Node.js", "Express", "Socket.IO", "Tailwind CSS"],
      demoUrl: "https://arghor-monopoly.vercel.app/",
      codeUrl: "https://github.com/Abdullah-Al-Noman001/Bangla_monopoly",
    },
  ],

  /* ------------------------------------------------------------------
     CERTIFICATIONS — verified certificate details
     ------------------------------------------------------------------ */
  certifications: [
    {
      icon: "award",
      title: "Galactic Problem Solver",
      issuer: "NASA Space Apps Challenge",
      year: "Nov 2026",
      link: "assets/images/certificates/nasa-space-apps-2026.jpg",
    },
    {
      icon: "award",
      title: "Computer Architecture",
      issuer: "Saylor University",
      year: "Apr 2026",
      link: "assets/certificates/computer-architecture-certificate.pdf",
    },
    {
      icon: "award",
      title: "SQL Server Foundations Course",
      issuer: "ScholarHat",
      year: "Apr 2026",
      link: "assets/certificates/lab-certificate.pdf",
    },
  ],

  /* ------------------------------------------------------------------
     ACHIEVEMENTS — [FILL ME] placeholders for now
     ------------------------------------------------------------------ */
  achievements: [
    {
      icon: "trophy",
      title: "[FILL ME] Achievement Title",
      description: "[FILL ME] e.g. contest placement, scholarship, award…",
      year: "[FILL ME] Year",
    },
    {
      icon: "trophy",
      title: "[FILL ME] Achievement Title",
      description: "[FILL ME] Describe what you achieved and why it matters.",
      year: "[FILL ME] Year",
    },
  ],

  /* ------------------------------------------------------------------
     ROLES & RESPONSIBILITIES — [FILL ME] placeholders for now
     ------------------------------------------------------------------ */
  roles: [
    {
      icon: "users",
      title: "[FILL ME] Role Title",
      org: "[FILL ME] Club / community / department",
      description: "[FILL ME] What were you responsible for?",
    },
    {
      icon: "users",
      title: "[FILL ME] Role Title",
      org: "[FILL ME] Organization",
      description: "[FILL ME] Summarize your duties and impact.",
    },
  ],

  /* ------------------------------------------------------------------
     EXPERIENCE & ACTIVITIES — [FILL ME] placeholders for now
     ------------------------------------------------------------------ */
  experience: [
    {
      icon: "briefcase",
      title: "[FILL ME] Position / Activity",
      org: "[FILL ME] Organization",
      period: "[FILL ME] Period", // e.g. "Jan 2026 – Present"
      description: "[FILL ME] What did you do and learn?",
    },
    {
      icon: "briefcase",
      title: "[FILL ME] Position / Activity",
      org: "[FILL ME] Organization",
      period: "[FILL ME] Period",
      description: "[FILL ME] Describe your contribution.",
    },
  ],

  /* ------------------------------------------------------------------
     INTERESTS & HOBBIES — cards with icon + short line
     ------------------------------------------------------------------ */
  interests: [
    { icon: "cpu", title: "Machine Learning", description: "Exploring how machines learn from data." },
    { icon: "layers", title: "Deep Learning", description: "Curious about neural networks and their possibilities." },
    { icon: "zap", title: "Artificial Intelligence", description: "Following the latest in AI and how it shapes software." },
    { icon: "heart", title: "[FILL ME] Hobby", description: "[FILL ME] e.g. Football, chess, photography…" },
    { icon: "star", title: "[FILL ME] Hobby", description: "[FILL ME] Add anything you enjoy doing." },
  ],

  /* ------------------------------------------------------------------
     SECTION HEADINGS — the small uppercase label + big heading of each
     section (index.html keeps a static copy as a no-JS fallback)
     ------------------------------------------------------------------ */
  sections: {
    about:          { label: "Get To Know",     title: "About Me" },
    skills:         { label: "Skills & Learning", title: "My Skills" },
    education:      { label: "My Journey",      title: "Education" },
    projects:       { label: "My Work",         title: "Featured Projects" },
    certifications: { label: "Proof Of Learning", title: "Recent Certificates" },
    achievements:   { label: "Milestones",      title: "Achievements" },
    roles:          { label: "Leadership",      title: "Roles & Responsibilities" },
    experience:     { label: "Getting Involved", title: "Experience & Activities" },
    interests:      { label: "Beyond Code",     title: "Interests & Hobbies" },
    contact:        { label: "Contact",         title: "Get In Touch" },
  },

  /* ------------------------------------------------------------------
     CONTACT — info card + form settings
     Formspree: create a free form at https://formspree.io, then paste the
     ID (the part after https://formspree.io/f/) into formspreeId.
     See SETUP.md step 5 for the full walkthrough.
     ------------------------------------------------------------------ */
  contact: {
    email: "abdullahspacebd@gmail.com",
    location: "DSC, Savar, Dhaka, Bangladesh",
    university: "Daffodil International University",
    formspreeId: "[FILL ME]",
    intro: "Have a question, an opportunity, or just want to say hi? My inbox is always open — I'll get back to you as soon as I can.",
  },

  /* ------------------------------------------------------------------
     FOOTER
     ------------------------------------------------------------------ */
  footer: {
    builtWith: "Built with plain HTML, CSS & vanilla JavaScript — no frameworks.",
  },
};

/* ============================================================================
   ICON LIBRARY (advanced) — inline SVG strings referenced BY NAME above.
   You normally never need to touch this. If you want a new icon:
   1. copy any line below, 2. give it a new name, 3. paste your own <svg>.
   Keep class="icon" so sizing keeps working.
   ============================================================================ */
const PORTFOLIO_ICONS = {
  code: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
  globe: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  gamepad: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="10" rx="5"/><line x1="7" y1="11" x2="7" y2="13"/><line x1="6" y1="12" x2="8" y2="12"/><circle cx="16" cy="13" r="1"/><circle cx="18" cy="11" r="1"/></svg>',
  wrench: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  cpu: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',
  layers: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
  zap: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  heart: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  star: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  trophy: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0V4z"/><path d="M7 6H4v2a3 3 0 0 0 3 3"/><path d="M17 6h3v2a3 3 0 0 1-3 3"/></svg>',
  award: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
  briefcase: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  users: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  user: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  graduation: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></svg>',
  book: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  calendar: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  clock: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  rocket: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91 0z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
  mail: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  pin: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  send: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
  external: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
  download: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  check: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12"/></svg>',
  x: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  folder: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
  facebook: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>',
  linkedin: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z"/></svg>',
  github: '<svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="none" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>',
};

/* ============================================================================
   COPY-PASTE TEMPLATES — duplicate the block you need, edit the values,
   paste it into the matching list above, save, refresh. That's it.
   ============================================================================

   ---- Add a NAV LINK (inside nav: [ ... ]) ----
   { label: "Recent Certificates", href: "#certifications" },

   ---- Add a SOCIAL LINK (inside socials: [ ... ]) ----
   { name: "Twitter", icon: "x", url: "https://x.com/yourhandle" },

   ---- Add an ABOUT FACT (inside about.facts: [ ... ]) ----
   { icon: "pin", label: "Languages", value: "Bangla, English" },

   ---- Add a STAT CARD (inside stats: [ ... ]) ----
   { icon: "rocket", value: 5, suffix: "+", label: "Projects" },

   ---- Add a SKILL GROUP (inside skills: [ ... ]) ----
   {
     icon: "terminal",
     title: "Databases",
     description: "Storing and querying data for my apps.",
     items: ["MySQL", "SQLite"],
   },

   ---- Add an EDUCATION / TIMELINE ITEM (inside education: [ ... ]) ----
   (set isCurrent: true only on the newest item — its dot pulses)
   {
     title: "M.Sc. in Software Engineering",
     institution: "Daffodil International University",
     period: "2030",
     result: "CGPA [FILL ME]",
     description: "Short note about this milestone.",
     isCurrent: false,
   },

   ---- Add a PROJECT (inside projects: [ ... ]) ----
   (optional: add  image: "assets/images/my-project.png"  for a picture banner)
   {
     title: "My Awesome Project",
     category: "Web Development",
     icon: "globe",
     description: "What it does, what I built, what I learned.",
     tech: ["HTML", "CSS", "JavaScript"],
     demoUrl: "https://mydemo.vercel.app",
     codeUrl: "https://github.com/Abdullah-Al-Noman001/my-project",
   },

   ---- Add a CERTIFICATION (inside certifications: [ ... ]) ----
   {
     icon: "award",
     title: "Responsive Web Design",
     issuer: "freeCodeCamp",
     year: "2026",
     link: "https://cert.example.com/my-cert",
   },

   ---- Add an ACHIEVEMENT (inside achievements: [ ... ]) ----
   {
     icon: "trophy",
     title: "2nd Runner-up, DIU Programming Contest",
     description: "Solved 5 of 7 problems in 3 hours.",
     year: "2026",
   },

   ---- Add a ROLE (inside roles: [ ... ]) ----
   {
     icon: "users",
     title: "General Member",
     org: "DIU Computer Club",
     description: "Helped organize workshops and tech meetups.",
   },

   ---- Add an EXPERIENCE / ACTIVITY (inside experience: [ ... ]) ----
   {
     icon: "briefcase",
     title: "Volunteer",
     org: "National Coding Fest",
     period: "Mar 2026 – Apr 2026",
     description: "Supported participants during the contest.",
   },

   ---- Add an INTEREST / HOBBY (inside interests: [ ... ]) ----
   { icon: "heart", title: "Football", description: "Playing with friends every weekend." },

   ============================================================================ */
