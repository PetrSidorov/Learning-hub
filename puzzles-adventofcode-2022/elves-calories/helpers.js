export function sumArray(array){
    return array.reduce((acc, num) => acc + num, 0);
}

export function compareNumbers(a, b) {
    return b - a;
}

export function sortArrayFromBiggest(array) {
   return array.sort(compareNumbers);
}