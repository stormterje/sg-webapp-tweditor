import { useEffect } from "react";
import { StormBrowser } from "./components/dialogs/storm-browser/stormBrowser";
import { TopMenu } from "./components/menus/topMenu";
import { useAppState } from "./store/mainStore";
import { useResources } from "./store/resourcesStore";

import "./App.scss";
import { Wizard } from "./components/dialogs/wizard/wizard";
import { MainMap } from "./components/main-map/mainMap";
// import { AltMap } from "./components/alt-map/altMap";

function App() {
  const { stormBrowserVisible } = useAppState();
  const {
    loadBasins,
    basinsLoadingFinished,
    loadStormClassifications,
    stormClassificationsLoadingFinished,
    loadConfidences,
    condidencesLoadingFinished,
    loadTrends,
    trendsLoadingFinished,
    loadParameters,
    parametersLoadingFinished,
  } = useResources();

  useEffect(() => {
    loadBasins();
    loadStormClassifications();
    loadConfidences();
    loadTrends();
    loadParameters();
  }, []);

  const loadFinished = (): boolean => {
    return basinsLoadingFinished && stormClassificationsLoadingFinished && condidencesLoadingFinished && trendsLoadingFinished && parametersLoadingFinished;
  };

  return (
    <>
      <MainMap />
      {/* <AltMap /> */}
      <TopMenu />
      {!loadFinished() && <h1>Loading resources...</h1>}
      <Wizard />
      {stormBrowserVisible && <StormBrowser />}
    </>
  );
}

export default App;
