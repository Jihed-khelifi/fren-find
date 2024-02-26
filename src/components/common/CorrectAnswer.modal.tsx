import { GameContext } from "../../context/gameContext";
import { useContext } from "react";
import Spaceship from "../../assets/images/spaceship.png";
import Cloud from "../../assets/images/cloudpop.png";
import FacePic from "../../assets/images/item26s.png";
import clsx from "clsx";
import anime from "animejs";

export const CorrectAnswerModal = () => {
  const { state } = useContext(GameContext);

  if (!state.isCorrect) return null;

  anime({
    targets: "#slide-up",
    translateY: -500,
  });

  return (
    <div
      className={clsx(
        "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  max-w-3xl mx-auto z-50 flex justify-center items-center",
        { hidden: !state.isCorrect }
      )}
    >
      <div className="bg-blue-200/90 px-20 py-10 rounded-2xl ">
        <div className="flex flex-col gap-5 items-center justify-center relative">
          <img src={Spaceship} alt="" />
          <div
            className="bg-white p-5 w-fit rounded-full flex items-center justify-center"
          >
            <img src={FacePic} alt="" className="object-contain rounded-full" />
          </div>
          <div className="p-4 bg-white w-full rounded-lg shadow-md text-center border-4 border-slate-600">
            <span className="text-xl">Name</span>
          </div>
        <div className="absolute -bottom-1/2" id="slide-up">
          <div className="relative">
            <img src={Cloud} alt="" className="object-cover" />
            <span className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 text-3xl text-green-600 font-extrabold select-none">
              +5000
            </span>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
