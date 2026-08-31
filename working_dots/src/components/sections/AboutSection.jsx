import React from 'react';
import studioWorkspaceImg from '../../assets/images/studio_workspace.jpg';
import { TEAM_MEMBERS, COMPANY_VALUES } from '../../lib/team-data';

export default function AboutSection() {
  return (
    <section id="about" className="section-wrapper" style={{ backgroundColor: 'var(--bg-surface)' }}>
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">
            <span className="section-eyebrow">ABOUT WORKING DOTS</span>
          </div>
          <h2>An Elite Engineering & Design Studio Built for Impact</h2>
          <p>
            We are senior software engineers, product designers, and AI automation specialists who value clarity, speed, and real business outcomes over agency bureaucracy.
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
            {COMPANY_VALUES.map((val, idx) => (
              <div key={idx} className="value-box">
                <div className="value-box-header">
                  <span className="value-icon">{val.icon}</span>
                  <h4>{val.title}</h4>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="team-member-card">
              <div className="member-avatar">{member.initials}</div>
              <div className="member-badge-pill">{member.badge}</div>
              <div className="member-name">{member.name}</div>
              <div className="member-role">{member.role}</div>
              <div className="member-bio">{member.bio}</div>
              <div className="member-skills-list">
                {member.skills.map((s, idx) => (
                  <span key={idx} className="member-skill-tag">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
