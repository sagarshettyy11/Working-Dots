/**
 * Utility Helper Functions for Working Dots
 */
import { BRAND_CONFIG } from './constants';

/**
 * Conditionally join class names together
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * Smoothly scroll to an element by ID
 */
export function smoothScrollTo(elementId, offset = 80) {
  const el = document.getElementById(elementId);
  if (!el) return;

  const bodyRect = document.body.getBoundingClientRect().top;
  const elementRect = el.getBoundingClientRect().top;
  const elementPosition = elementRect - bodyRect;
  const offsetPosition = elementPosition - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
}

/**
 * Format custom WhatsApp direct link with pre-filled message
 */
export function getWhatsAppUrl(message = "Hi Working Dots team, I'd like to discuss a new software project.") {
  return `https://wa.me/${BRAND_CONFIG.phoneRaw}?text=${encodeURIComponent(message)}`;
}

/**
 * Format mailto link with pre-filled subject and body
 */
export function getMailtoUrl(subject = 'Project Inquiry — Working Dots', body = 'Hi Working Dots team,\n\nI would like to discuss a project regarding:') {
  return `mailto:${BRAND_CONFIG.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/**
 * Truncate text with ellipsis
 */
export function truncate(text, length = 120) {
  if (!text || text.length <= length) return text;
  return `${text.slice(0, length)}...`;
}

/**
 * Format slug
 */
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
}
