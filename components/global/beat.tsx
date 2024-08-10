import { Image } from "expo-image";
import { View, Text, Pressable } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { beat } from "@/types/beat";
import AntDesign from "@expo/vector-icons/AntDesign";

const Drop = ({ image, artist, song, location, length, onAdd }: beat) => {
  return (
    <View className="flex flex-row items-center gap-4 p-2">
      <View className="w-[50] h-[50] rounded-lg overflow-hidden">
        <Image source={image} style={{ height: 50, width: 50 }} />
      </View>
      <View className="flex flex-row items-center justify-between gap-4 flex-1">
        <View>
          <Text className="text-2xl font-semibold">{song}</Text>
          <View className="text-xl flex flex-row items-center">
            <Text>{artist}</Text>
            {length && <Entypo name="dot-single" size={12} color="black" />}
            <Text>{length}</Text>
          </View>
        </View>
        <Text className="text-xl">{location}</Text>
        <View className="flex flex-row gap-4">
          {onAdd && (
            <Pressable
              onPress={() => onAdd()}
              className="bg-white border-2 border-beatdrop-primary rounded-full p-2"
            >
              <Text className="text-beatdrop-primary">
                <AntDesign name="plus" size={24} />
              </Text>
            </Pressable>
          )}
          <View className="bg-beatdrop-primary rounded-full p-2">
            <Entypo name="controller-play" size={24} color="white" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Drop;
