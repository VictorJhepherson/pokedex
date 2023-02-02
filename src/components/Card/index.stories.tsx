import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from "../";
import theme from '../../styles/theme';

export default {
  title: 'Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const CardComponent = Template.bind({});
CardComponent.args = {
  name: 'card-stories',
  attributes: {
    styleProps: {
      hasHover: true,
      cardComponent: {
        justifyContent: 'center',
        backgroundColor: theme.colors.primary,
      },
      imageCard: {
        borderBottomLeftRadius: '20px',
        borderBottomRightRadius: '20px',
      },
    }
  }
}

export const CardWithChildren = Template.bind({});
CardWithChildren.args = {
  name: 'card-with-children-stories',
  attributes: {
    styleProps: {
      hasHover: true,
      cardComponent: {
        justifyContent: 'center',
        backgroundColor: theme.colors.primary,
      },
      imageCard: {
        borderBottomLeftRadius: '20px',
        borderBottomRightRadius: '20px',
      },
    }
  },
  children: <span>Hello World</span>
}
