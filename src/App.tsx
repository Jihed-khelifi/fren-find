import HomePage from "./pages/HomePage";
import { GameContext, GameProvider } from "./context/gameContext";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import LayoutOutlet from "./Layouts/Layout";
import LeaderBoard from "./pages/LeaderBoard";
import { GameActions } from "./context/gameContext";
import { useContext } from "react";
import LevelOne from "./pages/LevelOne";
import LevelTwo from "./pages/LevelTwo";
import LevelThree from "./pages/LevelThree";
import LevelWrapper from "./Layouts/LevelWrapper";

function App() {
  const [_, dispatch] = useContext(GameContext);
  return (
    <GameProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LayoutOutlet />}>
            <Route index element={<HomePage />} />
            <Route path="leaderboard" element={<LeaderBoard />} />
          </Route>
          <Route
            path="level/:level"
            element={<LevelWrapper />}
            children={[
              <Route index element={<LevelOne />} />,
              <Route path="2" element={<LevelTwo />} />,
              <Route path="3" element={<LevelThree />} />,
            ]}
          />
        </Routes>
      </BrowserRouter>
    </GameProvider>
  );
}

export default App;
