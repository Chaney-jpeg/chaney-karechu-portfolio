"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";

const navItems = ["Home", "About", "Projects", "Education", "Hobbies", "Contact"];

// UPDATE THESE TWO VALUES WITH YOUR DETAILS
const linkedinUrl = "https://www.linkedin.com/in/chaney-karechu-37a5922b9/";
const contactEmail = "chaneykarechu@gmail.com";

// Project information and links
const projects = [
  {
    number: "01",
    name: "PulseCheck",
    type: " API monitoring · WEB APP",
    description:
      "A lightweight API uptime monitoring and incident management tool for developers and teams to keep their applications running smoothly.",
    tags: ["Product design", "Full-stack"],
    tone: "lime",
    mark: "✳",
    liveUrl: "https://pulsecheck-frontend-ekep.onrender.com",
    githubUrl: "https://github.com/Chaney-jpeg/pulsecheck",
  },
  {
    number: "02",
    name: "Eduscape",
    subtitle: "KCA LMS",
    type: "EDUCATION · LEARNING PLATFORM",
    description:
      "A learning management experience shaped around the needs of students and educators in a digital classroom.",
    tags: ["Education", "Web app"],
    tone: "lavender",
    mark: "↗",
    liveUrl: "",
    githubUrl: "https://github.com/Chaney-jpeg/KCA-LMS",
  },
  {
    number: "03",
    name: "CarGeeks",
    type: "AUTOMOTIVE · DIGITAL EXPERIENCE",
    description:
      "A digital home for car enthusiasts to explore, compare, and connect around their interest in cars.",
    tags: ["Community", "Interface"],
    tone: "peach",
    mark: "◉",
    liveUrl: "https://cargeeks-2-0-e3p1.vercel.app",
    githubUrl: "https://github.com/Chaney-jpeg/CARGEEKS2.0",
  },
  {
    number: "04",
    name: "AgriForecast",
    type: "AGRICULTURE · DATA EXPERIENCE",
    description:
      "An agricultural forecasting platform providing useful insights, weather-driven recommendations, and information for growers.",
    tags: ["Data", "Agriculture"],
    tone: "blue",
    mark: "⌁",
    liveUrl: "https://agriforecast-lfo7.onrender.com",
    githubUrl: "https://github.com/Chaney-jpeg/agriforecast-project",
  },
];

const hobbies = [
  "Dog walking and spending time with pets",
  "Reading tech blogs and articles",
  "Hiking and exploring nature trails",
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      {/* NAVIGATION */}
      <header className="site-header">
        <a
          className="wordmark"
          href="#home"
          aria-label="Chaney Karechu home"
        >
          CK<span>.</span>
        </a>

        <nav
          className={menuOpen ? "nav-links is-open" : "nav-links"}
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">
          Let’s talk <ArrowUpRight size={15} />
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* HERO */}
      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            HELLO, I’M CHANEY <span className="eyebrow-star">✳</span>
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
          >
            I make <br />
            <span className="outlined">Systems work</span>
            <span className="period">.</span>
          </motion.h1>

          <p className="hero-description">
            Software developer crafting thoughtful digital experiences,
            from the first sketch to the final line of code.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href="#projects">
              Explore my work <ArrowDownRight size={16} />
            </a>

            <a className="text-link" href="#about">
              A little about me <ArrowDown size={15} />
            </a>
          </div>

          <p className="hero-index">
            BASED IN NAIROBI, KENYA <span>✳</span>
          </p>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.18 }}
        >
          <div className="visual-top">
            <span>INDEPENDENT DEVELOPER</span>
            <span>
              AVAILABLE FOR THE RIGHT THING <i />
            </span>
          </div>

          <div className="initials-art">
            <span className="initial-c">C</span>
            <span className="initial-k">K</span>
            <span className="sparkle s-one">✳</span>
            <span className="sparkle s-two">✦</span>
            <span className="sparkle s-three">✳</span>
            <span className="circle-stamp">
              DESIGN
              <br />
              MEETS
              <br />
              CODE
            </span>
          </div>

          <div className="visual-bottom">
            <div>
              <span className="card-caption">
                THE PERSON BEHIND THE PIXELS
              </span>
              <strong>Chaney Karechu</strong>
            </div>
            <span className="card-arrow">
              <ArrowUpRight size={21} />
            </span>
          </div>
        </motion.div>

        <a className="scroll-cue" href="#about">
          <span>SCROLL TO EXPLORE</span>
          <ArrowDown size={14} />
        </a>
      </section>

      {/* ABOUT */}
      <section className="about section-shell" id="about">
        <div className="section-heading">
          <span className="section-number">01 / ABOUT</span>
          <span className="heading-rule" />
        </div>

        <div className="about-grid">
          <h2>
            Curious by nature.
            <br />
            <span>Developer by choice.</span>
          </h2>

          <div className="about-copy">
            <p>
              I’m Chaney, a full-stack developer who enjoys turning complex
              ideas into clear, useful digital experiences. I care about the
              details people feel: a page that makes sense, a flow that feels
              natural, and code that’s built to last.
            </p>

            <p>
              My work moves between the front end and the systems behind it.
              I like collaborating, learning new things, and finding the
              thoughtful solution hidden inside a tricky problem.
            </p>

            <a className="underlined-link" href="#contact">
              More about working together <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="principles">
          <div>
            <span>01</span>
            <strong>Curiosity first</strong>
            <p>Ask better questions. Stay open to new ideas.</p>
          </div>

          <div>
            <span>02</span>
            <strong>People matter</strong>
            <p>Build for the people who will use it every day.</p>
          </div>

          <div>
            <span>03</span>
            <strong>Details count</strong>
            <p>Thoughtful choices add up to a better whole.</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="projects section-shell" id="projects">
        <div className="section-heading">
          <span className="section-number">02 / SELECTED WORK</span>
          <span className="heading-rule" />
        </div>

        <div className="projects-title">
          <h2>
            Things I’ve
            <br />
            <span>been building.</span>
          </h2>

          <p>
            A selection of projects and concepts. Want the story behind one?{" "}
            <a href="#contact">
              Let’s talk <ArrowUpRight size={13} />
            </a>
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${project.tone}`}
              key={project.name}
            >
              <div className="project-art">
                <span className="project-number">
                  ({project.number})
                </span>

                <span className="project-symbol">{project.mark}</span>

                <span className="project-art-label">
                  {project.name}
                </span>

                <span className="project-orbit orbit-one" />
                <span className="project-orbit orbit-two" />
                <span className="project-art-spark">✳</span>
              </div>

              <div className="project-info">
                <div className="project-meta">
                  <span>{project.type}</span>
                  <ArrowUpRight size={16} />
                </div>

                <h3>
                  {project.name}
                  {project.subtitle && <span> / {project.subtitle}</span>}
                </h3>

                <p>{project.description}</p>

                <div className="tag-row">
                  {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                {/* WORKING PROJECT LINKS */}
                <div className="project-links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} live demo`}
                    >
                      Live Demo <ArrowUpRight size={15} />
                    </a>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.name} GitHub repository`}
                    >
                      GitHub <Github size={15} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="projects-note">
          <Sparkles size={15} />
          Explore the live applications or dive into the source code on GitHub.
        </p>
      </section>

      {/* EDUCATION */}
      <section className="education section-shell" id="education">
        <div className="section-heading">
          <span className="section-number">03 / EDUCATION</span>
          <span className="heading-rule" />
        </div>

        <div className="education-grid">
          <h2>
            Learning is
            <br />
            <span>part of the work.</span>
          </h2>

          <div className="education-card">
            <div className="edu-icon">K</div>

            <div className="edu-copy">
              <span className="eyebrow">EDUCATION</span>
              <h3>KCA University</h3>
              <p>Bachelor of Science in Information Technology</p>
              <span className="editable-label">
                2023 – 2026
              </span>
            </div>

            <ArrowUpRight className="edu-arrow" size={19} />
          </div>

          <div className="education-card">
            <div className="edu-icon">K</div>

            <div className="edu-copy">
              <span className="eyebrow">FURTHER EDUCATION</span>
              <h3>Cisco Networking Academy</h3>
              <p>Certified Ethical Hacker</p>
              <span className="editable-label">
                OCT 2026
              </span>
            </div>

            <ArrowUpRight className="edu-arrow" size={19} />
          </div>

          <div className="education-card">
            <div className="edu-icon">K</div>

            <div className="edu-copy">
              <span className="eyebrow">FURTHER EDUCATION</span>
              <h3>IBM</h3>
              <p>Artificial Intelligence Literacy </p>
              <span className="editable-label">
                JUL 2026 – AUG 2026
              </span>
            </div>

            <ArrowUpRight className="edu-arrow" size={19} />
          </div>


        </div>
      </section>

      {/* HOBBIES */}
      <section className="hobbies section-shell" id="hobbies">
        <div className="section-heading">
          <span className="section-number">04 / OUTSIDE THE SCREEN</span>
          <span className="heading-rule" />
        </div>

        <div className="hobbies-grid">
          <div>
            <h2>
              Room for
              <br />
              <span>everything else.</span>
            </h2>

            <p>
              Good ideas often start away from the keyboard. A few things I
              enjoy:
            </p>
          </div>

          <div className="hobby-list">
            {hobbies.map((hobby, i) => (
              <div className="hobby-item" key={hobby}>
                <span>0{i + 1}</span>
                <strong>{hobby}</strong>
                <ArrowUpRight size={17} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact section-shell" id="contact">
        <div className="contact-top">
          <span className="section-number">05 / CONTACT</span>
          <span className="contact-star">✳</span>
        </div>

        <h2>
          Have a good
          <br />
          one in mind<span>?</span>
        </h2>

        <p>
          I’m always up for a thoughtful conversation about what you’re
          building.
        </p>

        {contactEmail ? (
          <a
            className="button button-light"
            href={`mailto:${contactEmail}`}
          >
            Say hello <ArrowUpRight size={16} />
          </a>
        ) : (
          <a className="button button-light" href="#contact">
            Say hello <ArrowUpRight size={16} />
          </a>
        )}

        <span className="contact-placeholder">
          OPEN TO OPPORTUNITIES · COLLABORATIONS · CONVERSATIONS
        </span>

        <div className="contact-footer">
          <span>NAIROBI, KENYA</span>
          <span>OPEN TO GOOD COLLABORATIONS</span>
          <span>✳</span>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <a className="wordmark" href="#home">
          CK<span>.</span>
        </a>

        <span>Designed & built with care by Chaney Karechu.</span>

        <div className="social-links">
          <a
            href="https://github.com/Chaney-jpeg"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <Github size={17} />
          </a>

          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <Linkedin size={17} />
            </a>
          )}

          {contactEmail && (
            <a
              href={`mailto:${contactEmail}`}
              aria-label="Send an email"
            >
              <Mail size={17} />
            </a>
          )}
        </div>
      </footer>
    </main>
  );
}