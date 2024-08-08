import { Text, SafeAreaView } from "react-native";
import React from "react";
import { Link } from "expo-router";

const DashboardScreen = () => {
  return (
    <SafeAreaView>
      <Text className="bg-red-500">DashboardScreen</Text>
      <Text>
        Note: Above Text should have a red background, otherwise Tailwind is not
        loaded properly!
      </Text>
      <Link href="/">CLICK ME TO GO TO HOME</Link>
    </SafeAreaView>
  );
};

export default DashboardScreen;
