import Map, { Marker } from "react-map-gl/maplibre";

import "./mainMap.scss";
import { useAppState } from "../../store/mainStore";
import { ITrackPoint, TrackPoint } from "../../models/trackPoint";

const initialViewState = {
  latitude: 25,
  longitude: -60,
  zoom: 3.5,
};
const mapStyle = "/mapstyles/mainstyle.json";

export const MainMap = () => {
  const { trackPoints, setTrackPoints } = useAppState();
  const mapCliecked = (e: any) => {
    var maxKey = trackPoints.reduce((a, b) => (a.trackPointId > b.trackPointId ? a : b)).trackPointId as number;
    console.log(`adding new marker with key ${maxKey} `);
    maxKey++;
    let newITP: ITrackPoint = {
      trackPointId: maxKey,
      lat: e.lngLat.lat,
      lon: e.lngLat.lng,
      trackId: 0,
      forecastHour: 0,
      stormClassificationId: 0,
      stormTypeId: null,
      createdAt: null,
      validTime: null,
      parameterValues: [],
    };

    try {
      setTrackPoints([...trackPoints, new TrackPoint(newITP)]);
    } catch {}
  };

  return (
    <>
      <div style={{ zIndex: 2, position: "absolute", bottom: "10px", left: "10px" }}>
        <p>{trackPoints.length} markers</p>
      </div>
      <div style={{ zIndex: "1", height: "100vh" }}>
        <Map
          initialViewState={initialViewState}
          mapStyle={mapStyle}
          style={{ position: "absolute", top: 0, left: 0, width: "100vw", height: "100vh" }}
          onClick={(e) => mapCliecked(e)}
        >
          {trackPoints.map((tp) => (
            <Marker key={tp.trackPointId} longitude={tp.lon} latitude={tp.lat} draggable />
          ))}
        </Map>
      </div>
    </>
  );
};
