import React from "react";
import { DefaultProps, Pokemon, Types } from ".";

export type ClassesType = string;

export type ChildrenType = JSX.Element | React.ReactFragment;

export type WrapperElementType = React.ElementType;

export type ButtonTypes = 'circle' | 'normal';

export type InitialStatePokemon = {
  data: Pokemon[],
}

export type GetPokemons = {
  offset: number;
}
