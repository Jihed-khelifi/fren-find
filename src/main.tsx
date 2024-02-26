import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GameProvider } from "./context/gameContext.tsx";
import { SoundProvider } from "./context/soundContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SoundProvider>
      <GameProvider>
        <App />
      </GameProvider>
    </SoundProvider>
  </React.StrictMode>
);
