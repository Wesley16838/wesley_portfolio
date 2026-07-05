type SectionProps = {
  id?: string;
  eyebrow?: string;
  heading?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  id,
  eyebrow,
  heading,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-20 md:py-28 ${className ?? ""}`}
    >
      <div className="mx-auto max-w-6xl px-6">
        {eyebrow && (
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-fg-muted">
            {eyebrow}
          </p>
        )}
        {heading && (
          <h2 className="mt-4 font-display text-4xl tracking-tight text-fg md:text-5xl">
            {heading}
          </h2>
        )}
        <div className={eyebrow || heading ? "mt-12" : ""}>{children}</div>
      </div>
    </section>
  );
}
