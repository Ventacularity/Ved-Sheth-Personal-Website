import type { Metadata } from "next";
import Link from "next/link";
import ProjectRow from "@/components/ProjectRow";
import { projects } from "@/lib/content";
export const metadata:Metadata={title:"Project Lab — Engineering Projects",description:"Analog circuits, test hardware, avionics, and FPGA work."};
export default function ProjectsPage(){return <><div className="page-head"><Link className="back" href="/">← Back to Ved's world</Link><p className="section-overline">01 / PROJECT LAB</p><h1 className="page-title">Engineering <em>projects.</em></h1><p className="page-lead">Circuits, embedded systems, FPGA design, and the ideas that made it off the workbench.</p></div><section className="projects-grid" aria-label="All projects">{projects.map(p=><ProjectRow key={p.slug} project={p}/>)}</section></>}
