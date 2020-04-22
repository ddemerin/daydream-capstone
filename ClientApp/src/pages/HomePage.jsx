import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Featured from '../components/Featured'
import ListOfBooks from '../components/ListOfBooks'

const HomePage = () => {
  const [book, setBook] = useState([])
  console.log(book)

  const getBookData = async () => {
    const resp = await axios.get(`api/book/`)
    setBook(resp.data)
    console.log(resp.data)
  }

  useEffect(() => {
    getBookData()
  }, [])

  return (
    <>
      <main>
        <Featured />
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
