type SectionProps = {
  /** anchor target; also labels the region for assistive tech */
  id: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
};

export default function Section({ id, eyebrow, title, children }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section id={id} aria-labelledby={headingId} className="mt-20 md:mt-28">
      <header className="mb-8 md:mb-10">
        {eyebrow && (
          <p className="label" data-reveal>
            {eyebrow}
          </p>
        )}
        <h2
          id={headingId}
          data-reveal
          className="mt-2 text-3xl font-semibold tracking-tight text-fg md:text-4xl"
        >
          {title}
        </h2>
      </header>
      {children}
    </section>
  );
}
