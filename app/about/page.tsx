import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "About Me" };

export default function About() {
  return <>
    <section className="page-head">
      <Link href="/" className="back">← Back to Ved's world</Link>
      <p className="section-overline">06 / ABOUT ME</p>
      <h1 className="page-title">Passion, <em>engineered.</em></h1>
      <p className="page-lead">Engineer. Athlete. Builder. I love turning ideas into things that work in the real world.</p>
    </section>
    <section className="station-content about-split">
      <article>
        <h2>Where it started</h2>
        <p>My dad introduced me to table tennis, having played competitively himself. I've played competitively for years and have had the opportunity to represent Team USA internationally.</p>
        <p>My interest in engineering began in high school through the <a href="https://www.pltw.org/" target="_blank" rel="noopener noreferrer">Project Lead The Way (PLTW) ↗</a> curriculum. I learned Arduino programming and computer-aided design (CAD), building everything from catapults to hydraulic doors. I also joined my school&#39;s technology club and competed in glider competitions through the <a href="https://mesa.ucop.edu/" target="_blank" rel="noopener noreferrer">Mathematics, Engineering, Science Achievement (MESA) ↗</a> program.</p>
      </article>
      <article>
        <h2>Where it led</h2>
        <p>At UC Berkeley, EECS 16B gave me more hands-on experience with circuits, including building an electric guitar amplifier. I also joined Cal Aero, where I eventually became Avionics Lead and now work on the electronics and avionics systems for our aircraft.</p>
        <p>Today, I keep exploring analog circuits, embedded systems, avionics, and digital design while competing in table tennis. Both engineering and sport have taught me to keep experimenting, improving, and pushing myself further.</p>
        <Link className="button button-ghost" href="/projects/">Explore my projects ↗</Link>
      </article>
    </section>
  </>;
}
