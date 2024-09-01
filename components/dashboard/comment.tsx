import { View, Pressable, TextInput, InputAccessoryView } from "react-native";
import { Image } from "expo-image";
import { beat, drop, comment } from "@/types";
import { useState } from "react";
import Icon from "../Icon";
import { useUser } from "@/hooks/useUser";
interface props {
  beat: Record<string, never> | (beat & drop);
  setBeat: any;
}

const Comment = ({ beat, setBeat }: props) => {
  const [message, setMessage] = useState("");

  const { image } = useUser(({ image }) => ({ image }));

  const handlePress = () => {
    if (message.length === 0) return;

    const NEWCOMMENT: comment = {
      timestamp: new Date(),
      username: "bobby",
      likes: 150,
      comment: message,
      photo: {
        uri: "https://media.licdn.com/dms/image/C5603AQFRF-WuzzVSPw/profile-displayphoto-shrink_200_200/0/1648079904789?e=2147483647&v=beta&t=iQ5MB_agi9aY0JUDxSXlAEa3icdQWn8l9twByRP5ItQ",
      },
    };

    setBeat({
      ...beat,
      comments: [NEWCOMMENT, ...(beat.comments ? beat.comments : [])],
    });
  };
  return (
    <InputAccessoryView backgroundColor="white">
      <View className="bg-white p-2 border-t border-beatdrop-border/50 flex-row items-center justify-between">
        <View className="w-full flex flex-row items-center justify-between">
          <Image
            source={image}
            style={{ height: 35, width: 35, borderRadius: 999, marginLeft: 4 }}
          />
          <TextInput
            className="placeholder:text-beatdrop-placeholder w-9/12 pl-2"
            placeholder="Write a comment"
            onChangeText={setMessage}
          />
          <Pressable
            className="flex flex-col bg-beatdrop-primary rounded-full items-center justify-center p-2"
            onPress={handlePress}
          >
            <Icon name="Paper_Plane" size={24} color="white" />
          </Pressable>
        </View>
      </View>
    </InputAccessoryView>
  );
};

export default Comment;
