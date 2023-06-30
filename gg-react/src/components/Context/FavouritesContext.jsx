import React, { createContext, useEffect, useState } from 'react'
import { db } from '../../firebase'
import { collection, getDocs, deleteDoc, doc, setDoc } from 'firebase/firestore'

const FavouritesContext = createContext({
    favourites: [],
    total: 0,
    isLoading: false,
    suggestedFavourite: [],
    postFavourites: () => {},
    itemIsFavouriteHandler: (meetupId) => {}
});

export const FavouritesContextProvider = (props) => {
  const [favourites, setFavourites] = useState([])
  const favouritesCollectionRef = collection(db, 'favourites');
  const [suggestedFavourite, setSuggestedFavourite] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  function getFavourites() {
    getDocs(favouritesCollectionRef).then(response => {
        const fav = response.docs.map(doc => doc.data())
        setIsLoading(true)
        setFavourites(fav)
    }).catch(error => console.log(error.message))
}

function postFavourites(game) {
    if(itemIsFavouriteHandler(game.id)) {
        removeFavourites(game.id)
    }
    const data = {
        name: game.name,
        genre: game.genre,
        image: game.image,
        id: game.id,
        video: game.video
    }

    const favId = favourites.some((fav) => fav.id === data.id )

    if(favId === false) {
        setDoc(doc(db, 'favourites', data.id), data)
        setFavourites([
            ...favourites, data
        ])
    }
}

const removeFavourites = (e) => {
    const filtered = favourites.filter((c) => c.id !== e)
    deleteDoc(doc(db, 'favourites', e))
    setFavourites(filtered)
  }

const itemIsFavouriteHandler = (meetupId) => {
    return favourites.some((meetup) => meetup.id === meetupId)
}

const randomFavouriteGame = () => {
    const random = favourites?.sort(() => 5 - Math.random()).slice(0, 1);
    setSuggestedFavourite(random)
  }

  useEffect(() => {
    getFavourites();
  }, [])

  useEffect(() => {
      console.log(favourites);
      randomFavouriteGame()
  }, [favourites])

  const context = {
      favourites: favourites,
      total: favourites?.length,
      isLoading: isLoading,
      suggestedFavourite: suggestedFavourite,
      postFavourites: postFavourites,
      itemIsFavouriteHandler: itemIsFavouriteHandler,
  }

  return (
      <FavouritesContext.Provider value={context}>
          {props.children}
      </FavouritesContext.Provider>
  )
}

export default FavouritesContext;