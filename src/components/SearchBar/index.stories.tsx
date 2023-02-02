import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SearchBar } from "../";

export default {
  title: 'SearchBar',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => {
  const [inputValue, setInputValue] = useState("");

  const attributes = {
    setSearchValue: setInputValue,
    searchValue: inputValue,
  };


  return (
    <SearchBar {...args} attributes={attributes} />
  );
};

export const SearchBarComponent = Template.bind({});
