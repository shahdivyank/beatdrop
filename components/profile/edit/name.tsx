import { View, Text, TextInput } from "react-native";
import { useUser } from "@/hooks/useUser";
import Layout from "./layout";
import { useState } from "react";
import { schema } from "@/schemas/users";
import { submit } from "@/utils/profile";
import Icon from "@/components/Icon";

const MAX_LENGTH = 30;

const Name = () => {
  const { name, setAttribute } = useUser();
  const [input, setInput] = useState(name);
  const [error, setError] = useState("");

  const onSubmit = () => {
    const err = submit({
      data: { name: input },
      schema,
      field: "name",
    });
    if (err) {
      setError(err);
      return false;
    }
    setAttribute("name", input);
    return true;
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
        <View className="mt-2 flex flex-row">
          {error && (
            <Text className="align-top text-beatdrop-danger">{error}</Text>
          )}
          <Text className="absolute right-0 top-0 text-beatdrop-profile-secondary">
            {input.length} / {MAX_LENGTH}
          </Text>
        </View>

        <Text className="mt-4 text-xl text-beatdrop-profile-secondary">
          Help people discover your account by using the name you are commonly
          addressed by. You can change your name only once every 7 days.
        </Text>
      </View>
    </Layout>
  );
};

export default Name;
