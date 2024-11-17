const WORD_FETCHED = "wordFetched";
const LETTER_GUESSED = "letterGuessed";

export const fetchWordAction = (word) => {
  return { type: WORD_FETCHED, payload: word };
};

export const letterGuessAction = (letter) => {
  return { type: LETTER_GUESSED, payload: letter };
};

export function reducer(state, action) {
  console.log("reducer ", state, action);

  if (action.type == WORD_FETCHED) {
    const word = action.payload;
    return { ...state, word, displayLetters: Array(word.length).fill(null) };
  }

  if (action.type == LETTER_GUESSED) {
    const letter = action.payload;
    const displayLettersCopy = [...state.displayLetters];
    let remainingGuesses = state.remainingGuesses;
    let matchFound = false;

    for (let i = 0; i < state.word.length; i++) {
      if (letter == state.word[i]) {
        displayLettersCopy[i] = state.word[i];
        matchFound = true;
      }
    }

    if (!matchFound) {
      remainingGuesses--;
    }

    let a = 1;
    let b = 2;

    x = x xor y
    y = x xor y
    x = x xor y
    
    // const displayLetters = state.displayLetters.map((_, index) => letter == state.word[index] ? letter : _);
    // const matchFound = state.word.includes(letter) ? -1

    return { ...state, displayLetters: displayLettersCopy, remainingGuesses };
  }

  return state;
}
