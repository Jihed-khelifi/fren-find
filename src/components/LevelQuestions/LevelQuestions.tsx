import { FC, createRef, useEffect, useState } from "react";
import Question from "../../interfaces/Question.interface";
import { HiOutlineLightBulb } from "react-icons/hi";
import { HintModal } from "./Hint.modal";

interface LevelQuestionsProps {
  questions: Question[];
}

export const LevelQuestions: FC<LevelQuestionsProps> = ({ questions }) => {
  const [questionIndex] = useState<number>(0);
  const [question, setQuestion] = useState<Question | null>(null);
  const [showHint, setShowHint] = useState<boolean>(false);
  const showQuestionRef = createRef<HTMLDivElement>();

  useEffect(() => {
    setQuestion(questions[questionIndex]);
  }, [questionIndex, questions]);

  useEffect(() => {
    if (showQuestionRef.current) {
      showQuestionRef.current.addEventListener("mouseover", () => {
        setShowHint(false);
      });
    }
  }, [questionIndex]);

  return (
    <div
      className="group bg-white hover:bg-white/70 w-[50px] aspect-square rounded-full hover:rounded-none bottom-2 animate-bounce  right-2 h-[50px] hover:w-dvw hover:px-10 hover:py-5 absolute hover:bottom-0 hover:right-0 hover:h-[80px] hover:animate-none"
      ref={showQuestionRef}
    >
      <span className="text-center text-2xl  group-hover:hidden font-extrabold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        ?
      </span>
      <div className="justify-between items-center hidden group-hover:flex">
        <h2 className="lg:text-2xl text-base font-extrabold">
          {questionIndex} - {question?.text}
        </h2>
        <div className="space-x-5">
          <div className="relative">
            <button
              onClick={() => setShowHint(!showHint)}
              className="text-4xl hover:text-yellow-500 hover:scale-105 transition-all"
            >
              <HiOutlineLightBulb />
            </button>
            {showHint && (
              <HintModal
                hint={question?.hint || ""}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
