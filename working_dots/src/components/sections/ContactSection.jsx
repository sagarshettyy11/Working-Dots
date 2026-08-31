import React, { useState } from 'react';
import { submitContactInquiry } from '../../integrations/contact-service';
import { BRAND_CONFIG, SOCIAL_LINKS } from '../../lib/constants';

export default function ContactSection() {
  const [selectedServices, setSelectedServices] = useState(['Website Development']);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [whatsappTriggerUrl, setWhatsappTriggerUrl] = useState('');

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    timeline: 'Ready to start immediately',
  });

  const availableServices = [
    'Website Development',
    'Mobile App Development',
    'AI Automation & n8n',
    'Restaurant & Café POS',
    'UI/UX Design Systems',
    'Cloud Architecture & DevOps',
    'Branding & Social Growth',
  ];

  const toggleServiceSelection = (serviceName) => {
    if (selectedServices.includes(serviceName)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== serviceName));
      }
    } else {
      setSelectedServices([...selectedServices, serviceName]);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        projectType: selectedServices.join(', '),
        timeline: formData.timeline,
        message: formData.message,
      };

      const res = await submitContactInquiry(payload);
      setWhatsappTriggerUrl(res.whatsappUrl);
      setFormSubmitted(true);
    } catch (err) {
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="container">
        <div className="contact-hub-wrapper">
          <div className="contact-sidebar">
            <div className="contact-sidebar-header">
              <span className="section-eyebrow">START A PROJECT</span>
              <h3>Let’s Connect the Dots on Your Next Big Build.</h3>
              <p>
                Tell us about your project goals. We’ll analyze your requirements and provide a free architecture roadmap & sprint estimate within 12 hours.
              </p>
            </div>

            <div className="contact-channels">
              {/* Primary Email */}
              <a href={SOCIAL_LINKS.email} className="channel-card">
                <div className="channel-icon">✉️</div>
                <div className="channel-info">
                  <h4>Project Inquiries</h4>
                  <p>{BRAND_CONFIG.contactEmail}</p>
                </div>
              </a>

              {/* Support Email */}
              <a href={SOCIAL_LINKS.supportEmail} className="channel-card">
                <div className="channel-icon">🛠️</div>
                <div className="channel-info">
                  <h4>Client Support & SLA</h4>
                  <p>{BRAND_CONFIG.supportEmail}</p>
                </div>
              </a>

              {/* WhatsApp / Phone Direct */}
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-card"
              >
                <div className="channel-icon">💬</div>
                <div className="channel-info">
                  <h4>Phone & WhatsApp Direct</h4>
                  <p>{BRAND_CONFIG.phone}</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="channel-card"
              >
                <div className="channel-icon">📸</div>
                <div className="channel-info">
                  <h4>Instagram</h4>
                  <p>@workingdots.in</p>
                </div>
              </a>
            </div>

            <div className="contact-guarantee-note">
              🔒 <strong>Zero Risk Guarantee:</strong> 30-min discovery call • Actionable technical architecture plan included with zero obligations.
            </div>
          </div>

          <div className="contact-form-container">
            {formSubmitted ? (
              <div className="form-success-banner">
                <div style={{ fontSize: '42px', marginBottom: '12px' }}>🎉</div>
                <h3 style={{ marginBottom: '8px', color: 'var(--text-primary)' }}>Inquiry Received!</h3>
                <p style={{ color: 'var(--text-body)', fontSize: '14.5px', marginBottom: '20px', lineHeight: '1.6' }}>
                  Thank you, <strong>{formData.name}</strong>. Our senior software architects are reviewing your project scope and will respond to <strong>{formData.email}</strong> within 12 hours.
                </p>

                {whatsappTriggerUrl && (
                  <div style={{ marginBottom: '20px' }}>
                    <a
                      href={whatsappTriggerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                    >
                      <span>💬 Open Instant WhatsApp Chat with Team</span>
                    </a>
                  </div>
                )}

                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: '', email: '', phone: '', company: '', message: '', timeline: 'Ready to start immediately' });
                  }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit}>
                {errorMessage && (
                  <div className="form-error-banner" style={{ padding: '12px', background: '#fef2f2', color: '#b91c1c', borderRadius: '8px', marginBottom: '16px', fontSize: '14px' }}>
                    ⚠️ {errorMessage}
                  </div>
                )}

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
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Company / Product Name</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="e.g. Acme Cloud Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Project Overview & Business Goals *</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Briefly describe what you want to build or automate, target features, timelines, or bottlenecks you're solving..."
                    required
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  style={{ padding: '14px 28px' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting Scope Request...' : 'Send Project Inquiry →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
