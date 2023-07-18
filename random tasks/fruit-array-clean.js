const fruits = [
    "orange",
    "grape",
    "apple",
    "orange",
    "apple",
    "banana",
    "banana",
    "grape",
    "orange",
    "banana",
    "banana",
    "grape",
    "grape"
];

// { "orange": 4, "apple": 1 }
const fruitCounts = {};

for (let fruit of fruits) {
    if (!Object.hasOwn(fruitCounts, fruit)) {
        fruitCounts[fruit] = 1;
    } else {
        fruitCounts[fruit]++;
    }
}

console.log(fruitCounts);

// obj -> Object.prototype { toString() { ... }, hasOwnProperty() { ... } }

var obj = {
    score: 0,
    level: undefined,
    payment: null,
    hasOwnProperty: 1,
};

if (Object.hasOwn(obj, 'hasOwnProperty')) {
    console.log('true');
} else {
    console.log('false');
}
