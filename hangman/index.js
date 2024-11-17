import {
  remainingGuessesDisplay,
  inputGuess,
  buttonGuess,
} from "./domReferences.js";
import { fetchWord } from "./fetchWord.js";
import { store } from "./store.js";
import {
  fetchWordAction,
  letterGuessAction,
  selectRemainingGuesses,
} from "./reducer.js";
import { tryCatch } from "./helpers.js";
import { LIVES } from "./config.js";

async function init() {
  inputGuess.focus();
  store.subscribe(render);

  let [error, word] = await tryCatch(fetchWord());
  if (error) {
    // TODO:
    return;
  }

  store.dispatch(fetchWordAction(word));

  buttonGuess.addEventListener("click", (e) => {
    store.dispatch(letterGuessAction(inputGuess.value));
    inputGuess.value = "";
    inputGuess.focus();
    // confirm("Press a button!");
  });
}

function render() {
  const state = store.getState();
  const remainingGuesses = selectRemainingGuesses(state);

  wordDisplay.textContent = state.displayLetters
    .map((letter) => letter ?? "_")
    .join("");
  remainingGuessesDisplay.textContent = remainingGuesses;
}

try {
  await init();
} catch (error) {
  console.log("err ", error);
}
