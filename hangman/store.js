import { createStore } from "./createStore.js";
import { reducer } from "./reducer.js";

const initialState = {
  remainingGuesses: 7,
  word: null,
  displayLetters: [],
  wrongLetters: [],
};

export const store = createStore(initialState, reducer);
