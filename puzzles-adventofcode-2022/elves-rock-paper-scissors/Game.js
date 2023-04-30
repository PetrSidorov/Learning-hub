import { getMatchResult } from './gameLogic.js'


class Game {
    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
    }

    getMove(player){
        return player.rpsMove
    }

    playRound() {
        const score1 = getMatchResult(this.getMove(this.player1), this.getMove(this.player2));
        // const score2 = getMatchResult(this.getMove(this.player2), this.getMove(this.player1));
        this.player1.updateScore(score1);
        // this.player2.updateScore(score2);
    }
}

export default Game;