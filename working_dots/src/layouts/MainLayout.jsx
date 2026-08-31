import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { SOCIAL_LINKS } from '../lib/constants';

export default function MainLayout({ children, currentRoute, navigate }) {
  return (
    <div className="app-layout">
      {/* Top Navigation */}
      <Navbar currentRoute={currentRoute} navigate={navigate} />

      {/* Main Content View */}
      <main className="main-content-viewport">
        {children}
      </main>

      {/* Footer */}
      <Footer navigate={navigate} />

      {/* Floating Action Button for Instant WhatsApp Contact */}
      <a
        href={SOCIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Chat with Working Dots on WhatsApp"
        title="Instant WhatsApp Support"
      >
        <span className="wa-btn-icon">💬</span>
        <span className="wa-btn-text">Chat on WhatsApp</span>
        <span className="wa-status-dot"></span>
      </a>
    </div>
  );
}
