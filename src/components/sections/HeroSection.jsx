import React, { useState, useEffect } from 'react';

export default function HeroSection() {
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
      prefix: 'Streamlining Operations With',
      highlight: 'Intelligent Workflows & Modern Code.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Step 1: Start fading out
      setFadeClass('headline-fade-out');

      // Step 2: Swap text & fade in after brief transition
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
      desc: 'Requirements analyzed & matched with best-fit tech stack',
      icon: '⚡',
      action: 'Automatic Scope Definition',
      summary: 'Automated technical scoping complete • Matched with React & n8n architecture',
    },
    {
      id: 2,
      title: 'UI/UX Blueprint',
      desc: 'Interactive Figma design system & user journey mapping',
      icon: '🎨',
      action: 'Figma Token Generation',
      summary: 'High-fidelity design components synced with production theme tokens',
    },
    {
      id: 3,
      title: 'Full-Stack Build',
      desc: 'Clean React code, robust APIs, and workflow automations',
      icon: '⚙️',
      action: 'Deterministic Testing Suite',
      summary: 'Continuous integration pipeline running automated lint & performance checks',
    },
    {
      id: 4,
      title: 'Launch & Growth',
      desc: 'Zero-downtime deployment, analytics & ongoing support',
      icon: '🚀',
      action: 'Live Production Release',
      summary: 'Production deployment live on edge CDN with automated health monitoring',
    },
  ];

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <div className="hero-eyebrow" style={{ marginBottom: '20px' }}>
            <span className="hero-eyebrow-tag">
              Your Digital Architecture Studio
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
            We build high-performance websites, scalable mobile applications, deterministic AI automation workflows, and strategic digital growth systems under one unified roof.
          </p>

          <div className="hero-cta-group">
            <a href="#contact" className="btn btn-primary">
              Start a Project →
            </a>
            <a href="#work" className="btn btn-secondary">
              Explore Our Work
            </a>
          </div>

          <div className="hero-trust-bar">
            <span>✓ Production-Ready Engineering</span>
            <span>•</span>
            <span>✓ Fast Turnarounds</span>
            <span>•</span>
            <span>✓ 100% Deterministic Code</span>
          </div>

          {/* Interactive Workflow Simulation Dock */}
          <div className="hero-visual-container">
            <div className="workflow-card">
              <div className="workflow-header">
                <div style={{ textAlign: 'left' }}>
                  <span className="section-eyebrow">LIVE ARCHITECTURE SIMULATION</span>
                  <h4 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--text-primary)' }}>
                    How We Execute Your Vision End-to-End
                  </h4>
                </div>
                <div className="workflow-status-live">
                  <span>Operational • 99.9% Uptime</span>
                </div>
              </div>

              {/* 4 Interactive Pipeline Nodes */}
              <div className="workflow-pipeline">
                {workflowSteps.map((step, idx) => (
                  <div
                    key={step.id}
                    className={`pipeline-node ${activeWorkflowNode === idx ? 'active' : ''}`}
                    onClick={() => setActiveWorkflowNode(idx)}
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span className="active-node-tag">
                    Node 0{workflowSteps[activeWorkflowNode].id}: {workflowSteps[activeWorkflowNode].action}
                  </span>
                  <span className="node-summary-text">
                    {workflowSteps[activeWorkflowNode].summary}
                  </span>
                </div>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                  Click nodes to inspect execution
                </span>
              </div>

              {/* Tool Ecosystem Dock */}
              <div className="ecosystem-dock">
                <div className="dock-label">
                  <span>Integrated Tool Stack:</span>
                </div>
                <div className="tool-pills">
                  <span className="tool-pill">⚛️ React & Next.js</span>
                  <span className="tool-pill">⚡ Vite & Node</span>
                  <span className="tool-pill">🔄 n8n & Make</span>
                  <span className="tool-pill">🐍 Python Automations</span>
                  <span className="tool-pill">💬 WhatsApp Commerce</span>
                  <span className="tool-pill">💳 Stripe Payments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
