import axios from "axios";
import { Character } from "./../src/models/character.model";
import { loadAbort } from "../src/utilities";
const BASE_URL = "https://rickandmortyapi.com/api";

export const getCharacter = (id: number) => {
  const controller = loadAbort();
  return {
    call: axios.get<Character>(`${BASE_URL}/character/${id}`, {
      signal: controller.signal,
    }),
    controller,
  };
};

export const newCharacter = (character: Character) => {
  const controller = loadAbort();
  return {
    call: axios.post<null>(`${BASE_URL}/characters`, character, {
      signal: controller.signal,
    }),
    controller,
  };
};
