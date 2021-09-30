import React, { useState } from "react"
import { Modal, Button } from "../../ui"
import { FormField } from "../../components/FormField"
import { useForm, SubmitHandler } from "react-hook-form"
import { Dialog } from "@headlessui/react"
import axios from "axios"

export const Login: React.FC<{}> = ({
})  => {
  interface LoginFields  {
    email: string
    password: string
  }

  const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginFields>()
  const [showModal, setShowModal] = useState(false)

  const onSubmit: SubmitHandler<LoginFields> = async (data) => {
    const result = await axios.post("http://localhost:8080/v1/auth/login", data)
    console.log(result)
  }

  const handleClose = () => setShowModal(false)

  return (
    <>
      <Button 
        variant="plain"
        className="mr-2"
        onClick={() => setShowModal(true)}
      >Log in</Button>

      <Modal
        size="sm"
        open={showModal}
        onClose={handleClose}
      >
        <Modal.Title>
          Log in
        </Modal.Title>

        <Modal.Description>
          Welcome back to podcast!
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
