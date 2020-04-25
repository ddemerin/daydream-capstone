import React from 'react'
import Banner from '../images/Featured_Banner.png'
import Clouds from '../images/FeaturedClouds.png'
import '../featuredBook.scss'

const Featured = props => {
  const { featured } = props

  return (
    <>
      <div className="featured-book-banner">
        <img
          className="featured-banner"
          src={Banner}
          alt="Featured Book Banner"
        ></img>
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
          <h3>{featured.title}</h3>
        </div>
      </section>
      <div className="cloud-container">
        <img className="clouds" src={Clouds} alt="Background Clouds" />
      </div>
    </>
  )
}

export default Featured
