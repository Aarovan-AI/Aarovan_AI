import AnimatedSection from '../components/AnimatedSection';
import './Team.css';

const members = [
  {
    name: 'Rohan Garg',
    role: 'Product Leader',
    desc: "Product leader with 10+ years of experience across B2B SaaS and consumer technology products, with a strong focus on translating user needs into scalable solutions. He has led product development across data, ad-tech, and sports-tech, including scaling products from 0 to 1 and driving user growth.",
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5jz06hs4IuRMXbaKuatF7jrkLX_mHL9tonq9THpF5r7ws1KoF1FBLuFHUNG-v3yJA0XQXLF5OdHHw7dVOuOD-I0G2YQZwO264ElXtqLcTztz9Q_TqpQt-inxXQlOAoTjXB4pszbYli4yEU-4xDMYkDDcwJc5583wYtadaxepVwKfdCgPwtJDLVvZ5Vn1isJDqDqeJDpLBD4IQxA4pKFbkVCZOKJGvZb6V3gB2G-UbM8eGd-YHCFWMgLE3gpHBhKnya8itoupc0dY',
    icon: 'code',
    badgeBg: 'rgba(233, 232, 232, 0.8)',
  },
  {
    name: 'Avennya Goel',
    role: 'Financial Analyst',
    desc: 'Financial Analyst with experience across analytics, and AI-enabled platforms, with a strong focus on data-driven decision-making and performance evaluation. She has worked across consulting, fintech, and SaaS environments, contributing to financial modelling, strategy, and operational planning.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATmWcMU6C7XCSzKLD2lckgD2xCZ-e5US1tY29C3nH5d0-YguWc016e-_S7VL397P0lrQ66Jnc6KvI-wKFwztpvcmjvtJaKlAJcb4nRBmU0CdZfDRQzA5zPUZtvKzagaxqJ2RfJ8PkiGtUz4TpdlXVxgka5L_7skNLRq2a3TdaH8zCVLiFcZN9_WA5SF39hRtn2ZwOEE6TNHPJRhZpLvmMjKxC2JbPHNojqpXnJ4QL4kN2SrLJOaLE-xWQCqtqz2rr8TmgNURTQfvw',
    icon: 'psychology',
    badgeBg: 'rgba(176, 205, 190, 0.8)',
  },
];

export default function Team() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="team-hero">
        <div className="container">
          <AnimatedSection>
            <h1>Meet the Team</h1>
            <p>Built by a team combining expertise in AI, product, and education. We are dedicated to redefining how engineering excellence is nurtured.</p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Team Grid ── */}
      <section className="team-grid-section">
        <div className="container">
          <div className="team-bento">
            {/* Philosophy */}
            <AnimatedSection className="t-col-12" delay={0}>
              <div className="team-philosophy-card">
                <div className="blur-circle" />
                <span className="material-symbols-outlined">school</span>
                <h3>Our Team</h3>
                <p>A small team focused on solving one problem: helping students become confident and interview-ready.</p>
              </div>
            </AnimatedSection>

            {/* Member Cards */}
            {members.map((m, i) => (
              <AnimatedSection key={i} className="t-col-6" delay={i * 120}>
                <div className="team-member-card editorial-shadow">
                  <div className="team-member-image">
                    <img src={m.img} alt={`Portrait of ${m.name}`} />
                    <div className="badge-circle" style={{ background: m.badgeBg }}>
                      <span className="material-symbols-outlined" style={{ color: 'var(--primary)', fontSize: '1.25rem' }}>{m.icon}</span>
                    </div>
                  </div>
                  <div className="team-member-info">
                    <h2>{m.name}</h2>
                    <div className="role">{m.role}</div>
                    <p>{m.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Progress Thread ── */}
      <section className="team-progress">
        <div className="container">
          <AnimatedSection>
            <div className="team-progress-inner">
              <div className="team-progress-text">
                <h3>The Aarovan Standard</h3>
                <p>Our engineering team is developing ultra-precision AI analysis tools for the next generation of interviews.</p>
              </div>
              <div className="team-progress-bar">
                <div className="thread-track">
                  <div className="thread-fill" style={{ width: '66%' }} />
                </div>
                <div className="thread-labels">
                  <span>Analysis Engine</span>
                  <span>68% Deployment</span>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
