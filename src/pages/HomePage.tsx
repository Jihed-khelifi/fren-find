import appTitle from "../assets/images/mtitle.png";
import titleq from "../assets/images/titleq.png";
import oscoret from "../assets/images/oscoret.png";
import na from "../assets/images/na.png";
import LeaderBoard from "./LeaderBoard";
import { useState } from "react";

const HomePage = () => {
  const [isLeaderboardVisible, setIsLeaderboardVisible] = useState(false);

  return (
    <>
      <div className="">
        {isLeaderboardVisible && (
          <LeaderBoard onHide={setIsLeaderboardVisible} />
        )}
        <img src={oscoret} className="absolute top-5 left-5" />
        <img src={na} className="absolute top-0 left-40" />
        <button
          onClick={() => setIsLeaderboardVisible(true)}
          className="absolute cursor-pointer top-20 left-1/2 -translate-x-1/2 uppercase bg-white shadow-inner rounded-2xl py-1 px-5 hover:scale-[1.02] transition-all text-xl font-bold"
        >
          leaderBoard
        </button>
        <img
          src={appTitle}
          className="absolute top-48 left-1/2 -translate-x-1/2 "
        />
        <img
          src={titleq}
          className="absolute top-[64%] left-1/2 -translate-x-1/2 "
        />
        <button className="absolute cursor-pointer top-[70%] left-1/2 -translate-x-1/2  uppercase bg-white shadow-inner rounded-2xl py-1 px-5 hover:scale-[1.02] transition-all text-xl font-bold">
          Connect your wallet
        </button>
        <div className="flex gap-2 absolute bottom-10 text-white font-bold text-xl right-1/2 translate-x-1/2">
          <a className="hover:text-teal-200">About</a>
          <span>|</span>
          <a className="hover:text-teal-200">Privacy</a>
        </div>
      </div>
    </>
  );
};

export default HomePage;
