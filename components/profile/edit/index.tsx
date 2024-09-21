import Icon from "@/components/Icon";
import { Image } from "expo-image";
import { View, Text, SafeAreaView } from "react-native";
import { useUser } from "@/hooks/useUser";
import Field from "./field";
import { Link } from "expo-router";

const Edit = () => {
  const { username, name, photo, bio } = useUser();

  return (
    <SafeAreaView className="flex items-center justify-center">
      <View className="w-11/12 p-4">
        <View className="flex flex-row items-center">
          <View className="w-1/3">
            <Link href="/profile">
              <Icon name="Chevron_Left" size={24} />
            </Link>
          </View>
          <Text className="w-1/3 text-center text-2xl font-semibold">
            Edit Profile
          </Text>
        </View>

        <View className="mb-4 flex items-center justify-center">
          <View className="my-4 h-[100] w-[100] overflow-hidden rounded-full">
            <Image source={photo} style={{ height: 100, width: 100 }} />
          </View>

          <Text className="text-xl font-semibold text-beatdrop-primary">
            Change Profile Picture
          </Text>
        </View>

        <Field field="Name" value={name} link="/profile/name" />
        <View className="border-[0.5px] border-beatdrop-border" />
        <Field field="Username" value={username} link="/profile/username" />
        <View className="border-[0.5px] border-beatdrop-border" />
        <Field field="Bio" value={bio} link="/profile/bio" />
      </View>
    </SafeAreaView>
  );
};

export default Edit;
