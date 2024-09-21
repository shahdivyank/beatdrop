import { View, Text, TextInput } from "react-native";
import { useUser } from "@/hooks/useUser";
import Layout from "./layout";
import { useState } from "react";

const MAX_LENGTH = 150;

const Bio = () => {
  const { bio, setAttribute } = useUser();
  const [input, setInput] = useState(bio);

  const onSubmit = () => {
    setAttribute("bio", input);
  };

  return (
    <Layout title="Bio" callback={onSubmit}>
      <View className="mt-8">
        <TextInput
          maxLength={MAX_LENGTH}
          value={input}
          onChangeText={setInput}
          className="h-[100] w-full rounded border-[1px] border-beatdrop-border p-4"
          keyboardType="default"
          multiline={true}
          blurOnSubmit={true}
          returnKeyType="done"
        />
        <Text className="mt-2 text-right text-beatdrop-profile-secondary">
          {input.length} / {MAX_LENGTH}
        </Text>
      </View>
    </Layout>
  );
};

export default Bio;
