import { Pokemon } from "../../interfaces"

export const useSelectorMockWitoutValue = {
  data: []
}

export const useSelectorMockWithValue = {
  data: [{
    id: 1,
    name: 'pokemon-test',
    baseExperience: 0,
    weight: 0,
    height: 0,
    abilities: {
      ability: {
        name: 'ability-test',
        url: '',
      }
    },
    moves: {
      move: {
        name: 'move-test',
        url: ''
      }
    },
    sprites: {
      back_default: '',
      back_female: '',
      back_shiny: '',
      back_shiny_female: '',
      front_default: 'assets/img/pokebola.png',
      front_female: '',
      front_shiny: '',
    },
    species: {
      name: 'specie-test',
      url: ''
    },
    stats: {
      base_stat: 0,
      effort: 0,
      stat: {
        name: 'stat-test',
        url: '',
      }
    },
    types: [
      {
        type: {
          name: 'ghost',
          url: '',
        }
      }
    ]
  }]
}
