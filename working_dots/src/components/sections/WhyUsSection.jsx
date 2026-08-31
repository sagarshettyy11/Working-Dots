import React from 'react';

export default function WhyUsSection() {

  const comparisonPillars = [
    {
      id: 'speed',
      title: 'Delivery Speed & Turnaround',
      icon: '⚡',
      traditional: {
        tag: 'The Traditional Agency Trap',
        badge: 'Slow & Bloated',
        points: [
          '3 to 6 months of endless discovery meetings',
          'Account managers acting as communication bottlenecks',
          'Scope creep with unexpected hourly change fees',
        ],
      },
      workingdots: {
        tag: 'The Working Dots Model',
        badge: 'High-Velocity Sprints',
        points: [
          'Production-ready builds in 2 to 3 week structured sprints',
          'Direct daily Slack & WhatsApp communication with senior builders',
          'Transparent, milestone-based fixed scope with zero surprise fees',
        ],
        metric: '3x Faster Delivery',
      },
    },
    {
      id: 'engineering',
      title: 'Design & Code Craftsmanship',
      icon: '🎨',
      traditional: {
        tag: 'Fragmented Handoffs',
        badge: 'Fidelity Compromises',
        points: [
          'Designers hand off Figma files with zero CSS token mapping',
          'Developers compromise on responsive layouts and micro-interactions',
          'Heavy bloated templates causing 4+ second page load times',
        ],
      },
      workingdots: {
        tag: 'Unified Engineering Studio',
        badge: '100% Fidelity & Speed',
        points: [
          'Figma design tokens mapped 1:1 directly to React 19 CSS variables',
          'Fluid 60fps animations and pixel-perfect responsive precision',
          'Sub-second page loads with 99+ Google Lighthouse performance scores',
        ],
        metric: '99+ Lighthouse Score',
      },
    },
    {
      id: 'ai',
      title: 'AI & Operational Automations',
      icon: '🤖',
      traditional: {
        tag: 'Generic AI Wrappers',
        badge: 'Unreliable & Brittle',
        points: [
          'Unstable third-party SaaS wrappers that break silently',
          'No automated error retry handling or database syncing',
          'Hallucination risks on customer-facing channels',
        ],
      },
      workingdots: {
        tag: 'Deterministic AI Pipelines',
        badge: 'Autonomous & Reliable',
        points: [
          'Custom n8n, Make, and Python pipelines with automated retries',
          'Direct integration into PostgreSQL, WhatsApp, Stripe, and CRMs',
          'Strict JSON schema validation and zero-hallucination guardrails',
        ],
        metric: '40+ hrs/wk Saved',
      },
    },
    {
      id: 'ownership',
      title: 'Code Ownership & Transparency',
      icon: '🛡️',
      traditional: {
        tag: 'Vendor Lock-In',
        badge: 'Proprietary Restrictions',
        points: [
          'Messy, undocumented spaghetti code or proprietary CMS lock-in',
          'High ongoing retainer charges just to make basic content edits',
          'Reluctance to transfer full administrative GitHub repositories',
        ],
      },
      workingdots: {
        tag: 'Full Freedom & Zero Lock-In',
        badge: '100% Your IP',
        points: [
          '100% intellectual property ownership transferred to your GitHub',
          'Clean, typed, self-documenting code built on modern open standards',
          'Comprehensive architectural documentation and video walkthroughs',
        ],
        metric: '100% IP Transfer',
      },
    },
  ];

  const valuePillars = [
    {
      icon: '👥',
      title: 'Direct Senior Builder Access',
      desc: 'No account managers or junior interns. You partner directly with the software architect and UI/UX designer building your product.',
    },
    {
      icon: '⚡',
      title: 'Sub-Second Edge Infrastructure',
      desc: 'Edge-rendered architectures that load in under 400ms globally, improving conversion rates and SEO rankings.',
    },
    {
      icon: '🔄',
      title: 'Continuous Visibility',
      desc: 'Daily commit visibility on GitHub and live preview staging deployments so you test every feature as it gets built.',
    },
    {
      icon: '🛡️',
      title: '99.9% Uptime & SLA Guarantee',
      desc: 'Bulletproof cloud infrastructure with automated database backups, failover protections, and guaranteed turnaround SLAs.',
    },
  ];

  return (
    <section id="why-us" className="section-wrapper why-us-redesigned-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="eyebrow">
            <span className="section-eyebrow">THE WORKING DOTS ADVANTAGE</span>
          </div>
          <h2>Engineered Differently. Built for Velocity.</h2>
          <p>
            See how our unified engineering and automation studio compares to traditional agencies, software houses, and fragmented freelancers.
          </p>
        </div>

        {/* Feature Comparison Cards Grid */}
        <div className="comparison-cards-grid">
          {comparisonPillars.map((item) => (
            <div key={item.id} className="comparison-pillar-card">
              <div className="pillar-header">
                <div className="pillar-icon-box">{item.icon}</div>
                <h3 className="pillar-title">{item.title}</h3>
              </div>

              <div className="comparison-split-box">
                {/* Traditional Side */}
                <div className="compare-side side-traditional">
                  <div className="compare-side-header">
                    <span className="compare-cross-icon">✕</span>
                    <div className="side-title-wrap">
                      <span className="side-label">{item.traditional.tag}</span>
                      <span className="side-sub-badge red">{item.traditional.badge}</span>
                    </div>
                  </div>
                  <ul className="compare-points-list traditional-points">
                    {item.traditional.points.map((pt, idx) => (
                      <li key={idx}>
                        <span className="pt-cross">✕</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Working Dots Side */}
                <div className="compare-side side-workingdots">
                  <div className="compare-side-header">
                    <span className="compare-check-icon">✓</span>
                    <div className="side-title-wrap">
                      <span className="side-label">{item.workingdots.tag}</span>
                      <span className="side-sub-badge green">{item.workingdots.badge}</span>
                    </div>
                    <span className="pillar-metric-chip">{item.workingdots.metric}</span>
                  </div>
                  <ul className="compare-points-list workingdots-points">
                    {item.workingdots.points.map((pt, idx) => (
                      <li key={idx}>
                        <span className="pt-check">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Bottom Advantage Pillars */}
        <div className="why-us-pillars-row">
          {valuePillars.map((pillar, idx) => (
            <div key={idx} className="why-us-pillar-mini-card">
              <div className="mini-pillar-icon">{pillar.icon}</div>
              <h4>{pillar.title}</h4>
              <p>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
