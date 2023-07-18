function isPalindrome(word){
    const length = word.length;
    let isPalindrome = true;

    for (let i = 0; i < length; i++){
        if (word[i] !== word[length - 1 - i]){
            isPalindrome = false;
            break;
        }
    }

    // let i = 0;
    // let j = word.length - 1;

    // while (i <= j) {
    //     if (word[i] != word[j]) {
    //         isPalindrome = false;
    //         break;
    //     };
    //     i++;
    //     j--;
    // }

    return isPalindrome;
}

// console.log(isPalindrome('тест'))
console.log(isPalindrome("caac"))
console.log(isPalindrome("racecar"));
// console.log(isPalindrome("ab".repeat(1_000_000)));