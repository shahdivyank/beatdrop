import { Link } from "expo-router";
import { View, Text } from "react-native";

const HomeScreen = () => {
  return (
    <View className="mt-24">
      <Text>beatdrop</Text>
      <Text>hear the world from another perspective</Text>
      <Link href="/onboarding/0">Sign Up With Spotify</Link>
    </View>
  );
};

export default HomeScreen;
