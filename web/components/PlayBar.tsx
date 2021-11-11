import React, { useState } from "react"
import { PlayButton } from "../components/PlayButton"
import { Howl } from "howler"
import { clientQuery } from "../lib/axios"

export const PlayBar: React.FC<{}> = () => {
  const handlePlay = (e: React.MouseEvent<HTMLButtonElement>) => {
    const myAudio = new Audio("http://localhost:8080/v1/file/get/fd51427d-d246-4b77-85fd-f5aa0ab4babf")
    //const myAudio = new Audio("http://localhost:8080/v1/file/get/4d5f5c8a-7bcc-4074-805b-6058cbf7431b")

    myAudio.play()
    /*
    var sound = new Howl({
      src: ["http://localhost:8080/v1/file/get/fd51427d-d246-4b77-85fd-f5aa0ab4babf"],
      //src: ["http://localhost:8080/v1/file/get/4d5f5c8a-7bcc-4074-805b-6058cbf7431b"],
      format: ["mp3"],
      html5: true
    })

    sound.play();
     */

    /*
    clientQuery.get("/file/get/fd51427d-d246-4b77-85fd-f5aa0ab4babf", {
      headers: {
        "Range": "bytes=0-1000"
      }
    })
      .then(res => {
        console.log(res.data)
      })
     */
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
