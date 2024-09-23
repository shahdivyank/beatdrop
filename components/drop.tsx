import { useLocalSearchParams, router } from "expo-router";
import { Text, View } from "react-native";
import { useRef, useMemo, useEffect, useState } from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { Image } from "expo-image";
import Beat from "@/components/global/beat";
import moment from "moment";
import { comment, beatdrop } from "@/types";
import Toaster from "@/utils/toast";
import Icon from "./Icon";
import MapView, { Marker } from "react-native-maps";
import PinImage from "@/assets/__mock__/pin.png";
import { useDrops } from "@/hooks/useDrops";
import Comment from "./dashboard/comment";

const Drop = () => {
  const ref = useRef<BottomSheet>(null);
  const [snapPoints, setSnapPoints] = useState(["10%", "30%", "60%", "90%"]);
  const [beat, setBeat] = useState({});

  const drops = useDrops(({ drops }) => drops);
  const { drop } = useLocalSearchParams();

  const expandedBeat = drops.find(({ did }) => did === drop) as beatdrop;

  const longitude = expandedBeat.coordinates.longitude;
  const latitude = expandedBeat.coordinates.latitude;

  const map = useRef<MapView>(null);

  const selectDrop = (drop: beatdrop) => {
    setBeat(drop);
    map.current?.animateToRegion({
      longitude,
      latitude: latitude - 0.004,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
    ref.current?.snapToPosition("60%");
    setSnapPoints(["60%"]);
  };

  const resetDrop = () => {
    setSnapPoints(["10%", "30%", "60%", "90%"]);
    router.back();
  };

  useEffect(() => {
    selectDrop(expandedBeat);
  }, []);

  return (
    <View className="flex-1">
      <MapView
        ref={map}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
          onPress={() => selectDrop(expandedBeat)}
        >
          <Image source={PinImage} style={{ width: 50, height: 50 }} />
        </Marker>
      </MapView>
      <>
        <BottomSheet ref={ref} snapPoints={snapPoints}>
          <BottomSheetScrollView className="m-2 mb-24" stickyHeaderIndices={[2]}>
            <Icon name="Chevron_Left" size={24} onPress={() => resetDrop()} />
            <View className="flex flex-row justify-between p-2">
              <View className="flex flex-row items-center gap-3">
                <View className="h-[50] w-[50] overflow-hidden rounded-full">
                  <Image
                    source={expandedBeat.photo}
                    style={{ height: 50, width: 50 }}
                  />
                </View>
                <View className="gap-2">
                  <View className="flex flex-row items-center gap-2">
                    <Text className="text-2xl font-semibold">
                      {expandedBeat.name}
                    </Text>
                    <Text className="text-beatdrop-placeholder">
                      @{expandedBeat.username}
                    </Text>
                  </View>
                  <Text className="font-semibold">{expandedBeat.location}</Text>
                </View>
              </View>
              <View className="flex flex-row gap-2">
                <Icon name="Heart_01" size={24} />
                <Icon name="Chat_Circle" size={24} />
              </View>
            </View>
            <Beat
              song={expandedBeat.song}
              image={expandedBeat.image}
              artist={expandedBeat.artist}
              onAdd={() => Toaster("BeatDrop Posted", "success")}
              preview={expandedBeat.preview}
            />
            <Text className="p-2 text-lg">{expandedBeat.description}</Text>
            <Text className="p-2">
              {moment(expandedBeat.timestamp).fromNow()}
            </Text>

            <View className="gap-4 p-2">
              {expandedBeat.comments?.map(
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
        </BottomSheet>
      </>
    </View>
  );
};

export default Drop;
