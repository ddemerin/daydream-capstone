import React, { useCallback, useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'
import '../upload.scss'

export const UploadPage = () => {
  const [images, setImages] = useState([])
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles)
    const fileToPage = acceptedFiles[0]
    const formData = new FormData()
    formData.append('file', fileToUpload)
    axios
      .post('api/page', formData, {
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
      <p>
        Please upload the pages of your book one at a time, starting from the
        cover and continuing with page 1, then page 2, etc, etc.
      </p>
      {images.map(image => {
        return (
          <li className="image-tile">
            <img src={image.imageUrl} alt="" />
            {/* <p>{image.dateSubmitted}</p> */}
          </li>
        )
      })}
      <div className="bottom-margin"></div>
    </div>
  )
}

export default UploadPage
