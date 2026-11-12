"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

/**
 * Horizontal scroll-snap rail with real controls: previous/next buttons, and
 * a focusable scroll region so arrow keys work without a mouse.
 * Pass the slides as <li> children.
 */
export default function Carousel({
  label,
  children,
}: {
  /** names the region for screen readers, e.g. "Youmi Travel screens" */
  label: string;
  children: React.ReactNode;
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const update = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    setAtStart(rail.scrollLeft <= 4);
    setAtEnd(rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    update();
    rail.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      rail.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const scroll = (direction: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    rail.scrollBy({
      left: direction * rail.clientWidth * 0.8,
      behavior: reduce ? "auto" : "smooth",
    });
  };

  return (
    <div>
      <div className="mb-3 flex justify-end gap-2">
        <button
          type="button"
          onClick={() => scroll(-1)}
          disabled={atStart}
          aria-label="Scroll to previous screens"
          className="icon-btn border border-border-strong bg-surface"
        >
          <ChevronLeftIcon className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          disabled={atEnd}
          aria-label="Scroll to next screens"
          className="icon-btn border border-border-strong bg-surface"
        >
          <ChevronRightIcon className="h-5 w-5" />
        </button>
      </div>
      <div
        ref={railRef}
        role="region"
        aria-label={label}
        tabIndex={0}
        className="no-scrollbar snap-x overflow-x-auto rounded-2xl"
      >
        <ul className="flex w-max items-start gap-4 p-1">{children}</ul>
      </div>
    </div>
  );
}
