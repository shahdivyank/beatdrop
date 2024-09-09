import { View, Text, Pressable } from "react-native";
import React from "react";

interface props {
  scope: string;
  setScope: (value: string) => void;
}

const scopes = ["Global", "Friends", "My Drops"];

const Toolbar = ({ scope, setScope }: props) => {
  return (
    <View className="flex w-full flex-row gap-3">
      {scopes.map((current, index) => (
        <Pressable
          key={index}
          onPress={() => setScope(current)}
          className={`${scope === current && "border-beatdrop-primary bg-beatdrop-primary"} rounded-full border-2 border-beatdrop-border px-3 py-2`}
        >
          <Text
            className={`${scope === current && "text-white"} font-semibold`}
          >
            {current}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default Toolbar;
