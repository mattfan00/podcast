import React from "react"
import classNames from "classnames"

interface BaseProps {
  className?: string
  type?: string
}

interface Props extends BaseProps {
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
