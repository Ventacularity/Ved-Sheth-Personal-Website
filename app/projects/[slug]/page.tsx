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

  return (
    <>
      <div className="page-head">
        <Link href="/projects/" className="back">
          All projects
        </Link>
        <h1 className="page-title">{project.title}</h1>
        <p className="page-lead">{project.summary}</p>
        <p className="project-context" style={{ marginTop: "1rem" }}>
          {project.context}
        </p>
        <p className="tags">{project.tags.join(", ")}</p>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <ImagePlaceholder label={heroImage} wide />
      </div>

      <section className="section" aria-labelledby="details-title">
        <h2 id="details-title" className="section-title">
          Details
        </h2>
        <div className="section-body">
          <ul className="bullets" style={{ marginTop: 0 }}>
            {project.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <p className="note" style={{ marginTop: "1.5rem" }}>
            A longer write-up with photos, schematics, and results is coming.
          </p>
        </div>
      </section>

      {gallery.length > 0 ? (
        <section className="section" aria-labelledby="images-title">
          <h2 id="images-title" className="section-title">
            Images
          </h2>
          <div className="section-body gallery">
            {gallery.map((label) => (
              <ImagePlaceholder key={label} label={label} />
            ))}
          </div>
        </section>
      ) : null}

      <nav className="pager" aria-label="More projects">
        {prev ? <Link href={`/projects/${prev.slug}/`}>Previous: {prev.title}</Link> : <span />}
        {next ? <Link href={`/projects/${next.slug}/`}>Next: {next.title}</Link> : <span />}
      </nav>
    </>
  );
}
