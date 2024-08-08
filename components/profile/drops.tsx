import { View } from "react-native";
import React from "react";
import Beat from "@/components/global/beat";

const drops = [
  {
    name: "Cosmic",
    artist: "Red Velvet",
    image: {
      uri: "https://upload.wikimedia.org/wikipedia/en/5/59/Red_Velvet_-_Cosmic.png",
    },
    location: "Brisban, AU",
  },
  {
    name: "Cosmic",
    artist: "Red Velvet",
    image: {
      uri: "https://upload.wikimedia.org/wikipedia/en/5/59/Red_Velvet_-_Cosmic.png",
    },
    location: "Brisban, AU",
  },
  {
    name: "Cosmic",
    artist: "Red Velvet",
    image: {
      uri: "https://upload.wikimedia.org/wikipedia/en/5/59/Red_Velvet_-_Cosmic.png",
    },
    location: "Brisban, AU",
  },
  {
    name: "Cosmic",
    artist: "Red Velvet",
    image: {
      uri: "https://upload.wikimedia.org/wikipedia/en/5/59/Red_Velvet_-_Cosmic.png",
    },
    location: "Brisban, AU",
  },
  {
    name: "Cosmic",
    artist: "Red Velvet",
    image: {
      uri: "https://upload.wikimedia.org/wikipedia/en/5/59/Red_Velvet_-_Cosmic.png",
    },
    location: "Brisban, AU",
  },
];

const Drops = () => {
  return (
    <View className="flex gap-3">
      {drops.map(({ name, artist, image, location }, index) => (
        <Beat
          name={name}
          artist={artist}
          image={image}
          location={location}
          key={index}
        />
      ))}
    </View>
  );
};

export default Drops;
