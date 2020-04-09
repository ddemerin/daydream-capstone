import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import '../write.scss'

const UploadBook = () => {
    const [book, setBook] = useState({})

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

    const respBook = await axios.post('api/Book/', book)
    // const respBook = await axios.post(
    //   'api/Book/Author/' + respAuthor.data.id,
    //   book
    // )
    console.log(respBook)

    return (
        <>
          <form className="author-book-form">
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
          <a href="./upload/">
            <button className="submit-data" onClick={addAuthorToApi}>
              Upload Book and Author
            </button>
          </a>
        </div>
      </form>
    </>
  )
}