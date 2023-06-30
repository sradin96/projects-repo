import { IoMdSearch } from "react-icons/io";
import { genres, years } from "../../../consts/consts";
import "./index.scss";
import { useState } from "react";

function Filters({
  handleSearchInput,
  setGenre,
  setYear,
  handleGenreInput,
  handleYearInput,
  setValue
}: any) {
  const query = new URLSearchParams(window.location.search);
  const single: string = query.get("search")!;
  const [searchValue, setSearchValue] = useState(single ?? "");

  return (
    <div className="filters">
      <div className="filters__block filters__block--search">
        <IoMdSearch className="filters__search-icon" />
        <input
          type="text"
          className="filters__search"
          placeholder="Search"
          onChange={(e) => setValue(e, handleSearchInput)}
        />
      </div>
      <div className="filters__block">
        <select
          className="filters__select"
          name="genres"
          id="genres"
          onChange={(e) => handleGenreInput(e)}
        >
          <option value="Any">Any</option>
          {genres.map((genre, index: number) => {
            return (
              <option value={genre.genre} key={index}>
                {genre.genre}
              </option>
            );
          })}
        </select>
      </div>
      <div className="filters__block">
        <select
          className="filters__select"
          name="years"
          id="years"
          onChange={(e) => handleYearInput(e)}
        >
          <option value="Any">Any</option>
          {years.map((year, index: number) => {
            return (
              <option value={year.year} key={index}>
                {year.year}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default Filters;
