export interface FamilyDetail {
  titlePrefix?: string;
  name: string;
  credentials: string;
  relation: string;
  parents: string;
  place: string;
  grandparents?: string;
}

export interface WeddingEvent {
  title: string;
  date: string;
  time: string;
  note?: string;
  place?: string;
}

export interface InvitationData {
  meta: {
    title: string;
    description: string;
  };
  couple: {
    bride: string;
    groom: string;
  };
  date: {
    weekday: string;
    day: string;
    month: string;
    year: string;
    panchangam: string;
  };
  muhurtham: {
    time: string;
    lines: string[];
  };
  venue: {
    name: string;
    address: string;
    mapsUrl?: string;
  };
  families: {
    bride: FamilyDetail;
    groom: FamilyDetail;
  };
  events: WeddingEvent[];
  hosts: {
    invitedBy: {
      name: string;
      place: string;
      phones: { label: string; href: string }[];
    };
    organisedBy: {
      names: string;
      note: string;
    };
  };
  shloka: {
    lines: string[];
    meaning: string;
  };
  closing: {
    message: string;
    from: string;
    tag?: string;
  };
  copy: {
    blessingsLine: string;
    familiesInvite: string;
    daySection: string;
    muhurthamLabel: string;
    mapsLink: string;
    celebration: string;
    invitedBy: string;
    organisedBy: string;
    closingLine: [string, string];
    potInvitation: string;
  };
  blessings: {
    envelopeTitle: string;
    govindaNamam: string;
    subhamastu: string;
    sitaRama: string;
    closing: string;
  };
}
