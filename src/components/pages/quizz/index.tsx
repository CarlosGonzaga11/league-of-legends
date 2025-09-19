import { FaRegArrowAltCircleLeft } from "react-icons/fa";

import { useQuizzContext } from "../../../hooks/useQuizzContext";
import { questions } from "../../../questions";
import QuizzCard from "../../quizzCard";
import { Link } from "react-router-dom";
export default function Quizz() {
  const {
    count,
    isClicked,
    setIsClicked,
    isCorrect,
    score,
    setCount,
    setScore,
  } = useQuizzContext();
  function nextQuestion() {
    setIsClicked(false);
  }
  function restartedQuizz() {
    setIsClicked(false);
    setScore(0);
    setCount(count - 17);
  }
  return (
    <div className="flex flex-col border h-screen">
      <section className="relative h-screen pb-12 px-4 flex items-center justify-center bg-[#0f1114] flex-col gap-12">
        <div>
          <div className="flex flex-col gap-2.5">
            <div className="pt-2 text-white text-center text-3xl flex justify-center hover:text-amber-200">
              <Link to="/">
                <FaRegArrowAltCircleLeft />
              </Link>
            </div>
            <p className=" text-center text-3xl   text-amber-300 font-bold ">
              League of Quizz
              <br></br>
            </p>
            <span className="text-center text-xl font-normal text-white">
              Teste seus conhecimentos sobre os itens do lolzinho
            </span>
          </div>
        </div>
        <div className=" max-w-5xl  items-center p-2  flex  gap-9 flex-col bg-[#1c1f22] py-2 rounded-2xl">
          <div className="max-w-3xl sm:min-w-4xl flex flex-col gap-10 ">
            <div className="flex justify-between items-start pl-4">
              <div className="text-white">
                {isClicked
                  ? `Resposta da questão ${count}`
                  : `${count + 1} de ${questions.length} perguntas`}
              </div>
              <div className="text-amber-300 text-4xl">
                {count === questions.length ? (
                  `${score} / ${questions.length}`
                ) : (
                  <></>
                )}
              </div>
            </div>
            <div className=" flex  justify-center items-center ">
              {!isClicked && (
                <img className="h-[15vh]" src={questions[count].image} />
              )}
            </div>
            {!isClicked ? (
              questions[count] && (
                <QuizzCard
                  key={questions[count].id}
                  id={questions[count].id}
                  question={questions[count].question}
                  answer={questions[count].answer}
                  explanation={questions[count].explanation}
                />
              )
            ) : (
              <div className="max-w-5xl transition-all duration-500 flex flex-col items center gap-4">
                <p
                  className={`rounded text-xl font-bold flex flex-col gap-6 p-4 ${
                    isCorrect
                      ? "text-green-500 bg-green-300"
                      : "text-red-500 bg-red-300"
                  }`}
                >
                  {questions[count - 1].explanation}
                </p>
                {count === questions.length ? (
                  <button
                    className="text-amber-300 border rounded-2xl cursor-pointer py-2"
                    onClick={restartedQuizz}
                  >
                    Reiniciar
                  </button>
                ) : (
                  <button
                    className="text-amber-50 border rounded-2xl cursor-pointer py-2"
                    onClick={nextQuestion}
                  >
                    Next Question
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
