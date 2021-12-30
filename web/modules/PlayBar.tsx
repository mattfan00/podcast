import React, { useState, useRef } from "react"
import { PlayButton } from "../components/PlayButton"
import { usePlayController } from "../hooks/usePlayController"
import { usePlayControllerStore } from "../globalStore/usePlayControllerStore"

export const PlayBar: React.FC<{}> = () => {
  const { currentEpisode, sound, isPlaying } = usePlayControllerStore()
  const seekerRef = useRef<HTMLDivElement | null>(null)

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (currentEpisode && sound) { // only seek if there is an episode loaded in
      const seekerRefDiv = seekerRef.current

      if (seekerRefDiv) {
        const seekerLeftX = seekerRefDiv.offsetLeft
        const seekerWidth = seekerRefDiv.clientWidth
        const cursorLeftX = e.clientX

        const seekPercent = (cursorLeftX - seekerLeftX) / seekerWidth
        const seekSeconds = sound.duration() * seekPercent

        sound.seek(seekSeconds)
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
          <div 
            className="relative h-3 mx-3 mb-2 cursor-pointer"
            ref={seekerRef}
          >
            <div 
              className="flex items-center w-full h-full" 
              onClick={handleSeek}
            >
              <div className="w-full h-1 bg-gray-400 rounded">
                <div className="w-1/2 h-full bg-gray-200 rounded"></div>
              </div>
            </div>
          </div>
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
