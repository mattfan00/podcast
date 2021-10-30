import React from "react"
import { Link } from "../components/Link"
import classNames from "classnames"

interface BaseProps {
  children: React.ReactNode
  className?: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
  type?: string
}

interface Props extends BaseProps {
  href?: string
  variant?: "light" | "dark" | "plain",
  size?: "sm"
  active?: boolean
  disabled?: boolean
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
