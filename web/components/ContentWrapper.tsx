import React from "react"
import classNames from "classnames"

interface Props {
  children: React.ReactNode
  size?: "2xl"
}

export const ContentWrapper: React.FC<Props> = ({
  children,
  size = "2xl"
}) => {
  const sizing = {
    "2xl": "max-w-2xl"
  }

  return (
    <div className="w-full px-8 mb-28">
      <div className={classNames("mx-auto", sizing[size])}>
        {children}
      </div>
    </div>
  )
}
