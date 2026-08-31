import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info & Direct Contact Hub */}
          <div className="footer-brand">
            <a href="#" className="brand-logo">
              <span className="brand-mark">
                ✦<span className="dot-accent"></span>
              </span>
              Working Dots
            </a>
            
            <p className="footer-tagline">
              Transforming ambitious ideas into world-class digital products, intuitive experiences, and autonomous operations.
            </p>

            <div className="footer-status-chip">
              <span className="status-live-dot"></span>
              <span>Accepting New Projects & Sprints</span>
            </div>

            {/* Structured Direct Contact Micro-Card */}
            <div className="footer-quick-contact-box">
              <a href="mailto:contact@workingdots.in" className="footer-quick-row">
                <span className="quick-icon">✉️</span>
                <div className="quick-info">
                  <span className="quick-label">Project Inquiries</span>
                  <span className="quick-value">contact@workingdots.in</span>
                </div>
              </a>

              <a href="mailto:support@workingdots.in" className="footer-quick-row">
                <span className="quick-icon">🛠️</span>
                <div className="quick-info">
                  <span className="quick-label">Client Support</span>
                  <span className="quick-value">support@workingdots.in</span>
                </div>
              </a>

              <a href="https://wa.me/916363657381" target="_blank" rel="noopener noreferrer" className="footer-quick-row">
                <span className="quick-icon">💬</span>
                <div className="quick-info">
                  <span className="quick-label">Direct Line / WhatsApp</span>
                  <span className="quick-value">+91 63636 57381</span>
                </div>
              </a>
            </div>
          </div>

          {/* Navigation Groups */}
          <div className="footer-nav-groups">
            <div className="footer-nav-group">
              <h4>Services</h4>
              <ul>
                <li><a href="#services">Website Development</a></li>
                <li><a href="#services">Mobile App Development</a></li>
                <li><a href="#services">AI Automation & Workflows</a></li>
                <li><a href="#services">Restaurant & Café Suites</a></li>
                <li><a href="#services">UI/UX Design Systems</a></li>
                <li><a href="#services">Branding & Social Growth</a></li>
              </ul>
            </div>

            <div className="footer-nav-group">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Our Story</a></li>
                <li><a href="#work">Featured Work</a></li>
                <li><a href="#process">How We Work</a></li>
                <li><a href="#why-us">Why Choose Us</a></li>
                {/* <li><a href="#careers">Careers & Open Roles</a></li> */}
                <li><a href="#contact">Start a Project</a></li>
              </ul>
            </div>

            <div className="footer-nav-group">
              <h4>Connect</h4>
              <ul>
                <li>
                  <a href="mailto:contact@workingdots.in">
                    ✉️ contact@workingdots.in
                  </a>
                </li>
                <li>
                  <a href="mailto:support@workingdots.in">
                    🛠️ support@workingdots.in
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/916363657381" target="_blank" rel="noopener noreferrer">
                    💬 WhatsApp: +91 63636 57381
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/workingdots.in" target="_blank" rel="noopener noreferrer">
                    📸 Instagram: @workingdots.in
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    🔗 LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Working Dots (workingdots.in). All rights reserved.</div>
          <div className="footer-bottom-meta">
            <span>Clean Light Architecture</span>
            <span>•</span>
            <span>Deterministic AI Workflows</span>
            <span>•</span>
            <span>contact@workingdots.in</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
