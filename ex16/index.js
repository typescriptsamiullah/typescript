"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
// Original guest list
let guestList = ["Saad", "Haseeb", "Imran"];
// Print messages inviting each person to dinner
console.log("Original Guest List:\n");
guestList.forEach(guest => {
    console.log("Dear " + guest + ",\nYou are invited to join us for a dinner filled with fascinating conversations and insights. Your presence would make this evening truly special.\n\n\n");
});
// Name of the guest who can't make it
let guestCantMakeIt = "imran";
// New guest to invite
let newGuest = "ali sher";
// Replace the name of the guest who can't make it with the new guest
let indexOfGuestCantMakeIt = guestList.indexOf(guestCantMakeIt);
if (indexOfGuestCantMakeIt !== -1) {
    guestList.splice(indexOfGuestCantMakeIt, 1, newGuest);
}
console.log("\nUnfortunately, " + guestCantMakeIt + " can't make it to the dinner.");
// Add more guests
let newGuests = ["Awais", "hassan"];
guestList.unshift(...newGuests); // Add at the beginning
guestList.splice(Math.ceil(guestList.length / 2), 0, "Ashraf"); // Add in the middle
guestList.push("Saim"); // Add at the end
console.log("\nGreat news! We found a bigger dinner table.");
// Print the new set of invitation messages
console.log("\nUpdated Guest List:\n");
guestList.forEach(guest => {
    console.log("Dear " + guest + ",\nYou are invited to join us for a dinner filled with fascinating conversations and insights. Your presence would make this evening truly special.\n\n\n");
});
