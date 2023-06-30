import { useContext, useEffect, useState } from "react"
import { Movie } from "../../../types/types"
import WatchedContext from "../../../store/WatchedContext"

type PopupProps = {
    current?: Movie,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    open: boolean,
}

function Popup({ current, setOpen, open }: PopupProps) {
    const watchedCtx = useContext(WatchedContext);

    const handleWatched = () => {
        watchedCtx.setWatched((prevArray: Movie[]) => [...prevArray, current]);
    }

    const handleWantToWatch = () => {
        watchedCtx.setWantToWatch((prevArray: Movie[]) => [...prevArray, current]);
    }

  return (
    <>
    {
        open ? <div className="popup">
        <div className="popup__holder">
         <div className="popup__header">
                 <h2 className="popup__title">Modal</h2>
                 <button className="popup__exit" type="button" data-testid="close-popup" onClick={() => setOpen(!open)}></button>
             </div>
             <div className="popup__container">
                 <div className="popup__img-holder">
                     <img src={current?.Poster} alt="" className="popup__img" />
                 </div>
                 <div className="popup__content">
                     <h3 className="popup__name">{current?.Title}</h3>
                     <p className="popup__text">Description</p>
                     <span className="popup__rating">{current?.Type}</span>
                     <div className="popup__btns">
                         <button className="popup__btn" type="button" onClick={handleWatched}>Add to watched</button>
                         <button className="popup__btn popup__btn--purple" type="button" onClick={handleWantToWatch}>Add to want to watch</button>
                         <button className="popup__btn" type="button">Check all details</button>
                     </div>
                 </div>
             </div>
        </div>
     </div>
        : null
    }
    </>
  )
}

export default Popup;