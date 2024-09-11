import { useLocalSearchParams, router } from "expo-router";
import { Text, View } from "react-native";
import { useDrops } from "@/hooks/useDrops";
import { useRef, useMemo } from "react";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { Image } from "expo-image";
import Beat from "@/components/global/beat";
import moment from "moment";
import { comment, beatdrop } from "@/types";
import Toaster from "@/utils/toast";
import Icon from "../Icon";
import MapView, { Marker } from "react-native-maps";
import PinImage from "@/assets/__mock__/pin.png";

interface item {
  item: beatdrop;
}
const Drop = () => {
  const ref = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["10%", "30%", "60%", "90%"], []);

  const drops = useDrops(({ drops }) => drops);
  const { drop } = useLocalSearchParams();

  const expandedDrop = drops.find(({ did }) => did === drop);

  const longitude = expandedDrop?.coordinates?.longitude ?? 0;
  const latitude = expandedDrop?.coordinates?.latitude ?? 0;

  const map = useRef<MapView>(null);
  const selectDrop = () => {
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
        <Marker
          coordinate={{
            latitude: latitude,
            longitude: longitude,
          }}
          onPress={() => selectDrop()}
        >
          <Image source={PinImage} style={{ width: 50, height: 50 }} />
        </Marker>

        {expandedDrop && (
          <Marker coordinate={expandedDrop.coordinates}>
            <View className="rounded-full border-2 border-beatdrop-primary bg-beatdrop-primary/30 p-2">
              <View className="h-5 w-5 rounded-full border-2 border-white bg-beatdrop-primary" />
            </View>
          </Marker>
        )}
      </MapView>
      <BottomSheet ref={ref} snapPoints={snapPoints}>
        <BottomSheetScrollView className="m-2" stickyHeaderIndices={[2]}>
          <Icon name="Chevron_Left" size={24} onPress={() => router.back()} />

          <View className="flex flex-row justify-between p-2">
            <View className="flex flex-row items-center gap-3">
              <View className="h-[50] w-[50] overflow-hidden rounded-full">
                <Image
                  source={expandedDrop?.photo}
                  style={{ height: 50, width: 50 }}
                />
              </View>
              <View className="gap-2">
                <View className="flex flex-row items-center gap-2">
                  <Text className="text-2xl font-semibold">
                    {expandedDrop?.name}
                  </Text>
                  <Text className="text-beatdrop-placeholder">
                    @{expandedDrop?.username}
                  </Text>
                </View>
                <Text className="font-semibold">{expandedDrop?.location}</Text>
              </View>
            </View>
            <View className="flex flex-row gap-2">
              <Icon name="Heart_01" size={24} />
              <Icon name="Chat" size={24} />
            </View>
          </View>
          {expandedDrop && (
            <Beat
              song={expandedDrop.song}
              image={expandedDrop.image}
              artist={expandedDrop.artist}
              onAdd={() => Toaster("BeatDrop Posted", "success")}
            />
          )}
          <Text className="p-2 text-lg">{expandedDrop?.description}</Text>
          <Text className="p-2">
            {moment(expandedDrop?.timestamp).fromNow()}
          </Text>
          <Image
            source={expandedDrop?.image}
            style={{ height: 100, width: 100 }}
          />

          <View className="gap-4 p-2">
            {expandedDrop?.comments?.map(
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
                      <Text className="p-2">{moment(timestamp).fromNow()}</Text>
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
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

export default Drop;
