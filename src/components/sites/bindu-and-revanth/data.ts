import type { InvitationData } from "@/types/invitation";

/**
 * All copy, dates, and links for the invitation.
 * Mirrors the source site's content config so the page can be edited in one place.
 */
export const invitation: InvitationData = {
  meta: {
    title: "Ishita & Shalin — Wedding Invitation",
    description:
      "With the blessings of our families, we invite you to the wedding of Ishita and Shalin — Friday, 30 October 2026, Nellore.",
  },
  couple: {
    bride: "Ishita",
    groom: "Shalin",
  },
  date: {
    weekday: "Friday",
    day: "30",
    month: "October",
    year: "2026",
    panchangam:
      "Swasti Sri Parabhava Nama Samvatsaram, Ashwayuja Masam, Bahula Panchami",
  },
  muhurtham: {
    time: "9:31 – 10:30 AM",
    lines: [
      "Mrigasira Nakshatram, Dhanus Lagnam",
      "Pushkara Kalam 10:08 – 10:12 AM",
    ],
  },
  venue: {
    name: "MCS Kalyana Mandapam",
    address: "Vijayamahal Gate Centre, Nellore",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=MCS+Kalyana+Mandapam+Vijayamahal+Gate+Centre+Nellore",
  },
  families: {
    bride: {
      titlePrefix: "చి.ల.సౌ.",
      name: "Ishita",
      credentials: "B.B.A., LL.B., LL.M., M.A. (Psychology)",
      relation: "Youngest daughter of",
      parents: "Sri Vasipalli Narayana Reddy & Smt. Vaidehi",
      place: "J.R.Peta, Atmakur Town, Nellore District",
      grandparents:
        "Granddaughter of the late Sri Vasipalli Ramana Reddy & Smt. Mastanamma, and of Sri Pulimi Venkata Sesha Reddy & Smt. Venkata Seshamma",
    },
    groom: {
      titlePrefix: "చి.",
      name: "Shalin",
      credentials: "B.Tech., Deputy Manager at NHAI",
      relation: "Youngest son of",
      parents: "Sri Sure Chandrashekhar Reddy & Smt. Rajyam",
      place: "Gauravaram, Kavali Mandal, Nellore District",
    },
  },
  events: [
    {
      title: "Gandhapu Nalugu",
      date: "Wednesday, 28 October",
      time: "6:00 PM",
      note: "Dinner at 8:00 PM",
      place: "At our residence, Jagannadharaopeta, Atmakur",
    },
    {
      title: "The Wedding",
      date: "Friday, 30 October",
      time: "9:31 AM",
      place: "MCS Kalyana Mandapam, Nellore",
    },
    {
      title: "Breakfast",
      date: "Friday, 30 October",
      time: "8:30 AM",
      place: "MCS Kalyana Mandapam, Nellore",
    },
  ],
  hosts: {
    invitedBy: {
      name: "Sri Vasipalli Narayana Reddy & Smt. Vaidehi",
      place: "J.R.Peta, Atmakur Town",
      phones: [
        { label: "+91 98481 04604", href: "tel:+919848104604" },
        { label: "+91 94913 94604", href: "tel:+919491394604" },
      ],
    },
    organisedBy: {
      names: "Dr. Polamreddy Mahesh Reddy & Dr. Sindhuri",
      note: "and all our relatives and friends",
    },
  },
  shloka: {
    lines: [
      "శ్రీరామచంద్రః శ్రితపారిజాతః",
      "సమస్తకల్యాణగుణాభిరామః",
      "సీతాముఖాంభోరుహచంచరీకః",
      "నిరంతరం మంగళమాతనోతు",
    ],
    meaning:
      "May Sri Rama , the wish-fulfilling tree for all who take refuge in him, beloved for every auspicious virtue, and the bee drawn to the lotus of Sita’s face  bless us with unending auspiciousness.",
  },
  closing: {
    message: "Come to my Pinni’s wedding… do come!",
    from: "Advaith Vasista Reddy",
    tag: "Our Little Host",
  },
  copy: {
    blessingsLine:
      "With the divine blessing of our ancestors and families, we are getting married",
    familiesInvite: "",
    daySection: "The auspicious day",
    muhurthamLabel: "Muhurtham",
    mapsLink: "View on Google Maps",
    celebration: "The celebration",
    invitedBy: "Invited by",
    organisedBy: "Organised by",
    closingLine: ["Your presence", "is our greatest blessing"],
    potInvitation:
      "Destined by destiny and solemnized by our elders, the auspicious muhurtham is set for our wedding ceremony. We humbly request you to grace the occasion with your family and bless us as we begin our beautiful journey together.",
  },
  blessings: {
    envelopeTitle: "Vasipalli Family Wedding Invitation",
    govindaNamam:
      "॥ కళ్యాణాద్భుత గాత్రాయ కామితార్థ ప్రదాయినే । శ్రీమద్వేంకటనాథాయ శ్రీనివాసాయ తే నమః ॥",
    subhamastu: "॥ శ్రీరస్తు !! శుభమస్తు !! ॥",
    sitaRama: "॥ శ్రీ సీతారామచంద్రాభ్యాం నమః ॥",
    closing: "",
  },
};
