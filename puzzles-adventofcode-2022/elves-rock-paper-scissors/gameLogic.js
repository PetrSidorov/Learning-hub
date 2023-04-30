import { firstGame } from "./firstGame.js";
import { secondGame } from "./secondGame.js";


export function getMatchResult(move1, move2) {

    // return firstGame(move1, move2);
    return firstGame(secondGame(move1, move2), move2);
  }