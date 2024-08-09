import { Button, TextField } from "@mui/material";
import { useAppState } from "../../../store/mainStore";
import { ChangeEvent } from "react";
import { useResources } from "../../../store/resourcesStore";
import { Basin } from "../../../models/basin";
import "./advisoryForm.scss";
import { TWService } from "../../../services/twService";

export const AdvisoryForm = () => {
  const { advisory, setAdvisory, trackPoints } = useAppState();
  const { basins, trends, confidences } = useResources();

  const twSerice: TWService = new TWService();

  const basinSelected = (e: ChangeEvent<HTMLSelectElement>): void => {
    setAdvisory({ ...advisory!, basinId: Number(e.target.value) });
  };
  const trendSelected = (e: ChangeEvent<HTMLSelectElement>): void => {
    setAdvisory({ ...advisory!, trendId: Number(e.target.value) });
  };
  const confidenceSelected = (e: ChangeEvent<HTMLSelectElement>): void => {
    setAdvisory({ ...advisory!, confidenceId: Number(e.target.value) });
  };

  const probStormWithin48Changed = (n: string): void => {
    setAdvisory({ ...advisory!, probabilityStormWithin48h: Number(n) });
  };
  const probStormBeyonc48Changed = (n: string): void => {
    setAdvisory({ ...advisory!, probabilityStormAfter48h: Number(n) });
  };
  const probHurricaneWithin48Changed = (n: string): void => {
    setAdvisory({ ...advisory!, probabilityHurricaneWithin48h: Number(n) });
  };
  const probbHurricaneBeyonc48Changed = (n: string): void => {
    setAdvisory({ ...advisory!, probabilityHurricaneAfter48h: Number(n) });
  };
  const geoRefChanged = (n: string): void => {
    setAdvisory({ ...advisory!, geographicReference: n });
  };
  const initialPressureChanged = (n: string): void => {
    setAdvisory({ ...advisory!, initialPressure: Number(n) });
  };

  const saveAdvisoryDetails = (): void => {
    if (advisory) {
      twSerice.updateAdvisory({ ...advisory });
    }
  };

  return (
    <div className="advisory-form">
      <div className="grid">
        <div style={{ gridColumn: "span 4" }}>
          Basins: {basins.size}
          {Object.values(basins).map((b: Basin) => {
            return <b>{b.abbreviation}</b>;
          })}
        </div>
        <Button variant="contained" sx={{ width: "100%", gridColumn: "span 2" }}>
          Regular
        </Button>
        <Button
          variant="contained"
          sx={{
            width: "100%",
            backgroundColor: "rgb(69,68,65) !important",
            gridColumn: "span 2",
          }}
        >
          Intermediate
        </Button>
        <TextField
          label="Storm Name"
          variant="outlined"
          className="inputfield"
          size="small"
          value={advisory?.stormName ?? "No storm yet"}
          sx={{ gridColumn: "span 4" }}
        />
        <TextField label="External ID" variant="outlined" className="inputfield" size="small" value={"External ID"} sx={{ gridColumn: "span 4" }} />
        Basin
        <select value={advisory?.basinId} onChange={(e) => basinSelected(e)} className="basin-select">
          {[...basins.entries()].map(([_, value]) => (
            <option key={value.basinId} value={value.basinId}>
              {value.abbreviation.toUpperCase()}
            </option>
          ))}
        </select>
        Trend
        <select value={advisory?.trendId} onChange={(e) => trendSelected(e)} className="basin-select">
          {[...trends.entries()].map(([_, value]) => (
            <option key={value.trendId} value={value.trendId}>
              {value.trendDescription}
            </option>
          ))}
        </select>
        Confidence
        <select value={advisory?.confidenceId} onChange={(e) => confidenceSelected(e)} className="basin-select">
          {[...confidences.entries()].map(([_, value]) => (
            <option key={value.confidenceId} value={value.confidenceId}>
              {value.confidenceDescription}
            </option>
          ))}
        </select>
        <TextField
          label="Probability of Tropical Storm within 48 hr"
          variant="outlined"
          className="inputfield"
          size="small"
          value={advisory?.probabilityStormWithin48h ?? 0}
          onChange={(e) => probStormWithin48Changed(e.target.value)}
          sx={{ gridColumn: "span 2", marginTop: "10px !important" }}
        />
        <TextField
          label="Probability of Tropical Storm beyond 48 hr"
          variant="outlined"
          className="inputfield"
          size="small"
          value={advisory?.probabilityStormAfter48h ?? 0}
          onChange={(e) => probStormBeyonc48Changed(e.target.value)}
          sx={{ gridColumn: "span 2" }}
        />
        <TextField
          label="Probability of Hurricane within 48 hr"
          variant="outlined"
          className="inputfield"
          size="small"
          value={advisory?.probabilityHurricaneWithin48h ?? 0}
          onChange={(e) => probHurricaneWithin48Changed(e.target.value)}
          sx={{ gridColumn: "span 2" }}
        />
        <TextField
          label="Probability of Hurricane beyond 48 hr"
          variant="outlined"
          className="inputfield"
          size="small"
          value={advisory?.probabilityHurricaneAfter48h ?? 0}
          onChange={(e) => probbHurricaneBeyonc48Changed(e.target.value)}
          sx={{ gridColumn: "span 2" }}
        />
        <TextField
          label="Geographical Reference"
          variant="outlined"
          className="inputfield"
          size="small"
          value={advisory?.geographicReference ?? "-"}
          onChange={(e) => geoRefChanged(e.target.value)}
          sx={{ gridColumn: "span 4" }}
        />
        <TextField
          label="Initial pressure"
          variant="outlined"
          className="inputfield"
          size="small"
          value={advisory?.initialPressure ?? 0}
          onChange={(e) => initialPressureChanged(e.target.value)}
          sx={{ gridColumn: "span 4" }}
        />
        <p>
          Track: {advisory?.trackId} {trackPoints?.length ?? 0} points
        </p>
        <div style={{ position: "absolute", gridColumn: "span 4", textAlign: "end", bottom: "10px", right: "20px" }}>
          <Button variant="contained" onClick={(_) => saveAdvisoryDetails()}>
            Save details
          </Button>
        </div>
      </div>
    </div>
  );
};
