import { useContext, useState } from "react"
import { Type } from "../../../consts/consts";
import { Year } from "../../../consts/consts";

import { FilterTypes } from "../../../types/types"
import SearchButton from "../../ui/Buttons/SearchButton";
import AnimeContext from "../../../store/AnimeContext";

function Filters({ setSearchHandle, onSubmit }: any) {
    const [selectedType, setSelectedType] = useState<string>('Type')
    const [selectedYear, setSelectedYear] = useState<string>("Year");
    const { data } = useContext(AnimeContext);

    
    const animes = data?.Page.media;

    // Create a Set to store unique genre values
    const uniqueGenres = new Set<string>();
    const uniqueYears = new Set<number>();

    // Iterate over the animes array to add genre values to the Set
    animes?.forEach((anime: any) => {
        anime?.genres.forEach((genre: string) => {
            uniqueGenres.add(genre);
        });
        const year = anime?.startDate.year;
        uniqueYears.add(year);
    });

    const genresArray = Array.from(uniqueGenres);
    const yearsArray = Array.from(uniqueYears);

  return (
    <div className="filters">
        <form className="filters__form" onSubmit={(e) => onSubmit(e, selectedYear, selectedType)}>
            <div className="filters__search-block">
                <input type="text" className="filters__search"
                placeholder="Search Bar"
                onChange={(e) => setSearchHandle(e.currentTarget.value)} />
            </div>
            <div className="filters__block">
                <select data-testid={Type} name="" id="" className="filters__select"
                onChange={(e) => setSelectedType(e.currentTarget.value)}
                >
                    <option value="Genre">Genre</option>
                    {
                        genresArray.map((genre: string, index: number) => (
                            <option key={index} value={genre}>
                              {genre}
                            </option>
                          ))
                    }
                </select>
            </div>
            <div className="filters__block">
                <select data-testid={Year} name="" id="" className="filters__select"
                onChange={(e) => setSelectedYear(e.currentTarget.value)}
                >
                    <option value={Year}>Year</option>
                    {
                        yearsArray.map((year: number, index: number) => (
                            <option key={index} value={year}>
                              {year}
                            </option>
                        ))
                    }
                </select>
            </div>
            <SearchButton text='Search' />
        </form>
    </div>
  )
}

export default Filters
