import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Pagination from './Pagination'

describe('Pagination', () => {
  it('renders correctly with 3 pages', () => {
    const setCurrentPage = jest.fn()
    const { getByText } = render(
      <Pagination nPages={3} currentPage={1} setCurrentPage={setCurrentPage} />
    )
    expect(getByText('Prev')).toBeInTheDocument()
    expect(getByText('1')).toBeInTheDocument()
    expect(getByText('2')).toBeInTheDocument()
    expect(getByText('3')).toBeInTheDocument()
    expect(getByText('Next')).toBeInTheDocument()
  })

  it('calls setCurrentPage when clicking on the next button', () => {
    const setCurrentPage = jest.fn()
    const { getByText } = render(
      <Pagination nPages={3} currentPage={1} setCurrentPage={setCurrentPage} />
    )
    fireEvent.click(getByText('Next'))
    expect(setCurrentPage).toHaveBeenCalledWith(2)
  })

  it('does not call setCurrentPage when clicking on the prev button and currentPage is 1', () => {
    const setCurrentPage = jest.fn()
    const { getByText } = render(
      <Pagination nPages={3} currentPage={1} setCurrentPage={setCurrentPage} />
    )
    fireEvent.click(getByText('Prev'))
    expect(setCurrentPage).not.toHaveBeenCalled()
  })

  it('calls setCurrentPage when clicking on a specific page number', () => {
    const setCurrentPage = jest.fn()
    const { getByText } = render(
      <Pagination nPages={3} currentPage={1} setCurrentPage={setCurrentPage} />
    )
    fireEvent.click(getByText('3'))
    expect(setCurrentPage).toHaveBeenCalledWith(3)
  })
})
