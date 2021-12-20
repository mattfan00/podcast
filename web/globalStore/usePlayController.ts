import create from "zustand"
import { Episode } from "../types/episode"

interface PlayControllerStore {
  currentEpisode: Episode | null
  setCurrentEpisode: (e: Episode) => void
}

export const usePlayController = create<PlayControllerStore>(set => ({
  currentEpisode: null,
  setCurrentEpisode: (e) => set(() => ({ currentEpisode: e }))
}))
