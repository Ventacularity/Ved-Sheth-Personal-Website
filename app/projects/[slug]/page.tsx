import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { getProject, projects } from "@/lib/content";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const prev = index > 0 ? projects[index - 1] : null;
  const next = index < projects.length - 1 ? projects[index + 1] : null;
  const [heroImage, ...gallery] = project.images;
  const githubUrl: Record<string, string> = {
    "voice-spoof-detector": "https://github.com/Ventacularity/Spoof-Detection",
    "solar-charger": "https://github.com/Ventacularity/Solar-Charger",
  };
  const projectRepo = githubUrl[slug];

  return (
    <>
      <div className="page-head station-compact-head">
        <Link href="/projects/" className="back">
          All projects
        </Link>
        <h1 className="page-title">{project.title}</h1>
        <p className="page-lead">{project.summary}</p>
        <p className="project-context" style={{ marginTop: "1rem" }}>
          {project.context}
        </p>
        <p className="tags">{project.tags.join(", ")}</p>
        {projectRepo && <a className="text-link" href={projectRepo} target="_blank" rel="noopener noreferrer">View source on GitHub ↗</a>}
      </div>

      <section className="project-detail-grid" aria-label="Project details">
        <div className="project-detail-visuals"><ImagePlaceholder label={heroImage} wide />{gallery.length > 0 && <div className="project-detail-gallery">{gallery.map(label => <ImagePlaceholder key={label} label={label}/>)}</div>}</div>
        <article className="project-detail-info"><p className="section-overline">DESIGN / IMPLEMENTATION / RESULTS</p><h2>Engineering highlights</h2><ul className="bullets">{project.highlights.map(h => <li key={h}>{h}</li>)}</ul><p className="note">Schematics, photos, and final test results will be added to this gallery.</p></article>
      </section>

      <nav className="pager" aria-label="More projects">
        {prev ? <Link href={`/projects/${prev.slug}/`}>Previous: {prev.title}</Link> : <span />}
        {next ? <Link href={`/projects/${next.slug}/`}>Next: {next.title}</Link> : <span />}
      </nav>
    </>
  );
}
