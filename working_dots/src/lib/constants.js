/**
 * Global Constants & Brand Configurations for Working Dots
 */

export const BRAND_CONFIG = {
  name: 'Working Dots',
  tagline: 'Enterprise Digital Product Studio & AI Automation Architecture',
  legalName: 'Working Dots Technologies Pvt. Ltd.',
  domain: 'workingdots.in',
  contactEmail: 'contact@workingdots.in',
  supportEmail: 'support@workingdots.in',
  phone: '+91 63636 57381',
  phoneRaw: '916363657381',
  location: 'Bangalore, India • Global Client Delivery',
  yearsActive: '5+',
  projectsDelivered: '140+',
  uptimeSLA: '99.9%',
  clientSatisfaction: '99.4%',
  avgTurnaroundDays: '14',
};

export const SOCIAL_LINKS = {
  whatsapp: `https://wa.me/${BRAND_CONFIG.phoneRaw}?text=${encodeURIComponent("Hi Working Dots team, I'd like to discuss a project.")}`,
  email: `mailto:${BRAND_CONFIG.contactEmail}`,
  supportEmail: `mailto:${BRAND_CONFIG.supportEmail}`,
  instagram: 'https://instagram.com/workingdots.in',
  linkedin: 'https://linkedin.com/company/workingdots',
  github: 'https://github.com/workingdots',
  twitter: 'https://x.com/workingdots',
};

export const NAV_ITEMS = [
  { label: 'Home', href: '/', route: 'home' },
  { label: 'Services', href: '/services', route: 'services' },
  { label: 'Projects & Work', href: '/projects', route: 'projects' },
  { label: 'How We Work', href: '/#process', route: 'home', sectionId: 'process' },
  { label: 'Why Us', href: '/#why-us', route: 'home', sectionId: 'why-us' },
  { label: 'About', href: '/#about', route: 'home', sectionId: 'about' },
];

export const SERVICE_CATEGORIES = [
  'All Solutions',
  'Web Platforms',
  'Mobile Apps',
  'AI & Automations',
  'Enterprise & Hospitality Tech',
  'UI/UX Design Systems',
  'Cloud & DevOps',
];

export const PROJECT_FILTERS = [
  'All',
  'Web Development',
  'Mobile Apps',
  'AI Automations',
  'Cloud & SaaS',
];
