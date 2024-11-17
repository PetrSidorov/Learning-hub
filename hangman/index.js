import {
  remainingGuessesDisplay,
  inputGuess,
  buttonGuess,
} from "./domReferences.js";
import { fetchWord } from "./fetchWord.js";
import { store } from "./store.js";
import { fetchWordAction, letterGuessAction } from "./reducer.js";
import { tryCatch } from "./helpers.js";

async function init() {
  store.subscribe(render);

  let [error, word] = await tryCatch(fetchWord());
  if (error) {
    // TODO:
    return;
  }

  store.dispatch(fetchWordAction(word));

  buttonGuess.addEventListener("click", (e) => {
    store.dispatch(letterGuessAction(inputGuess.value));
  });
}

function render() {
  const state = store.getState();

  wordDisplay.textContent = state.displayLetters
    .map((letter) => letter ?? "_")
    .join("");
  remainingGuessesDisplay.textContent = state.remainingGuesses;
}

try {
  await init();
} catch (error) {
  console.log("err ", error);
}
