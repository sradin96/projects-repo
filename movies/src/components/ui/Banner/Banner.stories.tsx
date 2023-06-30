import { Story } from '@storybook/react';
import { Movie } from '../../../types/types';
import Banner from './Banner';

const movie: Movie = {
    Title: 'The Shawshank Redemption',
    Poster: 'https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg',
    Year: '1994',
    imdbID: 'tt0111161',
    Type: 'Movie'
};

export default {
  title: 'UI/Banner',
}

const Template: Story<any> = (args) => <Banner {...args} />

export const BannerBlock = Template.bind({})
BannerBlock.args= {
    movie: movie,
}
