import { render, screen, fireEvent } from '@testing-library/react';
import Filters from './Filters';

describe('Filters', () => {
  const movies = [
    { Title: 'Movie 1', Year: '2022', Type: 'movie', Poster: 'https://example.com/1.png', imdbID: 'id1' },
    { Title: 'Movie 2', Year: '2019', Type: 'movie', Poster: 'https://example.com/2.png', imdbID: 'id2' },
    { Title: 'Series 1', Year: '2020', Type: 'series', Poster: 'https://example.com/3.png', imdbID: 'id3' },
    { Title: 'Game 1', Year: '2018', Type: 'game', Poster: 'https://example.com/4.png', imdbID: 'id4' },
  ];

  const setSearchHandle = jest.fn();
  const onSubmit = jest.fn();

  beforeEach(() => {
    setSearchHandle.mockClear();
    onSubmit.mockClear();
  });

  it('renders search bar, type filter and year filter', () => {
    render(<Filters movies={movies} setSearchHandle={setSearchHandle} onSubmit={onSubmit} />);
    const searchBar = screen.getByPlaceholderText('Search Bar');
    const typeFilter = screen.getByTestId('Type');
    const yearFilter = screen.getByTestId('Year');
    expect(searchBar).toBeInTheDocument();
    expect(typeFilter).toBeInTheDocument();
    expect(yearFilter).toBeInTheDocument();
  });

  it('sets the search value when the search bar value changes', () => {
    render(<Filters movies={movies} setSearchHandle={setSearchHandle} onSubmit={onSubmit} />);
    const searchBar = screen.getByPlaceholderText('Search Bar');
    fireEvent.change(searchBar, { target: { value: 'search term' } });
    expect(setSearchHandle).toHaveBeenCalledWith('search term');
  });

  it('submits the selected type and year when the form is submitted', () => {
    render(<Filters movies={movies} setSearchHandle={setSearchHandle} onSubmit={onSubmit} />);
    const typeFilter = screen.getByTestId('Type');
    const yearFilter = screen.getByTestId('Year');
    const searchButton = screen.getByRole('button', { name: 'Search' });

    fireEvent.change(typeFilter, { target: { value: 'Movie' } });
    fireEvent.change(yearFilter, { target: { value: '2020' } });
    fireEvent.submit(searchButton, {
    });

    expect(onSubmit).toHaveBeenCalledWith(expect.any(Object), '2020', 'Movie');
  });
});