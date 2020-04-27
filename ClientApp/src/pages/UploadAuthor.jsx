import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import '../styles/write.scss'

const UploadAuthor = () => {
  const [author, setAuthor] = useState({})
  const [wasSuccessfullyCreated, setWasSuccessfullyCreated] = useState({
    shouldRedirect: false,
    newAuthorInformation: {},
  })

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

  const addAuthorToApi = async e => {
    e.preventDefault()
    // console.log('adding', author)
    const resp = await axios.post(`api/author/`, author)
    // console.log(resp)
    if (resp.status === 201) {
      setWasSuccessfullyCreated({
        shouldRedirect: true,
        newAuthorInformation: resp.data,
      })
      console.log(resp.data)
    }
  }
  if (wasSuccessfullyCreated.shouldRedirect) {
    return (
      <Redirect
        to={{
          pathname: `/author/${wasSuccessfullyCreated.newAuthorInformation.id}`,
          state: { author: wasSuccessfullyCreated.newAuthorInformation },
        }}
      />
    )
  } else {
    return (
      <>
        <div className="author-book-form-container">
          <form className="author-book-form" onSubmit={addAuthorToApi}>
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
              <button className="submit-data">Upload Author</button>
            </div>
          </form>
        </div>
      </>
    )
  }
}

export default UploadAuthor
