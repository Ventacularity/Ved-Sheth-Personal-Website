import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";
import type { Project } from "@/lib/content";

export default function ProjectRow({ project }: { project: Project }) {
  return (
    <article className="project">
      <div>
        <h3 className="project-title">
          <Link href={`/projects/${project.slug}/`}>{project.title}</Link>
        </h3>
        <p className="project-context">{project.context}</p>
        <p className="project-summary">{project.summary}</p>
        <p className="tags">{project.tags.join(", ")}</p>
      </div>
      <ImagePlaceholder label={project.images[0]} />
    </article>
  );
}
