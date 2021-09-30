import React from "react"
import classNames from "classnames"

interface Props {
  className?: string
  fullWidth?: boolean,
}

export const Input = React.forwardRef<HTMLInputElement, Props>(({
  className,
  fullWidth,
  ...rest
}, ref) => {
  const inputStyle = classNames(
    "input", 
    { "w-full": fullWidth }, 
    className
  )


  return (
    <input
      ref={ref}
      className={inputStyle}
      {...rest}
    />
  )
})
