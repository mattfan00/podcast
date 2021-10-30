import React from "react"
import classNames from "classnames"

interface BaseProps {
  className?: string
  placeholder?: string
  value?: string
  autoFocus: boolean
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

interface Props extends BaseProps {
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
