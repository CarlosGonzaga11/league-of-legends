import { useQuery } from "@tanstack/react-query";
import type { ChampionsResponse } from "../type/ChampionResponse";
import { getChampions } from "../api/api";

export function FetchChampions() {
  return useQuery<ChampionsResponse>({
    queryKey: ["champions"],
    queryFn: getChampions,
  });
}
