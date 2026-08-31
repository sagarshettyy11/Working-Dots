import React from 'react';
import architectureEcosystemImg from '../../assets/images/architecture_ecosystem.jpg';

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="section-wrapper">
      <div className="container">
        <div className="philosophy-card">
          <div className="philosophy-text">
            <span className="section-eyebrow">OUR PHILOSOPHY</span>
            <h3>Stop Juggling Multiple Freelancers & Disconnected Agencies.</h3>
            <p>
              Most startups lose weeks explaining designs to engineers and debugging bot integrations that break silently. We formed Working Dots to solve this exact problem: a single, high-trust engineering unit that takes responsibility for your complete product lifecycle.
            </p>
            <p>
              From the initial user flow in Figma to high-performance React frontends and deterministic AI backend pipelines, we connect every dot so you can focus on growing your business.
            </p>

            <div className="philosophy-points">
              <div className="philosophy-point-item">
                <div className="point-icon">01</div>
                <div>
                  <div className="point-title">Design & Engineering Alignment</div>
                  <div className="point-desc">
                    Designers who understand code tokens, and developers who respect pixel hierarchy. Zero translation loss.
                  </div>
                </div>
              </div>

              <div className="philosophy-point-item">
                <div className="point-icon">02</div>
                <div>
                  <div className="point-title">Deterministic Automation Pipelines</div>
                  <div className="point-desc">
                    We don't build flaky demo bots. We engineer resilient workflows with automated retries and error alerts.
                  </div>
                </div>
              </div>

              <div className="philosophy-point-item">
                <div className="point-icon">03</div>
                <div>
                  <div className="point-title">Complete Code & Asset Ownership</div>
                  <div className="point-desc">
                    You receive 100% intellectual property, full GitHub repositories, Figma source files, and live deployment docs.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="philosophy-visual-box">
            <div className="philosophy-visual-badge">
              <span className="live-pulse-dot"></span>
              <span>Unified Architecture • Design to Deployment</span>
            </div>
            <div className="philosophy-img-wrapper">
              <img
                src={architectureEcosystemImg}
                alt="Working Dots Connected Digital Architecture Ecosystem"
                className="philosophy-img"
                loading="lazy"
              />
            </div>
            <div className="philosophy-visual-footer">
              <span className="footer-tag">Figma Tokens</span>
              <span className="footer-arrow">➔</span>
              <span className="footer-tag">React / Next.js</span>
              <span className="footer-arrow">➔</span>
              <span className="footer-tag">Mobile Native</span>
              <span className="footer-arrow">➔</span>
              <span className="footer-tag">AI Workflows</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
