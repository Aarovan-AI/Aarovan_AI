import AnimatedSection from '../components/AnimatedSection';
import './Contact.css';

export default function Contact() {
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
              <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label>Institution Email</label>
                  <input type="email" placeholder="john@university.edu" />
                </div>
                <div className="form-group full-width">
                  <label>Partnership Type</label>
                  <select>
                    <option>University Placement Cell</option>
                    <option>Technical Bootcamp</option>
                    <option>Corporate Training</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group full-width">
                  <label>Message</label>
                  <textarea placeholder="Tell us about your institution..." rows="5" />
                </div>
                <div className="full-width">
                  <button type="submit" className="submit-btn gradient-primary btn-ripple">
                    Submit Inquiry
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
                <button className="btn-white">Request Demo</button>
                <button className="btn-ghost-white">Partner with Us</button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
