import { Story } from '@storybook/react';
import SearchButton from "./SearchButton";
import { SearchButtonType } from '../../../types/types';

export default {
    title: "UI/Search Button",
    component: SearchButton
}

const Template: Story<SearchButtonType> = (args) => <SearchButton {...args} />

export const Button = Template.bind({})
Button.args= {
    text: 'Search',
}
