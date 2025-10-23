// This is a commonly asked question in frontend interviews, which helps in cracking similar questions related to async problems.

// Implement a function called parallelLimit that takes two parameters:

// tasks: An array of functions that return promises
// limit: Maximum number of tasks to run in parallel
// The parallelLimit function should execute the tasks in parallel, but limit the number of concurrent tasks to a given limit.
// The function should return a promise that resolves to an array of results, where each result is the resolved value of the tas

function parallelLimit(links, limit, callback) {
  const queue = [];
  const result = []
  let runningCount = 0;

  for (let i = 0; i < links.length; i++) {
	result[i] = (async ()=>{
		if (runningCount < limit) {
			runningCount++
			await callback(links[i])
			runningCount--
		
		} else {
			await queueMicrotask(()=>result[i])				
		}
	})()
  }

  return Promise.resolve(result);
}

const links = ['link1', 'link2', 'link3', 'link1', 'link4', 'link3', 'link2'];
const limit = 3; // > 0

function fetch(link) {
  return new Promise(resolve => {
    console.log(`Fetching ${link}...`);
    const result = Number(link.replace('link', ''));
    setTimeout(() => resolve(result), Math.random() * 1000);
  });
}

function test() {
  parallelLimit(links, limit, fetch);
}

console.log('r ', test())

// [empty, empty, 3, empty, 4]
// [empty, empy, 3, 1, 4, 3]
// [1, 2, 3, 1]
