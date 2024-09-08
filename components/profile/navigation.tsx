import { View, Text, Pressable } from "react-native";
import React from "react";

interface props {
  state: 1 | 0;
  setState: (value: 1 | 0) => void;
}

const Navigation = ({ state, setState }: props) => {
  return (
    <View className="flex flex-row justify-evenly mb-4">
      <Pressable
        onPress={() => setState(0)}
        className={`w-1/2 pb-1 items-center ${state === 0 ? "border-b-[3px] border-beatdrop-primary" : "border-b-2 border-transparent"}`}
      >
        <Text className={`font-semibold text-2xl `}>Drops</Text>
      </Pressable>

      <Pressable
        onPress={() => setState(1)}
        className={`w-1/2 pb-1 items-center ${state === 1 ? "border-b-[3px] border-beatdrop-primary" : "border-b-2 border-transparent"}`}
      >
        <Text className={`font-semibold text-2xl`}>Saved</Text>
      </Pressable>
    </View>
  );
};

export default Navigation;
