import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialStatePokemon } from "../../../interfaces/types";
import { Pokemon } from "../../../interfaces";
import { ReducerState } from "../..";

const initialState: InitialStatePokemon = {
  data: [],
}

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    getPokemonsReducer(state: InitialStatePokemon, action: PayloadAction<{ pokemon: Pokemon }>) {
      const { pokemon } = action.payload;

      const alredyExists = state.data.find((existPokemon) => existPokemon !== null && existPokemon.id === pokemon.id);

      if (!alredyExists) state.data.sort((a, b) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0).push(pokemon);
    },
    getPokemonReducer(state: InitialStatePokemon, action: PayloadAction<{ pokemon: Pokemon }>) {
      const { pokemon } = action.payload;

      state.data.push(pokemon);
    },
    deletePokemons(state: InitialStatePokemon, action) {
      state.data = [];
    }
  }
});

export const pokemonsReducer = pokemonSlice.reducer;
export const { getPokemonsReducer, getPokemonReducer, deletePokemons } = pokemonSlice.actions;
export const pokemonsSelector = (state: ReducerState) => state.pokemons;

