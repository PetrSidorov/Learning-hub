// The Object.assign() method copies all enumerable own properties from one or
// more source objects to a target object. It returns the target object. (source: MDN)
//
// It is widely used, Object Spread operator actually is internally the same as
// Object.assign() (source). Following 2 lines of code are totally the same.
// https://bigfrontend.dev/problem/implement-object-assign
// let aClone = { ...a };
// let aClone = Object.assign({}, a);
// This is an easy one, could you implement Object.assign() with your own
// implementation ?
//
// note
//
// Don't use Object.assign() in your code It doesn't help improve your skills
//




/**
 * @param {any} target
 * @param {any[]} sources
 * @return {object}
 */
function objectAssign(target, ...sources) {
  if (target === null || target === undefined) {
    throw new Error('wat')
  }

  target = Object(target)

  for (let source of sources) {
    if (source === undefined
      || source === null
      || Number.isNaN(source)
      || typeof source === 'number'
      || typeof source === 'bigint'
      || typeof source === 'boolean') {
      continue;
    }

    if (typeof source === 'string') {
      for (const [i, value] of source.split('').entries()) {
        if (!Reflect.set(target, i, value, target)) throw new TypeError()
      }
      source = Object(source)
    } else {
      source = Object(source)
    }

    for (const key of Object.keys(source)) {
      if (!Reflect.set(target, key, source[key], target)) throw new TypeError()
    }

    const objectSymbols = Object.getOwnPropertySymbols(source);
    if (objectSymbols.length > 0) {
      for (const symbolKey of objectSymbols) {
        if (!Reflect.set(target, symbolKey, source[symbolKey], target)) throw new TypeError()
      }
    }
  }

  return target;
}

const c = Symbol("c");
console.log('test', objectAssign({}, { a: 3 }, { b: 4 }, { c: 0 }, 'def'))
const key = Symbol('key')
const a = {
  [key]: 3,
  b: 4
}

console.log('second test ', objectAssign({}, a))

