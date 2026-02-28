import { useInView } from "framer-motion";
import { useRef } from "react";

export function useScrollReveal(options?: { once?: boolean; amount?: "some" | "all" | number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: options?.once ?? true,
    amount: options?.amount ?? 0.1,
  });
  return { ref, inView };
}
