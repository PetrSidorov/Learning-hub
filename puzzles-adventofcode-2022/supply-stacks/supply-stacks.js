import { readFileSync } from "fs";
const input = readFileSync("input.txt").toString().split("\n");
const tasks = input.slice(10, input.length)
const data = input.slice(0, 8)
let storage = []

function createT(data, arr = []){
    for ( let i = 0; i < data.length; i++ ){
        for ( let j = 1; j < data[i].length; j+=4 ){
            arr = Array.from(arr);
            if (data[i][j] != ' '){
                arr.push(data[i][j]);
            }
            data[i] = data[i].slice(4);
            break;
        }
    }
    storage.push([...arr])
    if (data[0].length > 0) {
        createT(data, arr = [])
    }
}

createT(data, {})

storage.unshift(['test']);
function textTasksTodata(tasks){
    for (let task of tasks) {
        let taskFormatted = task.replace('move', '').replace('from', '').replace('to', '').trim(' ').split(/\s+/);
        moveStack(taskFormatted)
    }
}

textTasksTodata(tasks);
function moveStack(task){
    let amount = Number(task[0]);
    let from = Number(task[1]);
    let to = Number(task[2]);
    let toMove = storage[from].splice(0, amount)
    // .reverse();
    
    storage[to].unshift(...toMove);
    let result = [];
    for (let stack of storage){
        result.push(stack[0])
    }
    console.log(result.slice(1).join(''))
}   



