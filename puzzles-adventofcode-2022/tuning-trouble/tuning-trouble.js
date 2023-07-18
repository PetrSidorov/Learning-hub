import { readFileSync } from "fs";
const input = readFileSync("input.txt").toString().split('')

function findMarker(input, packetLength){
    let answer = null;
    mainLoop: for (let start = 0; start < input.length; start++) {
        let groupOfChars = input.slice(start, start + packetLength + 1);
        if (groupOfChars.length < packetLength + 1){
            break mainLoop;
        }
        let counter = []
        for (let char of groupOfChars) {
            if (!counter.includes(char)) {
                counter.push(char)
                if (counter.length === packetLength){
                    answer = start + packetLength;
                    break mainLoop;
                }
            } else {
                continue mainLoop;
            }
        }
    }
    return answer
}

console.log('answer: ', findMarker(input, 14));