import { POKEMON_TYPE_COLORS } from "./constants";

export const getPokemonByColorType = (type) =>
  POKEMON_TYPE_COLORS[type.toLowerCase()];
