"use client";

import { useReveal } from "@/hooks/use-reveal";
import { invitation } from "./data";
import { stagger } from "./stagger";
import { AddToCalendar } from "./AddToCalendar";

/** Date, panchangam, muhurtham, venue, and calendar actions. */
export function Details() {
  const [ref, isIn] = useReveal<HTMLElement>(0.25);
  const { date, muhurtham, venue, copy } = invitation;

  return (
    <section
      ref={ref}
      className={`details${isIn ? " is-in" : ""}`}
      aria-labelledby="details-title"
    >
      <div className="details__inner">
        <h2 id="details-title" className="label reveal" style={stagger(0)}>
          {copy.daySection}
        </h2>

        <p
          className="details__day display mask-line"
          aria-label={date.day}
          style={stagger(1)}
        >
          <span aria-hidden="true">{date.day}</span>
        </p>

        <p className="details__monthyear display reveal" style={stagger(3)}>
          {date.month} {date.year}
        </p>

        <p className="details__panchangam quiet reveal" style={stagger(4)}>
          {date.weekday}
          <br />
          {date.panchangam}
        </p>

        <span className="rule" style={stagger(5)} />

        <div className="details__group reveal" style={stagger(6)}>
          <p className="label">{copy.muhurthamLabel}</p>
          <p className="details__time display">{muhurtham.time}</p>
          {muhurtham.lines.map((line) => (
            <p className="details__note quiet" key={line}>
              {line}
            </p>
          ))}
        </div>

        <span className="rule" style={stagger(7)} />

        <div className="details__group reveal" style={stagger(8)}>
          <p className="details__venue display">{venue.name}</p>
          <p className="details__address quiet">{venue.address}</p>
          {venue.mapsUrl && (
            <a
              className="link"
              href={venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {copy.mapsLink}
            </a>
          )}
        </div>

        <div className="reveal" style={stagger(9)}>
          <AddToCalendar />
        </div>
      </div>
    </section>
  );
}
