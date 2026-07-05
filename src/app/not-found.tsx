import Link from "next/link";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="zone-dark zone-grain">
      <main className="mx-auto flex max-w-6xl flex-col items-start px-6 pb-24 pt-40 md:pt-48">
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-fg-muted">
          404 — Not found
        </p>
        <h1 className="mt-6 font-display text-4xl tracking-tight text-fg md:text-6xl">
          This page isn&rsquo;t <em>running.</em>
        </h1>
        <p className="mt-6 max-w-md leading-relaxed text-fg-secondary">
          The page you&rsquo;re looking for doesn&rsquo;t exist or was moved.
        </p>
        <Link
          href="/"
          className="mt-10 border-b border-border pb-1 font-mono text-xs uppercase tracking-[0.2em] text-fg transition-colors duration-200 hover:border-accent"
        >
          Back to home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
