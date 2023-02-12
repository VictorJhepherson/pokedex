import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { useSelectorMockWithValue } from "../../../__mocks__";
import { PokemonList } from "../..";

describe('Home Screen: check html tags and render', () => {
  it('should be rendered as default', () => {
    const pokemons = useSelectorMockWithValue;

    const { container } = render(
      <PokemonList
        name={`pokemon-list`}
        attributes={{
          pokemons: pokemons,
          isLoading: false,
        }}
      />
    )

    expect(container.querySelector("#pokemon-list")).toBeInTheDocument();
  })
})
