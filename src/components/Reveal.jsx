import { motion, useReducedMotion } from 'framer-motion';
export default function Reveal({ children, className, delay = 0 }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={{ opacity: 0, y: reduced ? 0 : 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>;
}
export function SectionHeading({ number, label, children, description }) {
  return <Reveal className="section-heading"><div><p className="eyebrow"><span>{number} /</span> {label}</p><h2>{children}</h2></div>{description && <p className="section-description">{description}</p>}</Reveal>;
}
