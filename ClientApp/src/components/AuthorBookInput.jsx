import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

const AuthorBookInput = () => {
  const [author, setAuthor] = useState({})
  const [book, setBook] = useState({})
  const [wasSuccessfullyCreated, setWasSuccessfullyCreate] = useState({
    shouldRedirect: false,
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

  const addDataToApi = async () => {
    console.log('adding', author, book)
    const respAuthor = await axios.post('api/Author', author)
    console.log(respAuthor)
    const respBook = await axios.post(
      'api/Book/Author/' + respAuthor.data.id,
      book
    )
    console.log(respBook)
    if (
      (respAuthor.status === 200 && respBook.status === 200) ||
      (respAuthor.status === 201 && respBook.status === 201)
    ) {
      alert('Book submitted')
    } else {
      alert('Title and question body are required to submit question')
    }
  }
  if (wasSuccessfullyCreated.shouldRedirect) {
    return (
      <Redirect
        to={{
          pathname: '/',
        }}
      />
    )
  }

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
        <button className="submit-data" onClick={addDataToApi}>
          Upload Book and Author
        </button>
      </form>
    </>
  )
}

export default AuthorBookInput
