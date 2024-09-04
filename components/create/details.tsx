import Tag from "@/components/global/tag";
import Beat from "@/components/global/beat";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ImageBackground,
} from "react-native";
import { useEffect, useState } from "react";
import { beat } from "@/types";
import { Image } from "expo-image";
import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";
import Icon from "../Icon";
import { useUser } from "@/hooks/useUser";
import { useDrops } from "@/hooks/useDrops";
import { router } from "expo-router";
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
  const [coordinates, setCoordinates] = useState({
    longitude: 0.0,
    latitude: 0.0,
  });

  const user = useUser((user) => user);
  const { addDrop } = useDrops(({ addDrop }) => ({ addDrop }));

  const handleAdd = () => {
    addTag(tag);
    setTag("");
  };

  const onSubmit = () => {
    const drop = {
      ...user,
      song,
      artist,
      image,
      tags: tags,
      description: description,
      comments: [],
      timestamp: new Date(),
      likes: 0,
      location,
      coordinates,
      did: String(Math.random()),
    };

    addDrop(drop);
    setDescription("");
    handleBack();

    router.replace("/dashboard");
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

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      setCoordinates({ latitude, longitude });

      const reverseGeocode = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
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
      quality: 0.1,
      allowsMultipleSelection: true,
      selectionLimit: 3,
    });

    if (response.canceled || !response.assets) {
      return;
    }

    const allImages = [...response.assets, ...images];

    setImages(allImages);
  };

  const handleRemoveImage = (selectedImage: ImagePicker.ImagePickerAsset) => {
    const newImages = images.filter((image) => image.uri !== selectedImage.uri);

    setImages(newImages);
  };

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
        <ScrollView horizontal>
          {images.map((image) => (
            <ImageBackground
              className=" w-screen-2/5 h-2/3 mr-3 rounded-lg overflow-hidden"
              key={image.uri}
              source={image}
              alt="Selected Image"
            >
              <Pressable
                onPress={() => handleRemoveImage(image)}
                className="absolute top-1 right-1 rounded-full bg-black"
              >
                <Icon size={28} name="Close_SM" color="white"></Icon>
              </Pressable>
            </ImageBackground>
          ))}
        </ScrollView>
      </View>

      <Pressable
        onPress={onSubmit}
        className="bg-beatdrop-primary py-4 rounded-full w-full absolute bottom-4"
      >
        <Text className="text-center text-white text-xl">Post Beatdrop</Text>
      </Pressable>
    </View>
  );
};

export default Details;
