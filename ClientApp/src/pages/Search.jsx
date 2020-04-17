import React, { useState } from 'react'
import '../search.scss'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <>
      <div className="search-container">
        <input
          type="search"
          className="search"
          placeholder="What book would you like to read?"
        />
        <button>Search</button>
      </div>
    </>
  )
}

export default Search
