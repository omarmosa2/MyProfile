import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, ArrowDownRight, ArrowUpRight, Asterisk, Code2, Github, Linkedin } from 'lucide-react';
import { projects } from '@/data/projects';
const technologies = ['React', 'Laravel', 'TypeScript', 'Tailwind CSS', 'MySQL', 'Electron'];
export default function Hero() {
  const reduced = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-5, 5]), { stiffness: 100, damping: 22 });
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [5, -5]), { stiffness: 100, damping: 22 });
  const entrance = (delay) => ({ initial: { opacity: 0, y: reduced ? 0 : 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] } });
  return <>
    <div className="shell hero">
      <div className="hero-copy">
        <motion.p className="eyebrow hero-intro" {...entrance(0.05)}><span className="status-dot" /> FULL STACK DEVELOPER & CREATIVE THINKER</motion.p>
        <motion.h1 {...entrance(0.15)}>Thoughtful code.<br />Remarkable<br /><span className="accent-word">experiences<Asterisk className="hero-asterisk" strokeWidth={1.3} aria-hidden="true" />.</span></motion.h1>
        <motion.div {...entrance(0.3)} className="hero-description"><span className="intro-line" aria-hidden="true" /><p>I’m <strong>Omar Yasser Mosa</strong>. I bring ideas to life through elegant interfaces, solid engineering, and a little creative curiosity.</p></motion.div>
        <motion.div className="hero-actions" {...entrance(0.4)}><a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={19} /></a><a className="text-link" href="#contact">Have a project in mind? <ArrowUpRight size={17} /></a></motion.div>
        <motion.div className="hero-meta" {...entrance(0.5)}><div className="hero-socials"><a href="https://github.com/omarmosa2" target="_blank" rel="noreferrer" aria-label="Omar on GitHub"><Github size={18} /></a><a href="https://www.linkedin.com/in/omar-mosa-829a71228/" target="_blank" rel="noreferrer" aria-label="Omar on LinkedIn"><Linkedin size={18} /></a></div><span className="meta-divider" /><span>Based in Syria · Building for the web</span></motion.div>
      </div>
      <motion.div className="hero-visual" {...entrance(0.25)} onPointerMove={(event) => {
        if (reduced || event.pointerType !== 'mouse') return;
        const rect = event.currentTarget.getBoundingClientRect();
        pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
        pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
      }} onPointerLeave={() => { pointerX.set(0); pointerY.set(0); }}>
        <div className="visual-orbit" aria-hidden="true" />
        <motion.div className="portrait-frame" style={reduced ? {} : { rotateX, rotateY }}>
          <div className="portrait-topline mono"><span>THE HUMAN BEHIND THE CODE</span><span>01 — OM</span></div>
          <div className="portrait-image"><img src="/images/photo.jpg" alt="Omar Yasser Mosa" width="696" height="928" fetchPriority="high" /><div className="portrait-shade" /><div className="portrait-caption"><span>Developer by profession.<br />Creator at heart.</span><ArrowDownRight size={32} strokeWidth={1} /></div></div>
          <span className="frame-corner corner-tl" /><span className="frame-corner corner-br" />
        </motion.div>
        <div className="floating-code" aria-hidden="true"><div className="code-icon"><Code2 size={23} /></div><div><span className="mono">IDEA → CODE → EXPERIENCE</span><p>Built with purpose<span className="code-caret">_</span></p></div></div>
        <div className="portrait-side-label mono" aria-hidden="true">DESIGN MINDED. DETAIL DRIVEN.</div>
      </motion.div>
      <motion.div className="hero-bottom" {...entrance(0.6)}><div className="hero-stats"><div><strong>4<span>+</span></strong><span>Years of experience</span></div><div><strong>{projects.length}<span>+</span></strong><span>Projects & experiments</span></div><div className="hero-stack-note"><Code2 size={20} /><span>From the first pixel<br />to the final endpoint.</span></div></div><a href="#projects" className="scroll-cue"><span className="mono">SCROLL TO EXPLORE</span><span className="scroll-icon"><ArrowDown size={18} /></span></a></motion.div>
    </div>
    <div className="tech-marquee" aria-label={'Working with ' + technologies.join(', ')}><div className="marquee-track" aria-hidden="true">{[0, 1].map((copy) => <div className="marquee-group" key={copy}>{technologies.map((tech) => <span key={tech}><Asterisk size={20} />{tech}</span>)}</div>)}</div></div>
  </>;
}
