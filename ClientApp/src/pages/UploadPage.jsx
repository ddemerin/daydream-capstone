import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'
import '../styles/upload.scss'

export const UploadPage = props => {
  const bookId = props.match.params.id
  const [images, setImages] = useState([])

  const onDrop = useCallback(acceptedFiles => {
    const fileToPage = acceptedFiles[0]
    const formData = new FormData()
    formData.append('file', fileToPage)
    axios
      .post(`api/book/${bookId}/page`, formData, {
        headers: {
          'content-type': 'multipart/form-data',
          accept: 'application/json',
        },
      })
      .then(resp => {
        setImages(prevImages => [resp.data, ...prevImages])
      })
  })

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

  return (
    <div className="upload-container">
      <h1>Upload your book!</h1>
      <div {...getRootProps()}>
        <div className="upload-button-container">
          <div className="upload-button">
            <button>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p>Upload your pages!</p>
              )}
            </button>
          </div>
        </div>
      </div>
      <section className="instructions-container">
        <p className="instructions">
          Please upload the pages of your book one at a time, starting from the
          cover and continuing with page 1, then page 2, etc, etc.
        </p>
      </section>
      <div className="pages-container">
        <ul className="pages-list-container">
          {images.map(image => {
            return (
              <li className="image-tile" key={image.id}>
                <img src={image.imageUrl} alt="" />
              </li>
            )
          })}
        </ul>
      </div>
      <div className="bottom-margin" />
    </div>
  )
}

export default UploadPage
