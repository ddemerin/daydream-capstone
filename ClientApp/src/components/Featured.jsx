import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Featured = () => {
  const [featured, setFeatured] = useState([])
  console.log(featured)

  const getRandomBook = async () => {
    const resp = await axios.get('/api/book')
    console.log(resp.data)
    const randomize = Math.floor(Math.random() * resp.data.length)
    setFeatured(resp.data[randomize])
  }

  useEffect(() => {
    getRandomBook()
  }, [])

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
