import { readFileSync } from "fs";

// is there a recapatcha property o nthe window object?
if (window.recaptcha) {
    // hell year
    // lets use it to do something ....
} else {
    // oh no
    // what should we don now?
}

try {
    x;
} catch (err) {
    if (err instanceof ReferenceError) {
        console.error("Oops! x is not definid, will try to read y maybe.")
    }
}

try {
    var data = readFileSync("some-data.json");
} catch (err) {
    if (err instanceof Error && err.code == 'ENOENT') {
        console.error('Oops! There\'s no file');
    }
    else if (err instanceof Error && err.code == 'EACCES') {
        console.error('Oops! No file read permissions.')
    } 
    else {
        console.error('Oops! There\'s something wrong with file');
    }
}

if (data) {
    try {
        var json = JSON.parse(data); // SyntaxError TypeError ReferenceError SecurityError ...
        console.log(json.data.message);
    } catch (err) {
        if (err instanceof SyntaxError) {
            console.error('Oops! You have an invalid json file. Can\'t do anything about it.');
        } 
        else if (err instanceof TypeError){
            console.error('Oops! There\'s no "data" key in your json object.');
        }
        else {
            throw err;
        }
    }
}



function a() {
    try {
        b()
    } catch (err) {
        if (err instanceof AError) {

        } else {
            throw err;
        }
    }
}

function b() {
        c();
}

function c() {
        d();
}

function d() {
    throw new AError();
}

// d();
// ...
// c();
// ...;
// b();
// ...;
// a();