import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from "../";

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const NormalButton = Template.bind({});
NormalButton.args = {
  name: 'button-normal-stories',
  attributes: {
    text: 'Stories',
    styleProps: {
      type: 'normal',
      buttonComponent: {}
    }
  }
}

export const CircleButton = Template.bind({});
CircleButton.args = {
  name: 'button-circle-stories',
  attributes: {
    icon: FaArrowRight,
    styleProps: {
      type: 'circle',
      buttonComponent: {}
    }
  }
}
