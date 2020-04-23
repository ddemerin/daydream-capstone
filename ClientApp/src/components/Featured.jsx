import React, { useState, useEffect } from 'react'
import Banner from '../images/Banner.png'
import Clouds from '../images/FeaturedClouds.png'
import '../featuredBook.scss'
import axios from 'axios'

const Featured = props => {
  const { featured } = props

  return (
    <>
      <div className="featured-book-title">
        <img className="banner" src={Banner}></img>
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
        <div className="featured-book-writeup-container"></div>
      </section>
      <img className="clouds" src={Clouds} alt="Background Clouds" />
    </>
  )
}

export default Featured
