import React, { useState } from "react"
import { Modal, Button, Input } from "../../ui"
import { useForm, SubmitHandler } from "react-hook-form"

export const Register: React.FC<{}> = ({
})  => {
  interface RegisterFields  {
    email: string
    password: string
  }

  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterFields>()
  const [showModal, setShowModal] = useState(false)

  const onSubmit: SubmitHandler<RegisterFields> = (data) => console.log(data)

  return (
    <>
      <Button 
        variant="dark"
        className="mr-2"
        onClick={() => setShowModal(true)}
      >Register</Button>

      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
      >
        <Modal.Title>
          Create your account 
        </Modal.Title>

        <Modal.Description>
          Get started with podcast!
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
