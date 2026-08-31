import React, { useState, useEffect } from 'react';
import { BRAND_CONFIG } from '../../lib/constants';

export default function HeroSection({ navigate }) {
  const [activeWorkflowNode, setActiveWorkflowNode] = useState(0);
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('headline-fade-in');

  const rotatingHeadlines = [
    {
      prefix: 'Connecting the Dots Between',
      highlight: 'Design, Engineering, & Automation.',
    },
    {
      prefix: 'Transforming Ambitious Ideas Into',
      highlight: 'Scalable Products, Apps, & Systems.',
    },
    {
      prefix: 'Streamlining Enterprise Operations With',
      highlight: 'Intelligent Workflows & Modern Code.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeClass('headline-fade-out');
      setTimeout(() => {
        setHeadlineIndex((prev) => (prev + 1) % rotatingHeadlines.length);
        setFadeClass('headline-fade-in');
      }, 350);
    }, 4000);

    return () => clearInterval(interval);
  }, [rotatingHeadlines.length]);

  const handleManualHeadlineSelect = (idx) => {
    if (idx === headlineIndex) return;
    setFadeClass('headline-fade-out');
    setTimeout(() => {
      setHeadlineIndex(idx);
      setFadeClass('headline-fade-in');
    }, 300);
  };

  const workflowSteps = [
    {
      id: 1,
      title: 'Inquiry & Scoping',
      desc: 'Requirements analyzed & mapped to optimal React & AI tech stack',
      icon: '⚡',
      action: 'Automatic Scope Definition',
      summary: 'Automated technical scoping complete • Matched with React 19 & n8n architecture',
    },
    {
      id: 2,
      title: 'UI/UX Blueprint',
      desc: 'Interactive Figma design systems, tokens & user journey flows',
      icon: '🎨',
      action: 'Figma Token Generation',
      summary: 'High-fidelity design components synced 1:1 with production CSS tokens',
    },
    {
      id: 3,
      title: 'Full-Stack Build',
      desc: 'Clean modular code, robust REST/GraphQL APIs & automated workflows',
      icon: '⚙️',
      action: 'Deterministic Testing Suite',
      summary: 'Continuous integration pipeline running automated lint & performance checks',
    },
    {
      id: 4,
      title: 'Launch & Scale',
      desc: 'Zero-downtime production deployment with 24/7 uptime monitoring',
      icon: '🚀',
      action: 'Live Production Release',
      summary: 'Production deployment live on edge CDN with automated 99.9% health monitoring',
    },
  ];

  const handleServicesClick = (e) => {
    e.preventDefault();
    if (navigate) navigate('services');
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();
    if (navigate) navigate('projects');
  };

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span className="hero-eyebrow-tag">
              Enterprise Digital Engineering & Product Studio
            </span>
          </div>

          {/* Continuous Rotating Headline */}
          <div className="hero-rotator-wrapper">
            <h1 className={`hero-title ${fadeClass}`}>
              {rotatingHeadlines[headlineIndex].prefix} <br />
              <span className="highlight">{rotatingHeadlines[headlineIndex].highlight}</span>
            </h1>

            {/* Subtle Progress Bar Indicators */}
            <div className="headline-indicators" aria-label="Rotating headline indicators">
              {rotatingHeadlines.map((_, idx) => (
                <button
                  key={idx}
                  className={`indicator-bar ${headlineIndex === idx ? 'active' : ''}`}
                  onClick={() => handleManualHeadlineSelect(idx)}
                  aria-label={`Show statement ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          <p className="hero-subtitle">
            We build high-performance websites, scalable iOS/Android mobile applications, deterministic autonomous AI automation pipelines, and modern cloud infrastructures under one unified roof.
          </p>

          <div className="hero-cta-group">
            <a
              href="#contact"
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                if (navigate) navigate('home', 'contact');
              }}
            >
              Start a Project →
            </a>
            <a
              href="/services"
              className="btn btn-secondary"
              onClick={handleServicesClick}
            >
              Explore All Services
            </a>
            <a
              href="/projects"
              className="btn btn-secondary"
              onClick={handleProjectsClick}
            >
              View Case Studies
            </a>
          </div>

          <div className="hero-trust-bar">
            <span>✓ {BRAND_CONFIG.projectsDelivered} Systems Shipped</span>
            <span>•</span>
            <span>✓ {BRAND_CONFIG.uptimeSLA} Uptime SLA</span>
            <span>•</span>
            <span>✓ {BRAND_CONFIG.avgTurnaroundDays}-Day Sprints</span>
            <span>•</span>
            <span>✓ 100% In-House Builders</span>
          </div>

          {/* Interactive Workflow Simulation Dock */}
          <div className="hero-visual-container">
            <div className="workflow-card">
              <div className="workflow-header">
                <div style={{ textAlign: 'left' }}>
                  <span className="section-eyebrow" style={{ color: 'var(--brand-blue)' }}>
                    LIVE ARCHITECTURE SIMULATION
                  </span>
                  <h4 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--text-primary)' }}>
                    How We Execute Your Vision End-to-End
                  </h4>
                </div>
                <div className="workflow-status-live">
                  <span className="live-pulse-dot"></span>
                  <span>Operational • {BRAND_CONFIG.uptimeSLA} Uptime</span>
                </div>
              </div>

              {/* 4 Large, Highly Legible Pipeline Nodes */}
              <div className="workflow-pipeline">
                {workflowSteps.map((step, idx) => (
                  <div
                    key={step.id}
                    className={`pipeline-node ${activeWorkflowNode === idx ? 'active' : ''}`}
                    onClick={() => setActiveWorkflowNode(idx)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Inspect step ${step.id}: ${step.title}`}
                  >
                    <div className="node-header">
                      <div className="node-icon">{step.icon}</div>
                      <span className="node-number">0{step.id}</span>
                    </div>
                    <div className="node-title">{step.title}</div>
                    <div className="node-desc">{step.desc}</div>
                  </div>
                ))}
              </div>

              {/* Active Step Live Inspector */}
              <div className="active-step-inspector">
                <div className="inspector-left-content">
                  <span className="active-node-tag">
                    Node 0{workflowSteps[activeWorkflowNode].id}: {workflowSteps[activeWorkflowNode].action}
                  </span>
                  <span className="node-summary-text">
                    {workflowSteps[activeWorkflowNode].summary}
                  </span>
                </div>
                <span className="inspector-hint-text">
                  Click any stage above to inspect
                </span>
              </div>

              {/* Tool Ecosystem Dock */}
              <div className="ecosystem-dock">
                <div className="dock-label">
                  <span>Integrated Production Stack:</span>
                </div>
                <div className="tool-pills">
                  <span className="tool-pill">⚛️ React 19 & Next.js 15</span>
                  <span className="tool-pill">📱 React Native & Expo</span>
                  <span className="tool-pill">⚡ Node & FastAPI</span>
                  <span className="tool-pill">🔄 n8n & OpenAI</span>
                  <span className="tool-pill">🐘 PostgreSQL & Supabase</span>
                  <span className="tool-pill">💬 WhatsApp API</span>
                  <span className="tool-pill">💳 Stripe & Razorpay</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
