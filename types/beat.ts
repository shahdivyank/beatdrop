import { ImageSource } from "expo-image";

export interface beat {
  name: string;
  artist: string;
  image: ImageSource;
  location?: string;
  length?: string;
}
