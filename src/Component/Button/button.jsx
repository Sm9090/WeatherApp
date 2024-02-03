import React from 'react'


function buttonComponent({handleSearching}) {
  return (
    <div className='btn-container inline-block'>
        <button  className='btn' onClick={handleSearching}>Search</button>
    </div>
  )
}

export default buttonComponent