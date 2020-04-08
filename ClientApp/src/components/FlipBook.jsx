import React from 'react'
import Page1 from '../images/Frog-n-Toad-_1.png'
import Page2 from '../images/Frog-n-Toad-_2.png'
import Page3 from '../images/Frog-n-Toad-_3.png'
import Page4 from '../images/Frog-n-Toad-_4.png'
import FlipPage from 'react-flip-page'

const FlipBook = () => {
  return (
    <>
      <div className="flip-book-container">
        <FlipPage
          uncutPages
          height="675"
          width="responsive"
          showSwipeHint
          orientation="horizontal"
        >
          <img className="pages" src={Page1} alt="First Page" />
          <img className="pages" src={Page2} alt="Second Page" />
          <img className="pages" src={Page3} alt="Third Page" />
          <img className="pages" src={Page4} alt="Fourth Page" />
        </FlipPage>
      </div>
    </>
  )
}

export default FlipBook
