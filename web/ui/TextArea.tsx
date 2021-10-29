import React from "react"
import classNames from "classnames"

interface Props {
  className?: string
  fullWidth?: boolean
}

export const TextArea: React.FC<Props> = ({
  className,
  fullWidth,
  ...rest
}) => {
  const textAreaStyle = classNames(
    "input", 
    { "w-full": fullWidth }, 
    className
  )

  return (
    <textarea
      className={textAreaStyle}
      {...rest}
    />
  )
}
