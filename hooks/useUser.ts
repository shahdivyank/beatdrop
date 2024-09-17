import { create } from "zustand";

export const useUser = create(() => ({
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
}));
