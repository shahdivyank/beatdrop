import Icon from "@/components/Icon";
import { Link, router } from "expo-router";
import { View, Text, Pressable } from "react-native";

interface props {
  title: string;
  callback: () => boolean;
}

const Header = ({ title, callback }: props) => {
  const onSubmit = () => {
    if (!callback()) return;
    router.replace("/profile/edit");
  };

  return (
    <View className="flex flex-row items-center justify-between">
      <Link href="/profile/edit">
        <Icon name="Chevron_Left" size={24} />
      </Link>
      <Text className="text-center text-2xl font-semibold">{title}</Text>
      <Pressable onPress={onSubmit}>
        <Text className="text-2xl text-beatdrop-primary">Done</Text>
      </Pressable>
    </View>
  );
};

export default Header;
