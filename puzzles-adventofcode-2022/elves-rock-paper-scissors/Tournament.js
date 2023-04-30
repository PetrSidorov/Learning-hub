import Game from "./Game.js";
import Player from "./Player.js";

class Tournament{
    constructor(gameArray){
        this.gameArray = gameArray.split('\n').map(playMove => playMove.split(' '));
        // long foreah problem
    }

    playTournament(){
        let myScore = 0
        this.gameArray.forEach( playMove => {
            const me = new Player(0, playMove[1]);
            const elv = new Player(0, playMove[0]);
            const game = new Game(me, elv);
            game.playRound();
            myScore += me.score;
        });
       return myScore;
    }
}

export default Tournament;