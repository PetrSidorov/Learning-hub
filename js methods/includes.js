// ready
if (!Array.prototype.myIncludes) {
  Array.prototype.myIncludes = function (searchElement, startIndex = 0) {
    let match = false;

    if (startIndex >= this.length) {
      return match;
    }

    if (-this.length <= startIndex && startIndex < 0) {
      startIndex += this.length;
    }

    for (let i = startIndex; i < this.length; i++) {
      if (
        (Number.isNaN(this[i]) && Number.isNaN(searchElement)) ||
        this[i] === searchElement
      ) {
        match = true;
        break;
      }
    }

    return match;
  };
}

const array1 = [1, 2, 3];

console.log(array1.myIncludes(2) === true);

const pets = ["cat", "dog", "bat"];

console.log(pets.myIncludes("cat") === true);
console.log(pets.myIncludes("bat") === true);

const numbers = [0, NaN, 1];

console.log(numbers.myIncludes(NaN) === true);
console.log(numbers.myIncludes(-0) === true);

console.log([1, 2, 3].myIncludes(3, 3) === false);
console.log([1, 2, 3].myIncludes(3, 1) === true);

console.log([1, 2, 3].includes(3, -2) === true);
console.log([1, 2, 3].includes(2, -10) === true);
console.log([1, 2, 3].includes(2, 100) === false);
