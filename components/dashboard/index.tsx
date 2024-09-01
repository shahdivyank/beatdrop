import { useRef, useMemo, useState, useCallback, useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import { Image } from "expo-image";
import Beat from "@/components/global/beat";
import moment from "moment";
import Search from "./search";
import { comment, drop, beat } from "@/types";
import Toolbar from "./toolbar";
import Toaster from "@/utils/toast";
import Comment from "@/components/dashboard/comment";
import Icon from "../Icon";
import MapView, { Marker } from "react-native-maps";
import PinImage from "@/assets/__mock__/pin.png";
import * as Location from "expo-location";

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
    name: "Robert Lerias Jr.",
    username: "robert.lerias",
    location: "San Jose, CA",
    photo: {
      uri: "https://media.licdn.com/dms/image/C5603AQFRF-WuzzVSPw/profile-displayphoto-shrink_200_200/0/1648079904789?e=2147483647&v=beta&t=iQ5MB_agi9aY0JUDxSXlAEa3icdQWn8l9twByRP5ItQ",
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
    comments: [],
    coordinates: {
      latitude: 37.330048,
      longitude: -121.955171,
    },
  },
  {
    uid: "1",
    name: "Vincent Raimondi",
    username: "vincent.raimondi",
    location: "San Francisco, CA",
    photo: {
      uri: "https://media.licdn.com/dms/image/D5603AQGrXfnyW2o10g/profile-displayphoto-shrink_200_200/0/1691721890338?e=2147483647&v=beta&t=ZJss3qCbRLmbHVGzYlXdFJYd7WQhLOk35IrFSQPICR4",
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
    coordinates: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
  },
  {
    uid: "2",
    name: "Divyank Shah",
    username: "divyank.shah",
    location: "Riverside, CA",
    photo: {
      uri: "https://media.licdn.com/dms/image/C5603AQGGCb3sfU37yw/profile-displayphoto-shrink_200_200/0/1643607680906?e=2147483647&v=beta&t=3O3YNLDDQJ8kjWiFRtLQJRR-gj5JRN6hd6eerzGHdnY",
    },
    timestamp: new Date("2024-02-03T03:24:00"),
    likes: 57,
    image: {
      uri: "https://i.scdn.co/image/ab67616d0000b273726d48d93d02e1271774f023",
    },
    song: "Mockingbird",
    artist: "Eminem",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    comments,
    coordinates: {
      latitude: 33.9737,
      longitude: -117.3281,
    },
  },
];

const DashboardScreen = () => {
  const ref = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["10%", "30%", "60%", "90%"], []);

  const [scope, setScope] = useState("Global");
  const [search, setSearch] = useState("");
  const [beat, setBeat] = useState<Record<string, never> | (beat & drop)>({});
  const [location, setLocation] = useState({
    latitude: 33.9737,
    longitude: -117.3281,
  });

  useEffect(() => {
    const getCurrLocation = async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});

      setLocation({
        longitude,
        latitude,
      });
    };

    getCurrLocation();
  }, []);

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
        coordinates,
      },
    }: item) => (
      <Pressable
        className="p-2"
        onPress={() =>
          selectDrop({
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
            coordinates,
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
            <Icon name="Heart_01" size={24} />
            <Icon name="Chat" size={24} />
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
    []
  );

  const map = useRef<MapView>(null);

  const selectDrop = (drop: beat & drop) => {
    setBeat(drop);

    const {
      coordinates: { longitude, latitude },
    } = drop;

    map.current?.animateToRegion({
      longitude,
      latitude: latitude - 0.004,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });

    ref.current?.snapToPosition("60%");
  };

  return (
    <View className="flex-1">
      <MapView
        ref={map}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        {beats.map((drop, index) => (
          <Marker
            coordinate={{
              latitude: drop.coordinates.latitude,
              longitude: drop.coordinates.longitude,
            }}
            key={index}
            onPress={() => selectDrop(drop)}
          >
            <Image source={PinImage} style={{ width: 50, height: 50 }} />
          </Marker>
        ))}

        {location && (
          <Marker coordinate={location}>
            <View className="border-2 border-beatdrop-primary rounded-full p-2 bg-beatdrop-primary/30">
              <View className="w-5 h-5 bg-beatdrop-primary rounded-full border-2 border-white" />
            </View>
          </Marker>
        )}
      </MapView>

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
              <Icon name="Chevron_Left" size={24} onPress={() => setBeat({})} />
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
                  <Icon name="Heart_01" size={24} />
                  <Icon name="Chat" size={24} />
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
                    index
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
                          <Text>{username}</Text>
                          <Icon name="Circle" size={8} className="mx-1 ml-2" />
                          <Text className="p-2">
                            {moment(timestamp).fromNow()}
                          </Text>
                        </View>
                        <Text>{comment}</Text>
                      </View>
                      <View className="flex items-center gap-2">
                        <Icon name="Heart_01" size={24} />

                        <Text className="">{likes}</Text>
                      </View>
                    </View>
                  )
                )}
              </View>
            </View>
            <Comment photo={comments[2].photo} beat={beat} setBeat={setBeat} />
          </BottomSheetScrollView>
        )}
      </BottomSheet>
    </View>
  );
};

export default DashboardScreen;
