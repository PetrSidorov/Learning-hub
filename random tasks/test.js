var students = [
    { name: "Harry", house: "Gryffindor" },
    { name: "Hermione", house: "Gryffindor" },
    { name: "Draco", house: "Slytherin" },
    { name: "Ron", house: "Gryffindor" },
    { name: "Luna", house: "Ravenclaw" },
];

{
    let result = true;

    for (let student of students) {
        if (student.house != "Gryffindor") {
            result = false;
            break;
        }
    }

    // console.log(result);
}

var groups = [
    [students[0], students[1], students[3], students[4]],
    [students[3], students[0], students[4]],
    [students[2], students[4], students[0], students[1]],
];

function solveFunc() {
    // if Harry is in every group - true, else false

    let found = true;
    
    for (const group of groups) {
        if (!harryIsIn(group)) {
            found = false;
            break;
        }
    }
    
    console.log(found)

    function harryIsIn(group) {
        let found = false;
        
        for (const student of group) {
            if (student.name == "Harry") { 
                found = true;
                break;
            }
        }

        return found;
    }
}

function solveLoop() {
    let found = true;

    for (const group of groups) {
        let foundInGroup = false;
        for (const student of group) {
            if (student.name == "Harry") { 
                foundInGroup = true;
                break;
            }
        }
        if (!foundInGroup) {
            found = false;
            break;
        }
    }

    console.log(found)
}

function solveLoopTwo() {
    let found = true;

    groupLoop: for (const group of groups) {

        for (const student of group) {
            if (student.name == "Harry") { 
                continue groupLoop;
            }
        }

        found = false;
        break;
    }

    console.log(found)
}

solveLoop();
solveLoopTwo();