var cache = new Map();

function average(numbers) {
    if (cache.has(numbers)) {
        return cache.get(numbers);
    }  

    console.log('average()', numbers);
    if (numbers.length == 0) {
        return 0;
    }
    
    var result = numbers.reduce((total, n) => total + n, 0) / numbers.length;
    cache.set(numbers, result);
    return result;
}

var numbers = [20, 30, 40]

average(numbers);
average(numbers);