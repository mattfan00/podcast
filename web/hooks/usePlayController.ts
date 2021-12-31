import { Howl } from "howler"
import { usePlayControllerStore } from "../globalStore/usePlayControllerStore"
import { Episode } from "../types/episode"

export const usePlayController = (episode: Episode | null) => { 
  const { 
    sound,
    currentEpisode,
    isPlaying,
    setSound, 
    setCurrentEpisode, 
    setIsPlaying 
  } = usePlayControllerStore.getState()
  
  if (episode === null) return

  if (currentEpisode && currentEpisode.id === episode.id && sound) {
      if (isPlaying) {
        sound.pause()
        setIsPlaying(false)
      } else { 
        sound.play()
        setIsPlaying(true)
      }
  } else {
    setCurrentEpisode(episode)

    const newSound = new Howl({ 
      src: [`http://localhost:8080/v1${episode.url}`],
      format: ["mp3"],
      html5: true,
    })

    setSound(newSound)
    setIsPlaying(true)

    newSound.play()
  }
}
