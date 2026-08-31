import React from 'react';
import { SERVICES_DATA } from '../../lib/services-data';

export default function ServicesSection({ navigate }) {
  const handleExploreAll = (e) => {
    e.preventDefault();
    if (navigate) {
      navigate('services');
    }
  };

  const featuredServices = SERVICES_DATA.slice(0, 6);

  const getServiceIcon = (id) => {
    switch (id) {
      case 'web':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        );
      case 'mobile':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
            <line x1="12" y1="18" x2="12.01" y2="18"></line>
          </svg>
        );
      case 'ai':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
        );
      case 'hospitality':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2v20"></path>
            <path d="M6 2v20"></path>
            <path d="M2 6h8"></path>
            <path d="M2 10h8"></path>
            <path d="M2 14h8"></path>
            <path d="M2 18h8"></path>
          </svg>
        );
      case 'design':
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
            <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
            <path d="M2 2l7.586 7.586"></path>
            <circle cx="11" cy="11" r="2"></circle>
          </svg>
        );
      default:
        return (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
          </svg>
        );
    }
  };

  return (
    <section id="services" className="section-wrapper" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">
            <span className="section-eyebrow">OUR CORE CAPABILITIES</span>
          </div>
          <h2>End-to-End Digital Solutions Under One Roof</h2>
          <p>
            Everything required to design, launch, automate, and scale your digital systems without managing fragmented contractors.
          </p>
        </div>

        <div className="services-grid">
          {featuredServices.map((srv) => (
            <div key={srv.id} className="service-card">
              <div className="service-card-header">
                <div className="service-icon-box">{getServiceIcon(srv.id)}</div>
                <span className="service-tag">{srv.tag}</span>
              </div>

              <h3 className="service-title">{srv.title}</h3>
              <p className="service-description">{srv.shortDesc}</p>

              <div className="service-deliverables-wrap">
                <div className="deliverables-micro-title">Key Deliverables:</div>
                <div className="service-deliverables-list">
                  {srv.deliverables.slice(0, 5).map((item, idx) => (
                    <div key={idx} className="service-deliverable-point">
                      <span className="deliverable-check-mark">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="service-card-action-bar">
                <a
                  href="/services"
                  className="service-detail-link"
                  onClick={handleExploreAll}
                >
                  Explore Full Scope & Deliverables →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Services Action Bar */}
        <div className="section-bottom-action">
          <a
            href="/services"
            className="btn btn-primary"
            onClick={handleExploreAll}
          >
            Explore Complete Services Catalog & Solution Matcher →
          </a>
        </div>
      </div>
    </section>
  );
}
