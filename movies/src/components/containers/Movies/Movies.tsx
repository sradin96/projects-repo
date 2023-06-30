import { useEffect, useState } from "react"
import MovieCard from "../../ui/MovieCard/MovieCard"
import { Movie } from "../../../types/types"
import Popup from "../Popup/Popup"

type FilteredProps = {
    filtered: Movie[]
}

function Movies({ filtered }: FilteredProps) {
    const [open, setOpen] = useState(false)
    const [current, setCurrent] = useState<Movie>()

    const handlePopup = (movie: Movie) => {
        if (movie) {
            setOpen(!open);
            setCurrent(movie);
        }
    }

  return (
    <section className="movies">
        {/* {
            filtered && filtered.map((movie: Movie, i) => {
                return <MovieCard key={i} movie={movie} handlePopup={handlePopup} />
            })
        } */}
        <Popup current={current} setOpen={setOpen} open={open} />
    </section>
  )
}

export default Movies
