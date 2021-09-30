import React, { useState } from "react"
import { Modal, Button } from "../../ui"
import { useForm, SubmitHandler } from "react-hook-form"
import { FormField } from "../../components/FormField"

export const Register: React.FC<{}> = ({
})  => {
  interface RegisterFields  {
    email: string
    username: string
    name: string
    password: string
  }

  const { register, handleSubmit, watch, formState: { errors } } = useForm<RegisterFields>()
  const [showModal, setShowModal] = useState(false)

  const onSubmit: SubmitHandler<RegisterFields> = (data) => console.log(data)

  const handleClose = () => setShowModal(false)

  return (
    <>
      <Button 
        variant="dark"
        className="mr-2"
        onClick={() => setShowModal(true)}
      >Sign up</Button>

      <Modal
        size="sm"
        open={showModal}
        onClose={handleClose}
      >
        <Modal.Title>
          Create your account 
        </Modal.Title>

        <Modal.Description>
          Get started with podcast!
        </Modal.Description>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField 
            className="mb-3"
            label="Email"
            type="email"
            fullWidth
            {...register("email")}
          />

          <FormField 
            className="mb-3"
            label="Username"
            fullWidth
            {...register("username")}
          />

          <FormField 
            className="mb-3"
            label="Name"
            fullWidth
            {...register("name")}
          />

          <FormField 
            label="Password"
            type="password"
            fullWidth
            {...register("password")}
          />

          <div className="flex justify-end mt-6">
            <Button 
              className="mr-2"
              variant="plain" 
              onClick={handleClose}
            >Cancel</Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Modal>
    </>
  )
}
