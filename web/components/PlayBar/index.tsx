import React, { useState, useRef, useEffect } from "react"
import { PlayButton } from "../PlayButton"
import { usePlayController } from "../../hooks/usePlayController"
import { usePlayControllerStore } from "../../globalStore/usePlayControllerStore"
import { Seeker } from "./Seeker"

export const PlayBar: React.FC<{}> = () => {
  const { currentEpisode, sound, isPlaying } = usePlayControllerStore()

  const handleSeekerChange = (e: React.MouseEvent<HTMLDivElement>, value: number) => {
    console.log("hey")
    if (currentEpisode && sound)  {
      console.log(value)
      sound!.seek(value)
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
            max={currentEpisode ? currentEpisode.lengthSeconds : 0}
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
