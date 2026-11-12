"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PauseIcon, PlayIcon } from "@/components/icons";
import { avatar } from "@/content/site";

/**
 * Hero avatar. Shows the still PNG until `avatar.video` is set in site.ts;
 * then it plays a silent loop with a pause control (WCAG 2.2.2) and stays
 * paused for visitors who prefer reduced motion.
 */
export default function Avatar({ className }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  // true once the visitor pauses it themselves - never auto-resume after that
  const userPaused = useRef(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // play only while on screen: no decoding work for a video nobody can see
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // autoplay can be refused (e.g. low-power mode); the poster stays up
        if (!userPaused.current) video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  const toggle = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      userPaused.current = false;
      video.play().catch(() => {});
    } else {
      userPaused.current = true;
      video.pause();
    }
  };

  return (
    <div className={`relative ${className ?? ""}`}>
      <div
        role="img"
        aria-label={avatar.alt}
        className="avatar-disc h-full w-full"
      >
        {avatar.video ? (
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            preload="metadata"
            poster={avatar.poster}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            className="h-full w-full object-cover"
          >
            <source src={avatar.video} type="video/mp4" />
          </video>
        ) : (
          <Image
            src={avatar.poster}
            alt=""
            width={512}
            height={512}
            priority
            sizes="160px"
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {avatar.video && (
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pause avatar animation" : "Play avatar animation"}
          className="absolute -bottom-1 -right-1 flex h-9 w-9 items-center justify-center rounded-full border border-border-strong bg-surface text-fg shadow-sm"
        >
          {playing ? (
            <PauseIcon className="h-4 w-4" />
          ) : (
            <PlayIcon className="h-4 w-4" />
          )}
        </button>
      )}
    </div>
  );
}
