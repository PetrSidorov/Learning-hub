// ----------------------------------------------------------------------
// Функция суммирования всех цифр числа
// sumDigits(99); // 18 sumDigits(-32); // 5
// ----------------------------------------------------------------------

function sumDigits(number){
    var n = 0;
    sum = 0
    let x = number;
    // let substract = 0
    while (x >= 1) {
        x = number / Math.pow(10 , n);
        console.log('x',x);
        console.log('parseInt(x % 1 * 10)',parseInt(x % 1 * 10));
        sum += parseInt(x % 1 * 10);
        console.log(number);
        console.log('sum', sum);
        console.log('iteration', n);
        console.log('---------');
        n += 1
    }
    return sum;
}

console.log(sumDigits(222));