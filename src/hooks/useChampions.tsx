import { useQuery } from "@tanstack/react-query";
import { getChampions } from "../api/api";

export function FetchChampions() {
  return useQuery({
    queryKey: ["champions"],
    queryFn: getChampions,
  });
}
