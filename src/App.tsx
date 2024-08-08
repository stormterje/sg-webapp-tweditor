import { useEffect } from "react";
import "./App.scss";
import { StormBrowser } from "./components/dialogs/storm-browser/stormBrowser";
import { TopMenu } from "./components/menus/topMenu";
import { useAppState } from "./store/mainStore";

function App() {
  const { stormBrowserVisible, loadBasins } = useAppState();
  useEffect(() => {
    loadBasins();
  }, []);

  return (
    <>
      <TopMenu />
      {stormBrowserVisible && <StormBrowser />}
    </>
  );
}

export default App;
