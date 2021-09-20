import React from "react"
import classNames from "classnames"

interface Props {
  className?: string
}

export const TextArea: React.FC<Props> = ({
  className,
  ...rest
}) => {
  return (
    <textarea
      className={classNames("input", className)}
      {...rest}
    />
  )
}
