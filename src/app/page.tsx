"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, Sparkles, X } from "lucide-react";
import { useState } from "react";

const navItems = ["Home", "About", "Projects", "Education", "Hobbies", "Contact"];
const projects = [
  { number: "01", name: "PulseCheck", type: "HEALTHCARE · WEB APP", description: "A health-focused experience designed to make personal wellness information easier to understand and act on.", tags: ["Product design", "Full-stack"], tone: "lime", mark: "✳" },
  { number: "02", name: "Eduscape", subtitle: "KCA LMS", type: "EDUCATION · LEARNING PLATFORM", description: "A learning management experience shaped around the needs of students and educators in a digital classroom.", tags: ["Education", "Web app"], tone: "lavender", mark: "↗" },
  { number: "03", name: "CarGeeks", type: "AUTOMOTIVE · DIGITAL EXPERIENCE", description: "A digital home for car enthusiasts to explore, compare, and connect around their interest in cars.", tags: ["Community", "Interface"], tone: "peach", mark: "◉" },
  { number: "04", name: "AgriForecast", type: "AGRICULTURE · DATA EXPERIENCE", description: "A concept for making useful agricultural forecasts and information more approachable for growers.", tags: ["Data", "Agriculture"], tone: "blue", mark: "⌁" },
];
const hobbies = ["Add a hobby", "Add another interest", "Add a third interest"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return <main>
    <header className="site-header"><a className="wordmark" href="#home" aria-label="Chaney Karechu home">CK<span>.</span></a>
      <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}</nav>
      <a className="header-cta" href="#contact">Let’s talk <ArrowUpRight size={15} /></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <section className="hero section-shell" id="home">
      <div className="hero-copy"><motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }}>HELLO, I’M CHANEY <span className="eyebrow-star">✳</span></motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .08 }}>I make <br/><span className="outlined">Systems work</span><span className="period">.</span></motion.h1>
        <p className="hero-description">Software developer crafting thoughtful digital experiences, from the first sketch to the final line of code.</p>
        <div className="hero-actions"><a className="button button-dark" href="#projects">Explore my work <ArrowDownRight size={16} /></a><a className="text-link" href="#about">A little about me <ArrowDown size={15} /></a></div>
        <p className="hero-index">BASED IN NAIROBI, KENYA <span>✳</span></p>
      </div>
      <motion.div className="hero-visual" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .18 }}>
        <div className="visual-top"><span>INDEPENDENT DEVELOPER</span><span>AVAILABLE FOR THE RIGHT THING <i /></span></div>
        <div className="initials-art"><span className="initial-c">C</span><span className="initial-k">K</span><span className="sparkle s-one">✳</span><span className="sparkle s-two">✦</span><span className="sparkle s-three">✳</span><span className="circle-stamp">DESIGN<br/>MEETS<br/>CODE</span></div>
        <div className="visual-bottom"><div><span className="card-caption">THE PERSON BEHIND THE PIXELS</span><strong>Chaney Karechu</strong></div><span className="card-arrow"><ArrowUpRight size={21}/></span></div>
      </motion.div>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={14}/></a>
    </section>

    <section className="about section-shell" id="about"><div className="section-heading"><span className="section-number">01 / ABOUT</span><span className="heading-rule" /></div>
      <div className="about-grid"><h2>Curious by nature.<br/><span>Developer by choice.</span></h2><div className="about-copy"><p>I’m Chaney, a full-stack developer who enjoys turning complex ideas into clear, useful digital experiences. I care about the details people feel: a page that makes sense, a flow that feels natural, and code that’s built to last.</p><p>My work moves between the front end and the systems behind it. I like collaborating, learning new things, and finding the thoughtful solution hidden inside a tricky problem.</p><a className="underlined-link" href="#contact">More about working together <ArrowUpRight size={15}/></a></div></div>
      <div className="principles"><div><span>01</span><strong>Curiosity first</strong><p>Ask better questions. Stay open to new ideas.</p></div><div><span>02</span><strong>People matter</strong><p>Build for the people who will use it every day.</p></div><div><span>03</span><strong>Details count</strong><p>Thoughtful choices add up to a better whole.</p></div></div>
    </section>

    <section className="projects section-shell" id="projects"><div className="section-heading"><span className="section-number">02 / SELECTED WORK</span><span className="heading-rule" /></div><div className="projects-title"><h2>Things I’ve<br/><span>been building.</span></h2><p>A selection of projects and concepts. Want the story behind one? <a href="#contact">Let’s talk <ArrowUpRight size={13}/></a></p></div>
      <div className="project-grid">{projects.map((project) => <article className={`project-card ${project.tone}`} key={project.name}><div className="project-art"><span className="project-number">({project.number})</span><span className="project-symbol">{project.mark}</span><span className="project-art-label">{project.name}</span><span className="project-orbit orbit-one"/><span className="project-orbit orbit-two"/><span className="project-art-spark">✳</span></div><div className="project-info"><div className="project-meta"><span>{project.type}</span><ArrowUpRight size={16}/></div><h3>{project.name}{project.subtitle && <span> / {project.subtitle}</span>}</h3><p>{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
      <p className="projects-note"><Sparkles size={15}/> Project details, live demos, and repository links can be added here when ready.</p>
    </section>

    <section className="education section-shell" id="education"><div className="section-heading"><span className="section-number">03 / EDUCATION</span><span className="heading-rule" /></div><div className="education-grid"><h2>Learning is<br/><span>part of the work.</span></h2><div className="education-card"><div className="edu-icon">K</div><div className="edu-copy"><span className="eyebrow">EDUCATION</span><h3>KCA University</h3><p>Degree and programme details can be added here.</p><span className="editable-label">EDITABLE PLACEHOLDER · ADD PROGRAMME / YEAR</span></div><ArrowUpRight className="edu-arrow" size={19}/></div></div></section>

    <section className="hobbies section-shell" id="hobbies"><div className="section-heading"><span className="section-number">04 / OUTSIDE THE SCREEN</span><span className="heading-rule" /></div><div className="hobbies-grid"><div><h2>Room for<br/><span>everything else.</span></h2><p>Good ideas often start away from the keyboard. A few things I enjoy:</p></div><div className="hobby-list">{hobbies.map((hobby, i) => <div className="hobby-item" key={hobby}><span>0{i + 1}</span><strong>{hobby}</strong><span className="placeholder-chip">EDIT ME</span><ArrowUpRight size={17}/></div>)}<p className="placeholder-note">These are placeholders. Replace them with your hobbies in <code>src/app/page.tsx</code>.</p></div></div></section>

    <section className="contact section-shell" id="contact"><div className="contact-top"><span className="section-number">05 / CONTACT</span><span className="contact-star">✳</span></div><h2>Have a good<br/>one in mind<span>?</span></h2><p>I’m always up for a thoughtful conversation about what you’re building.</p><a className="button button-light" href="mailto:ADD_YOUR_EMAIL@example.com">Say hello <ArrowUpRight size={16}/></a><span className="contact-placeholder">PLACEHOLDER EMAIL · UPDATE THE MAILTO LINK</span><div className="contact-footer"><span>NAIROBI, KENYA</span><span>OPEN TO GOOD COLLABORATIONS</span><span>✳</span></div></section>

    <footer className="site-footer"><a className="wordmark" href="#home">CK<span>.</span></a><span>Designed & built with care by Chaney Karechu.</span><div className="social-links"><a href="https://github.com/ADD_YOUR_USERNAME" aria-label="GitHub placeholder"><Github size={17}/></a><a href="https://linkedin.com/in/ADD_YOUR_USERNAME" aria-label="LinkedIn placeholder"><Linkedin size={17}/></a><a href="mailto:ADD_YOUR_EMAIL@example.com" aria-label="Email placeholder"><Mail size={17}/></a></div><span className="footer-edit">EDIT SOCIAL LINKS</span></footer>
  </main>;
}
