import { View } from "react-native";
import React from "react";
import Beat from "@/components/global/beat";
import { useUser } from "@/hooks/useUser";
import { useDrops } from "@/hooks/useDrops";

const Drops = () => {
  const user = useUser(({ uid }) => uid);
  const drops = useDrops(({ drops }) => drops);

  const profile = drops.filter(({ uid }) => uid === user);

  return (
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
  );
};

export default Drops;
