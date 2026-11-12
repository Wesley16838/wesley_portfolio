"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useRef } from "react";

/**
 * next/image that fades in once it has loaded.
 *
 * The image is never hidden up front. Only after hydration, and only if it is
 * still loading at that point (i.e. a lazy image further down the page), does
 * it wait at opacity 0 for its load event. Cached, eager, and no-JS images
 * are simply shown.
 */
export default function FadeImage({ alt, priority, ...props }: ImageProps) {
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const img = ref.current;
    // above-the-fold images should paint as early as possible, without a fade
    if (!img || priority || img.complete) return;

    const show = () => img.setAttribute("data-fade", "in");
    img.setAttribute("data-fade", "wait");
    img.addEventListener("load", show, { once: true });
    // on error, reveal it so the alt text is readable
    img.addEventListener("error", show, { once: true });
    return () => {
      img.removeEventListener("load", show);
      img.removeEventListener("error", show);
    };
  }, [priority]);

  return <Image ref={ref} alt={alt} priority={priority} {...props} />;
}
