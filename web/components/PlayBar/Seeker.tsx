import React, { useState, useRef } from "react"

interface Props {
  min?: number
  max?: number
  disabled?: boolean
  onChange?: (e: React.MouseEvent<HTMLDivElement>, value: number) => void
}

export const Seeker: React.FC<Props> = ({
  min = 0,
  max = 100,
  disabled = false,
  onChange,
}) => {
  const seekerRef = useRef<HTMLDivElement | null>(null)
  const [percent, setPercent] = useState(0)

  console.log("maX: ", max)

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!disabled) { // only seek if there is an episode loaded in
      const seekerRefDiv = seekerRef.current

      if (seekerRefDiv) {
        const seekerLeftX = seekerRefDiv.offsetLeft
        const seekerWidth = seekerRefDiv.clientWidth
        const cursorLeftX = e.clientX

        const seekPercent = (cursorLeftX - seekerLeftX) / seekerWidth
        const newValue = max * seekPercent

        console.log(max, seekPercent)

        setPercent(seekPercent)

        if (onChange) 
          onChange(e, newValue)
      }
    }

  }

  return (
    <div 
      className="relative h-3 mx-3 mb-2 cursor-pointer"
      ref={seekerRef}
    >
      <div 
        className="flex items-center w-full h-full" 
        onClick={handleSeek}
      >
        <div className="w-full h-1 bg-gray-400 rounded">
          <div 
            className="h-full bg-gray-200 rounded transition-all duration-200"
            style={{width: `${percent * 100}%`}}
          ></div>
        </div>
      </div>
    </div>

  )
}
