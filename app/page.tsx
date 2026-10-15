import Link from "next/link";
import PhaseTrace from "@/components/PhaseTrace";
import ProjectRow from "@/components/ProjectRow";
import { awards, education, experience, projects, site, skills, tableTennis } from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="hero cinematic-hero">
        <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content">
          <div className="eyebrow"><span className="status-dot" /> UC BERKELEY · ELECTRICAL ENGINEERING & COMPUTER SCIENCE</div>
          <p className="hero-kicker">BUILDING WHAT'S NEXT</p>
          <h1 className="hero-name">VED <span>SHETH.</span></h1>
          <p className="hero-headline">From silicon to sky.</p>
          <p className="hero-description">I design analog circuits, embedded systems, and the hardware that connects ambitious ideas to the real world.</p>
          <div className="hero-actions">
            <Link href="/projects/" className="button button-primary">Explore my work <span aria-hidden="true">↗</span></Link>
            <a href="#about" className="button button-ghost">Get to know me <span aria-hidden="true">↓</span></a>
          </div>
          <div className="hero-metrics" aria-label="Highlights">
            <div><strong>10<span>+</span></strong><small>Years on Team USA</small></div>
            <div><strong>03<span>rd</span></strong><small>SAE Aero Design West · 2025</small></div>
            <div><strong>2027</strong><small>UC Berkeley EECS</small></div>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="hero-planet" />
          <div className="hero-flight-path" />
          <div className="hero-art-label">VENTACULARITY <span> // ENGINEERING THE FUTURE</span></div>
          <div className="hero-crosshair">+</div>
        </div>
        <div className="hero-bottom"><span>01 / INTRODUCTION</span><span>SCROLL TO EXPLORE ↓</span></div>
      </section>

      <section className="intro-panel" id="about">
        <div className="section-overline">THE PERSON BEHIND THE PROJECTS</div>
        <div className="intro-layout">
          <h2>Curiosity, <em>engineered.</em></h2>
          <div><p className="intro-big">{site.intro}</p><p className="intro-muted">I'm an EECS student at UC Berkeley, avionics lead at Cal Aero, and a Team USA table tennis athlete. Whether it's an analog IC, a flight-ready electrical system, or a national championship match, I love solving hard problems with great teams.</p><a href={site.linkedin} className="text-link" target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a></div>
        </div>
      </section>

      <section className="showcase-section" aria-labelledby="projects-title">
        <div className="section-heading"><div><div className="section-overline">01 / SELECTED WORK</div><h2 id="projects-title">Ideas made <em>real.</em></h2></div><Link href="/projects/" className="text-link">All projects ↗</Link></div>
        <div className="featured-projects">{projects.slice(0, 4).map((p, i) => <ProjectRow key={p.slug} project={p} />)}</div>
      </section>

      <section className="experience-section" aria-labelledby="experience-title">
        <div className="section-heading"><div><div className="section-overline">02 / THE JOURNEY</div><h2 id="experience-title">Where I've <em>built.</em></h2></div></div>
        <div className="experience-grid">{experience.filter(job => job.org !== "Cal Table Tennis Club" && job.org !== "USA Table Tennis").map((job, i) => <article key={job.org} className="experience-card"><span className="card-index">0{i + 1}</span><h3>{job.org}</h3><p className="experience-role">{job.roles[0].title}</p><p className="experience-period">{job.roles[0].period}</p><p className="experience-description">{job.bullets[0]}</p></article>)}</div>
      </section>

      <section className="skills-section" aria-labelledby="skills-title">
        <div className="section-overline">03 / TOOLKIT</div><h2 id="skills-title">The tools behind <em>the work.</em></h2>
        <div className="skill-grid">{skills.map(s => <div className="skill-group" key={s.group}><h3>{s.group}</h3><p>{s.items}</p></div>)}</div>
        <div className="education-line"><span>EDUCATION</span><strong>{education.school}</strong><span>{education.degree} · Class of 2027</span></div>
      </section>

      <section className="athlete-feature" aria-labelledby="athlete-title">
        <div className="athlete-number" aria-hidden="true">USA</div><div className="athlete-content"><div className="section-overline">04 / BEYOND ENGINEERING</div><h2 id="athlete-title">Precision is a <em>mindset.</em></h2><p>{tableTennis.headline}</p><p>Ten years representing Team USA, and a national collegiate championship-winning team captain. Competition has shaped how I lead, collaborate, and perform under pressure.</p><Link href="/table-tennis/" className="button button-ghost">My table tennis journey ↗</Link></div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title"><div className="section-overline">05 / LET'S CONNECT</div><h2 id="contact-title">Let's build something <em>remarkable.</em></h2><p>{site.availability}</p><a href={`mailto:${site.email}`} className="contact-email">{site.email} <span aria-hidden="true">↗</span></a><div className="contact-links"><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a></div></section>
    </>
  );
}
