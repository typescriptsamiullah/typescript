"use strict";
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
function make_great(magicians) {
    let modifiedMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        modifiedMagicians.push("the Great " + magicians[i]);
    }
    return modifiedMagicians;
}
// Array of magician's names
let magiciansArray = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
// Making a copy of the array and storing it in a new variable
let modifiedArray = make_great(magiciansArray.slice());
// Calling the function to show the original magicians' names
console.log("Original magicians' names:");
show_magicians(magiciansArray);
// Calling the function to show the modified magicians' names
console.log("\nModified magicians' names:");
show_magicians(modifiedArray);
