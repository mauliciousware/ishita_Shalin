"use client";

import { useEffect, useState } from "react";
import { Envelope } from "./Envelope";
import { Opening } from "./Opening";
import { Couple } from "./Couple";
import { Families } from "./Families";
import { Details } from "./Details";
import { Countdown } from "./Countdown";
import { Celebration } from "./Celebration";
import { Hosts } from "./Hosts";
import { Closing } from "./Closing";

/** Full invitation flow. The envelope holds the page until the guest taps to open it. */
export function Invitation() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    document.body.style.overflow = opened ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [opened]);

  return (
    <>
      {!opened && <Envelope onOpen={() => setOpened(true)} />}
      <main>
        <Opening />
        <Couple />
        <Families />
        <Details />
        <Countdown />
        <Celebration />
        <Hosts />
        <Closing />
      </main>
    </>
  );
}
