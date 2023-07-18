import { readFileSync } from "fs";
const AVAILABLE_SPACE = 70000000;
const UPDATE_SPACE = 30000000;
const file = /^[1-9]/;
const dir = /^dir/;
const cd = /^\$ cd/;
const commands = readFileSync("input.txt").toString().split('\n');
let position = {
    getSize: function() {
        let size = 0;
        let childSize = 0
        for (const property in this){
            if (typeof this[property] === 'number'){
                size += this[property];
            }

            if (this[property].getSize){
                childSize += this[property].getSize();
            }
        }
        return size + childSize
    }
};
let root = position

function newFolder(parent, childKey) {
    return {
        ...parent[childKey],
        getParent: function() { return parent; },
        getSize: function() {
            let size = 0;
            let childSize = 0
            for (const property in this){
                if (typeof this[property] === 'number'){
                    size += this[property];
                }

                if (this[property].getSize){
                    childSize += this[property].getSize();
                }
            }
            return size + childSize
        }
    };
}

function changePosition(destination){
    if (destination === '..'){
        position = position.getParent();
    } else {
        position = position[destination]
    }
}

function launchCommands(command, i){

    if ( command === '$ cd /') {
        return null;
    }

    if (file.test(command)) {
        let fileInfo = command.split(" ")
        let size = fileInfo[0]
        let name = fileInfo[1]
        position[name] = Number(size)
    }

    if (dir.test(command)) {
        let dirInfo = command.split(" ");
        let name = dirInfo[1]
        position[name] = newFolder(position, {});
    }

    if (cd.test(command)) {
        let cdInfo = command.split(" ");
        let destination = cdInfo[2]
        changePosition(destination)
    }
}

for (let i = 0; i < commands.length; i++){
    launchCommands(commands[i], i)
}

let sizes = [];
function countSize(root){
    for (const content in root){
        if (root[content].getSize){
            let size = root[content].getSize()
             sizes.push(size);
             countSize(root[content])
        }
    }
    return sizes
}

// const folderSizes = countSize(root);

function filterOutBigAndSum(folderSizes){
    return  folderSizes.filter( folder => folder <= 100_000 ).reduce( (a, b) => a + b)
}

// console.log(filterOutBigAndSum(folderSizes));

// part 2

let sizesObj = {}
function sizeToObject(root){
    for (const content in root){
        if (root[content].getSize){
            let size = root[content].getSize()
             sizesObj[content] = size;
             sizeToObject(root[content])
        }
    }
    return sizesObj
}
const sizesObjResult = sizeToObject(root);
// console.log('sizeToObject(root): ', sizeToObject(root));

const spaceNeeded = -(AVAILABLE_SPACE - root.getSize() - UPDATE_SPACE);

function sizeOfFolderToDelete(sizesObjResult){
    let entries = Object.entries(sizesObjResult)
    entries = entries.filter(([,size]) => size > spaceNeeded);
    entries = entries.sort(([,sizeA], [,sizeB]) => sizeA - sizeB)
    return entries[0][1]
}

 console.log('result: ', sizeOfFolderToDelete(sizesObjResult)); 