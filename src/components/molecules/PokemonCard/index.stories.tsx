import React from 'react';
import { useSelectorMockWithValue } from "../../../__mocks__";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PokemonCard } from "../..";

export default {
  title: 'PokemonCard',
  component: PokemonCard,
} as ComponentMeta<typeof PokemonCard>;

const Template: ComponentStory<typeof PokemonCard> = (args) => {
  const attributes = {
    pokemon: useSelectorMockWithValue.data[0]
  }

  return (
    <PokemonCard {...args} attributes={attributes} />
  )
}

export const PokemonCardComponent = Template.bind({});
