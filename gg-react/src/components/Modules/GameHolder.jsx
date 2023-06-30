import React from 'react'
import GameCard from '../Partials/GameCard'

function GameHolder(props) {
  return (
    <section className='game-holder'>
        <div className="game-holder__container">
            {
                props.games?.map((game, i) => {
                return <GameCard key={i}
                game={game}
                name={game.name}
                image={game.image}
                genre={game.genre}
                price={game.price}
                id={game.id}
                video={game.video}
                />
                })
            }
        </div>
    </section>
  )
}

export default GameHolder