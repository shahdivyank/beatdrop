import { View, Text, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import { beat, song } from "@/types";
import Beat from "@/components/global/beat";
import { FlatList } from "react-native-gesture-handler";
import Icon from "../Icon";
import Spotify from "@/utils/services/Spotify";
import YouTube from "@/utils/services/YouTube";

interface props {
  setBeat: (value: beat) => void;
  handleNext: () => void;
}

const listItem = (beat: song, onPress: (beat: beat) => void) => {
  const { song, artist, image, length, preview } = beat;
  const minutes = Math.floor(length / 60);
  const seconds = length - minutes * 60;

  return (
    <Pressable
      onPress={() =>
        onPress({
          song,
          artist,
          image,
          preview,
        })
      }
    >
      <Beat
        song={song}
        artist={artist}
        image={image}
        length={`${minutes}:${seconds.toFixed(0)}`}
        preview={preview}
      />
    </Pressable>
  );
};

const Search = ({ setBeat, handleNext }: props) => {
  const [query, setQuery] = useState("");
  const [artist, setArtist] = useState("");
  const [songs, setSongs] = useState([]);

  const handlePress = (beat: beat) => {
    setBeat(beat);
    handleNext();
  };

  const handleCancel = async () => {
    const { access_token } = await Spotify.getToken();
    const spotify = await Spotify.search(access_token, query, artist);

    const youtube = await YouTube.search(`${query} by ${artist}`);

    setSongs([...spotify, ...youtube]);
  };

  return (
    <View className="w-full px-3">
      <View className="mt-1 flex flex-row items-center justify-between">
        <View className="flex w-[80%] flex-row gap-3 rounded-full bg-beatdrop-tag-gray px-4 py-3">
          <Icon name="Search_Magnifying_Glass" size={24} />
          <TextInput
            className="placeholder:text-beatdrop-placeholder"
            onChangeText={setQuery}
            value={query}
            placeholder="Search Beats"
            keyboardType="default"
          />
          <TextInput
            className="placeholder:text-beatdrop-placeholder"
            onChangeText={setArtist}
            value={artist}
            placeholder="Artist Name"
            keyboardType="default"
          />
        </View>

        <Pressable onPress={handleCancel}>
          <Text>Cancel</Text>
        </Pressable>
      </View>

      <Text className="mt-5 text-xl font-semibold">Most Popular</Text>

      <FlatList
        className="h-full max-h-[72vh] w-full"
        contentContainerClassName="w-full"
        renderItem={(item) => listItem(item.item, handlePress)}
        data={songs}
      />
    </View>
  );
};

export default Search;
