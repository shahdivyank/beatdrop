import { SafeAreaView, View } from "react-native";
import React from "react";
import Header from "./header";
import Drops from "./drops";

const ProfileScreen = () => {
  return (
    <SafeAreaView className="flex items-center justify-center">
      <View className="w-11/12">
        <Header />
        <Drops />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
