import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import '../write.scss'

const UploadAuthor = () => {
  const [author, setAuthor] = useState({})

  const updateAuthorData = e => {
    e.preventDefault()
    const key = e.target.name
    console.log(key)
    const value = e.target.value
    console.log(value)
    setAuthor(prevAuthor => {
      prevAuthor[key] = value
      return prevAuthor
    })
  }

  const addAuthorToApi = async () => {
    console.log('adding', author, book)
    // const respAuthor = await axios.post(`api/Author/`, author)
    const respAuthor = await axios.post(`api/Author/`, author)
    console.log(respAuthor)
  }

  return (
    <>
      <form className="author-book-form">
        <div className="author-book-form-body">
          <section className="author-section">
            <p>What is the name of the author?</p>
            <input
              className="author-input"
              type="text"
              name="Name"
              onChange={updateAuthorData}
              required
            />
            <p>Write a short blurb about the author.</p>
            <textarea
              className="blurb-input"
              type="text"
              name="Blurb"
              placeholder="Ex. Arnold Stark Lobel (May 22, 1933 – December 4, 1987) was an American author of children's books, including the Frog and Toad series and Mouse Soup."
              onChange={updateAuthorData}
              required
            />
          </section>
        </div>
        <div className="upload-button">
          <a href="/author/id">
            <button className="submit-data" onClick={addAuthorToApi}>
              Upload Book and Author
            </button>
          </a>
        </div>
      </form>
    </>
  )
}

export default UploadAuthor
