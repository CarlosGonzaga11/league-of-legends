import type { Champion } from "../hooks/championContext";

export type ChampionsResponse = {
  type: string;
  format: string;
  version: string;
  data: Record<string, Champion>;
};
