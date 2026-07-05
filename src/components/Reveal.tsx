"use client";

import { useEffect, useRef, useState } from "react";

type RevealProps = {
  children: React.ReactNode;
  /** stagger delay in ms */
  delay?: number;
  className?: string;
};

export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // prefers-reduced-motion is handled in CSS: transitions collapse to ~0ms,
    // so the observer path reveals content instantly for those users.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform,filter] duration-700 [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] ${
        visible
          ? "translate-y-0 opacity-100 blur-0"
          : "translate-y-6 opacity-0 blur-[8px]"
      } ${className ?? ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
