import React, { useState } from 'react'
import axios from 'axios'

const Featured = props => {
  const { book } = props
  const [page, setPage] = useState([])

  const getPageData = async () => {
    const resp = await axios.get(`/api/book/${book.id}`)
  }

  return (
    <>
      <div className="featured-book-container">
        <div className="featured-book-border">
          <a href={`/read/${book.id}`} className="featured-book-link">
            <img src={book} className="featured-book" />
          </a>
        </div>
      </div>
      <div className="featured-book-writeup-container">
        <div className="featured-book-writeup">
          <p>{book.description}</p>
        </div>
      </div>
    </>
  )
}

export default Featured
