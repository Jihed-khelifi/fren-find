import { FC } from "react";
import { GameContext } from "../context/gameContext";
import { useContext } from "react";
import { IoIosTimer } from "react-icons/io";
import { useState, useEffect } from "react";
import { MdMotionPhotosPause } from "react-icons/md";
import { CiStop1 } from "react-icons/ci";
import { TbMusic } from "react-icons/tb";
import { TbMusicOff } from "react-icons/tb";
import { IoExitOutline } from "react-icons/io5";

import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import { GameActions } from "../context/gameContext";

const LevelHeader: FC = () => {
  const [time, setTime] = useState(0);
  const navigate = useNavigate();
  const { state, dispatch } = useContext(GameContext);

  const handleExitGame = () => {
    dispatch({ type: GameActions.EXIT_GAME });
    dispatch({ type: GameActions.TOGGLE_MUSIC });
    navigate("/");
  };

  const handlePauseGame = () => {
    console.log("pause game");
  };

  const handleStopGame = () => {
    console.log("stop game");
  };

  const handleMusic = () => {
    dispatch({ type: GameActions.TOGGLE_MUSIC });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white/70 w-dvw px-10 py-2  absolute top-0 ">
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <div className="flex gap-4 items-center">
            <IoIosTimer
              size={30}
              className="text-black font-extrabold text-2xl"
            />
            <span className="text-black font-extrabold text-2xl">
              {moment.utc(time * 1000).format("mm:ss")}
            </span>
          </div>
          <div className="text-black font-extrabold text-2xl">
            level: {state.level}
          </div>
        </div>
        <div className="flex items-center gap-5 justify-center">
          <div className="h-16 w-14 bg-blue-400 rounded-lg -skew-x-6"></div>
          <div className="h-16 w-14 bg-blue-400 rounded-lg -skew-x-6"></div>
          <div className="h-16 w-14 bg-blue-400 rounded-lg -skew-x-6"></div>
          <div className="h-16 w-14 bg-blue-400 rounded-lg -skew-x-6"></div>
          <div className="h-16 w-14 bg-blue-400 rounded-lg -skew-x-6"></div>
        </div>
        <div className="flex items-center gap-5">
          <span className="text-black font-extrabold text-2xl">
            Score:{"  "} {state.score} {"  "}{" "}
          </span>
          <div className="flex items-center gap-5">
            {/* <button className="p-3 hover:bg-teal-200/80 aspect-square rounded-full shadow-sm text-2xl">
              <MdMotionPhotosPause />
            </button>
            <button className="p-3 hover:bg-teal-200/80 aspect-square rounded-full shadow-sm text-2xl">
              <CiStop1 />
            </button> */}
            <button
              onClick={handleMusic}
              className="p-3 hover:bg-teal-200/80 aspect-square rounded-full shadow-sm text-2xl"
            >
              {state.isMusicOn ? <TbMusic /> : <TbMusicOff />}
            </button>
            <button
              onClick={handleExitGame}
              className="p-3 hover:bg-teal-200/80 aspect-square rounded-full shadow-sm text-2xl"
            >
              <IoExitOutline />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelHeader;
