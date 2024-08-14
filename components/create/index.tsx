import React, { useRef, useMemo, useState } from "react";
import { View } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import Details from "./details";
import Search from "./search";
import { beat } from "@/types";
import Animated, {
  Easing,
  SlideInLeft,
  SlideInRight,
  SlideOutLeft,
  SlideOutRight,
} from "react-native-reanimated";

const CreateScreen = () => {
  const ref = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ["90%"], []);

  const [beat, setBeat] = useState<beat>({
    song: "",
    artist: "",
    image: {
      uri: "",
    },
  });
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [state, setState] = useState(0);

  const addTag = (value: string) => {
    setTags([...tags, value]);
  };

  return (
    <View className="flex-1">
      <BottomSheet ref={ref} snapPoints={snapPoints}>
        <View className="p-3 flex justify-between items-center">
          {state === 0 && (
            <Animated.View
              className={"w-full"}
              entering={SlideInLeft.duration(225).easing(
                Easing.bezierFn(0.56, 0.15, 0.35, 0.78)
              )}
              exiting={SlideOutLeft.duration(175).easing(
                Easing.bezierFn(0.56, 0.15, 0.35, 0.78)
              )}
            >
              <Search setBeat={setBeat} handleNext={() => setState(1)} />
            </Animated.View>
          )}

          {state === 1 && (
            <Animated.View
              className={"w-full"}
              entering={SlideInRight.duration(225).easing(
                Easing.bezierFn(0.56, 0.15, 0.35, 0.78)
              )}
              exiting={SlideOutRight.duration(175).easing(
                Easing.bezierFn(0.56, 0.15, 0.35, 0.78)
              )}
            >
              <Details
                beat={beat}
                handleBack={() => setState(0)}
                description={description}
                setDescription={setDescription}
                addTag={addTag}
                tags={tags}
              />
            </Animated.View>
          )}
        </View>
      </BottomSheet>
    </View>
  );
};

export default CreateScreen;
