import React from "react"
import { Input, TextArea } from "../ui"
import classNames from "classnames"

interface Props {
  className?: string
  label?: React.ReactNode
  fullWidth?: boolean
  type?: string
  as?: "Input" | "TextArea"
}

export const FormField = React.forwardRef<HTMLInputElement, Props>(({
  className,
  label,
  fullWidth,
  as = "Input",
  ...rest
}, ref) => {
  return (
    <div className={className}>
      {label ? (
      <div className="mb-1 text-xs text-gray-500">{label}</div>
      ) : ""}

      <Input
        fullWidth
        ref={ref}
        {...rest}
      />
    </div>
  )
})
