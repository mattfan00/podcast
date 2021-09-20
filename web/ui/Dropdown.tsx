import React from "react"
import { Menu } from "@headlessui/react"
import { Link } from "../components/Link"
import { Button } from "../ui"
import classNames from "classnames"

interface DropdownButtonProps {
  children: React.ReactNode
}

export const DropdownButton: React.FC<DropdownButtonProps> = ({ 
  children, 
  ...rest
}) => {
  return (
    <Menu.Button as={React.Fragment}>
      <Button {...rest}>
        {children}
      </Button>
    </Menu.Button>
  )
}

interface DropdownMenuProps {
  children: React.ReactNode
  direction?: string
  className?: string
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ 
  children,
  direction = "right",
  className,
}) => {
  return (
    <Menu.Items 
      className={classNames(
        "absolute mt-2 w-auto whitespace-nowrap rounded shadow bg-white z-20 px-1 py-1 focus:outline-none",
        { "left-0": direction === "right", "right-0": direction === "left" },
        className
      )}
      onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}
    >
      {children}
    </Menu.Items>
  )
}

interface DropdownItemProps {
  children: React.ReactNode
  href?: string
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export const DropdownItem: React.FC<DropdownItemProps> = ({ 
  children,
  href,
  onClick,
}) => {
  const style = "block px-3 py-1.5 font-medium text-xs rounded cursor-pointer transition-colors"

  return (
    <Menu.Item>
      {({ active }) => (
        href ? (
          <Link
            href={href} 
            className={classNames(style, { "bg-gray-100": active })}
          >
            {children}
          </Link>
        ) : (
          <div
            onClick={onClick}
            className={classNames(style, { "bg-gray-100": active })}
          >
            {children}
          </div>
        )
      )}
    </Menu.Item>
  )
}

interface DropdownProps {
  children: React.ReactNode
  className?: string
}

const DropdownComponent: React.FC<DropdownProps> = ({
  children,
  className,
}) => {
  return (
    <div className={classNames("inline-block", className)}>
      <Menu as="div" className="relative">
        {children}
      </Menu>
    </div>
  )
}

export const Dropdown = Object.assign(DropdownComponent, {
  Button: DropdownButton,
  Menu: DropdownMenu,
  Item: DropdownItem
})
