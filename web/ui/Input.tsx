import React from "react"
import classNames from "classnames"

interface Props {
  className?: string
}

export const Input: React.FC<Props> = ({
  className,
  ...rest
}) => {
  return (
    <input
      className={classNames("input", className)}
      {...rest}
    />
  )
}
