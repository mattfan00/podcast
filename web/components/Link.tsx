import React from "react"
import NextLink from "next/link"

interface Props {
  children: React.ReactNode
  href: string
  className?: string
}

export const Link: React.FC<Props> = ({ 
  children, 
  href, 
  className,
  ...rest
}) => {
  return (
    <NextLink 
      href={href}
    >
      <a 
        className={className} 
        {...rest}
      >{children}</a>
    </NextLink>
  )
}
