import { View, Text } from 'react-native';

interface props {
  text: string;
  color: string;
}

const Tag = ({ text, color }: props) => {
  return (
    <View className={`${color} rounded-full px-3 py-2`}>
      <Text className="text-white">{text}</Text>
    </View>
  );
};

export default Tag;
