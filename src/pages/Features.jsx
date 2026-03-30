import AnimatedSection from '../components/AnimatedSection';
import './Features.css';

const features = [
  { 
    icon: 'analytics', 
    title: 'Multi-Dimensional Evaluation', 
    desc: 'Each interview is scored across key hiring signals',
    points: ['Communication clarity', 'Problem-solving approach', 'Technical understanding', 'Answer structure'],
    bg: 'fc-high', 
    iconBg: 'var(--tertiary-fixed)', 
    iconColor: 'var(--on-tertiary-fixed)' 
  },
  { 
    icon: 'description', 
    title: 'Actionable Feedback Reports', 
    desc: 'Students don\'t just get scores — they get clear guidance on what to improve',
    points: ['Specific improvement points', 'Mistake breakdown', 'Focus areas for next attempt'],
    bg: 'fc-white', 
    iconBg: 'var(--secondary-fixed)', 
    iconColor: 'var(--on-secondary-fixed)' 
  },
  { 
    icon: 'monitoring', 
    title: 'Performance Tracking Dashboard', 
    desc: 'Track how students improve over time',
    points: ['Individual progress tracking', 'Batch-level insights'],
    bg: 'fc-low', 
    iconBg: 'var(--primary-fixed)', 
    iconColor: 'var(--on-primary-fixed)' 
  },
];

export default function Features() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="features-hero">
        <div className="container">
          <AnimatedSection>
            <h1>What the Platform Actually Does</h1>
            <p>A clear breakdown of how Aarovan.ai helps students prepare for interviews.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Feature Bento Grid ── */}
      <section className="features-bento">
        <div className="container">
          <div className="f-bento-grid">
            {/* Main AI Card */}
            <AnimatedSection className="f-col-8">
              <div className="feature-card fc-main">
                <div>
                  <div className="icon-circle" style={{ background: 'var(--primary-fixed)' }}>
                    <span className="material-symbols-outlined" style={{ color: 'var(--on-primary-fixed)' }}>psychology</span>
                  </div>
                  <h3>AI Interview Simulation</h3>
                  <p>Run structured, role-based mock interviews that adapt to student responses.</p>
                  <ul style={{ marginLeft: '1.5rem', marginTop: '1rem', lineHeight: '1.8' }}>
                    <li>Domain-specific question sets</li>
                    <li>Dynamic follow-up questions</li>
                  </ul>
                </div>
                <div className="ai-visual">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsSKCCAig4Pr4-kxJcuDNrPVsri6ktAvybyFustjlQwCDhxERWlDvDSRFPDuTYZpRpQ_T6efCNKfBQs_s8d3c97E6hxR2DR5Um1OwoCMftJFthZak0q0fdqp79t8vT8hYSpZl_0QKNwv-pe_QVtyBcwWspZqAAUggNrSAPCTuMkHCwF_KoOUsmBl0fsftAW9_iqmNFTLrZZpNpz3m86VD5-L2tP7WtvNcEJLYBMpE8CqSEU3-G2zzDxNVIAJapGNeCP-tmrDLZdgw"
                    alt="AI interview simulation"
                  />
                  <div className="ai-visual-label">
                    <div className="glass-panel">
                      <span className="material-symbols-outlined">terminal</span>
                      Simulating Interview
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Instant Feedback */}
            <AnimatedSection className="f-col-4" delay={150}>
              <div className="feature-card fc-dark" style={{ height: '100%' }}>
                <div className="icon-circle" style={{ background: 'var(--primary-fixed-dim)' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--primary)' }}>bolt</span>
                </div>
                <h3>Instant feedback</h3>
                <p>Receive comprehensive, line-by-line analysis of code quality, architectural decisions, and soft-skill articulation within seconds.</p>
                <div className="progress-bar-wrapper">
                  <div className="progress-header">
                    <span>AI Evaluation Status</span>
                    <span style={{ fontWeight: 700 }}>100%</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: '100%' }} />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Remaining features */}
            {features.map((f, i) => (
              <AnimatedSection key={i} className="f-col-4" delay={i * 100}>
                <div className={`feature-card ${f.bg}`} style={{ height: '100%' }}>
                  <div className="icon-circle" style={{ background: f.iconBg }}>
                    <span className="material-symbols-outlined" style={{ color: f.iconColor }}>{f.icon}</span>
                  </div>
                  <h3 style={{ fontSize: '1.5rem' }}>{f.title}</h3>
                  <p>{f.desc}</p>
                  {f.points && (
                    <ul style={{ marginLeft: '1.5rem', marginTop: '1rem', lineHeight: '1.8' }}>
                      {f.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ul>
                  )}
                  {f.icon === 'monitoring' && (
                    <div className="feature-shimmer">
                      <div style={{ width: '75%' }} />
                      <div style={{ width: '100%' }} />
                      <div style={{ width: '85%' }} />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Placement Workflow ── */}
      <section className="features-edge">
        <div className="container">
          <div className="features-edge-grid">
            <AnimatedSection direction="left">
              <h2>Placement Workflow Support</h2>
              <p>Designed around actual hiring processes.</p>
              <div className="edge-checks">
                {['Practice different interview rounds', 'Simulate real placement journeys', 'Align preparation with company expectations'].map((label) => (
                  <div className="edge-check" key={label}>
                    <span className="material-symbols-outlined filled">check_circle</span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200}>
              <div className="edge-analysis-panel">
                <div className="edge-analysis-card glass-panel">
                  <div className="edge-card-header">
                    <span>Interview Progress</span>
                    <span className="edge-pulse-dot" />
                  </div>
                  <div className="edge-metric">
                    <div className="edge-metric-header">
                      <span>Technical Round</span>
                      <span>Complete</span>
                    </div>
                    <div className="edge-track">
                      <div className="edge-fill" style={{ width: '100%' }} />
                      <div className="edge-glow" style={{ left: '100%' }} />
                    </div>
                  </div>
                  <div className="edge-metric">
                    <div className="edge-metric-header">
                      <span>HR Round</span>
                      <span>In Progress</span>
                    </div>
                    <div className="edge-track">
                      <div className="edge-fill" style={{ width: '60%' }} />
                    </div>
                  </div>
                </div>
                <div className="edge-blob" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </main>
  );
}
