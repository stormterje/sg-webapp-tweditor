import { useState } from "react";
import Map, { Marker } from "react-map-gl/maplibre";

// import { Wizard } from './components/wizard/Wizard';

import "./altMap.scss";
import { SGMarker } from "../../models/sgmarker";

const initialViewState = {
  latitude: 25,
  longitude: -60,
  zoom: 3.5,
};
const mapStyle = "/mapstyles/mainstyle.json";
const initialMarker: SGMarker = {
  key: 1,
  time: "00",
  dateUTC: new Date(Date.now()),
  lng: -68.0,
  lat: 13.2,
  color: "green",
  kts22: 11,
  kts34: 11,
  kts50: 11,
  kts64: 11,
  kts87: 11,
  eye: 11,
  max: 11,
  maxGusts: 11,
  maxWinds: 11,
  suqalls: 11,
  dot: true,
};

export const AltMap = () => {
  const [markers, setMarkers] = useState<SGMarker[]>([initialMarker]);

  const mapCliecked = (e: any) => {
    var maxKey = markers.reduce((a, b) => (a.key > b.key ? a : b)).key as number;
    maxKey++;

    let marker: SGMarker = {
      key: maxKey,
      dateUTC: new Date(Date.now()),
      lng: e.lngLat.lng,
      lat: e.lngLat.lat,
      kts22: 11,
      kts34: 11,
      kts50: 11,
      kts64: 11,
      kts87: 11,
      eye: 11,
      max: 11,
      maxGusts: 11,
      maxWinds: 11,
      suqalls: 11,
      dot: false,
      color: "black",
    };
    setMarkers([...markers, marker]);
  };

  const moveMarker = (key: number, lat: number, lng: number) => {
    markerDragEnd(key, lng, lat);
  };

  const markerDragEnd = (key: number, lng: number, lat: number) => {
    let newMarkers = markers.slice();
    var movedMarker = newMarkers.filter((m) => m.key == key)[0];
    movedMarker.lat = lat;
    movedMarker.lng = lng;
    setMarkers(newMarkers);
  };

  const updateMarker = (marker: SGMarker): void => {
    let newMarkers = markers.slice();
    var movedMarker = newMarkers.filter((m) => m.key == marker.key)[0];
    movedMarker = { ...marker };
    console.log(movedMarker);
    setMarkers(newMarkers);
  };

  return (
    <>
      <div style={{ zIndex: "1", height: "100vh" }}>
        <Map
          initialViewState={initialViewState}
          mapStyle={mapStyle}
          style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh" }}
          onClick={(e) => mapCliecked(e)}
        >
          {markers.map((marker) => (
            <Marker
              key={marker.key}
              longitude={marker.lng}
              latitude={marker.lat}
              draggable
              onDragEnd={(e) => markerDragEnd(marker.key as number, e.lngLat.lng, e.lngLat.lat)}
            />
          ))}
        </Map>
        <p style={{ position: "absolute", left: "10px", bottom: "10px" }}>{markers.length} markers</p>
      </div>
    </>
  );
};
