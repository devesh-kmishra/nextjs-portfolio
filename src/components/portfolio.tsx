"use client";

import { ArrowDownRight, ArrowUpRight, Mail, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { useState } from "react";

const projects = [
  {
    number: "01",
    title: "Worklynx",
    type: "Web application · 2026",
    description:
      "A work management platform designed to manage tasks and keep projects moving.",
    tags: ["Java", "Angular", "Postgres"],
    style: "worklynx",
    mark: "Ⱳ",
    note: "Collaborations for\ngood work.",
    link: "https://github.com/devesh-kmishra/worklynx",
  },
  {
    number: "02",
    title: "Expense Tracker",
    type: "Web application · 2025",
    description:
      "A personal finance visualizer for tracking your expenses, with insightful charts.",
    tags: ["Next.js", "Shadcn UI", "OAuth", "MongoDB"],
    style: "relay",
    mark: "ƒ",
    note: "Finances\nin sync.",
    link: "https://expense-tracker-delta-kappa.vercel.app",
  },
  {
    number: "03",
    title: "Voice transcription",
    type: "Web application · 2025",
    description:
      "A voice-enabled task tracker, using OpenAI's API for transcription and parsing.",
    tags: ["React.js", "Node.js", "Postgres"],
    style: "fieldnotes",
    mark: "Ʋ",
    note: "Voice your\nchores.",
    link: "https://github.com/devesh-kmishra/voice-task-tracker",
  },
];

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);
  return (
    <main className={dark ? "portfolio dark-mode" : "portfolio"}>
      <header className="topbar">
        <a
          className="wordmark"
          href="#top"
          aria-label="Devesh Krishna Mishra home"
        >
          dkm<span>.</span>
        </a>
        <nav
          className={menuOpen ? "nav-links nav-open" : "nav-links"}
          aria-label="Main navigation"
        >
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <a
            href="https://drive.google.com/file/d/11JABqS70ARUePGwjEFN5Qr2V1QBclRB8/view"
            target="_blank"
            onClick={() => setMenuOpen(false)}
          >
            CV
          </a>
        </nav>
        <div className="top-actions">
          <span className="availability">
            <i /> Available for full-time roles
          </span>
          <button
            className="theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
          >
            {dark ? "☼" : "◐"}
          </button>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </header>
      <section className="hero" id="top">
        <div className="hero-kicker">
          <span className="eyebrow">
            SOFTWARE ENGINEER <span className="sep">/</span> BASED IN NEW DELHI
          </span>
          <span className="hero-index">01 — INTRODUCTION</span>
        </div>
        <h1>
          I build <span className="serif">digital things</span>
          <br />
          to keep learning<span className="blue-dot">.</span>
        </h1>
        <div className="hero-bottom">
          <p className="hero-copy">
            Thoughtful engineering for the web. I turn complicated problems into
            useful, reliable products — with a little care in every detail.
          </p>
          <a
            href="#work"
            className="round-link"
            aria-label="Explore selected work"
          >
            <ArrowDownRight size={22} />
          </a>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-orbit orbit-three" />
          <div className="art-core">
            DK<span>M</span>
          </div>
          <div className="art-caption">
            BUILT WITH INTENTION
            <br />
            SHIPPED WITH CARE
          </div>
          <span className="art-coordinate">28° 36′ 50″ N 77° 12′ 32″ E</span>
        </div>
        <div className="hero-footer">
          <span>SCROLL TO EXPLORE</span>
          <span>
            SOFTWARE DEVELOPER <span className="sep">·</span> 2026
          </span>
        </div>
      </section>
      <section className="work-section section-wrap" id="work">
        <div className="section-heading">
          <div>
            <span className="eyebrow">A FEW THINGS I’VE MADE</span>
            <h2>
              Selected work<span className="blue-dot">.</span>
            </h2>
          </div>
          <span className="section-count">
            03 PROJECTS <span>↓</span>
          </span>
        </div>
        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              <div className={`project-visual ${project.style}`}>
                <span className="visual-index">{project.number} / 03</span>
                <div className="visual-mark">{project.mark}</div>
                <p>{project.note}</p>
                <span className="visual-link">
                  <a href={`${project.link}`} target="_blank">
                    <ArrowUpRight size={18} />
                  </a>
                </span>
              </div>
              <div className="project-info">
                <div>
                  <span className="project-type">{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
                <div className="project-meta">
                  <div className="tag-list">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="about-section section-wrap" id="about">
        <div className="about-label">
          <span className="eyebrow">A LITTLE ABOUT ME</span>
          <span className="about-stamp">
            EST. IN
            <br />
            CURIOSITY
          </span>
        </div>
        <div className="about-content">
          <h2>
            Good software is a team sport.{" "}
            <span>
              I bring curiosity, craft, and a bias toward making things real.
            </span>
          </h2>
          <p>
            I’m Devesh, a software engineer who enjoys the space where product
            thinking meets solid systems. Over the last 2 years, I’ve worked
            with early-stage teams to build thoughtful experiences that hold up
            under the hood.
          </p>
          <p>
            My favorite work is collaborative, a little ambitious, and grounded
            in the belief that technology should feel human.
          </p>
          <div className="skills">
            <span>WHAT I BRING</span>
            <div>
              Full-stack engineering <i>·</i> Product thinking <i>·</i> Design
              systems <i>·</i> Technical leadership
            </div>
          </div>
        </div>
      </section>
      <section className="contact-section" id="contact">
        <div className="contact-inner">
          <span className="eyebrow">HAVE SOMETHING GOOD IN MIND?</span>
          <h2>
            Let’s make
            <br />
            <span className="serif">it happen.</span>
          </h2>
          <a className="contact-button" href="mailto:mdevesh47@gmail.com">
            Start a conversation <ArrowUpRight size={18} />
          </a>
          <div className="contact-orbit" aria-hidden="true" />
        </div>
      </section>
      <footer className="footer">
        <a className="wordmark" href="#top">
          dkm<span>.</span>
        </a>
        <span>
          DESIGNED & BUILT WITH CARE <span className="sep">·</span> © 2026
          DEVESH KRISHNA MISHRA
        </span>
        <div className="socials">
          <a
            href="https://github.com/devesh-kmishra"
            target="_blank"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/devesh-krishna-mishra-0563b5235"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="mailto:mdevesh47@gmail.com"
            target="_blank"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>
        </div>
      </footer>
    </main>
  );
}
