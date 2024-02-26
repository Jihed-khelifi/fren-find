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
    <div className="bg-white/70 w-dvw px-10 py-5  absolute bottom-0">
      <div className="flex justify-between items-center">
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
