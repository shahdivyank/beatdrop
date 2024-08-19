import { View, Pressable, TextInput, InputAccessoryView } from "react-native";
import { Image, ImageSource } from "expo-image";
import Send from "@/assets/icons/Send.svg";
interface props {
  photo: ImageSource;
}

const Comment = ({ photo }: props) => {
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
          />
          <Pressable className="flex flex-col bg-beatdrop-primary rounded-full items-center justify-center w-12 h-12 pr-0.5">
            <Image source={Send} style={{ height: 20, width: 20 }} />
          </Pressable>
        </View>
      </View>
    </InputAccessoryView>
  );
};

export default Comment;
