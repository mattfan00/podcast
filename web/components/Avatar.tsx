import React from "react"
import classNames from "classnames"

interface Props {
  size?: "xs" | "sm" | "md" | "lg"
  url?: string
  className?: string
}

export const Avatar: React.FC<Props> = ({
  size = "md",
  url,
  className
}) => {
  const sizing = {
    "xs": "w-6 h-6",
    "sm": "w-8 h-8",
    "md": "w-10 h-10",
    "lg": "w-12 h-12"
  }

  return (
    <div className={classNames(sizing[size], "overflow-hidden rounded-full", className)}>
      {url ? (
      <img className="object-cover w-full h-full" alt="Avatar" src={url} />
      ) : (
      <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 16H0V0H16V16ZM11.8437 10.8927C12.383 11.3431 12.383 12.1569 11.8437 12.6073C10.8027 13.4768 9.46243 14 8 14C6.53757 14 5.19734 13.4768 4.15629 12.6073C3.61696 12.1569 3.61696 11.3431 4.15629 10.8927C5.19734 10.0232 6.53757 9.5 8 9.5C9.46243 9.5 10.8027 10.0232 11.8437 10.8927ZM10 6C10 7.10457 9.10457 8 8 8C6.89543 8 6 7.10457 6 6C6 4.89543 6.89543 4 8 4C9.10457 4 10 4.89543 10 6Z" fill="#e5e5e5">
        </path>
      </svg>
      )}
    </div>
  )
}
