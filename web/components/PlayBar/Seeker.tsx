import React, { useState, useRef } from "react"

interface Props {
  min?: number 
  max?: number
  value: number
  disabled?: boolean
  onChange?: (e: React.MouseEvent<HTMLDivElement>, value: number) => void
}

export const Seeker: React.FC<Props> = ({
  min = 0,
  max = 100,
  value = 0,
  disabled = false,
  onChange,
}) => {
  const [hover, setHover] = useState(false)
  const seekerRef = useRef<HTMLDivElement | null>(null)

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!disabled) {
      const seekerRefDiv = seekerRef.current

      if (seekerRefDiv) {
        const seekerLeftX = seekerRefDiv.offsetLeft
        const seekerWidth = seekerRefDiv.clientWidth
        const cursorLeftX = e.clientX

        const seekPercent = (cursorLeftX - seekerLeftX) / seekerWidth
        const newValue = ((max - min) * seekPercent) + min

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
        className="flex w-full h-full" 
        onClick={handleSeek}
        onMouseEnter={() => { if (!disabled) setHover(true) }}
        onMouseLeave={() => { if (!disabled) setHover(false) }}
      >
        <div className="absolute w-full h-1 bg-gray-400 rounded top-1/2 -translate-y-1/2">
          <div 
            className="h-full bg-gray-200 rounded transition-all duration-200"
            style={{width: `${((value - min) / (max - min)) * 100}%`}}
          ></div>
          <div
            className="absolute top-0 w-3 h-3 -ml-1.5 bg-gray-200 rounded-full top-1/2 -translate-y-1/2 transition-all"
            style={{
              opacity: hover ? 1 : 0,
              left: `${((value - min) / (max - min)) * 100}%`
            }}
          >
          </div>
        </div>
      </div>
    </div>

  )
}
