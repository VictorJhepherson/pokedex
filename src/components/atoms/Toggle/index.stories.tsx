import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Toggle } from "../..";

export default {
  title: 'Toggle',
  component: Toggle,
} as ComponentMeta<typeof Toggle>;

const Template: ComponentStory<typeof Toggle> = (args) => {
  const [toggleOn, setToggleOn] = useState(true);

  const attributes = {
    textOff: 'Off',
    textOn: 'On',
    setToggleOn: setToggleOn,
    toggleOn: toggleOn,
    styleProps: {
      toggleContainer: {},
      toggleSwitch: {},
      toggleInput: {},
      toggleSlider: {},
      textComponent: {}
    }
  };


  return (
    <Toggle {...args} attributes={attributes} />
  );
};

export const SearchBarComponent = Template.bind({});
