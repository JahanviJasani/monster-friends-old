import React from 'react'
import './SearchBox.css';

const SearchBox = ({onSearch}) => {
  return (
    <div>
      <input
        className ="pa3 ba bg-white"
        type="search"
        placeholder="Search Monsters"
        onChange={onSearch}
      />
    </div>
  )
}

export default SearchBox