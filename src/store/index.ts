import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { pokemonsReducer } from "./reducers/pokemons";

export const reducers = combineReducers({
  pokemons: pokemonsReducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
});

export type ReducerState = ReturnType<typeof reducers>;
export default store;
