import type { Metadata } from "next";
import Link from "next/link";
import { experience } from "@/lib/content";
export const metadata: Metadata = { title: "Mission Log — Experience", description: "Hardware R&D at Hitachi Energy and secure computing with IEEE SIEEECURE." };
export default function Experience() {
  const hitachi = experience[0], ieee = experience[1];
  return <><div className="page-head station-compact-head"><Link className="back" href="/">← Back to Ved's world</Link><p className="section-overline">03 / MISSION LOG</p><h1 className="page-title">Built through <em>curiosity.</em></h1><p className="page-lead">From industry experience at Hitachi Energy to hands-on engineering projects at UC Berkeley, I've applied my skills in both professional and academic settings.</p></div>
    <section className="mission-grid" aria-label="Engineering experience">
      <article className="mission-card"><div className="mission-topline"><span>01 / INDUSTRY R&D</span><span>Raleigh, NC · May–Aug 2026</span></div><h2>{hitachi.org}</h2><p className="mission-role">Digital Hardware R&D Intern · Transformer Bushing Monitoring</p><p className="mission-intro">Built a controllable three-phase test environment to investigate transformer-bushing insulation health, current phasors, and fault detection.</p>
        <div className="mission-tiles">
          <div><strong>Three-phase RC emulator</strong><p>Relay-switched resistance emulates dielectric loss. Capacitance represents the bushing insulation response.</p></div>
          <div><strong>Measurement & automation</strong><p>Raspberry Pi, I²C relay boards, oscilloscope SCPI acquisition, and automated resistance sweeps.</p></div>
          <div><strong>Signal analysis</strong><p>Synchronized current phasors, sum-of-currents residuals, power factor, capacitance, and fault-phase attribution.</p></div>
          <div><strong>Remote dashboard</strong><p>Flask views for live diagnostics, polar phasor trends, baseline learning, and test-case comparisons.</p></div>
        </div>
        <div className="mission-media mission-media-hitachi"><figure className="portfolio-figure"><a href="/Hitachi/BenchRig.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open Hitachi transformer bushing monitoring bench rig full size"><img src="/Hitachi/BenchRig.jpg" alt="Hitachi transformer bushing monitoring bench rig" loading="lazy"/></a><figcaption>Hardware bench rig</figcaption></figure><figure className="portfolio-figure"><a href="/Hitachi/System.jpg" target="_blank" rel="noopener noreferrer" aria-label="Open Hitachi measurement and control system full size"><img src="/Hitachi/System.jpg" alt="Hitachi measurement and control system" loading="lazy"/></a><figcaption>Test system</figcaption></figure><figure className="portfolio-figure"><a href="/Hitachi/FinalPresentation.jpeg" target="_blank" rel="noopener noreferrer" aria-label="Open Final presentation for Hitachi Energy internship full size"><img src="/Hitachi/FinalPresentation.jpeg" alt="Final presentation for Hitachi Energy internship" loading="lazy"/></a><figcaption>Final presentation</figcaption></figure></div><div className="mission-outcome"><span>ENGINEERING DETAIL</span><p>Resolved an oscilloscope sampling-window issue: increasing capture coverage from 0.048 to 3.84 cycles of a 60 Hz signal made waveform fitting substantially more reliable. Scope-native measurements were retained as the validated primary path.</p></div>
        <p className="mission-footnote">Technical report: Sum of Currents Hardware Test for Transformer Bushing Monitoring · Summer 2026</p>
      </article>
      <article className="mission-card"><div className="mission-topline"><span>02 / HARDWARE SECURITY</span><span>Berkeley, CA · Oct 2025–May 2026</span></div><h2>IEEE · SIEEECURE</h2><p className="mission-role">Secure FPGA Computing · UC Berkeley IEEE Student Branch</p><p className="mission-intro">Contributed to a hardware-centric secure computing architecture combining a pipelined RISC-V processor with AES-based instruction encryption.</p>
        <div className="mission-tiles">
          <div><strong>AES-based encryption</strong><p>Worked on the encryption scheme and counter-derived keystream architecture for protecting instructions.</p></div>
          <div><strong>Entropy & key generation</strong><p>Developed a hardware key-generation pipeline based on noise from a reverse-biased Zener diode.</p></div>
          <div><strong>RISC-V datapath</strong><p>Contributed to the five-stage CPU architecture and pipeline control.</p></div>
          <div><strong>Hazards & forwarding</strong><p>Implemented portions of hazard detection and forwarding logic to manage data dependencies.</p></div>
        </div>
        <div className="mission-media"><figure className="portfolio-figure"><a href="/SIEEECURE/AES%20256%20Counter%20Encryption%20Scheme.jpg" target="_blank" rel="noopener noreferrer"><img src="/SIEEECURE/AES%20256%20Counter%20Encryption%20Scheme.jpg" alt="SIEEECURE AES-256 counter encryption scheme" loading="lazy"/></a><figcaption>AES-256 counter encryption scheme · Enlarge ↗</figcaption></figure><figure className="portfolio-figure"><a href="/SIEEECURE/SIEEECURE%20-%20Single%20CPU%20(FPGA)%20-%20Block%20Diagram.jpg" target="_blank" rel="noopener noreferrer"><img src="/SIEEECURE/SIEEECURE%20-%20Single%20CPU%20(FPGA)%20-%20Block%20Diagram.jpg" alt="SIEEECURE single FPGA CPU block diagram" loading="lazy"/></a><figcaption>Single-CPU FPGA block diagram · Enlarge ↗</figcaption></figure></div><div className="mission-outcome"><span>DESIGN DOCUMENTATION</span><p>These diagrams document the AES-256 instruction-encryption concept and FPGA CPU architecture. They illustrate the system design rather than a completed silicon implementation.</p></div>
        <a className="text-link" href="https://github.com/N0rmansrule/SIEEECURE-UCB" target="_blank" rel="noopener noreferrer">Explore the SIEEECURE repository ↗</a>
      </article>
    </section>
  </>;
}