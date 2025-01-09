import logo from "../../../public/media/pictures/Logo.png";
import logodark from "../../../public/media/pictures/Logodark.png";

export const ContactInfo = {
  mail: "info@linarivero.com.ar",
  mailLink: "mailto:info@linarivero.com.ar",
  whatsapp: "+549 11 23986362",
  whatsappLink: "https://wa.me/5491123986362",
  instagramLink: "https://www.instagram.com/_linarivero/",
  instagramMD: "https://ig.me/m/_linarivero",
  youtubeLink: "https://www.youtube.com/@_linarivero",
  tiktokLink: "https://www.tiktok.com/@_linarivero",
  spotifyLink:
    "https://open.spotify.com/artist/3binED05LZgUfuz7ODLCMX?si=9yS8RHbTTEieMvOW7aygig",
  mediaUser: "_linarivero",
  profilePic: "",
  logoLight: logo.src,
  logoDark: logodark.src,
};

export interface EventI {
  id?: number;
  created_at?: string;
  deleted?: number;
  title: string;
  date: string;
  picture: string;
  country: string;
  locationLink: string;
  locationName: string;
  tickets: string;
}

export interface PictureI {
  id?: number;
  created_at?: string;
  url: string;
  deleted: number;
  index: number;
}

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


export interface ContactFormI {
  event: EventI;
  client: ClientI;
  type?: string;
  coments: string;
}


export interface Picture {
  description: string;
  index: number;
  loading: "lazy" | "eager" | undefined;
  original: string;
  originalTitle: string;
  thumbnail: string;
}
