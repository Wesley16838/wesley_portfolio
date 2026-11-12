import Image from "next/image";
import Link from "next/link";
import MobileNav from "@/components/MobileNav";
import NewTab from "@/components/NewTab";
import ThemeToggle from "@/components/ThemeToggle";
import { avatar, site } from "@/content/site";

const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="enter-down sticky top-0 z-40 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 md:px-6">
        <Link
          href="/"
          className="flex min-h-11 items-center gap-3 rounded-full pr-3 font-semibold tracking-tight text-fg"
        >
          <span className="avatar-disc block h-9 w-9 shrink-0 shadow-[0_0_0_2px_var(--color-sun)]">
            <Image
              src={avatar.poster}
              alt=""
              width={72}
              height={72}
              className="h-full w-full object-cover"
            />
          </span>
          {site.shortName}
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-11 items-center rounded-full px-4 text-sm font-medium text-fg-secondary transition-colors hover:bg-surface-2 hover:text-fg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <ThemeToggle />
          <a
            href={site.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary hidden sm:inline-flex"
          >
            Résumé
            <NewTab />
          </a>
          <MobileNav items={nav} resume={site.links.resume} />
        </div>
      </div>
    </header>
  );
}
