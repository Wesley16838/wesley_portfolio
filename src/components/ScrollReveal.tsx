"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** how many steps a batch may stagger before later items stop waiting longer */
const MAX_STAGGER_STEPS = 6;
const FALLBACK_STAGGER_MS = 70;
const FALLBACK_REVEAL_MS = 550;

const readMs = (name: string, fallback: number) => {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(name)
    .trim();
  const ms = value.endsWith("ms")
    ? parseFloat(value)
    : value.endsWith("s")
      ? parseFloat(value) * 1000
      : NaN;
  return Number.isFinite(ms) ? ms : fallback;
};

/**
 * One observer for every `[data-reveal]` element on the page.
 *
 * Progressive by construction: elements start visible in the HTML. On mount
 * this hides only the ones still below the fold, then fades each in once as
 * it scrolls into view. So nothing on screen is ever hidden, and visitors
 * without JavaScript - or with reduced motion - simply see the page.
 *
 * Renders nothing; mount it once in the root layout.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const stagger = readMs("--stagger", FALLBACK_STAGGER_MS);
    const duration = readMs("--motion-reveal", FALLBACK_REVEAL_MS);
    const pending = new Set<HTMLElement>();
    const timers = new Set<number>();

    const reveal = (el: HTMLElement, step: number, instant: boolean) => {
      if (!pending.delete(el)) return;
      observer.unobserve(el);
      if (instant) {
        el.removeAttribute("data-reveal-state");
        return;
      }
      const delay = Math.min(step, MAX_STAGGER_STEPS) * stagger;
      el.style.setProperty("--reveal-delay", `${delay}ms`);
      el.setAttribute("data-reveal-state", "in");
      // hand the element back to its own styles (hover transitions etc.)
      const timer = window.setTimeout(() => {
        timers.delete(timer);
        el.removeAttribute("data-reveal-state");
        el.style.removeProperty("--reveal-delay");
      }, delay + duration + 50);
      timers.add(timer);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          // reading order, so a row of cards staggers left to right
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top ||
              a.boundingClientRect.left - b.boundingClientRect.left,
          )
          .forEach((entry, step) =>
            reveal(entry.target as HTMLElement, step, false),
          );
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    for (const el of document.querySelectorAll<HTMLElement>("[data-reveal]")) {
      // Any part already on screen (or above it): leave it exactly as it is.
      // Only elements entirely below the fold may be hidden.
      if (el.getBoundingClientRect().top < window.innerHeight) continue;
      el.setAttribute("data-reveal-state", "pending");
      pending.add(el);
      observer.observe(el);
    }

    // Safety net: a fast flick or an anchor jump can carry an element past
    // the viewport between observer checks. Once scrolling settles, reveal
    // anything that is no longer below the fold.
    let settle = 0;
    const sweep = () => {
      let step = 0;
      for (const el of [...pending]) {
        const rect = el.getBoundingClientRect();
        if (rect.top >= window.innerHeight) continue;
        const scrolledPast = rect.bottom < 0;
        reveal(el, scrolledPast ? 0 : step++, scrolledPast);
      }
    };
    const onScroll = () => {
      window.clearTimeout(settle);
      settle = window.setTimeout(sweep, 120);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(settle);
      observer.disconnect();
      for (const timer of timers) window.clearTimeout(timer);
      // never leave anything hidden behind
      for (const el of document.querySelectorAll<HTMLElement>(
        "[data-reveal-state]",
      )) {
        el.removeAttribute("data-reveal-state");
        el.style.removeProperty("--reveal-delay");
      }
    };
  }, [pathname]);

  return null;
}
