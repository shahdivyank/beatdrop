import { beat, drop } from "@/types";
import { comments } from "./comments";

export const beats: (drop & beat)[] = [
  {
    uid: "0",
    name: "Robert Lerias Jr.",
    username: "robert.lerias",
    location: "San Jose, CA",
    photo: {
      uri: "https://media.licdn.com/dms/image/C5603AQFRF-WuzzVSPw/profile-displayphoto-shrink_200_200/0/1648079904789?e=2147483647&v=beta&t=iQ5MB_agi9aY0JUDxSXlAEa3icdQWn8l9twByRP5ItQ",
    },
    timestamp: new Date("2024-08-09T03:24:00"),
    likes: 100,
    image: {
      uri: "https://images.genius.com/839942f1ff5a5b7a21e8ca9813f8c446.1000x1000x1.png",
    },
    song: "I Want That",
    artist: "G(I)-DLE",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    comments: [],
    coordinates: {
      latitude: 37.330048,
      longitude: -121.955171,
    },
  },
  {
    uid: "1",
    name: "Vincent Raimondi",
    username: "vincent.raimondi",
    location: "San Francisco, CA",
    photo: {
      uri: "https://media.licdn.com/dms/image/D5603AQGrXfnyW2o10g/profile-displayphoto-shrink_200_200/0/1691721890338?e=2147483647&v=beta&t=ZJss3qCbRLmbHVGzYlXdFJYd7WQhLOk35IrFSQPICR4",
    },
    timestamp: new Date("2024-08-03T03:24:00"),
    likes: 57,
    image: {
      uri: "https://i1.sndcdn.com/artworks-taH3WgxbicnX-0-t500x500.jpg",
    },
    song: "Rooftop",
    artist: "Flowsik",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    comments,
    coordinates: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
  },
  {
    uid: "2",
    name: "Divyank Shah",
    username: "divyank.shah",
    location: "Riverside, CA",
    photo: {
      uri: "https://media.licdn.com/dms/image/C5603AQGGCb3sfU37yw/profile-displayphoto-shrink_200_200/0/1643607680906?e=2147483647&v=beta&t=3O3YNLDDQJ8kjWiFRtLQJRR-gj5JRN6hd6eerzGHdnY",
    },
    timestamp: new Date("2024-02-03T03:24:00"),
    likes: 57,
    image: {
      uri: "https://i.scdn.co/image/ab67616d0000b273726d48d93d02e1271774f023",
    },
    song: "Mockingbird",
    artist: "Eminem",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    comments: comments,
    coordinates: {
      latitude: 33.9737,
      longitude: -117.3281,
    },
  },
];
