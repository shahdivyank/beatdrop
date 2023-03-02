import React, { useState, useCallback } from "react";
import { useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const Gmap = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const [lat, setLat] = useState(33.97549545804511);
  const [lng, setLng] = useState(-117.33161755952241);
  const [zoom, setZoom] = useState(1);
  const [markers, setMarkers] = useState([]);

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
      <GoogleMap
        mapContainerStyle={{
          width: "100vw",
          height: "100vh",
        }}
        center={{ lat: lat, lng: lng }}
        zoom={zoom}
        onLoad={onLoad}
        options={{ streetViewControl: false, disableDoubleClickZoom: true }}
        onDblClick={(e) => {
          setMarkers([
            ...markers,
            {
              id: markers.length() + 1,
              lat: e.latLng.lat(),
              lng: e.latLng.lng(),
            },
          ]);
        }}
      >
        <Marker
          icon={{
            path: "M8 12l-4.7023 2.4721.898-5.236L.3916 5.5279l5.2574-.764L8 0l2.3511 4.764 5.2574.7639-3.8043 3.7082.898 5.236z",
          }}
          position={{ lat: lat, lng: lng }}
        />
        {markers.map((marker) => (
          <Marker
            position={{
              lat: marker.lat,
              lng: marker.lng,
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
