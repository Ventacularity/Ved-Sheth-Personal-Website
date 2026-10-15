import Link from "next/link";
import { site } from "@/lib/content";

// Percentage coordinates refer to the labels in ventacularity-final.png.
// Keep these invisible: the illustration already contains the station titles.
const stations = [
  { name: "Project Lab", href: "/projects/", x: 16.7, y: 34.3, w: 20.3, h: 10.5 },
  { name: "Flight Deck", href: "/flight-deck/", x: 39.3, y: 34.3, w: 20.1, h: 10.5 },
  { name: "Mission Log", href: "/experience/", x: 61.3, y: 34.3, w: 20.5, h: 10.5 },
  { name: "Into the Horizon", href: "/horizon/", x: 83.7, y: 34.3, w: 20.4, h: 10.5 },
  { name: "Workbench", href: "/workbench/", x: 28.0, y: 45.6, w: 17.8, h: 9.4 },
  { name: "Competition Zone", href: "/table-tennis/", x: 47.5, y: 45.6, w: 19.7, h: 9.4 },
  { name: "About Me", href: "/about/", x: 67.6, y: 45.6, w: 17.8, h: 9.4 },
  { name: "Comms Station", href: "/contact/", x: 86.9, y: 45.6, w: 18.2, h: 9.4 },
];
export default function Home() {
 return <section className="map-home" aria-label="Ventacularity interactive portfolio">
   <div className="map-stage" role="group" aria-label="Explore eight illustrated stations">
     <div className="map-fallback" aria-hidden="true" />
     <div className="map-final-image" role="img" aria-label="Ventacularity: cinematic illustrated engineering desk with a space launch, aircraft, circuits, Bay Area sunset and eight navigation stations" />
     {stations.map(s=><Link key={s.name} href={s.href} className="map-target" style={{left:`${s.x}%`,top:`${s.y}%`,width:`${s.w}%`,height:`${s.h}%`}} aria-label={`Explore ${s.name}`} title={s.name} />)}
     <a className="map-social map-social-github" href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" />
     <a className="map-social map-social-linkedin" href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" />
     <a className="map-social map-social-email" href={`mailto:${site.email}`} aria-label="Email" title="Email" />
   </div>
   <nav className="map-mobile-links" aria-label="Portfolio stations">{stations.map(s=><Link key={s.name} href={s.href}>{s.name} ↗</Link>)}</nav>
 </section>;
}