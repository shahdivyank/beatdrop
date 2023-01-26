import View from "@/components/View";
import React from "react";

const index = () => {
  return (
    <div className="w-full flex justify-center items-center h-screen">
      <div className="w-10/12">
        <View
          name="Mariam Golwalla"
          location="LAGUNA BEACH, CA, USA"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            facilisis, justo ut facilisis mollis, turpis enim euismod ipsum,
            bibendum finibus felis tellus quis lacus. Mauris vel porttitor nunc,
            eget pulvinar tellus. Cras arcu enim, interdum at mi eget, egestas
            varius arcu. In nec arcu eget lectus mattis sodales. Maecenas ut
            velit odio."
          posted="POSTED 4 HOURS AGO"
          primary="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/7b/c0/bf/laguna-beach.jpg?w=1200&h=1200&s=1"
          secondary="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/7b/c0/bf/laguna-beach.jpg?w=1200&h=1200&s=1"
          album="https://i.scdn.co/image/ab67616d0000b27328e5351049de8f6ee39111f5"
          start="1:47"
          end="3:04"
          song="Flying on Faith"
          artist="Chung Ha"
        />
      </div>
    </div>
  );
};

export default index;
