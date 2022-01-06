import React, { useState, useRef, useEffect } from "react"
import { PlayButton } from "../PlayButton"
import { usePlayController } from "../../hooks/usePlayController"
import { usePlayControllerStore } from "../../globalStore/usePlayControllerStore"
import { Seeker } from "./Seeker"

let intervalId: any;
let timeoutId: any;
let step: number;

export const PlayBar: React.FC<{}> = () => {
  const { currentEpisode, sound, isPlaying } = usePlayControllerStore()
  const [progress, setProgress] = useState(0)

  const updateProgressBar = () => {
    // current percentage into the song
    const currPercent = (sound!.seek() / currentEpisode!.durationSeconds) * 100;
    // current second the progress bar should be showing at 
    const currSecond = Math.round(currPercent / step)
    setProgress(currSecond)
  }

  useEffect(() => {
    if (isPlaying && sound && currentEpisode) { // if a sound just started playing
      if (!intervalId) {
        step = 100 / currentEpisode.durationSeconds

        if (!timeoutId)  {
          timeoutId = setTimeout(() => {
            updateProgressBar()
            intervalId = setInterval(() => {
              updateProgressBar()
            }, 1000)
          }, 1000 - (sound.seek() * 1000) % 1000)
        }
      } 
    } else {
      clearInterval(intervalId)
      intervalId = 0

      clearTimeout(timeoutId)
      timeoutId = 0
    }
  }, [isPlaying])

  const handleSeekerChange = (e: React.MouseEvent<HTMLDivElement>, value: number) => {
    if (currentEpisode && sound)  {
      setProgress(value)
      sound!.seek(value)

      if (isPlaying) { // if the song is currently playing then create a new interval
        clearInterval(intervalId)
        clearTimeout(timeoutId)

        timeoutId = setTimeout(() => {
          updateProgressBar()
          intervalId = setInterval(() => {
            updateProgressBar()
          }, 1000)
        }, 1000 - (sound.seek() * 1000) % 1000)
      }
    }
  }

  return (
    <div className="fixed bottom-0 flex justify-center w-full pointer-events-none">

      <div className="w-full max-w-xl">
        <div className="flex flex-col mx-8 my-4 mt-auto bg-gray-900 rounded-lg shadow-xl pointer-events-auto"> 
          <div className="flex items-center px-6 py-2 mb-1">
            <div className="flex flex-col flex-1">
              <div className="font-bold text-gray-100">{currentEpisode && currentEpisode.title}</div>
              <div className="text-xs text-gray-300">test</div>
            </div>
            <div className="ml-2">
              <PlayButton 
                isPlaying={isPlaying}
                onClick={() => usePlayController(currentEpisode)}
              />
            </div>
          </div>

          <Seeker
            min={0}
            max={currentEpisode ? currentEpisode.durationSeconds : 100}
            value={progress}
            disabled={!currentEpisode && !sound}
            onChange={handleSeekerChange}
          /> 
        </div>
      </div>

      {/*
      <div className="w-full px-6 py-4 mt-auto bg-white border-t pointer-events-auto"> 
        <div className="flex items-center">
          <div className="flex flex-col flex-1 leading-5">
            <div className="font-bold">Reflections on College</div>
            <div className="text-xs text-gray-500">Matthew Fan</div>
          </div>
          <div className="ml-2">
            <PlayButton />
          </div>
        </div>
      </div>
        */}

    </div>
  )
}
