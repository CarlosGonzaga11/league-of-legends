import { createContext, useContext, type ReactNode } from "react";
import { useQuery } from "@tanstack/react-query";
import { getChampions } from "../api/api";
import type { Champion } from "../type/Champion";

type ChampionsContextType = {
  champions: Champion[];
  isLoading: boolean;
};

const ChampionsContext = createContext<ChampionsContextType | undefined>(
  undefined
);

export const ChampionsProvider = ({ children }: { children: ReactNode }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["champions"],
    queryFn: getChampions,
  });

  const champions: Champion[] = data ? Object.values(data) : [];

  return (
    <ChampionsContext.Provider value={{ champions, isLoading }}>
      {children}
    </ChampionsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useChampionsContext = () => {
  const context = useContext(ChampionsContext);
  if (!context)
    throw new Error(
      "useChampionsContext must be used within a ChampionsProvider"
    );
  return context;
};
