import { Link } from "expo-router";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <View>
        <Text>beatdrop</Text>
        <Text>hear the world from another perspective</Text>
        <Link href="/onboarding/0">Sign Up With Spotify</Link>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
