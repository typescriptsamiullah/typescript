"use strict";
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
// Array of magician's names
let magiciansArray = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Calling the function to add "the Great" to each magician's name
make_great(magiciansArray);
// Calling the function to show magicians' names after modification
show_magicians(magiciansArray);
