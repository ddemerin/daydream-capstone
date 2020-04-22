import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Featured from '../components/Featured'
import ListOfBooks from '../components/ListOfBooks'

const HomePage = () => {
  const [book, setBook] = useState([])
  const [featured, setFeatured] = useState({ pages: [{}] })
  console.log(book)
  console.log(featured)

  const getBookData = async () => {
    const resp = await axios.get(`api/book/`)
    setBook(resp.data)
    console.log(resp.data)
    const randomize = Math.floor(Math.random() * resp.data.length)
    setFeatured(resp.data[randomize])
  }

  useEffect(() => {
    getBookData()
  }, [])

  return (
    <>
      <main>
        <Featured featured={featured} />
        <ul>
          {book.map(book => {
            return <ListOfBooks book={book} />
          })}
        </ul>
      </main>
    </>
  )
}

export default HomePage
