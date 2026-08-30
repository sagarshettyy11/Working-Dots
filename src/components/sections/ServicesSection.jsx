import React from 'react';

export default function ServicesSection() {
  const services = [
    {
      id: 'web',
      tag: 'Web & Platforms',
      title: 'Website Development',
      desc: 'We engineer high-performance, conversion-focused websites and scalable web applications designed around your business goals.',
      deliverables: ['React & Next.js Web Apps', 'Custom CMS & Dashboards', 'Lightning Fast Page Load', 'SEO & Conversion Architecture', 'REST & GraphQL APIs'],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      ),
    },
    {
      id: 'mobile',
      tag: 'iOS & Android',
      title: 'Mobile App Development',
      desc: 'Transform your product idea into fluid iOS and Android applications with native 60fps performance and intuitive touch mechanics.',
      deliverables: ['iOS & Android Native Apps', 'React Native & Flutter', 'Offline Synchronization', 'In-App Purchases & Payments', 'App Store Deployment'],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
    },
    {
      id: 'ai',
      tag: 'AI & Automation',
      title: 'AI Automation & Workflows',
      desc: 'Eliminate repetitive manual bottlenecks, ticket queues, and data entry errors with custom autonomous AI pipelines.',
      deliverables: ['n8n & Make Pipelines', 'Custom AI Support Agents', 'Automated Lead Enrichment', 'Multi-Platform Sync', 'Deterministic Fail-Safes'],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
        </svg>
      ),
    },
    {
      id: 'whatsapp',
      tag: 'Conversational Commerce',
      title: 'WhatsApp Ordering Systems',
      desc: 'Conversational commerce that converts — no app downloads, no friction. Automated digital catalogs, instant order management, and direct payment processing.',
      deliverables: ['Automated WhatsApp Catalog', '1-Click Direct Ordering', 'Instant Payment Integration', 'Live Kitchen / CRM Sync', 'Customer Retention Broadcasts'],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      ),
    },
    {
      id: 'restaurant',
      tag: 'Hospitality Tech',
      title: 'Restaurant & Café Suites',
      desc: 'Digital menus, ordering, reservations, loyalty — fully branded, fully managed to elevate customer dining and takeout experiences.',
      deliverables: ['Interactive QR Digital Menus', 'Table Ordering & Takeaway', 'Reservation & Booking Engine', 'Automated Customer Loyalty', 'Custom Branded POS Integrations'],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2v20"></path>
          <path d="M6 2v20"></path>
          <path d="M2 6h8"></path>
          <path d="M2 10h8"></path>
          <path d="M2 14h8"></path>
          <path d="M2 18h8"></path>
        </svg>
      ),
    },
    {
      id: 'design',
      tag: 'UI/UX Design',
      title: 'UI/UX Design Systems',
      desc: 'Clean, distraction-free interfaces engineered to turn first-time visitors into retained, delighted power users.',
      deliverables: ['Figma Design Systems', 'Interactive Prototypes', 'User Journey Mapping', 'UX Audits & Redesigns', 'Design-to-Code Handoff'],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
          <path d="M2 2l7.586 7.586"></path>
          <circle cx="11" cy="11" r="2"></circle>
        </svg>
      ),
    },
    {
      id: 'branding-growth',
      tag: 'Identity & Growth',
      title: 'Branding & Social Media Growth',
      desc: 'Identity systems, logos, and visual language that make you instantly recognizable, paired with automated content pipelines that drive real digital growth.',
      deliverables: ['Brand Identity Systems & Logos', 'Visual Language & Guidelines', 'Content Distribution Pipelines', 'Audience Growth Strategies', 'Performance & ROI Analytics'],
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="section-wrapper" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">
            <span className="section-eyebrow">OUR CORE SERVICES</span>
          </div>
          <h2>End-to-End Digital Solutions Under One Roof</h2>
          <p>
            Everything required to design, launch, automate, and grow your digital presence without managing fragmented contractors.
          </p>
        </div>

        <div className="services-grid">
          {services.map((srv) => (
            <div key={srv.id} className="service-card">
              <div>
                <div className="service-card-header">
                  <div className="service-icon-box">{srv.icon}</div>
                  <span className="service-tag">{srv.tag}</span>
                </div>
                <h3 className="service-title">{srv.title}</h3>
                <p className="service-description">{srv.desc}</p>
              </div>

              <div className="service-deliverables">
                {srv.deliverables.map((item, idx) => (
                  <span key={idx} className="deliverable-pill">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
