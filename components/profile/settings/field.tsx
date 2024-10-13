import { Href, Link } from "expo-router";
import { View, Text } from "react-native";

interface props {
  field: string;
  value: string;
  link: Href<string>;
}

const Field = ({ field, value, link }: props) => {
  return (
    <Link href={link} className="flex flex-row items-center justify-center">
      <View className="flex w-full flex-row justify-between py-4">
        <Text className="text-lg">{field}</Text>
        <Text className="text-lg text-beatdrop-profile-secondary">{value}</Text>
      </View>
    </Link>
  );
};

export default Field;
