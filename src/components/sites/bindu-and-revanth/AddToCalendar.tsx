"use client";

import { useCallback } from "react";
import { invitation } from "./data";

const GOOGLE_CALENDAR_URL =
  "https://www.google.com/calendar/render?action=TEMPLATE&text=Ishita%20%26%20Shalin's%20Wedding&dates=20261030T040100Z/20261030T063000Z&location=MCS%20Kalyana%20Mandapam%2C%20Vijayamahal%20Gate%20Centre%2C%20Nellore&details=Muhurtham%3A%209%3A31%20%E2%80%93%2010%3A30%20AM%0AMrigasira%20Nakshatram%2C%20Dhanus%20Lagnam%0APushkara%20Kalam%2010%3A08%20%E2%80%93%2010%3A12%20AM%0A%0AMCS%20Kalyana%20Mandapam%0AVijayamahal%20Gate%20Centre%2C%20Nellore";

/** "Save the date" actions: Google Calendar in a new tab, or a generated .ics download. */
export function AddToCalendar() {
  const { couple, muhurtham, venue } = invitation;

  const downloadIcs = useCallback(() => {
    const lines = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Wedding Invitation//EN",
      "BEGIN:VEVENT",
      "DTSTART:20261030T040100Z",
      "DTEND:20261030T063000Z",
      `SUMMARY:${couple.bride} & ${couple.groom}'s Wedding`,
      `LOCATION:${venue.name}\\, ${venue.address}`,
      `DESCRIPTION:Muhurtham: ${muhurtham.time}\\n${muhurtham.lines.join("\\n")}`,
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ];

    const blob = new Blob([lines.join("\r\n")], {
      type: "text/calendar;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = `${couple.bride}-${couple.groom}-Wedding.ics`;
    anchor.click();
    URL.revokeObjectURL(url);
  }, [
    couple.bride,
    couple.groom,
    muhurtham.lines,
    muhurtham.time,
    venue.address,
    venue.name,
  ]);

  return (
    <div className="add-cal">
      <p className="label add-cal__label">Save the date</p>
      <div className="add-cal__buttons">
        <a
          className="add-cal__btn"
          href={GOOGLE_CALENDAR_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="add-cal__icon" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z"
              fill="currentColor"
            />
          </svg>
          Google Calendar
        </a>
        <button className="add-cal__btn" type="button" onClick={downloadIcs}>
          <svg className="add-cal__icon" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"
              fill="currentColor"
            />
          </svg>
          Apple / Outlook
        </button>
      </div>
    </div>
  );
}
