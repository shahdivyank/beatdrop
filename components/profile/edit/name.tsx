import { View, Text, TextInput } from "react-native";
import { useUser } from "@/hooks/useUser";
import Layout from "./layout";
import { useState } from "react";

const MAX_LENGTH = 30;

const Name = () => {
  const { name, setAttribute } = useUser();
  const [input, setInput] = useState(name);

  const onSubmit = () => {
    setAttribute("name", input);
  };

  return (
    <Layout title="Name" callback={onSubmit}>
      <View className="mt-8">
        <TextInput
          maxLength={MAX_LENGTH}
          value={input}
          onChangeText={setInput}
          className="w-full rounded border-[1px] border-beatdrop-border p-4"
        />
        <Text className="text-beatdrop-profile-secondary mt-2 text-right">
          {input.length} / {MAX_LENGTH}
        </Text>

        <Text className="text-beatdrop-profile-secondary mt-4 text-xl">
          Help people discover your account by using the name you are commonly
          addressed by. You can change your name only once every 7 days.
        </Text>
      </View>
    </Layout>
  );
};

export default Name;
