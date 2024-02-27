import { MouseEventHandler, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { GameContext } from "../context/gameContext";
import { Outlet } from "react-router-dom";
import LevelHeader from "../components/LevelHeader";
import { levels } from "../constants/levels";
import { LevelQuestions } from "../components/LevelQuestions";
import Level from "../interfaces/Level.interface";
import { GameActions } from "../context/gameContext";
import { WrongAnswerModal } from "../components/common/WrongAnswer.modal";
import { CorrectAnswerModal } from "../components/common/CorrectAnswer.modal";
import React from "react";

const LevelWrapper = () => {
  const { level } = useParams<{ level: string }>();
  const navigate = useNavigate();
  const { dispatch } = useContext(GameContext);
  const imgRef = React.createRef<HTMLImageElement>();
  const [positions, setPositions] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const levelData: Level | undefined = levels.find(
    (_level) => _level.level === parseInt(level as string, 10)
  );

  if (!levelData) {
    navigate("/", { replace: true });
    return null;
  }

  useEffect(() => {
    const parsedLevel = parseInt(level as string, 10);

    if (isNaN(parsedLevel)) {
      navigate("/", { replace: true });
    }

    if (level && typeof parsedLevel === "number") {
      dispatch({ type: GameActions.SET_LEVEL, payload: parseInt(level) });
    }
  }, [level]);

  const handleAttachEventListener = (e: any) => {
    console.log(imgRef.current?.getBoundingClientRect());
    // console.log(e.target.getboundingClientRect());
    const { width, height } = e.target.getBoundingClientRect();
    const { offsetX, offsetY } = e.nativeEvent;
    setX(Math.round((((offsetX / width) * 100 - 10) / 80) * 100));
    setY(Math.round((((offsetY / height) * 100 - 5) / 90) * 53.3));
    setPositions({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });

    // console.log(e.clientX, e.clientY)
    // for (let i = 0; i < levelData.questions.length; i++) {
    //   const hotspot = levelData.questions[i].answer.answerPositions[i];
    //   if (
    //     e.clientX >= hotspot.x &&
    //     e.clientX <= hotspot.x + hotspot.width &&
    //     e.clientY >= hotspot.y &&
    //     e.clientY <= hotspot.y + hotspot.height
    //   ) {
    //     console.log(hotspot);
    //   }
    // }
  };

  const handleClicked = (e: any, index: number) => {
    console.log(e);
    console.log(index);
  };

  const handleNextItem = () => {
    dispatch({ type: GameActions.SET_NEXT_ITEM });
  };

  // TODO: this should come from the server
  const levelBackgroundImage = levelData.backgroundImage.src;

  const corArr = new Array(
    [356, 89, 475, 202],
    [129, 647, 251, 723],
    [1160, 409, 1256, 592],
    [523, 716, 586, 798],
    [799, 279, 871, 365],
    [0, 486, 100, 676],
    [816, 436, 876, 532],
    [828, 491, 875, 636],
    [257, 576, 324, 735],
    [621, 410, 794, 577],
    [325, 494, 355, 555]
  );

  return (
    <div
      className="relative bg-contain bg-no-repeat bg-top w-dvw h-dvh m-0 p-0 box-border "
      // style={{
      //   backgroundImage: `url(${levelBackgroundImage})`,
      // }}
      // onClick={(e: any) => handleAttachEventListener(e)}
    >
      <img
        src={levelBackgroundImage}
        alt=""
        className="object-cover absolute top-0 left-0 w-full h-full z-0"
        onClick={(e: any) => handleAttachEventListener(e)}
        useMap="#image-map"
        ref={imgRef}
      />
      {/* <map name="image-map">
        {corArr.map((cor, index) => (
          <area
            key={index}
            alt=""
            title=""
            className="bg-red-500 p-10 z-10 top-10"
            onClick={(e: any) =>  handleClicked(e, index)}
            coords={cor.join(",")}
            shape="rect"
          />
        ))}
      </map> */}

      <div className="absolute top-20 right-5 p-4 bg-white">
        <p>X : {x}</p>
        <p>Y: {y}</p>
        <button className="bg-blue-500 mt-2" onClick={handleNextItem}>
          Next
        </button>
      </div>

      <LevelHeader />

      <Outlet />

      <WrongAnswerModal />
      <CorrectAnswerModal />

      <LevelQuestions questions={levelData.questions} />
    </div>
  );
};

export default LevelWrapper;
