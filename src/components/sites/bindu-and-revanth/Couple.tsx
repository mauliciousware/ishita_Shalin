"use client";

import { useReveal } from "@/hooks/use-reveal";
import { invitation } from "./data";

/** Short invitation paragraph between the hero and the families. */
export function Couple() {
  const [ref, isIn] = useReveal<HTMLElement>(0.3);
  const { copy } = invitation;

  return (
    <section
      ref={ref}
      className={`couple${isIn ? " is-in" : ""}`}
      aria-label="Elders Invitation"
    >
      <div className="couple__invitation-wrap reveal">
        {copy.potInvitation && (
          <p className="couple__destiny-text display">{copy.potInvitation}</p>
        )}
        <p className="couple__elders-invite display">{copy.familiesInvite}</p>
      </div>
    </section>
  );
}
