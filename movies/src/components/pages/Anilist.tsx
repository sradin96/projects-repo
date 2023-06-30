
function Anilist({ animeList, handlePrevClick, handleNextClick, page, hasNextPage }: any) {
  return (
    <div className='animes'>
      <h2 className='animes__title'>Anime List</h2>
      <ul className='animes__list'>
        {animeList?.map((anime: any) => (
          <li className='animes__item' key={anime.id}>
            <img className='animes__img' src={anime.coverImage.extraLarge} alt="" />
            <h3 className='animes__item-title'>{anime.title.english || anime.title.romaji || anime.title.native}</h3>
          </li>
        ))}
      </ul>
      <button onClick={handlePrevClick} disabled={page === 1}>Prev</button>
      <button onClick={handleNextClick} disabled={!hasNextPage}>Next</button>
    </div>
  );
}

export default Anilist