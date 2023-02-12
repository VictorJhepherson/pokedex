import { Dispatch } from "react";
import api from "../../../services/pokemon";
import { PAGINATE } from "../../../utils";
import { DefaultProps } from "../../../interfaces";
import { GetPokemons } from "../../../interfaces/types";
import { getPokemonsReducer, getPokemonReducer } from "../../reducers";

export const getPokemons = async (dispatch: Dispatch<any>, { offset }: GetPokemons) => {
  const results: DefaultProps[] = await api.getPokemons(PAGINATE, offset);

  for (const { url } of results) {
    const pokemon = await api.get(url);

    dispatch(getPokemonsReducer({
      pokemon,
    }));
  }
}

export const getPokemonById = async (dispatch: Dispatch<any>, pokemonId: number) => {
  const pokemon = await api.getPokemonById(pokemonId);

  dispatch(getPokemonReducer({
    pokemon
  }));
}

export const getPokemonByName = async (dispatch: Dispatch<any>, name: string) => {
  const pokemon = await api.getPokemonByName(name);

  dispatch(getPokemonReducer({
    pokemon
  }));
}
