import type { Metadata } from "next";
import Link from "next/link";
import { experience } from "@/lib/content";
export const metadata: Metadata = { title: "Mission Log — Experience", description: "Hardware R&D at Hitachi Energy and secure computing with IEEE SIEEECURE." };
export default function Experience() {
  const hitachi = experience[0], ieee = experience[1];
  return <><div className="page-head station-compact-head"><Link className="back" href="/">← Back to Ved's world</Link><p className="section-overline">03 / MISSION LOG</p><h1 className="page-title">Driven through <em>curiosity.</em></h1><p className="page-lead">Two missions: diagnosing high-voltage insulation through measured signals, and protecting computation through hardware.</p></div>
    <section className="mission-grid" aria-label="Engineering experience">
      <article className="mission-card"><div className="mission-topline"><span>01 / INDUSTRY R&D</span><span>Raleigh, NC · May–Aug 2026</span></div><h2>{hitachi.org}</h2><p className="mission-role">Digital Hardware R&D Intern · Transformer Bushing Monitoring</p><p className="mission-intro">Built a controllable three-phase test environment to investigate transformer-bushing insulation health, current phasors, and fault detection.</p>
        <div className="mission-tiles">
          <div><strong>Three-phase RC emulator</strong><p>Relay-switched resistance emulates dielectric loss. Capacitance represents the bushing insulation response.</p></div>
          <div><strong>Measurement & automation</strong><p>Raspberry Pi, I²C relay boards, oscilloscope SCPI acquisition, and automated resistance sweeps.</p></div>
          <div><strong>Signal analysis</strong><p>Synchronized current phasors, sum-of-currents residuals, power factor, capacitance, and fault-phase attribution.</p></div>
          <div><strong>Remote dashboard</strong><p>Flask views for live diagnostics, polar phasor trends, baseline learning, and test-case comparisons.</p></div>
        </div>
        <div className="mission-outcome"><span>ENGINEERING DETAIL</span><p>Resolved an oscilloscope sampling-window issue: increasing capture coverage from 0.048 to 3.84 cycles of a 60 Hz signal made waveform fitting substantially more reliable. Scope-native measurements were retained as the validated primary path.</p></div>
        <p className="mission-footnote">Technical report: Sum of Currents Hardware Test for Transformer Bushing Monitoring · Summer 2026</p>
      </article>
      <article className="mission-card"><div className="mission-topline"><span>02 / HARDWARE SECURITY</span><span>Berkeley, CA · Oct 2025–May 2026</span></div><h2>IEEE · SIEEECURE</h2><p className="mission-role">Secure FPGA Computing · UC Berkeley IEEE Student Branch</p><p className="mission-intro">Contributed to a hardware-centric secure computing architecture combining a pipelined RISC-V processor with AES-based instruction encryption.</p>
        <div className="mission-tiles">
          <div><strong>AES-based encryption</strong><p>Worked on the encryption scheme and counter-derived keystream architecture for protecting instructions.</p></div>
          <div><strong>Entropy & key generation</strong><p>Developed a hardware key-generation pipeline based on noise from a reverse-biased Zener diode.</p></div>
          <div><strong>RISC-V datapath</strong><p>Contributed to the five-stage CPU architecture and pipeline control.</p></div>
          <div><strong>Hazards & forwarding</strong><p>Implemented portions of hazard detection and forwarding logic to manage data dependencies.</p></div>
        </div>
        <div className="mission-outcome"><span>DESIGN DOCUMENTATION</span><p>Architecture diagrams cover the CPU datapath, AES-256 instruction-encryption concept, and Zener-noise key-derivation chain. Technical images will be added when the final gallery is ready.</p></div>
        <a className="text-link" href="https://github.com/N0rmansrule/SIEEECURE-UCB" target="_blank" rel="noopener noreferrer">Explore the SIEEECURE repository ↗</a>
      </article>
    </section>
  </>;
}