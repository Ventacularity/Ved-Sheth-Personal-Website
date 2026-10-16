import type { Metadata } from "next";
import Link from "next/link";
import ProjectRow from "@/components/ProjectRow";
import { projects } from "@/lib/content";
export const metadata: Metadata = { title: "Project Lab — Engineering Projects", description: "Three featured builds across analog circuits, signal processing, and PCB design." };
export default function ProjectsPage() {
  return <><div className="page-head station-compact-head"><Link className="back" href="/">← Back to Ved's world</Link><p className="section-overline">01 / PROJECT LAB</p><h1 className="page-title">Engineering <em>projects.</em></h1><p className="page-lead">Three deep dives, three different scales of engineering: transistors, signals, and complete hardware.</p></div><section className="projects-grid" aria-label="Engineering projects">{projects.map(p => <ProjectRow key={p.slug} project={p}/>)}</section></>;
}