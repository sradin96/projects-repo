import { useQuery } from "react-apollo";
import { Movie } from "../../../types/types"
import { useState } from "react";
import ANIME_QUERY, { Anime } from "../../../graphql/queries/getAnimes";

export type MovieProps = {
    movie: Movie,
    handlePopup: (movie: Movie) => void
}

function MovieCard({ searchText, handlePopup }: { searchText: string, handlePopup: any }) {
  const [page, setPage] = useState(1);
  const [perPage] = useState(5);

  const { loading, error, data } = useQuery(ANIME_QUERY, {
    variables: { search: searchText, page, perPage },
    fetchPolicy: "cache-first"
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :( {error.message}</p>;

  const animeList = data?.Page?.media;

  return (
    <>
    <ul>
        {animeList.map((anime: Anime) => (
          <li key={anime.id}>
            <img src={anime.coverImage.medium} alt="" />
            {anime.title.english || anime.title.romaji || anime.title.native}
          </li>
        ))}
      </ul>
    </>
  )
}

export default MovieCard