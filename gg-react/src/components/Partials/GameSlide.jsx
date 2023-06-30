import React from 'react'

function GameSlide(props) {
  return (
    <div className='game-slide has-cover' style={{backgroundImage: `url(${props.image})`}}>
        <div className="game-slide__content">
            <h2 className="game-slide__name">{props.name}</h2>
            <span className="game-slide__genre">{props.genre}</span>
        </div>
    </div>
  )
}

export default GameSlide