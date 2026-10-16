"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const stations = [
  {number:"01",name:"Project Lab",href:"/projects/",icon:"⚒️"},
  {number:"02",name:"Flight Deck",href:"/flight-deck/",icon:"✈️"},
  {number:"03",name:"Mission Log",href:"/experience/",icon:"💼"},
  {number:"04",name:"Workbench",href:"/workbench/",icon:"⚙️"},
  {number:"05",name:"Competition Zone",href:"/table-tennis/",icon:"⚔️"},
  {number:"06",name:"About Me",href:"/about/",icon:"♙"},
  {number:"07",name:"Comms Station",href:"/contact/",icon:"📡"},
  {number:"08",name:"Into the Horizon",href:"/horizon/",icon:"🏔️"},
];
export default function Header(){
 const pathname=usePathname()??"/";
 return <header className="site-header station-header">
   <Link href="/" className="station-brand" aria-label="Ved Sheth — return to Ved's world"><strong>Ved Sheth<span>.</span></strong><small>ENGINEER / ATHLETE / BUILDER</small></Link>
   <nav className="station-icon-nav" aria-label="Explore the eight stations">
     {stations.map(s=><Link key={s.number} href={s.href} className="station-nav-link" aria-current={pathname.startsWith(s.href)?"page":undefined} aria-label={`${s.number} — ${s.name}`} title={`${s.number} · ${s.name}`}><span className="station-nav-icon" aria-hidden="true">{s.icon}</span><span className="station-nav-number" aria-hidden="true">{s.number}</span></Link>)}
   </nav>
 </header>;
}
