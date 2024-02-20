import { MouseEventHandler } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { useContext } from "react";
// import { GameContext } from "../context/gameContext";
import { Outlet } from "react-router-dom";
import LevelHeader from "../components/LevelHeader";
import { levels } from "../constants/levels";

const LevelWrapper = () => {
  const { level } = useParams<{ level: string }>();
  const navigate = useNavigate();

  const levelData = levels.find(
    (_level) => _level.level === parseInt(level as string, 10)
  );

  if (!levelData) {
    navigate("/");
    return null;
  }

  const handleAttachEventListener = (e: MouseEventHandler<any>) => {
    const eventListener = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        navigate("/");
      }
    };
    window.addEventListener("keydown", eventListener);
    return () => window.removeEventListener("keydown", eventListener);
  };

  // TODO: this should come from the server
  const levelBackgroundImage = levelData.backgroundImage.src;

  return (
    <div
      className="relative bg-cover bg-no-repeat bg-top w-dvw h-dvh"
      style={{
        backgroundImage: `url(${levelBackgroundImage})`,
      }}
      onClick={(e: any) => handleAttachEventListener(e)}
    >
      <LevelHeader />
      <Outlet />
    </div>
  );
};

export default LevelWrapper;
