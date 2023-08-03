"use strict";
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// Array of places to visit
let placesToVisit = ["Tokyo", "Paris", "New York", "turkey", "australia"];
// Print the array in its original order
console.log("Original Order:\n", placesToVisit);
// Print the array in alphabetical order without modifying the original list
let sortedAlphabetical = [...placesToVisit].sort();
console.log("\nAlphabetical Order:\n", sortedAlphabetical);
// Show that the original array is still in its original order
console.log("\nOriginal Order (Still):", placesToVisit);
// Print the array in reverse alphabetical order without modifying the original list
let sortedReverseAlphabetical = [...placesToVisit].sort((a, b) => b.localeCompare(a));
console.log("\nReverse Alphabetical Order:\n", sortedReverseAlphabetical);
// Show that the original array is still in its original order
console.log("\nOriginal Order (Still):", placesToVisit);
// Reverse the order of the original list
placesToVisit.reverse();
console.log("\nReversed Order:\n", placesToVisit);
// Reverse the order of the original list again
placesToVisit.reverse();
console.log("\nBack to Original Order:\n", placesToVisit);
// Sort the array to store it in alphabetical order
placesToVisit.sort();
console.log("\nSorted in Alphabetical Order:\n", placesToVisit);
// Sort the array to store it in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in Reverse Alphabetical Order:\n", placesToVisit);
