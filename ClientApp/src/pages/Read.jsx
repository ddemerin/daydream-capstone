import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FlipBook from '../components/FlipBook'
import PageLoader from '../components/PageLoader'
import '../flipBook.scss'

const Read = props => {
  const bookId = props.match.params.id
  console.log(props)
  const [book, setBook] = useState({ pages: [] })
  console.log(book)
  console.log(book.pages)

  const getBookData = async () => {
    const resp = await axios.get(`/api/book/${bookId}`)
    setBook(resp.data)
    console.log(resp.data)
  }

  useEffect(() => {
    getBookData()
  }, [])
  console.log(book)

  const saveBookForLater = async () => {
    const resp = await axios.post(
      `/api/bookmark/${book.id}`,
      {},
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token'),
        },
      }
    )
  }

  if (book) {
    return (
      <div>
        <section className="flip-book">
          <FlipBook book={book} />
        </section>
        {localStorage.getItem('token') ? (
          <section className="bookmark">
            Like this trail?
            <button onClick={saveBookForLater}>bookmark for later</button>
          </section>
        ) : (
          <></>
        )}
      </div>
    )
  } else {
    return <PageLoader />
  }
}

export default Read
