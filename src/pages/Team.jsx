import AnimatedSection from '../components/AnimatedSection';
import './Team.css';
import rohanImage from '../assets/Picture2.jpg';
import avennyaImage from '../assets/Picture1.jpg';

const members = [
  {
    name: 'Rohan Garg',
    role: 'Co-Founder',
    desc: "Product leader with 10+ years of experience across India and the US, spanning product management and data analytics. At Dream11 and PokerBaazi, built growth and retention products at scale for ~20M daily active users. Previously at Publicis Media and comScore, developed data platforms and visualization tools for global ad agencies. MBA from ISB, MMS from Duke University, and an engineering degree from NIT Kurukshetra.",
    img: rohanImage,
    icon: 'code',
    badgeBg: 'rgba(233, 232, 232, 0.8)',
  },
  {
    name: 'Avennya Goel',
    role: 'Co-Founder',
    desc: 'Finance professional with 4+ years of experience across analytics, financial strategy, and AI-enabled platforms. Worked at Deloitte on financial analysis, reporting automation, and performance evaluation across large-scale systems, and at Mercor on financial modelling within AI-driven workflows. MBA in Quantitative Finance and Entrepreneurship from Babson College, focused on building data-driven systems that measure performance, identify gaps, and drive measurable outcome.',
    img: avennyaImage,
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
            <h1>Focused on Building Outcome-Driven Systems</h1>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Team Grid ── */}
      <section className="team-grid-section">
        <div className="container">
          <div className="team-bento">
            {/* Mentorship */}
            <AnimatedSection className="t-col-12" delay={0}>
              <div className="team-mentorship-card">
                <div className="blur-circle" />
                <span className="material-symbols-outlined">school</span>
                <h3>Mentorship</h3>
                <p className="mentorship-subtitle">Built with guidance from renowned AI faculty</p>
                <p>Aarovan.ai is guided by mentorship from NYU Tandon School of Engineering. This mentorship combines academic expertise with real-world execution.</p>
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
            <div className="team-validation">
              <h3>Built through real-world validation and continuous iteration</h3>
              <p>Aarovan.ai has been developed through direct engagement with students and institutions, grounded in real pilot programs and feedback loops.</p>
              <p>The team brings together experience across analytics, product, and AI-enabled systems — with a shared focus on solving one of the most overlooked challenges in employability: how students communicate what they know.</p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
