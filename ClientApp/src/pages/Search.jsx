import React, { useState, useEffect } from 'react'
import '../search.scss'
import axios from 'axios'
import ListOfBooks from '../components/ListOfBooks'
import SearchResults from '../components/SearchResults'

const Search = () => {
  const [book, setBook] = useState([])
  console.log(book)

  const getBookData = async () => {
    const respBook = await axios.get(`api/book/`)
    setBook(respBook.data)
    console.log(respBook.data)
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
    console.log(respSearch.data)
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
                return <SearchResults book={results} />
              })
            : book.map(book => {
                return <ListOfBooks book={book} />
              })}
        </ul>
      </section>
    </>
  )
}

export default Search
