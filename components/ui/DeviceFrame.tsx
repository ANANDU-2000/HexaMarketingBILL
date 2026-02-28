"use client";

import Image from "next/image";

type DeviceKind = "desktop" | "tablet" | "mobile";

interface DeviceFrameProps {
  kind: DeviceKind;
  src: string;
  alt: string;
  label?: string;
  className?: string;
}

const baseClasses =
  "relative overflow-hidden rounded-2xl border border-border bg-surface shadow-card";

const aspectByKind: Record<DeviceKind, string> = {
  desktop: "aspect-[16/9]",
  tablet: "aspect-[4/3]",
  mobile: "aspect-[9/19.5]",
};

export function DeviceFrame({ kind, src, alt, label, className = "" }: DeviceFrameProps) {
  const aspect = aspectByKind[kind];

  return (
    <div className={`${baseClasses} ${aspect} ${className}`}>
      {label && (
        <div className="absolute top-3 left-3 z-10 px-2 py-1 rounded-full bg-surface-2/90 border border-border text-[10px] font-medium text-text-secondary">
          {label}
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        unoptimized
      />
    </div>
  );
}

