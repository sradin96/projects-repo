import React, { useContext, useState } from 'react'
import FavouritesContext from '../Context/FavouritesContext'
import GameHolder from '../Modules/GameHolder';
import PageIntro from '../Modules/PageIntro';
import PageTitle from '../Hooks/PageTitle';
import Loader from '../Modules/Loader';

export default function Favourites() {
  PageTitle('Favourites')
  const FavouritesCtx = useContext(FavouritesContext);
  const favourites = FavouritesCtx.favourites
  const [loadMore, setLoadMore] = useState(4);

  const handleLoadMore = () => {
    setLoadMore(prev => prev + 4);
  }

  return (
    <>
    {
      FavouritesCtx.isLoading ?
      <>
      <PageIntro />
      <section className="games">
        <div className="wrap">
            <h2 className="games__title section-title">Favourite Games</h2>
        <GameHolder games={favourites?.slice(0, loadMore)} />
        {
          favourites.length <= loadMore ? ''
          : <button type='button' className="load-more" onClick={handleLoadMore}>Load More</button>
        }
        </div>
      </section></>
      : <Loader />
    }
    </>
  )
}
