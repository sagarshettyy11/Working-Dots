import React, { useState } from 'react';
import itTeamImg from '../../assets/images/it_team_collaborating.jpg';
import cloudDevopsImg from '../../assets/images/cloud_devops_engineers.jpg';
import uiuxDesignImg from '../../assets/images/uiux_design_review.jpg';
import { SOCIAL_LINKS } from '../../lib/constants';

export default function ITStudioSection() {
  const [activeTab, setActiveTab] = useState('engineering');

  const studioHighlights = [
    {
      id: 'engineering',
      tabTitle: '01. Full-Stack Engineering',
      headline: 'Engineered for Sub-Second Speeds & Massive Scale',
      desc: 'Our senior engineers build production React 19, Next.js, and cloud backends with 100% deterministic code, zero bloat, and automated CI/CD pipelines.',
      image: itTeamImg,
      badge: 'Core Engineering Hub',
      statLabel: 'Sprint Velocity',
      statValue: '2x Agency Speed',
      tags: ['Next.js 15', 'React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'FastAPI'],
      points: [
        'Dedicated senior builders on every sprint',
        'Daily GitHub commit visibility and preview deployments',
        'Clean modular CSS and component tokens',
      ],
    },
    {
      id: 'cloud',
      tabTitle: '02. Cloud Architecture & DevOps',
      headline: 'Bulletproof 99.9% Uptime & Autonomous Deployments',
      desc: 'We architect secure, scalable cloud foundations on AWS, Supabase, and Vercel Edge with automated failovers, encrypted backups, and 24/7 telemetry.',
      image: cloudDevopsImg,
      badge: 'DevOps & Reliability',
      statLabel: 'System SLA',
      statValue: '99.9% Live Uptime',
      tags: ['AWS Architecture', 'Docker & K8s', 'Supabase Edge', 'GitHub Actions', 'Datadog'],
      points: [
        'Multi-region high availability setup',
        'Zero-downtime rolling releases',
        'Automated database snapshots and security guardrails',
      ],
    },
    {
      id: 'design',
      tabTitle: '03. UI/UX & Design Systems',
      headline: 'Ergonomic Interfaces That Convert and Retain',
      desc: 'Design systems crafted in Figma with strict design tokens, responsive breakpoints, and interactive micro-animations that seamlessly match production CSS.',
      image: uiuxDesignImg,
      badge: 'Design System Lab',
      statLabel: 'Conversion Lift',
      statValue: '+3.1x Avg ROI',
      tags: ['Figma Tokens', 'Interactive Prototyping', 'WCAG AAA Design', 'Mobile Touch UX'],
      points: [
        'Figma tokens mapped directly to CSS variables',
        'Interactive clickable prototypes before writing code',
        'Accessibility tested across all screen viewports',
      ],
    },
  ];

  const currentHighlight = studioHighlights.find((item) => item.id === activeTab) || studioHighlights[0];

  return (
    <section className="section-wrapper it-studio-showcase-section" style={{ backgroundColor: 'var(--bg-canvas)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow">
            <span className="section-eyebrow">THE WORKING DOTS STUDIO</span>
          </div>
          <h2>Where Modern Architecture Meets Real Builders</h2>
          <p>
            We don’t outsource to junior contractors or hide behind account managers. You work directly with elite engineers, designers, and automation specialists.
          </p>
        </div>

        {/* Interactive Studio Workspace Tabs */}
        <div className="studio-tabs-bar">
          {studioHighlights.map((item) => (
            <button
              key={item.id}
              className={`studio-tab-btn ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.tabTitle}
            </button>
          ))}
        </div>

        {/* Featured Visual Studio Card */}
        <div className="studio-feature-card">
          <div className="studio-feature-visual">
            <img
              src={currentHighlight.image}
              alt={currentHighlight.headline}
              className="studio-feature-img"
              loading="lazy"
            />
            <div className="studio-visual-badge">
              <span className="live-pulse-dot"></span>
              <span>{currentHighlight.badge}</span>
            </div>

            <div className="studio-stat-overlay">
              <div className="stat-overlay-val">{currentHighlight.statValue}</div>
              <div className="stat-overlay-label">{currentHighlight.statLabel}</div>
            </div>
          </div>

          <div className="studio-feature-content">
            <div className="studio-content-eyebrow">
              <span className="tag-pill">{currentHighlight.badge}</span>
            </div>

            <h3 className="studio-feature-heading">{currentHighlight.headline}</h3>
            <p className="studio-feature-desc">{currentHighlight.desc}</p>

            <div className="studio-feature-points">
              {currentHighlight.points.map((point, idx) => (
                <div key={idx} className="studio-point-row">
                  <span className="point-icon">✓</span>
                  <span className="point-text">{point}</span>
                </div>
              ))}
            </div>

            <div className="studio-tech-pills">
              {currentHighlight.tags.map((tag, idx) => (
                <span key={idx} className="tech-badge">
                  {tag}
                </span>
              ))}
            </div>

            <div className="studio-feature-actions">
              <a href="#contact" className="btn btn-primary btn-sm">
                Discuss Your Architecture →
              </a>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                💬 Quick WhatsApp Chat
              </a>
            </div>
          </div>
        </div>

        {/* 3-Column Studio Grid Gallery to Fill Spaces */}
        <div className="studio-gallery-grid">
          <div className="studio-gallery-item">
            <div className="gallery-img-wrap">
              <img
                src={itTeamImg}
                alt="Agile Engineering Team"
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-caption">
                <h4>Agile Full-Stack Teams</h4>
                <p>Fast sprint execution with direct engineer collaboration.</p>
              </div>
            </div>
          </div>

          <div className="studio-gallery-item">
            <div className="gallery-img-wrap">
              <img
                src={cloudDevopsImg}
                alt="Cloud & AI Infrastructure"
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-caption">
                <h4>Cloud & AI Pipelines</h4>
                <p>Autonomous n8n workflows and bulletproof 99.9% uptime.</p>
              </div>
            </div>
          </div>

          <div className="studio-gallery-item">
            <div className="gallery-img-wrap">
              <img
                src={uiuxDesignImg}
                alt="UI/UX Prototyping Lab"
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-caption">
                <h4>Ergonomic UI/UX Systems</h4>
                <p>Interactive Figma tokens mapped to production frontend code.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
