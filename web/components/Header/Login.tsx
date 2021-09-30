import React, { useState } from "react"
import { Modal, Button, Input } from "../../ui"
import { useForm, SubmitHandler } from "react-hook-form"
import { Dialog } from "@headlessui/react"

export const Login: React.FC<{}> = ({
})  => {
  interface LoginFields  {
    email: string
    password: string
  }

  const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginFields>()
  const [showModal, setShowModal] = useState(false)

  const onSubmit: SubmitHandler<LoginFields> = (data) => console.log(data)

  return (
    <>
      <Button 
        variant="plain"
        className="mr-2"
        onClick={() => setShowModal(true)}
      >Log in</Button>

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
      >
        <Modal.Title>
          Login
        </Modal.Title>

        <Modal.Description>
          Welcome back to podcast!
        </Modal.Description>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input className="w-full" {...register("email")} />
          <Input className="w-full" {...register("password")} />

          <Button type="submit">Submit</Button>
        </form>
      </Modal>
    </>
  )
}
