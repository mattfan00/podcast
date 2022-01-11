import React, { useState, useRef } from "react"

interface Props {
  min?: number 
  max?: number
  value: number
  disabled?: boolean
  onChange?: (e: MouseEvent, value: number) => void
}

export const Seeker: React.FC<Props> = ({
  min = 0,
  max = 100,
  value = 0,
  disabled = false,
  onChange,
}) => {
  const [hover, setHover] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const seekerRef = useRef<HTMLDivElement | null>(null)

  const handleDrag = (e: MouseEvent) => {
    setIsDragging(true)
    handleSeek(e)
  }

  const handleDragStop = (e: MouseEvent) => {
    setIsDragging(false)
    handleSeek(e)

    window.removeEventListener("mousemove", handleDrag)
    window.removeEventListener("mouseup", handleDragStop)
  }

  const handleMouseDown = (e: React.MouseEvent)  => {
    if (!disabled) {
      window.addEventListener("mousemove", handleDrag) 
      window.addEventListener("mouseup", handleDragStop)
    }
  }

  /*
  const handleMouseUp = (e: React.MouseEvent) => {
    window.removeEventListener("mousemove", handleDrag) 
  }
   */

  const handleSeek = (e: MouseEvent) => {
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
        //onClick={handleSeek}
        onMouseDown={handleMouseDown}
        //onMouseUp={handleMouseUp}
        onMouseEnter={() => { if (!disabled) setHover(true) }}
        onMouseLeave={() => { if (!disabled) setHover(false) }}
      >
        <div className="absolute w-full h-1 bg-gray-400 rounded top-1/2 -translate-y-1/2">
          <div 
            className="h-full bg-gray-200 rounded"
            style={{width: `${((value - min) / (max - min)) * 100}%`}}
          ></div>
          <div
            className="absolute top-0 w-3 h-3 -ml-1.5 bg-gray-200 rounded-full top-1/2 -translate-y-1/2 transition-opacity"
            style={{
              opacity: hover || isDragging ? 1 : 0,
              left: `${((value - min) / (max - min)) * 100}%`
            }}
          >
          </div>
        </div>
      </div>
    </div>

  )
}
