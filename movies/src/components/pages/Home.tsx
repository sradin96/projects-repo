import React, { useContext, useEffect, useState } from "react"
import Filters from "../containers/Filters/Filters";
import Navigation from "../ui/Navigation/Navigation";
import Anilist from "./Anilist";
import AnimeContext from "../../store/AnimeContext";
import Banner from "../ui/Banner/Banner";

function Home() {
    const [filteredTypes, setFilteredTypes] = useState('Genre');
    const [filteredYears, setFilteredYears] = useState('Year');
    const { data, search, setSearch, page, setPage } = useContext(AnimeContext);

    const animes = data?.Page.media;
    const hasNextPage = data?.Page.pageInfo.hasNextPage;

    const handlePrevClick = () => {
        if (page > 1) {
        setPage(page - 1);
        }
    };

    const handleNextClick = () => {
        if (hasNextPage) {
        setPage(page + 1);
        }
    }

    const setSearchHandle = (e: string) => {
        if(e.length === 0) {
            setSearch('Naruto')
        } else {
            setSearch(e)
        }
    }

    useEffect(() => {
        setPage(1)
    }, [search])

    useEffect(() => {
        setPage(1)
    }, [filteredTypes, filteredYears])

    const onSubmit = (e: React.SyntheticEvent, yearRef: string, typeRef: string) => {
        e.preventDefault()
        setPage(1)
        setFilteredYears(yearRef)
        setFilteredTypes(typeRef)
    }

    const filteredAnimes = animes?.filter((anime: any) => {
        const hasMatchingGenre = filteredTypes === "Genre" || anime.genres.includes(filteredTypes);
        const hasMatchingYear = filteredYears === "Year" || anime.startDate.year === parseInt(filteredYears);
        return hasMatchingGenre && hasMatchingYear;
      });

  return (
    <main className="main">
        <div className="wrap">
            <Filters setSearchHandle={setSearchHandle} onSubmit={onSubmit} />
            {animes && <Banner movie={animes[0]} />}
            <Navigation />
            <Anilist animeList={filteredAnimes} handlePrevClick={handlePrevClick} handleNextClick={handleNextClick} page={page} hasNextPage={hasNextPage} />
        </div>
    </main>
  )
}

export default Home;