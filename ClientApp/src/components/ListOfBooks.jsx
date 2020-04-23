import React from 'react'
import '../listOfBook.scss'

const ListOfBooks = props => {
  const { book } = props
  // console.log({ book })

  return (
    <>
      <section className="featured-book-container">
        <div className="featured-book-image-container">
          <div className="featured-book-image-box">
            <div className="featured-book-image-border">
              <a href={`/read/${book.id}`} className="featured-book-image-link">
                <img
                  src={book.pages[0].imageUrl}
                  className="featured-book-image"
                  alt="Book Cover"
                />
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

export default ListOfBooks
