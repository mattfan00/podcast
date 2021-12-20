import React, { useState } from "react"
import { PlayButton } from "../components/PlayButton"
import { Howl } from "howler"

export const PlayBar: React.FC<{}> = () => {
  const [isPlaying, setIsPlaying] = useState<Boolean>(false)
  const [sound, setSound] = useState<Howl>(new Howl({
    src: ["http://localhost:8080/v1/file/get/fd51427d-d246-4b77-85fd-f5aa0ab4babf"],
    format: ["mp3"],
    html5: true,
    preload: false
  }))

  const handlePlay = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isPlaying) {
      sound.play();
      setIsPlaying(true)
    } else {
      sound.pause()
      setIsPlaying(false)
    }
  }

  return (
    <div className="fixed bottom-0 flex justify-center w-full pointer-events-none">

      <div className="w-full max-w-xl px-6 py-2 mx-8 my-4 mt-auto bg-gray-900 rounded-lg shadow-xl pointer-events-auto"> 
        <div className="flex items-center">
          <div className="flex flex-col flex-1">
            <div className="font-bold text-gray-100">Reflections on College</div>
            <div className="text-xs text-gray-300">Matthew Fan</div>
          </div>
          <div className="ml-2">
            <PlayButton 
              onClick={handlePlay}
            />
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
