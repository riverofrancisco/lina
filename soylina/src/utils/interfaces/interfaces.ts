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
