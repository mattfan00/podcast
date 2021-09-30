import React from "react"
import classNames from "classnames"

interface Props {
  className?: string
}

export const Input = React.forwardRef<HTMLInputElement, Props>(({
  className,
  ...rest
}, ref) => {
  return (
    <input
      ref={ref}
      className={classNames("input", className)}
      {...rest}
    />
  )
})
