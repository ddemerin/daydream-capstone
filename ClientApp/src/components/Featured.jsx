import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Featured = props => {
  const { book } = props
  // console.log({ book })

  return (
    <>
      <div className="featured-book-container">
        <div className="featured-book-box">
          <div className="featured-book-border">
            <a href={`/read/${book.id}`} className="featured-book-link">
              <img src={book.pages[0].imageUrl} className="featured-book" />
            </a>
          </div>
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
