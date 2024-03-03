import titleq from "../assets/images/titleq.png";
import oscoret from "../assets/images/oscoret.png";
import na from "../assets/images/na.png";
import { Link, useNavigate } from "react-router-dom";
import { FC } from "react";
import { useContext } from "react";
import { GameContext } from "../context/gameContext";
import { GameActions } from "../context/gameContext";
import { SoundContext } from "../context/soundContext";
import { SoundActions } from "../context/soundContext";

const HomePage: FC = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(GameContext);
  const soundContext = useContext(SoundContext);

  const handleStartGame = () => {
    dispatch({ type: GameActions.START_GAME });
    soundContext?.dispatch({ type: SoundActions.MUSIC_ON });
    navigate("/level/1");
  };

  return (
    <div className="">
      <img src={oscoret} className="absolute top-5 left-5" />
      <img src={na} className="absolute top-0 left-40" />
      <Link
        to="/leaderboard"
        className="absolute cursor-pointer top-14 left-1/2 -translate-x-1/2 uppercase bg-white shadow-inner rounded-2xl py-1 px-5 hover:scale-[1.02] transition-all text-xl font-bold"
      >
        leaderBoard
      </Link>
      <img
        src={titleq}
        className="absolute top-[75%] left-1/2 -translate-x-1/2  "
      />
      <button
        className="absolute cursor-pointer top-[82%] left-1/2 -translate-x-1/2  uppercase bg-white shadow-inner rounded-2xl py-1 px-5 hover:scale-[1.02] transition-all text-xl font-bold"
        onClick={() => handleStartGame()}
      >
        Connect your wallet
      </button>
      <div className="flex gap-2 absolute bottom-10 text-white font-bold text-xl right-10">
        <a className="hover:text-teal-200">About</a>
        <span>|</span>
        <a className="hover:text-teal-200">Privacy</a>
      </div>
    </div>
  );
};

export default HomePage;
