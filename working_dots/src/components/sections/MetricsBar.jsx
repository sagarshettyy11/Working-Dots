import React from 'react';

export default function MetricsBar() {
  const metrics = [
    {
      badge: '⚡ Sprint Velocity',
      value: '< 14 Days',
      title: 'Turnkey MVP Delivery',
      desc: 'Rapid scoping to live production release',
    },
    {
      badge: '🤖 Workflow Uptime',
      value: '99.9%',
      title: 'Autonomous Systems',
      desc: 'Self-healing error catching & fail-safes',
    },
    {
      badge: '💎 Code Craftsmanship',
      value: '100%',
      title: 'Deterministic Code',
      desc: 'Strict type safety & zero template bloat',
    },
    {
      badge: '✦ Unified Studio',
      value: '6 Disciplines',
      title: 'End-to-End Solutions',
      desc: 'Design, web, mobile & AI under one roof',
    },
  ];

  return (
    <section className="metrics-section">
      <div className="container">
        <div className="metrics-bento-card">
          <div className="metrics-grid">
            {metrics.map((m, idx) => (
              <div key={idx} className="metric-bento-item">
                <div className="metric-badge-tag">
                  {m.badge}
                </div>
                <div className="metric-value">{m.value}</div>
                <div className="metric-title">{m.title}</div>
                <div className="metric-desc">{m.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
