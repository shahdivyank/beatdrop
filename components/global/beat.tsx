import { Image } from "expo-image";
import { View, Text, Pressable } from "react-native";
import { beat } from "@/types";
import useAudio from "@/hooks/useAudio";
import Icon from "../Icon";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

const Drop = ({ image, artist, song, location, length, onAdd }: beat) => {
  const { playing, play, pause } = useAudio(
    "https://www.bensound.com/bensound-music/bensound-oblivion.mp3",
  );

  return (
    <View className="flex flex-row items-center gap-4 p-2 rounded-md">
      <View className="w-[50] h-[50] rounded-lg overflow-hidden">
        <Image source={image} style={{ height: 50, width: 50 }} />
      </View>
      <View className="flex flex-row items-center justify-between gap-4 flex-1">
        <View>
          <Text className="text-xl font-[OutfitMedium]">{song}</Text>
          <View className="text-xl flex flex-row items-center">
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
              className="bg-white border-2 border-beatdrop-primary rounded-full p-2"
            >
              <Text className="text-beatdrop-primary">
                <Icon name="Add_Plus" size={24} />
              </Text>
            </Pressable>
          )}
          <Pressable
            className="bg-beatdrop-primary rounded-full p-2"
            onPress={() => (playing ? pause() : play())}
          >
            {playing ? (
              // <Icon name="Pause" size={24} color="white" />
              <FontAwesome6 className="px-1 text-center" name="pause" size={24} color="white" />
            ) : (
              // <Icon name="Play" size={24} color="white" />
              <FontAwesome6 className="pl-1 pr-0.5 text-center" name="play" size={23} color="white" />
            )}
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Drop;
