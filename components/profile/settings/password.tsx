import { View, Text, TextInput } from "react-native";
import { useUser } from "@/hooks/useUser";
import Layout from "./layout";
import { useState } from "react";
import { schema } from "@/schemas/users";
import { submit } from "@/utils/profile";
import Icon from "@/components/Icon";

const MAX_LENGTH = 30;

const Password = () => {
  const { password, setAttribute } = useUser();
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const onSubmit = () => {};

  return (
    <Layout title="Change Password" callback={onSubmit}>
      <View className="mt-12">
        <TextInput
          placeholder="Current Password"
          value={input}
          onChangeText={setInput}
          className="my-4 w-full rounded border-[1px] border-beatdrop-border p-4"
        />

        <TextInput
          value={input}
          onChangeText={setInput}
          className="my-4 w-full rounded border-[1px] border-beatdrop-border p-4"
        />

        <TextInput
          value={input}
          onChangeText={setInput}
          className="my-4 w-full rounded border-[1px] border-beatdrop-border p-4"
        />
      </View>
    </Layout>
  );
};

export default Password;
