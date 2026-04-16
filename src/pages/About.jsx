import AnimatedSection from "../components/AnimatedSection";
import { Link } from "react-router-dom";
import gapImage from "../assets/gap.jpg";

export default function About() {
  return (
    <>
      <main className="pt-20">

<AnimatedSection as="section" className="relative min-h-[716px] flex items-center overflow-hidden bg-surface pt-12 pb-24">
<div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-8">
<h1 className="font-headline text-5xl md:text-7xl text-primary leading-[1.1] mb-8 font-bold">
                    Bridging the Gap Between <br />
<span className="italic font-normal">Knowledge and Communication</span>
                </h1>
<div className="space-y-6">
<div>
<h2 className="text-xl font-bold text-primary mb-3">Background</h2>
<p className="text-lg text-on-surface-variant leading-relaxed">
                        The education system is designed to build knowledge and technical capability at scale.
                    </p>
<p className="text-lg text-on-surface-variant leading-relaxed">
                        India's engineering ecosystem produces one of the largest talent pipelines globally. However, employability outcomes indicate that knowledge alone is not sufficient.
                    </p>
</div>
</div>
</div>
<div className="md:col-span-4 relative">
<div className="aspect-[4/5] rounded-xl overflow-hidden editorial-shadow transform rotate-3 ghost-border">
<img className="w-full h-full object-cover" src={gapImage} alt="Knowledge and Communication Gap" />
</div>
</div>
</div>
</AnimatedSection>

<AnimatedSection as="section" className="bg-surface-container py-32">
<div className="max-w-7xl mx-auto px-8">
<div className="text-center mb-16">
<h2 className="font-headline text-4xl text-primary mb-4">The Core Challenge</h2>
<p className="text-on-surface-variant max-w-2xl mx-auto">Understanding the disconnect between preparation and performance.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="bg-surface-container-low p-10 rounded-xl ghost-border">
<h3 className="font-bold text-primary mb-6 text-lg">Students Graduate With</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
<span className="text-on-surface-variant">Strong academic foundations</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
<span className="text-on-surface-variant">Technical understanding</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-primary text-sm mt-0.5">check_circle</span>
<span className="text-on-surface-variant">Problem-solving ability</span>
</li>
</ul>
</div>
<div className="bg-primary p-10 rounded-xl text-on-primary">
<h3 className="font-bold mb-6 text-lg">Hiring Processes Assess</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-tertiary-fixed-dim text-sm mt-0.5">arrow_right</span>
<span>Clarity of communication</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-tertiary-fixed-dim text-sm mt-0.5">arrow_right</span>
<span>Structure of responses</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-tertiary-fixed-dim text-sm mt-0.5">arrow_right</span>
<span>Ability to think and articulate under pressure</span>
</li>
</ul>
</div>
<div className="bg-surface-container-low p-10 rounded-xl ghost-border">
<h3 className="font-bold text-primary mb-6 text-lg">The Reality</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-error text-sm mt-0.5">cancel</span>
<span className="text-on-surface-variant">Interview exposure is limited</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-error text-sm mt-0.5">cancel</span>
<span className="text-on-surface-variant">Practice opportunities are inconsistent</span>
</li>
<li className="flex items-start gap-3">
<span className="material-symbols-outlined text-error text-sm mt-0.5">cancel</span>
<span className="text-on-surface-variant">Feedback is often generic or unavailable</span>
</li>
</ul>
</div>
</div>
<div className="mt-16">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-xl"></div>
<div className="relative bg-gradient-to-r from-primary to-primary-container p-12 rounded-2xl shadow-2xl">
<div className="flex items-center gap-6">
<span className="material-symbols-outlined text-6xl text-white">arrow_downward</span>
<div>
<p className="text-white font-bold text-2xl mb-2">The Result</p>
<p className="text-white/90 text-lg">Many capable students underperform during interviews</p>
</div>
</div>
</div>
</div>
</div>
</div>
</AnimatedSection>

<AnimatedSection as="section" className="bg-surface-container-low py-32">
<div className="max-w-7xl mx-auto px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
<div className="md:sticky md:top-32 md:z-10">
<h2 className="font-headline text-4xl text-primary mb-6">The Approach</h2>
<div className="w-20 h-1 bg-primary-container mb-8"></div>
<p className="text-on-surface-variant leading-loose mb-6">
                        Aarovan.ai is built on the premise that communication can be systematically developed.
                    </p>
<p className="text-on-surface-variant leading-loose mb-6">
                        It introduces a structured system where practice, evaluation, feedback, and improvement work together to transform interviews from one-time events to repeatable skills.
                    </p>
</div>
<div className="space-y-12">
<div className="p-10 bg-surface-container-lowest rounded-xl editorial-shadow ghost-border animate-fade-in-up" style={{animationDelay: '0.1s'}}>
<span className="material-symbols-outlined text-4xl text-primary mb-6">repeat</span>
<h3 className="font-headline text-2xl text-primary mb-4">Practice is Continuous</h3>
<p className="text-on-surface-variant leading-relaxed">
                            Persistent engagement to build mental muscle memory and confidence through repeated exposure.
                        </p>
</div>
<div className="p-10 bg-surface-container-lowest rounded-xl editorial-shadow ghost-border ml-0 md:ml-12 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
<span className="material-symbols-outlined text-4xl text-primary mb-6">analytics</span>
<h3 className="font-headline text-2xl text-primary mb-4">Evaluation is Objective</h3>
<p className="text-on-surface-variant leading-relaxed">
                            Bias-free assessment based on established industry rubrics, ensuring fair and consistent measurement.
                        </p>
</div>
<div className="p-10 bg-surface-container-lowest rounded-xl editorial-shadow ghost-border animate-fade-in-up" style={{animationDelay: '0.3s'}}>
<span className="material-symbols-outlined text-4xl text-primary mb-6">lightbulb</span>
<h3 className="font-headline text-2xl text-primary mb-4">Feedback is Actionable</h3>
<p className="text-on-surface-variant leading-relaxed">
                            Specific steps for improvement, not just generic scores, guiding students toward measurable progress.
                        </p>
</div>
<div className="p-10 bg-surface-container-lowest rounded-xl editorial-shadow ghost-border ml-0 md:ml-12 animate-fade-in-up" style={{animationDelay: '0.4s'}}>
<span className="material-symbols-outlined text-4xl text-primary mb-6">insights</span>
<h3 className="font-headline text-2xl text-primary mb-4">Improvement is Measurable</h3>
<p className="text-on-surface-variant leading-relaxed">
                            Visualizing growth trajectory over time with precision, tracking development at every stage.
                        </p>
</div>
</div>
</div>
</div>
</AnimatedSection>

<AnimatedSection as="section" className="py-32 bg-surface">
<div className="max-w-7xl mx-auto px-8">
<div className="text-center mb-16">
<h2 className="font-headline text-4xl text-primary mb-4">What This Enables</h2>
<p className="text-on-surface-variant max-w-2xl mx-auto">Transforming outcomes for students and institutions alike.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="bg-surface-container-low p-12 rounded-2xl ghost-border">
<h3 className="font-headline text-3xl text-primary mb-8">For Students</h3>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary mt-1">check_circle</span>
<div>
<p className="font-semibold text-primary mb-1">Improved Clarity and Structure</p>
<p className="text-sm text-on-surface-variant">Enhanced ability to communicate ideas with precision and organization</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary mt-1">check_circle</span>
<div>
<p className="font-semibold text-primary mb-1">Increased Confidence</p>
<p className="text-sm text-on-surface-variant">Building assurance through continuous repetition and practice</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary mt-1">check_circle</span>
<div>
<p className="font-semibold text-primary mb-1">Better Performance Under Pressure</p>
<p className="text-sm text-on-surface-variant">Excelling in high-stakes interview conditions with composure</p>
</div>
</li>
</ul>
</div>
<div className="bg-primary p-12 rounded-2xl text-on-primary">
<h3 className="font-headline text-3xl mb-8">For Institutions</h3>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-tertiary-fixed-dim mt-1">verified</span>
<div>
<p className="font-semibold mb-1">Scalable Interview Preparation</p>
<p className="text-sm opacity-80">Effective training across large cohorts without resource constraints</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-tertiary-fixed-dim mt-1">verified</span>
<div>
<p className="font-semibold mb-1">Standardized Evaluation Frameworks</p>
<p className="text-sm opacity-80">Consistent assessment criteria aligned with industry standards</p>
</div>
</li>
<li className="flex items-start gap-4">
<span className="material-symbols-outlined text-tertiary-fixed-dim mt-1">verified</span>
<div>
<p className="font-semibold mb-1">Visibility into Student Readiness</p>
<p className="text-sm opacity-80">Real-time insights into progress and areas requiring attention</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</AnimatedSection>

<AnimatedSection as="section" className="py-32 bg-surface-container">
<div className="max-w-7xl mx-auto px-8">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
<div className="md:col-span-5">
<h2 className="font-headline text-4xl text-primary leading-tight mb-8">The Systematic Development of Communication</h2>
<p className="text-on-surface-variant mb-10 leading-relaxed">
                        We don't just "practice." We apply engineering methodology to the art of communication, breaking down performance into objective, measurable data points.
                    </p>
<div className="space-y-4">
<div className="h-0.5 w-full bg-secondary-fixed-dim/30 relative">
<div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-4 h-4 bg-primary rounded-full blur-sm opacity-50"></div>
<div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-2 h-2 bg-primary rounded-full"></div>
</div>
<p className="text-xs font-semibold uppercase tracking-widest text-on-secondary-container">AI Active Analysis Active</p>
</div>
</div>
<div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="p-8 bg-surface-container-lowest rounded-lg ghost-border">
<span className="material-symbols-outlined text-primary mb-4">repeat</span>
<h4 className="font-bold mb-2">Continuous Practice</h4>
<p className="text-sm text-on-surface-variant">Persistent engagement to build mental muscle memory.</p>
</div>
<div className="p-8 bg-surface-container-lowest rounded-lg ghost-border">
<span className="material-symbols-outlined text-primary mb-4">analytics</span>
<h4 className="font-bold mb-2">Objective Evaluation</h4>
<p className="text-sm text-on-surface-variant">Bias-free assessment based on established industry rubrics.</p>
</div>
<div className="p-8 bg-surface-container-lowest rounded-lg ghost-border">
<span className="material-symbols-outlined text-primary mb-4">lightbulb</span>
<h4 className="font-bold mb-2">Actionable Feedback</h4>
<p className="text-sm text-on-surface-variant">Specific steps for improvement, not just generic scores.</p>
</div>
<div className="p-8 bg-surface-container-lowest rounded-lg ghost-border">
<span className="material-symbols-outlined text-primary mb-4">insights</span>
<h4 className="font-bold mb-2">Measurable Growth</h4>
<p className="text-sm text-on-surface-variant">Visualizing your trajectory over time with precision.</p>
</div>
</div>
</div>
</div>
</AnimatedSection>

<AnimatedSection as="section" className="py-32 bg-surface">
<div className="max-w-7xl mx-auto px-8">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="md:col-span-2 bg-surface-container-low p-12 rounded-2xl flex flex-col justify-between">
<div>
<h3 className="font-headline text-3xl text-primary mb-6">For Students</h3>
<p className="text-lg text-on-surface-variant leading-relaxed max-w-xl">
                            Transform theoretical knowledge into persuasive technical authority. Gain the clarity and confidence required to ace interviews at world-class engineering firms.
                        </p>
</div>
<div className="mt-12 flex gap-8">
<div className="text-center">
<div className="text-3xl font-bold text-primary">500+</div>
<div className="text-xs uppercase tracking-tighter text-on-surface-variant">Students Trained</div>
</div>
<div className="text-center">
<div className="text-3xl font-bold text-primary">45%</div>
<div className="text-xs uppercase tracking-tighter text-on-surface-variant">Avg. Improvement</div>
</div>
</div>
</div>
<div className="bg-primary p-12 rounded-2xl text-on-primary">
<h3 className="font-headline text-2xl mb-6">For Institutions</h3>
<p className="opacity-80 leading-relaxed mb-8">
                        Achieve unprecedented visibility into student readiness and provide automated, expert-level feedback to every learner.
                    </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-tertiary-fixed-dim">verified</span> Scalable Mentorship</li>
<li className="flex items-center gap-3 text-sm"><span className="material-symbols-outlined text-tertiary-fixed-dim">verified</span> Performance Analytics</li>
</ul>
</div>
</div>
</div>
</AnimatedSection>

<AnimatedSection as="section" className="py-32 bg-surface-container-low border-y border-outline-variant/10">
<div className="max-w-7xl mx-auto px-8">
<div className="max-w-4xl mx-auto text-center">
<span className="material-symbols-outlined text-6xl text-primary/20 mb-8" style={{fontVariationSettings: "\'FILL\' 1"}}>format_quote</span>
<blockquote className="font-headline text-3xl italic text-primary leading-snug mb-10">
                    "The interview-readiness problem isn't about lack of talent; it's about the lack of a safe, intelligent space to fail and iterate. Aarovan.ai is that space."
                </blockquote>
<Link className="inline-flex items-center gap-2 font-semibold text-primary hover:gap-4 transition-all" to="/contact">
                    Meet the Engineers behind the Scholar
                    <span className="material-symbols-outlined">arrow_forward</span>
</Link>
</div>
</div>
</AnimatedSection>

<AnimatedSection as="section" className="py-32 bg-background relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-secondary-fixed/20 via-transparent to-transparent"></div>
<div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
<h2 className="font-headline text-5xl text-primary mb-8 font-bold">Ready to Start Your Journey?</h2>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<Link className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-10 py-4 rounded-lg font-semibold tracking-wider uppercase editorial-shadow active:scale-[0.98] transition-transform inline-block" to="/contact">
                    Get Started
                </Link>
<Link className="px-10 py-4 rounded-lg font-semibold tracking-wider uppercase text-on-surface ghost-border hover:bg-surface-container transition-colors inline-block" to="/contact">
                    Explore Features
                </Link>
</div>
</div>
</AnimatedSection>
</main>
    </>
  );
}
