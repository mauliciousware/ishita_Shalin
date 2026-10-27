"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Reveals a section once when it enters the viewport.
 * Mirrors the source site: threshold + bottom root margin, disconnected after the first hit.
 */
export function useReveal<T extends HTMLElement>(
  threshold = 0.3,
  rootMargin = "0px 0px -8% 0px",
) {
  const ref = useRef<T>(null);
  const [isIn, setIsIn] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      const frame = requestAnimationFrame(() => setIsIn(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIn(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isIn] as const;
}
