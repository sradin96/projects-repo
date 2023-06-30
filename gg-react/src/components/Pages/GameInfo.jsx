import React, { useContext, useRef } from 'react'
import GamesContext from '../Context/GamesContext'
import { setCurrenyValue } from '../Hooks/useCurrencyFormater'
import GameCard from '../Partials/GameCard';

function GameInfo(props) {
  const contentRef = useRef('')
  const GamesCtx = useContext(GamesContext);
  const games = GamesCtx.game

  const scrollToSection = () => {
    contentRef.current.scrollIntoView();
  }

  const filtered = games?.filter((game) => {
      return game.id !== props.id ? game.genre.toLowerCase().includes(props.genre.toLowerCase()) : ''
  })

  return (
    <section className='game-info'>
      <div className="game-info__holder has-cover" style={{backgroundImage: `url(${props.image})`}}>
        <div className="game-info__block">
            <h1 className="game-info__title">{props.name}</h1>
            <div className="game-info__block-holder">
            <span className="game-info__small">{props.genre}</span>
            <span className="game-info__small">{setCurrenyValue(props.price)}</span>
        </div>
        </div>
        <button type='button' className="game-info__btn" onClick={scrollToSection}>
          Read More
          <span className="game-info__btn-chevron"></span>
        </button>
      </div>
      <div ref={contentRef} className="game-info__content">
        <div className="wrap">
          <h2 className="game-info__subtitle">More Info</h2>
          <p className="game-info__text">{props.text}</p>
        </div>
      </div>
      {
        filtered.length ?
      <div className="game-info__recommended">
        <div className="wrap">
          <h2 className="game-info__subtitle">Recommended Games</h2>
            <div className="game-info__recommended-holder">
              {
                filtered && filtered.splice(0, 3).map((game, i) => {
                  return <GameCard key={i}
                    name={game.name}
                    image={game.image}
                    video={game.video}
                    genre={game.genre}
                    price={game.price}
                    id={game.id}
                    />
                })
              }
            </div>
        </div>
      </div>
      : ''
      }
    </section>
  )
}

export default GameInfo