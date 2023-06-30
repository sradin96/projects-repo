import { PaginationProps } from "../../../types/types"

function Pagination({ nPages, currentPage, setCurrentPage}: PaginationProps) {
    const pages = []

    for(let i = 1; i <= nPages ; i++) {
        pages.push(i)
    }

    const nextPage = () => {
        if(currentPage === nPages) return
            setCurrentPage(currentPage + 1)
    }

    const prevPage = () => {
        if(currentPage === 1) return
            setCurrentPage(currentPage - 1)
    }

    const customPage = (number: number) => {
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