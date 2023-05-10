// just chaining
import { readFileSync } from 'fs' // esm (ecma script modules) 2015
function justChaining(){
    const data = readFileSync('input.txt').toString();
    const elvesSortedDesc = data.split("\n\n")
                .map( elve => elve.split('\n') )
                .map( elve => elve.map(Number) )
                .map( elve => elve.reduce((acc, num) => acc + num, 0) )
                .sort((a, b) => b - a );
    const bestElve = elvesSortedDesc[ 0 ];
    console.log(bestElve);

    const bestThreeElves = elvesSortedDesc.slice(0, 3).reduce((acc, num) => acc + num, 0);

    console.log(bestThreeElves);
}

