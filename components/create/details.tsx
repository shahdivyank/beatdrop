import Entypo from "@expo/vector-icons/Entypo";
import Tag from "@/components/global/tag";
import Beat from "@/components/global/beat";
import { View, Text, TextInput, Pressable, Keyboard } from "react-native";
import { useState } from "react";
import { beat } from "@/types";
import { Image } from "expo-image";
import MapPin from "@/assets/icons/Map_Pin.svg";
import Caption from "@/assets/icons/Caption.svg";
import Friends from "@/assets/icons/Friends.svg";
import Tags from "@/assets/icons/Tags.svg";
import Cross from "@/assets/icons/Cross.svg";
import Plus from "@/assets/icons/Plus.svg";
import ArrowDown from "@/assets/icons/ArrowDown.svg";
import * as ImagePicker from "expo-image-picker";

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

  const [images, setImages] = useState<ImagePicker.ImagePickerAsset[]>([]);
  const handlePromptImage = async () => {
    const response = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
      allowsMultipleSelection: true,
      selectionLimit: 3,
    });

    if (response.canceled || !response.assets) {
      return;
    }

    const allImages = [...response.assets, ...images];

    setImages(allImages);
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

        <View className="flex flex-row gap-3 h-1/6">
          <Image source={Caption} style={{ width: 20, height: 16 }} />
          <TextInput
            className="placeholder:text-beatdrop-placeholder h-full w-11/12 pt-0"
            onChangeText={setDescription}
            value={description}
            placeholder="What makes this song so special?"
            keyboardType="default"
            multiline={true}
            blurOnSubmit={true}
            returnKeyType="done"
          />
        </View>

        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-3">
            <Image source={MapPin} style={{ width: 23, height: 20 }} />
            <Text>San Francisco, CA</Text>
          </View>
          <Image source={Cross} style={{ width: 10, height: 10 }} />
        </View>

        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-3">
            <Image source={Friends} style={{ width: 23, height: 20 }} />
            <Text>Friends Only</Text>
          </View>
          <Image source={ArrowDown} style={{ width: 14, height: 7 }} />
        </View>

        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-3">
            <Image source={Tags} style={{ width: 23, height: 23 }} />
            <TextInput
              className="placeholder:text-beatdrop-placeholder"
              onChangeText={setTag}
              value={tag}
              placeholder="Add Tags"
              keyboardType="default"
            />
          </View>
          <Image source={Plus} style={{ width: 12, height: 12 }} />
        </View>
        <View className="flex flex-row gap-3 mt-2">
          {tags.map((tag, index) => (
            <Tag text={tag} color={colors[index]} key={index} />
          ))}
        </View>
        <View className="flex flex-row flex-wrap gap-2 items-center">
          <Pressable
            onPress={handlePromptImage}
            className="flex flex-row items-center gap-2"
          >
            <Text>Upload image + </Text>
          </Pressable>

          {images.map((image) => {
            return (
              <Image
                key={image.uri}
                source={{ uri: image.uri }}
                style={{ width: 40, height: 40, borderRadius: 8 }}
                contentFit="cover"
                alt="Selected Image"
              />
            );
          })}
        </View>
      </View>

      <Pressable className="bg-beatdrop-primary py-4 rounded-full w-full absolute bottom-4">
        <Text className="text-center text-white text-xl">Post Beatdrop</Text>
      </Pressable>
    </View>
  );
};

export default Details;
