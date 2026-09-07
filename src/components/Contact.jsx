import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ArrowUpRight, CheckCircle2, Loader2, Mail, MapPin, MessageCircle, Send } from 'lucide-react';
import Reveal from '@/components/Reveal';

const contactLinks = [
  { label: 'Email', value: 'omar.yasser.mosa@gmail.com', href: 'mailto:omar.yasser.mosa@gmail.com', icon: Mail },
  { label: 'WhatsApp', value: '+963 940 046 997', href: 'https://wa.me/963940046997', icon: MessageCircle },
  { label: 'Location', value: 'Aleppo, Syria', icon: MapPin },
];

export default function Contact() {
  const formRef = useRef(null);
  const [state, setState] = useState('idle');
  const submit = async (event) => {
    event.preventDefault();
    setState('sending');
    try {
      await emailjs.sendForm('service_x4vpk3b', 'template_42kuufj', formRef.current, 'LOAbQxJ9yC_jAwIrG');
      formRef.current.reset();
      setState('sent');
    } catch (error) {
      console.error(error);
      setState('error');
    }
  };
  return <div className="section-shell contact-section"><div className="shell contact-layout">
    <Reveal className="contact-intro"><p className="eyebrow"><span>04 /</span> Start a conversation</p><h2>Let’s make<br />something <em>matter.</em></h2><p>Have a product idea, a complex workflow, or a team that needs another thoughtful builder? Tell me about it.</p><a className="contact-email" href="mailto:omar.yasser.mosa@gmail.com">omar.yasser.mosa@gmail.com <ArrowUpRight /></a><div className="contact-list">{contactLinks.map(({ label, value, href, icon: Icon }) => { const content = <><Icon size={18} /><span><small>{label}</small>{value}</span>{href && <ArrowUpRight size={16} />}</>; return href ? <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{content}</a> : <div key={label}>{content}</div>; })}</div></Reveal>
    <Reveal className="contact-form-card" delay={.12}><div className="form-top"><span className="status-dot" /><span className="mono">AVAILABLE FOR SELECT PROJECTS</span></div><form ref={formRef} onSubmit={submit}>
      <div className="field-row"><label><span>Your name</span><input name="name" autoComplete="name" placeholder="Omar" required /></label><label><span>Email address</span><input type="email" name="email" autoComplete="email" placeholder="you@company.com" required /></label></div>
      <label><span>What are you building?</span><input name="subject" placeholder="A product, platform, or fresh idea" required /></label>
      <label><span>Tell me a little more</span><textarea name="message" rows="5" placeholder="Goals, timeline, and where you need help..." required /></label>
      <button className="button button-primary submit-button" type="submit" disabled={state === 'sending'}>{state === 'sending' ? <><Loader2 className="spin" size={18} /> Sending...</> : state === 'sent' ? <><CheckCircle2 size={18} /> Message sent</> : <>Send the brief <Send size={18} /></>}</button>
      {state === 'error' && <p className="form-error" role="alert">The message didn’t go through. Please email me directly and I’ll reply soon.</p>}
    </form></Reveal>
  </div></div>;
}
