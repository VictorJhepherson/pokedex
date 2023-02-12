import React from "react";
import { IDefaultProps, IStyleProps } from "../global";
import { Pokemon } from "../../personas";

interface IPokemonCardAttributes {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  pokemon: Pokemon
  styleProps?: IStyleProps;
}

export interface IPokemonCardProps extends IDefaultProps {
  attributes: IPokemonCardAttributes;
}
