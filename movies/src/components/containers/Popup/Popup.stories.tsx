import { Story } from '@storybook/react';

import Popup from "./Popup";
import { SetStateAction } from 'react';

interface PopupStory {
  open: boolean;
  Type: string;
  Year: string;
  imdbID: string;
  Title: string;
  Poster: string;
}

export default {
  title: 'Components/Popup',
}

const Template: Story<PopupStory> = (args) => <Popup current={{
  Title: args.Title,
  Type: args.Type,
  imdbID: args.imdbID,
  Year: args.Year,
  Poster: args.Poster
}} setOpen={function (value: SetStateAction<boolean>): void {
  throw new Error('Function not implemented.');
} } {...args} />

export const PopupBlock = Template.bind({})
PopupBlock.args= {
    open: true,
    Type: 'Movie',
    Year: "2000",
    imdbID: 'id1',
    Title: 'The Godfather',
    Poster: 'https://images.pexels.com/photos/670720/pexels-photo-670720.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
}
