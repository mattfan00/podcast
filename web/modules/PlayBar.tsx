import React, { useState } from "react"
import { PlayButton } from "../components/PlayButton"
import { usePlayController } from "../hooks/usePlayController"
import { usePlayControllerStore } from "../globalStore/usePlayControllerStore"

export const PlayBar: React.FC<{}> = () => {
  const { currentEpisode } = usePlayControllerStore()

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
                onClick={() => usePlayController(currentEpisode)}
              />
            </div>
          </div>
          <div className="relative flex h-1 mx-3 mb-2 rounded">
            <div className="absolute top-0 w-full h-full bg-gray-400 rounded"></div>
            <div className="absolute top-0 z-10 w-1/2 h-full bg-gray-200 rounded"></div>
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
