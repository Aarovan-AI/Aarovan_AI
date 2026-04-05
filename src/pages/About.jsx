import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import './About.css';

const approachSteps = [
  { title: 'Understand current level', desc: 'Identify where the student stands.', pulse: true },
  { title: 'Practice with AI interviews', desc: 'Simulate real interview scenarios.' },
  { title: 'Improve with feedback', desc: 'Get clear, actionable suggestions.' },
];

export default function About() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="about-hero">
        <div className="deco-shape" />
        <div className="container">
          <AnimatedSection>
            <div className="content">
              <span className="tag">About Us</span>
              <h1>Helping Students Become Interview-Ready</h1>
              <p>Aarovan.ai helps students practice real interviews and improve through structured feedback.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Problem ── */}
      <section className="about-mission">
        <div className="container">
          <div className="about-mission-grid">
            <AnimatedSection direction="left">
              <div className="mission-card editorial-shadow ghost-border">
                <span className="material-symbols-outlined">problem</span>
                <h2>The Problem</h2>
                <div className="mission-card-text">
                  <p>Most engineering students know the concepts, but struggle in interviews.</p>
                  <p>They don't know:</p>
                  <ul style={{ marginLeft: '1.5rem', marginTop: '1rem' }}>
                    <li>how to structure answers</li>
                    <li>how to communicate clearly</li>
                    <li>how to perform under pressure</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="mission-side">
                <div className="mission-side-card ghost-border">
                  <h3>What We Do</h3>
                  <p>Aarovan.ai helps students practice real interviews and improve through structured feedback.</p>
                </div>
                <div className="mission-side-card ghost-border">
                  <h3>Students Can</h3>
                  <ul style={{ marginLeft: '1.5rem', marginTop: '0.5rem' }}>
                    <li>Simulate interviews</li>
                    <li>Understand mistakes</li>
                    <li>Improve with each attempt</li>
                  </ul>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Our Approach ── */}
      <section className="about-journey">
        <div className="container">
          <AnimatedSection>
            <h2>Our Approach</h2>
            <p>A simple, structured process to help students improve.</p>
          </AnimatedSection>

          <div className="journey-grid">
            <div className="journey-line" />
            {approachSteps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 150}>
                <div className="journey-step">
                  <div className="journey-dot-wrapper editorial-shadow ghost-border">
                    <div className="journey-dot" />
                    {step.pulse && <div className="journey-pulse" />}
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Built For ── */}
      <section className="about-mission">
        <div className="container">
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <h2>Built for Students and Colleges</h2>
              <p>Aarovan.ai is designed to help:</p>
            </div>
          </AnimatedSection>
          <div className="about-mission-grid">
            <AnimatedSection direction="left">
              <div className="mission-side-card ghost-border" style={{ padding: '2rem' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: 'var(--accent-orange)', marginBottom: '1rem' }}>school</span>
                <h3>Students</h3>
                <p>Become placement-ready through structured practice and feedback.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={200}>
              <div className="mission-side-card ghost-border" style={{ padding: '2rem' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: 'var(--accent-orange)', marginBottom: '1rem' }}>analytics</span>
                <h3>Colleges</h3>
                <p>Track and improve student outcomes with clear insights.</p>
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
