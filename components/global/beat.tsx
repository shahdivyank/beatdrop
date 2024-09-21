import { Image } from "expo-image";
import { View, Text, Pressable } from "react-native";
import { beat } from "@/types";
import useAudio from "@/hooks/useAudio";
import Icon from "../Icon";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Drop = ({
  image,
  artist,
  song,
  location,
  length,
  onAdd,
  preview,
}: beat) => {
  const { playing, play, pause } = useAudio(preview);

  return (
    <View className="flex w-full flex-row items-center gap-4 rounded-md bg-white p-2">
      <View className="h-[50] w-[50] overflow-hidden rounded-lg">
        <Image source={image} style={{ height: 50, width: 50 }} />
      </View>
      <View className="flex flex-1 flex-row items-center justify-between gap-4">
        <View>
          <Text className="font-[OutfitMedium] text-xl">{song}</Text>
          <View className="flex flex-row items-center text-xl">
            <Text>{artist}</Text>
            {length && (
              <Icon name="Circle" size={6} color="black" className="mx-1" />
            )}
            <Text>{length}</Text>
          </View>
        </View>
        <Text className="text-md">{location}</Text>
        <View className="flex flex-row gap-4">
          {onAdd && (
            <Pressable
              onPress={() => onAdd()}
              className="rounded-full border-2 border-beatdrop-primary bg-white p-2"
            >
              <Text className="text-beatdrop-primary">
                <Icon name="Add_Plus" size={24} />
              </Text>
            </Pressable>
          )}
          {preview && (
            <Pressable
              className="rounded-full bg-beatdrop-primary p-2"
              onPress={() => (playing ? pause() : play())}
            >
              {playing ? (
                <FontAwesome6
                  className="px-1 text-center"
                  name="pause"
                  size={22}
                  color="white"
                />
              ) : (
                <FontAwesome6
                  className="pl-1 pr-0.5 text-center"
                  name="play"
                  size={22}
                  color="white"
                />
              )}
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
};

export default Drop;
