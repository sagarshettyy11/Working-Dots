import React, { useState } from 'react';
import apexPreview from '../../assets/images/apex_logistics_preview.jpg';
import velocePreview from '../../assets/images/veloce_pulse_preview.jpg';
import kromaPreview from '../../assets/images/kroma_studio_preview.jpg';
import omniflowPreview from '../../assets/images/omniflow_preview.jpg';

import apexDeepdive from '../../assets/images/apex_logistics_deepdive.jpg';
import veloceDeepdive from '../../assets/images/veloce_pulse_deepdive.jpg';
import kromaDeepdive from '../../assets/images/kroma_studio_deepdive.jpg';
import omniflowDeepdive from '../../assets/images/omniflow_deepdive.jpg';

export default function PortfolioSection({ onSelectCaseStudy }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const portfolioProjects = [
    {
      id: 1,
      category: 'AI Automations',
      tag: 'AI Workflows & CRM',
      title: 'Apex Global Logistics — Autonomous Dispatch Pipeline',
      metric: '42 hrs/week saved',
      image: apexPreview,
      deepdiveImage: apexDeepdive,
      problem: 'Manual driver dispatching and invoice reconciliation took 6 hours daily with 8% billing error rates.',
      solution: 'Engineered an autonomous n8n + OpenAI workflow syncing WhatsApp driver check-ins directly with PostgreSQL and Stripe invoicing.',
      tech: ['n8n', 'Python', 'PostgreSQL', 'WhatsApp API', 'OpenAI'],
      fullDetails: {
        client: 'Apex Global Freight',
        timeline: '2 Weeks Delivery',
        results: [
          '100% automated invoice reconciliation',
          'Driver response time dropped from 35 mins to 15 seconds',
          'Zero manual data entry errors',
        ],
      },
    },
    {
      id: 2,
      category: 'Mobile Apps',
      tag: 'Mobile & HealthTech',
      title: 'Veloce Pulse — Precision Fitness & Nutrition Coach',
      metric: '4.9★ App Store Rating',
      image: velocePreview,
      deepdiveImage: veloceDeepdive,
      problem: 'Clients abandoned fitness routines due to slow meal tracking interfaces and lack of offline workout logging.',
      solution: 'Built a 60fps React Native application with offline-first SQLite sync, AI meal vision estimation, and Apple HealthKit integration.',
      tech: ['React Native', 'TypeScript', 'Node.js', 'FastAPI', 'HealthKit'],
      fullDetails: {
        client: 'Veloce Health Corp',
        timeline: '3 Weeks Delivery',
        results: [
          '24,000+ Active Monthly Users',
          '94% workout completion retention',
          'Under 50ms interaction latency',
        ],
      },
    },
    {
      id: 3,
      category: 'Web Development',
      tag: 'Web & SaaS Platform',
      title: 'Kroma Studio — Modern Creator Collaboration Suite',
      metric: '100/100 Performance Score',
      image: kromaPreview,
      deepdiveImage: kromaDeepdive,
      problem: 'Slow legacy WordPress architecture causing 4.2s load times and 60% mobile bounce rate for digital asset downloads.',
      solution: 'Engineered a bespoke Next.js web application with edge-rendered assets, real-time collaboration canvas, and automated Stripe billing.',
      tech: ['Next.js', 'Modern CSS', 'Supabase', 'Stripe', 'Vercel Edge'],
      fullDetails: {
        client: 'Kroma Digital Collective',
        timeline: '10 Days Turnaround',
        results: [
          'Load times dropped from 4.2s to 0.4s',
          '3.1x boost in paid subscription conversions',
          'Clean headless CMS integration',
        ],
      },
    },
    {
      id: 4,
      category: 'AI Automations',
      tag: 'AI Workflow & Internal Systems',
      title: 'OmniFlow — Enterprise Knowledge Bot & Ticket Automator',
      metric: '72% Tier-1 Support Automated',
      image: omniflowPreview,
      deepdiveImage: omniflowDeepdive,
      problem: 'Support team was overwhelmed answering repetitive product questions and manually routing bug reports to engineers.',
      solution: 'Built an internal AI copilot trained on company technical documentation with intelligent Slack triage and Zendesk auto-routing.',
      tech: ['Python', 'FastAPI', 'Slack API', 'Vector Embeddings', 'Make.com'],
      fullDetails: {
        client: 'OmniCloud Systems',
        timeline: '12 Days Deployment',
        results: [
          'Instant 24/7 client response times',
          'Engineers receive pre-diagnosed bug reports',
          '99.9% uptime reliability',
        ],
      },
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="work" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">
            <span className="section-eyebrow">PORTFOLIO & CASE STUDIES</span>
          </div>
          <h2>Real Products. Real Workflows. Real Impact.</h2>
          <p>
            Explore how we’ve helped founders and operators eliminate bottlenecks, build modern software, and scale with confidence.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {['All', 'Web Development', 'Mobile Apps', 'AI Automations'].map((tab) => (
            <button
              key={tab}
              className={`filter-tab ${activeFilter === tab ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card" onClick={() => onSelectCaseStudy(project)}>
              <div className="project-preview-frame">
                <div className="mockup-header-bar">
                  <span className="mockup-dot red"></span>
                  <span className="mockup-dot yellow"></span>
                  <span className="mockup-dot green"></span>
                  <span className="mockup-url-chip">
                    {project.category} • {project.tech[0]}
                  </span>
                  <span className="mockup-action-hint">Click to expand ↗</span>
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
                <p className="project-problem-solution">{project.solution}</p>

                <div className="project-tech-tags">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>

                <button
                  className="btn btn-secondary btn-sm"
                  style={{ alignSelf: 'flex-start' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onSelectCaseStudy(project);
                  }}
                >
                  View Case Study Deep-Dive →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
