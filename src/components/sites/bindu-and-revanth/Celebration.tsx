"use client";

import { Fragment } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { invitation } from "./data";

/** The three ceremony events, separated by diamond rules. */
export function Celebration() {
  const [ref, isIn] = useReveal<HTMLElement>(0.2);
  const { events, copy } = invitation;

  if (events.length < 2) return null;

  return (
    <section
      ref={ref}
      className={`celebration${isIn ? " is-in" : ""}`}
      aria-labelledby="celebration-title"
    >
      <div className="celebration__inner reveal">
        <h2 id="celebration-title" className="label">
          {copy.celebration}
        </h2>
        <ol className="events">
          {events.map((event, index) => (
            <Fragment key={event.title}>
              {index > 0 && (
                <li className="events__sep" aria-hidden="true">
                  <span className="sep" />
                </li>
              )}
              <li className="events__item">
                <h3 className="events__title display">{event.title}</h3>
                <p>{event.date}</p>
                <p>{event.time}</p>
                {event.note && <p className="quiet">{event.note}</p>}
                {event.place && (
                  <p className="quiet events__place">{event.place}</p>
                )}
              </li>
            </Fragment>
          ))}
        </ol>
      </div>
    </section>
  );
}
