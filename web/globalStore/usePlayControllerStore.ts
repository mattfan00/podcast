import create from "zustand"
import { Episode } from "../types/episode"
import { Howl } from "howler"

interface PlayControllerStore {
  currentEpisode: Episode | null
  setCurrentEpisode: (e: Episode) => void

  sound: Howl | null 
  setSound: (s: Howl) => void

  isPlaying: boolean
  setIsPlaying: (isPlaying: boolean) => void
}

export const usePlayControllerStore = create<PlayControllerStore>((set, get) => ({
  currentEpisode: null,
  setCurrentEpisode: (e) => set(() => ({ currentEpisode: e })),

  sound: null,
  setSound: (s) => { 
    const sound = get().sound
    if (sound) { 
      sound.unload()
    }

    set(() => ({ sound: s }))
  },

  isPlaying: false,
  setIsPlaying: (isPlaying) => {
    set(() => ({ isPlaying }))
  }
}))
