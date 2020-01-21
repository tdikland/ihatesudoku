import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

const UploadSudoku = () => {
  const [image, setImage] = useState(null)
  const [imURL, setImURL] = useState(null)

  const onDrop = useCallback(acceptedFiles => {
    setImage(acceptedFiles[0])
    console.log(acceptedFiles[0])
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const fetchSudokuImage = (img) => {
    fetch("http://localhost:8888/api/solve/upload", {
      method: "POST",
      body: JSON.stringify({
        sudokuImage: img
      })
    })
      .then(response => response.json())
      .then(data => console.log(data))
  }

  return (
    <div>
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      { isDragActive
        ? <p>Drop here</p>
        : <p>Drop here or click here to open file</p>
      }
    </div>
    <div>
    <img src={image} />
    </div>
    <button type='button' onClick={() => fetchSudokuImage(image)}>
      Click to send image
    </button>
    </div>
  )
}

export default UploadSudoku
