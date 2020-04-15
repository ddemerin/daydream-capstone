import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FlipBook from '../components/FlipBook'
import PageLoader from '../components/PageLoader'

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

  if (book) {
    return (
      <div>
        <div className="flip-book">
          {book.pages.map(page => {
            return <FlipBook page={page} />
          })}
        </div>
      </div>
    )
  } else {
    return <PageLoader />
  }
}

export default Read
