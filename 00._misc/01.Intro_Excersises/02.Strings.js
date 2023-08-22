// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const numberResult = parseFloat(numberOne) + parseFloat(numberTwo);
console.log(numberResult)

// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const numberResult2 = (+anotherNumberOne + +anotherNumberTwo).toFixed(1);
console.log(numberResult2)

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

const average = ((one + two + three)/3).toFixed(5);

console.log(average)

// Show in the console the avg. with 5 decimals


// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";

// Get me the character "c"

const c = letters.charAt(2);
//const c = letters[2];

console.log(c);

// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

// const capitalize = fact.replace('javascript', 'JavaScript');

const capitalize = fact.replace(/j/, 'J');

console.log(capitalize);

// --------------------------------------