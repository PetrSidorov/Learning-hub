// https://random-word-api.herokuapp.com/word?number=1
let remainingGuesses = 7;
let word = "";
let displayWord = [];
let wrongGuesses = [];

const buttonGuess = document.getElementById("buttonGuess");
const remainingGuessesButton = document.getElementById("buttonGuess");
const inputGuess = document.getElementById("guess");
const wordDisplay = document.getElementById("wordDisplay");
const remainingGuessesDisplay = document.getElementById("remainingGuesses");

async function fetchWord() {
  const response = await fetch(
    "https://random-word-api.herokuapp.com/word?number=1"
  );

  if (!response.ok) {
  }

  const words = await response.json();
  return words[0];
}

async function startGame() {
  remainingGuesses = 7;
  word = await fetchWord();
  console.log(word);
  displayWord = Array(word.length).fill("_");
  wrongGuesses = [];
  ui.updateWordDisplay();
  ui.updatGuessesDisplay();
}

const ui = {
  updateWordDisplay: () => {
    wordDisplay.textContent = displayWord.join("");
  },

  updatGuessesDisplay: () => {
    remainingGuessesDisplay.textContent = remainingGuesses;
  },
};

function guess() {
  const value = inputGuess.value;
  if (!value || wrongGuesses.includes(value) || !remainingGuesses) return;

  for (let i = 0; i < word.length; i++) {
    if (word[i] == value) {
      displayWord[i] = word[i];
      ui.updateWordDisplay();
    }
  }
}

async function init() {
  startGame();
}

init();
