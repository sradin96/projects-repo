import { Story } from '@storybook/react';
import MovieCard, { MovieProps } from './MovieCard';
import { Movie } from '../../../types/types';

const movie: Movie = {
    Title: 'The Shawshank Redemption',
    Poster: 'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
    Year: '1994',
    imdbID: 'tt0111161',
    Type: 'Movie'
};

export default {
  title: 'UI/MovieCard',
}

// const Template: Story<MovieProps> = (args) => <MovieCard {...args} />

const handlePopup = () => {
    console.log(movie);
}

// export const MovieCardBlock = Template.bind({})
// MovieCardBlock.args= {
//     movie: movie,
//     handlePopup: handlePopup
// }
