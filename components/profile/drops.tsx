import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";
import Entypo from "@expo/vector-icons/Entypo";

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
        <View className="flex flex-row items-center gap-4 p-2" key={index}>
          <View className="w-[50] h-[50] rounded-lg overflow-hidden">
            <Image source={image} style={{ height: 50, width: 50 }} />
          </View>
          <View className="flex flex-row items-center justify-between gap-4 flex-1">
            <View>
              <Text className="text-2xl font-semibold">{name}</Text>
              <Text className="text-xl">{artist}</Text>
            </View>
            <Text className="text-xl">{location}</Text>
            <View className="bg-beatdrop-primary rounded-full p-2">
              <Entypo name="controller-play" size={24} color="white" />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Drops;
