import React from 'react'

function NoContent({ setSearch }) {
  return (
    <div className='no-content'>
        <h3 className="no-content__title">We could find games that you were searching for</h3>
        <p className="no-content__text"><button type='button' className="no-content__btn" onClick={(e) => {
          setSearch('')
          document.getElementById('search-input').value = ''
          }}>
            Reset filters</button> and try again</p>
    </div>
  )
}

export default NoContent