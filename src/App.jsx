import { useEffect, useState } from 'react';
import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ErrorBoundary from '@/components/ErrorBoundary';
import { ThemeProvider } from '@/contexts/ThemeContext';

function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    }, { rootMargin: '-15% 0px -60% 0px' });
    document.querySelectorAll('main > section').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
      <Navbar activeSection={activeSection} />
      <main id="main-content" tabIndex={-1}>
        <section id="home" aria-label="Introduction"><Hero /></section>
        <section id="projects" aria-label="Selected projects"><Projects /></section>
        <section id="about" aria-label="About Omar"><About /></section>
        <section id="skills" aria-label="Skills and expertise"><Skills /></section>
        <section id="contact" aria-label="Contact"><Contact /></section>
      </main>
      <Footer />
    </MotionConfig>
  );
}
export default function App() {
  return <ErrorBoundary><ThemeProvider><Portfolio /></ThemeProvider></ErrorBoundary>;
}
