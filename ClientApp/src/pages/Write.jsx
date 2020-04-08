import React, { useCallback, useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'
import Book from '../components/Book'

export const Write = () => {
  const [uploadedImageURL, setUploadedImageURL] = useState('')
  const [images, setImages] = useState([])
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
    const fileToUpload = acceptedFiles[0]
    const formData = new FormData()
    formData.append('file', fileToUpload)
    axios
      .post('/file/upload', formData, {
        headers: {
          'content-type': 'multipart/form-data',
          accept: 'application/json',
        },
      })
      .then(resp => {
        console.log(resp.data)
        console.log(images)
        setImages(prevImages => [resp.data, ...prevImages])
      })
  }, [])
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  const loadPages = async () => {
    const resp = await axios.get('/api/page')
    setImages(resp.data)
  }

  useEffect(() => {
    loadPages()
  }, [])

  return (
    <div className="upload-container">
      <h1>Upload your book!</h1>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Upload your pages!</p>
        )}
      </div>
      {images.map(image => {
        return (
          <li className="image-tile">
            <img src={image.imageUrl} alt="" />
            {/* <p>{image.dateSubmitted}</p> */}
          </li>
        )
      })}
    </div>
  )
}

export default Write
