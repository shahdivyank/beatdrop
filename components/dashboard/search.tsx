import { View, TextInput } from "react-native";
import Icon from "../Icon";

interface props {
  search: string;
  setSearch: (value: string) => void;
}

const Search = ({ search, setSearch }: props) => {
  return (
    <View className="absolute top-16 left-0 w-full items-center">
      <View className=" bg-white w-10/12 flex flex-row py-3 rounded-full px-3 gap-2">
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
