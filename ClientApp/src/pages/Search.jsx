import React, { useState } from 'react'
import '../search.scss'
import axios from 'axios'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  const searchForBooks = async () => {
    const resp = await axios.get(`/api/search/books?searchTerm=${searchTerm}`)
    console.log(resp.data)
    setResults(resp.data)
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
    </>
  )
}

export default Search
