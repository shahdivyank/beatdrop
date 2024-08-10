import { useRef, useMemo, useState, useCallback } from "react";
import { Text, View } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import Toolbar from "./toolbar";
import { Image, ImageSource } from "expo-image";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Beat from "@/components/global/beat";
import { beat } from "@/types/beat";
import moment from "moment";
import MapView from "react-native-maps";
import Search from "./search";

interface drop {
  uid: string;
  name: string;
  username: string;
  location: string;
  timestamp: Date;
  photo: ImageSource;
  description: string;
  likes: number;
}

interface item {
  item: beat & drop;
}

const beats: (drop & beat)[] = [
  {
    uid: "0",
    name: "Divyank Shah",
    username: "divyank.shah",
    location: "Fremont, CA",
    photo: {
      uri: "https://media.licdn.com/dms/image/C5603AQGGCb3sfU37yw/profile-displayphoto-shrink_200_200/0/1643607680906?e=2147483647&v=beta&t=3O3YNLDDQJ8kjWiFRtLQJRR-gj5JRN6hd6eerzGHdnY",
    },
    timestamp: new Date("2024-08-09T03:24:00"),
    likes: 100,
    image: {
      uri: "https://images.genius.com/839942f1ff5a5b7a21e8ca9813f8c446.1000x1000x1.png",
    },
    song: "I Want That",
    artist: "G(I)-DLE",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    uid: "1",
    name: "Divyank Shah",
    username: "divyank.shah",
    location: "Fremont, CA",
    photo: {
      uri: "https://media.licdn.com/dms/image/C5603AQGGCb3sfU37yw/profile-displayphoto-shrink_200_200/0/1643607680906?e=2147483647&v=beta&t=3O3YNLDDQJ8kjWiFRtLQJRR-gj5JRN6hd6eerzGHdnY",
    },
    timestamp: new Date("2024-08-03T03:24:00"),
    likes: 57,
    image: {
      uri: "https://i1.sndcdn.com/artworks-taH3WgxbicnX-0-t500x500.jpg",
    },
    song: "Rooftop",
    artist: "Flowsik",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

const DashboardScreen = () => {
  const ref = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["30%", "60%", "90%"], []);

  const [scope, setScope] = useState("Global");
  const [search, setSearch] = useState("");

  const renderItem = useCallback(
    ({
      item: {
        name,
        username,
        location,
        photo,
        timestamp,
        likes,
        image,
        song,
        artist,
        description,
      },
    }: item) => (
      <View className="p-2">
        <View className="flex flex-row justify-between p-2">
          <View className="flex flex-row gap-3">
            <View className="w-[50] h-[50] rounded-full overflow-hidden">
              <Image source={photo} style={{ height: 50, width: 50 }} />
            </View>
            <View className="gap-2">
              <View className="flex flex-row items-center gap-2">
                <Text className="font-semibold text-2xl">{name}</Text>
                <Text className="text-beatdrop-placeholder">@{username}</Text>
              </View>
              <Text className="font-semibold">{location}</Text>
            </View>
          </View>
          <View className="flex flex-row gap-2">
            <AntDesign name="hearto" size={24} color="black" />
            <FontAwesome name="comment-o" size={24} color="black" />
          </View>
        </View>
        <Beat
          song={song}
          image={image}
          artist={artist}
          onAdd={() => console.log("ADDED SONG")}
        />
        <Text className="p-2 text-lg">{description}</Text>
        <Text className="p-2">{moment(timestamp).fromNow()}</Text>
      </View>
    ),
    []
  );

  return (
    <View className="flex-1">
      <MapView
        style={{
          height: "100%",
          width: "100%",
        }}
      />

      <Search search={search} setSearch={setSearch} />

      <BottomSheet ref={ref} snapPoints={snapPoints}>
        <View className="p-3 flex justify-between items-center">
          <Toolbar scope={scope} setScope={setScope} />
        </View>
        <BottomSheetFlatList
          data={beats}
          keyExtractor={({ uid }) => uid}
          renderItem={renderItem}
        />
      </BottomSheet>
    </View>
  );
};

export default DashboardScreen;
