"use client";

import { useEffect, useState } from "react";
import { useReveal } from "@/hooks/use-reveal";

interface Remaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TARGET = new Date("October 30, 2026 09:31:00 GMT+0530").getTime();

function getRemaining(): Remaining {
  const distance = Math.max(0, TARGET - Date.now());
  return {
    days: Math.floor(distance / 864e5),
    hours: Math.floor((distance / 36e5) % 24),
    minutes: Math.floor((distance / 6e4) % 60),
    seconds: Math.floor((distance / 1e3) % 60),
  };
}

const pad = (value: number) => value.toString().padStart(2, "0");

function CountdownUnit({ value, label }: { value: string; label: string }) {
  const [previous, setPrevious] = useState(value);

  // The flip lasts one 300ms cycle: the card shows the new digit on top and the
  // previous digit underneath until the animation settles.
  useEffect(() => {
    if (value === previous) return;

    const timer = window.setTimeout(() => setPrevious(value), 300);
    return () => window.clearTimeout(timer);
  }, [value, previous]);

  const flipping = value !== previous;

  return (
    <div className="countdown__unit">
      <div className={`countdown__digit${flipping ? " is-flipping" : ""}`}>
        <span className="countdown__top" suppressHydrationWarning>
          {value}
        </span>
        <span className="countdown__bottom" suppressHydrationWarning>
          {flipping ? previous : value}
        </span>
        {flipping && (
          <span className="countdown__flip" aria-hidden="true">
            <span className="countdown__flip-front">{previous}</span>
            <span className="countdown__flip-back">{value}</span>
          </span>
        )}
      </div>
      <p className="countdown__label label">{label}</p>
    </div>
  );
}

/** Live flip-clock counting down to the muhurtham. */
export function Countdown() {
  const [ref, isIn] = useReveal<HTMLElement>(0.3);
  const [remaining, setRemaining] = useState<Remaining>(getRemaining);

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(getRemaining()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const isOver =
    remaining.days === 0 &&
    remaining.hours === 0 &&
    remaining.minutes === 0 &&
    remaining.seconds === 0;

  if (isOver) return null;

  return (
    <section
      ref={ref}
      className={`countdown${isIn ? " is-in" : ""}`}
      aria-label="Countdown to the wedding"
    >
      <div className="countdown__inner reveal">
        <p className="label countdown__title">
          Counting down to the celebration
        </p>
        <div className="countdown__grid">
          <CountdownUnit value={remaining.days.toString()} label="Days" />
          <span className="countdown__colon display" aria-hidden="true">
            :
          </span>
          <CountdownUnit value={pad(remaining.hours)} label="Hours" />
          <span className="countdown__colon display" aria-hidden="true">
            :
          </span>
          <CountdownUnit value={pad(remaining.minutes)} label="Minutes" />
          <span className="countdown__colon display" aria-hidden="true">
            :
          </span>
          <CountdownUnit value={pad(remaining.seconds)} label="Seconds" />
        </div>
      </div>
    </section>
  );
}
