"use strict";
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
// Array of magician's names
let magiciansArray = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Calling the function to show magicians' names
show_magicians(magiciansArray);
