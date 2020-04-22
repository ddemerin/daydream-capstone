import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Featured = props => {
  const { featured } = props

  return (
    <>
      <div className="featured-book-title">
        <h1>{featured.title}</h1>
      </div>
      <section className="featured-book-container">
        <div className="featured-book-image-container">
          <div className="featured-book-image-box">
            <div className="featured-book-image-border">
              <a
                href={`/read/${featured.id}`}
                className="featured-book-image-link"
              >
                <img
                  src={featured.pages[0].imageUrl}
                  className="featured-book-image"
                  alt="Featured Book Cover"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="featured-book-writeup-container">
          <article className="featured-book-writeup">
            <p>{featured.description}</p>
          </article>
        </div>
      </section>
    </>
  )
}

export default Featured
