const sumNum = (a, b) => {
    return a + b
}

function getFullName(a, b) {
    return `${this.firstName} ${this.lastName} ${a + b}`;
}

const boundGetFullName = getFullName.bind({ firstName: "John", lastName: "Doe" });

function test () {
    this.a = 4
    this.b = 5

    const test2 = () => {
        return 
    }

    
}

const curry = (fn) => {
    const argAmount = fn.length;
    const args = []
    if (!fn) {
        throw new Error('unaceptable!')
    }
    
    const collectArgs = function(arg) {
        if (argAmount > 0) {
            args.push(arg)
        } 
        if (argAmount === args.length) {
            return fn.call(this, ...args)
        } else {
            return collectArgs
        }   
    }
    return collectArgs
}

const currSum = curry(sumNum)
console.log(currSum(2)(4))

console.log(curry(boundGetFullName)(1)(2));
console.log(curry(thisFunction))
const curryRecursive = () => {
    
}
// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9] or [9,4]

// Example 3:
// Input: nums1 = [1,2], nums2 = [1,1]
// Output: [1]

// ______
const nums = [-2,1,-3,4,-1,2,1,-5,4]
function maxSubArray(nums) {
    let curSum = nums[0]
 }

const promiseAll = (promises) => {
    if (!promises.length) {
        return []
    }
    const lengthOfPromises = promises.length


    return new Promise()
}

class LazyMan {
    this.eat = () => {

    }

    this.sleep = () => {

    }

    this.sleepFirst = () => {
        
    }
}


This is a commonly asked question in frontend interviews, which helps in cracking similar questions related to async problems.

Implement a function called parallelLimit that takes two parameters:

tasks: An array of functions that return promises
limit: Maximum number of tasks to run in parallel
The parallelLimit function should execute the tasks in parallel, but limit the number of concurrent tasks to a given limit.
The function should return a promise that resolves to an array of results, where each result is the resolved value of the tas

function parallelLimit(links, limit, callback) {
    const activeTasks = []
    const result = []
    
    
    
    /*
    const executeParallel = async () => {
        for (let i = 0; i < links.length; i++) {
            if (activeTasks.length < limit) {
                console.log(`push(${i})`);
                activeTasks.push({ [i]: () => fetch(links[i]) })
            } 
            else if (activeTasks.length === limit) {
                const [index, currTask] = Object.entries(activeTasks.shift())[0]
                console.log(`pop(${index})`);
                console.log(index, currTask)
                result[index] = await currTask();
                i--;
            }
        }
        return result
    }
     
    executeParallel().then(callback)
    */
}

const links = ['link1', 'link2', 'link3', 'link1', 'link4', 'link3', 'link2'];
const limit = 3; // > 0

function fetch(link) {
    return new Promise((resolve) => {
        console.log(`Fetching ${link}...`);
        const result = Number(link.replace("link", ""));
        setTimeout(() => resolve(result), result * 1000);
    });
}

function test() { 
    parallelLimit(links, limit, function (results) {
        console.log(results);  // [1, 2, 3, 1, 4, 3, 2]
    });
}

test();