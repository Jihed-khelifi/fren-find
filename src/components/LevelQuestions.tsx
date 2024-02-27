import { FC, useEffect, useState } from "react";
import Question from "../interfaces/Question.interface";
import { HiOutlineLightBulb } from "react-icons/hi";
import { questions } from "../constants/questions";

interface LevelQuestionsProps {
  questions: Question[];
}

export const LevelQuestions: FC<LevelQuestionsProps> = ({ questions }) => {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [question, setQuestion] = useState<Question | null>(null);

  useEffect(() => {
    setQuestion(questions[questionIndex]);
  }, [questionIndex, questions]);

  return (
    <div className="group bg-white hover:bg-white/70 w-[50px] aspect-square rounded-full hover:rounded-none bottom-2 animate-bounce  right-2 h-[50px] hover:w-dvw hover:px-10 hover:py-5 absolute hover:bottom-0 hover:right-0 hover:h-[80px] hover:animate-none">
      <span className="text-center text-2xl  group-hover:hidden font-extrabold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        ?
      </span>
      <div className="justify-between items-center hidden group-hover:flex">
        <h2 className="text-2xl font-extrabold">
          {questionIndex} - {question?.text}
        </h2>
        <div className="space-x-5">
          <button
            onClick={() => {
              alert(question?.hint);
            }}
            className="text-4xl hover:text-yellow-500 hover:scale-105 transition-all"
          >
            <HiOutlineLightBulb />
          </button>
          {/* <button
            onClick={() => {
              setQuestionIndex((prev) => prev + 1);
            }}
          >
            Skip
          </button> */}
        </div>
      </div>
    </div>
  );
};
