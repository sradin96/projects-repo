import { useContext, useState } from "react"
import WatchedContext from "../../store/WatchedContext"
import Navigation from "../ui/Navigation/Navigation";
import Filters from "../containers/Filters/Filters";
import Banner from "../ui/Banner/Banner";
import SavedMovies from "../ui/SavedMovies/SavedMovies";

function Watched() {
    const watchedCtx = useContext(WatchedContext);
    const [search, setSearch] = useState('')

    const setSearchHandle = (e: string) => {
        setSearch(e)
    }

    const onSubmit = (e: React.SyntheticEvent, yearRef: string, typeRef: string) => {
        e.preventDefault()
    }

  return (
    <main className="main">
        <div className="wrap">
            <Filters movies={watchedCtx.watched} setSearchHandle={setSearchHandle} onSubmit={onSubmit} />
            <Banner movie={watchedCtx.watched[0]} />
            <Navigation />
            <SavedMovies movies={watchedCtx.watched} />
        </div>
    </main>
  )
}

export default Watched
