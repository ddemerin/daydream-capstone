import React, { useState, useEffect } from 'react'
import '../featuredBook.scss'

const SearchResults = props => {
  const { book } = props
  console.log({ book })

  return (
    <>
      <section className="featured-book-container">
        <div className="featured-book-image-container">
          <div className="featured-book-image-box">
            <div className="featured-book-image-border">
              <a href={`/read/${book.id}`} className="featured-book-image-link">
                <img src={book.imageUrl} className="featured-book-image" />
              </a>
            </div>
          </div>
        </div>
        <div className="featured-book-writeup-container">
          <article className="featured-book-writeup">
            <p>{book.description}</p>
          </article>
        </div>
      </section>
    </>
  )
}

export default SearchResults
