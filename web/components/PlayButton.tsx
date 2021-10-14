import React from "react"
import classNames from "classnames"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface Props {
  className?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const PlayButton: React.FC<Props> = ({
  className,
  onClick,
}) => { 
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      e.stopPropagation()
      onClick(e)
    }
  }

  return (
    <button 
      className={classNames(
        "flex items-center justify-center w-8 h-8 rounded-full border bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-200 hover:text-gray-500 transition-colors",
        className
      )}
      onClick={handleClick}
    >
      <FontAwesomeIcon size="xs" icon="play" fixedWidth />
    </button>
  )
}
