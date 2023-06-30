import React, { useContext } from 'react'
import FavouritesContext from '../Context/FavouritesContext'

function PageIntro() {
    const FavouriteCtx = useContext(FavouritesContext);
    const suggestedFavourite = FavouriteCtx.suggestedFavourite;

  return (
    <>
        {
            suggestedFavourite.map((suggested, i) => {
                return <section key={i} className="page-intro has-cover" style={{backgroundImage: `url(${suggested.image})`}}>
                <div className="wrap page-intro__wrap">
                    <div className="page-intro__container">
                        <h2 className="page-intro__title">{suggested.name}</h2>
                        <p className="page-intro__text">Highlight Game</p>
                    </div>
                </div>
            </section>
                })
        }
    </>
  )
}

export default PageIntro