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
    roles: [{ title: "Digital Hardware R&D Intern", period: "May – Aug 2026" }],
    bullets: [
      "Developed a three-phase, relay-switched RC bench rig for transformer-bushing insulation monitoring, with programmable dielectric-loss conditions.",
      "Built Raspberry Pi and oscilloscope acquisition, I2C relay control, automated resistor sweeps, and a remote Flask dashboard for synchronized phasor diagnostics.",
      "Investigated sum-of-currents fault localization, capacitance and power-factor estimation, and leakage-current-based line-voltage reconstruction.",
    ],
  },
  {
    org: "UC Berkeley IEEE Student Branch",
    place: "Berkeley, California",
    roles: [{ title: "Hardware Engineer · SIEEECURE", period: "Oct 2025 – May 2026" }],
    bullets: [
      "Worked on AES-based instruction encryption and a hardware key-generation pipeline using reverse-biased Zener-diode noise as an entropy source.",
      "Contributed to pipeline control, hazard handling, and forwarding logic for a five-stage FPGA-based RISC-V CPU.",
    ],
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
    slug: "smartwatch-lcd-driver",
    title: "LCD driver for a smartwatch",
    context: "Cadence Virtuoso, gpdk045",
    summary:
      "Designed an analog circuit to control the pixels of a smartwatch’s liquid crystal display (LCD), the screen technology used to show images and text. The circuit uses a two-stage amplifier to drive a 272 × 340 pixel display at 60 Hz.",
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
      "Voice spoofing is when a fake or AI-altered recording imitates someone’s voice, potentially making it sound like they said something they never said. I built a machine-learning detector that analyzes audio signals to distinguish real speech from artificially converted voices.",
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
  }
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
