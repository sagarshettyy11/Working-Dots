import React, { useState } from 'react';
import { SERVICES_DATA } from '../lib/services-data';
import { BRAND_CONFIG, SOCIAL_LINKS } from '../lib/constants';
import { getWhatsAppUrl } from '../lib/utils';

export default function ServicesPage({ navigate }) {
  const [activeCategory, setActiveCategory] = useState('All Solutions');
  const [selectedSolutionGoal, setSelectedSolutionGoal] = useState('web');
  const [openFaq, setOpenFaq] = useState(null);

  const categories = [
    'All Solutions',
    'Web Platforms',
    'Mobile Apps',
    'AI & Automations',
    'Enterprise & Hospitality Tech',
    'UI/UX Design Systems',
    'Cloud & DevOps',
  ];

  const filteredServices = activeCategory === 'All Solutions'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  const solutionEstimatorConfigs = {
    web: {
      title: 'High-Performance Web Platform & SaaS',
      stack: 'React 19, Next.js 15, PostgreSQL, Supabase, Tailwind, Vercel Edge',
      timeline: '10–14 Days',
      deliverables: ['Custom Web App', 'Admin Dashboard', 'Stripe Billing', 'SEO Optimization', '100% Lighthouse Score'],
      recommendation: 'Ideal for startups, SaaS founders, and businesses needing a sub-second web platform with edge deployment.',
    },
    mobile: {
      title: 'Cross-Platform iOS & Android Mobile Suite',
      stack: 'React Native, Expo EAS, Node.js / FastAPI, SQLite Offline Sync, Apple HealthKit',
      timeline: '2–3 Weeks',
      deliverables: ['iOS & Android App', 'Offline First Sync', 'Push Notifications', 'App Store Compliance', 'In-App Purchases'],
      recommendation: 'Perfect for consumer apps, mobile-first marketplaces, and fitness/health tracking platforms.',
    },
    ai: {
      title: 'Autonomous AI Agents & n8n Enterprise Workflows',
      stack: 'n8n, Python, OpenAI GPT-4o, LangChain, WhatsApp API, PostgreSQL',
      timeline: '5–10 Days',
      deliverables: ['Custom n8n Pipeline', 'WhatsApp CRM Bot', 'Auto Invoice Reconciliation', 'Slack DevOps Copilot', 'Fail-Safe Logic'],
      recommendation: 'Engineered for operations teams drowning in manual ticket queues, dispatch routing, or data entry.',
    },
    hospitality: {
      title: 'Hospitality, Café & Multi-Location QR Ordering POS',
      stack: 'React, Node.js, WebSockets, Thermal Printer API, WhatsApp Direct Orders, Stripe/Razorpay',
      timeline: '3–7 Days',
      deliverables: ['Dynamic QR Menu', 'Kitchen Display System', 'Direct Ordering Hub', 'Customer Loyalty Bot', 'Zero 3rd-Party Fees'],
      recommendation: 'Designed for restaurants, cloud kitchens, and cafes wanting to keep 100% of their takeout & delivery margins.',
    },
    design: {
      title: 'Production Figma Design System & UX Blueprint',
      stack: 'Figma Tokens, Interactive Prototyping, Atomic Design Principles, WCAG AAA Guidelines',
      timeline: '7–10 Days',
      deliverables: ['Design Token Library', 'Interactive Clickable Prototype', 'User Journey Maps', 'CSS Code Export Sync', 'Light/Dark Modes'],
      recommendation: 'Crucial for software founders preparing for high-stakes seed fundraising or platform redesigns.',
    },
  };

  const faqs = [
    {
      q: 'How fast can Working Dots deliver a production-ready application?',
      a: 'Most standard web platforms, AI pipelines, and mobile MVPs are deployed within 7 to 14 days. We work in dedicated, high-velocity sprints with daily progress visibility and preview builds.',
    },
    {
      q: 'Do I own 100% of the source code and intellectual property?',
      a: 'Yes, absolutely. You retain full 100% ownership of all source code, Figma design files, database architectures, and API keys. We transfer full repository ownership upon project completion with zero vendor lock-in.',
    },
    {
      q: 'Can Working Dots integrate with our existing tools and legacy database?',
      a: 'Yes. We build custom API connectors for PostgreSQL, MySQL, MongoDB, Salesforce, HubSpot, Stripe, Shopify, WhatsApp, and legacy ERP systems using secure RESTful and GraphQL protocols.',
    },
    {
      q: 'Do you provide post-launch maintenance, SLAs, and cloud support?',
      a: 'Yes. We offer continuous 99.9% uptime SLA retainers, 24/7 automated telemetry monitoring, security patch management, and ongoing feature sprint allocations.',
    },
  ];

  return (
    <div className="services-page-wrapper">
      {/* Services Page Hero */}
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero-content">
            <div className="eyebrow">
              <span className="section-eyebrow">ENTERPRISE IT SOLUTIONS & DIGITAL PRODUCT ENGINEERING</span>
            </div>
            <h1 className="page-hero-title">
              Full-Stack Digital Capabilities <br />
              <span className="highlight">Engineered for Massive Scale.</span>
            </h1>
            <p className="page-hero-subtitle">
              From edge-rendered web platforms and native mobile apps to autonomous AI automation pipelines and custom hospitality tech—we architect, deploy, and scale your digital systems under one unified roof.
            </p>

            <div className="page-hero-stats-bar">
              <div className="hero-stat-box">
                <span className="stat-num">{BRAND_CONFIG.projectsDelivered}</span>
                <span className="stat-lbl">Shipped Systems</span>
              </div>
              <div className="stat-divider"></div>
              <div className="hero-stat-box">
                <span className="stat-num">{BRAND_CONFIG.uptimeSLA}</span>
                <span className="stat-lbl">Uptime SLA</span>
              </div>
              <div className="stat-divider"></div>
              <div className="hero-stat-box">
                <span className="stat-num">{BRAND_CONFIG.avgTurnaroundDays} Days</span>
                <span className="stat-lbl">Average Sprint Turnaround</span>
              </div>
              <div className="stat-divider"></div>
              <div className="hero-stat-box">
                <span className="stat-num">100%</span>
                <span className="stat-lbl">In-House Senior Builders</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Catalog Main Section */}
      <section className="section-wrapper" style={{ paddingTop: '40px', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          {/* Category Filter Tabs */}
          <div className="category-filter-bar" role="tablist" aria-label="Service categories">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`category-filter-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Detailed Service Cards Grid */}
          <div className="services-catalog-grid">
            {filteredServices.map((service) => (
              <div key={service.id} className="service-catalog-card" id={service.slug}>
                <div className="service-catalog-header">
                  <div className="service-tag-row">
                    <span className="service-category-tag">{service.tag}</span>
                    <span className="service-sla-tag">⚡ {service.sla}</span>
                  </div>
                  <h2 className="service-catalog-title">{service.title}</h2>
                  <p className="service-catalog-short-desc">{service.shortDesc}</p>
                </div>

                <div className="service-catalog-body">
                  <p className="service-catalog-full-desc">{service.fullDesc}</p>

                  <div className="service-features-mini-grid">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="feature-mini-box">
                        <h4>{feat.title}</h4>
                        <p>{feat.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="service-deliverables-section">
                    <h4 className="deliverables-heading">Production Deliverables Included:</h4>
                    <div className="deliverables-two-column-list">
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="deliverable-item-row">
                          <span className="deliverable-check">✓</span>
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="service-tech-stack-row">
                    <span className="tech-stack-label">Core Architecture:</span>
                    <div className="tech-stack-pills">
                      {service.techStack.map((tech, idx) => (
                        <span key={idx} className="tech-pill-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="service-catalog-footer">
                  <a
                    href={getWhatsAppUrl(`Hi Working Dots, I'm interested in scoping a project for ${service.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Request Scope & Timeline →
                  </a>
                  <a
                    href="/#contact"
                    className="btn btn-secondary btn-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      if (navigate) navigate('home', 'contact');
                    }}
                  >
                    Book Discovery Call
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Solution Estimator & Blueprint Configurator */}
      <section className="section-wrapper solution-estimator-section" style={{ backgroundColor: 'var(--bg-canvas)' }}>
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="section-eyebrow">ENTERPRISE ARCHITECTURE CONFIGURATOR</span>
            </div>
            <h2>Match Your Goals to the Optimal Tech Blueprint</h2>
            <p>
              Select your primary engineering objective below to explore our production-ready cloud stack, sprint turnaround, and core deliverables.
            </p>
          </div>

          <div className="solution-estimator-dock">
            {/* Goal Selector Tabs */}
            <div className="estimator-goal-buttons" role="tablist">
              <button
                className={`goal-btn ${selectedSolutionGoal === 'web' ? 'active' : ''}`}
                onClick={() => setSelectedSolutionGoal('web')}
                role="tab"
                aria-selected={selectedSolutionGoal === 'web'}
              >
                <span className="goal-icon">🌐</span>
                <div className="goal-info">
                  <span className="goal-text">Web Platforms & SaaS</span>
                  <span className="goal-sub">React 19 • Next.js 15</span>
                </div>
              </button>
              <button
                className={`goal-btn ${selectedSolutionGoal === 'mobile' ? 'active' : ''}`}
                onClick={() => setSelectedSolutionGoal('mobile')}
                role="tab"
                aria-selected={selectedSolutionGoal === 'mobile'}
              >
                <span className="goal-icon">📱</span>
                <div className="goal-info">
                  <span className="goal-text">Mobile Apps (iOS/Android)</span>
                  <span className="goal-sub">React Native • SQLite</span>
                </div>
              </button>
              <button
                className={`goal-btn ${selectedSolutionGoal === 'ai' ? 'active' : ''}`}
                onClick={() => setSelectedSolutionGoal('ai')}
                role="tab"
                aria-selected={selectedSolutionGoal === 'ai'}
              >
                <span className="goal-icon">🤖</span>
                <div className="goal-info">
                  <span className="goal-text">AI Automations & Workflows</span>
                  <span className="goal-sub">n8n • GPT-4o • Python</span>
                </div>
              </button>
              <button
                className={`goal-btn ${selectedSolutionGoal === 'hospitality' ? 'active' : ''}`}
                onClick={() => setSelectedSolutionGoal('hospitality')}
                role="tab"
                aria-selected={selectedSolutionGoal === 'hospitality'}
              >
                <span className="goal-icon">🍽️</span>
                <div className="goal-info">
                  <span className="goal-text">Restaurant POS & QR Suite</span>
                  <span className="goal-sub">WebSockets • Zero 3rd-Party</span>
                </div>
              </button>
              <button
                className={`goal-btn ${selectedSolutionGoal === 'design' ? 'active' : ''}`}
                onClick={() => setSelectedSolutionGoal('design')}
                role="tab"
                aria-selected={selectedSolutionGoal === 'design'}
              >
                <span className="goal-icon">🎨</span>
                <div className="goal-info">
                  <span className="goal-text">UI/UX Design Systems</span>
                  <span className="goal-sub">Figma Tokens • Prototypes</span>
                </div>
              </button>
            </div>

            {/* Blueprint Output Box */}
            <div className="estimator-blueprint-output">
              <div className="blueprint-header-row">
                <div className="blueprint-title-wrap">
                  <div className="blueprint-status-indicator">
                    <span className="live-pulse-dot"></span>
                    <span className="blueprint-tag">Validated Architecture Blueprint</span>
                  </div>
                  <h3>{solutionEstimatorConfigs[selectedSolutionGoal].title}</h3>
                </div>
                <div className="blueprint-timeline-badge">
                  <span className="timeline-icon">⏱️</span>
                  <span>Turnaround: <strong>{solutionEstimatorConfigs[selectedSolutionGoal].timeline}</strong></span>
                </div>
              </div>

              <p className="blueprint-recommendation-text">
                {solutionEstimatorConfigs[selectedSolutionGoal].recommendation}
              </p>

              <div className="blueprint-details-grid">
                <div className="blueprint-col">
                  <h4>Recommended Production Architecture:</h4>
                  <div className="blueprint-stack-box">
                    <div className="stack-terminal-header">
                      <span className="terminal-dot red"></span>
                      <span className="terminal-dot yellow"></span>
                      <span className="terminal-dot green"></span>
                      <span className="terminal-title">architecture-spec.yaml</span>
                    </div>
                    <div className="stack-terminal-body">
                      <code>{solutionEstimatorConfigs[selectedSolutionGoal].stack}</code>
                    </div>
                  </div>
                </div>

                <div className="blueprint-col">
                  <h4>Included Deliverables in Sprint:</h4>
                  <ul className="blueprint-deliverables-list">
                    {solutionEstimatorConfigs[selectedSolutionGoal].deliverables.map((item, idx) => (
                      <li key={idx}>
                        <span className="deliverable-check-icon">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="blueprint-action-bar">
                <a
                  href={getWhatsAppUrl(`Hi Working Dots, I want to initiate a sprint for ${solutionEstimatorConfigs[selectedSolutionGoal].title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Initiate This Sprint on WhatsApp →
                </a>
                <span className="blueprint-guarantee">
                  🛡️ <strong>100% SLA Guarantee:</strong> Fixed milestone deadlines with daily progress visibility.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services FAQ Accordion */}
      <section className="section-wrapper" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div className="section-header">
            <div className="eyebrow">
              <span className="section-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2>Everything You Need to Know About Our Delivery</h2>
            <p>Clear, direct answers regarding our sprint model, code ownership, and technical SLAs.</p>
          </div>

          <div className="faq-accordion-list">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`faq-card ${isOpen ? 'open' : ''}`}>
                  <button
                    className="faq-question-btn"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className="faq-toggle-icon">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="faq-answer-content">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Page Bottom CTA Hub */}
      <section className="section-wrapper services-cta-section">
        <div className="container">
          <div className="cta-banner-card">
            <div className="cta-banner-content">
              <span className="section-eyebrow" style={{ color: 'var(--brand-dot)' }}>READY TO BUILD?</span>
              <h2>Let’s Turn Your Product Roadmap Into Reality</h2>
              <p>
                Schedule a 30-minute technical discovery call with our principal software architect. We’ll review your requirements and provide a free scope roadmap.
              </p>
              <div className="cta-banner-buttons">
                <a
                  href="/#contact"
                  className="btn btn-primary"
                  onClick={(e) => {
                    e.preventDefault();
                    if (navigate) navigate('home', 'contact');
                  }}
                >
                  Start a Project Now →
                </a>
                <a
                  href={SOCIAL_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
