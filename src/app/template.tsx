"use client";

import { useLayoutEffect, useRef } from "react";

// module state survives client-side navigations, so this is true exactly once
let isFirstPage = true;

/**
 * A template remounts on every navigation (a layout does not), so this wrapper
 * can replay a short fade-and-rise each time a page is entered.
 *
 * The very first page is left alone: fading the whole document in from
 * transparent hides the largest contentful paint from the browser and cost
 * about three seconds of measured LCP. The hero has its own entrance instead.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  // layout effect: the class must land before the new page's first paint
  useLayoutEffect(() => {
    if (isFirstPage) {
      isFirstPage = false;
      return;
    }
    ref.current?.classList.add("page-enter");
  }, []);

  return <div ref={ref}>{children}</div>;
}
