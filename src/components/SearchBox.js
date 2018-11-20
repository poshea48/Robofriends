import React from 'react';
import './SearchBox.css'

const SearchBox = ({searchChange}) => {
  console.log("SearchBox")
  return (
    <div className="pa2">
      <label for="searchfield" ></label>
      <input
        className="pa3 ba b--green bg-lightest-blue'"
        name="searchfield"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  )
}

export default SearchBox;
