import React from 'react';

export default function CareersSection() {
  const openRoles = [
    {
      id: 1,
      title: 'Senior Full-Stack Engineer',
      type: 'Full-time • Remote / Hybrid',
      location: 'Bengaluru / Remote',
      tags: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
      desc: 'Lead the architecture and development of scalable web applications, custom SaaS frontends, and robust API backends.',
    },
    {
      id: 2,
      title: 'UI/UX Product Designer',
      type: 'Full-time • Remote / Hybrid',
      location: 'Bengaluru / Remote',
      tags: ['Figma', 'Design Systems', 'Micro-Interactions', 'Prototyping'],
      desc: 'Craft intuitive, pixel-perfect user interfaces, modular Figma component libraries, and frictionless product user journeys.',
    },
    {
      id: 3,
      title: 'AI Automation & Workflow Engineer',
      type: 'Full-time • Remote / Hybrid',
      location: 'Bengaluru / Remote',
      tags: ['n8n', 'Make', 'Python', 'WhatsApp Commerce', 'AI Agents'],
      desc: 'Build deterministic workflow automations, WhatsApp conversational commerce engines, and intelligent customer agents.',
    },
  ];

  const culturePerks = [
    {
      icon: '⚡',
      title: 'High Velocity & Zero Red Tape',
      desc: 'Direct decision making with builders. No middle management bottlenecks.',
    },
    {
      icon: '🛠️',
      title: 'Modern Tooling & Tech Stack',
      desc: 'React 19, Next.js, TypeScript, n8n, Vite, Tailwind/Modern CSS, and edge deployment.',
    },
    {
      icon: '📈',
      title: 'Fast Growth & Fair Pay',
      desc: 'Competitive compensation, project performance incentives, and career acceleration.',
    },
  ];

  return (
    <section id="careers" className="section-wrapper" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">
            <span className="section-eyebrow">CAREERS AT WORKING DOTS</span>
          </div>
          <h2>Build High-Impact Digital Products With Us</h2>
          <p>
            We are looking for ambitious builders who care about craftsmanship, speed, and clean code. Join our core studio.
          </p>
        </div>

        {/* Culture Highlights */}
        <div className="careers-perks-grid">
          {culturePerks.map((perk, idx) => (
            <div key={idx} className="perk-card">
              <div className="perk-icon">{perk.icon}</div>
              <h4>{perk.title}</h4>
              <p>{perk.desc}</p>
            </div>
          ))}
        </div>

        {/* Open Roles List */}
        <div className="careers-roles-header">
          <h3>Open Positions</h3>
          <span className="open-roles-count">{openRoles.length} Roles Active</span>
        </div>

        <div className="careers-roles-grid">
          {openRoles.map((role) => (
            <div key={role.id} className="job-card">
              <div className="job-card-header">
                <div>
                  <h4 className="job-title">{role.title}</h4>
                  <div className="job-meta">
                    <span>{role.type}</span>
                    <span>•</span>
                    <span>{role.location}</span>
                  </div>
                </div>
                <a
                  href={`mailto:contact@workingdots.in?subject=Application for ${encodeURIComponent(role.title)}`}
                  className="btn btn-secondary btn-sm"
                >
                  Apply Now →
                </a>
              </div>

              <p className="job-desc">{role.desc}</p>

              <div className="job-tags">
                {role.tags.map((tag, idx) => (
                  <span key={idx} className="tech-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* General Application Banner */}
        <div className="careers-general-banner">
          <div>
            <h4>Don't see your specific role?</h4>
            <p>
              We are always looking for exceptional engineers, UI/UX designers, and growth builders. Send your portfolio or GitHub.
            </p>
          </div>
          <a
            href="mailto:contact@workingdots.in?subject=General Application / Portfolio Submission"
            className="btn btn-primary"
          >
            Email Your Resume →
          </a>
        </div>
      </div>
    </section>
  );
}
