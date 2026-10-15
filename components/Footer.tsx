import { site } from "@/lib/content";
export default function Footer(){
 return <footer className="wrap station-footer-wrap"><div className="site-footer station-footer"><p>© 2027 Ved Sheth · UC Berkeley EECS</p><div className="footer-links"><a href={`mailto:${site.email}`}>Email ↗</a><a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={site.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a></div></div></footer>;
}
