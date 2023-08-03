"use strict";
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase
let personname = "samiullahkhan";
// show in lowercase:
let lowercaseName = personname.toLowerCase();
console.log(lowercaseName);
// show in uppwecase:
let uppercaseName = personname.toUpperCase();
console.log(uppercaseName);
// show in title case:
let words = personname.split(" ");
let titlecaseName = "";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLocaleLowerCase() + " ";
}
;
console.log(titlecaseName);
