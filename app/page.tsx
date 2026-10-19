import Link from "next/link";
import { site } from "@/lib/content";

// Percentage coordinates refer to the labels in ventacularity-final.png.
// Keep these invisible: the illustration already contains the station titles.
const stations = [
  // Coordinates measured from the final 1648 × 928 illustrated artwork.
  // Each invisible link covers its illustrated station card, including its icon.
  { number: "01", name: "Project Lab", href: "/projects/", x: 14.9, y: 32.6, w: 18.3, h: 9.9 },
  { number: "02", name: "Flight Deck", href: "/flight-deck/", x: 38.7, y: 11.8, w: 16.0, h: 9.1 },
  { number: "03", name: "Mission Log", href: "/experience/", x: 57.5, y: 34.3, w: 18.8, h: 9.4 },
  { number: "04", name: "Workbench", href: "/workbench/", x: 36.8, y: 79.2, w: 18.1, h: 9.3 },
  { number: "05", name: "Competition Zone", href: "/table-tennis/", x: 72.8, y: 79.2, w: 17.0, h: 9.3 },
  { number: "06", name: "About Me", href: "/about/", x: 86.2, y: 38.5, w: 16.3, h: 9.2 },
  { number: "07", name: "Comms Station", href: "/contact/", x: 91.8, y: 67.4, w: 15.9, h: 9.1 },
  { number: "08", name: "Into the Horizon", href: "/horizon/", x: 86.7, y: 15.6, w: 19.6, h: 12.1 },
];
export default function Home() {
 return <section className="map-home" aria-label="Ventacularity interactive portfolio">
   <div className="map-stage" role="group" aria-label="Explore eight illustrated stations">
     <div className="map-fallback" aria-hidden="true" />
     <div className="map-final-image" role="img" aria-label="Ventacularity: cinematic illustrated engineering desk with a space launch, aircraft, circuits, Bay Area sunset and eight navigation stations" />
     {stations.map(s=><Link key={s.name} href={s.href} className="map-target" data-station-number={s.number} style={{left:`${s.x}%`,top:`${s.y}%`,width:`${s.w}%`,height:`${s.h}%`}} aria-label={`${s.number} / ${s.name} — open station`} title={s.name} />)}
     <a className="map-social map-social-github" href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="GitHub" />
     <a className="map-social map-social-linkedin" href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn" />
     <a className="map-social map-social-email" href="mailto:ventacularity@berkeley.edu" aria-label="Email" title="Email" />
   </div>
   <nav className="map-mobile-links" aria-label="Portfolio stations">{stations.map(s=><Link key={s.name} href={s.href}>{s.number} / {s.name} ↗</Link>)}</nav>
 </section>;
}