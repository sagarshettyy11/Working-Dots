import React from 'react';
import { BRAND_CONFIG, SOCIAL_LINKS } from '../lib/constants';

export default function Footer({ navigate }) {
  const handleLinkClick = (e, route, sectionId) => {
    e.preventDefault();
    if (navigate) {
      navigate(route, sectionId);
    }
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info & Direct Contact Hub */}
          <div className="footer-brand">
            <a
              href="/"
              className="brand-logo"
              onClick={(e) => handleLinkClick(e, 'home')}
            >
              <span className="brand-mark">
                ✦<span className="dot-accent"></span>
              </span>
              <span className="brand-name">{BRAND_CONFIG.name}</span>
            </a>

            <p className="footer-tagline">
              Engineering high-performance web platforms, fluid mobile apps, autonomous AI pipelines, and modern cloud systems for founders and forward-thinking enterprises.
            </p>

            <div className="footer-status-chip">
              <span className="status-live-dot"></span>
              <span>Accepting New Client Sprints & Retainers</span>
            </div>

            {/* Direct Contact Card */}
            <div className="footer-quick-contact-box">
              <a href={SOCIAL_LINKS.email} className="footer-quick-row">
                <span className="quick-icon">✉️</span>
                <div className="quick-info">
                  <span className="quick-label">Project Inquiries</span>
                  <span className="quick-value">{BRAND_CONFIG.contactEmail}</span>
                </div>
              </a>

              <a href={SOCIAL_LINKS.supportEmail} className="footer-quick-row">
                <span className="quick-icon">🛠️</span>
                <div className="quick-info">
                  <span className="quick-label">Client Support</span>
                  <span className="quick-value">{BRAND_CONFIG.supportEmail}</span>
                </div>
              </a>

              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-quick-row"
              >
                <span className="quick-icon">💬</span>
                <div className="quick-info">
                  <span className="quick-label">Direct Line / WhatsApp</span>
                  <span className="quick-value">{BRAND_CONFIG.phone}</span>
                </div>
              </a>
            </div>
          </div>

          {/* Navigation Groups */}
          <div className="footer-nav-groups">
            <div className="footer-nav-group">
              <h4>Solutions & Services</h4>
              <ul>
                <li>
                  <a href="/services" onClick={(e) => handleLinkClick(e, 'services')}>
                    Website & Web Platforms →
                  </a>
                </li>
                <li>
                  <a href="/services" onClick={(e) => handleLinkClick(e, 'services')}>
                    Mobile App Development →
                  </a>
                </li>
                <li>
                  <a href="/services" onClick={(e) => handleLinkClick(e, 'services')}>
                    Autonomous AI Workflows →
                  </a>
                </li>
                <li>
                  <a href="/services" onClick={(e) => handleLinkClick(e, 'services')}>
                    Hospitality & Café POS →
                  </a>
                </li>
                <li>
                  <a href="/services" onClick={(e) => handleLinkClick(e, 'services')}>
                    UI/UX Design Systems →
                  </a>
                </li>
                <li>
                  <a href="/services" onClick={(e) => handleLinkClick(e, 'services')}>
                    Cloud DevOps & Infrastructure →
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-nav-group">
              <h4>Company & Work</h4>
              <ul>
                <li>
                  <a href="/" onClick={(e) => handleLinkClick(e, 'home')}>
                    Home Overview
                  </a>
                </li>
                <li>
                  <a href="/projects" onClick={(e) => handleLinkClick(e, 'projects')}>
                    Featured Case Studies →
                  </a>
                </li>
                <li>
                  <a href="/#process" onClick={(e) => handleLinkClick(e, 'home', 'process')}>
                    Our 4-Stage Process
                  </a>
                </li>
                <li>
                  <a href="/#why-us" onClick={(e) => handleLinkClick(e, 'home', 'why-us')}>
                    Why Choose Working Dots
                  </a>
                </li>
                <li>
                  <a href="/#about" onClick={(e) => handleLinkClick(e, 'home', 'about')}>
                    About the Engineering Studio
                  </a>
                </li>
                <li>
                  <a href="/#contact" onClick={(e) => handleLinkClick(e, 'home', 'contact')}>
                    Start a Project / Consultation
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-nav-group">
              <h4>Connect & Direct</h4>
              <ul>
                <li>
                  <a href={SOCIAL_LINKS.email}>
                    ✉️ {BRAND_CONFIG.contactEmail}
                  </a>
                </li>
                <li>
                  <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
                    💬 WhatsApp: {BRAND_CONFIG.phone}
                  </a>
                </li>
                <li>
                  <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer">
                    📸 Instagram: @workingdots.in
                  </a>
                </li>
                <li>
                  <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer">
                    🔗 LinkedIn: /company/workingdots
                  </a>
                </li>
                <li>
                  <span className="footer-location-text">
                    📍 {BRAND_CONFIG.location}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} {BRAND_CONFIG.name} ({BRAND_CONFIG.domain}). All rights reserved.</div>
          <div className="footer-bottom-meta">
            <span>Production-Grade Architecture</span>
            <span>•</span>
            <span>Deterministic AI Pipelines</span>
            <span>•</span>
            <span>{BRAND_CONFIG.uptimeSLA} SLA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
