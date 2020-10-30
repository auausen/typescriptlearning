import React, { useState } from "react";
import { fetchQuizQuestions, QuetionState } from "./API";
//components
import QuestionCard from "./components/QuestionCard";
//Types
import { QuestionState, Difficulty } from "./API";

type AnswerObject = {
  question: string;
  answer: 
}

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setloading] = useState(false);
  const [questions, setQuestions] = useState<QuetionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));

  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuetion = () => {};

  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions ...</p>
      {/* <QuestionCard 
    questionNr = {number + 1}
    totalQuetions = {TOTAL_QUESTIONS}
    question={questions[number].question}
    answers={questions[number].answers}
    userAnswer={userAnswers ? userAnswers[number] : undefined}
    callback={checkAnswer}
    /> */}
      <button className="next" onClick={nextQuetion}>
        Next Queston
      </button>
    </div>
  );
};

export default App;