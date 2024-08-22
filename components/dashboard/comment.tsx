import { View, Pressable, TextInput, InputAccessoryView } from "react-native";
import { Image, ImageSource } from "expo-image";
import Send from "@/assets/icons/Send.svg";
import { beat, drop, comment } from "@/types";
import { useState } from "react";
interface props {
  photo: ImageSource;
  beat: Record<string, never> | (beat & drop);
  setBeat: any;
}

const Comment = ({ photo, beat, setBeat }: props) => {
  const [message, setMessage] = useState("");

  const handlePress = () => {
    if (message.length === 0) return;
    console.log(message);
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
            source={photo}
            style={{ height: 35, width: 35, borderRadius: 999, marginLeft: 4 }}
          />
          <TextInput
            className="placeholder:text-beatdrop-placeholder w-9/12 pl-2"
            placeholder="Write a comment"
            onChangeText={setMessage}
          />
          <Pressable
            className="flex flex-col bg-beatdrop-primary rounded-full items-center justify-center p-3"
            onPress={handlePress}
          >
            <Image source={Send} style={{ height: 20, width: 20 }} />
          </Pressable>
        </View>
      </View>
    </InputAccessoryView>
  );
};

export default Comment;
