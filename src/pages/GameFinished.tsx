import { FC } from "react";
import { Link } from "react-router-dom";

export const GameFinished: FC = () => {
  return (
    <div className="h-full w-full grid place-items-center">
      <div className="flex items-center justify-between  max-w-3xl w-full">
        <div className="flex items-center justify-center gap-3">
          <span className="text-3xl text-white font-extrabold">Time</span>
          <div className="text-black font-extrabold text-3xl bg-white/70 px-4 p-1 rounded-full">
            0 : 5
          </div>
        </div>
        <div className="flex items-center justify-center gap-3">
          <span className="text-3xl text-white font-extrabold">Degen</span>
          <div className="text-black font-extrabold text-3xl bg-white/70 px-4 p-1 rounded-full">
            #1
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <p className="text-center text-7xl text-white font-extrabold">
          Total Score
        </p>
        <p className="text-center text-7xl text-blue-400 font-extrabold">15000 </p>
      </div>
      <Link 
        to="/"
      className=" uppercase bg-white shadow-inner rounded-2xl py-1 px-5 hover:scale-[1.02] transition-all text-xl font-bold">
        Play Again
      </Link>
    </div>
  );
};
