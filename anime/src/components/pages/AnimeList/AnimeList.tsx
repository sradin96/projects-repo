import { gql, useLazyQuery, useQuery } from "@apollo/client";
import Filters from "../../containers/Filters/Filters";
import AnimeCard from "../../ui/AnimeCard/AnimeCard";
import "./index.scss";
import { useEffect, useState } from "react";
import ANIME_QUERY from "../../../graphql/getAnimes";
import { Anime } from "../../../types/types";
import POPULAR_ANIME_QUERY from "../../../graphql/getPopular";
import Pagination from "../../containers/Pagination/Pagination";
import { useDebounce } from "../../../hooks/useDebouce";
import { useSearchParams } from "react-router-dom";

const AnimeList = () => {
  const [inputValue, setInputValue] = useState('');
  const [page, setPage] = useState(1);
  const [genre, setGenre] = useState("Any");
  const [year, setYear] = useState("Any");
  const [tags, setTags] = useState<string[]>([]);
  const { setValue } = useDebounce(500)

  const [searchAnime, { loading: animeLoading, error: animeError, data: animeData }] = useLazyQuery(ANIME_QUERY);
  const { loading, data } = useQuery(POPULAR_ANIME_QUERY, {
    variables: {
      page: page,
      perPage: 10
    },
  });

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value)
    setPage(1)
    searchAnime({
        variables: {
          search: value,
          page: page,
          perPage: 10,
          year: parseInt(year),
          genres: genre
        }
      });
  }

  useEffect(() => {
    if (animeError) {
      console.error("GraphQL Error:", animeError.message);
    }
  }, [animeError]);

  const filterData = data?.Page.media.filter((item: Anime) => {
    const isGenreMatch = genre === 'Any' ? data?.Page.media : item.genres.map((genre: string) => genre.toLowerCase()).includes(genre.toLowerCase());
    const isYearMatch = year === 'Any' ? data?.Page.media : item.startDate.year.toString().includes(year.toString());
    return isGenreMatch && isYearMatch;
  });

  const filterSearch = animeData?.Page.media.filter((item: Anime) => {
    const isGenreMatch = genre === 'Any' ? animeData?.Page.media : item.genres.map((genre: string) => genre.toLowerCase()).includes(genre.toLowerCase());
    const isYearMatch = year === 'Any' ? animeData?.Page.media : (item.startDate && item.startDate.year && item.startDate.year.toString().includes(year.toString()));
    return isGenreMatch && isYearMatch;
  });

  const handleGenreInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setGenre(value);
  }

  const handleYearInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setYear(value);
  }

  const handleNext = () => {
    setPage(page + 1)
    searchAnime({
      variables: {
        search: inputValue,
        page: page + 1,
        perPage: 10,
        year: parseInt(year),
        genres: genre
      }
    });
  }

  const handlePrev = () => {
    if(page === 1) return;
    setPage(page - 1)
    searchAnime({
      variables: {
        search: inputValue,
        page: page - 1,
        perPage: 10,
        year: parseInt(year),
        genres: genre
      }
    });
  }

  const handleFirst = () => {
    setPage(1)
    searchAnime({
      variables: {
        search: inputValue,
        page: 1,
        perPage: 10,
        year: parseInt(year),
        genres: genre
      }
    });
  }

  const onPageClick = (e: number) => {
    setPage(e);
    searchAnime({
      variables: {
        search: inputValue,
        page: e,
        perPage: 10,
        year: parseInt(year),
        genres: genre
      }
    });
  }

  return (
    <main className="main">
      <div className="wrap">
        <Filters
        handleSearchInput={handleSearchInput}
        setGenre={setGenre}
        setYear={setYear}
        handleGenreInput={handleGenreInput}
        handleYearInput={handleYearInput}
        setValue={setValue}
        />
        <div className="anime-list">
          {
            animeLoading ?
            <p>Loading...</p>
            :
            inputValue.length > 0
            ?
            filterSearch?.map((anime: Anime) => {
              return <AnimeCard anime={anime} key={anime.id} />
            })
            :
            filterData?.map((anime: Anime) => {
              return <AnimeCard anime={anime} key={anime.id} />
            })
          }
        </div>
        {
          animeLoading ?
           null
           :
           <Pagination
           handleNext={handleNext}
           handlePrev={handlePrev}
           handleFirst={handleFirst}
           page={page}
           onPageClick={onPageClick}
           inputValue={inputValue}
           />
        }
      </div>
    </main>
  );
};

export default AnimeList;
