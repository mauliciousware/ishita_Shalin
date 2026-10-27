"use client";

import { useReveal } from "@/hooks/use-reveal";
import { invitation } from "./data";
import { stagger } from "./stagger";

/** Who invites and who organises, plus the little host's note. */
export function Hosts() {
  const [ref, isIn] = useReveal<HTMLElement>(0.25);
  const { hosts, closing, copy } = invitation;

  return (
    <section
      ref={ref}
      className={`hosts${isIn ? " is-in" : ""}`}
      aria-label="Hosts"
    >
      <div className="hosts__inner">
        <p className="label reveal" style={stagger(0)}>
          {copy.invitedBy}
        </p>
        <p className="hosts__name display reveal" style={stagger(1)}>
          {hosts.invitedBy.name}
        </p>
        <p className="quiet hosts__place reveal" style={stagger(2)}>
          {hosts.invitedBy.place}
        </p>
        <p className="hosts__phones reveal" style={stagger(3)}>
          {hosts.invitedBy.phones.map((phone) => (
            <a className="link" href={phone.href} key={phone.href}>
              {phone.label}
            </a>
          ))}
        </p>

        <span
          className="sep hosts__sep reveal"
          style={stagger(4)}
          aria-hidden="true"
        />

        <p className="label reveal" style={stagger(5)}>
          {copy.organisedBy}
        </p>
        <p className="hosts__name display reveal" style={stagger(6)}>
          {hosts.organisedBy.names}
        </p>
        <p className="quiet hosts__place reveal" style={stagger(7)}>
          {hosts.organisedBy.note}
        </p>

        <span className="rule hosts__rule" style={stagger(8)} />

        <div className="hosts__child-note reveal" style={stagger(9)}>
          <p className="hosts__child-message display">{closing.message}</p>
          <div className="hosts__child-author">
            {closing.tag && (
              <span className="hosts__child-tag label">{closing.tag}</span>
            )}
            <p className="hosts__child-from label">{closing.from}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
