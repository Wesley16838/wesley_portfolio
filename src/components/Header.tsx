"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import { site } from "@/content/site";

const anchors = [
  { href: "/#work", label: "Work" },
  { href: "/#notes", label: "Notes" },
  { href: "/#experience", label: "Experience" },
  { href: "/#about", label: "About" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // probe just below the header to find which zone sits under the bar
    const probeY = 32;

    const update = () => {
      setScrolled(window.scrollY > 8);

      const zones = document.querySelectorAll<HTMLElement>(
        ".zone-light, .zone-dark"
      );
      for (const zone of zones) {
        const rect = zone.getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom > probeY) {
          setTheme(zone.classList.contains("zone-dark") ? "dark" : "light");
          break;
        }
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header
      className="site-header fixed inset-x-0 top-0 z-50"
      data-scrolled={scrolled}
      data-theme={theme}
    >
      <div className="header-inner mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" aria-label="Wesley Wong - home">
          <Logo className="h-8 w-8" />
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
