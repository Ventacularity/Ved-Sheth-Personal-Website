import Link from "next/link";
import PhaseTrace from "@/components/PhaseTrace";
import ProjectRow from "@/components/ProjectRow";
import {
  awards,
  education,
  experience,
  projects,
  site,
  skills,
  tableTennis,
} from "@/lib/content";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1 className="hero-name">{site.name}</h1>
        <PhaseTrace />
        <p className="lead">{site.tagline}</p>
        <p className="intro">{site.intro}</p>
      </section>

      <section className="section" aria-labelledby="projects-title">
        <h2 id="projects-title" className="section-title">
          Projects
        </h2>
        <div className="section-body">
          {projects.slice(0, 3).map((p) => (
            <ProjectRow key={p.slug} project={p} />
          ))}
          <Link href="/projects/" className="more">
            See all projects
          </Link>
        </div>
      </section>

      <section className="section" aria-labelledby="experience-title">
        <h2 id="experience-title" className="section-title">
          Experience
        </h2>
        <div className="section-body">
          {experience.map((job) => (
            <article key={job.org} className="job">
              <h3 className="job-org">
                {job.org}
                {job.place ? <span className="job-place">{job.place}</span> : null}
              </h3>
              <ul className="roles">
                {job.roles.map((r) => (
                  <li key={r.title}>
                    <span className="role-title">{r.title}</span>
                    <span className="period">{r.period}</span>
                  </li>
                ))}
              </ul>
              <ul className="bullets">
                {job.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="education-title">
        <h2 id="education-title" className="section-title">
          Education and skills
        </h2>
        <div className="section-body">
          <h3 className="job-org">{education.school}</h3>
          <p>{education.degree}</p>
          <p className="period">{education.period}</p>
          <dl className="facts" style={{ marginTop: "1rem" }}>
            <dt>Completed</dt>
            <dd>{education.completed.join(", ")}</dd>
            <dt>In progress</dt>
            <dd>{education.inProgress.join(", ")}</dd>
          </dl>

          <h3 className="subhead">Skills</h3>
          <dl className="facts">
            {skills.map((s) => (
              <div key={s.group} style={{ display: "contents" }}>
                <dt>{s.group}</dt>
                <dd>{s.items}</dd>
              </div>
            ))}
          </dl>

          <h3 className="subhead">Awards</h3>
          <ul className="bullets" style={{ marginTop: 0 }}>
            {awards.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="tt-title">
        <h2 id="tt-title" className="section-title">
          Table tennis
        </h2>
        <div className="section-body">
          <p className="page-lead">{tableTennis.headline}</p>
          <ul className="bullets">
            {tableTennis.facts.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <Link href="/table-tennis/" className="more">
            Results and background
          </Link>
        </div>
      </section>

      <section className="section" id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title" className="section-title">
          Contact
        </h2>
        <div className="section-body">
          <a className="contact-email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <p className="note" style={{ marginTop: "0.75rem" }}>
            {site.availability}
          </p>
          <div className="contact-links">
            <a href={site.linkedin}>LinkedIn</a>
            <a href={site.github}>GitHub</a>
          </div>
        </div>
      </section>
    </>
  );
}
