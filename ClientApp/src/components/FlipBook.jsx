import React from 'react'
import FlipPage from 'react-flip-page'
import '../flipBook.scss'

const FlipBook = props => {
  const { book } = props
  // console.log(book)

  return (
    <>
      <div className="flip-book-container">
        <FlipPage
          uncutPages
          height="850"
          width="responsive"
          showSwipeHint
          orientation="horizontal"
        >
          {book.pages.map(page => (
            <img className="pages" src={page.imageUrl} alt="First Page" />
          ))}
        </FlipPage>
      </div>
    </>
  )
}
export default FlipBook
