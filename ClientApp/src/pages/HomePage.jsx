import React from 'react'
import FrogToad from '../images/Frog_and_Toad.jpg'

const HomePage = () => {
  return (
    <>
      <main>
        <div className="featured-book-container">
          <div className="featured-book-border">
            <a href="/read" className="featured-book-link">
              <img src={FrogToad} className="featured-book" />
            </a>
          </div>
        </div>
        <div className="featured-book-writeup-container">
          <div className="featured-book-writeup">
            <p>
              In the first of five short stories, clever Frog finds a way to
              rouse his sleepy friend. And as children will soon see, theirs is
              a marvelous friendship. When Frog doesn't feel well, Toad tries to
              tell him a story. When Toad loses a button, Frog helps him look
              for it.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}

export default HomePage
