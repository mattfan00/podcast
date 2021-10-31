import React, { useState, useRef } from "react"
import { Modal, Button } from "../../ui"
import { clientQuery } from "../../lib/axios"
import { useForm, SubmitHandler } from "react-hook-form"
import { FormField } from "../FormField"

export const Upload: React.FC<{}> = () => {
  interface FileDetails {
    id: string
    fileName: string
    url: string
  }

  interface EpisodeFields {
    title: string
    description: string
  }

  const [showModal, setShowModal] = useState<boolean>(false)
  const [showEpisodeDetails, setShowEpisodeDetails] = useState<boolean>(false)
  const [fileDetails, setFileDetails] = useState<FileDetails>()
  const inputFile = useRef<HTMLInputElement>(null)

  const handleClose = () => setShowModal(false)

  const handleSelectFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files![0]

    const blob = await selectedFile.arrayBuffer()

    const result = await clientQuery.post<FileDetails>(`/file/upload/${selectedFile.name}`, blob, {
      headers: {
        "content-type": "application/octet-stream"
      }
    })

    setFileDetails(result.data)
    setShowEpisodeDetails(true)
  }

  const { register, handleSubmit, watch, formState: { errors } } = useForm<EpisodeFields>()

  return (
     <>
      <Button 
        variant="dark"
        onClick={() => setShowModal(true)}
      >Upload</Button>

      <Modal
        size="lg"
        open={showModal}
        onClose={handleClose}
      >
        <Modal.Title>Post a new episode</Modal.Title>

        {!showEpisodeDetails ? (
        <>
          <input 
            ref={inputFile}
            type="file" 
            name="file" 
            onChange={handleSelectFile} 
            className="hidden"
          />

          <div 
            className="flex items-center justify-center py-6 bg-gray-100 rounded cursor-pointer"
            onClick={() => inputFile.current!.click()}
          >
            Choose a file to upload
          </div>
        </>
        ) : (
        <>
          <div className="flex items-center px-3 py-2 mb-4 bg-gray-100 rounded">
            {fileDetails!.fileName}
          </div>

          <form onSubmit={handleSubmit(() => {})}>
            <FormField 
              className="mb-3"
              label="Title"
              type="email"
              fullWidth
              {...register("title")}
            />

            <FormField 
              label="Description"
              fullWidth
              {...register("description")}
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
        </>
        )}
      </Modal>
    </>
  )
}

