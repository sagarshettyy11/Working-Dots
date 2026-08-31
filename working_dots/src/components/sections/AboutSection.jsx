import React from 'react';
import studioWorkspaceImg from '../../assets/images/studio_workspace.jpg';

export default function AboutSection() {
  const values = [
    { title: 'Craftsmanship First', desc: 'We take pride in writing clean code, designing clean layouts, and polishing every edge.' },
    { title: 'Speed With Intent', desc: 'Fast delivery should never mean sloppy architecture. We move fast through disciplined systems.' },
    { title: 'Radical Transparency', desc: 'No jargon, no hidden fees, and daily visibility into progress and GitHub commits.' },
    { title: 'Long-Term Reliability', desc: 'We build digital products meant to run stably and scale without continuous maintenance overhead.' },
  ];

  const team = [
    {
      initials: 'SK',
      name: 'Lead Product Architect',
      role: 'Full-Stack & Cloud Systems',
      bio: 'Ex-startup tech lead specializing in scalable Next.js applications, serverless infrastructures, and high-load APIs.',
    },
    {
      initials: 'AR',
      name: 'Head of UI/UX & Design',
      role: 'Design Systems & Product UX',
      bio: 'Design systems engineer with 8+ years crafting ergonomic SaaS web applications and fluid mobile interfaces.',
    },
    {
      initials: 'MV',
      name: 'Automation & AI Lead',
      role: 'Autonomous Workflows & n8n',
      bio: 'Automation specialist architecting deterministic AI agents, WhatsApp commerce pipelines, and business workflows.',
    },
  ];

  return (
    <section id="about" className="section-wrapper" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">
            <span className="section-eyebrow">ABOUT WORKING DOTS</span>
          </div>
          <h2>A Small, Elite Team Built for High-Impact Execution</h2>
          <p>
            We are engineers, designers, and automation specialists who value clarity, speed, and real business outcomes over agency bureaucracy.
          </p>
        </div>

        {/* Studio Craftsmanship Visual Banner */}
        <div className="about-studio-banner">
          <div className="studio-img-wrapper">
            <img
              src={studioWorkspaceImg}
              alt="Working Dots Engineering & Design Studio"
              className="studio-img"
              loading="lazy"
            />
          </div>
          <div className="studio-caption-dock">
            <div className="studio-dock-left">
              <div className="studio-status-indicator">
                <span className="live-pulse-dot"></span>
                <span className="studio-dock-title">Working Dots Studio</span>
              </div>
              <span className="studio-dock-separator">•</span>
              <span className="studio-dock-sub">Where Design Systems Meet High-Performance Code</span>
            </div>
            <div className="studio-dock-right">
              <span className="studio-stat-pill">⚡ 100% In-House Craft</span>
              <span className="studio-stat-pill">🛡️ Zero Bureaucracy</span>
            </div>
          </div>
        </div>

        <div className="about-grid">
          <div className="about-narrative">
            <h3>Born to Eliminate Digital Friction</h3>
            <p>
              Working Dots was founded on a simple observation: modern businesses need world-class websites, mobile apps, and automated workflows, but traditional agencies are slow and bloated, while freelancers are fragmented and hard to manage.
            </p>
            <p>
              We combined full-stack development, modern UI/UX design, and AI automation into a single, cohesive studio. When you work with us, you partner directly with senior builders who care about the outcome of your product.
            </p>
          </div>

          <div className="values-cards-grid">
            {values.map((val, idx) => (
              <div key={idx} className="value-box">
                <h4>{val.title}</h4>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {team.map((member, idx) => (
            <div key={idx} className="team-member-card">
              <div className="member-avatar">{member.initials}</div>
              <div className="member-name">{member.name}</div>
              <div className="member-role">{member.role}</div>
              <div className="member-bio">{member.bio}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
