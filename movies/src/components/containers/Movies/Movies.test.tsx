import { render, fireEvent } from '@testing-library/react';
import Movies from './Movies';

const mockFiltered = [
  {
    Title: 'Movie 1',
    Year: '2020',
    Type: 'Action',
    Poster: 'https://example.com/1.png',
    imdbID: 'id1'
  },
  {
    Title: 'Movie 2',
    Year: '2021',
    Type: 'Drama',
    Poster: 'https://example.com/2.png',
    imdbID: 'id2'
  },
];

describe('Movies', () => {
  it('renders MovieCard components for each filtered movie', () => {
    const { getAllByTestId } = render(<Movies filtered={mockFiltered} />);
  });

  it('opens the Popup component when a MovieCard is clicked', () => {
    const { getByText, getByTestId } = render(<Movies filtered={mockFiltered} />);
    fireEvent.click(getByText(mockFiltered[0].Title));
  });
});

