class Player {
    constructor(score, rpsMove){
        this.score = score;
        this.rpsMove = rpsMove
    }

    updateScore(score) {
        this.score += score
    }

}

export default Player;