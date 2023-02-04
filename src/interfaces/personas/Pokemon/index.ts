export interface DefaultProps {
  name: string;
  url: string;
}

export interface IProps {
  pokemon: DefaultProps;
  key: string;
}

export interface Abilities {
  ability: DefaultProps;
}

export interface Moves {
  move: DefaultProps;
}

export interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
}

export interface Stats {
  base_stat: number;
  effort: number;
  stat: DefaultProps;
}

export interface Types {
  type: DefaultProps;
}

export interface Pokemon {
  id: number;
  name: string;
  baseExperience: number;
  weight: number;
  height: number;
  abilities: Abilities;
  moves: Moves;
  sprites: Sprites;
  species: DefaultProps;
  stats: Stats;
  types: Types;
}
