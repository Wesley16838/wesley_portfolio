"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import NewTab from "@/components/NewTab";
import { CloseIcon, MenuIcon } from "@/components/icons";

type MobileNavProps = {
  items: { href: string; label: string }[];
  resume: string;
};

/** Disclosure menu for small screens — the desktop nav is hidden below md. */
export default function MobileNav({ items, resume }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
        className="icon-btn"
      >
        {open ? (
          <CloseIcon className="h-5 w-5" />
        ) : (
          <MenuIcon className="h-5 w-5" />
        )}
      </button>

      <nav
        id="mobile-nav"
        aria-label="Primary"
        hidden={!open}
        className="absolute inset-x-0 top-full border-b border-border bg-bg px-4 pb-4 pt-2 shadow-lg"
      >
        <ul className="flex flex-col">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center rounded-xl px-3 text-base font-medium text-fg hover:bg-surface-2"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="sm:hidden">
            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center rounded-xl px-3 text-base font-medium text-fg hover:bg-surface-2"
            >
              Résumé
              <NewTab />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
