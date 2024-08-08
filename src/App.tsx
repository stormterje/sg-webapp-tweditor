import { useEffect } from "react";
import "./App.scss";
import { StormBrowser } from "./components/dialogs/storm-browser/stormBrowser";
import { TopMenu } from "./components/menus/topMenu";
import { useAppState } from "./store/mainStore";
import { useResources } from "./store/resourcesStore";

function App() {
  const { stormBrowserVisible } = useAppState();
  const { loadBasins, basinsLoadingFinished, loadStormClassifications, stormClassificationsLoadingFinished, loadConfidences, condidencesLoadingFinished } =
    useResources();

  useEffect(() => {
    async () => {
      await loadBasins();
      await loadStormClassifications();
      await loadConfidences();
    };
  }, []);

  return (
    <>
      <TopMenu />
      {stormBrowserVisible && <StormBrowser />}
      {!basinsLoadingFinished && !stormClassificationsLoadingFinished && !condidencesLoadingFinished && <h1>Loading resources...</h1>}
    </>
  );
}

export default App;
