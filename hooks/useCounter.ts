import { useState, useEffect, useRef } from "react";

function easeOutQuad(t: number): number {
  return t * (2 - t);
}

export function useCounter(
  target: number,
  duration: number = 2000,
  trigger: boolean = true
) {
  const [value, setValue] = useState(0);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!trigger || hasRun.current) return;
    hasRun.current = true;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.round(target * easeOutQuad(progress)));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [target, duration, trigger]);

  return value;
}
