"use client";

/* eslint-disable @next/next/no-img-element -- the source uses plain <img> with intrinsic sizing */

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import { invitation } from "./data";
import { Particles } from "./Particles";

/** Hero scene: emblem, Telugu blessings, the couple's names, temple tableau, and shloka. */
export function Opening() {
  const reducedMotion = useReducedMotion();
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() =>
      requestAnimationFrame(() => setPlaying(true)),
    );
    return () => cancelAnimationFrame(frame);
  }, []);

  const { blessings, copy, shloka } = invitation;

  return (
    <section
      className={`opening${playing ? " is-playing" : ""}${reducedMotion ? " is-reduced" : ""}`}
    >
      <Particles />

      <div className="opening__emblem-wrap">
        <img
          src="/sites/bindu-and-revanth/govinda-emblem.png"
          alt="Lord Venkateswara Auspicious Namam"
          className="opening__emblem-img"
          width={415}
          height={335}
          loading="eager"
          decoding="async"
        />
      </div>

      <p className="blessing opening__govinda" lang="te">
        {blessings.govindaNamam}
      </p>
      <p className="blessing opening__subhamastu" lang="te">
        {blessings.subhamastu}
      </p>
      <p className="label opening__families">{copy.blessingsLine}</p>

      <h1 className="opening__names display">
        <span className="mask">
          <span className="name name--bride">
            <span className="name__main">Ishita</span>
          </span>
        </span>
        <span className="amp" aria-hidden="true">
          &amp;
        </span>
        <span className="sr-only"> and </span>
        <span className="mask">
          <span className="name name--groom">
            <span className="name__main">Shalin</span>
          </span>
        </span>
      </h1>

      <p className="blessing opening__sitarama" lang="te">
        {blessings.sitaRama}
      </p>

      <div className="opening__tableau-wrap">
        <img
          src="/sites/bindu-and-revanth/temple-tableau.png"
          alt="Sita Rama Kalyanam Celebration"
          className="opening__tableau"
          width={2172}
          height={724}
          loading="eager"
          decoding="async"
        />
      </div>

      <div className="opening__shloka-block">
        <p className="opening__shloka-text" lang="te">
          {shloka.lines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </p>
        <p className="opening__shloka-meaning display">{shloka.meaning}</p>
        <span className="sep opening__sep" aria-hidden="true" />
      </div>
    </section>
  );
}
