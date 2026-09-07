import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Layers3, Minus, Plus } from 'lucide-react';
import Reveal, { SectionHeading } from '@/components/Reveal';
import { projects } from '@/data/projects';

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return <div className="section-shell projects-section"><div className="shell">
    <SectionHeading number="01" label="Selected work" description="Products shaped around real workflows, clear interfaces, and dependable engineering.">Useful products.<br /><em>Carefully built.</em></SectionHeading>

    <motion.div layout className="project-grid">
      <AnimatePresence initial={false} mode="popLayout">
        {visibleProjects.map((project, index) => <motion.article
          layout
          key={project.id}
          className="project-card"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: .97 }}
          transition={{ duration: .45, delay: Math.min(index, 5) * .045, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="project-image-wrap">
            <img src={'/images/' + project.image + '.png'} alt={project.imageAlt} loading={index > 2 ? 'lazy' : 'eager'} />
            <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
          </div>
          <div className="project-copy">
            <div className="project-heading-row"><div><span className="project-kicker"><Layers3 size={14} /> Product system</span><h3>{project.title}</h3></div>{project.liveLink && <a className="project-arrow" href={project.liveLink} target="_blank" rel="noreferrer" aria-label={'Open ' + project.title}><ArrowUpRight size={21} /></a>}</div>
            <p>{project.description}</p>
            <div className="project-footer"><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{project.liveLink && <a className="project-link" href={project.liveLink} target="_blank" rel="noreferrer">View project <ArrowUpRight size={16} /></a>}</div>
          </div>
        </motion.article>)}
      </AnimatePresence>
    </motion.div>

    {projects.length > 6 && <Reveal className="projects-more"><button className="button button-outline" onClick={() => setShowAll((value) => !value)}>{showAll ? <>Show selected <Minus size={18} /></> : <>View all projects <Plus size={18} /><span className="archive-count">{projects.length - 6} more</span></>}</button></Reveal>}
  </div></div>;
}
