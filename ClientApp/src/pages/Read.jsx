import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FlipBook from '../components/FlipBook'
import PageLoader from '../components/PageLoader'
import Star from '../images/Favorite-Star-Clicked.png'
import '../styles/flipBook.scss'

const Read = props => {
  const bookId = props.match.params.id
  const [book, setBook] = useState({ pages: [] })

  const getBookData = async () => {
    const resp = await axios.get(`/api/book/${bookId}`)
    setBook(resp.data)
  }

  useEffect(() => {
    getBookData()
  }, [])

  const saveBookForLater = async () => {
    await axios.post(
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
            <img
              className="favorite-star"
              src={Star}
              alt="Favorite Star"
              onClick={saveBookForLater}
            />
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
