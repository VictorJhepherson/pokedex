import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Image } from "../..";

export default {
  title: 'Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const ImageComponent = Template.bind({});
ImageComponent.args = {
  name: 'image-stories',
  attributes: {
    src: 'assets/img/logo.svg',
    styleProps: {
      hasHover: true,
      imageComponent: {},
    }
  }
}
