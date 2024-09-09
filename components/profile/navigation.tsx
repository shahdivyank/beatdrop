import { View, Text, Pressable } from "react-native";
import React from "react";

interface props {
  state: 1 | 0;
  setState: (value: 1 | 0) => void;
}

const Navigation = ({ state, setState }: props) => {
  return (
    <View className="mb-4 flex flex-row justify-evenly">
      <Pressable
        onPress={() => setState(0)}
        className={`w-1/2 items-center pb-1 ${state === 0 ? "border-b-[3px] border-beatdrop-primary" : "border-b-2 border-transparent"}`}
      >
        <Text className={`text-2xl font-semibold`}>Drops</Text>
      </Pressable>

      <Pressable
        onPress={() => setState(1)}
        className={`w-1/2 items-center pb-1 ${state === 1 ? "border-b-[3px] border-beatdrop-primary" : "border-b-2 border-transparent"}`}
      >
        <Text className={`text-2xl font-semibold`}>Saved</Text>
      </Pressable>
    </View>
  );
};

export default Navigation;
