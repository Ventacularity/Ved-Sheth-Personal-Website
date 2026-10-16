import Link from "next/link";
import type { Project } from "@/lib/content";
const projectMedia: Record<string, { src: string; alt: string }> = {
  "smartwatch-lcd-driver": { src: "/LCD_Driver/LCD_Driver.png", alt: "Smartwatch LCD driver engineering graphic" },
  "voice-spoof-detector": { src: "/Spoofer/Spectrograms.png", alt: "Speech spectrograms from voice spoof detection" },
  "solar-charger": { src: "/SolarCharger/Board.png", alt: "Assembled solar-powered lithium-ion charging board" },
};
export default function ProjectRow({project}:{project:Project}){
  const media = projectMedia[project.slug];
  return <article className="project-card"><Link href={`/projects/${project.slug}/`} className="project-card-link" aria-label={`Read about ${project.title}`}>
    <div className="project-visual project-visual-photo">
      {media ? <img src={media.src} alt={media.alt} loading="lazy"/> : <span className="visual-caption">{project.tags[0]}</span>}
      <span className="visual-arrow" aria-hidden="true">↗</span>
    </div>
    <div className="project-copy"><p className="project-context">{project.context}</p><h3 className="project-title">{project.title}</h3><p className="project-summary">{project.summary}</p><div className="project-tags">{project.tags.slice(0,3).map(tag=><span key={tag}>{tag}</span>)}</div></div>
  </Link></article>;
}