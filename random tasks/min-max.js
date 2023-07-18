function minMax(iterable) {
    let min = Infinity;
    let max = -Infinity;
    for (let number of iterable) {
        if (number > max) {
            max = number;
        }
        if (number < min) {
            min = number;
        }
    }
    return { min, max };
}
// better return value
// usabe with all iterables
// no side effect
// faster

function app() {
    var argv = process.argv.slice(2); // [] or ['30'] or ['30', '10', '-4'];
    if (argv.length == 0) {
        console.error('usage: node min-max.js number [...numbers]');
    } else {
        const { min, max } = minMax(argv);
        console.log(`Min: ${min}`);
        console.log(`Max: ${max}`);
        console.log(`Array: ${argv.join(', ')}`);
    }
}

app();

// node min-max.js 30 10 -4
// Min: -4
// Max: 30
// Array: 30, 10, -4