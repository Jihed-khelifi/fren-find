import { FC } from "react";
import { GameContext } from "../context/gameContext";
import { useContext } from "react";
import { IoIosTimer } from "react-icons/io";
import { useEffect } from "react";
import { TbMusic } from "react-icons/tb";
import { TbMusicOff } from "react-icons/tb";
import { IoExitOutline } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";
import { SoundActions, SoundContext } from "../context/soundContext";
import { useNavigate } from "react-router-dom";
import { GameActions } from "../context/gameContext";
import { useTimer } from "../hooks/useTimer";
const LevelHeader: FC = () => {
  const navigate = useNavigate();
  const { timer, timeUp } = useTimer(600);
  const { state, dispatch } = useContext(GameContext);
  const soundContext = useContext(SoundContext);

  const handleExitGame = () => {
    dispatch({ type: GameActions.EXIT_GAME });
    soundContext?.dispatch({ type: SoundActions.MUSIC_OFF });
    navigate("/");
  };

  // const handlePauseGame = () => {
  //   console.log("pause game");
  // };

  // const handleStopGame = () => {
  //   console.log("stop game");
  // };

  const handleMusic = () => {
    soundContext?.dispatch({ type: SoundActions.TOGGLE_MUSIC });
  };

  useEffect(() => {
    if (timeUp === true) {
      navigate("/game-finished");
    }
  }, [timeUp]);

  return (
    // <div className="bg-white/70 w-dvw px-10 py-2  absolute top-0 ">
    <div className="group bg-white hover:bg-white/70 lg:w-[130px] w-[100px] rounded-full hover:rounded-none top-2  left-2 lg:h-[40px] h-[30px] hover:w-dvw hover:px-10 hover:py-3 absolute hover:top-0 hover:left-0 hover:h-max">
      <span className="text-center text-2xl group-hover:hidden font-extrabold absolute top-1 right-1/2 translate-x-1/2 ">
        <div className="flex items-center justify-center gap-3">
          <span className="text-black font-extrabold lg:text-2xl text-base">
            {/* {moment.utc(time * 1000).format("mm:ss")} */}
            {timer}
          </span>
          <TbListDetails />
        </div>
      </span>
      <div className=" hidden group-hover:flex justify-between items-center">
        <div className="flex gap-5 items-center">
          <div className="flex gap-4 items-center">
            <IoIosTimer
              size={30}
              className="text-black font-extrabold lg:text-2xl text-base"
            />
            <span className="text-black font-extrabold lg:text-2xl text-base">
              {timer}
            </span>
          </div>
          <div className="text-black font-extrabold lg:text-2xl text-base">
            level: {state.level}
          </div>
        </div>
        <div className="flex items-center gap-5 justify-center">
          <div className="lg:h-16 h-10 lg:w-14 w-8 bg-blue-400 rounded-lg -skew-x-6"></div>
          <div className="lg:h-16 h-10 lg:w-14 w-8 bg-blue-400 rounded-lg -skew-x-6"></div>
          <div className="lg:h-16 h-10 lg:w-14 w-8 bg-blue-400 rounded-lg -skew-x-6"></div>
          <div className="lg:h-16 h-10 lg:w-14 w-8 bg-blue-400 rounded-lg -skew-x-6"></div>
          <div className="lg:h-16 h-10 lg:w-14 w-8 bg-blue-400 rounded-lg -skew-x-6"></div>
        </div>
        <div className="flex items-center gap-5">
          <span className="text-black font-extrabold lg:text-2xl text-base">
            Score:{"  "} {state.score} {"  "}{" "}
          </span>
          <div className="flex items-center gap-5">
            {/* <button className="p-3 hover:bg-teal-200/80 aspect-square rounded-full shadow-sm lg:text-2xl text-base">
              <MdMotionPhotosPause />
            </button>
            <button className="p-3 hover:bg-teal-200/80 aspect-square rounded-full shadow-sm lg:text-2xl text-base">
              <CiStop1 />
            </button> */}
            <button
              onClick={handleMusic}
              className="p-3 hover:bg-teal-200/80 aspect-square rounded-full shadow-sm lg:text-2xl text-base"
            >
              {soundContext.state.isMusicOn ? <TbMusic /> : <TbMusicOff />}
            </button>
            <button
              onClick={handleExitGame}
              className="p-3 hover:bg-teal-200/80 aspect-square rounded-full shadow-sm lg:text-2xl text-base"
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
