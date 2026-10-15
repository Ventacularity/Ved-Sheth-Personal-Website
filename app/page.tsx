import Link from "next/link";
import { projects, site } from "@/lib/content";

const destinations = [
  { id:"projects", href:"/projects/", number:"01", label:"PROJECT LAB", title:"Engineering Projects", detail:"Circuits · embedded systems · FPGA", icon:"⌁" },
  { id:"aero", href:"/projects/rc-aircraft-avionics/", number:"02", label:"FLIGHT DECK", title:"Aerospace & Avionics", detail:"Cal Aero · propulsion · flight electronics", icon:"✈" },
  { id:"experience", href:"/#experience", number:"03", label:"MISSION LOG", title:"Experience", detail:"Hitachi Energy · Berkeley · IEEE", icon:"◈" },
  { id:"skills", href:"/#skills", number:"04", label:"WORKBENCH", title:"Skills & Education", detail:"Analog · digital · hardware", icon:"⌘" },
  { id:"tennis", href:"/table-tennis/", number:"05", label:"COMPETITION ZONE", title:"Table Tennis", detail:"Team USA · national championships", icon:"◉" },
  { id:"contact", href:"/#contact", number:"06", label:"COMMS STATION", title:"Get in Touch", detail:"Let's build something together", icon:"↗" },
];

export default function Home() {
  return <>
    <section className="art-map" aria-labelledby="map-title">
      <div className="map-stars" aria-hidden="true" />
      <div className="map-glow" aria-hidden="true" />
      <div className="map-horizon" aria-hidden="true" />
      <div className="map-planet" aria-hidden="true"><div className="map-planet-rim"/></div>
      <div className="map-rocket" aria-hidden="true">✦<span>──────</span></div>
      <div className="map-scene-desk" aria-hidden="true">
        <div className="scene-monitor scene-monitor-main"><span>V / S</span><i>ENGINEERING SYSTEMS</i><b>⌁ ━━━ ⌁</b></div>
        <div className="scene-monitor scene-monitor-side"><span>0110<br/>1011<br/>1100</span></div>
        <div className="scene-desk-surface" />
        <div className="scene-circuit">◈ ── ◇ ── ◈</div>
      </div>
      <div className="map-intro">
        <p className="map-eyebrow">WELCOME TO MY WORLD <span> / 001</span></p>
        <h1 id="map-title">VENTA<span>CULARITY</span><span className="map-period">.</span></h1>
        <p className="map-subtitle">The intersection of circuits, flight, and competition.</p>
        <p className="map-instructions"><span className="map-pulse" /> Explore the scene — select a destination</p>
      </div>
      <div className="map-destinations" aria-label="Explore portfolio sections">
        {destinations.map(d=><Link key={d.id} href={d.href} className={`map-hotspot hotspot-${d.id}`}><span className="hotspot-icon" aria-hidden="true">{d.icon}</span><span className="hotspot-copy"><small>{d.number} / {d.label}</small><strong>{d.title}</strong><em>{d.detail}</em></span><span className="hotspot-arrow" aria-hidden="true">↗</span></Link>)}
      </div>
      <div className="map-bottom"><span>VED SHETH / UC BERKELEY EECS</span><span>AN INTERACTIVE PORTFOLIO</span></div>
    </section>
    <section className="map-understory" id="experience">
      <div className="map-understory-heading"><span>MISSION LOG / EXPERIENCE</span><h2>Built through <em>curiosity.</em></h2></div>
      <div className="map-quick-grid">
        <article><span>2026</span><h3>Hitachi Energy</h3><p>Digital Hardware R&D Intern — transformer monitoring, test automation, and measurement systems.</p></article>
        <article><span>2025 — PRESENT</span><h3>Cal Aero</h3><p>Avionics Lead — electrical architecture and integration for competition aircraft.</p></article>
        <article><span>2025 — 2026</span><h3>Berkeley IEEE</h3><p>Hardware Engineer — secure FPGA RISC-V computing.</p></article>
      </div>
    </section>
    <section className="map-understory" id="skills">
      <div className="map-understory-heading"><span>WORKBENCH / SKILLS</span><h2>My technical <em>toolkit.</em></h2></div>
      <div className="map-skill-chips">{["Analog & mixed-signal","PCB design","Embedded systems","FPGA / SystemVerilog","Cadence Virtuoso","KiCad & Altium","Python / C / C++","Test & measurement"].map(s=><span key={s}>{s}</span>)}</div>
      <p className="map-education">B.S. Electrical Engineering & Computer Science · UC Berkeley · Expected 2027</p>
    </section>
    <section className="map-contact" id="contact"><p>COMMS STATION / 006</p><h2>Have a mission in mind?</h2><a href={`mailto:${site.email}`}>{site.email} ↗</a><div><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a></div></section>
  </>;
}
