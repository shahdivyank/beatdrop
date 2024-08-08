import { Link } from "expo-router";
import { View, Text } from "react-native";

const Screen = () => {
  return (
    <View>
      <Text>Screen</Text>
      <Link href="/create">PRESS ME</Link>
    </View>
  );
};

export default Screen;
