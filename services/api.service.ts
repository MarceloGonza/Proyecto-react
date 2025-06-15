import axios from "axios";
import { Character } from "./../src/models/character.model";
const BASE_URL = "https://rickandmortyapi.com/api";

export const getCharacter = (id: number) => {
  return axios.get<Character>(`${BASE_URL}/characters/${id}`);
};
