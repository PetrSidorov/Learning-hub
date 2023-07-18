var argv = process.argv.slice(2);

if (argv.length == 0) {
    console.log("Hello, stranger!");
} else if (argv.length == 1) {
    console.log(`Hello, ${argv[0]}!`);
} else {
    console.log("error: usage node hello.js <name>");
}