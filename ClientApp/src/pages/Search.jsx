import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ListOfBooks from '../components/ListOfBooks'
import '../styles/search.scss'

const Search = () => {
  const [book, setBook] = useState([])

  const getBookData = async () => {
    const respBook = await axios.get(`api/book/`)
    setBook(respBook.data)
  }

  useEffect(() => {
    getBookData()
  }, [])

  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState({ pages: [] })

  const searchForBooks = async () => {
    const respSearch = await axios.get(
      `/api/search/books?searchTerm=${searchTerm}`
    )
    setResults(respSearch.data)
  }

  return (
    <>
      <div className="search-container">
        <input
          type="search"
          className="search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="What book would you like to read?"
        />
        <button onClick={searchForBooks}>Search</button>
      </div>
      <section className="list-of-books-container">
        <ul className="list-of-books">
          {results.length > 0
            ? results.map(results => {
                return <ListOfBooks book={results} key={results.id} />
              })
            : book.map(book => {
                return <ListOfBooks book={book} key={book.id} />
              })}
        </ul>
      </section>
    </>
  )
}

export default Search
