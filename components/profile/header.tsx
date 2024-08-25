import { View, Text } from "react-native";
import { Image } from "expo-image";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Icon from "../Icon";

const Header = () => {
  return (
    <View className="flex flex-row items-center p-4 gap-3">
      <View className="w-[80] rounded-full overflow-hidden h-[up]">
        <Image
          source="https://media.licdn.com/dms/image/C5603AQGGCb3sfU37yw/profile-displayphoto-shrink_200_200/0/1643607680906?e=2147483647&v=beta&t=3O3YNLDDQJ8kjWiFRtLQJRR-gj5JRN6hd6eerzGHdnY"
          style={{ height: 80, width: 80 }}
          className="rounded-full"
        />
      </View>
      <View>
        <Text className="text-3xl font-bold my-2">Mariam Golwalla</Text>
        <View className="flex flex-row gap-6">
          <View className="flex flex-row items-center gap-2">
            <FontAwesome name="music" size={24} color="black" />
            <Text>21 Beatdrops</Text>
          </View>

          <View className="flex flex-row items-center gap-2">
            <Icon name="User_01" size={24} />
            <Text>2201 Friends</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
