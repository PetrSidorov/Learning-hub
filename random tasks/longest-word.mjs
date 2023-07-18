/**
 * @param {string} sentence 
 * @returns {string}
 */
function longestWord(sentence) {
    const words = sentence.split(/\s+/);
    let longestOfWords = words[0];

    for (let word of words) {
        if (word.length > longestOfWords.length) {
            longestOfWords = word;
        }
    }

    return longestOfWords;
}

// console.log(longestWord(""));
console.log(longestWord("My JavaScript is exceptional"));
console.log(longestWord("My\tJavaScript       is  awesome \r\nexceptional"));