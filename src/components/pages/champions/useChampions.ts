import { useParams } from "react-router-dom";
import { useChampionsContext } from "../../../hooks/championContext";

function useChampions() {
  const { champions, isLoading } = useChampionsContext();
  const { id } = useParams();
  const champion = champions.find((champion) => champion.id === id);

  function handleCreateUrlBackground(champion: string) {
    return `https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion}_0.jpg`;
  }

  return {
    champion,
    isLoading,
    id,
    handleCreateUrlBackground,
  };
}

export default useChampions;
