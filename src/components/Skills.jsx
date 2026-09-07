import { motion } from 'framer-motion';
import { Braces, Database, Palette, Server, Sparkles } from 'lucide-react';
import Reveal, { SectionHeading } from '@/components/Reveal';

const expertise = [
  { number: '01', title: 'Front-end', icon: Braces, text: 'Responsive interfaces with deliberate motion, strong hierarchy, and accessible interaction.', tools: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'HTML & CSS'] },
  { number: '02', title: 'Back-end systems', icon: Server, text: 'Reliable APIs and application logic structured for clarity, performance, and growth.', tools: ['Laravel', 'PHP', 'Electron', 'REST APIs'] },
  { number: '03', title: 'Data & architecture', icon: Database, text: 'Practical data models that keep products organized, useful, and easy to maintain.', tools: ['MySQL', 'SQLite', 'Data structures', 'Algorithms'] },
  { number: '04', title: 'Product thinking', icon: Palette, text: 'Turning requirements into coherent flows with a careful eye for UI and UX decisions.', tools: ['Figma', 'Responsive design', 'Prototyping', 'Problem solving'] },
];

export default function Skills() {
  return <div className="section-shell skills-section"><div className="shell">
    <SectionHeading number="03" label="Expertise" description="Technology matters most when it disappears into an experience that feels clear, fast, and natural.">From interface<br /><em>to infrastructure.</em></SectionHeading>
    <div className="expertise-grid">{expertise.map(({ number, title, icon: Icon, text, tools }, index) => <Reveal className="expertise-card" key={title} delay={index * .06}><div className="expertise-top"><span className="mono">{number}</span><span className="expertise-icon"><Icon size={24} /></span></div><h3>{title}</h3><p>{text}</p><div className="tool-list">{tools.map((tool) => <motion.span key={tool} whileHover={{ x: 4 }}><Sparkles size={12} />{tool}</motion.span>)}</div></Reveal>)}</div>
  </div></div>;
}
