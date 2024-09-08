import { Modal, Pressable, Text, View } from "react-native";

interface props {
  visible: boolean;
  setVisible: (value: boolean) => void;
  onSubmit: () => void;
}

const Cancel = ({ visible, setVisible, onSubmit }: props) => {
  return (
    <View className="flex-1 items-center justify-center">
      <Modal visible={visible} transparent>
        <View className="w-full h-full flex items-center justify-start bg-black/25">
          <View className="h-[85%] flex items-center justify-end w-full">
            <View className="bg-white w-11/12 flex items-center justify-center p-3 rounded-lg">
              <Text className="text-xl text-center w-10/12 p-3">
                If you cancel, your progress will be discarded. Are you sure?
              </Text>
              <Pressable
                onPress={onSubmit}
                className="border-y-[1px] border-[#EFEFEF] p-4 w-full"
              >
                <Text className="text-xl text-beatdrop-danger text-center">
                  Discard
                </Text>
              </Pressable>

              <Pressable onPress={() => setVisible(false)} className="p-4">
                <Text className="text-xl text-center">Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Cancel;
