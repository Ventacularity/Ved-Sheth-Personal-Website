// All site copy lives here so it can be edited in one place.
// Sources: LinkedIn profile PDF and resume. Phone number and address are intentionally omitted.

export const site = {
  name: "Ved Sheth",
  tagline:
    "Electrical engineering and computer science at UC Berkeley, focused on analog and mixed-signal circuit design.",
  intro:
    "I design circuits and build the hardware, firmware, and test tooling around them, from op-amp sizing in Cadence to avionics for a competition aircraft.",
  email: "ventacularity@berkeley.edu",
  linkedin: "https://www.linkedin.com/in/vedsheth/",
  github: "https://github.com/Ventacularity",
  availability:
    "Graduating May 2027 and looking for full-time hardware and analog design roles.",
};

export type Role = { title: string; period: string };

export type Experience = {
  org: string;
  place?: string;
  roles: Role[];
  bullets: string[];
};

export const experience: Experience[] = [
  {
    org: "Hitachi Energy",
    place: "Raleigh, North Carolina",
    roles: [{ title: "Digital Hardware R&D Intern", period: "May 2026 – Aug 2026" }],
    bullets: [
      "Designed and built a bench rig with switchable resistor and capacitor banks across three phases, electrically equivalent to a real transformer bushing tap at 60 Hz.",
      "Built a headless Raspberry Pi service that automates rig sweeps, pulls live scope data, and computes power factor, bushing capacitance, and fault-localizing current phasors.",
      "Developed a line voltage reconstruction algorithm from bushing leakage currents, 95% accurate against the bench's RMS and phase measurements.",
    ],
  },
  {
    org: "Aerospace SAE at Berkeley",
    place: "Berkeley, California",
    roles: [
      { title: "Avionics Lead", period: "Jan 2026 – present" },
      { title: "Avionics Engineer", period: "Feb 2025 – Dec 2025" },
    ],
    bullets: [
      "Lead avionics architecture and system integration for a twin-motor RC aircraft: propulsion, power distribution, and control surfaces.",
      "Finished 3rd nationally and 10th internationally at the 2025 SAE Aero Design West competition.",
    ],
  },
  {
    org: "UC Berkeley IEEE Student Branch",
    place: "Berkeley, California",
    roles: [{ title: "Hardware Engineer, SIEEECURE", period: "Oct 2025 – May 2026" }],
    bullets: [
      "Implemented a 5-stage RISC-V CPU pipeline on an FPGA as part of a secure hardware enclave for encrypted computation.",
    ],
  },
  {
    org: "Cal Table Tennis Club",
    place: "Berkeley, California",
    roles: [
      { title: "President", period: "2026 – present" },
      { title: "Co-President", period: "May 2025 – 2026" },
      { title: "Secretary", period: "Aug 2024 – May 2025" },
      { title: "Competitive team captain", period: "Aug 2023 – present" },
    ],
    bullets: [
      "Run practices, open play events, and socials, and captain the competitive team at National Collegiate Championships.",
    ],
  },
  {
    org: "Space Enterprise at Berkeley",
    place: "Berkeley, California",
    roles: [{ title: "Avionics Engineer", period: "Sep 2024 – Dec 2024" }],
    bullets: [
      "Tested and validated assembled PCBs with Python scripts for hardware integrity checks and diagnostics.",
      "Helped assemble the rocket: integrated pressure transducers, heat shrink insulation, and Ethernet wiring.",
    ],
  },
  {
    org: "USA Table Tennis",
    roles: [{ title: "TeamUSA athlete", period: "Jul 2016 – present" }],
    bullets: ["National team player for 10 years. Peak rank #6 in US men."],
  },
];

export const education = {
  school: "University of California, Berkeley",
  degree: "BS, Electrical Engineering and Computer Science",
  period: "Aug 2023 – May 2027 (expected)",
  completed: ["Digital Signal Processing", "Analog Integrated Circuits", "Computer Architecture"],
  inProgress: ["Digital Design and Integrated Circuits (FPGA concentration)", "Advanced PCB Engineering"],
};

export const skills: { group: string; items: string }[] = [
  {
    group: "Prototyping and assembly",
    items: "Soldering and desoldering, breadboarding, oscilloscope and signal generator, bench power supplies, multimeter testing",
  },
  { group: "Embedded hardware", items: "Raspberry Pi, Arduino, ESP32, STM32, Xilinx FPGA" },
  {
    group: "Design and simulation",
    items: "Cadence Virtuoso, LTspice, KiCad, Altium Designer, MATLAB/Simulink, Vivado",
  },
  { group: "Languages and libraries", items: "Python, Java, C, C++, SystemVerilog, NumPy, SQL" },
  { group: "Protocols", items: "UART, I2C, SPI, CAN, RS-485" },
];

export const awards = ["President's Silver Service Volunteer Award", "TeamUSA athlete"];

export type Project = {
  slug: string;
  title: string;
  context: string;
  summary: string;
  tags: string[];
  highlights: string[];
  /** Labels for the image placeholders, replaced with real photos later. */
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "bushing-test-bench",
    title: "Transformer bushing test bench",
    context: "Hitachi Energy, summer 2026",
    summary:
      "A safe, repeatable bench rig that behaves like a real transformer bushing tap, with automated sweeps and a live fault dashboard.",
    tags: ["Python", "Raspberry Pi", "PyVISA/SCPI", "I2C", "Flask"],
    highlights: [
      "Built a rig with switchable resistor and capacitor banks across three phases, electrically equivalent to a real bushing tap at 60 Hz, and validated it to within about 1% of known component values.",
      "Wrote a headless Raspberry Pi acquisition service (Python, PyVISA/SCPI, I2C) that drives resistor sweeps through XL9535 relay boards and pulls live scope data about every 15 seconds.",
      "Computes power factor, bushing capacitance, and fault-localizing current phasors in real time.",
      "Developed a Flask dashboard with a polar current-phasor plot showing fault direction and severity, and baseline-learning workflows for healthy-state comparison.",
      "Simulated bushing and rig phasor behavior in Python to validate Hitachi's TMU 2.0 fault detection algorithms, and cross-checked results against existing bushing monitoring systems.",
      "Developed a line voltage reconstruction algorithm from observed leakage currents, 95% accurate against the bench's RMS and phase measurements.",
    ],
    images: ["Bench rig, front view", "Phasor dashboard screenshot", "Relay board and Raspberry Pi wiring"],
  },
  {
    slug: "rc-aircraft-avionics",
    title: "Twin-motor RC aircraft avionics",
    context: "Aerospace SAE at Berkeley, 2025 to present",
    summary:
      "The full electrical system for a competition aircraft, plus the strain gauge and propeller models used to design it.",
    tags: ["ESP32", "Python", "Wheatstone bridge", "Power distribution"],
    highlights: [
      "Lead avionics architecture and system integration: propulsion, power distribution, and control surfaces.",
      "Oversee component selection and thrust testing, and work with the structures and aerodynamics subteams to resolve cross-disciplinary constraints.",
      "Prototyped a strain gauge system that uses a Wheatstone bridge with an ESP32 for real-time data processing and storage.",
      "Wrote a Python simulation of dynamic thrust and RPM across propeller diameter, pitch, and initial velocity, and validated it against physical propeller tests at 91% accuracy in predicting RPM.",
      "Finished 3rd nationally and 10th internationally at the 2025 SAE Aero Design West competition.",
    ],
    images: ["Aircraft on the flight line", "Avionics bay layout", "Strain gauge prototype"],
  },
  {
    slug: "smartwatch-lcd-driver",
    title: "LCD driver for a smartwatch",
    context: "Cadence Virtuoso, gpdk045",
    summary:
      "A two-stage Miller-compensated op-amp that drives a 272x340 LCD pixel array at 60 Hz from a 1.8 V supply.",
    tags: ["Cadence Virtuoso", "gpdk045", "Analog design"],
    highlights: [
      "Designed a telescopic cascode first stage and a class AB inverter output stage.",
      "Sized every device with the gm/ID methodology, using lookup-table-derived current densities, then iterated in Cadence.",
      "Reached 54.8° phase margin, 87.5 dB CMRR, 61.9 dB PSRR, and 2.1 mW of power.",
      "Verified performance with transient and AC testbenches.",
    ],
    images: ["Op-amp schematic", "AC response plot", "Layout or testbench screenshot"],
  },
  {
    slug: "voice-spoof-detector",
    title: "Voice spoof detector",
    context: "Python, scikit-learn, XGBoost",
    summary:
      "A classifier that flags neural voice-conversion artifacts using physics-based audio features.",
    tags: ["Python", "scikit-learn", "XGBoost", "Signal processing"],
    highlights: [
      "Engineered features from spectral and temporal analysis of the signal, aimed at the artifacts neural voice conversion leaves behind.",
      "Trained logistic regression and XGBoost ensemble classifiers on 2000 labeled clips.",
      "Reached 99.1% accuracy on training-matched data and 94.7% on unseen speakers.",
    ],
    images: ["Spectrogram comparison, real vs. converted", "Feature importance plot"],
  },
  {
    slug: "solar-charger",
    title: "Solar-powered Li-ion charger",
    context: "KiCad, ESP32",
    summary:
      "A custom PCB that charges a Li-ion battery from a solar panel and delivers a regulated 5 V, 1 A output.",
    tags: ["KiCad", "ESP32", "Buck/boost DC-DC", "PCB design"],
    highlights: [
      "Designed a custom PCB with buck and boost DC-DC converters and protection circuitry.",
      "Added voltage and current sensing with ESP32-based load control for battery monitoring.",
    ],
    images: ["Assembled board", "KiCad layout", "Schematic"],
  },
  {
    slug: "riscv-secure-enclave",
    title: "RISC-V secure enclave (SIEEECURE)",
    context: "UC Berkeley IEEE Student Branch, 2025 to 2026",
    summary:
      "A hardware-centric secure computing system built around an FPGA, with a 5-stage RISC-V CPU and AES-based encryption.",
    tags: ["SystemVerilog", "Vivado", "FPGA", "RISC-V", "AES"],
    highlights: [
      "Implemented pipeline control, hazard handling, and forwarding logic for a 5-stage RISC-V CPU with integrated AES-based encryption.",
      "Built the hardware key generation pipeline using entropy from a reverse-biased Zener diode.",
    ],
    images: ["Pipeline block diagram", "FPGA board photo"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const tableTennis = {
  headline: "TeamUSA athlete since 2016, and president of Cal Table Tennis Club.",
  facts: [
    "National team player for 10 years",
    "Peak rank #6 in US men",
    "Captain of Cal's competitive team",
  ],
  results: [
    {
      year: "2026",
      items: [
        "US Nationals U21: gold in men's singles, silver in men's doubles",
        "ITTF North American Championships: bronze in men's singles and men's doubles",
        "National Collegiate Championships: silver in teams and singles",
      ],
    },
    {
      year: "2025",
      items: ["National Collegiate Championships: gold in teams, silver in singles"],
    },
    {
      year: "2024",
      items: [
        "ITTF Pan American Youth Championships: team bronze",
        "National Collegiate Championships: silver in teams and singles",
      ],
    },
    { year: "2022", items: ["ITTF Pan American Youth Championships: team bronze"] },
  ],
};
