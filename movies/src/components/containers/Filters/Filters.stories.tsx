import { Story } from '@storybook/react';
import Filters from './Filters';
import { FilterTypes } from '../../../types/types';

const movies = [
    {
      imdbID: "1",
      Title: "Movie 1",
      Year: "2020",
      Type: "Movie",
      Poster: "",
    },
    {
      imdbID: "2",
      Title: "Movie 2",
      Year: "2019",
      Type: "Movie",
      Poster: "",
    },
  ];

export default {
  title: 'Components/Filters',
}

const Template: Story<FilterTypes> = (args) => <Filters {...args} />

const onSubmit = (e: React.FormEvent, year: string, type: string) => {
    e.preventDefault();
    console.log(`Selected year: ${year}`);
    console.log(`Selected type: ${type}`);
  };

export const FiltersBlock = Template.bind({})
FiltersBlock.args= {
    movies: movies,
    setSearchHandle(e) {
        return e
    },
    onSubmit: onSubmit
}
