import React from "react";
import { useAppState } from "./store/mainStore";

const Counter: React.FC = () => {
  const { appTitle, clearAppTitle, setAppTitle } = useAppState();

  return (
    <div>
      <h1>{appTitle ?? "Untitled app"}</h1>
      <button onClick={() => setAppTitle("Zustand app")}>Set title</button>
      <button onClick={() => clearAppTitle()}>Clear title</button>
    </div>
  );
};

export default Counter;
