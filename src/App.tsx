import HomePage from "./pages/HomePage";
import { GameContext, GameProvider } from "./context/gameContext";
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

function App() {
  const { state, dispatch } = useContext(GameContext);

  useEffect(() => {
    dispatch({ type: GameActions.INIT_GAME });
  }, []);

  return (
    <GameProvider>
      <BrowserRouter>
        <Routes>
          {!state.isGameInitialized && (
            <Route path="*" element={<LoadingAssets />} />
          )}
          {state.isGameInitialized && (
            <Route path="/" element={<LayoutOutlet />}>
              <Route path="/" element={<HomePage />} />
              <Route path="leaderboard" element={<LeaderBoard />} />
              <Route path="level/:level" element={<LevelWrapper />}>
                <Route path="/" element={<LevelOne />} />
                <Route path="2" element={<LevelTwo />} />
                <Route path="3" element={<LevelThree />} />
              </Route>
            </Route>
          )}
        </Routes>
      </BrowserRouter>
    </GameProvider>
  );
}

export default App;
