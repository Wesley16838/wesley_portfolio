import { site } from "@/content/site";
import SystemsConsole from "@/components/SystemsConsole";

const links = [
  { href: site.links.github, label: "GitHub", external: true },
  { href: site.links.linkedin, label: "LinkedIn", external: true },
  { href: `mailto:${site.links.email}`, label: "Email", external: false },
  { href: site.links.resume, label: "Resume", external: true },
];

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-20 pt-36 md:pb-28 md:pt-48">
      <p className="animate-fade-up font-mono text-[11px] uppercase tracking-[0.25em] text-fg-secondary">
        {site.name} — Staff Software Engineer · Founding Engineer · Austin, TX
      </p>
      <h1 className="animate-fade-up mt-8 max-w-5xl font-display text-5xl leading-[1.02] tracking-tight text-fg [animation-delay:120ms] md:text-8xl">
        Engineering AI-native systems <em>with a designer&rsquo;s eye.</em>
      </h1>
      <div className="mt-14 grid items-start gap-12 md:mt-20 md:grid-cols-[1.15fr_1fr] md:gap-16">
        <div className="animate-fade-up [animation-delay:240ms]">
          <p className="max-w-xl text-lg leading-relaxed text-fg-secondary">
            {site.heroBody}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            {links.map(({ href, label, external }) => (
              <a
                key={label}
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="border-b border-border pb-1 font-mono text-xs uppercase tracking-[0.2em] text-fg transition-colors duration-200 hover:border-accent"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="animate-fade-up [animation-delay:360ms]">
          <SystemsConsole />
        </div>
      </div>
    </section>
  );
}
