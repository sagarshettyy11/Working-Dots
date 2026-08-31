import React, { useState } from 'react';
import { PROJECTS_DATA } from '../../lib/projects-data';

export default function PortfolioSection({ onSelectCaseStudy, navigate }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filterTabs = ['All', 'Web Development', 'Mobile Apps', 'AI Automations'];

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  const handleExploreAllProjects = (e) => {
    e.preventDefault();
    if (navigate) {
      navigate('projects');
    }
  };

  return (
    <section id="work" className="section-wrapper">
      <div className="container">
        <div className="section-header">
          <div className="eyebrow">
            <span className="section-eyebrow">FEATURED WORK & CASE STUDIES</span>
          </div>
          <h2>Real Products. Real Workflows. Real Impact.</h2>
          <p>
            Explore how we’ve helped founders and operators eliminate bottlenecks, build modern software, and scale with confidence.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              className={`filter-tab ${activeFilter === tab ? 'active' : ''}`}
              onClick={() => setActiveFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="portfolio-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => onSelectCaseStudy && onSelectCaseStudy(project)}
            >
              <div className="project-preview-frame">
                <div className="mockup-header-bar">
                  <span className="mockup-dot red"></span>
                  <span className="mockup-dot yellow"></span>
                  <span className="mockup-dot green"></span>
                  <span className="mockup-url-chip">
                    {project.category} • {project.tech[0]}
                  </span>
                  <span className="mockup-action-hint">Click to inspect ↗</span>
                </div>
                <div className="project-img-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-preview-img"
                    loading="lazy"
                  />
                  <div className="project-preview-overlay">
                    <span className="overlay-badge">View Case Study Deep-Dive →</span>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <div className="project-category-row">
                  <span className="project-category-badge">{project.tag}</span>
                  <span className="project-metric-badge">★ {project.metric}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-problem-solution">{project.solution}</p>

                <div className="project-tech-tags">
                  {project.tech.map((t, idx) => (
                    <span key={idx} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-card-actions">
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onSelectCaseStudy) onSelectCaseStudy(project);
                    }}
                  >
                    View Case Study Deep-Dive →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Projects CTA */}
        <div className="section-bottom-action">
          <a
            href="/projects"
            className="btn btn-primary"
            onClick={handleExploreAllProjects}
          >
            Explore All Case Studies & System Architectures →
          </a>
        </div>
      </div>
    </section>
  );
}
