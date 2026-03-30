import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import heroImage from '../assets/Picture1.png';
import './Home.css';

const howSteps = [
  {
    icon: 'record_voice_over',
    title: 'Students take AI mock interviews',
    desc: 'Practice technical and HR interviews in a realistic environment',
    variant: 'white',
  },
  {
    icon: 'psychology',
    title: 'AI evaluates performance',
    desc: 'Get scored on communication, problem-solving, and technical clarity',
    variant: 'tinted',
  },
  {
    icon: 'analytics',
    title: 'Instant feedback',
    desc: 'Receive clear, actionable suggestions to improve',
    variant: 'white',
  },
  {
    icon: 'dashboard',
    title: 'Colleges track progress',
    desc: 'View student readiness and performance over time',
    variant: 'tinted',
  },
];

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="home-hero">
        <div className="container">
          <div className="home-hero-grid">
            <AnimatedSection direction="left">
              <h1>Improve Student Placement Outcomes with AI</h1>
              <p>
                Aarovan.ai helps colleges make students interview-ready through
                AI-powered mock interviews and structured feedback.
              </p>
              <div className="home-hero-buttons">
                <Link to="/contact">
                  <button className="btn-primary gradient-primary btn-ripple">
                    Partner with Us
                  </button>
                </Link>
                <Link to="/contact">
                  <button className="btn-secondary">Request Demo</button>
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="home-hero-image-wrapper">
                <div className="home-hero-image">
                  <img
                    src={heroImage}
                    alt="Student practicing interview with AI interface"
                  />
                  <div className="home-hero-image-overlay" />
                </div>
                <div className="home-hero-blob" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── Pilot Info ── */}
      <section className="home-stats">
        <div className="container">
          <AnimatedSection>
            <div className="pilot-info">
              <p className="pilot-text">
                Used in pilot programs with engineering students to improve interview confidence and performance.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="home-how">
        <div className="container">
          <AnimatedSection>
            <div className="home-how-header">
              <h2>How It Works</h2>
              <p>Our structured approach ensures students bridge the gap between academic knowledge and corporate expectations.</p>
            </div>
          </AnimatedSection>

          <div className="how-steps-grid">
            {howSteps.map((step, i) => (
              <AnimatedSection key={i} delay={i * 120}>
                <div className={`how-step ${step.variant}`}>
                  <div className="how-step-top">
                    <span className="material-symbols-outlined">{step.icon}</span>
                    <span className="how-step-number">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bento Grid ── */}
      <section className="home-bento">
        <div className="container">
          <div className="bento-grid">
            {/* Row 1 */}
            <AnimatedSection className="bento-8" delay={0}>
              <div className="bento-hero-card glass-highlight ghost-border">
                <span className="material-symbols-outlined bg-icon">model_training</span>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <span className="badge">Advanced AI</span>
                  <h2>Unrivaled Interview Analytics</h2>
                  <p>Go beyond simple yes/no. Our AI captures nuances in tone, technical logic, and problem-solving patterns that human interviewers might miss.</p>
                  <a href="#" className="explore-link">
                    Explore Technology
                    <span className="material-symbols-outlined" style={{ fontSize: '0.875rem' }}>arrow_forward</span>
                  </a>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="bento-4" delay={150}>
              <div className="bento-dark-card" style={{ height: '100%' }}>
                <span className="material-symbols-outlined icon-top">verified_user</span>
                <h3>Academic Integrity</h3>
                <p>Designed with engineering deans to ensure pedagogical alignment and rigorous evaluation standards.</p>
                <div className="avatars-row">
                  <div className="avatar a1" />
                  <div className="avatar a2" />
                  <div className="avatar a3" />
                  <div className="avatar a4">+12</div>
                </div>
              </div>
            </AnimatedSection>

            {/* Row 2 */}
            <AnimatedSection className="bento-4" delay={100}>
              <div className="bento-small-card ghost-border" style={{ height: '100%' }}>
                <h4>24/7 Access</h4>
                <p>Empower students to practice anytime, anywhere.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection className="bento-8" delay={200}>
              <div className="bento-glass-row glass-card glass-highlight ghost-border">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <div className="icon-box">
                    <span className="material-symbols-outlined">rocket_launch</span>
                  </div>
                  <div>
                    <h4>Accelerated Placements</h4>
                    <p>Reduce the time-to-hire by presenting interview-ready candidates.</p>
                  </div>
                </div>
                <span className="material-symbols-outlined trailing-icon">trending_up</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="home-cta">
        <div className="container">
          <AnimatedSection direction="scale">
            <h2>Ready to Elevate Your Institution?</h2>
            <p>Join the ranks of leading engineering colleges prioritizing student success through AI-led training.</p>
            <div className="home-cta-buttons">
              <Link to="/contact">
                <button className="btn-primary gradient-primary btn-ripple">Partner with Us Today</button>
              </Link>
              <Link to="/contact">
                <button className="btn-outline">Talk to an Expert</button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
