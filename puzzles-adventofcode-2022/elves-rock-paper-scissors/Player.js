class Player {
    constructor(score, rpsMove){
        this.score = 0;
        this.rpsMove = rpsMove
    }

    updateScore(score) {
        this.score += score
    }

    // playMatch(opponent){
    //     this.score = getMatchResult(opponent, this.rpsMove)
    // }
    
    // battleOpponent(opponent){
    //     opponent.playMatch(this.rpsMove)
    // }

}

export default Player;