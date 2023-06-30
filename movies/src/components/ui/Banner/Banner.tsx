import { Movie } from "../../../types/types"

type randomProps = {
  movie?: Movie
}

function Banner({ movie }: any) {

  return (
    <>
      <section className="banner has-cover" style={{backgroundImage: `url(${movie?.coverImage.extraLarge})`}}>
        <div className="banner__holder">
          <h1 className="banner__title">{movie?.title.english}</h1>
          <p>{movie?.type}</p>
        </div>
      </section>
    </>
  )
}

export default Banner