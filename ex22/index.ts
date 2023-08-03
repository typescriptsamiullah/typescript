// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

// Array of popular fruits
let fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango", "Strawberry", "Watermelon", "Pineapple"];

// Intentional array index error
// Trying to access an index that doesn't exist
let indexErrorFruit = fruits[8];

// Print the fruit causing the index error
console.log("Fruit causing index error:", indexErrorFruit);

// Array of popular fruits
let fruit = ["Apple", "Banana", "Orange", "Grapes", "Mango", "Strawberry", "Watermelon", "Pineapple"];

// Corrected access within valid index range
let correctedFruit = fruits[7]; // Accessing index 7 (Pineapple)

// Print the corrected fruit
console.log("Corrected fruit:", correctedFruit);
