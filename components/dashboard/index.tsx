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
import { comment, beatdrop } from "@/types";
import Toolbar from "./toolbar";
import Toaster from "@/utils/toast";
import Comment from "@/components/dashboard/comment";
import Icon from "../Icon";
import MapView, { Marker } from "react-native-maps";
import PinImage from "@/assets/__mock__/pin.png";
import * as Location from "expo-location";
import { useDrops } from "@/hooks/useDrops";

interface item {
  item: beatdrop;
}

interface BeatdropState {
  drops: beatdrop[];
}

const DashboardScreen = () => {
  const ref = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["10%", "30%", "60%", "90%"], []);

  const [scope, setScope] = useState("Global");
  const [search, setSearch] = useState("");
  const [beat, setBeat] = useState<Record<string, never> | beatdrop>({});
  const [location, setLocation] = useState({
    latitude: 33.9737,
    longitude: -117.3281,
  });

  const { drops } = useDrops(({ drops }: BeatdropState) => ({ drops }));

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
        did,
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
            did,
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
            <View className="h-[50] w-[50] overflow-hidden rounded-full">
              <Image source={photo} style={{ height: 50, width: 50 }} />
            </View>
            <View className="gap-2">
              <View className="flex flex-row items-center gap-2">
                <Text className="text-2xl font-semibold">{name}</Text>
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
        <View className="p-2">
          <Text className="line-clamp-2 truncate text-lg">{description}</Text>
          <Text className="mt-2 inline font-bold">Read More</Text>
        </View>
        <Text className="p-2">{moment(timestamp).fromNow()}</Text>
      </Pressable>
    ),
    [],
  );

  const map = useRef<MapView>(null);

  const selectDrop = (drop: beatdrop) => {
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
        {drops.map((drop, index) => (
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
            <View className="rounded-full border-2 border-beatdrop-primary bg-beatdrop-primary/30 p-2">
              <View className="h-5 w-5 rounded-full border-2 border-white bg-beatdrop-primary" />
            </View>
          </Marker>
        )}
      </MapView>

      <Search search={search} setSearch={setSearch} />

      <BottomSheet ref={ref} snapPoints={snapPoints}>
        {Object.keys(beat).length === 0 && (
          <View className="flex items-center justify-between p-3">
            <Toolbar scope={scope} setScope={setScope} />
          </View>
        )}

        {Object.keys(beat).length === 0 ? (
          <BottomSheetFlatList
            data={drops}
            keyExtractor={({ did }) => did}
            renderItem={renderItem}
          />
        ) : (
          <BottomSheetScrollView className="m-2" stickyHeaderIndices={[2]}>
            <Icon name="Chevron_Left" size={24} onPress={() => setBeat({})} />
            <View className="flex flex-row justify-between p-2">
              <View className="flex flex-row items-center gap-3">
                <View className="h-[50] w-[50] overflow-hidden rounded-full">
                  <Image
                    source={beat.photo}
                    style={{ height: 50, width: 50 }}
                  />
                </View>
                <View className="gap-2">
                  <View className="flex flex-row items-center gap-2">
                    <Text className="text-2xl font-semibold">{beat.name}</Text>
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

            <View className="gap-4 p-2">
              {beat.comments?.map(
                (
                  { timestamp, photo, likes, username, comment }: comment,
                  index,
                ) => (
                  <View className="flex flex-row" key={index}>
                    <View className="h-[40px] w-[40px] overflow-hidden rounded-full">
                      <Image source={photo} style={{ height: 40, width: 40 }} />
                    </View>
                    <View className="flex-1 px-2">
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
                ),
              )}
            </View>
            <Comment beat={beat} setBeat={setBeat} />
          </BottomSheetScrollView>
        )}
      </BottomSheet>
    </View>
  );
};

export default DashboardScreen;
