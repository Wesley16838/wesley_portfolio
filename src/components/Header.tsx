import Link from "next/link";
import { site } from "@/content/site";

const anchors = [
  { href: "/#work", label: "Work" },
  { href: "/#notes", label: "Notes" },
  { href: "/#experience", label: "Experience" },
  { href: "/#about", label: "About" },
];

export default function Header() {
  return (
    <header className="header-blend fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-sm tracking-tight transition-opacity hover:opacity-60"
        >
          wesley.systems
        </Link>
        <nav className="flex items-center gap-7">
          <div className="hidden items-center gap-7 md:flex">
            {anchors.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="font-mono text-[11px] uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
              >
                {a.label}
              </Link>
            ))}
          </div>
          <a
            href={site.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-current px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
