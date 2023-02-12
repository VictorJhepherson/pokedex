import React from 'react';
import { useSelectorMockWithValues } from "../../../__mocks__";
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PokemonList } from "../..";

export default {
  title: 'PokemonList',
  component: PokemonList,
} as ComponentMeta<typeof PokemonList>;

const Template: ComponentStory<typeof PokemonList> = (args) => {
  const attributes = {
    pokemons: useSelectorMockWithValues,
    isLoading: false,
  }

  return (
    <PokemonList {...args} attributes={attributes} />
  )
}

export const PokemonListComponent = Template.bind({});
