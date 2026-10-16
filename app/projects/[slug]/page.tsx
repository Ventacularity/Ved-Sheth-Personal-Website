import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/content";

type Params = { slug: string };
const media: Record<string, { src: string; alt: string; label: string }[]> = {
  "smartwatch-lcd-driver": [
    { src: "/LCD_Driver/LCD_Driver.png", alt: "Smartwatch LCD analog driver architecture and results graphic", label: "Smartwatch LCD driver · schematic-level design" },
  ],
  "voice-spoof-detector": [
    { src: "/Spoofer/Spectrograms.png", alt: "Spectrogram comparisons for voice spoof detection", label: "Spectrogram analysis" },
    { src: "/Spoofer/DSP Feature Analysis.png", alt: "Digital signal processing feature analysis", label: "DSP feature analysis" },
  ],
  "solar-charger": [
    { src: "/SolarCharger/Board.png", alt: "Assembled solar charger PCB", label: "Assembled hardware" },
    { src: "/SolarCharger/Layout.png", alt: "Solar charger printed circuit board layout", label: "PCB layout" },
    { src: "/SolarCharger/Schematic.png", alt: "Solar charger circuit schematic", label: "Circuit schematic" },
  ],
};

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
  const projectMedia = media[slug] ?? [];
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

      {slug === "smartwatch-lcd-driver" ? (
        <section className="lcd-full-art" aria-label="Complete LCD driver engineering infographic">
          <img src="/LCD_Driver/LCD_Driver.png" alt="Complete smartwatch LCD driver design infographic, including architecture, methods and results"/>
        </section>
      ) : (
        <section className="project-detail-grid project-detail-expanded" aria-label="Project details">
          <div className="project-detail-visuals project-detail-equal">
            {projectMedia.map(item => <figure className="portfolio-figure" key={item.src}><a href={item.src} target="_blank" rel="noopener noreferrer" aria-label={`Open ${item.label} full size`}><img src={item.src} alt={item.alt} loading="lazy"/></a><figcaption>{item.label} · Click to enlarge ↗</figcaption></figure>)}
          </div>
          {slug === "voice-spoof-detector" ? <div className="project-explainer">
            <p className="section-overline">EE 123 · SIGNAL PROCESSING / MACHINE LEARNING</p>
            <h2>Reading the signals</h2>
            <p>We studied audio produced by SPARC, a voice-conversion system that changes a recording to sound like a different speaker. SPARC uses HiFi-GAN, a neural-network vocoder that generates the final audio waveform. We looked for subtle traces of this processing: real speech changes naturally in frequency and amplitude, while converted speech can smooth or distort those patterns.</p>
            <div className="project-explainer-grid">
              <article><h3>01 / Spectrograms</h3><p>A spectrogram shows <strong>time horizontally, frequency vertically, and energy by color</strong>. Compare the real and converted speech panels for changes in high-frequency detail, transitions, and energy distribution. These are visual examples, not classifier predictions by themselves.</p></article>
              <article><h3>02 / DSP feature analysis</h3><p>Our features quantify spectral flux (how much the frequency spectrum changes between frames), low-frequency modulation (speech rhythm), high-frequency aliasing energy, and glottal variation. The plots compare real and spoof feature distributions; stronger separation means a more useful detection signal.</p></article>
              <article><h3>03 / What matters most</h3><p>Spectral-flux standard deviation was the strongest discriminator, with Cohen’s d = 1.915 on VCTK and 2.820 on held-out VC500. Modulation energy also separated classes strongly (d = 1.818 on VCTK). A larger absolute Cohen’s d indicates greater separation in units of pooled standard deviation.</p></article>
              <article><h3>04 / How we classified</h3><p>We standardized the DSP features, trained logistic regression and a 400-tree XGBoost model, then compared OR, AND, and averaged-probability ensembles. The averaged ensemble combined the models’ complementary strengths on unseen voice-conversion data.</p></article>
            </div>
            <div className="project-results"><div><strong>99.1%</strong><span>XGBoost accuracy · in-distribution VCTK</span></div><div><strong>94.7%</strong><span>Average ensemble accuracy · held-out VC500</span></div><div><strong>99.6%</strong><span>Spoof recall · held-out VC500, average ensemble</span></div></div>
            <p className="project-method-note">VCTK is a speech dataset containing recordings from many speakers; we used it for training and in-distribution evaluation. VC500 is a separate voice-conversion (VC) audio dataset, held out to test whether the detector worked on unfamiliar converted voices. These are datasets, not code libraries. Training used 1,000 real and 1,000 spoof clips. Initial phase-variance experiments showed essentially no separation, so the final approach emphasized spectral and temporal features.</p>
          </div> : <div className="project-explainer">
            <p className="section-overline">HOPE · POWER ELECTRONICS / EMBEDDED DESIGN</p><h2>From sunlight to USB power</h2>
            <p>The goal was a portable solar charging station: collect energy from a 5 V, 1.2 W panel, manage a single-cell Li-Po battery, and provide a regulated 5 V USB-C output while an ESP32 reports battery and charging status on an OLED.</p>
            <div className="solar-flow"><span>5 V solar panel</span><b>→</b><span>Fuse + Schottky diode</span><b>→</b><span>BQ24075 charger + 3.7 V Li-Po</span><b>→</b><span>TPS61023 boost → 5 V USB-C</span></div>
            <div className="project-explainer-grid">
              <article><h3>01 / Charging and protection</h3><p>The BQ24075 handles single-cell battery charging and power-path management. A resettable fuse protects the solar input, and a Schottky diode blocks reverse current toward the panel.</p></article>
              <article><h3>02 / Two regulated rails</h3><p>The TPS61023 boost converter raises battery voltage to a nominal 5 V for USB power. An AP7333 LDO supplies 3.3 V to the ESP32-S3 and logic circuitry.</p></article>
              <article><h3>03 / Sensing and interface</h3><p>The ESP32-S3 design uses ADC measurements and resistor dividers to estimate battery voltage and monitor charging conditions. A 0.96-inch I²C OLED was intended to show battery level and device charging status.</p></article>
              <article><h3>04 / PCB design and assembly</h3><p>We created the schematic and routed a custom PCB in KiCad, accounting for high-current traces, grounding, decoupling, and switching-converter noise. The photos show the physical board, its copper layout, and the underlying circuit.</p></article>
            </div>
            <div className="project-caveat"><strong>Prototype outcome</strong><p>We assembled the PCB and wrote the firmware, but a difficult hand-soldered USB-C programming connection left the microcontroller undetectable, so the board was <strong>not demonstrated as fully functional</strong>. The project provided practical experience with PCB bring-up, debugging, and manufacturing constraints.</p></div>
          </div>}
        </section>
      )}

      <nav className="pager" aria-label="More projects">
        {prev ? <Link href={`/projects/${prev.slug}/`}>Previous: {prev.title}</Link> : <span />}
        {next ? <Link href={`/projects/${next.slug}/`}>Next: {next.title}</Link> : <span />}
      </nav>
    </>
  );
}
