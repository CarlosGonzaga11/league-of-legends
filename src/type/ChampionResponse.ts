import type { Champion } from "./Champion";

export type ChampionsResponse = {
  type: string;
  format: string;
  version: string;
  data: Record<string, Champion>;
};
