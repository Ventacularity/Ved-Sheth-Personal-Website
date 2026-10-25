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
        <p>My dad introduced me to table tennis, having played competitively himself. What started as something we shared grew into a passion that eventually took me to the international stage with Team USA.</p>
        <p>My interest in engineering began in high school through the Project Lead The Way (PLTW) curriculum. I learned Arduino programming and computer-aided design (CAD), building everything from catapults to hydraulic doors. I also joined my school&#39;s technology club and competed in glider competitions through <a href="https://mesa.ucop.edu/" target="_blank" rel="noopener noreferrer">Mathematics, Engineering, Science Achievement (MESA) ↗</a>.</p>
      </article>
      <article>
        <h2>Where it led</h2>
        <p>Then came UC Berkeley, and the rest is history. EECS 16B deepened my interest in circuits when my team built an electric guitar amplifier. I joined Cal Aero in February 2025, eventually becoming Avionics Lead and helping develop the electronics behind our aircraft.</p>
        <p>Today, I keep exploring analog circuits, embedded systems, avionics, and digital design while competing in table tennis. Both engineering and sport have taught me to keep experimenting, improving, and pushing myself further.</p>
        <Link className="button button-ghost" href="/projects/">Explore my projects ↗</Link>
      </article>
    </section>
  </>;
}
