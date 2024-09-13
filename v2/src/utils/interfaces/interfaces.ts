export interface ClientI {
  name: string;
  lastName: string;
  email: string;
  phone: number;
  other: string;
}

export const EmptyClient: ClientI = {
  name: "",
  lastName: "",
  email: "",
  phone: 0,
  other: "",
};

export interface EventI {
  guests: number | null;
  date: string;
  country: string;
  city: string;
  locationLink: string;
  type: string;
}

export const EmptyEvent: EventI = {
  guests: null,
  date: "",
  country: "",
  city: "",
  locationLink: "",
  type: "",
};

export interface ContactFormI {
  event: EventI;
  client: ClientI;
  type?: string;
  coments: string;
}

export const EmptyContactForm: ContactFormI = {
  event: EmptyEvent,
  client: EmptyClient,
  coments: "",
};

export interface Picture {
  description: string;
  index: number;
  loading: "lazy" | "eager" | undefined;
  original: string;
  originalTitle: string;
  thumbnail: string;
}