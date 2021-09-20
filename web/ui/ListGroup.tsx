import React from "react"
import classNames from "classnames"

interface ListItemProps {
  children: React.ReactNode
  className?: string
}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div 
      className={classNames("border py-3 px-5 -mb-px first:rounded-t-md last:rounded-b-md", className)}
      {...rest}
    >
      {children}
    </div>
  )
}

interface ListGroupProps {
  children: React.ReactNode
  className?: string
}

const ListGroupComponent: React.FC<ListGroupProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div 
      className={classNames("rounded-md", className)}
      {...rest}
    >
      {children}
    </div>
  )
}

export const ListGroup = Object.assign(ListGroupComponent, { 
  Item: ListItem
})
