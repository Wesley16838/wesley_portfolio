"use client";

import { useEffect, useState } from "react";

type SectionNavProps = {
  items: { id: string; label: string }[];
};

/**
 * "On this page" for case studies: a sticky sidebar on desktop, wrapping
 * chips on small screens. Highlights the section currently in view.
 */
export default function SectionNav({ items }: SectionNavProps) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActive(visible.target.id);
      },
      // a thin band near the top of the viewport decides the active section
      { rootMargin: "-20% 0px -70% 0px" },
    );
    for (const { id } of items) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="On this page" className="lg:sticky lg:top-24 lg:self-start">
      <p className="label">On this page</p>
      <ul className="mt-3 flex flex-wrap gap-2 lg:flex-col lg:gap-0">
        {items.map(({ id, label }) => {
          const current = active === id;
          return (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={current ? "location" : undefined}
                className={`flex min-h-11 items-center rounded-full bg-surface-2 px-4 text-sm transition-colors lg:min-h-9 lg:rounded-none lg:border-l-2 lg:bg-transparent lg:px-3 ${
                  current
                    ? "font-semibold text-fg lg:border-accent"
                    : "text-fg-secondary hover:text-fg lg:border-border"
                }`}
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
