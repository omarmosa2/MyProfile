import { ArrowDownRight, Code2, Database, Layers3, Monitor, Users } from 'lucide-react';
import Reveal, { SectionHeading } from '@/components/Reveal';

const experience = [
  {
    period: '2024 — 2026',
    role: 'Full Stack Developer',
    company: 'Freelance',
    icon: Code2,
  },
  {
    period: '2024 — 2026',
    role: 'IT Officer',
    company: 'Al-Rowad for Cooperation and Development',
    icon: Layers3,
  },
  {
    period: '2022 — 2023',
    role: 'Data Entry',
    company: 'Doctors of the World',
    icon: Database,
  },
  {
    period: '2022 — 2023',
    role: 'ICDL Trainer',
    company: 'Al-Rowad for Cooperation and Development',
    icon: Monitor,
  },
  {
    period: '2022',
    role: 'Health Awareness Team Leader',
    company: 'Humanitarian Relief Foundation',
    icon: Users,
  },
];

export default function About() {
  return <div className="section-shell about-section"><div className="shell">
    <SectionHeading number="02" label="A little context">I think in systems.<br /><em>I build for people.</em></SectionHeading>
    <div className="about-grid"><Reveal className="about-statement"><span className="giant-mark">“</span><p>I care about the space where <strong>engineering, design, and human needs</strong> meet.</p><ArrowDownRight size={34} strokeWidth={1} /></Reveal><Reveal className="about-copy" delay={.1}><p>I’m an Information Engineering graduate and full stack developer. My work moves comfortably between interface details, backend logic, databases, and the practical questions that turn software into something useful.</p><p>I enjoy simplifying complex workflows, making products feel effortless, and learning whatever the next challenge calls for.</p><div className="principles"><span><i>01</i> Clarity over noise</span><span><i>02</i> Details build trust</span><span><i>03</i> Ship, learn, improve</span></div></Reveal></div>
    <div className="experience-list"><p className="eyebrow">EXPERIENCE</p>{experience.map(({ period, role, company, icon: Icon }, index) => <Reveal className="experience-row" key={role} delay={index * .05}><span className="mono">{period}</span><div className="experience-title"><Icon size={20} /><h3>{role}</h3></div><span>{company}</span><ArrowDownRight size={22} /></Reveal>)}</div>
  </div></div>;
}
