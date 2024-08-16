import { ImageSource } from "expo-image";

export interface beat {
  song: string;
  artist: string;
  image: ImageSource;
  location?: string;
  length?: string;
  onAdd?: () => void;
}
export interface song {
  song: string;
  artist: string;
  image: ImageSource;
  length: number;
}

export interface comment {
  timestamp: Date;
  username: string;
  likes: number;
  comment: string;
  photo: ImageSource;
}

export interface drop {
  uid: string;
  name: string;
  username: string;
  location: string;
  timestamp: Date;
  photo: ImageSource;
  description: string;
  likes: number;
  comments?: comment[];
}
