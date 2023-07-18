// TODO: write the validation functions
function isValidName(name) {
    // return typeof name == 'string' && name.replace(/\s/g, "").length > 3;
    return typeof name == 'string' && name.trim().length >= 3;
}

// an `hoursAttended(..)` validator that takes two parameters, `attended` and `length`.
// The validator returns `true` if all the following match the two parameters (`false` otherwise):
	// - either parameter may only be a string or number
	// - both parameters should be treated as numbers
	// - both numbers must be 0 or higher
	// - both numbers must be whole numbers
	// - `attended` must be less than or equal to `length`

function hoursAttended(attended, length){
    attended = Number(attended);
    length = Number(length);
    let numbers = attended !== NaN && length !== NaN;
    let higherThanZero = attended > 0 && length > 0;
    let wholeNumbers = Number.isInteger(attended) && Number.isInteger(length);
    let attendedLessThanLength = attended < length;
    return numbers && higherThanZero && wholeNumbers && attendedLessThanLength;
}


// tests:
// console.log(isValidName("Frank") === true);
console.log(hoursAttended(6,10) === true);
console.log(hoursAttended(6,"10") === true);
console.log(hoursAttended("6",10) === true);
console.log(hoursAttended("6","10") === true);

// console.log(isValidName(false) === false);
// console.log(isValidName(null) === false);
// console.log(isValidName(undefined) === false);
// console.log(isValidName("") === false);
// console.log(isValidName("  \t\n") === false);
// console.log(isValidName("X") === false);
console.log(hoursAttended("",6) === false);
console.log(hoursAttended(6,"") === false);
console.log(hoursAttended("","") === false);
console.log(hoursAttended("foo",6) === false);
console.log(hoursAttended(6,"foo") === false);
console.log(hoursAttended("foo","bar") === false);
console.log(hoursAttended(null,null) === false);
console.log(hoursAttended(null,undefined) === false);
console.log(hoursAttended(undefined,null) === false);
console.log(hoursAttended(undefined,undefined) === false);
console.log(hoursAttended(false,false) === false);
console.log(hoursAttended(false,true) === false);
console.log(hoursAttended(true,false) === false);
console.log(hoursAttended(true,true) === false);
console.log(hoursAttended(10,6) === false);
console.log(hoursAttended(10,"6") === false);
console.log(hoursAttended("10",6) === false);
console.log(hoursAttended("10","6") === false);
console.log(hoursAttended(6,10.1) === false);
console.log(hoursAttended(6.1,10) === false);
console.log(hoursAttended(6,"10.1") === false);
console.log(hoursAttended("6.1",10) === false);
console.log(hoursAttended("6.1","10.1") === false);
