import { render, fireEvent } from '@testing-library/react';
import { useContext } from 'react';
import Popup from './Popup';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}));

const mockSetWatched = jest.fn();
const mockSetWantToWatch = jest.fn();

describe('Popup', () => {
  beforeEach(() => {
    (useContext as jest.Mock).mockReturnValue({
      setWatched: mockSetWatched,
      setWantToWatch: mockSetWantToWatch,
    });
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render nothing when not open', () => {
    const { container } = render(<Popup current={{Title: 'Title', Poster: 'movie-poster-url', imdbID: '1', Year: '1996', Type: 'Movie'}} open={false} setOpen={() => {}} />);
    expect(container.firstChild).toBeNull();
  });

  it('should render the popup when open', () => {
    const { getByText } = render(<Popup current={{ Title: 'Title', Poster: 'movie-poster-url', imdbID: '1', Year: '1996', Type: 'Movie' }} open={true} setOpen={() => {}} />);
    expect(getByText('Modal')).toBeInTheDocument();
    expect(getByText('Add to watched')).toBeInTheDocument();
    expect(getByText('Add to want to watch')).toBeInTheDocument();
    expect(getByText('Check all details')).toBeInTheDocument();
  });

  it('should call setOpen when exit button is clicked', () => {
    const setOpenMock = jest.fn();
    const { getByTestId } = render(<Popup current={{Title: 'Title', Poster: 'movie-poster-url', imdbID: '1', Year: '1996', Type: 'Movie'}} open={true} setOpen={setOpenMock} />);
    fireEvent.click(getByTestId('close-popup'));
    expect(setOpenMock).toHaveBeenCalledWith(false);
  });

  it('should call setWatched when "Add to watched" button is clicked', () => {
    const { getByText } = render(<Popup current={{Title: 'Title', Poster: 'movie-poster-url', imdbID: '1', Year: '1996', Type: 'Movie'}} open={true} setOpen={() => {}} />);
    fireEvent.click(getByText('Add to watched'));
    expect(mockSetWatched).toHaveBeenCalled();
  });

  it('should call setWantToWatch when "Add to want to watch" button is clicked', () => {
    const { getByText } = render(<Popup current={{Title: 'Title', Poster: 'movie-poster-url', imdbID: '1', Year: '1996', Type: 'Movie'}} open={true} setOpen={() => {}} />);
    fireEvent.click(getByText('Add to want to watch'));
    expect(mockSetWantToWatch).toHaveBeenCalled();
  });
});