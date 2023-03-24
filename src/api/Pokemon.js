import { API_URL } from "@env";
import axios from "axios";

export const getPokemons = async (nextUrl) => {
  try {
    const response = await axios.get(
      nextUrl || `${API_URL}/pokemon?limit=20&offset=0`
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
    const config = {
      method: "get",
      url: url,
    };
    const response = await axios(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};
