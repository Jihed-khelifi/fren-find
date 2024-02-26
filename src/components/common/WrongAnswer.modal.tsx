import { GameContext } from "../../context/gameContext";
import { useContext } from "react";
import clsx from "clsx";
import WrongPicture from "../../assets/images/WrongAnswerPicture.png";
import Cloud from "../../assets/images/cloudpop.png";
import anime from "animejs";

export const WrongAnswerModal = () => {
  const { state } = useContext(GameContext);

  if (!state.isWrong) return null;

  anime({
    targets: "#slide-up",
    translateY: -500,
  });

  return (
    <div
      className={clsx(
        "fixed top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2  max-w-3xl mx-auto z-50 flex justify-center items-center",
        { hidden: !state.isWrong }
      )}
    >
      <div className="bg-blue-200/90 p-8 rounded-xl">
        <img src={WrongPicture} alt="" />
        <div className="absolute -bottom-1/2" id="slide-up">
          <div className="relative">
            <img src={Cloud} alt="" className="object-cover" />
            <span className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 text-3xl text-orange-500 font-extrabold select-none">
              -5000
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
