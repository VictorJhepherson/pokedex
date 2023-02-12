import React from "react";
import { IPokemonListProps, Pokemon } from "../../../interfaces";

import { List, Loading, PokemonCard } from "../../";

const PokemonList: React.FC<IPokemonListProps> = ({ name, attributes }) => {
  const { pokemons, isLoading, styleProps } = attributes;

  const renderPokemons = () => {
    const pokeList: Array<JSX.Element> = [];

    pokemons.data.forEach((pokemon: Pokemon, index: number) => {
      pokeList.push(
        <PokemonCard
          key={index}
          name={`pokemon-card-${index}`}
          attributes={{
            pokemon: pokemon
          }}
        />
      )
    })

    return pokeList;
  }

  return (
    <List
      name={name}
      attributes={{
        styleProps: styleProps
      }}
    >
      <>
        {isLoading && pokemons.data.length === 0
          ? <Loading
              name={`loading-pokemon-list`}
              attributes={{}}
            />
          : renderPokemons()
        }
      </>
    </List>
  )
}

export default PokemonList;
