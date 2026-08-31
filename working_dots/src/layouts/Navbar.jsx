import React, { useState, useEffect, useRef } from 'react';
import { useScroll } from '../hooks/use-scroll';
import { SOCIAL_LINKS, BRAND_CONFIG } from '../lib/constants';

export default function Navbar({ currentRoute, navigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isScrolled } = useScroll(30);

  // Track the active section on the home page ('home', 'process', 'why-us', 'about')
  const [activeSection, setActiveSection] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.replace('#', '');
      if (['process', 'why-us', 'about'].includes(hash)) {
        return hash;
      }
    }
    return 'home';
  });

  const isManualScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  // ScrollSpy to update the active tab as the user scrolls through sections
  useEffect(() => {
    if (currentRoute !== 'home') return;

    const handleScrollSpy = () => {
      if (isManualScrollingRef.current) return;

      const scrollY = window.scrollY;

      // When scrolled near the very top, highlight 'Home'
      if (scrollY < 200) {
        setActiveSection('home');
        return;
      }

      // If scrolled near the bottom of the page, highlight 'About'
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80;
      if (isAtBottom) {
        setActiveSection('about');
        return;
      }

      // Check sections from bottom to top
      const sectionIds = ['about', 'why-us', 'process'];
      let current = 'home';

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // Threshold when section top is scrolled near or above navbar level
          if (rect.top <= 240) {
            current = id;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();

    return () => {
      window.removeEventListener('scroll', handleScrollSpy);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [currentRoute]);

  // Close mobile menu on window resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, route, sectionId = null) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (route === 'home') {
      if (sectionId) {
        setActiveSection(sectionId);
      } else {
        setActiveSection('home');
      }
    }

    // Suppress scrollspy listener temporarily while smooth scroll animation runs
    isManualScrollingRef.current = true;
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      isManualScrollingRef.current = false;
    }, 900);

    if (navigate) {
      navigate(route, sectionId);
    }
  };

  return (
    <>
      <header className={`site-header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="container nav-container">
          {/* Brand Logo */}
          <a
            href="/"
            className="brand-logo"
            onClick={(e) => handleNavClick(e, 'home')}
            aria-label="Working Dots Home"
          >
            <span className="brand-mark">
              ✦<span className="dot-accent"></span>
            </span>
            <span className="brand-name">{BRAND_CONFIG.name}</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-links">
              <li>
                <a
                  href="/"
                  className={`nav-link ${currentRoute === 'home' && activeSection === 'home' ? 'active-link' : ''}`}
                  onClick={(e) => handleNavClick(e, 'home')}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className={`nav-link ${currentRoute === 'services' ? 'active-link' : ''}`}
                  onClick={(e) => handleNavClick(e, 'services')}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/projects"
                  className={`nav-link ${currentRoute === 'projects' ? 'active-link' : ''}`}
                  onClick={(e) => handleNavClick(e, 'projects')}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/#process"
                  className={`nav-link ${currentRoute === 'home' && activeSection === 'process' ? 'active-link' : ''}`}
                  onClick={(e) => handleNavClick(e, 'home', 'process')}
                >
                  How We Work
                </a>
              </li>
              <li>
                <a
                  href="/#why-us"
                  className={`nav-link ${currentRoute === 'home' && activeSection === 'why-us' ? 'active-link' : ''}`}
                  onClick={(e) => handleNavClick(e, 'home', 'why-us')}
                >
                  Why Us
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className={`nav-link ${currentRoute === 'home' && activeSection === 'about' ? 'active-link' : ''}`}
                  onClick={(e) => handleNavClick(e, 'home', 'about')}
                >
                  About
                </a>
              </li>
            </ul>
          </nav>

          {/* Nav Actions */}
          <div className="nav-actions">
            <a
              href="#contact"
              className="btn btn-primary btn-sm nav-contact-btn"
              onClick={(e) => handleNavClick(e, 'home', 'contact')}
            >
              Start a Project →
            </a>

            {/* Mobile Hamburger Button */}
            <button
              className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation Overlay */}
      <div
        className={`mobile-drawer-backdrop ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <a
            href="/"
            className="brand-logo"
            onClick={(e) => handleNavClick(e, 'home')}
          >
            <span className="brand-mark">
              ✦<span className="dot-accent"></span>
            </span>
            <span className="brand-name">{BRAND_CONFIG.name}</span>
          </a>
          <button
            className="drawer-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation"
          >
            ✕
          </button>
        </div>

        <div className="mobile-drawer-body">
          <div className="mobile-drawer-section-label">Navigation</div>
          <ul className="mobile-nav-links">
            <li>
              <a
                href="/"
                className={`mobile-nav-link ${currentRoute === 'home' && activeSection === 'home' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'home')}
              >
                <span className="mobile-link-icon">🏠</span>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a
                href="/services"
                className={`mobile-nav-link ${currentRoute === 'services' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'services')}
              >
                <span className="mobile-link-icon">⚙️</span>
                <span>Services & Solutions</span>
                <span className="mobile-link-tag">Full Catalog</span>
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className={`mobile-nav-link ${currentRoute === 'projects' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'projects')}
              >
                <span className="mobile-link-icon">💼</span>
                <span>Projects & Case Studies</span>
                <span className="mobile-link-tag">Portfolio</span>
              </a>
            </li>
            <li>
              <a
                href="/#process"
                className={`mobile-nav-link ${currentRoute === 'home' && activeSection === 'process' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'home', 'process')}
              >
                <span className="mobile-link-icon">🔄</span>
                <span>How We Work (Process)</span>
              </a>
            </li>
            <li>
              <a
                href="/#why-us"
                className={`mobile-nav-link ${currentRoute === 'home' && activeSection === 'why-us' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'home', 'why-us')}
              >
                <span className="mobile-link-icon">🛡️</span>
                <span>Why Choose Working Dots</span>
              </a>
            </li>
            <li>
              <a
                href="/#about"
                className={`mobile-nav-link ${currentRoute === 'home' && activeSection === 'about' ? 'active' : ''}`}
                onClick={(e) => handleNavClick(e, 'home', 'about')}
              >
                <span className="mobile-link-icon">👥</span>
                <span>About Our Team</span>
              </a>
            </li>
          </ul>

          <div className="mobile-drawer-cta-group">
            <a
              href="#contact"
              className="btn btn-primary btn-block"
              onClick={(e) => handleNavClick(e, 'home', 'contact')}
            >
              Start a Project Now →
            </a>

            <a
              href={SOCIAL_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-block mobile-wa-btn"
            >
              💬 WhatsApp Direct Chat
            </a>
          </div>

          <div className="mobile-drawer-contact-info">
            <div className="mobile-contact-item">
              <span className="contact-label">Direct Email</span>
              <a href={`mailto:${BRAND_CONFIG.contactEmail}`}>{BRAND_CONFIG.contactEmail}</a>
            </div>
            <div className="mobile-contact-item">
              <span className="contact-label">Direct Line</span>
              <a href={`tel:${BRAND_CONFIG.phone}`}>{BRAND_CONFIG.phone}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
