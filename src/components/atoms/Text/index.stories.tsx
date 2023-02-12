import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from "../..";

export default {
  title: 'Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextComponent = Template.bind({});
TextComponent.args = {
  name: 'text-stories',
  attributes: {
    text: 'Text Stories',
    styleProps: {
      textComponent: {},
    }
  }
}
