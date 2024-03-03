import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { GameContext } from "../context/gameContext";
import { Outlet } from "react-router-dom";
import LevelHeader from "../components/LevelHeader";
import { levels } from "../constants/levels";
import { LevelQuestions } from "../components/LevelQuestions/LevelQuestions";
import Level from "../interfaces/Level.interface";
import { GameActions } from "../context/gameContext";
import { WrongAnswerModal } from "../components/common/WrongAnswer.modal";
import { CorrectAnswerModal } from "../components/common/CorrectAnswer.modal";
import React from "react";
import { shuffle } from "../helpers/shuffle";
import { SoundContext, SoundActions } from "../context/soundContext";
import { WelcomeGuide } from "../components/WelcomeGuide";

const LevelWrapper = () => {
  const { level } = useParams<{ level: string }>();
  const navigate = useNavigate();
  const { state, dispatch } = useContext(GameContext);
  const soundContext = useContext(SoundContext);
  const imgRef = React.createRef<HTMLImageElement>();
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  const [showWelcomeGuide, setWelcomeGuide] = useState(true);

  const levelData: Level | undefined = levels.find(
    (_level) => _level.level === parseInt(level as string, 10)
  );

  if (!levelData) {
    navigate("/", { replace: true });
    return null;
  }

  const handleAttachEventListener = (e: any) => {
    console.log(e.target)
    // const { width, height } = e.target.getBoundingClientRect();
    // const { offsetX, offsetY } = e.nativeEvent;
    // setX(Math.round((((offsetX / width) * 100 - 10) / 80) * 100));
    // setY(Math.round((((offsetY / height) * 100 - 5) / 90) * 53.3));
    dispatch({ type: GameActions.TOGGLE_WRONG });
    soundContext.dispatch({ type: SoundActions.PLAY_CLICK_SOUND });
  };



  // TODO: this should come from the server
  const levelBackgroundImage = levelData.backgroundImage.src;

  return (
    <div className="relative bg-contain bg-no-repeat bg-top w-dvw h-dvh m-0 p-0 box-border ">
      <img
        src={levelBackgroundImage}
        alt=""
        className="object-cover absolute top-0 left-0 w-full h-full z-0"
        onClick={(e: any) => handleAttachEventListener(e)}
        useMap="#image-map"
        ref={imgRef}
      />
      {/* <div className="absolute top-20 right-5 p-4 bg-white">
        <p>X : {x}</p>
        <p>Y: {y}</p>
        <button className="bg-blue-500 mt-2" onClick={handleNextItem}>
          Next
        </button>
      </div> */}

      <LevelHeader />

      <Outlet />

      <WrongAnswerModal />
      <CorrectAnswerModal />
      {state.level === 1 && showWelcomeGuide && (
        <WelcomeGuide onClose={() => setWelcomeGuide(!showWelcomeGuide)} />
      )}

      <LevelQuestions questions={shuffle(levelData?.questions || [])} />
    </div>
  );
};

export default LevelWrapper;
