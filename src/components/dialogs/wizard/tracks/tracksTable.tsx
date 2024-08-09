import { useAppState } from "../../../../store/mainStore";
import "./tracksTable .scss";

export const TracksTable = () => {
  const { trackPoints } = useAppState();

  return (
    <>
      <div className="grid-container">
        <div className="box">O</div>
        <div className="box">
          Date
          <br />
          UTC
        </div>
        <div className="box">Lat</div>
        <div className="box">Lon</div>
        <div className="box">
          Max
          <br />
          Winds
        </div>
        <div className="box">
          Max
          <br />
          Gusts
        </div>
        <div className="box">
          Radii Inputs(NM)
          <div className="radii-grid">
            <div className="box">Squalls</div>
            <div className="box">22kts</div>
            <div className="box">34kts</div>
            <div className="box">50kts</div>
            <div className="box">64kts</div>
            <div className="box">87kts</div>
            <div className="box">Max</div>
            <div className="box">Eye</div>
            <div className="box">^</div>
          </div>
        </div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
        <div className="box">track</div>
      </div>
      <div>{trackPoints.length} tracks</div>
    </>
  );
};
