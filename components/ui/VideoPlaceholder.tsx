"use client";

import { useRef, useState } from "react";
import Image from "next/image";

interface VideoPlaceholderProps {
  /** Optional video src (mp4, webm). If not provided, shows poster only. */
  src?: string;
  /** Poster image URL or placeholder gradient */
  poster?: string;
  /** Accessible label */
  title?: string;
  /** Optional class for the wrapper */
  className?: string;
  /** Aspect ratio: "video" (16/9), "square" (1/1) */
  aspectRatio?: "video" | "square";
}

export function VideoPlaceholder({
  src,
  poster,
  title = "Video",
  className = "",
  aspectRatio = "video",
}: VideoPlaceholderProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const aspectClass =
    aspectRatio === "video" ? "aspect-video" : "aspect-square";

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl border border-border bg-surface-2 ${aspectClass} ${className}`}
      style={{ animation: "fadeIn 0.5s ease-out" }}
    >
      {src ? (
        <>
          {!playing && (
            <div
              className="absolute inset-0 z-10 flex items-center justify-center bg-surface-2 cursor-pointer"
              onClick={() => {
                videoRef.current?.play();
                setPlaying(true);
              }}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  videoRef.current?.play();
                  setPlaying(true);
                }
              }}
              aria-label={`Play ${title}`}
            >
              {poster ? (
                <div className="absolute inset-0">
                  <Image
                    src={poster}
                    alt=""
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              ) : null}
              <div className="relative z-10 w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center text-white shadow-card">
                <svg
                  className="w-8 h-8 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          )}
          <video
            ref={videoRef}
            src={src}
            className="absolute inset-0 w-full h-full object-cover"
            controls={playing}
            playsInline
            onEnded={() => setPlaying(false)}
            title={title}
          />
        </>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-surface-2">
          {poster ? (
            <div className="absolute inset-0">
              <Image
                src={poster}
                alt=""
                fill
                className="object-cover opacity-60"
                unoptimized
              />
            </div>
          ) : (
            <div
              className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center"
              aria-hidden
            >
              <svg
                className="w-10 h-10 text-primary"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
