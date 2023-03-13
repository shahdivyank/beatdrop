import React, { useState, useCallback } from "react";
import { useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import View from "./View";
import axios from "axios";

const Gmap = ({ publicSongs, privateSongs, token }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const [lat, setLat] = useState(33.97549545804511);
  const [lng, setLng] = useState(-117.33161755952241);
  const [zoom, setZoom] = useState(1);
  const [markers, setMarkers] = useState([]);
  const [viewData, setViewData] = useState({});
  const [viewToggle, setViewToggle] = useState(false);

  const handleMarkerClick = async (marker) => {
    console.log("AINT NO WAY");
    console.log(marker);

    const response = await axios.post("/api/getSong", {
      songID: marker.data.songID,
      token: token,
    });

    setViewData({
      id: marker.id,
      song: response.data.song,
      name: marker.data.name,
      artist: response.data.artist,
      externalurl: response.data.externalurl,
      description: marker.data.description,
      location: { lat: marker.data.latitude, long: marker.data.longitude },
      image: response.data.url,
      time: marker.data.timestamp,
      hashtags: marker.data.hashtags,
      dropLikes: marker.data.likes,
      setToggleView: setViewToggle,
    });

    setViewToggle(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
          setZoom(15);
          console.log(position.coords.latitude, position.coords.longitude);
        });
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const markers = [];
    publicSongs.forEach((element) => {
      markers.push(element);
    });

    setMarkers(markers);
  }, [publicSongs]);

  const onLoad = useCallback(
    (map) => {
      const bounds = new window.google.maps.LatLngBounds({
        lat: lat,
        lng: lng,
      });
      map.fitBounds(bounds);
    },
    [lat, lng]
  );

  return isLoaded ? (
    <div className="w-full h-full">
      <div className="absolute top-0 left-0 z-[100000] mt-20">
        {viewToggle && (
          <View
            id={viewData.id}
            song={viewData.song}
            name={viewData.name}
            artist={viewData.artist}
            externalurl={viewData.externalurl}
            description={viewData.description}
            location={viewData.location}
            image={viewData.image}
            time={viewData.time}
            hashtags={viewData.hashtags}
            setToggleView={viewData.setToggleView}
            dropLikes={viewData.dropLikes}
          />
        )}
      </div>
      <GoogleMap
        mapContainerStyle={{
          width: "100vw",
          height: "100vh",
        }}
        center={{ lat: lat, lng: lng }}
        zoom={zoom}
        onLoad={onLoad}
        options={{ streetViewControl: false, disableDoubleClickZoom: true }}
      >
        <Marker
          icon={{
            path: "M173.438 91.525 C 145.751 98.796,120.501 119.609,106.427 146.760 C 96.887 165.164,96.704 166.635,96.834 223.788 L 96.951 275.560 101.068 284.734 C 115.279 316.401,158.839 324.037,183.676 299.215 C 223.352 259.563,176.967 192.417,126.172 215.973 L 117.188 220.140 117.188 201.689 C 117.188 172.720,123.589 150.004,131.756 149.997 C 133.626 149.996,140.569 145.953,147.184 141.013 C 161.423 130.379,172.537 125.580,188.375 123.224 C 211.206 119.828,232.213 125.627,252.816 141.013 C 259.431 145.953,266.374 149.996,268.244 149.997 C 276.411 150.004,282.813 172.720,282.813 201.689 L 282.813 220.140 273.828 215.929 C 231.589 196.134,185.810 242.925,206.097 285.156 C 224.615 323.707,281.627 323.294,299.045 284.483 L 303.274 275.058 302.809 219.799 L 302.344 164.540 295.023 149.848 C 271.606 102.853,221.614 78.873,173.438 91.525 M164.313 237.323 C 191.067 254.290,177.078 295.745,145.372 293.452 C 106.315 290.627,108.493 232.813,147.656 232.813 C 155.494 232.813,158.473 233.619,164.313 237.323 M269.000 237.323 C 278.948 243.631,283.385 253.039,282.375 265.677 C 279.282 304.353,221.875 302.080,221.875 263.281 C 221.875 245.479,234.541 232.813,252.344 232.813 C 260.181 232.813,263.160 233.619,269.000 237.323 ",
            fillColor: "black",
            fillOpacity: 1,
            scale: 0.15,
            anchor: new window.google.maps.Point(1, 1),
          }}
          position={{ lat: lat, lng: lng }}
        />
        {markers.length !== 0 &&
          markers.map((marker, index) => (
            <Marker
              key={index}
              onClick={() => handleMarkerClick(marker)}
              position={{
                lat: marker.data.latitude,
                lng: marker.data.longitude,
              }}
              icon={{
                path: "M336 1049 c-106 -25 -221 -116 -271 -214 -112 -222 6 -500 245 -578 8 -2 38 -59 65 -126 28 -66 52 -121 55 -121 3 0 28 55 55 121 40 96 55 123 75 131 104 40 196 122 239 211 110 228 -20 508 -265 572 -64 16 -138 18 -198 4z m205 -166 c35 -18 64 -43 84 -71 29 -43 30 -47 33 -182 l3 -138 -29 -34 c-27 -29 -36 -33 -82 -33 -46 0 -55 4 -81 33 -22 24 -29 42 -29 73 0 79 92 135 161 99 18 -10 19 -7 19 41 0 112 -65 180 -176 187 -54 4 -70 1 -106 -21 -59 -34 -88 -88 -88 -163 0 -45 3 -55 12 -46 7 7 32 12 56 12 37 0 50 -6 78 -34 24 -24 34 -43 34 -65 0 -68 -53 -121 -121 -121 -22 0 -41 10 -65 34 l-34 34 0 131 c0 110 3 138 19 169 58 113 194 154 312 95z",
                rotation: 180,
                fillColor: "purple",
                fillOpacity: 1,
                scale: 0.04,
                anchor: new window.google.maps.Point(430, 60),
              }}
            />
          ))}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default React.memo(Gmap);
