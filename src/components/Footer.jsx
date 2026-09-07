import { ArrowUp, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return <footer className="footer"><div className="shell footer-inner"><a href="#home" className="wordmark">omar<span>mosa</span><i>.</i></a><p>Designed and developed with care.<br />© {new Date().getFullYear()} Omar Yasser Mosa.</p><div className="footer-actions"><a href="https://github.com/omarmosa2" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a><a href="https://www.linkedin.com/in/omar-mosa-829a71228/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a><a href="#home" aria-label="Back to top"><ArrowUp size={18} /></a></div></div></footer>;
}
