import { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";
import { Link } from "react-router-dom";
import contactImage from "../assets/contact.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    partnershipType: "University Placement Cell",
    message: ""
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", partnershipType: "University Placement Cell", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };
  return (
    <>
      <main className="pt-24">

<AnimatedSection as="section" className="max-w-7xl mx-auto px-8 py-20 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-8">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest mb-6">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    Collaboration
                </div>
<h1 className="font-headline text-5xl md:text-7xl font-black text-primary leading-[1.1] mb-8">
                    Partner with Us
                </h1>
<p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed">
                    Join our mission to democratize elite interview preparation. We empower institutions with AI-native coaching that bridges the gap between academic theory and industrial excellence.
                </p>
</div>
<div className="lg:col-span-4 hidden lg:block">
<div className="relative">
<div className="absolute -top-10 -left-10 w-32 h-32 bg-secondary-fixed-dim rounded-full opacity-20 blur-3xl"></div>
<img alt="Academic collaboration" className="w-full h-auto rounded-xl editorial-shadow" src={contactImage} />
</div>
</div>
</AnimatedSection>

<AnimatedSection as="section" className="bg-surface-container-low py-24">
<div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-12 gap-16">

<div className="lg:col-span-7">
<div className="bg-surface-container-lowest p-10 md:p-12 rounded-xl editorial-shadow">
<h2 className="font-headline text-3xl font-bold text-primary mb-10">Send an Inquiry</h2>
<form className="space-y-8" onSubmit={handleSubmit}>
<div className="grid md:grid-cols-2 gap-8">
<div className="space-y-2">
<label className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">Full Name</label>
<input className="w-full bg-surface-container-low border-none rounded-lg px-4 py-4 focus:ring-1 focus:ring-primary-fixed-dim transition-all outline-none" placeholder="John Doe" type="text" name="name" value={formData.name} onChange={handleChange} required/>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">Institution Email</label>
<input className="w-full bg-surface-container-low border-none rounded-lg px-4 py-4 focus:ring-1 focus:ring-primary-fixed-dim transition-all outline-none" placeholder="dean@university.edu" type="email" name="email" value={formData.email} onChange={handleChange} required/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">Partnership Type</label>
<select className="w-full bg-surface-container-low border-none rounded-lg px-4 py-4 focus:ring-1 focus:ring-primary-fixed-dim transition-all outline-none appearance-none" name="partnershipType" value={formData.partnershipType} onChange={handleChange}>
<option>University Placement Cell</option>
<option>Technical Bootcamp</option>
<option>Corporate Training</option>
<option>Other</option>
</select>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">Message</label>
<textarea className="w-full bg-surface-container-low border-none rounded-lg px-4 py-4 focus:ring-1 focus:ring-primary-fixed-dim transition-all outline-none" placeholder="How can we help your students excel?" rows="5" name="message" value={formData.message} onChange={handleChange} required></textarea>
</div>
<button className="w-full primary-gradient text-white font-bold py-5 rounded-lg label-md uppercase tracking-[0.05em] shadow-lg hover:shadow-xl transition-all" disabled={status === "loading"}>
{status === "loading" ? "Sending..." : "Send Message"}
</button>
{status === "success" && <p className="text-green-600 font-medium text-center">Message sent successfully!</p>}
{status === "error" && <p className="text-red-600 font-medium text-center">Failed to send message. Please try again.</p>}
</form>
</div>
</div>

<div className="lg:col-span-5 flex flex-col gap-10">

<div className="space-y-8">
<h3 className="font-headline text-2xl font-bold text-primary">Direct Contact</h3>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-secondary-container flex items-center justify-center rounded-xl text-primary shrink-0">
<span className="material-symbols-outlined">mail</span>
</div>
<div>
<p className="text-sm text-on-surface-variant font-medium uppercase tracking-tighter">Email</p>
<p className="text-lg font-bold text-primary">aarovan.ai@gmail.com</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-secondary-container flex items-center justify-center rounded-xl text-primary shrink-0">
<span className="material-symbols-outlined">location_on</span>
</div>
<div>
<p className="text-sm text-on-surface-variant font-medium uppercase tracking-tighter">HQ</p>
<p className="text-lg font-bold text-primary">Delhi, IN</p>
</div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-xl relative overflow-hidden mt-6">
<div className="absolute -right-6 -bottom-6 opacity-10">
<span className="material-symbols-outlined text-9xl">school</span>
</div>
<span className="material-symbols-outlined text-primary text-4xl mb-4">school</span>
<p className="font-headline text-xl text-primary leading-relaxed italic">
                            Whether you're a student, institution, or partner — Aarovan.ai helps improve interview communication and readiness.
                        </p>
<p className="mt-6 font-body font-bold text-primary">— Engineering Excellence Division</p>
</div>

<div className="rounded-xl overflow-hidden grayscale contrast-125 brightness-90 editorial-shadow h-48 relative">
<img alt="Office location" className="w-full h-full object-cover" data-alt="Monochrome architectural close-up of a sleek modern skyscraper facade with glass and steel geometric patterns" data-location="Delhi" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6qYEFYKD-o2z3r8eB-qP4EAVCVvk1vxYacTkB3woOsNF8axh_p7G0sw7CdsC4Lpa0s-acudAXZoCZKPAwl0WRGujfYJARwYhmrg5VpX1uYzJEp8xs412PlbOTRd5Ym2fAOeTwv-_DlYOagDiZsnH-AbfCLNVaIXrYgouSKAuNTbguzxEW3q86c_rYT8i1Po88066-dYIRLNtHLSmiZyuN4wS-3FBtZbP1PaBJESxpSsGDtOGGDnwGQiwowYhs3qbGn4K4X584QvsD"/>
</div>
</div>
</div>
</AnimatedSection>

<div className="w-full bg-surface border-t border-outline-variant/15 py-12 overflow-hidden whitespace-nowrap">
<div className="max-w-7xl mx-auto px-8 flex items-center justify-center gap-4">
<div className="h-[2px] flex-grow bg-secondary-fixed-dim relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 glass-panel rounded-full shadow-[0_0_15px_rgba(171,203,225,0.8)]"></div>
</div>
<span className="font-headline font-black text-primary-container text-sm md:text-base tracking-[0.2em] uppercase">AI-Driven Professional Growth</span>
<div className="h-[2px] flex-grow bg-secondary-fixed-dim"></div>
</div>
</div>

<AnimatedSection as="section" className="max-w-7xl mx-auto px-8 py-24">
<div className="primary-gradient p-12 md:p-20 rounded-xl editorial-shadow text-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
<h2 className="font-headline text-3xl md:text-5xl font-bold text-white mb-8 max-w-4xl mx-auto">
                    Transform Placement Preparation at Your Institution
                </h2>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<Link className="bg-white text-primary px-10 py-4 rounded-lg font-bold label-md tracking-wider hover:bg-surface-container transition-all" to="/contact">
                        Request Demo
                    </Link>
<Link className="border border-white/30 text-white px-10 py-4 rounded-lg font-bold label-md tracking-wider hover:bg-white/10 transition-all" to="/contact">
                        Partner With Us
                    </Link>
</div>
</div>
</AnimatedSection>
</main>
    </>
  );
}
