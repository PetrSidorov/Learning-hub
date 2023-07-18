function intersection(...arrays) {
    const result = [];
    
    for (const el of arrays[0]) {
        for (const array of arrays.slice(1)) {
            if (!array.includes(el)) {
                break;
            }
            result.push(el);
        }
    }
    
    return result;
    // if every array has this value
    // then push
}

console.log(
    intersection(["a", "b", "c"], ["b", "c", "d"], ["e", "c", "b"])
); // ["b", "c"] || ["c", "b"]

("hello" + "hello") + (2 + 3)

{
    'hello': 2
}

void function IIFE() {

}()


onClick={() => { someFunction}}