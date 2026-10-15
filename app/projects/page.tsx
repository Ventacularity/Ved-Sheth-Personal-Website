import type { Metadata } from "next";
import ProjectRow from "@/components/ProjectRow";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Analog circuits, test hardware, avionics, and FPGA work.",
};

export default function ProjectsPage() {
  return (
    <>
      <div className="page-head">
        <h1 className="page-title">Projects</h1>
        <p className="page-lead">
          Analog circuits, test hardware, avionics, and FPGA work.
        </p>
      </div>

      <section className="section" aria-label="All projects">
        <h2 className="section-title">All projects</h2>
        <div className="section-body">
          {projects.map((p) => (
            <ProjectRow key={p.slug} project={p} />
          ))}
        </div>
      </section>
    </>
  );
}
