import React, { useState } from "react";
import { useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100vw",
  height: "100vh",
};

const Gmap = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCMH8BuFWNeliY20qxGY57p1ZvLDOaXaww",
  });

  const [map, setMap] = useState(null);
  const [lat, setLat] = useState(33.97549545804511);
  const [lng, setLng] = useState(-117.33161755952241);
  const [zoom, setZoom] = useState(1);
  //const mapRef = useRef<GoogleMap>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
          setZoom(15);
        });
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds({
      lat: 33.97549545804511,
      lng: -117.33161755952241,
    });
    map.fitBounds(bounds);
    setMap(map);
  }, []);
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="w-full h-full">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: lat, lng: lng }}
        zoom={zoom}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker position={{ lat: lat, lng: lng }}></Marker>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
};

export default React.memo(Gmap);
