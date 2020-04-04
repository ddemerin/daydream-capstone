import React from 'react'

const Search = () => {
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
