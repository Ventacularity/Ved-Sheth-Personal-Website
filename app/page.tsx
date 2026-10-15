import Link from "next/link";
import { site } from "@/lib/content";

const stations = [
  { name: "Flight Deck", href: "/flight-deck/", x: 39.2, y: 11.4, w: 16.2, h: 9.3 },
  { name: "Project Lab", href: "/projects/", x: 15.7, y: 32.5, w: 18.2, h: 9.8 },
  { name: "Mission Log", href: "/experience/", x: 58, y: 33.5, w: 19.4, h: 9.4 },
  { name: "Into the Horizon", href: "/horizon/", x: 86.3, y: 13.5, w: 20.3, h: 11.1 },
  { name: "About Me", href: "/about/", x: 85.8, y: 37.5, w: 16.3, h: 9.1 },
  { name: "Workbench", href: "/workbench/", x: 36.8, y: 78.7, w: 18, h: 9.2 },
  { name: "Competition Zone", href: "/table-tennis/", x: 72.8, y: 78.7, w: 16.7, h: 9.2 },
  { name: "Comms Station", href: "/contact/", x: 91.5, y: 66.8, w: 15.3, h: 9.2 },
];
export default function Home() {
 return <section className="map-home" aria-label="Ventacularity interactive portfolio">
   <div className="map-stage" role="group" aria-label="Explore eight illustrated stations">
     <div className="map-fallback" aria-hidden="true" />
     <div className="map-final-image" role="img" aria-label="Ventacularity: cinematic illustrated engineering desk with a space launch, aircraft, circuits, Bay Area sunset and eight navigation stations" />
     {stations.map(s=><Link key={s.name} href={s.href} className="map-target" style={{left:`${s.x}%`,top:`${s.y}%`,width:`${s.w}%`,height:`${s.h}%`}} aria-label={`Explore ${s.name}`} title={s.name}><span className="sr-only">{s.name}</span></Link>)}
     <a className="map-social map-social-github" href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" />
     <a className="map-social map-social-linkedin" href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" />
     <a className="map-social map-social-email" href={`mailto:${site.email}`} aria-label="Email" title="Email" />
   </div>
   <nav className="map-mobile-links" aria-label="Portfolio stations">{stations.map(s=><Link key={s.name} href={s.href}>{s.name} ↗</Link>)}</nav>
 </section>;
}
