"use client";

/* eslint-disable @next/next/no-img-element -- the source uses plain <img> with intrinsic sizing */

import { useReveal } from "@/hooks/use-reveal";
import type { FamilyDetail } from "@/types/invitation";
import { invitation } from "./data";
import { stagger } from "./stagger";

function FamilyCard({ person }: { person: FamilyDetail }) {
  const [ref, isIn] = useReveal<HTMLElement>(0.3);
  const [firstName, ...rest] = person.name.split(" ");
  const restName = rest.join(" ");

  return (
    <article ref={ref} className={`family${isIn ? " is-in" : ""}`}>
      <h3 className="family__name display reveal" style={stagger(0)}>
        <span className="family__lead">
          {person.titlePrefix && (
            <span className="family__prefix" lang="te">
              {`${person.titlePrefix} `}
            </span>
          )}
          <span className="family__first-name">{firstName}</span>
        </span>
        {restName && <span className="family__rest-name"> {restName}</span>}
      </h3>
      <p className="family__credentials quiet reveal" style={stagger(1)}>
        {person.credentials}
      </p>
      <p className="family__relation display reveal" style={stagger(2)}>
        {person.relation}
      </p>
      <p className="family__parents display reveal" style={stagger(3)}>
        {person.parents}
      </p>
      <p className="family__place quiet reveal" style={stagger(4)}>
        {person.place}
      </p>
      {person.grandparents && (
        <p className="family__grand quiet reveal" style={stagger(5)}>
          {person.grandparents}
        </p>
      )}
    </article>
  );
}

function FamiliesFrame() {
  const [ref, isIn] = useReveal<HTMLElement>(0.3);

  return (
    <figure ref={ref} className={`families__frame${isIn ? " is-in" : ""}`}>
      <div className="families__reveal">
        <img
          src="/sites/bindu-and-revanth/wedding-illustration.png"
          alt="Telugu Wedding Ceremony Illustration"
          className="families__illustration"
          width={1177}
          height={1337}
          loading="lazy"
          decoding="async"
        />
      </div>
    </figure>
  );
}

/** Both families, the "with" divider, and the arched wedding illustration. */
export function Families() {
  const { families } = invitation;

  return (
    <section className="families" aria-label="Families">
      <div className="families__inner">
        <FamilyCard person={families.bride} />

        <div className="families__with-sep" aria-hidden="true">
          <span className="families__with-line" />
          <span className="families__with-word display">with</span>
          <span className="families__with-line" />
        </div>

        <FamilyCard person={families.groom} />

        <FamiliesFrame />
      </div>
    </section>
  );
}
