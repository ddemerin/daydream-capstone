import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import '../write.scss'

const UploadBook = props => {
  const authorId = props.match.params.id
  const [book, setBook] = useState({})
  const [wasSuccessfullyCreated, setWasSuccessfullyCreated] = useState({
    shouldRedirect: false,
    newBookInformation: {},
  })

  const updateBookData = e => {
    e.preventDefault()
    const key = e.target.name
    console.log(key)
    const value = e.target.value
    console.log(value)
    setBook(prevBook => {
      prevBook[key] = value
      return prevBook
    })
  }

  const addBookToApi = async e => {
    e.preventDefault()
    console.log('adding', book)
    const resp = await axios.post(`api/author/${authorId}/book`, book)
    console.log(resp)
    if (resp.status === 200) {
      setWasSuccessfullyCreated({
        shouldRedirect: true,
        newBookInformation: resp.data,
      })
    }
  }
  if (wasSuccessfullyCreated.shouldRedirect) {
    return (
      <Redirect
        to={{
          pathname: `/book/${wasSuccessfullyCreated.newBookInformation.id}`,
          state: { book: wasSuccessfullyCreated.newBookInformation },
        }}
      />
    )
  } else {
  }

  return (
    <>
      <div className="author-book-form-container">
        <form className="author-book-form" onSubmit={addBookToApi}>
          <div className="author-book-form-body">
            <section className="book-section">
              <p>What is the title of the book?</p>
              <input
                className="book-input"
                type="text"
                name="Title"
                onChange={updateBookData}
                required
              />
              <p>Write a short description of the book.</p>
              <textarea
                className="description-input"
                type="text"
                name="Description"
                placeholder="Ex. In the first of five short stories, clever Frog finds a way to
        rouse his sleepy friend. And as children will soon see, theirs is
        a marvelous friendship. When Frog doesn't feel well, Toad tries to
        tell him a story. When Toad loses a button, Frog helps him look
        for it."
                onChange={updateBookData}
                required
              />
              {/* <p>When was the book written?</p>
    <input
      className="date-input"
      type="text"
      name="DateWritten"
      onChange={updateBookData}
      required
    /> */}
            </section>
          </div>
          <div className="upload-button">
            <button className="submit-data">Upload Book</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default UploadBook
