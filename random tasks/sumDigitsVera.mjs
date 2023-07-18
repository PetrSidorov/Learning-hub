
function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
  }
  
function sumDigits1(number){
    let n = parseInt(getBaseLog(10, number) + 1)
    let sum = 0;
    let y = 0;
    while (n >= 0) {
        y = parseInt(number / Math.pow(10, n));
        number = number - y * Math.pow(10, n);
        sum += y;
        n--;
    }
    console.log(sum)
}

sumDigits1(121);