"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const links=[{href:"/#about",label:"About"},{href:"/projects/",label:"Projects"},{href:"/table-tennis/",label:"Table Tennis"},{href:"/#contact",label:"Contact"}];
export default function Header(){const pathname=usePathname()??"/";return <header className="site-header"><Link href="/" className="brand"><span className="brand-mark">V<span>.</span></span><span>VENTACULARITY</span></Link><nav className="nav" aria-label="Main navigation">{links.map(l=><Link key={l.href} href={l.href} aria-current={!l.href.includes("#")&&pathname.startsWith(l.href)?"page":undefined}>{l.label}</Link>)}</nav><a className="header-cta" href="mailto:ventacularity@berkeley.edu">LET'S TALK ↗</a></header>}
