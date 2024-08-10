import { ImageSource } from "expo-image";

export interface beat {
  song: string;
  artist: string;
  image: ImageSource;
  location?: string;
  length?: string;
  onAdd?: () => void;
}
