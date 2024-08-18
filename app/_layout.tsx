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
import toastConfig from "@/utils/toastConfig";

SplashScreen.preventAutoHideAsync();

setDefaultProps(Text, {
  style: { fontFamily: "Outfit" },
});

const Layout = () => {
  const [loaded, error] = useFonts({
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
      <Stack>
        <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
      </Stack>
      <Toast config={toastConfig} />
    </GestureHandlerRootView>
  );
};

export default Layout;
