import { LIVES } from "./config.js";
import { fetchWord } from "./fetchWord.js";

const WORD_FETCHED = "wordFetched";
const LETTER_GUESSED = "letterGuessed";
const NEW_GAME = "newGame";

/**
 * @typedef {
 *   word: string | null;
 *   displayLetters: string[];
 *   wrongLetters: string[];
 * } HangmanState
 */

const initialState = {
  word: null,
  displayLetters: [],
  wrongLetters: [],
};

export const fetchWordAction = (word) => {
  return { type: WORD_FETCHED, payload: word };
};

export const letterGuessAction = (letter) => {
  return { type: LETTER_GUESSED, payload: letter };
};

export const newGameAction = () => {
  return { type: NEW_GAME };
};

export const fetchWordThunk = () => async (dispatch) => {
  const word = await fetchWord();
  dispatch(fetchWordAction(word));
};

export const selectRemainingGuesses = (state) => {
  return LIVES - state.wrongLetters.length;
};

export const selectIsGameWon = (state) => {
  // return state.displayLetters.join("") === state.word;
  return !state.displayLetters.includes(null) && state.word !== null;
};

/**
 *
 * @param {HangmanState} state
 * @param {HangmanAction} action
 * @returns
 */
export function reducer(state = initialState, action) {
  if (action.type == NEW_GAME) {
    return initialState;
  }

  if (action.type == WORD_FETCHED) {
    const word = action.payload;
    console.log("word ", word);
    return { ...state, word, displayLetters: Array(word.length).fill(null) };
  }

  if (action.type == LETTER_GUESSED) {
    const letter = action.payload.trim();

    if (
      !letter ||
      state.wrongLetters.includes(letter) ||
      state.displayLetters.includes(letter)
    ) {
      return state;
    }

    const displayLettersCopy = [...state.displayLetters];
    let wrongLettersCopy = [...state.wrongLetters];
    let matchFound = false;

    for (let i = 0; i < state.word.length; i++) {
      if (letter == state.word[i]) {
        displayLettersCopy[i] = state.word[i];
        matchFound = true;
      }
    }

    if (!matchFound) {
      wrongLettersCopy.push(letter);
    }

    return {
      ...state,
      displayLetters: displayLettersCopy,
      wrongLetters: wrongLettersCopy,
    };
  }

  return state;
}
