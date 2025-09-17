import { useQuizzContext } from "../../hooks/useQuizzContext";
import Button from "../Button";
type QuizzCardProps = {
  id: number;
  question: string;
  answer: boolean;
  explanation: string;
};
export default function QuizzCard({
  question,
  answer,
  explanation,
}: QuizzCardProps) {
  const { score, setScore, count, setCount, isClicked, setIsClicked } =
    useQuizzContext();

  function handleNextQuetion() {
    setCount(count + 1);
    setIsClicked(false);
  }
  function handleClickSetScore() {
    if (answer) {
      setScore(score + 1);
    }
    return;
  }
  return (
    <div className="flex flex-col items-center gap-10">
      <p className="text-2xl px-2 text-amber-400 flex flex-wrap min-h-3">
        {question}
      </p>
      <div className="flex flex-col gap-3 w-full">
        {isClicked ? (
          <div>
            <button onClick={handleNextQuetion}>Next</button>
          </div>
        ) : (
          <>
            <Button
              count={count}
              setCount={setCount}
              TrueOrFalse="true"
              answerCorrect={answer}
              handleClickSetScore={handleClickSetScore}
            />
            <Button
              count={count}
              setCount={setCount}
              TrueOrFalse="false"
              answerCorrect={answer}
              handleClickSetScore={handleClickSetScore}
            />
          </>
        )}
      </div>
      <div className="border border-b-cyan-600">
        {isClicked && (
          <div>
            <p>{explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
}
