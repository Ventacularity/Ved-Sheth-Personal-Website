import Link from "next/link";
import { site, experience, education, skills } from "@/lib/content";
const stops=[
 {id:"project-lab",name:"Project Lab",sub:"Engineering projects",href:"/projects/",x:65,y:29,icon:"⌘",number:"01"},
 {id:"flight-deck",name:"Flight Deck",sub:"Cal Aero + Space Enterprise",href:"/projects/rc-aircraft-avionics/",x:38,y:21,icon:"✈",number:"02"},
 {id:"mission-log",name:"Mission Log",sub:"Experience · Hitachi + IEEE",href:"#experience",x:14,y:41,icon:"◈",number:"03"},
 {id:"workbench",name:"Workbench",sub:"Technical toolkit + classes",href:"#toolkit",x:21,y:80,icon:"⌁",number:"04"},
 {id:"competition-zone",name:"Competition Zone",sub:"Table tennis · Team USA",href:"/table-tennis/",x:70,y:79,icon:"◉",number:"05"},
 {id:"about-me",name:"About Me",sub:"The person behind the projects",href:"#about",x:86,y:53,icon:"✧",number:"06"},
 {id:"comms-station",name:"Comms Station",sub:"Get in touch",href:"#contact",x:86,y:87,icon:"↗",number:"07"},
 {id:"horizon",name:"Into the Horizon",sub:"What I'm building next",href:"/horizon/",x:53,y:54,icon:"✦",number:"08"}
];
export default function Home(){return <>
 <section className="story-world" aria-label="Interactive illustrated portfolio map">
  <div className="story-canvas">
   <div className="story-world-art" aria-hidden="true"/>
   <div className="story-atmosphere" aria-hidden="true"/>
   <div className="story-title"><span className="story-eyebrow">VED SHETH / A WORLD BUILT FROM CURIOSITY</span><h1>VENTACULARITY<span>.</span></h1><p>Every circuit, flight, and match is part of the story.</p><div className="story-guide"><span className="story-guide-dot"/> SELECT A STATION TO EXPLORE</div></div>
   <div className="story-pins">{stops.map(s=><Link key={s.id} href={s.href} className={`story-pin story-pin-${s.id}`} style={{left:`${s.x}%`,top:`${s.y}%`}} aria-label={`${s.name}: ${s.sub}`}><span className="story-pin-icon" aria-hidden="true">{s.icon}</span><span className="story-pin-copy"><small>{s.number} / STATION</small><strong>{s.name}</strong><em>{s.sub}</em></span><span className="story-pin-arrow" aria-hidden="true">↗</span></Link>)}</div>
   <div className="story-footer"><span>EST. BERKELEY, CALIFORNIA</span><span>EXPLORE / DISCOVER / BUILD</span></div>
  </div>
 </section>
 <section className="story-chapter" id="about"><div className="story-chapter-index">06 / ABOUT ME</div><div className="story-chapter-body"><h2>Built through <em>curiosity.</em></h2><p className="story-chapter-lead">I'm an electrical engineering and computer science student at UC Berkeley, an avionics lead, and a Team USA table tennis athlete.</p><p>{site.intro} I'm drawn to projects that connect the physical and digital worlds, and I love building with teams who share that curiosity.</p></div></section>
 <section className="story-chapter" id="experience"><div className="story-chapter-index">03 / MISSION LOG</div><div className="story-chapter-body"><h2>Experience <em>in motion.</em></h2><div className="story-experience">{experience.filter(e=>["Hitachi Energy","UC Berkeley IEEE Student Branch","Aerospace SAE at Berkeley","Space Enterprise at Berkeley"].includes(e.org)).map(e=><article key={e.org}><span>{e.roles[0].period}</span><h3>{e.org}</h3><strong>{e.roles[0].title}</strong><p>{e.bullets[0]}</p></article>)}</div></div></section>
 <section className="story-chapter" id="toolkit"><div className="story-chapter-index">04 / WORKBENCH</div><div className="story-chapter-body"><h2>Technical <em>toolkit.</em></h2><p className="story-chapter-lead">{education.school} · {education.degree} · Expected May 2027</p><div className="story-skill-grid">{skills.map(s=><div key={s.group}><h3>{s.group}</h3><p>{s.items}</p></div>)}</div><p className="story-coursework"><strong>Coursework:</strong> {education.completed.join(" · ")} · {education.inProgress.join(" · ")}</p></div></section>
 <section className="story-chapter story-contact" id="contact"><div className="story-chapter-index">07 / COMMS STATION</div><div className="story-chapter-body"><h2>Let's build <em>something.</em></h2><p>{site.availability}</p><a className="story-contact-email" href={`mailto:${site.email}`}>{site.email} ↗</a><div className="story-social"><a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a></div></div></section>
 </>}
