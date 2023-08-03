// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.

let x = 10;
let y = 5;
let nam = 'ali';
let age = 25;
let isSunny = true;
let fruits = ['Apple', 'Banana', 'Orange'];
let emptyArray: never[] = [];
let person = {
  name: 'waqas',
  age: 30
};

// Conditional tests
console.log("Is x equal to y? I predict False.");
console.log(x == y);

console.log("Is x not equal to y? I predict True.");
console.log(x != y);

console.log("Is age greater than 18? I predict True.");
console.log(age > 18);

console.log("Is name not equal to 'sher'? I predict True.");
console.log(nam!== 'sher');

console.log("Is x greater than or equal to 10? I predict True.");
console.log(x >= 10);

console.log("Is isSunny equal to true? I predict True.");
console.log(isSunny === true);

console.log("Is fruits an array? I predict True.");
console.log(Array.isArray(fruits));

console.log("Is emptyArray an array? I predict True.");
console.log(Array.isArray(emptyArray));

console.log("Is 'apple' in fruits? I predict False.");
console.log(fruits.includes('apple'));

console.log("Is 'waqas' in person's name? I predict False.");
console.log('waqas' in person);
