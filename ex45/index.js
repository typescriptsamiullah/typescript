"use strict";
// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function car_info(manufacturer, model, ...kwargs) {
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    // Loop through the keyword arguments and store them in the car object
    for (let i = 0; i < kwargs.length; i += 2) {
        let key = kwargs[i];
        let value = kwargs[i + 1];
        car[key] = value;
    }
    return car;
}
// Call the function with required information and additional name-value pairs
let car1 = car_info("Toyota", "Camry", "color", "silver", "year", 2022);
let car2 = car_info("Ford", "Mustang", "color", "red", "top_speed", "180 mph");
// Print the objects returned to make sure all the information was stored correctly
console.log(car1);
console.log(car2);
