import Tag from "@/components/global/tag";
import Beat from "@/components/global/beat";
import { View, Text, TextInput, Pressable, ImageBackground } from "react-native";
import { useEffect, useState } from "react";
import { beat } from "@/types";
import { Image } from "expo-image";
import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";
import Icon from "../Icon";
import { ScrollView } from "react-native-gesture-handler";

const colors = [
  "bg-beatdrop-tag-orange",
  "bg-beatdrop-tag-green",
  "bg-beatdrop-tag-purple",
  "bg-beatdrop-tag-pink",
  "bg-beatdrop-tag-yellow",
];

interface props {
  beat: beat;
  handleBack: () => void;
  description: string;
  setDescription: (value: string) => void;
  addTag: (value: string) => void;
  tags: string[];
}

const Details = ({
  beat: { song, artist, image },
  handleBack,
  description,
  setDescription,
  tags,
  addTag,
}: props) => {
  const [tag, setTag] = useState("");
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAdd = () => {
    addTag(tag);
    setTag("");
  };

  useEffect(() => {
    const getCurrLocation = async () => {
      setLoading(true);
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permission Denied");
        setLoading(false);
        return;
      }

      const location = await Location.getCurrentPositionAsync({});

      //get city and state
      const reverseGeocode = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      setLocation(`${reverseGeocode[0].city}, ${reverseGeocode[0].region}`);
      setLoading(false);
    };

    getCurrLocation();
  }, []);

  const [images, setImages] = useState<ImagePicker.ImagePickerAsset[]>([]);

  const handlePromptImage = async () => {
    const response = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
      allowsMultipleSelection: true,
      selectionLimit: 3,
    });

    if (response.canceled || !response.assets) {
      return;
    }

    const allImages = [...response.assets, ...images];

    setImages(allImages);
  };

  const handleRemoveImage = async (selectedImage: ImagePicker.ImagePickerAsset) => {
    const newImages = images.filter(function(image, index) { return image.uri !== selectedImage.uri });

    setImages(newImages);
  }

  return (
    <View className="w-full">
      <View className="p-3 h-full w-full gap-4">
        <View className="flex flex-row justify-between items-center">
          <Icon name="Chevron_Left" size={24} onPress={handleBack} />
          <Text className="font-semibold text-xl">New Beatdrop</Text>
          <Text>Cancel</Text>
        </View>

        <Beat song={song} artist={artist} image={image} />

        <View className="flex flex-row gap-3 h-1/6">
          <Icon name="Text_Align_Left" size={24} />
          <TextInput
            className="placeholder:text-beatdrop-placeholder h-full w-11/12 pt-0"
            onChangeText={setDescription}
            value={description}
            placeholder="What makes this song so special?"
            keyboardType="default"
            multiline={true}
            blurOnSubmit={true}
            returnKeyType="done"
          />
        </View>

        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-3">
            <Icon name="Map_Pin" size={24} />
            <Text className={loading ? "text-beatdrop-placeholder" : ""}>
              {loading ? "Loading ..." : location}
            </Text>
          </View>
          <Icon name="Close_SM" size={24} />
        </View>

        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-3">
            <Icon name="Users" size={24} />
            <Text>Friends Only</Text>
          </View>
          <Icon name="Chevron_Down" size={24} />
        </View>

        <View className="flex flex-row items-center justify-between">
          <View className="flex flex-row items-center gap-3">
            <Icon name="Tag" size={24} />
            <TextInput
              className="placeholder:text-beatdrop-placeholder"
              onChangeText={setTag}
              value={tag}
              placeholder="Add Tags"
              keyboardType="default"
            />
          </View>
          <Icon name="Add_Plus" size={24} onPress={handleAdd} />
        </View>
        <View className="flex flex-row gap-3 mt-2">
          {tags.map((tag, index) => (
            <Tag text={tag} color={colors[index]} key={index} />
          ))}
        </View>
        <View className="flex flex-row flex-wrap gap-2 items-center justify-between">
          <Icon size={28} name="Camera" />
          <Pressable
            onPress={handlePromptImage}
            className="flex flex-row items-center gap-2 rounded-full border border-[#EFEFEF]"
          >
            <Text className="text-center text-xl px-24 py-2">
              Upload Photos
            </Text>
          </Pressable>
        </View>
        <ScrollView horizontal contentContainerStyle={{ columnGap: 8 }}>
          {images.map((image) => {
            return (
              <View>
                <ImageBackground
                  key={image.uri}
                  source={{ uri: image.uri }}
                  style={{ width: 140, height: 140, borderRadius: 8, overflow: "hidden" }}
                  alt="Selected Image"
                >
                <Pressable onPress={() => handleRemoveImage(image)} className="absolute top-1 right-1 rounded-full bg-black">
                  <Icon size={28} name="Close_SM" color={'#EFEFEF'}></Icon>
                </Pressable>
                </ImageBackground>
              </View>
            );
          })}
        </ScrollView>
      </View>

      <Pressable className="bg-beatdrop-primary py-4 rounded-full w-full absolute bottom-4">
        <Text className="text-center text-white text-xl">Post Beatdrop</Text>
      </Pressable>
    </View>
  );
};

export default Details;
