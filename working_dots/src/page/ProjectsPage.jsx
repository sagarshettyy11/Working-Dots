import React, { useState } from 'react';
import { PROJECTS_DATA } from '../lib/projects-data';
import CaseStudyModal from '../components/sections/CaseStudyModal';
import { getWhatsAppUrl } from '../lib/utils';

export default function ProjectsPage({ navigate }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const filterTabs = ['All', 'Web Development', 'Mobile Apps', 'AI Automations'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <div className="projects-page-wrapper">
      {/* Projects Page Hero */}
      <section className="page-hero-section">
        <div className="container">
          <div className="page-hero-content">
            <div className="eyebrow">
              <span className="section-eyebrow">PORTFOLIO & CASE STUDIES</span>
            </div>
            <h1 className="page-hero-title">
              Real Products. Real Workflows. <br />
              <span className="highlight">Measurable Business Impact.</span>
            </h1>
            <p className="page-hero-subtitle">
              Take an inside look at the software architectures, mobile apps, and autonomous AI automation pipelines we’ve engineered for clients worldwide.
            </p>

            <div className="page-hero-stats-bar">
              <div className="hero-stat-box">
                <span className="stat-num">140+</span>
                <span className="stat-lbl">Shipped Systems</span>
              </div>
              <div className="stat-divider"></div>
              <div className="hero-stat-box">
                <span className="stat-num">40+ hrs</span>
                <span className="stat-lbl">Avg Weekly Time Saved</span>
              </div>
              <div className="stat-divider"></div>
              <div className="hero-stat-box">
                <span className="stat-num">380ms</span>
                <span className="stat-lbl">Avg Page Load Speed</span>
              </div>
              <div className="stat-divider"></div>
              <div className="hero-stat-box">
                <span className="stat-num">4.9 / 5.0</span>
                <span className="stat-lbl">App Store Quality Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section className="section-wrapper" style={{ paddingTop: '40px', backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          {/* Filter Tabs */}
          <div className="category-filter-bar" role="tablist" aria-label="Project categories">
            {filterTabs.map((tab) => (
              <button
                key={tab}
                className={`category-filter-pill ${activeFilter === tab ? 'active' : ''}`}
                onClick={() => setActiveFilter(tab)}
                role="tab"
                aria-selected={activeFilter === tab}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="portfolio-grid">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => setSelectedCaseStudy(project)}
              >
                <div className="project-preview-frame">
                  <div className="mockup-header-bar">
                    <span className="mockup-dot red"></span>
                    <span className="mockup-dot yellow"></span>
                    <span className="mockup-dot green"></span>
                    <span className="mockup-url-chip">
                      {project.category} • {project.tech[0]}
                    </span>
                    <span className="mockup-action-hint">Click to inspect ↗</span>
                  </div>
                  <div className="project-img-wrapper">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-preview-img"
                      loading="lazy"
                    />
                    <div className="project-preview-overlay">
                      <span className="overlay-badge">View Case Study Deep-Dive →</span>
                    </div>
                  </div>
                </div>

                <div className="project-info">
                  <div className="project-category-row">
                    <span className="project-category-badge">{project.tag}</span>
                    <span className="project-metric-badge">★ {project.metric}</span>
                  </div>

                  <h3 className="project-title">{project.title}</h3>

                  <div className="project-problem-solution">
                    <div className="card-micro-label">Solution Architecture:</div>
                    <p>{project.solution}</p>
                  </div>

                  <div className="project-tech-tags">
                    {project.tech.map((t, idx) => (
                      <span key={idx} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="project-card-actions">
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCaseStudy(project);
                      }}
                    >
                      View Full Architecture Deep-Dive →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Deep Dive Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* Client Testimonials Banner */}
      <section className="section-wrapper" style={{ backgroundColor: 'var(--bg-canvas)' }}>
        <div className="container">
          <div className="section-header">
            <div className="eyebrow">
              <span className="section-eyebrow">WHAT OUR CLIENTS SAY</span>
            </div>
            <h2>Trusted by Visionary Founders & Operators</h2>
            <p>Here is what happens when engineering excellence meets rapid execution.</p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-quote">
                "Working Dots built an autonomous dispatch automation that saved our logistics team 40+ hours every single week. They delivered ahead of schedule with zero bugs."
              </p>
              <div className="testimonial-author-box">
                <div className="author-avatar">MV</div>
                <div className="author-info">
                  <h4>Marcus Vance</h4>
                  <span>VP of Operations, Apex Global Freight</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-quote">
                "Our mobile app feels faster than Apple native apps. The offline sync and HealthKit integration works flawlessly. Working Dots is our go-to engineering studio."
              </p>
              <div className="testimonial-author-box">
                <div className="author-avatar">ER</div>
                <div className="author-info">
                  <h4>Elena Rostova</h4>
                  <span>Co-Founder & CEO, Veloce Health</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-quote">
                "Our SaaS load time dropped from 4.2s to under 400ms, and subscription conversion tripled immediately. Sagar and the Working Dots team are extraordinary builders."
              </p>
              <div className="testimonial-author-box">
                <div className="author-avatar">DC</div>
                <div className="author-info">
                  <h4>David Chen</h4>
                  <span>Founder, Kroma Digital Collective</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Page Bottom CTA Hub */}
      <section className="section-wrapper projects-cta-section" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="cta-banner-card">
            <div className="cta-banner-content">
              <span className="section-eyebrow" style={{ color: 'var(--brand-dot)' }}>HAVE A SIMILAR PROJECT?</span>
              <h2>Let’s Build Something Remarkable Together</h2>
              <p>
                Get a tailored technical roadmap, architecture breakdown, and transparent timeline for your project in under 12 hours.
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
                  Start Your Project →
                </a>
                <a
                  href={getWhatsAppUrl("Hi Working Dots, I reviewed your case studies and would like to build a project.")}
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
