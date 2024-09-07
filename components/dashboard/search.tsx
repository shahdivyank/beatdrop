import { View, TextInput } from 'react-native';
import Icon from '../Icon';

interface props {
  search: string;
  setSearch: (value: string) => void;
}

const Search = ({ search, setSearch }: props) => {
  return (
    <View className="absolute left-0 top-16 w-full items-center">
      <View className="flex w-10/12 flex-row gap-2 rounded-full bg-white px-3 py-3">
        <Icon name="Search_Magnifying_Glass" size={24} />
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search"
          className="placeholder:text-beatdrop-placeholder"
        />
      </View>
    </View>
  );
};

export default Search;
