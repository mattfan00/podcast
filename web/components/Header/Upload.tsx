import React, { useState, useRef } from "react"
import { Modal, Button } from "../../ui"
import { clientQuery } from "../../lib/axios"

export const Upload: React.FC<{}> = () => {
  const [showModal, setShowModal] = useState(false)
  const inputFile = useRef<HTMLInputElement>(null)

  const handleClose = () => setShowModal(false)

  const handleSelectFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files![0]

    const blob = await selectedFile.arrayBuffer()
    console.log(blob)

    clientQuery.post("/upload", blob, {
      headers: {
        "content-type": "application/octet-stream"
      }
    })
  }

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
      </Modal>
    </>
  )
}

