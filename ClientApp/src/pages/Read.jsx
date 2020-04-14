import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FlipBook from '../components/FlipBook'

const Read = props => {
  const bookId = props.match.params.id
  const [book, setBook] = useState({ pages: [] })
  console.log(book)
  console.log(book.pages)

  const getBookData = async () => {
    const resp = await axios.get(`/api/book/${bookId}`)
    setBook(resp.data)
    console.log(resp.data)
  }

  useEffect(() => {
    getBookData()
  }, [])

  return (
    <div>
      <div className="flip-book">
        <FlipBook />
        {/* {book.pages.map(page => {
        return (
        <FlipBook
         /> */}
      </div>
    </div>
  )
}

export default Read
