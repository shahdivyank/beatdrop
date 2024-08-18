import { useRef, useMemo, useState, useCallback } from "react";
import { Pressable, Text, View } from "react-native";
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { Image } from "expo-image";
import Like from "@/assets/icons/Like.svg";
import Comment from "@/assets/icons/Comment.svg";
import Beat from "@/components/global/beat";
import moment from "moment";
import MapView from "react-native-maps";
import Search from "./search";
import Entypo from "@expo/vector-icons/Entypo";
import { comment, drop, beat } from "@/types";
import Toolbar from "./toolbar";
import Toaster from "@/utils/toast";

const comments: comment[] = [
  {
    timestamp: new Date("2024-08-09T03:24:00"),
    username: "bobbyyy57",
    likes: 190,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis, justo ut facilisis mollis, turpis enim euismod ipsum, bibendum ",
    photo: {
      uri: "https://media.licdn.com/dms/image/C5603AQFRF-WuzzVSPw/profile-displayphoto-shrink_200_200/0/1648079904789?e=2147483647&v=beta&t=iQ5MB_agi9aY0JUDxSXlAEa3icdQWn8l9twByRP5ItQ",
    },
  },
  {
    timestamp: new Date("2024-08-02T03:24:00"),
    username: "bobbyyy57",
    likes: 150,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis, justo ut facilisis mollis, turpis enim euismod ipsum, bibendum ",
    photo: {
      uri: "https://media.licdn.com/dms/image/C5603AQFRF-WuzzVSPw/profile-displayphoto-shrink_200_200/0/1648079904789?e=2147483647&v=beta&t=iQ5MB_agi9aY0JUDxSXlAEa3icdQWn8l9twByRP5ItQ",
    },
  },
  {
    timestamp: new Date("2024-08-02T03:24:00"),
    username: "bobbyyy57",
    likes: 150,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis, justo ut facilisis mollis, turpis enim euismod ipsum, bibendum ",
    photo: {
      uri: "https://media.licdn.com/dms/image/C5603AQFRF-WuzzVSPw/profile-displayphoto-shrink_200_200/0/1648079904789?e=2147483647&v=beta&t=iQ5MB_agi9aY0JUDxSXlAEa3icdQWn8l9twByRP5ItQ",
    },
  },
  {
    timestamp: new Date("2024-08-01T03:24:00"),
    username: "bobbyyy57",
    likes: 150,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis, justo ut facilisis mollis, turpis enim euismod ipsum, bibendum ",
    photo: {
      uri: "https://media.licdn.com/dms/image/C5603AQFRF-WuzzVSPw/profile-displayphoto-shrink_200_200/0/1648079904789?e=2147483647&v=beta&t=iQ5MB_agi9aY0JUDxSXlAEa3icdQWn8l9twByRP5ItQ",
    },
  },
  {
    timestamp: new Date("2024-07-01T03:24:00"),
    username: "bobbyyy57",
    likes: 150,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis, justo ut facilisis mollis, turpis enim euismod ipsum, bibendum ",
    photo: {
      uri: "https://media.licdn.com/dms/image/C5603AQFRF-WuzzVSPw/profile-displayphoto-shrink_200_200/0/1648079904789?e=2147483647&v=beta&t=iQ5MB_agi9aY0JUDxSXlAEa3icdQWn8l9twByRP5ItQ",
    },
  },
];

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
    comments: comments.slice(0, 1),
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
    comments,
  },
];

const DashboardScreen = () => {
  const ref = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["30%", "60%", "90%"], []);

  const [scope, setScope] = useState("Global");
  const [search, setSearch] = useState("");
  const [beat, setBeat] = useState<Record<string, never> | (beat & drop)>({});

  const renderItem = useCallback(
    ({
      item: {
        uid,
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
        comments,
      },
    }: item) => (
      <Pressable
        className="p-2"
        onPress={() =>
          setBeat({
            uid,
            name,
            username,
            location,
            photo,
            timestamp,
            image,
            song,
            artist,
            description,
            comments,
            likes,
          })
        }
      >
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
            <Image source={Like} style={{ width: 22, height: 22 }} />
            <Image source={Comment} style={{ width: 22, height: 22 }} />
          </View>
        </View>
        <Beat
          song={song}
          image={image}
          artist={artist}
          onAdd={() => Toaster("BeatDrop Posted", "success")}
        />
        <Text className="p-2 text-lg">{description}</Text>
        <Text className="p-2">{moment(timestamp).fromNow()}</Text>
      </Pressable>
    ),
    [],
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
        {Object.keys(beat).length === 0 && (
          <View className="p-3 flex justify-between items-center">
            <Toolbar scope={scope} setScope={setScope} />
          </View>
        )}

        {Object.keys(beat).length === 0 ? (
          <BottomSheetFlatList
            data={beats}
            keyExtractor={({ uid }) => uid}
            renderItem={renderItem}
          />
        ) : (
          <BottomSheetScrollView>
            <View className="p-2">
              <Entypo
                name="chevron-left"
                size={24}
                color="black"
                onPress={() => setBeat({})}
              />
              <View className="flex flex-row justify-between p-2">
                <View className="flex flex-row items-center gap-3">
                  <View className="w-[50] h-[50] rounded-full overflow-hidden">
                    <Image
                      source={beat.photo}
                      style={{ height: 50, width: 50 }}
                    />
                  </View>
                  <View className="gap-2">
                    <View className="flex flex-row items-center gap-2">
                      <Text className="font-semibold text-2xl">
                        {beat.name}
                      </Text>
                      <Text className="text-beatdrop-placeholder">
                        @{beat.username}
                      </Text>
                    </View>
                    <Text className="font-semibold">{beat.location}</Text>
                  </View>
                </View>
                <View className="flex flex-row gap-2">
                  <Image source={Like} style={{ width: 22, height: 22 }} />
                  <Image source={Comment} style={{ width: 22, height: 22 }} />
                </View>
              </View>
              <Beat
                song={beat.song}
                image={beat.image}
                artist={beat.artist}
                onAdd={() => Toaster("BeatDrop Posted", "success")}
              />
              <Text className="p-2 text-lg">{beat.description}</Text>
              <Text className="p-2">{moment(beat.timestamp).fromNow()}</Text>

              <View className="p-2 gap-4">
                {beat.comments?.map(
                  (
                    { timestamp, photo, likes, username, comment }: comment,
                    index,
                  ) => (
                    <View className="flex flex-row" key={index}>
                      <View className="rounded-full overflow-hidden h-[50px] w-[50px]">
                        <Image
                          source={photo}
                          style={{ height: 50, width: 50 }}
                        />
                      </View>
                      <View className="px-2 flex-1">
                        <View className="flex flex-row items-center">
                          <Text className="-mr-1">{username}</Text>
                          <Entypo name="dot-single" size={24} color="black" />
                          <Text className="p-2 -ml-2">
                            {moment(timestamp).fromNow()}
                          </Text>
                        </View>
                        <Text>{comment}</Text>
                      </View>
                      <View className="flex items-center gap-2">
                        <Image
                          source={Like}
                          style={{ width: 22, height: 22 }}
                        />
                        <Text className="">{likes}</Text>
                      </View>
                    </View>
                  ),
                )}
              </View>
            </View>
          </BottomSheetScrollView>
        )}
      </BottomSheet>
    </View>
  );
};

export default DashboardScreen;
