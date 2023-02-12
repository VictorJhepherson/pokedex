import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { useSelectorMockWitoutValue, useSelectorMockWithValue } from "../../../__mocks__";
import { PokemonCard } from "../..";

describe('Home Screen: check html tags and render', () => {
  it('should be rendered as default', () => {
    const pokemon = useSelectorMockWithValue.data[0];

    const { container } = render(
      <PokemonCard
        name={`pokemon-card`}
        attributes={{
          pokemon: pokemon
        }}
      />
    )

    expect(container.querySelector("#pokemon-card")).toBeInTheDocument();
  })
})
