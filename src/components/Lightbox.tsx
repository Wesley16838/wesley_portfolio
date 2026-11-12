"use client";

import Image from "next/image";
import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
  ExpandIcon,
} from "@/components/icons";

export type LightboxImage = {
  src: string;
  alt: string;
  caption?: string;
  /** CSS background for transparent mockups, so dark hardware stays visible */
  panel?: string;
};

const LightboxContext = createContext<(index: number) => void>(() => {});

const controlClass =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/12 text-white transition-colors hover:bg-white/25";

/**
 * Wraps a set of images and renders one shared viewer for them. Built on the
 * native <dialog>: the browser traps focus, closes on Esc, and returns focus
 * to the thumbnail that opened it.
 */
export function LightboxProvider({
  images,
  children,
}: {
  images: LightboxImage[];
  children: React.ReactNode;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const show = useCallback((next: number) => {
    setIndex(next);
    setOpen(true);
    dialogRef.current?.showModal();
  }, []);

  // The viewer body mounts after showModal(), so the dialog has nothing to
  // focus yet. A stable ref callback runs once per open - not on every
  // re-render, which would yank focus off the prev/next buttons.
  const focusOnMount = useCallback(
    (el: HTMLButtonElement | null) => el?.focus(),
    [],
  );

  const step = (delta: number) =>
    setIndex((current) => (current + delta + images.length) % images.length);

  const current = images[index];
  const many = images.length > 1;

  return (
    <LightboxContext.Provider value={show}>
      {children}
      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-label="Image viewer"
        onClose={() => setOpen(false)}
        onClick={(event) => {
          // a click on the dialog itself is a click on the scrim
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
        onKeyDown={(event) => {
          if (!many) return;
          if (event.key === "ArrowLeft") step(-1);
          if (event.key === "ArrowRight") step(1);
        }}
      >
        {open && current && (
          <div className="flex h-full w-full flex-col gap-3 p-3 md:gap-4 md:p-6">
            <div className="flex items-center justify-between gap-4">
              <p className="font-mono text-sm text-white/80" aria-live="polite">
                {index + 1} / {images.length}
              </p>
              <button
                ref={focusOnMount}
                type="button"
                onClick={() => dialogRef.current?.close()}
                aria-label="Close image viewer"
                className={controlClass}
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <div className="flex min-h-0 flex-1 items-center gap-2 md:gap-4">
              {many && (
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous image"
                  className={controlClass}
                >
                  <ChevronLeftIcon className="h-5 w-5" />
                </button>
              )}
              <div
                className="relative h-full min-w-0 flex-1 overflow-hidden rounded-2xl"
                style={{ background: current.panel }}
              >
                <Image
                  key={current.src}
                  src={current.src}
                  alt={current.alt}
                  fill
                  sizes="100vw"
                  className={`object-contain ${current.panel ? "p-[4%]" : ""}`}
                />
              </div>
              {many && (
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next image"
                  className={controlClass}
                >
                  <ChevronRightIcon className="h-5 w-5" />
                </button>
              )}
            </div>

            <p
              className="min-h-6 text-center text-sm text-white/85"
              aria-live="polite"
            >
              {current.caption ?? ""}
            </p>
          </div>
        )}
      </dialog>
    </LightboxContext.Provider>
  );
}

/** Thumbnail wrapper that opens the surrounding lightbox at `index`. */
export function ZoomButton({
  index,
  label,
  children,
  className,
}: {
  index: number;
  /** what the image shows - read out as "View larger: …" */
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  const show = useContext(LightboxContext);
  return (
    <button
      type="button"
      onClick={() => show(index)}
      aria-label={`View larger: ${label}`}
      className={`group/zoom relative block w-full cursor-zoom-in rounded-2xl text-left ${className ?? ""}`}
    >
      {children}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white opacity-0 transition-opacity duration-200 group-hover/zoom:opacity-100 group-focus-visible/zoom:opacity-100"
      >
        <ExpandIcon className="h-4 w-4" />
      </span>
    </button>
  );
}
