import { useRef, useMemo, useState, useCallback, useEffect } from "react";
import { Text, View } from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { Image } from "expo-image";
import Beat from "@/components/global/beat";
import moment from "moment";
import Search from "./search";
import { beatdrop } from "@/types";
import Toolbar from "./toolbar";
import Toaster from "@/utils/toast";
import Icon from "../Icon";
import MapView, { Marker } from "react-native-maps";
import PinImage from "@/assets/__mock__/pin.png";
import * as Location from "expo-location";
import { useDrops } from "@/hooks/useDrops";
import { Link } from "expo-router";
import { router } from "expo-router";
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
        preview,
      },
    }: item) => (
      <>
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
        <Link
          href={{
            pathname: "/[drop]",
            params: { drop: did },
          }}
        >
          <Beat
            song={song}
            image={image}
            artist={artist}
            onAdd={() => Toaster("BeatDrop Posted", "success")}
            preview={preview}
          />
        </Link>
        <View className="p-2">
          <Text className="line-clamp-2 truncate text-lg">{description}</Text>
          <Text className="mt-2 inline font-bold">Read More</Text>
        </View>
        <Text className="p-2">{moment(timestamp).fromNow()}</Text>
      </>
    ),
    [],
  );

  const map = useRef<MapView>(null);

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
            onPress={() => router.push(`/${drop.did}`)}
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
        <View className="flex items-center justify-between p-3">
          <Toolbar scope={scope} setScope={setScope} />
        </View>

        <BottomSheetFlatList
          data={drops}
          keyExtractor={({ did }) => did}
          renderItem={renderItem}
        />
      </BottomSheet>
    </View>
  );
};

export default DashboardScreen;
