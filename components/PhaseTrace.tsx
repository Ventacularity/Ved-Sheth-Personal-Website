const W = 1200;
const H = 200;
const MID = H / 2;
const AMP = 78;
const CYCLES = 3;
const STEPS = 300;

// A three-phase waveform: three sines 120 degrees apart, drawn once on load.
function wave(phase: number) {
  let d = "";
  for (let i = 0; i <= STEPS; i++) {
    const t = i / STEPS;
    const x = (t * W).toFixed(1);
    const y = (MID - AMP * Math.sin(2 * Math.PI * CYCLES * t + phase)).toFixed(1);
    d += `${i === 0 ? "M" : "L"}${x} ${y} `;
  }
  return d.trim();
}

const PHASES = [
  { cls: "phase-a", offset: 0 },
  { cls: "phase-b", offset: (2 * Math.PI) / 3 },
  { cls: "phase-c", offset: (4 * Math.PI) / 3 },
];

export default function PhaseTrace() {
  return (
    <svg
      className="trace"
      viewBox={`0 0 ${W} ${H}`}
      aria-hidden="true"
      focusable="false"
    >
      <line className="axis" x1="0" y1={MID} x2={W} y2={MID} />
      {PHASES.map((p) => (
        <path
          key={p.cls}
          className={`phase ${p.cls}`}
          d={wave(p.offset)}
          pathLength={1}
        />
      ))}
    </svg>
  );
}
