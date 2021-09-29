import React from "react"
import { Modal, Button } from "../../ui"

interface LoginModal {
  open: boolean
  onClose: any
}

export const LoginModal: React.FC<LoginModal> = ({
  open,
  onClose,
})  => {
  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Modal.Title>
        Login
      </Modal.Title>

      hey this is the login modal
      <Button onClick={() => onClose()}>
        close
      </Button>
    </Modal>
  )
}
