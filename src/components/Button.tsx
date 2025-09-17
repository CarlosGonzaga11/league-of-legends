import { useQuizzContext } from "../hooks/useQuizzContext";
import { questions } from "../questions";

type buttonProps = {
  TrueOrFalse: string;
  handleClickSetScore(): void;
  answerCorrect: boolean;
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

export default function Button({
  TrueOrFalse,
  handleClickSetScore,
  answerCorrect,
  count,
  setCount,
}: buttonProps) {
  const { setIsClicked, setIsCorrect } = useQuizzContext();
  function handleClickSetChoiceCorrect() {
    setIsCorrect(false);
    if (count === questions.length) {
      return;
    }
    if (String(answerCorrect) === String(TrueOrFalse)) {
      setIsClicked(true);
      handleClickSetScore();
      setIsCorrect(true);
      setCount(count + 1);
    }

    setCount(count + 1);
    setIsClicked(true);
  }
  return (
    <button
      onClick={handleClickSetChoiceCorrect}
      className="w-full py-2 rounded-xl bg-[#30353a] text-white cursor-pointer hover:bg-[#0f1114]"
    >
      {TrueOrFalse}
    </button>
  );
}
