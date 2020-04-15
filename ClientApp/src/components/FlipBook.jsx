import React from 'react'
import FlipPage from 'react-flip-page'
import '../flipBook.scss'

const FlipBook = props => {
  const { page } = props
  console.log(page)

  return (
    <>
      <div className="flip-book-container">
        <FlipPage
          uncutPages
          height="670"
          width="responsive"
          showSwipeHint
          orientation="horizontal"
        >
          <img className="pages" src={page.imageUrl} alt="First Page" />
        </FlipPage>
      </div>
    </>
  )
}

export default FlipBook
