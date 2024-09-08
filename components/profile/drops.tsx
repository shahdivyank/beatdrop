import { View } from "react-native";
import React, { useState } from "react";
import Beat from "@/components/global/beat";
import { useUser } from "@/hooks/useUser";
import { useDrops } from "@/hooks/useDrops";
import Navigation from "./navigation";

const Drops = () => {
  const user = useUser(({ uid }) => uid);
  const drops = useDrops(({ drops }) => drops);

  const profile = drops.filter(({ uid }) => uid === user);

  const [state, setState] = useState<0 | 1>(0);

  return (
    <View>
      <Navigation state={state} setState={setState} />
      <View className="flex gap-3">
        {profile.map(({ name, artist, image, location }, index) => (
          <Beat
            song={name}
            artist={artist}
            image={image}
            location={location}
            key={index}
          />
        ))}
      </View>
    </View>
  );
};

export default Drops;
