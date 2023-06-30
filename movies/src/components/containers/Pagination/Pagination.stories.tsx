import { useState } from 'react';
import { Story } from '@storybook/react';
import Pagination from './Pagination';
import { PaginationProps } from "../../../types/types"

export default {
    component: Pagination,
    title: 'Components/Pagination',
  }

  const Template: Story<PaginationProps> = (args) => {
    const [currentPage, setCurrentPage] = useState(args.currentPage);

    return <Pagination {...args} currentPage={currentPage} setCurrentPage={setCurrentPage} />;
  };

  export const PaginationBlock = Template.bind({});
  PaginationBlock.args = {
    nPages: 5,
    currentPage: 1
  };