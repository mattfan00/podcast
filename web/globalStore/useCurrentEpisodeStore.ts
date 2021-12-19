import create from "zustand"
import { Episode } from "../types/episode"

interface CurrentEpisodeStore {
  currentEpisode: Episode | null
  setCurrentEpisode: (e: Episode) => void
}

export const useCurrentEpisodeStore = create<CurrentEpisodeStore>(set => ({
  currentEpisode: null,
  setCurrentEpisode: (e) => set(() => ({ currentEpisode: e }))
}))
