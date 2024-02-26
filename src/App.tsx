import HomePage from "./pages/HomePage";
import { GameContext } from "./context/gameContext";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LayoutOutlet from "./Layouts/Layout";
import LeaderBoard from "./pages/LeaderBoard";
import { GameActions } from "./context/gameContext";
import { useContext, useEffect } from "react";
import LevelOne from "./pages/LevelOne";
import LevelTwo from "./pages/LevelTwo";
import LevelThree from "./pages/LevelThree";
import LevelWrapper from "./Layouts/LevelWrapper";
import LoadingAssets from "./components/LoadingAssets";
import { NotFound } from "./components/NotFound";
import BachgroundSound from "./assets/sounds/backgroundSound.mp3";

function App() {
  const { state, dispatch } = useContext(GameContext);

  useEffect(() => {
    const audio = new Audio(BachgroundSound);
    audio.loop = true;

    if (state.isMusicOn === true) {
      audio.play();
    }

    return () => {
      audio.pause();
    };
  }, []);

  useEffect(() => {
    dispatch({ type: GameActions.INIT_GAME });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {!state.isGameInitialized && (
          <Route path="" element={<LoadingAssets />} />
        )}
        {state.isGameInitialized && (
          <Route path="" element={<LayoutOutlet />}>
            <Route path="/" index element={<HomePage />} />
            <Route path="leaderboard" element={<LeaderBoard />} />
            <Route path="level/:level" element={<LevelWrapper />}>
              <Route path="level/1" element={<LevelOne />} />
              <Route path="level/2" element={<LevelTwo />} />
              <Route path="level/3" element={<LevelThree />} />
              <Route path="level/*" element={<NotFound />} />
            </Route>
          </Route>
        )}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
