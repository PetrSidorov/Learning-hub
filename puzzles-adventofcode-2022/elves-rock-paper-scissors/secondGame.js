    // me - move 1
    // "Anyway, the second column says how the round needs to end:
    // X means you need to lose,
    // Y means you need to end the round in a draw
    // Z means you need to win. Good luck!"

    export function secondGame(move1, move2) {
        // console.log(move1, move2);
        // const elveMoveMap = {
        //     A: "Rock",
        //     B: "Paper",
        //     C: "Scissors"
        //   };

        const myMoveMap = {
            X: "Lose",
            Y: "Draw",
            Z: "Win",
        };

        const abcToXyzMap = {
            A: "X",
            B: "Y",
            C: "Z"
        };

        // const elveMove = elveMoveMap[move2];
        const elveMove = move2;
        const myMove = myMoveMap[move1];
        let myActualMove = ""
        if (myMove === "Lose") {
            if (elveMove === "A") {
                myActualMove = "Z"; // C -> Z
            } else if (elveMove === "B") {
                myActualMove = "X"; // A -> X
            } else if (elveMove === "C") {
                myActualMove = "Y"; // B -> Y
            }
        } else if (myMove === "Draw") {
            myActualMove = abcToXyzMap[move2]; 
        } else if (myMove === "Win") {
            if (elveMove === "A") {
                myActualMove = "Y"; // B -> Y
            } else if (elveMove === "B") {
                myActualMove = "Z"; // C -> Z
            } else if (elveMove === "C") {
                myActualMove = "X"; // A -> X
            }
        }
        return myActualMove;
    }