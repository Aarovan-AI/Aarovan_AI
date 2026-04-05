import { useState } from 'react';
import AnimatedSection from '../components/AnimatedSection';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    partnershipType: 'University Placement Cell',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const apiUrl = import.meta.env.DEV ? 'http://localhost:3001' : '';

    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Thank you! Your inquiry has been sent successfully.' });
        setFormData({
          name: '',
          email: '',
          partnershipType: 'University Placement Cell',
          message: ''
        });
      } else {
        setStatus({ type: 'error', message: data.error || 'Failed to send inquiry. Please try again.' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Network error. Please check if the server is running.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <main>
      {/* ── Hero ── */}
      <section className="contact-hero">
        <div className="container">
          <AnimatedSection>
            <span className="tag">Collaboration</span>
            <h1>Partner with Us</h1>
            <p>Join our mission to democratize elite interview preparation. We collaborate with forward-thinking institutions.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Main Grid ── */}
      <div className="container">
        <div className="contact-grid">
          {/* Form */}
          <AnimatedSection direction="left">
            <div className="contact-form-card">
              <h2>Send an Inquiry</h2>
              {status.message && (
                <div className={`form-status ${status.type}`}>
                  {status.message}
                </div>
              )}
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="John Doe" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Institution Email</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="john@university.edu" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group full-width">
                  <label>Partnership Type</label>
                  <select 
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleChange}
                    required
                  >
                    <option>University Placement Cell</option>
                    <option>Technical Bootcamp</option>
                    <option>Corporate Training</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group full-width">
                  <label>Message</label>
                  <textarea 
                    name="message"
                    placeholder="Tell us about your institution..." 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="full-width">
                  <button 
                    type="submit" 
                    className="submit-btn gradient-primary btn-ripple"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
                  </button>
                </div>
              </form>
            </div>
          </AnimatedSection>

          {/* Side */}
          <AnimatedSection direction="right" delay={200}>
            <div className="contact-side">
              <div className="contact-details-card">
                <h3>Direct Contact</h3>
                <div className="contact-item">
                  <div className="icon-circle">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <div className="contact-label">Email</div>
                    <div className="contact-value">aarovan.ai@gmail.com</div>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="icon-circle">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <div className="contact-label">Headquarters</div>
                    <div className="contact-value">Delhi, IN</div>
                  </div>
                </div>
              </div>

              <div className="contact-quote glass-panel">
                <span className="material-symbols-outlined bg-deco">school</span>
                <blockquote>
                  "The Digital Scholar represents the union of AI precision and pedagogical excellence."
                </blockquote>
                <div className="attribution">— Engineering Excellence Division</div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Progress Thread */}
        <AnimatedSection>
          <div className="contact-thread">
            <div className="contact-thread-line">
              <div className="contact-thread-dot" />
            </div>
            <div className="contact-thread-label">AI-Driven Professional Growth</div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection direction="scale">
          <div className="contact-cta">
            <div className="bg-texture" style={{
              backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAWuvgpgkSazT2Hdw34Wo0S_TPlSq4qcKEcT9Z4IaaAdSVpGsrIel-pGMKP7S1ULPXsAdwzqn-5JJTcEP2bBJ3ICJo1b2zSTUIC60DUQSoMiI_ONQjexNq5vmjNWkj5B0gkNe5nrSoFSgs1vwd8mWVU-Um3X_juutBoAAIIIuRAdKwUPvy0FebPuLUOupgctZrzgpSDS8FDXUbASEduWaW3htZnhoYuRgRKUsh9bN4IpQzPYj-eE6TnZam3S2logw4bnFfYOUTUWcQ')"
            }} />
            <div className="contact-cta-inner">
              <div>
                <h2>Transform Placement Preparation at Your Institution</h2>
                <p>Equip your students with the elite tools they need to succeed in top-tier technical interviews.</p>
              </div>
              <div className="contact-cta-buttons">
                <button className="btn-white" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Request Demo</button>
                <button className="btn-ghost-white" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Partner with Us</button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
