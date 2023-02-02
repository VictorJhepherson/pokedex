import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from "../";

export default {
  title: 'Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [inputValue, setInputValue] = useState("");

  const attributes = {
    setInputValue: setInputValue,
    value: inputValue,
  };


  return (
    <Input {...args} attributes={attributes} />
  );
};

export const InputComponent = Template.bind({});
