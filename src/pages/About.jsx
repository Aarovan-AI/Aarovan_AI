import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import './About.css';

export default function About() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="about-hero">
        <div className="deco-shape" />
        <div className="container">
          <AnimatedSection>
            <div className="content">
              <h1>Bridging the Gap Between Knowledge and Communication</h1>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Background ── */}
      <section className="about-background">
        <div className="container">
          <AnimatedSection>
            <div className="background-header">
              <h2>BACKGROUND</h2>
              <p>
                The education system is designed to build knowledge and technical capability at scale.
              </p>
              <p>
                India's engineering ecosystem produces one of the largest talent pipelines globally. However, employability outcomes indicate that knowledge alone is not sufficient.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Core Challenge ── */}
      <section className="about-challenge">
        <div className="container">
          <AnimatedSection>
            <div className="challenge-header">
              <h2>The Core Challenge</h2>
            </div>
          </AnimatedSection>

          <div className="challenge-grid">
            <AnimatedSection delay={100}>
              <div className="challenge-card">
                <div className="challenge-icon">
                  <span className="material-symbols-outlined">school</span>
                </div>
                <h3>Students graduate with:</h3>
                <ul>
                  <li>Strong academic foundations</li>
                  <li>Technical understanding</li>
                  <li>Problem-solving ability</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="challenge-card">
                <div className="challenge-icon">
                  <span className="material-symbols-outlined">work</span>
                </div>
                <h3>However, hiring processes assess:</h3>
                <ul>
                  <li>Clarity of communication</li>
                  <li>Structure of responses</li>
                  <li>Ability to think and articulate under pressure</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={300}>
            <div className="challenge-conclusion">
              <p>This creates a disconnect between preparation and performance.</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div className="challenge-additional">
              <h3>In addition:</h3>
              <div className="additional-grid">
                <div className="additional-item">
                  <span className="material-symbols-outlined">visibility_off</span>
                  <p>Interview exposure is limited</p>
                </div>
                <div className="additional-item">
                  <span className="material-symbols-outlined">sync_problem</span>
                  <p>Practice opportunities are inconsistent</p>
                </div>
                <div className="additional-item">
                  <span className="material-symbols-outlined">feedback</span>
                  <p>Feedback is often generic or unavailable</p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={500}>
            <div className="challenge-result">
              <p>As a result, many capable students underperform during interviews.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── The Approach ── */}
      <section className="about-approach">
        <div className="container">
          <AnimatedSection>
            <div className="approach-header">
              <h2>THE APPROACH</h2>
              <p className="approach-intro">
                Aarovan.ai is built on the premise that communication can be systematically developed.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="approach-intro-text">
              <p>It introduces a structured system where:</p>
            </div>
          </AnimatedSection>

          <div className="approach-grid">
            <AnimatedSection delay={200}>
              <div className="approach-card">
                <div className="approach-icon">
                  <span className="material-symbols-outlined">autorenew</span>
                </div>
                <h3>Practice is continuous</h3>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={250}>
              <div className="approach-card">
                <div className="approach-icon">
                  <span className="material-symbols-outlined">balance</span>
                </div>
                <h3>Evaluation is objective</h3>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="approach-card">
                <div className="approach-icon">
                  <span className="material-symbols-outlined">feedback</span>
                </div>
                <h3>Feedback is actionable</h3>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={350}>
              <div className="approach-card">
                <div className="approach-icon">
                  <span className="material-symbols-outlined">trending_up</span>
                </div>
                <h3>Improvement is measurable</h3>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={400}>
            <div className="approach-conclusion">
              <p>
                Over time, this transforms how students approach interviews — from one-time events to repeatable skills.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── What This Enables ── */}
      <section className="about-enables">
        <div className="container">
          <AnimatedSection>
            <div className="enables-header">
              <h2>WHAT THIS ENABLES</h2>
            </div>
          </AnimatedSection>

          <div className="enables-grid">
            <AnimatedSection delay={100}>
              <div className="enables-card">
                <div className="enables-card-header">
                  <div className="enables-icon">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <h3>For Students</h3>
                </div>
                <ul>
                  <li>Improved clarity and structure in communication</li>
                  <li>Increased confidence through repetition</li>
                  <li>Better performance under interview conditions</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="enables-card">
                <div className="enables-card-header">
                  <div className="enables-icon">
                    <span className="material-symbols-outlined">apartment</span>
                  </div>
                  <h3>For Institutions</h3>
                </div>
                <ul>
                  <li>Scalable interview preparation across large cohorts</li>
                  <li>Standardized evaluation frameworks</li>
                  <li>Visibility into student readiness and improvement</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Proof ── */}
      <section className="about-proof">
        <div className="container">
          <AnimatedSection>
            <div className="proof-header">
              <h2>PROOF</h2>
            </div>
          </AnimatedSection>

          <div className="proof-items">
            <AnimatedSection delay={100}>
              <div className="proof-item">
                <div className="proof-item-icon">
                  <span className="material-symbols-outlined">science</span>
                </div>
                <p>Developed and tested through pilot programs</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="proof-item">
                <div className="proof-item-icon">
                  <span className="material-symbols-outlined">group</span>
                </div>
                <p>Used by over <strong>500 students</strong></p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="proof-item">
                <div className="proof-item-icon">
                  <span className="material-symbols-outlined">trending_up</span>
                </div>
                <p>Demonstrating early improvements of <strong>40–50%</strong></p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Team Teaser ── */}
      <section className="about-team-teaser">
        <div className="container">
          <div className="about-team-grid">
            <AnimatedSection direction="left">
              <div className="about-team-image-wrapper">
                <div className="about-team-image editorial-shadow">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvneHkPE7r1obGOagco7FxC6e3psBP326S7wiLuJMnen2T42M8VZNFglnP95axSWtrAzs5zwSrMoVib6ffQ4VA0ez0wgoENvnngJmo13YThdaohs2vzbd5yYkOOusi5p0oTNwz85pkUsVck9_HtqPF9ej5OBRAhYgJPqXvzJE6RIunEaQNJ0Q21cvUl0PgGWaC_vCUzgmmi0dRc0QNhTTr1FF8bX7vTAsdWFypeMxlFzBgqT2Ifua72znqH1awrd_u14s8OsUO5V4"
                    alt="Team working together"
                  />
                  <div className="about-team-image-gradient" />
                </div>
                <div className="about-team-floating-card editorial-shadow ghost-border">
                  <p>"Focused on solving one problem: helping students become confident and interview-ready."</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="about-team-text">
                <h2>Meet the Team</h2>
                <p>A small team focused on solving one problem: helping students become confident and interview-ready.</p>
                <Link to="/team" className="link-btn">Learn More About the Team</Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Glass CTA ── */}
      <section className="about-cta">
        <div className="container">
          <AnimatedSection direction="scale">
            <div className="about-cta-card glass-panel editorial-shadow ghost-border">
              <h2>Get Started</h2>
              <p>Join our early access program to bring structured interview preparation to your college.</p>
              <div className="about-cta-buttons">
                <Link to="/contact">
                  <button className="btn-primary gradient-primary btn-ripple">Contact Us</button>
                </Link>
                <Link to="/features">
                  <button className="btn-outline">Learn More</button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
          <div className="about-cta-blob" />
        </div>
      </section>
    </main>
  );
}
