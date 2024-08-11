import { View, Text, TextInput, Pressable, Dimensions } from "react-native";
import React, { useState } from "react";
import { beat } from "@/types";
import AntDesign from "@expo/vector-icons/AntDesign";
import Beat from "@/components/global/beat";
import { FlatList } from "react-native-gesture-handler";

interface props {
  setBeat: (value: beat) => void;
  handleNext: () => void;
}
export type song = {
  song: string;
  artist: string;
  image: {
    uri: string;
  };
  length: number;
};

const songs = [
  {
    song: "Supernova",
    artist: "aespa",
    image: {
      uri: "https://upload.wikimedia.org/wikipedia/en/3/31/Aespa_-_Supernova.png",
    },
    length: 178,
  },
  {
    song: "Armageddon",
    artist: "aespa",
    image: {
      uri: "https://upload.wikimedia.org/wikipedia/en/6/61/Armageddon_%28Aespa_album%29.jpg",
    },
    length: 196,
  },
  {
    song: "ABCD",
    artist: "Nayeon",
    image: {
      uri: "https://i.scdn.co/image/ab67616d0000b2735c202994e981619ccf69784e",
    },
    length: 163,
  },
  {
    song: "Drive",
    artist: "Miyeon",
    image: {
      uri: "https://i.scdn.co/image/ab67616d0000b2737fd8c5bc18f7bf20b6766db3",
    },
    length: 202,
  },
  {
    song: "Guilty",
    artist: "Taemin",
    image: {
      uri: "https://i.scdn.co/image/ab67616d0000b2733aa2389906d8900db3b4a8ed",
    },
    length: 190,
  },
  {
    song: "So Bad",
    artist: "STAYC",
    image: {
      uri: "https://i.scdn.co/image/ab67616d0000b273bc125f40131dd5869b2ec36c",
    },
    length: 212,
  },
  {
    song: "I DO",
    artist: "(G)I-DLE",
    image: {
      uri: "https://i.scdn.co/image/ab67616d0000b273e7eeb9af3ee924d8ed069c4e",
    },
    length: 190,
  },
];
const listItem = (beat: song, onPress: (beat: beat) => void) => {
  const { song, artist, image, length } = beat;
  const minutes = Math.floor(length / 60);
  const seconds = length - minutes * 60;

  return (
    <Pressable
      onPress={() =>
        onPress({
          song,
          artist,
          image,
        })
      }
    >
      <Beat
        song={song}
        artist={artist}
        image={image}
        length={`${minutes}:${seconds}`}
      />
    </Pressable>
  );
};

const Search = ({ setBeat, handleNext }: props) => {
  const [search, setSearch] = useState("");

  const handlePress = (beat: beat) => {
    setBeat(beat);
    handleNext();
  };

  const filteredSongs = songs.filter((song: song) => {
    if (search === "") {
      return true;
    }

    return song.artist.includes(search) || song.song.includes(search);
  });

  return (
    <View className="w-full">
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row gap-3">
          <AntDesign name="search1" size={24} color="black" />
          <TextInput
            className="placeholder:text-beatdrop-placeholder"
            onChangeText={setSearch}
            value={search}
            placeholder="Search Beats"
            keyboardType="default"
          />
        </View>

        <Pressable onPress={() => setSearch("")}>
          <Text>Cancel</Text>
        </Pressable>
      </View>

      <Text className="font-semibold text-xl mt-3">Most Popular</Text>

      <FlatList
        className="w-full h-full max-h-[72vh]"
        contentContainerClassName="w-full"
        renderItem={(item) => listItem(item.item, handlePress)}
        data={filteredSongs}
      />
    </View>
  );
};

export default Search;
