import { useEffect } from "react";
import { useAppState } from "../../../store/mainStore";
import { Header } from "./header";
import { StormsTable } from "./stormsTable";
import { Button } from "@mui/material";
import { AdvisoriesTable } from "./advisoriesTable";
import { SearchBox } from "./searchBox";

import "./stormBrowser.scss";

export const StormBrowser = () => {
  const { loadStorms, selectedStormId, isAdvisoriesLoading, advisories, selectedAdvisoryId, setStormBrowserVisible } = useAppState();

  useEffect(() => {
    loadStorms();
  }, []);

  return (
    <div className="storm-browser">
      <Header />
      <SearchBox />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ flex: "1", height: "calc((100vh - 275px))", width: "45%" }}>
          <StormsTable />
        </div>
        <div style={{ flex: "1", flexDirection: "column" }}>
          <div style={{ flex: "1", height: "calc((100vh - 295px)/2)", backgroundColor: "rgb(36,36,36)" }}></div>
          <div style={{ flex: "1", height: "calc((100vh - 295px)/2)" }}>
            {!selectedStormId && <h3>Select a storm</h3>}
            {isAdvisoriesLoading && <h3>Advisories loading...</h3>}
            {advisories.length === 0 && <></>}
            {advisories.length > 0 && <AdvisoriesTable />}
          </div>
          <Button
            variant="contained"
            style={{ marginTop: "0px", float: "right", marginRight: "20px" }}
            disabled={!selectedAdvisoryId}
            sx={{
              "&.Mui-disabled": {
                background: "#454441",
                color: "black",
              },
            }}
            onClick={(_) => setStormBrowserVisible(false)}
          >
            Open
          </Button>
        </div>
      </div>
    </div>
  );
};
