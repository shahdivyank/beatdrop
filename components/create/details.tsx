import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Tag from "@/components/global/tag";
import Beat from "@/components/global/beat";
import { View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { beat } from "@/types/beat";

const colors = [
  "bg-beatdrop-tag-orange",
  "bg-beatdrop-tag-green",
  "bg-beatdrop-tag-purple",
  "bg-beatdrop-tag-pink",
  "bg-beatdrop-tag-yellow",
];

interface props {
  beat: beat;
  handleBack: () => void;
  description: string;
  setDescription: (value: string) => void;
  addTag: (value: string) => void;
  tags: string[];
}

const Details = ({
  beat: { song, artist, image },
  handleBack,
  description,
  setDescription,
  tags,
  addTag,
}: props) => {
  const [tag, setTag] = useState("");

  const handleAdd = (value: string) => {
    addTag(value);
    setTag("");
  };

  return (
    <View className="w-full">
      <View className="p-3 h-full w-full gap-6">
        <View className="flex flex-row justify-between items-center">
          <Entypo
            name="chevron-left"
            size={24}
            color="black"
            onPress={handleBack}
          />
          <Text className="font-semibold text-xl">New Beatdrop</Text>
          <Text>Cancel</Text>
        </View>

        <Beat song={song} artist={artist} image={image} />

        <View className="flex flex-row gap-3">
          <Entypo name="text" size={24} color="black" />
          <TextInput
            className="placeholder:text-beatdrop-placeholder"
            onChangeText={setDescription}
            value={description}
            placeholder="What makes this song so special?"
            keyboardType="default"
          />
        </View>

        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-3">
            <Entypo name="location-pin" size={24} color="black" />
            <Text>San Francisco, CA</Text>
          </View>
        </View>

        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-3">
            <FontAwesome name="users" size={24} color="black" />
            <Text>Friends Only</Text>
          </View>
          <Entypo name="chevron-down" size={24} color="black" />
        </View>

        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-3">
            <FontAwesome name="tag" size={24} color="black" />
            <TextInput
              className="placeholder:text-beatdrop-placeholder"
              onChangeText={setTag}
              value={tag}
              placeholder="Add Tags"
              keyboardType="default"
            />
          </View>
          <Entypo
            name="plus"
            size={24}
            color="black"
            onPress={() => handleAdd(tag)}
          />
        </View>
        <View className="flex flex-row gap-3 mt-2">
          {tags.map((tag, index) => (
            <Tag text={tag} color={colors[index]} key={index} />
          ))}
        </View>
      </View>

      <Pressable className="bg-beatdrop-primary py-4 rounded-full w-full absolute bottom-4">
        <Text className="text-center text-white text-xl">Post Beatdrop</Text>
      </Pressable>
    </View>
  );
};

export default Details;
