import React, { useState } from 'react';

export default function ContactSection() {
  const [selectedServices, setSelectedServices] = useState(['Website Development']);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const availableServices = [
    'Website Development',
    'Mobile App Development',
    'AI Automation',
    'WhatsApp Ordering Systems',
    'Restaurant & Café Suites',
    'UI/UX Design',
    'Branding & Social Media Growth',
  ];

  const toggleServiceSelection = (serviceName) => {
    if (selectedServices.includes(serviceName)) {
      setSelectedServices(selectedServices.filter((s) => s !== serviceName));
    } else {
      setSelectedServices([...selectedServices, serviceName]);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="container">
        <div className="contact-hub-wrapper">
          <div className="contact-sidebar">
            <div className="contact-sidebar-header">
              <span className="section-eyebrow">START A PROJECT</span>
              <h3>Let’s Connect the Dots on Your Idea.</h3>
              <p>
                Tell us about your project goals. We’ll review your requirements and provide a free architecture roadmap & estimate within 12 hours.
              </p>
            </div>

            <div className="contact-channels">
              {/* Primary Email */}
              <a href="mailto:contact@workingdots.in" className="channel-card">
                <div className="channel-icon">✉️</div>
                <div className="channel-info">
                  <h4>Project Inquiries</h4>
                  <p>contact@workingdots.in</p>
                </div>
              </a>

              {/* Support Email */}
              <a href="mailto:support@workingdots.in" className="channel-card">
                <div className="channel-icon">🛠️</div>
                <div className="channel-info">
                  <h4>Client Support & SLA</h4>
                  <p>support@workingdots.in</p>
                </div>
              </a>

              {/* WhatsApp / Phone Direct */}
              <a href="https://wa.me/916363657381" target="_blank" rel="noopener noreferrer" className="channel-card">
                <div className="channel-icon">💬</div>
                <div className="channel-info">
                  <h4>Phone & WhatsApp</h4>
                  <p>+91 63636 57381</p>
                </div>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com/workingdots.in" target="_blank" rel="noopener noreferrer" className="channel-card">
                <div className="channel-icon">📸</div>
                <div className="channel-info">
                  <h4>Instagram</h4>
                  <p>@workingdots.in</p>
                </div>
              </a>
            </div>

            <div style={{ fontSize: '12.5px', color: 'var(--text-muted)' }}>
              🔒 <strong>Zero Commitment:</strong> 30-min discovery call • Actionable architecture plan included.
            </div>
          </div>

          <div className="contact-form-container">
            {formSubmitted ? (
              <div className="form-success-banner">
                <div style={{ fontSize: '36px', marginBottom: '12px' }}>🎉</div>
                <h3 style={{ marginBottom: '8px', color: 'var(--text-primary)' }}>Inquiry Received!</h3>
                <p style={{ color: 'var(--text-body)', fontSize: '14.5px', marginBottom: '20px' }}>
                  Thank you, <strong>{formData.name}</strong>. Our team will review your requirements and reach out to you at <strong>{formData.email}</strong> or WhatsApp within 12 hours.
                </p>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', company: '', message: '' });
                  }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                  <label className="form-label">Services You Need (Select all that apply):</label>
                  <div className="service-selector-grid">
                    {availableServices.map((srv) => (
                      <button
                        type="button"
                        key={srv}
                        className={`service-pill-btn ${selectedServices.includes(srv) ? 'selected' : ''}`}
                        onClick={() => toggleServiceSelection(srv)}
                      >
                        {selectedServices.includes(srv) ? '✓ ' : '+ '}
                        {srv}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Your Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. Alex Morgan"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Work Email *</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="alex@company.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="+91 63636 57381"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company / Project Name</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. Acme Studio"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Project Description & Target Goals</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Briefly describe what you want to build or automate, target timeline, or problems you're solving..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px 28px' }}>
                  Send Project Inquiry →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
