import { API_URL } from "@env";
import axios from "axios";

export const getPokemons = async () => {
  try {
    const config = {
      method: "get",
      url: `${API_URL}/pokemon?limit=20&offset=0`,
    };
    const response = await axios(config);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(response.data);
      }, 2000);
    });
  } catch (error) {
    throw error;
  }
};
