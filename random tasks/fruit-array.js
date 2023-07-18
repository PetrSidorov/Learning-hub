var log = console.log;
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

//   array.filter(function(currentValue, index, arr), thisValue)

const firstTry = function() {
    const mapWithAmount = new Map();
    for ( let i = 0; i < fruits.length; i++ ) {
        let counter = 1;
        for ( let j = 0; j < fruits.length; j++ ) {
            if (fruits[i] === fruits[j]){
                mapWithAmount.set( fruits[i], counter++ );
            }
        }   
    }

    let sortedMap = new Map([...mapWithAmount.entries()].sort((a, b) => b[1] - a[1]));
    let result = Array.from(sortedMap.keys());
    console.log(result);
}

const secondTry = function() {
    // not working yet
    // fruits.sort();
    // let occurencies = 0;
    // const filteredArray = fruits.filter((element, index) => {
    //     // occurencies
    //     if (fruits.indexOf(element) != index) {
    //         occurencies++;
    //     }
    //     return fruits.indexOf(element) === index;
    //   });
    // const filteredArray = fruits.filter((element, index) => fruits.indexOf(element) === index);
}

const thirdTry = function() {
    let fruitsWithAmount = [];
    const fruitSet = new Set(fruits);
    for (let fruit of fruitSet) {
        let occurencies = 0;
        let index = fruits.indexOf(fruit);
        while ( index != -1 ) {
            occurencies++;
            index = fruits.indexOf(fruit, index + 1);
        };
        fruitsWithAmount.push( [ fruit, occurencies ] );
    }
    const result= fruitsWithAmount.sort((a, b) => b[1] - a[1]).map( element => element[0]  );;

    console.log(result);
    
}

thirdTry();