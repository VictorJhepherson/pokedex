import api from "../api";

export default {
  get: async (url: string) => {
    const response = await api.get(url);

    return response.data;
  },
  getPokemons: async (limit: number, offset: number) => {
    const response = await api.get(`/pokemon?limit=${limit}&offset=${offset}`);

    return response.data.results;
  },
  getPokemonById: async (id: number) => {
    const response = await api.get(`/pokemon/${id}`);

    return response.data;
  },
  getPokemonByName: async (name: string) => {
    const response = await api.get(`/pokemon/${name}`);

    return response.data;
  },
  getSpecies: async (id: number) => {
    const response = await api.get(`/pokemon-species/${id}`);

    return response.data;
  },
  getEvoluationChain: async (id: number) => {
    const response = await api.get(`/evolution-chain/${id}`);

    return response.data;
  }
}
