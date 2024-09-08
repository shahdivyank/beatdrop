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
        <View className="flex h-full w-full items-center justify-start bg-black/25">
          <View className="flex h-[85%] w-full items-center justify-end">
            <View className="flex w-11/12 items-center justify-center rounded-lg bg-white p-3">
              <Text className="w-10/12 p-3 text-center text-xl">
                If you cancel, your progress will be discarded. Are you sure?
              </Text>
              <Pressable
                onPress={onSubmit}
                className="w-full border-y-[1px] border-[#EFEFEF] p-4"
              >
                <Text className="text-center text-xl text-beatdrop-danger">
                  Discard
                </Text>
              </Pressable>

              <Pressable onPress={() => setVisible(false)} className="p-4">
                <Text className="text-center text-xl">Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Cancel;
