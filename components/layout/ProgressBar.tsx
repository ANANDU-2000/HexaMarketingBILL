"use client";

import { useEffect, useState } from "react";

/**
 * Scroll progress bar at top of viewport. Shows reading progress.
 * Optional: include in root layout for long pages.
 */
export function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setProgress(height > 0 ? (winScroll / height) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-0.5 bg-primary/20"
      aria-hidden
    >
      <div
        className="h-full bg-primary transition-transform duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
