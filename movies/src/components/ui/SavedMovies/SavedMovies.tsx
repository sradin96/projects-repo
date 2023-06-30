import { Movie } from '../../../types/types'
import MovieCard from '../MovieCard/MovieCard'

type savedProps = {
    movies: Movie[]
}

function SavedMovies({ movies }: savedProps) {
  return (
    <section className='saved-movies'>
        {/* {
            movies && movies.map((movie: Movie, i: number) => {
                return <MovieCard key={i} movie={movie} handlePopup={(e) => e} />
            })
        } */}
    </section>
  )
}

export default SavedMovies