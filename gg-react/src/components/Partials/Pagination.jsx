import React, { useEffect } from 'react'

function Pagination({ nPages, currentPage, setCurrentPage }) {
    const pages = []

    for(let i = 1; i <= nPages ; i++) {
        pages.push(i)
    }

    useEffect(() => {
        const getPageNumber = parseInt(localStorage.getItem('currentPage'))
        setCurrentPage(getPageNumber)
    }, [])

    const handlePage = (number) => {
        localStorage.setItem('currentPage', number)
        if(number === 1) {
            window.history.replaceState(null, '', `/home`)
        } else {
            window.history.replaceState(null, '', `/home/?page=${number}`)
        }
    }

    const nextPage = () => {
        if(currentPage === nPages) return
            handlePage(currentPage + 1)
            setCurrentPage(currentPage + 1)
    }

    const prevPage = () => {
        if(currentPage === 1) return
            handlePage(currentPage - 1)
            setCurrentPage(currentPage - 1)
    }

    const customPage = (number) => {
        handlePage(number)
        setCurrentPage(number)
    }

  return (
    <>
        {
        nPages > 1 ?
        <div className='pagination'>
            <ul className="pagination__list">
                <li className="pagination__item">
                    <button type='button' className={`pagination__navigation pagination__navigation-prev ${currentPage === 1 ? 'pagination__navigation--disabled' : ''}`}
                    onClick={prevPage}>Prev</button>
                </li>
                {
                    pages.map((number) => {
                        return <li key={number} className={`pagination__item ${ currentPage === number ? 'pagination__item--active' : '' }`}>
                            <button type='button' className="pagination__btn" onClick={(e) => customPage(number)}>{number}</button>
                        </li>
                    })
                }
                <li className="pagination__item">
                    <button type='button' className={`pagination__navigation pagination__navigation-prev ${currentPage === nPages ? 'pagination__navigation--disabled' : ''}`} onClick={nextPage}>Next</button>
                </li>
            </ul>
        </div>
        : ''
        }
    </>
  )
}

export default Pagination