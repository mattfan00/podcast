import React from "react"
import { PlayButton } from "../components/PlayButton"

export const PlayBar: React.FC<{}> = () => {
  return (
    <div className="fixed bottom-0 flex justify-center w-full pointer-events-none">

      <div className="w-full max-w-xl px-6 py-2 mx-8 my-4 mt-auto bg-gray-900 rounded-lg shadow-xl pointer-events-auto"> 
        <div className="flex items-center">
          <div className="flex flex-col flex-1">
            <div className="font-bold text-gray-100">Reflections on College</div>
            <div className="text-xs text-gray-300">Matthew Fan</div>
          </div>
          <div className="ml-2">
            <PlayButton />
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