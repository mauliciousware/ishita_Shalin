"use client";

import { useReveal } from "@/hooks/use-reveal";
import { invitation } from "./data";
import { stagger } from "./stagger";
import { Confetti } from "./Confetti";
import { Ornament } from "./Ornament";

/** Final blessing: drawn temple arch, closing line, and a one-off confetti burst. */
export function Closing() {
  const [ref, isIn] = useReveal<HTMLElement>(0.35);
  const { copy, blessings } = invitation;

  return (
    <section
      ref={ref}
      className={`closing${isIn ? " is-in" : ""}`}
      aria-label="Closing blessing"
    >
      <Confetti trigger={isIn} />

      <div className="reveal parallax-slow" style={stagger(0)}>
        <Ornament drawn={isIn} />
      </div>

      <p className="closing__line display reveal" style={stagger(1)}>
        {copy.closingLine[0]}
        <br />
        {copy.closingLine[1]}
      </p>

      <p className="blessing closing__blessing">{blessings.closing}</p>
    </section>
  );
}
