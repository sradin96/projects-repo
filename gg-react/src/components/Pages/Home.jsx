import { useContext, useEffect, useState } from 'react'
import GamesContext from '../Context/GamesContext'
import PageTitle from '../Hooks/PageTitle'
import GameHolder from '../Modules/GameHolder';
import Banner from '../Modules/Banner';
import Search from '../Partials/Search';
import Filters from '../Partials/Filters';
import Pagination from '../Partials/Pagination';
import NoContent from '../Partials/NoContent';
import { useFilter, useSearchFilter } from '../Hooks/SearchFilter';
import Loader from '../Modules/Loader';
import NewItem from '../Modules/NewItem';


export default function Home() {
    PageTitle('Home')
    const gameCtx = useContext(GamesContext);
    const games = gameCtx.game
    const [search, setSearch] = useState('')
    const [filtered, setFiltered] = useState()
    const [currentPage, setCurrentPage] = useState(1)
    const [recordsPerPage] = useState(8)
    const { setSearchFilter } = useSearchFilter()

    const indexOfLastRecord = currentPage * recordsPerPage
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
    const nPages = Math.ceil(filtered?.length / recordsPerPage)

    useEffect(() => {
        handleFiltered()
        if (localStorage.getItem('currentPage') === null) {
            localStorage.getItem('currentPage', 1)
        } else {
            const getPageNumber = parseInt(localStorage.getItem('currentPage'))
            setCurrentPage(getPageNumber)
        }
        const currentPageNumber = window.location.href.slice(-1)
        if(isNaN(currentPageNumber)) {
            localStorage.setItem('currentPage', 1)
        } else {
            localStorage.setItem('currentPage', currentPageNumber)
        }
    }, [games])

    useEffect(() => {
        handleFiltered()
    }, [search])

    const handleFiltered = () => {
        setSearchFilter(games, search, setFiltered)
    }

    useEffect(() => {
        handlePriceFilter()
        handleLetterFilter()
    }, [filtered])

    const handlePriceFilter = (e) => {
        const value = e?.target.value
        if(value === 'High to Low') {
            const sort = Array.from(filtered).sort((a, b) => {
                return parseFloat(b.price) - parseFloat(a.price);
            })
            setFiltered(sort)
        } else if (value === 'Low to High') {
            const sort = Array.from(filtered).sort((a, b) => {
                return parseFloat(a.price) - parseFloat(b.price);
            })
            setFiltered(sort)
        }
    }

    const handleLetterFilter = (e) => {
        const value = e?.target.value
        if(value === 'A - Z') {
            const sort = Array.from(filtered).sort((a, b) => a.name.localeCompare(b.name))
            setFiltered(sort)
        } else if (value === 'Z - A') {
            const sort = Array.from(filtered).sort((a, b) =>  b.name.localeCompare(a.name))
            setFiltered(sort)
        }
    }

    const setSearchHandle = (e) => {
        setSearch(e)
        setCurrentPage(1)
    }

  return (
    <>
    {
        gameCtx.isLoading ?
        <>
            <Banner />
            <section className="games">
                <div className="wrap">
                    <h2 className="games__title section-title">Games</h2>
                    <Search setSearchHandle={setSearchHandle} />
                    <Filters handlePriceFilter={handlePriceFilter} handleLetterFilter={handleLetterFilter} />
                    {
                        filtered?.length ?
                        <GameHolder games={filtered?.slice(indexOfFirstRecord, indexOfLastRecord)} />
                        : <NoContent setSearch={setSearch} />
                    }
                    <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </div>
            </section>
            {/* <NewItem /> */}
        </>
        : <Loader />
    }
    </>
  )
}
