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
            path: "M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z",
          }}
          position={{ lat: lat, lng: lng }}
        />
        {console.log(markers)}
        {markers.length !== 0 &&
          markers.map((marker, index) => (
            <Marker
              key={index}
              onClick={() => handleMarkerClick(marker)}
              position={{
                lat: marker.data.latitude,
                lng: marker.data.longitude,
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
