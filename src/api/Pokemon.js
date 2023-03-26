import { API_URL } from "@env";
import axios from "axios";

export const getPokemons = async (nextUrl) => {
  try {
    const response = await axios.get(
      nextUrl || `${API_URL}/pokemon?offset=0&limit=20`
    );
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(response.data);
      }, 500);
    });
    // return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPokemonDetailByUrl = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getPokemonDetailById = async (id) => {
  try {
    const response = await await axios.get(`${API_URL}/pokemon/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
