import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="wrap">
      <div className="site-footer">
        <p>{site.name}, UC Berkeley EECS</p>
        <div className="footer-links">
          <a href={`mailto:${site.email}`}>Email</a>
          <a href={site.linkedin}>LinkedIn</a>
          <a href={site.github}>GitHub</a>
        </div>
      </div>
    </footer>
  );
}
