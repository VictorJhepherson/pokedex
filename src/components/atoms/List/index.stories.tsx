import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { List } from "../..";

export default {
  title: 'List',
  component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

export const ListComponent = Template.bind({});
ListComponent.args = {
  name: 'list-stories',
  attributes: {
    styleProps: {
      listComponent: {}
    }
  },
  children: Array.from({ length: 23 }, (element, index: number) => <span key={index} style={{ marginBottom: '10px' }}>{`Hello World ${index}`}</span>),
}
