import React from 'react'
import './search.css'

function search({ onChange, value, enterSearch }) {
  return (
    <div className='serach-container inline-block'>
      <input
        type='text'
        onChange={onChange}
        value={value}
        onKeyPress={enterSearch}
        className='search-bar'
        placeholder='Search Any City'
      />
    </div>
  )
}

export default search