import React from 'react'
import { useDebounce } from '../Hooks/Debounce'

function Filters({ handlePriceFilter, handleLetterFilter }) {
  const { setValue } = useDebounce(600)
  return (
    <div className='filters'>
      <form className='filters__form'>
        <div className="filters__select-block">
          <select name="filter-price" id="" className="filters__select" onChange={(e) => setValue(e, handlePriceFilter)}>
            <option value="Filter by price">Filter by price</option>
            <option value="Low to High">Low to High</option>
            <option value="High to Low">High to Low</option>
          </select>
          <label htmlFor="filter-price" className="filters__select-label">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7.41 8.59 6 10l6 6 6-6-1.41-1.41L12 13.17 7.41 8.59Z"/></svg>
          </label>
        </div>
        <div className="filters__select-block">
          <select name="filter-letter" id="filter-letter" className="filters__select" onChange={handleLetterFilter}>
            <option value="Filter by letter">Filter by letter</option>
            <option value="A - Z">A - Z</option>
            <option value="Z - A">Z - A</option>
          </select>
          <label htmlFor="" className="filters__select-label">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M7.41 8.59 6 10l6 6 6-6-1.41-1.41L12 13.17 7.41 8.59Z"/></svg>
          </label>
        </div>
      </form>
    </div>
  )
}

export default Filters