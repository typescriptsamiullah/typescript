// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

let name1 = 'ali';
let name2 = 'ALI';
let num1 = 15;
let num2 = 8;
let num3 = 20;
let fruits = ['Apple', 'Banana', 'Orange'];

// Tests for equality and inequality with strings
console.log("Is name1 equal to name2? I predict False.");
console.log(name1 == name2);

console.log("Is name1 not equal to name2? I predict True.");
console.log(name1 != name2);

// Tests using the lower case function
console.log("Is name1 in lowercase equal to 'ali'? I predict True.");
console.log(name1.toLowerCase() == 'ali');

console.log("Is name2 in lowercase equal to 'ali'? I predict False.");
console.log(name2.toLowerCase() == 'ali');

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2);

console.log("Is num1 less than num2? I predict False.");
console.log(num1 < num2);

console.log("Is num1 greater than or equal to num2? I predict True.");
console.log(num1 >= num2);

console.log("Is num1 less than or equal to num3? I predict True.");
console.log(num1 <= num3);

// Tests using "and" and "or" operators
console.log("Is num1 greater than num2 and num3? I predict False.");
console.log(num1 > num2 && num1 > num3);

console.log("Is num1 greater than num2 or num3? I predict True.");
console.log(num1 > num2 || num1 > num3);

// Test whether an item is in an array
console.log("Is 'Apple' in fruits? I predict True.");
console.log(fruits.includes('Apple'));

// Test whether an item is not in an array
console.log("Is 'Grapes' not in fruits? I predict True.");
console.log(!fruits.includes('Grapes'));
