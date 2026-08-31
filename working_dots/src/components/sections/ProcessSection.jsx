import React, { useState } from 'react';

export default function ProcessSection() {
  const [activeProcessStage, setActiveProcessStage] = useState(0);

  const processStages = [
    {
      num: '01',
      name: 'Discover',
      subtitle: 'Requirements & Bottleneck Audit',
      title: 'Discovery & Bottleneck Audit',
      desc: 'We conduct a deep-dive session to understand your business goals, target audience, legacy friction, and exact technical requirements.',
      deliverables: ['Requirement Specification Document', 'Operational Bottleneck Audit', 'Tech Stack Feasibility Analysis'],
      timeline: 'Days 1 - 2',
      focus: 'Complete clarity on requirements, timeline & business metrics before writing code.',
    },
    {
      num: '02',
      name: 'Plan',
      subtitle: 'Architecture & Technical Roadmap',
      title: 'Architecture & System Blueprint',
      desc: 'We map out every database entity, API integration, data flow pipeline, and milestone before writing a single line of code.',
      deliverables: ['System Architecture Diagram', 'Database Schema & API Specs', 'Sprint Timeline & Milestone Roadmap'],
      timeline: 'Days 2 - 4',
      focus: 'Deterministic architectural blueprint with zero ambiguity on deliverables.',
    },
    {
      num: '03',
      name: 'Design',
      subtitle: 'Figma UI/UX & Clickable Prototypes',
      title: 'Figma UI/UX & Interactive Prototypes',
      desc: 'We craft clean, pixel-perfect user interfaces, interaction flows, and high-fidelity clickable Figma prototypes with your active feedback.',
      deliverables: ['Complete Figma Design System', 'Clickable Interactive Prototype', 'Design Review & Feedback Approval'],
      timeline: 'Days 4 - 7',
      focus: 'Visual precision, ergonomic layouts, and frictionless user flows.',
    },
    {
      num: '04',
      name: 'Develop',
      subtitle: 'Clean Code & Full-Stack Pipelines',
      title: 'Clean Engineering & API Integrations',
      desc: 'Our unified team writes clean, modular, and maintainable code for your web apps, mobile apps, and automated backend pipelines.',
      deliverables: ['Production-Grade React / React Native Code', 'Automated n8n / Make Workflow Pipelines', 'Continuous Integration Setup'],
      timeline: 'Days 7 - 12',
      focus: 'Modern codebases built with standard, maintainable stacks.',
    },
    {
      num: '05',
      name: 'Test',
      subtitle: 'QA Audits & Edge-Case Validation',
      title: 'Rigorous QA & Edge-Case Stress Testing',
      desc: 'We execute multi-device testing, cross-browser audits, security validation, and deterministic fail-safe testing for all automations.',
      deliverables: ['Cross-Device QA Audit Report', 'Zero-Error Fallback Validation', 'Speed & SEO Performance Optimization'],
      timeline: 'Days 12 - 13',
      focus: 'Stress testing all edge cases and automated error recovery.',
    },
    {
      num: '06',
      name: 'Launch',
      subtitle: 'Zero-Downtime Production Go-Live',
      title: 'Zero-Downtime Deployment & Go-Live',
      desc: 'We handle server configurations, DNS setup, App Store / Play Store submissions, and live production environment launch.',
      deliverables: ['Live Production Deployment', 'App Store / Play Store Submission', 'Domain & Security SSL Configuration'],
      timeline: 'Day 14',
      focus: 'Seamless transition into production with complete documentation.',
    },
    {
      num: '07',
      name: 'Grow',
      subtitle: 'Health Monitoring & Ongoing Scale',
      title: 'Continuous Monitoring & Scale',
      desc: 'We stay on board to monitor operational uptime, optimize workflow performance, and scale features as your user base expands.',
      deliverables: ['24/7 Operational Health Checks', 'Monthly Feature Enhancements', 'Ongoing AI & Growth Optimization'],
      timeline: 'Ongoing Partnership',
      focus: 'Proactive maintenance, feature iteration, and scale support.',
    },
  ];

  return (
    <section id="process" className="section-wrapper" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">
            <span className="section-eyebrow">HOW WE WORK</span>
          </div>
          <h2>How We Take Ideas From Concept to Scale</h2>
          <p>
            A structured engineering lifecycle designed to eliminate surprises, keep you updated, and deliver fast, dependable results.
          </p>
        </div>

        <div className="process-split-layout">
          {/* Left Column: Interactive Stage Roadmap Rail */}
          <div className="process-roadmap-rail">
            <div className="roadmap-rail-header">
              <span className="rail-title">Execution Lifecycle</span>
              <span className="rail-count">7 Sprints</span>
            </div>
            <div className="roadmap-rail-list">
              {processStages.map((stg, idx) => (
                <button
                  key={idx}
                  className={`roadmap-step-item ${activeProcessStage === idx ? 'active' : ''}`}
                  onClick={() => setActiveProcessStage(idx)}
                >
                  <div className="step-badge-num">{stg.num}</div>
                  <div className="step-text-wrap">
                    <div className="step-name-row">
                      <span className="step-name">{stg.name}</span>
                      <span className="step-timeline-mini">{stg.timeline}</span>
                    </div>
                    <div className="step-subtitle">{stg.subtitle}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Dynamic Stage Detail Panel */}
          <div className="process-stage-panel">
            <div className="stage-panel-header">
              <div>
                <div className="stage-badge-row">
                  <span className="stage-pill">Stage {processStages[activeProcessStage].num}</span>
                  <span className="stage-duration-tag">⏱ Estimated Sprint: {processStages[activeProcessStage].timeline}</span>
                </div>
                <h3 className="stage-heading">{processStages[activeProcessStage].title}</h3>
              </div>
            </div>

            <p className="stage-description">
              {processStages[activeProcessStage].desc}
            </p>

            <div className="stage-focus-banner">
              <strong>Core Focus:</strong> {processStages[activeProcessStage].focus}
            </div>

            <div className="stage-deliverables-section">
              <div className="stage-deliverables-title">Key Stage Deliverables & Artifacts</div>
              <div className="stage-deliverables-grid">
                {processStages[activeProcessStage].deliverables.map((item, idx) => (
                  <div key={idx} className="deliverable-card-item">
                    <div className="deliverable-check-icon">✓</div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="stage-panel-footer">
              <a href="#contact" className="btn btn-primary">
                Discuss Stage {processStages[activeProcessStage].num} Scope →
              </a>
              <span className="stage-guarantee-note">
                Direct Slack updates & milestone sign-off before advancing
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
