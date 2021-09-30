import React from "react"
import { Link } from "../components/Link"
import classNames from "classnames"

interface Props {
  children: React.ReactNode
  href?: string
  className: string
  variant: "light" | "dark" | "plain",
  size?: "sm"
  active?: boolean
  disabled?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button: React.FC<Props> = ({
  children,
  href,
  className,
  variant = "light",
  size,
  active,
  disabled,
  onClick,
  ...rest
}) => {
 const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      e.stopPropagation()
      onClick(e)
    }
  }

  const style = classNames(
    "btn",
    `btn-${variant}`,
    size ? `btn-${size}` : "",
    { 
      "active": active,
      "disabled": disabled,
    },
    className,
  )

  return (
    href ? (
    <Link href={href}>
      <button
        className={style}
        {...rest}
      >
        {children}
      </button>
    </Link>
    ) : (
    <button 
      className={style}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
    )
  )
}
