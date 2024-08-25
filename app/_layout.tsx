import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";
import "../globals.css";
import { Stack } from "expo-router/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import setDefaultProps from "react-native-simple-default-props";
import { Text } from "react-native";
import Toast from "react-native-toast-message";
import toast from "@/utils/toast/config";

SplashScreen.preventAutoHideAsync();

setDefaultProps(Text, {
  style: { fontFamily: "Outfit" },
});

const Layout = () => {
  const [loaded, error] = useFonts({
    CoolIcon: require("../assets/icons/coolicons.ttf"),
    Outfit: require("../assets/fonts/Outfit-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <GestureHandlerRootView className="flex-1">
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(dashboard)" />
      </Stack>
      <Toast config={toast} />
    </GestureHandlerRootView>
  );
};

export default Layout;
