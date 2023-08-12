import { readFileSync } from "fs";
const forest = readFileSync("input.txt").toString().split('\n')
let visibleCount = 0;
// let visible = {}
for (let i = 0; i < forest.length; i++){
    for (let j = 0; j < forest[i].length; j++){
        let left = forest[i].slice(0, j);
        let right = forest[i].slice(j + 1, forest[i].length);
        
        if (
            forest[i][j] > Math.max(...left) || forest[i][j] > Math.max(...right)
            || i === 0 || i === forest.length - 1 || j === 0  || j === forest[i].length - 1
         ){
            visibleCount++
            // visible[i + " " +  j] = forest[i][j];
            continue
        } else {
            let columnUp = [];
            let columnDown = [];
           for ( let k = 0; k < forest.length; k++ ){
                if (k < i){
                    columnUp.push(forest[k].charAt(j))
                }

                if (k > i){
                    columnDown.push(forest[k].charAt(j))
                }
            
           }
        //    let visibleFromUpOrDown = []
           if (forest[i][j] > Math.max(...columnUp) || forest[i][j] > Math.max(...columnDown)){
            // visibleFromUpOrDown.push(forest[i][j])
            visibleCount++
           }

    }
}
}
console.log('visibleCount', visibleCount)