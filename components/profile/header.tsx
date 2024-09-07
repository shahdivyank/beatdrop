import { View, Text } from "react-native";
import { Image } from "expo-image";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Icon from "../Icon";
import { useUser } from "@/hooks/useUser";

interface state {
  photo: string;
  beatdrops: number;
  friends: number;
  name: string;
}

const Header = () => {
  const { photo, beatdrops, friends, name } = useUser(
    ({ photo, beatdrops, friends, name }: state) => ({
      photo,
      beatdrops,
      friends,
      name,
    }),
  );

  return (
    <View className="flex flex-row items-center gap-3 p-4">
      <View className="h-[up] w-[80] overflow-hidden rounded-full">
        <Image
          source={photo}
          style={{ height: 80, width: 80 }}
          className="rounded-full"
        />
      </View>
      <View>
        <Text className="my-2 text-3xl font-bold">{name}</Text>
        <View className="flex flex-row gap-6">
          <View className="flex flex-row items-center gap-2">
            <FontAwesome name="music" size={24} color="black" />
            <Text>{beatdrops} Beatdrops</Text>
          </View>

          <View className="flex flex-row items-center gap-2">
            <Icon name="User_01" size={24} />
            <Text>{friends} Friends</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
