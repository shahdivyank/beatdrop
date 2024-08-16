import { View, Text, Pressable } from 'react-native';
import React from 'react';

interface props {
  scope: string;
  setScope: (value: string) => void;
}

const scopes = ['Global', 'Friends', 'My Drops'];

const Toolbar = ({ scope, setScope }: props) => {
  return (
    <View className="flex flex-row gap-3 w-full">
      {scopes.map((current, index) => (
        <Pressable
          key={index}
          onPress={() => setScope(current)}
          className={`${scope === current && 'bg-beatdrop-primary border-beatdrop-primary'} border-2 rounded-full px-3 py-2 border-beatdrop-border`}
        >
          <Text
            className={`${scope === current && 'text-white'} font-semibold`}
          >
            {current}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default Toolbar;
