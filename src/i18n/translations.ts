export const translations = {
  // Site
  "site.name": "Simon Hazard",
  "site.role": "Full-stack software engineer",
  "site.skipToContent": "Skip to content",
  "site.home": "Simon Hazard — Home",

  // Navigation
  "nav.label": "Main navigation",
  "nav.breadcrumb": "Breadcrumb",
  "nav.home": "Home",
  "nav.projects": "Projects",
  "nav.articles": "Articles",
  "nav.about": "About",
  "nav.devblog": "Devblog",
  "nav.menu": "Menu",
  "nav.openMenu": "Open menu",
  "nav.closeMenu": "Close menu",

  // Links shared by the header menu, the footer and the pages
  "links.github": "GitHub",
  "links.kofi": "Ko-fi",
  "links.resume": "Resume",
  "links.downloadResume": "Download my resume",
  "links.opensInNewTab": "opens in a new tab",

  // Languages of the articles
  "lang.fr": "French",
  "lang.en": "English",

  // Home
  "home.description":
    "Simon Hazard, full-stack software engineer specializing in the TypeScript ecosystem. Projects, articles and resume.",
  "home.exploreWork": "Explore my work",
  "home.selectedWork": "Selected work",
  "home.allProjects": "All projects",
  "home.articles": "Articles",
  "home.allArticles": "All articles",

  // Projects
  "projects.title": "Projects",
  "projects.description": "Projects by Simon Hazard: desktop apps, web apps and multiplayer games.",
  "projects.visit": "Visit project",
  "projects.download": "Download",
  "projects.source": "Source",
  "projects.technologies": "technologies",
  "projects.decommissioned": "Decommissioned",

  // Articles
  "articles.title": "Articles",
  "articles.description": "Technical articles by Simon Hazard, in English and French.",
  "articles.all": "All",
  "articles.filterCategory": "Filter by category",
  "articles.filterTag": "Filter by tag",
  "articles.clearFilters": "Clear filters",
  "articles.noResults": "No articles found.",
  "articles.countOne": "1 article",
  "articles.countOther": "{count} articles",
  "articles.back": "All articles",
  "articles.aiAssisted": "AI-Assisted Writing",
  "articles.aiAssistedDescription": "Content written by hand, reformulated with AI assistance.",

  // Devblog
  "devblog.title": "Devblog",
  "devblog.description": "Development journal of Simon Hazard’s personal projects.",
  "devblog.subtitle": "Development journal of my ongoing personal projects.",
  "devblog.empty": "No devblog articles yet.",
  "devblog.readArticles": "Read articles",

  // About
  "about.title": "About",
  "about.description":
    "About Simon Hazard, full-stack software engineer specializing in the TypeScript ecosystem.",
  "about.contact": "Contact",
  "about.p1":
    "I'm a web developer passionate about modern technologies and building tools that matter.",
  "about.p2":
    "Specializing in the TypeScript ecosystem, open to working with any modern framework or library. Passionate about front-end development, I stay curious about new technologies and best practices, always striving for clean and high-quality code.",
  "about.p3":
    "This site is my space to document my projects, write technical articles, and share my passion for video games and board games.",

  // Theme
  "theme.label": "Theme",
  "theme.toDark": "Switch to dark theme",
  "theme.toLight": "Switch to light theme",

  // Meta
  "meta.defaultDescription":
    "Portfolio of Simon Hazard, full-stack software engineer: projects, articles and resume.",
} as const;

export type TranslationKey = keyof typeof translations;
