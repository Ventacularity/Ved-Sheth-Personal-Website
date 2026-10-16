import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Competition Zone — Table Tennis",
  description: "A timeline of Team USA achievements, Cal Table Tennis leadership, and coaching.",
};

type Result = { label: string; medal?: "gold" | "silver" | "bronze" | "team" };
type Year = {
  year: string;
  cal?: { role: string; details: string[] };
  usa: Result[];
  coaching?: { club: string; place: string; date: string };
};

const years: Year[] = [
  {
    year: "2021",
    usa: [
      { label: "US Open · U19 Mixed Doubles", medal: "bronze" },
      { label: "US Open · U19 Teams", medal: "silver" },
    ],
  },
  {
    year: "2022",
    usa: [
      { label: "ISF World High School Games · U19 Boys Doubles", medal: "bronze" },
      { label: "ITTF Pan American Youth Championships · Teams", medal: "bronze" },
      { label: "US Nationals · U17 Singles", medal: "bronze" },
      { label: "US Nationals · U19 Doubles", medal: "bronze" },
      { label: "US Nationals · U19 Mixed Doubles", medal: "bronze" },
      { label: "US Junior Team Trials · Final rank 2nd", medal: "silver" },
    ],
  },
  {
    year: "2023",
    cal: { role: "Competitive Team Captain / Student Athlete", details: ["Joined Cal's competitive team · Aug 2023", "Led and competed with the collegiate squad"] },
    usa: [
      { label: "US Open · U21 Singles", medal: "bronze" },
      { label: "US Open · U19 Singles", medal: "silver" },
      { label: "US Nationals · U19 Mixed Doubles", medal: "bronze" },
    ],
  },
  {
    year: "2024",
    cal: { role: "Secretary", details: ["Aug 2024 – May 2025", "2024 Collegiate Nationals · Team Silver", "2024 Collegiate Nationals · Singles Silver"] },
    usa: [
      { label: "ITTF Pan American Youth Championships · Teams", medal: "bronze" },
      { label: "US Nationals · U19 Singles", medal: "bronze" },
      { label: "US Nationals · Men's Doubles", medal: "bronze" },
      { label: "US Nationals · Mixed Doubles", medal: "bronze" },
      { label: "US Nationals · U19 Doubles", medal: "silver" },
      { label: "US Nationals · U19 Mixed Doubles", medal: "silver" },
      { label: "US Junior Team Trials · Final rank 3rd", medal: "bronze" },
    ],
  },
  {
    year: "2025",
    cal: { role: "Co-President", details: ["May 2025 – Jul 2026", "Ran practices, open play events, and club socials", "2025 Collegiate Nationals · Team Gold", "2025 Collegiate Nationals · Singles Silver"] },
    coaching: { club: "ICC Table Tennis", place: "Milpitas, CA", date: "Summer 2025" },
    usa: [
      { label: "FISU World University Games · Team Member", medal: "team" },
      { label: "ITTF Mixed World Cup · Team Member", medal: "team" },
    ],
  },
  {
    year: "2026",
    cal: { role: "President", details: ["Aug 2026 – present", "Previously Co-President · May 2025 – Jul 2026", "2026 Collegiate Nationals · Team Silver", "2026 Collegiate Nationals · Singles Silver"] },
    coaching: { club: "Carolina International Table Tennis", place: "Apex, NC", date: "Summer 2026" },
    usa: [
      { label: "ITTF North American Championships · Men's Singles", medal: "bronze" },
      { label: "ITTF North American Championships · Men's Doubles", medal: "bronze" },
      { label: "US Nationals · U21 Men's Singles", medal: "gold" },
      { label: "US Nationals · Men's Doubles", medal: "silver" },
    ],
  },
];

function ResultList({ items }: { items: Result[] }) {
  return <ul className="tt-results">{items.map((item, i) => <li key={i}><span className={`tt-medal tt-medal-${item.medal ?? "team"}`} aria-label={item.medal === "team" ? "Team member" : item.medal + " medal"}>{item.medal === "gold" ? "●" : item.medal === "silver" ? "●" : item.medal === "bronze" ? "●" : "◆"}</span><span>{item.label}</span></li>)}</ul>;
}

export default function TableTennisPage() {
  return <>
    <div className="page-head station-compact-head">
      <Link className="back" href="/">← Back to Ved's world</Link>
      <p className="section-overline">05 / COMPETITION ZONE</p>
      <h1 className="page-title">The competitive <em>edge.</em></h1>
      <p className="page-lead">Two journeys, one sport. Representing Team USA while competing, leading, and coaching at the collegiate level.</p>
    </div>
    <section className="tt-timeline-section" aria-label="Table tennis career timeline">
      <div className="tt-timeline-heading"><div><p className="section-overline">2021 — PRESENT</p><h2>Parallel paths. Shared passion.</h2></div><div className="tt-legend"><span><i className="tt-key tt-key-cal"/>Cal Table Tennis</span><span><i className="tt-key tt-key-usa"/>Team USA</span><span><i className="tt-key tt-key-coach"/>Coaching</span></div></div>
      <p className="tt-scroll-hint">Explore the timeline from left to right <span aria-hidden="true">→</span></p>
      <div className="tt-timeline-scroll" tabIndex={0} aria-label="Scroll horizontally through table tennis history">
        <div className="tt-timeline">
          <div className="tt-lane-label tt-lane-label-cal">CAL TABLE TENNIS <span>Berkeley, California</span></div>
          <div className="tt-lane-label tt-lane-label-usa">TEAM USA <span>National & international</span></div>
          <div className="tt-rail tt-rail-cal" aria-hidden="true"/>
          <div className="tt-rail tt-rail-usa" aria-hidden="true"/>
          {years.map((year, index) => <div className="tt-year" key={year.year} style={{ gridColumn: index + 1 }}>
            <div className="tt-year-cal">
              {year.cal ? <article className="tt-event tt-event-cal"><p className="tt-event-kicker">CAL TABLE TENNIS CLUB</p><h3>{year.cal.role}</h3><ul>{year.cal.details.map((d, i) => <li key={i}>{d}</li>)}</ul></article> : <div className="tt-empty" aria-hidden="true"/>}
            </div>
            <div className="tt-junction tt-junction-cal"><span className="tt-node tt-node-cal"/><span className="tt-year-number">{year.year}</span></div>
            <div className="tt-year-coaching">
              {year.coaching && <article className="tt-coaching"><span className="tt-coach-tag">COACHING</span><h3>{year.coaching.club}</h3><p>{year.coaching.place}</p><p>{year.coaching.date}</p></article>}
            </div>
            <div className="tt-junction tt-junction-usa"><span className="tt-node tt-node-usa"/></div>
            <div className="tt-year-usa"><article className="tt-event tt-event-usa"><p className="tt-event-kicker">NATIONAL + INTERNATIONAL</p><ResultList items={year.usa}/></article></div>
          </div>)}
        </div>
      </div>
      <p className="tt-timeline-foot">Medal key: <span className="tt-medal tt-medal-gold">●</span> Gold <span className="tt-medal tt-medal-silver">●</span> Silver <span className="tt-medal tt-medal-bronze">●</span> Bronze <span className="tt-medal tt-medal-team">◆</span> Team member / selection</p>
    </section>
  </>;
}
