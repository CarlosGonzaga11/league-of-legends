import { createContext, useContext, type ReactNode } from "react";
import { FetchChampions } from "../hooks/useChampions";

export type Champion = {
  id: string;
  name: string;
  title: string;
  info: { attack: number; defense: number; magic: number; difficulty: number };
  tags: string[];
  image: string;
  blurb: string;
  stats: {
    hp: number;
    hpperlevel: number;
    mp: number;
    mpperlevel: number;
    movespeed: number;
    armor: number;
    armorperlevel: number;
    spellblock: number;
    spellblockperlevel: number;
    attackrange: number;
    hpregen: number;
    hpregenperlevel: number;
    mpregen: number;
    mpregenperlevel: number;
    crit: number;
    critperlevel: number;
    attackdamage: number;
    attackdamageperlevel: number;
    attackspeed: number;
    attackspeedperlevel: number;
  };
};

type ChampionsContextType = {
  champions: Record<string, Champion> | null;
};

const ChampionsContext = createContext<ChampionsContextType | undefined>(
  undefined
);

export const ChampionsProvider = ({ children }: { children: ReactNode }) => {
  const { data: champions } = FetchChampions();

  const formattedChampions = champions ? champions.data : null;

  return (
    <ChampionsContext.Provider value={{ champions: formattedChampions }}>
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
