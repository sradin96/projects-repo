import React, { createContext, useEffect, useState } from 'react'
import { db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'

const GamesContext = createContext({
  game: [],
  prices: [],
  suggested: [],
  isLoading: false,
  total: 0,
});

export const GamesContextProvider = (props) => {
  const [games, setGames] = useState()
  const [suggested, setSuggested] = useState([])
  const [prices, setPrices] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  function getGames() {
    const gamesCollectionRef = collection(db, 'games');
    getDocs(gamesCollectionRef).then(response => {
        const game = response.docs.map(doc => doc.data())
        setIsLoading(true)
        setGames(game)
        game.map((g) => {
          prices.push(parseFloat(g.price))
        })
    }).catch(error => console.log(error.message))
}


  useEffect(() => {
    getGames();
  }, [])

  useEffect(() => {
      console.log(games);
      console.log(prices);
      randomSuggestedGames()
  }, [games])

  const randomSuggestedGames = () => {
    const random = games?.sort(() => 0.5 - Math.random());
    const customRandom = random?.slice(0, 3)
    setSuggested(customRandom)
  }

  const context = {
      game: games,
      prices: prices,
      total: games?.length,
      isLoading: isLoading,
      suggested: suggested,
  }

  return (
      <GamesContext.Provider value={context}>
          {props.children}
      </GamesContext.Provider>
  )
}

export default GamesContext;