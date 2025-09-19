import { createContext, useContext, useState, type ReactNode } from "react";
type QuizzContextProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  textExplanation: boolean;
  setTextExplanation: React.Dispatch<React.SetStateAction<boolean>>;
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
  isCorrect: boolean;
  setIsCorrect: React.Dispatch<React.SetStateAction<boolean>>;
};
const QuizzContext = createContext<QuizzContextProps | undefined>(undefined);

export const QuizzProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [textExplanation, setTextExplanation] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  return (
    <QuizzContext.Provider
      value={{
        count,
        setCount,
        score,
        setScore,
        textExplanation,
        setTextExplanation,
        isClicked,
        setIsClicked,
        isCorrect,
        setIsCorrect,
      }}
    >
      {children}
    </QuizzContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useQuizzContext = () => {
  const contextQuizz = useContext(QuizzContext);
  if (!contextQuizz) {
    throw new Error("useQiuzzConext must be used within a QuizzProvider");
  }
  return contextQuizz;
};
