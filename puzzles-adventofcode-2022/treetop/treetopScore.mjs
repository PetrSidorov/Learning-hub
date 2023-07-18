import { readFileSync } from "fs";
var treeStore = {};
const forest = readFileSync("input.txt").toString().split("\n");
for (let i = 0; i < forest.length; i++) {
  for (let j = 0; j < forest[i].length; j++) {
    const key = `${i} ${j}: ${forest[i][j]}`;
    if (!treeStore[key]) {
      treeStore[key] = [];
    }

    let left = forest[i].slice(0, j).split('').reverse().join();
    let right = forest[i].slice(j + 1);
    var idxLeft = 0;
    for (let k = 0; k < left.length; k++) {
      if (Number(forest[i][j]) > Number(left[k])) {
        idxLeft++;
      }
    }

    if ( j != 0 && forest[i][j] < 1){
        idxLeft++
    }
    treeStore[key].push({'idxLeft: ': idxLeft});

    let idxRight = 0;
    for (let k = 0; k < right.length; k++) {
      if (Number(forest[i][j]) > Number(right[k])) {
        idxRight++;
      }
    }
    // console.log('forest[i].length',forest[i].length - 1);
    // console.log('j',j);
    // console.log('forest[i][j]',forest[i][j]);
    
    if ( j != forest[i].length  && forest[i][j] < 1){
        // console.log('what');
        // console.log('---------');
        idxRight++
    }
    treeStore[key].push({'idxRight: ': idxRight});

    let columnUp = [];
    let columnDown = [];
    for (let k = 0; k < forest.length; k++) {
      if (k < i) {
        columnUp.push(forest[k].charAt(j));
      }

      if (k > i) {
        columnDown.push(forest[k].charAt(j));
      }
    }
    
    let idxUp = 0;
    for (let k = 0; k < columnUp.length; k++) {
      if (Number(forest[i][j]) > Number(columnUp[k])) {
        idxUp++;
      }
    }
    
    if ( i != 0 && forest[i][j] < 1){
        idxUp++
    }

    treeStore[key].push({'idxUp: ': idxUp});

    let idxDown = 0;
    // console.log('columnDown',columnDown);
    for (let k = 0; k < columnDown.length; k++) {
        if (Number(forest[i][j]) > Number(columnDown[k])) {
            idxDown++;
          }
    }

    if (i != forest.length && forest[i][j] < 1) {
        idxDown++;
      }

    treeStore[key].push({'idxDown: ': idxDown});
  }
}

// console.log(treeStore)
const indexesObj = {};
for ( const tree in treeStore ) {  
    let idxOverAll = 1
    for (const treeIndexesObj of treeStore[tree]) {
        let indexes = Object.values(treeIndexesObj)
        idxOverAll*=indexes[0]
    }
    indexesObj[tree] = idxOverAll;  
}

// console.log(indexesObj);
let entries = Object.entries(indexesObj);

entries.sort((a, b) => a[1] - b[1]);
let sortedObj = Object.fromEntries(entries);

// console.log(sortedObj);
console.log(-0 === 0);