import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
const links = [['home', 'Home'], ['projects', 'Work'], ['about', 'About'], ['skills', 'Expertise']];
export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const menuButton = useRef(null);
  useEffect(() => {
    if (!open) return;
    const close = (event) => {
      if (event.key === 'Escape') { setOpen(false); menuButton.current?.focus(); }
    };
    const media = window.matchMedia('(min-width: 768px)');
    const resize = () => { if (media.matches) setOpen(false); };
    document.addEventListener('keydown', close);
    media.addEventListener('change', resize);
    return () => { document.removeEventListener('keydown', close); media.removeEventListener('change', resize); };
  }, [open]);
  return (
    <header className="site-header">
      <div className="shell nav-inner">
        <a href="#home" className="wordmark" aria-label="Omar Mosa home" onClick={() => setOpen(false)}>omar<span>mosa</span><i>.</i></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([id, label]) => <a key={id} href={'#' + id} className={activeSection === id ? 'active' : ''} aria-current={activeSection === id ? 'location' : undefined}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <button className="icon-button theme-button" onClick={toggleTheme} aria-label={'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' theme'}>{theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}</button>
          <a href="#contact" className="nav-contact">Let’s talk <ArrowUpRight size={16} /></a>
          <button ref={menuButton} className="icon-button menu-button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </div>
      <AnimatePresence>
        {open && <motion.nav id="mobile-menu" className="mobile-nav" aria-label="Mobile navigation" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}>
          {[...links, ['contact', 'Let’s talk']].map(([id, label], index) => <a key={id} href={'#' + id} onClick={() => setOpen(false)} aria-current={activeSection === id ? 'location' : undefined}><span className="mono">0{index + 1}</span>{label}<ArrowUpRight size={20} /></a>)}
        </motion.nav>}
      </AnimatePresence>
    </header>
  );
}
