import { ImageSource } from "expo-image";
import { create } from "zustand";

interface User {
  uid: string;
  username: string;
  name: string;
  bio: string;
  beatdrops: number;
  photo: ImageSource;
  followers: number;
  following: number;
  setAttribute: (attribute: string, value: string) => void;
}

export const useUser = create<User>()((set) => ({
  uid: "divyankshah",
  username: "divyank.shah",
  name: "Divyank Shah",
  bio: "This is a quick bio",
  beatdrops: 134,
  photo: {
    uri: "https://media.licdn.com/dms/image/C5603AQGGCb3sfU37yw/profile-displayphoto-shrink_200_200/0/1643607680906?e=2147483647&v=beta&t=3O3YNLDDQJ8kjWiFRtLQJRR-gj5JRN6hd6eerzGHdnY",
  },
  followers: 21,
  following: 21,

  setAttribute: (attribute: string, value: string) =>
    set({ [attribute]: value }),
}));
