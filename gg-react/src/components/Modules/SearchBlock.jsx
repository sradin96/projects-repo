import React, { useContext, useState } from 'react'
import FavouritesContext from '../Context/FavouritesContext'
import GamesContext from '../Context/GamesContext'
import { useDebounce } from '../Hooks/Debounce'
import GameCard from '../Partials/GameCard'

function SearchBlock({ handleSearchBlock }) {
    const [search, setSearch] = useState('')
    const { setValue } = useDebounce(500)
    const GamesCtx = useContext(GamesContext)
    const FavouritesCtx = useContext(FavouritesContext)

    const games = GamesCtx.game?.filter((game) => {
        return  search.length === 0 ? '' : game.name.toLowerCase().includes(search) || game.genre.toLowerCase().includes(search)
    })

    const favourites = FavouritesCtx.favourites?.filter((game) => {
        return  search.length === 0 ? '' : game.name.toLowerCase().includes(search) || game.genre.toLowerCase().includes(search)
    })

    const handleWebsiteSearch = (e) => {
        setSearch(e);
    }

  return (
    <div className='search-block'>
        <button className="search-block__close" onClick={handleSearchBlock}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175V175zM512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"/></svg>
        </button>
        <form action="" className="search-block__form">
            <label htmlFor="search-block" className="search-block__label">Search Website:</label>
            <input type="text" name='search-block' id='search-block' className="search-block__input" onChange={(e) => setValue(e.target.value, handleWebsiteSearch)} />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"/></svg>
        </form>
        {
            games.length === 0 ? ''
            : <div className="search-block__container">
            <h2 className="search-block__title">Games on Website:</h2>
            <div className="search-block__holder">
                {
                    games?.map((game, i) => {
                        return <GameCard key={i}
                            name={game.name}
                            image={game.image}
                            genre={game.genre}
                            id={game.id}
                            price={game.price}
                        />
                    })
                }
            </div>
        </div>
        }
        {
            favourites.length === 0 ? ''
            : <div className="search-block__container">
            <h2 className="search-block__title">Favourite Games:</h2>
            <div className="search-block__holder">
                {
                    favourites?.map((game, i) => {
                        return <GameCard key={i}
                        name={game.name}
                        image={game.image}
                        genre={game.genre}
                        id={game.id}
                        price={game.price}
                    />
                    })
                }
            </div>
        </div>
        }
    </div>
  )
}

export default SearchBlock