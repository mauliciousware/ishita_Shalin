"use client";

/* eslint-disable @next/next/no-img-element -- the source uses plain <img> with intrinsic sizing */

import { useCallback, useState } from "react";
import { invitation } from "./data";

interface EnvelopeProps {
  onOpen: () => void;
}

/** Full-screen ivory envelope that splits open before the invitation is shown. */
export function Envelope({ onOpen }: EnvelopeProps) {
  const [opening, setOpening] = useState(false);

  const handleOpen = useCallback(() => {
    setOpening(true);
    window.setTimeout(onOpen, 1400);
  }, [onOpen]);

  return (
    <div
      className={`envelope${opening ? " envelope--opening" : ""}`}
      onClick={handleOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") handleOpen();
      }}
      aria-label="Open the wedding invitation"
    >
      <span
        className="envelope__corner envelope__corner--tl"
        aria-hidden="true"
      />
      <span
        className="envelope__corner envelope__corner--tr"
        aria-hidden="true"
      />
      <span
        className="envelope__corner envelope__corner--bl"
        aria-hidden="true"
      />
      <span
        className="envelope__corner envelope__corner--br"
        aria-hidden="true"
      />

      <div className="envelope__content">
        <div className="envelope__emblem" aria-hidden="true">
          <img
            src="/sites/bindu-and-revanth/govinda-emblem.png"
            alt="Lord Venkateswara Auspicious Namam"
            className="envelope__emblem-img"
            width={415}
            height={335}
            loading="eager"
            decoding="async"
          />
        </div>

        <p className="label envelope__title">
          {invitation.blessings.envelopeTitle}
        </p>

        <div className="envelope__crest-wrapper">
          <img
            src="/sites/bindu-and-revanth/br-crest.png"
            alt="Ishita & Shalin Laurel Crest"
            className="envelope__crest"
            width={1390}
            height={1132}
            loading="eager"
            decoding="async"
          />
        </div>

        <div className="envelope__cta">
          <span className="envelope__cta-line" aria-hidden="true" />
          <p className="label">Tap to open</p>
          <span className="envelope__cta-line" aria-hidden="true" />
        </div>
      </div>

      <div className="envelope__flap envelope__flap--left" aria-hidden="true" />
      <div
        className="envelope__flap envelope__flap--right"
        aria-hidden="true"
      />
    </div>
  );
}
