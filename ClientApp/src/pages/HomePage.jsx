import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Featured from '../components/Featured'
import ListOfBooks from '../components/ListOfBooks'
import '../styles/custom.scss'

const HomePage = () => {
  const [book, setBook] = useState([])
  const [featured, setFeatured] = useState({ pages: [{}] })

  const getBookData = async () => {
    const resp = await axios.get(`api/book/`)
    setBook(resp.data)
    const randomize = Math.floor(Math.random() * resp.data.length)
    setFeatured(resp.data[randomize])
  }

  useEffect(() => {
    getBookData()
  }, [])

  return (
    <>
      <main>
        <section className="featured-container">
          <Featured featured={featured} />
        </section>
        <div className="library-header">
          <h1 className="library-title">DAYDREAM LIBRARY</h1>
        </div>
        <ul className="library-container">
          {book.map(book => {
            return <ListOfBooks book={book} key={book.id} />
          })}
        </ul>
      </main>
    </>
  )
}

export default HomePage
