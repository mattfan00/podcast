import React from "react"
import { Transition, Dialog } from "@headlessui/react"
import classNames from "classnames"

interface ModalTitleProps {
  children: React.ReactNode
  tag?: "h1" | "h2" | "h3" | "h4" | "h5"
  className?: string
}

export const ModalTitle: React.FC<ModalTitleProps> = ({ 
  children ,
  tag = "h2",
  className
}) => {
  return (
    <Dialog.Title
      as={tag}
      className={classNames("mb-5", className)}
    >
      {children}
    </Dialog.Title>
  )
}

interface ModalDescriptionProps {
  children: React.ReactNode
  className?: string
}

export const ModalDescription: React.FC<ModalDescriptionProps> = ({ 
  children,
  className
}) => {
  return (
    <Dialog.Description
      as="div"
      className={classNames("-mt-5 mb-5 text-gray-500", className)}
    >
      {children}
    </Dialog.Description>
  )
}

interface ModalProps {
  children: React.ReactNode
  open: any
  onClose: any
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

const ModalComponent: React.FC<ModalProps> = ({
  children,
  open,
  onClose,
  size = "md",
  className
}) => {
  const sizeMappings={
    "sm": "max-w-sm",
    "md": "max-w-md",
    "lg": "max-w-lg",
    "xl": "max-w-xl"
  }

  const modalStyle = classNames(
    "inline-block w-full px-8 py-6 my-8 overflow-hidden text-left align-middle bg-white shadow-xl transform rounded-xl",
    sizeMappings[size],
    className
  )


  return (
    <Transition show={open} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-30 overflow-y-auto"
        open={open}
        onClose={onClose}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black opacity-40" />
          </Transition.Child>

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            className={modalStyle}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-2" 
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0 translate-y-2"
          >
            {children}
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export const Modal = Object.assign(ModalComponent, {
  Title: ModalTitle,
  Description: ModalDescription,
})
