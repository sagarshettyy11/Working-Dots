import React, { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-container">
        <a href="#" className="brand-logo">
          <span className="brand-mark">
            ✦<span className="dot-accent"></span>
          </span>
          Working Dots
        </a>

        <nav>
          <ul className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><a href="#services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Services</a></li>
            <li><a href="#work" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Work</a></li>
            <li><a href="#process" className="nav-link" onClick={() => setMobileMenuOpen(false)}>How We Work</a></li>
            <li><a href="#why-us" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Why Us</a></li>
            <li><a href="#careers" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Careers</a></li>
            <li><a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a></li>
          </ul>
        </nav>

        <div className="nav-actions">
          <a href="#contact" className="btn btn-primary btn-sm">
            Get in Touch
          </a>
          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12"></path>
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18"></path>
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
