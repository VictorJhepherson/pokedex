import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from "../";

export default {
  title: 'Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const HeaderComponent = Template.bind({});
HeaderComponent.args = {
  name: 'header-stories',
  attributes: {
    logoPath: 'assets/img/logo.svg',
    styleProps: {
      headerComponent: {},
      imageHeader: {
        width: '60px',
        height: '60px',
      }
    }
  }
}

export const HeaderWithOutLogo = Template.bind({});
HeaderWithOutLogo.args = {
  name: 'header-stories',
  attributes: {
    styleProps: {
      headerComponent: {},
      imageHeader: {}
    }
  }
}


export const HeaderWithoutLogoAndHasChildren = Template.bind({});
HeaderWithoutLogoAndHasChildren.args = {
  name: 'header-stories',
  attributes: {
    styleProps: {
      headerComponent: {},
      imageHeader: {}
    }
  },
  children: <span>Hello World!</span>
}
