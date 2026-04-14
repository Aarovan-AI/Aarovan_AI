import AnimatedSection from '../components/AnimatedSection';
import './Features.css';

export default function Features() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="features-hero">
        <div className="container">
          <AnimatedSection>
            <h1>A Complete System for Interview Communication</h1>
            <p className="system-flow">Practice → Evaluate → Improve → Track → Repeat</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── System Flow ── */}
      <section className="features-system">
        <div className="container">
          <div className="system-grid">
            <AnimatedSection delay={100}>
              <div className="system-card">
                <div className="system-number">1</div>
                <div className="icon-circle">
                  <span className="material-symbols-outlined">psychology</span>
                </div>
                <h3>Interview Simulation</h3>
                <ul>
                  <li>Real interview scenarios</li>
                  <li>Technical + HR rounds</li>
                  <li>Adaptive questioning</li>
                  <li>Real-time response practice</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="system-card">
                <div className="system-number">2</div>
                <div className="icon-circle">
                  <span className="material-symbols-outlined">analytics</span>
                </div>
                <h3>Communication Evaluation</h3>
                <ul>
                  <li>Clarity of answers</li>
                  <li>Logical structure</li>
                  <li>Flow of explanation</li>
                  <li>Conciseness</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="system-card">
                <div className="system-number">3</div>
                <div className="icon-circle">
                  <span className="material-symbols-outlined">feedback</span>
                </div>
                <h3>Feedback System</h3>
                <ul>
                  <li>Detailed breakdown</li>
                  <li>Identify weak points</li>
                  <li>Structured improvement suggestions</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="system-card">
                <div className="system-number">4</div>
                <div className="icon-circle">
                  <span className="material-symbols-outlined">monitoring</span>
                </div>
                <h3>Progress Tracking</h3>
                <ul>
                  <li>Communication improvement over time</li>
                  <li>Readiness indicators</li>
                  <li>Performance trends</li>
                </ul>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={500}>
            <div className="integrated-system">
              <p>Not isolated features — a continuous improvement loop.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="features-how">
        <div className="container">
          <AnimatedSection>
            <div className="how-header">
              <h2>How It Works</h2>
              <p>A System Designed to Improve Communication — Step by Step</p>
            </div>
          </AnimatedSection>

          <div className="how-steps">
            <AnimatedSection delay={100}>
              <div className="how-step">
                <div className="step-badge">Step 1</div>
                <h3>Interview Simulation</h3>
                <p>Practice answering questions in real interview conditions.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={150}>
              <div className="how-step">
                <div className="step-badge">Step 2</div>
                <h3>Response Capture</h3>
                <p>Every answer is captured and analyzed for communication patterns.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="how-step">
                <div className="step-badge">Step 3</div>
                <h3>AI Evaluation</h3>
                <p>Responses are evaluated for:</p>
                <ul>
                  <li>Clarity</li>
                  <li>Structure</li>
                  <li>Logical flow</li>
                  <li>Conciseness</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={250}>
              <div className="how-step">
                <div className="step-badge">Step 4</div>
                <h3>Actionable Feedback</h3>
                <p>Students receive:</p>
                <ul>
                  <li>What went wrong</li>
                  <li>Why it matters</li>
                  <li>How to improve</li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="how-step">
                <div className="step-badge">Step 5</div>
                <h3>Iterative Practice</h3>
                <p>Repeat practice with improved responses.</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={350}>
              <div className="how-step">
                <div className="step-badge">Step 6</div>
                <h3>Progress Tracking</h3>
                <p>Track communication improvement over time.</p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={400}>
            <div className="how-outcome">
              <p>Communication becomes structured, confident, and measurable.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
