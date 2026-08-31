import React from 'react';

export default function CaseStudyModal({ caseStudy, onClose }) {
  if (!caseStudy) return null;

  const displayImage = caseStudy.deepdiveImage || caseStudy.image;

  return (
    <div className="case-study-modal-overlay" onClick={onClose}>
      <div className="case-study-modal-card" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <span className="project-category-badge">{caseStudy.tag}</span>
            <span className="project-metric-badge">★ {caseStudy.metric}</span>
          </div>
          <button
            onClick={onClose}
            style={{ fontSize: '20px', color: 'var(--text-muted)', cursor: 'pointer', padding: '4px 8px', borderRadius: '4px', border: '1px solid var(--border-subtle)' }}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        {/* High-Resolution Deep-Dive Visual Showcase */}
        {displayImage && (
          <div className="case-study-modal-media">
            <img
              src={displayImage}
              alt={caseStudy.title}
              className="case-study-hero-img"
            />
            <div className="modal-media-caption">
              <span>Verified Case Study Architecture & Production Telemetry</span>
            </div>
          </div>
        )}

        <h3 style={{ fontSize: '1.75rem', marginBottom: '8px', marginTop: '16px' }}>{caseStudy.title}</h3>
        <p style={{ color: 'var(--brand-blue-dark)', fontWeight: '600', marginBottom: '20px', fontSize: '14px' }}>
          Client: {caseStudy.fullDetails.client} • {caseStudy.fullDetails.timeline}
        </p>

        <div style={{ backgroundColor: 'var(--bg-surface)', padding: '18px 20px', borderRadius: '12px', marginBottom: '20px', border: '1px solid var(--border-subtle)' }}>
          <h4 style={{ fontSize: '14px', marginBottom: '6px', color: 'var(--text-primary)', fontWeight: '700' }}>The Challenge</h4>
          <p style={{ fontSize: '14px', color: 'var(--text-body)', marginBottom: '14px', lineHeight: '1.6' }}>{caseStudy.problem}</p>

          <h4 style={{ fontSize: '14px', marginBottom: '6px', color: 'var(--text-primary)', fontWeight: '700' }}>Our Solution</h4>
          <p style={{ fontSize: '14px', color: 'var(--text-body)', lineHeight: '1.6' }}>{caseStudy.solution}</p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '14.5px', marginBottom: '12px', fontWeight: '700' }}>Key Measured Outcomes</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {caseStudy.fullDetails.results.map((res, idx) => (
              <li key={idx} style={{ fontSize: '14px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ color: 'var(--status-success)', fontWeight: '800', fontSize: '15px' }}>✓</span> {res}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Used */}
        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)', marginBottom: '8px' }}>Tech Architecture</h4>
          <div className="project-tech-tags">
            {caseStudy.tech.map((t, idx) => (
              <span key={idx} className="tech-tag">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <a href="#contact" className="btn btn-primary" style={{ flex: 1 }} onClick={onClose}>
            Build Something Similar
          </a>
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
