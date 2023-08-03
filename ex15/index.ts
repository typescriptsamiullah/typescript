// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

// Original guest list
let guestList = ["Ali", "Zain", "Fahad"];

// Print messages inviting each person to dinner
console.log("Original Guest List:\n");
guestList.forEach(guest => {
  console.log("Dear " + guest + ",\nYou are invited to join us for a dinner filled with fascinating conversations and insights. Your presence would make this evening truly special.\n\n \n");
});

// Name of the guest who can't make it
let guestCantMakeIt = "Ali";

// New guest to invite
let newGuest = "Zain";

// Replace the name of the guest who can't make it with the new guest
let indexOfGuestCantMakeIt = guestList.indexOf(guestCantMakeIt);
if (indexOfGuestCantMakeIt !== -1) {
  guestList.splice(indexOfGuestCantMakeIt, 1, newGuest);
}

console.log("\nUnfortunately, " + guestCantMakeIt + " can't make it to the dinner.");

// Print the new set of invitation messages
console.log("\nNew Guest List:\n");
guestList.forEach(guest => {
  console.log("Dear " + guest + ",\nYou are invited to join us for a dinner filled with fascinating conversations and insights. Your presence would make this evening truly special.\n\n\n");
});
