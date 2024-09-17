import { ImageSource } from "expo-image";

export interface beat {
  song: string;
  artist: string;
  image: ImageSource;
  location?: string;
  length?: string;
  onAdd?: () => void;
  preview: string;
}
export interface song {
  song: string;
  artist: string;
  image: ImageSource;
  length: number;
  preview: string;
}

export interface comment {
  timestamp: Date;
  username: string;
  likes: number;
  comment: string;
  photo: ImageSource;
}

export interface drop {
  did: string;
  uid: string;
  name: string;
  username: string;
  location: string;
  timestamp: Date;
  photo: ImageSource;
  description: string;
  likes: number;
  comments?: comment[];
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export type beatdrop = beat & drop;
