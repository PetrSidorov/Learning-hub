// function isBigEnough(value) {
//     return value >= 10;
//   }
  
//   const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
  // filtered is [12, 130, 44]

  // Modifying each word
let words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];

const modifiedWords = words.filter((word, index, arr) => {
  arr[index + 1] += " extra";
  return word.length < 6;
});

// console.log(modifiedWords);
// Notice there are three words below length 6, but since they've been modified one is returned
// ["spray"]

// Appending new words
words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const appendedWords = words.filter((word, index, arr) => {
  arr.push("new");
  return word.length < 6;
});

// console.log(appendedWords);
// Only three fits the condition even though the `words` itself now has a lot more words with character length less than 6
// ["spray" ,"limit" ,"elite"]


  
Array.prototype.myFilter = function(callBackFn){
  let O = Object(this);
  if (O !== this){
    throw new TypeError('Cannot convert to object');
  }

  var len = 0
  for (const [key, value] of Object.entries(O)) {
    len++;
  }

  if (typeof(callBackFn) !== 'function') {
    throw new TypeError('callBackFn != function')
  }

  let A = [];
  A.length = len;
  let k = 0;
  let to = 0;
  while (k < len) {
    let pk = (! Number(k)).toString;
    if ( Object.hasOwn(O, pk) ){
      let kValue = O[pk];
      let selected = Boolean(callBackFn.call(this, kValue, Number(k), O));
      if (selected){
        Object.defineProperty(A, Number(to), {
          value: kValue,
        });   
        to += 1;
      }
    }
    return A;
  }

  console.log(A.length);
}


var sparseArray = [];
sparseArray[10] = "Hello";

// console.log(sparseArray.length); // Output: 11
// console.log(sparseArray.myFilter(word => word.length < 6));

// Deleting words
words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];
const deleteWords = words.myFilter((word, index, arr) => {
  arr.pop();
  return word.length < 6;
});

console.log(deleteWords);
// Notice 'elite' is not even obtained as it's been popped off 'words' before filter can even get there
// ["spray" ,"limit"]
