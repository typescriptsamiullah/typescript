"use strict";
// city Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned
function city_country(city, country) {
    return city + ", " + country;
}
// Call the function with at least three city-country pairs
let city1 = city_country("Lahore", "Pakistan");
let city2 = city_country("Tokyo", "Japan");
let city3 = city_country("Sydney", "Australia");
console.log(city1);
console.log(city2);
console.log(city3);
