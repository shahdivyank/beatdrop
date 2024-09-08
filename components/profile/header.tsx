import { View, Text } from "react-native";
import { Image } from "expo-image";
import { useUser } from "@/hooks/useUser";

const Header = () => {
  const { photo, beatdrops, followers, following, name, username, bio } =
    useUser(
      ({
        photo,
        beatdrops,
        friends,
        name,
        username,
        followers,
        following,
        bio,
      }) => ({
        photo,
        beatdrops,
        friends,
        name,
        username,
        followers,
        following,
        bio,
      })
    );

  return (
    <View className="items-center p-4">
      <View className="w-[80] rounded-full overflow-hidden h-[up]">
        <Image
          source={photo}
          style={{ height: 80, width: 80 }}
          className="rounded-full"
        />
      </View>
      <View className="items-center my-2">
        <Text className="text-3xl font-bold">{name}</Text>
        <Text className="text-xl text-beatdrop-placeholder">@{username}</Text>
      </View>

      <View className="flex flex-row gap-6">
        <View className="items-center gap-1">
          <Text className="text-xl">{beatdrops} </Text>
          <Text>Beatdrops</Text>
        </View>

        <View className="items-center gap-1">
          <Text className="text-xl">{followers}</Text>
          <Text>Followers</Text>
        </View>

        <View className="items-center gap-1">
          <Text className="text-xl">{following}</Text>
          <Text>Following</Text>
        </View>
      </View>
      <Text className="mt-3 text-xl">{bio}</Text>
    </View>
  );
};

export default Header;
