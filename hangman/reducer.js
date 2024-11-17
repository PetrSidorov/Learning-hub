const WORD_FETCHED = "wordFetched";
const LETTER_GUESSED = "letterGuessed";

export const fetchWordAction = (word) => {
  return { type: WORD_FETCHED, payload: word };
};

export const letterGuessAction = (letter) => {
  return { type: LETTER_GUESSED, payload: letter };
};

/**
 * @typedef {
 *   remainingGuesses: number;
 *   word: string | null;
 *   displayLetters: string[];
 *   wrongLetters: string[];
 * } HangmanState
 */

/**
 *
 * @param {HangmanState} state
 * @param {HangmanAction} action
 * @returns
 */
export function reducer(state, action) {
  if (action.type == WORD_FETCHED) {
    const word = action.payload;
    console.log("word ", word);
    return { ...state, word, displayLetters: Array(word.length).fill(null) };
  }

  if (action.type == LETTER_GUESSED) {
    const letter = action.payload;
    // console.log("state.displayLetters ", state.displayLetters);
    if (
      state.wrongLetters.includes(letter) ||
      state.displayLetters.includes(letter)
    ) {
      return state;
    }

    const displayLettersCopy = [...state.displayLetters];
    let wrongLettersCopy = [...state.wrongLetters];
    let remainingGuesses = state.remainingGuesses;
    let matchFound = false;

    for (let i = 0; i < state.word.length; i++) {
      if (letter == state.word[i]) {
        displayLettersCopy[i] = state.word[i];
        matchFound = true;
      }
    }

    if (!matchFound) {
      wrongLettersCopy.push(letter);
      remainingGuesses--;
    }

    // let a = 1;
    // let b = 2;

    // x = x xor y
    // y = x xor y
    // x = x xor y

    // const displayLetters = state.displayLetters.map((_, index) => letter == state.word[index] ? letter : _);
    // const matchFound = state.word.includes(letter) ? -1

    return {
      ...state,
      displayLetters: displayLettersCopy,
      remainingGuesses,
      wrongLetters: wrongLettersCopy,
    };
  }

  return state;
}
