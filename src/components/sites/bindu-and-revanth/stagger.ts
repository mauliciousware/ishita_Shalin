import type { CSSProperties } from "react";

/** Stagger index consumed by the `--i` custom property in invitation.css. */
export const stagger = (index: number): CSSProperties =>
  ({ "--i": index }) as CSSProperties;
