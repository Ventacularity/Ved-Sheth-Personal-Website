"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/content";

const links = [
  { href: "/projects/", label: "Projects" },
  { href: "/table-tennis/", label: "Table tennis" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname() ?? "/";

  return (
    <header className="wrap site-header">
      <Link href="/" className="brand">
        {site.name}
      </Link>
      <nav className="nav" aria-label="Main">
        {links.map((l) => {
          const section = l.href.replace(/\/$/, "");
          const current = !l.href.includes("#") && pathname.startsWith(section);
          return (
            <Link key={l.href} href={l.href} aria-current={current ? "page" : undefined}>
              {l.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
