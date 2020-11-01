import React, { useState } from "react";
import { fetchQuizQuestions } from "./API";
//components
import QuestionCard from "./components/QuestionCard";
//Types
import { QuetionState, Difficulty } from "./API";
//styles
import { GlobalStyle } from "./App.styles";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setloading] = useState(false);
  const [questions, setQuestions] = useState<QuetionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setloading(true);
    setGameOver(false);

    const newQuestion = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestion);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setloading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // users answer
      const answer = e.currentTarget.value;
      // check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // Add score if answer is correct
      if (correct) setScore((prev) => prev + 1);
      // save answer in the array for user answer
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuetion = () => {
    // Move on to the next question if not the last question
    const nextQuetion = number + 1;

    if (nextQuetion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuetion);
    }
  };

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <h1>React Quiz</h1>
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startTrivia}>
            Start
          </button>
        ) : null}
        {!gameOver ? <p className="score">Score: {score}</p> : null}
        {loading && <p>Loading Questions ...</p>}
        {!loading && !gameOver && (
          <QuestionCard
            questionNr={number + 1}
            totalQuetions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <button className="next" onClick={nextQuetion}>
            Next Queston
          </button>
        ) : null}
      </div>
    </>
  );
};

export default App;
