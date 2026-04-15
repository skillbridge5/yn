import React from "react";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, ChevronRight, Terminal, Database, Cpu, Layout, GraduationCap, Globe, Download, ArrowUp } from "lucide-react";
import { cn } from "@/src/lib/utils";
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, SKILLS, EDUCATION } from "@/src/constants";

export const CustomCursor = () => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = React.useState(false);

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, [role="button"]');
      setIsHovering(!!isClickable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-brand-gold rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          scale: isHovering ? 2.5 : 1,
          backgroundColor: isHovering ? "rgba(212, 175, 55, 0.1)" : "transparent",
        }}
        transition={{ type: "spring", damping: 30, stiffness: 250, mass: 0.5 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-brand-gold rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePos.x - 3,
          y: mousePos.y - 3,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 500, mass: 0.1 }}
      />
    </>
  );
};

export const MouseGlow = () => {
  const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: `radial-gradient(600px at ${mousePos.x}px ${mousePos.y}px, rgba(212, 175, 55, 0.05), transparent 80%)`
      }}
    />
  );
};

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-12">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center gap-2 mb-2"
    >
      <div className="h-px w-8 bg-brand-gold" />
      <span className="text-brand-gold font-mono text-xs uppercase tracking-widest">{subtitle}</span>
    </motion.div>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-5xl font-bold"
    >
      {children}
    </motion.h2>
  </div>
);

export const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-display font-bold tracking-tighter"
      >
        YN<span className="text-brand-gold">.</span>
      </motion.div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
        {["About", "Experience", "Education", "Projects", "Skills", "Contact"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-brand-gold transition-colors">
            {item}
          </a>
        ))}
      </div>
      <motion.a
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        href="#contact"
        className="px-5 py-2 bg-brand-gold text-black text-sm font-bold rounded-full hover:bg-white transition-colors"
      >
        Hire Me
      </motion.a>
    </div>
  </nav>
);

export const Hero = () => (
  <section id="about" className="min-h-screen flex flex-col justify-center pt-20 px-6 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/20 text-brand-gold text-xs font-bold uppercase tracking-wider mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
          </span>
          AI Engineer & ERP Specialist
        </div>
        <h1 className="text-6xl md:text-8xl font-bold leading-[0.85] mb-10 tracking-[-0.0002em]">
          Crafting <br />
          <span className="text-gradient">Intelligent</span> <br />
          Solutions.
        </h1>
        <p className="text-xl text-white/50 max-w-lg mb-12 leading-relaxed font-light">
          I'm <span className="text-white font-medium">{PERSONAL_INFO.name}</span>, a ERP Expert, Data Scientist & AI Engineer. I bridge the gap between complex business processes and cutting-edge AI.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-brand-gold transition-colors flex items-center gap-2">
            View Projects <ChevronRight size={18} />
          </a>
           <a 
           href='public/Yonas Negese M CV(R).pdf'
           download="Yonas_Negese_CV.pdf"
           >
              <button className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2">
            Download CV <Download size={18} />
          </button>
           </a>

          <div className="flex items-center gap-4 px-4">
            <a href={PERSONAL_INFO.socials.github} className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-brand-gold transition-colors">
              <Github size={20} />
            </a>
            <a href={PERSONAL_INFO.socials.linkedin} className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-brand-gold transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        className="relative aspect-square hidden lg:block mt-16"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/30 to-transparent rounded-3xl blur-[120px] animate-pulse" />
        <div className="relative h-fit w-fit glass-card overflow-hidden flex items-center justify-center border-white/5">
          <div className="grid grid-cols-2 gap-6 px-24 py-25 w-full">
            {[
              { icon: Cpu, label: "AI Agents", color: "text-blue-400", delay: 0.6 },
              { icon: Database, label: "Data Science", color: "text-brand-gold", delay: 0.7 },
              { icon: Terminal, label: "Automation", color: "text-purple-400", delay: 0.8 },
              { icon: Layout, label: "Odoo/ERPNext", color: "text-emerald-400", delay: 0.9 },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: item.delay, duration: 0.8, ease: "easeOut" }}
                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.08)" }}
                className="p-8 rounded-3xl bg-white/[0.03] border border-white/5 flex flex-col items-center gap-5 text-center transition-colors"
              >
                <item.icon className={cn("w-10 h-10", item.color)} />
                <span className="text-sm font-bold tracking-tight uppercase opacity-80">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export const Experience = () => (
  <section id="experience" className="py-32 px-6 max-w-7xl mx-auto">
    <SectionTitle subtitle="Journey">Work Experience</SectionTitle>
    <div className="space-y-16">
      {EXPERIENCES.map((exp, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: i * 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="grid md:grid-cols-[250px_1fr] gap-8 group"
        >
          <div className="text-white/30 font-mono text-sm pt-1 tracking-widest">{exp.period}</div>
          <div className="relative pl-12 border-l border-white/5 group-hover:border-brand-gold/30 transition-colors duration-500">
            <div className="absolute -left-[5px] top-2 w-2 h-2 rounded-full bg-white/10 group-hover:bg-brand-gold group-hover:scale-150 transition-all duration-500" />
            <h3 className="text-3xl font-bold mb-2 group-hover:text-brand-gold transition-colors duration-500">{exp.role}</h3>
            <div className="text-brand-gold/80 font-medium text-lg mb-6">{exp.company}</div>
            <ul className="space-y-4">
              {exp.description.map((desc, j) => (
                <li key={j} className="text-white/50 flex gap-3 leading-relaxed">
                  <span className="text-brand-gold/40 mt-1.5 shrink-0">•</span>
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export const Education = () => (
  <section id="education" className="py-24 px-6 max-w-7xl mx-auto">
    <SectionTitle subtitle="Learning">Education & Certifications</SectionTitle>
    <div className="grid md:grid-cols-2 gap-8">
      {EDUCATION.map((edu, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1 }}
          className="p-8 rounded-3xl bg-white/5 border border-white/10 flex gap-6 group hover:border-brand-gold/50 transition-colors"
        >
          <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
            <GraduationCap size={28} />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-1 group-hover:text-brand-gold transition-colors">{edu.institution}</h3>
            <div className="text-white/60 font-medium mb-2">{edu.degree}</div>
            {edu.period && <div className="text-xs font-mono text-white/40">{edu.period}</div>}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export const Projects = () => (
  <section id="projects" className="py-32 px-6 max-w-7xl mx-auto">
    <SectionTitle subtitle="Portfolio">Featured Projects</SectionTitle>
    <div className="grid md:grid-cols-2 gap-10">
      {PROJECTS.map((project, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
          className="glass-card p-10 group hover:bg-white/[0.06] transition-all duration-700 border-white/5 hover:border-brand-gold/20"
        >
          <div className="flex justify-between items-start mb-8">
            <div className="p-4 rounded-2xl bg-brand-gold/10 text-brand-gold group-hover:scale-110 transition-transform duration-500">
              {project.title.includes("AI") ? <Cpu size={28} /> : <Database size={28} />}
            </div>
            {project.status && (
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold px-3 py-1.5 rounded-full bg-white/5 text-white/40 border border-white/5">
                {project.status}
              </span>
            )}
          </div>
          <h3 className="text-3xl font-bold mb-4 group-hover:text-brand-gold transition-colors duration-500 tracking-tight">{project.title}</h3>
          <p className="text-white/40 mb-8 leading-relaxed text-lg font-light">{project.description}</p>
          <div className="flex flex-wrap gap-3 mb-10">
            {project.tech.map((t) => (
              <span key={t} className="text-[11px] font-mono px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-white/60">
                {t}
              </span>
            ))}
          </div>
          <a href="#" className="inline-flex items-center gap-3 text-sm font-bold text-white/80 group-hover:text-brand-gold transition-all duration-500 group-hover:gap-5">
            View Case Study <ExternalLink size={16} />
          </a>
        </motion.div>
      ))}
    </div>
  </section>
);

export const Skills = () => (
  <section id="skills" className="py-32 px-6 max-w-7xl mx-auto">
    <SectionTitle subtitle="Expertise">Technical Skills</SectionTitle>
    {/* Changed grid-cols-5 to grid-cols-4 to widen the remaining cards */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { title: "ERP Systems", items: SKILLS.erp, icon: Database },
        { title: "AI & Data", items: SKILLS.ai_data, icon: Cpu },
        { title: "Development", items: SKILLS.development, icon: Terminal },
        { title: "Business Tools", items: SKILLS.tools, icon: Layout },
      ].map((category, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.05)" }}
          className="p-10 rounded-[2.5rem] bg-white/[0.02] border border-white/5 transition-all duration-500 hover:border-brand-gold/30"
        >
          <div className="w-16 h-16 rounded-3xl bg-brand-gold/5 flex items-center justify-center text-brand-gold mb-8 group-hover:scale-110 transition-transform">
            <category.icon size={32} />
          </div>
          <h3 className="text-2xl font-bold mb-8 tracking-tight">{category.title}</h3>
          <div className="space-y-4">
            {category.items.map((skill) => (
              <div key={skill} className="flex items-center gap-3 text-white/40 hover:text-white transition-colors duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-gold/30" />
                <span className="text-sm font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export const Contact = () => (
  <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
    <div className="glass-card p-12 md:p-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/10 blur-3xl rounded-full -mr-32 -mt-32" />
      <div className="relative z-10 grid lg:grid-cols-2 gap-12">
        <div>
          <SectionTitle subtitle="Contact">Let's build something great.</SectionTitle>
          <p className="text-white/60 mb-10 text-lg">
            Ready to transform your business with intelligent ERP solutions? Reach out and let's discuss your next project.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-gold">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-bold">Email</div>
                <div className="font-medium">{PERSONAL_INFO.email}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-gold">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-bold">Phone</div>
                <div className="font-medium">{PERSONAL_INFO.phone}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-gold">
                <MapPin size={20} />
              </div>
              <div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-bold">Location</div>
                <div className="font-medium">{PERSONAL_INFO.location}</div>
              </div>
            </div>
          </div>
        </div>
        
        <form className="mt-10 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-gold outline-none transition-colors"
            />
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-gold outline-none transition-colors"
            />
          </div>
          <input 
            type="text" 
            placeholder="Subject" 
            className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-gold outline-none transition-colors"
          />
          <textarea 
            placeholder="Message" 
            rows={4}
            className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-brand-gold outline-none transition-colors resize-none"
          />
          <button className="w-full py-4 bg-brand-gold text-black font-bold rounded-xl hover:bg-white transition-colors">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
);

export const Footer = () => {
  const [showScroll, setShowScroll] = React.useState(false);

  React.useEffect(() => {
    const checkScroll = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, [showScroll]);

  return (
    <footer className="py-12 px-6 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-white/40">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <a href={PERSONAL_INFO.socials.github} className="text-white/40 hover:text-brand-gold transition-colors">Github</a>
          <a href={PERSONAL_INFO.socials.linkedin} className="text-white/40 hover:text-brand-gold transition-colors">LinkedIn</a>
        </div>
      </div>

      {showScroll && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 p-4 bg-brand-gold text-black rounded-full shadow-2xl z-50 hover:bg-white transition-colors"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </footer>
  );
};
