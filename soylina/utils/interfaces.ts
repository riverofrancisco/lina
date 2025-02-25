export const ContactInfo = {
  mail: 'info@linarivero.com.ar',
  mailLink: 'mailto:info@linarivero.com.ar',
  whatsapp: '+549 11 23986362',
  whatsappLink: 'https://wa.me/5491123986362',
  instagramLink: 'https://www.instagram.com/_linarivero/',
  instagramMD: 'https://ig.me/m/_linarivero',
  youtubeLink: 'https://www.youtube.com/@_linarivero',
  tiktokLink: 'https://www.tiktok.com/@_linarivero',
  spotifyLink:
    'https://open.spotify.com/artist/3binED05LZgUfuz7ODLCMX?si=9yS8RHbTTEieMvOW7aygig',
  mediaUser: '_linarivero',
  profilePic: '',
  logo: 'https://aemzmlsfwgajxqiwclag.supabase.co/storage/v1/object/public/pictures/global/logo.png',
  logoDark: 'https://aemzmlsfwgajxqiwclag.supabase.co/storage/v1/object/public/pictures/global/logo_darktheme.png',
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
  src: string;
  deleted?: number;
  index: number;
}

export interface PicturesAPII {
  dataType: string;
  data: PictureI[];
}
