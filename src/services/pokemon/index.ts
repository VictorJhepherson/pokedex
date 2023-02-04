import api from "../api";

export default {
  getPokemons: async (limit: number, offset: number) => {
    const response = await api.get(`/pokemon?limit=${limit}&offset=${offset}`);

    return response.data.results;
  },
  getPokemon: async (id: number) => {
    const response = await api.get(`/pokemon/${id}`);

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
