import React from 'react';

export default function CaseStudyModal({ caseStudy, onClose }) {
  if (!caseStudy) return null;

  return (
    <div className="case-study-modal-overlay" onClick={onClose}>
      <div className="case-study-modal-card" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <span className="project-category-badge">{caseStudy.tag}</span>
          <button
            onClick={onClose}
            style={{ fontSize: '20px', color: 'var(--text-muted)', cursor: 'pointer', padding: '4px 8px' }}
          >
            ✕
          </button>
        </div>

        <h3 style={{ fontSize: '1.75rem', marginBottom: '8px' }}>{caseStudy.title}</h3>
        <p style={{ color: 'var(--brand-dot)', fontWeight: '600', marginBottom: '20px' }}>
          Client: {caseStudy.fullDetails.client} • {caseStudy.fullDetails.timeline}
        </p>

        <div style={{ backgroundColor: 'var(--bg-surface)', padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
          <h4 style={{ fontSize: '14px', marginBottom: '4px' }}>The Challenge</h4>
          <p style={{ fontSize: '13.5px', color: 'var(--text-body)', marginBottom: '12px' }}>{caseStudy.problem}</p>

          <h4 style={{ fontSize: '14px', marginBottom: '4px' }}>Our Solution</h4>
          <p style={{ fontSize: '13.5px', color: 'var(--text-body)' }}>{caseStudy.solution}</p>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <h4 style={{ fontSize: '15px', marginBottom: '8px' }}>Key Measured Outcomes</h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {caseStudy.fullDetails.results.map((res, idx) => (
              <li key={idx} style={{ fontSize: '14px', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'var(--status-success)', fontWeight: '700' }}>✓</span> {res}
              </li>
            ))}
          </ul>
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
