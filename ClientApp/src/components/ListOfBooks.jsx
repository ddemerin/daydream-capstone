import React from 'react'
import '../styles/listOfBook.scss'

const ListOfBooks = props => {
  const { book } = props
  // console.log({ book })

  return (
    <>
      <section className="listofbooks-book-container">
        <div className="listofbooks-book-image-container">
          <div className="listofbooks-book-image-box">
            <div className="listofbooks-book-image-border">
              <a
                href={`/read/${book.id}`}
                className="listofbooks-book-image-link"
              >
                <img
                  src={book.pages[0].imageUrl}
                  className="listofbooks-book-image"
                  alt="Book Cover"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="listofbooks-book-writeup-container">
          <article className="listofbooks-book-writeup">
            <p className="listofbooks-description">{book.description}</p>
          </article>
        </div>
      </section>
    </>
  )
}

export default ListOfBooks
