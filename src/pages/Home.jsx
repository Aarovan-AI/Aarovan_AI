import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import heroImage from '../assets/Picture1.png';
import './Home.css';

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="home-hero">
        <div className="container">
          <div className="home-hero-grid">
            <AnimatedSection direction="left">
              <h1>Aarovan.ai — Turning Interview Communication into Measurable Outcomes</h1>
              <p>
                Every year, India produces one of the largest pools of technical talent in the world.
              </p>
              <p>
                And yet, a significant number of capable students struggle to convert their preparation into outcomes.
              </p>
              <p>
                Aarovan.ai is built to address this gap.
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
            <div className="proof-section">
              <h2>PROOF</h2>
              <p className="proof-intro">
                Aarovan.ai has been implemented through pilot programs in real student environments.
              </p>
              <div className="proof-stats">
                <div className="proof-stat-item">
                  <span className="proof-stat-icon">
                    <span className="material-symbols-outlined">group</span>
                  </span>
                  <span className="proof-stat-value">500+</span>
                  <span className="proof-stat-label">Engineering Students</span>
                </div>
                <div className="proof-stat-item">
                  <span className="proof-stat-icon">
                    <span className="material-symbols-outlined">integration_instructions</span>
                  </span>
                  <span className="proof-stat-label">Integrated into structured preparation workflows</span>
                </div>
              </div>
              <div className="proof-outcome">
                <p className="proof-outcome-label">Early outcomes indicate:</p>
                <div className="proof-outcome-value">
                  <span className="outcome-highlight">40–50%</span>
                  <span className="outcome-text">improvement in communication clarity and interview confidence</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── The Gap ── */}
      <section className="home-gap">
        <div className="container">
          <AnimatedSection>
            <div className="gap-header">
              <h2>THE GAP</h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="gap-intro">
              <p>
                Every year, India celebrates a milestone that is beginning to look less like a triumph and more like a warning.
              </p>
              <p>
                Over 1.5 million engineers graduate from Indian institutions — the largest technical talent pipeline in the world.
              </p>
              <p>And yet, according to Mercer Mettl's India Graduate Skill Index 2025:</p>
              <div className="gap-stat">
                <span className="stat-highlight">Only 42.6%</span> of graduates are employable
              </div>
              <p>
                Despite years of education and preparation, a large proportion of students are unable to perform effectively in interviews.
              </p>
            </div>
          </AnimatedSection>

          <div className="gap-sections">
            <AnimatedSection delay={200}>
              <div className="gap-section">
                <h3>WHERE THE GAP EMERGES</h3>
                <p>Students typically spend years building knowledge:</p>
                <ul>
                  <li>Learning technical concepts</li>
                  <li>Solving structured problems</li>
                  <li>Preparing for academic assessments</li>
                </ul>
                <p>However, interviews evaluate something fundamentally different.</p>
                <p>They require:</p>
                <ul>
                  <li>Clear articulation of ideas</li>
                  <li>Structured thinking in real time</li>
                  <li>The ability to explain, justify, and communicate under pressure</li>
                </ul>
                <p>While this gap is widely recognized, addressing it consistently remains a challenge.</p>
              </div>
            </AnimatedSection>

            <div className="gap-grid">
              <AnimatedSection delay={300}>
                <div className="gap-card">
                  <div className="gap-card-icon">
                    <span className="material-symbols-outlined">school</span>
                  </div>
                  <h4>At an institutional level</h4>
                  <p>Colleges aim to prepare students for placements, but face structural constraints.</p>
                  <ul>
                    <li>Conducting mock interviews for every student is difficult to scale</li>
                    <li>Faculty bandwidth is limited</li>
                    <li>Evaluation lacks consistency across large student groups</li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <div className="gap-card">
                  <div className="gap-card-icon">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <h4>At a student level</h4>
                  <p>Preparation is often individual and silent.</p>
                  <p>Students may understand concepts well, but are rarely trained to:</p>
                  <ul>
                    <li>Explain their reasoning clearly</li>
                    <li>Structure responses effectively</li>
                    <li>Communicate under real interview conditions</li>
                  </ul>
                  <p className="gap-conclusion">
                    As a result, communication becomes the limiting factor in an otherwise strong preparation process.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── What Aarovan.ai Does ── */}
      <section className="home-solution">
        <div className="container">
          <AnimatedSection>
            <div className="solution-header">
              <h2>WHAT AAROVAN.AI DOES</h2>
              <p className="solution-intro">
                Aarovan.ai introduces structure into this missing layer of preparation.
              </p>
            </div>
          </AnimatedSection>

          <div className="solution-grid">
            <AnimatedSection delay={100}>
              <div className="solution-card">
                <div className="solution-icon">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                <h3>Practice in realistic interview scenarios at scale</h3>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="solution-card">
                <div className="solution-icon">
                  <span className="material-symbols-outlined">balance</span>
                </div>
                <h3>Receive consistent and objective evaluation</h3>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="solution-card">
                <div className="solution-icon">
                  <span className="material-symbols-outlined">feedback</span>
                </div>
                <h3>Improve through actionable, structured feedback</h3>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="solution-card">
                <div className="solution-icon">
                  <span className="material-symbols-outlined">trending_up</span>
                </div>
                <h3>Track progress across multiple attempts</h3>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={500}>
            <div className="solution-footer">
              <p>The focus shifts from one-time preparation to continuous performance improvement.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="home-how">
        <div className="container">
          <AnimatedSection>
            <div className="home-how-header">
              <h2>HOW IT WORKS</h2>
              <p>Aarovan.ai operates as a structured system:</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <div className="how-process">
              <div className="process-flow">
                <span className="process-step">Practice</span>
                <span className="process-arrow">→</span>
                <span className="process-step">Evaluate</span>
                <span className="process-arrow">→</span>
                <span className="process-step">Feedback</span>
                <span className="process-arrow">→</span>
                <span className="process-step">Improve</span>
                <span className="process-arrow">→</span>
                <span className="process-step">Track</span>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <div className="how-intro">
              <p>Each stage contributes to measurable improvement:</p>
            </div>
          </AnimatedSection>

          <div className="how-steps-grid">
            <AnimatedSection delay={300}>
              <div className="how-step white">
                <div className="how-step-top">
                  <span className="material-symbols-outlined">record_voice_over</span>
                  <span className="how-step-number">01</span>
                </div>
                <h3>Practice</h3>
                <p>Builds familiarity with interview environments</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={350}>
              <div className="how-step tinted">
                <div className="how-step-top">
                  <span className="material-symbols-outlined">balance</span>
                  <span className="how-step-number">02</span>
                </div>
                <h3>Evaluation</h3>
                <p>Measures clarity, structure, and communication</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="how-step white">
                <div className="how-step-top">
                  <span className="material-symbols-outlined">feedback</span>
                  <span className="how-step-number">03</span>
                </div>
                <h3>Feedback</h3>
                <p>Identifies precise areas of improvement</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={450}>
              <div className="how-step tinted">
                <div className="how-step-top">
                  <span className="material-symbols-outlined">autorenew</span>
                  <span className="how-step-number">04</span>
                </div>
                <h3>Iteration</h3>
                <p>Strengthens responses over time</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <div className="how-step white">
                <div className="how-step-top">
                  <span className="material-symbols-outlined">trending_up</span>
                  <span className="how-step-number">05</span>
                </div>
                <h3>Tracking</h3>
                <p>Provides visibility into progress</p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={550}>
            <div className="how-conclusion">
              <p>This ensures that communication is actively developed, not assumed.</p>
            </div>
          </AnimatedSection>
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
