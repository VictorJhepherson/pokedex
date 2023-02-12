import React from "react";
import { IDefaultProps, IStyleProps } from "../../global";
import { Pokemon } from "../../../personas";
import { InitialStatePokemon } from "../../../types";

interface IPokemonListAttributes {
  pokemons: InitialStatePokemon;
  isLoading: boolean;
  styleProps?: IStyleProps;
}

export interface IPokemonListProps extends IDefaultProps {
  attributes: IPokemonListAttributes;
}
