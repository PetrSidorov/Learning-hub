import {
  remainingGuessesDisplay,
  inputGuess,
  buttonGuess,
  buttonNewGame,
  formGuess,
} from "./domReferences.js";
import { fetchWord } from "./fetchWord.js";
import { store } from "./store.js";
import {
  fetchWordAction,
  fetchWordThunk,
  letterGuessAction,
  newGameAction,
  selectIsGameWon,
  selectRemainingGuesses,
} from "./reducer.js";
import { disableForm, enableForm, tryCatch } from "./helpers.js";
import { LIVES } from "./config.js";

async function init() {
  store.subscribe(render);
  await store.dispatch(fetchWordThunk());

  formGuess.addEventListener("submit", (e) => {
    e.preventDefault();
    store.dispatch(letterGuessAction(inputGuess.value));
  });

  formNewGame.addEventListener("submit", async (e) => {
    e.preventDefault();
    store.dispatch(newGameAction());
    await store.dispatch(fetchWordThunk());
  });
}

function render() {
  const state = store.getState();

  const remainingGuesses = selectRemainingGuesses(state);
  const isGameWon = selectIsGameWon(state);
  const isGameLost = remainingGuesses === 0;
  const isGameEnded = isGameWon || isGameLost;

  wordDisplay.textContent = state.displayLetters
    .map((letter) => letter ?? "_")
    .join("");

  remainingGuessesDisplay.textContent = remainingGuesses;

  if (isGameEnded) {
    gameStatus.textContent = isGameWon ? "game won" : "game is lost";
    disableForm(formGuess);
    buttonNewGame.focus();
  } else {
    gameStatus.textContent = "";
    enableForm(formGuess);
  }

  inputGuess.value = "";
  inputGuess.focus();
}

try {
  await init();
} catch (error) {
  console.log("err ", error);
}
