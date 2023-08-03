// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

// Original guest list
let guestList = ["ali", "saad", "imran", "haseeb", "yawar", "umer"];

// Print messages inviting each person to dinner
console.log("Original Guest List:\n");
guestList.forEach(guest => {
  console.log("Dear " + guest + ",\nYou are invited to join us for a dinner filled with fascinating conversations and insights. Your presence would make this evening truly special.\n\n \n");
});

// Inform that only two people can be invited for dinner
console.log("\nUnfortunately, the new dinner table won't arrive in time, and we can invite only two people for dinner.");

// Remove guests from the list one at a time until only two names remain
while (guestList.length > 2) {
  let removedGuest = guestList.pop();
  console.log("\nDear " + removedGuest + ",\nI'm sorry, but we can't invite you to dinner this time. We hope to meet you on another occasion.\n");
}

// Print messages to the two people still on the list, letting them know they're still invited
console.log("\nDear " + guestList[0] + ",\nYou are still invited to join us for dinner. Looking forward to seeing you!\n");
console.log("\nDear " + guestList[1] + ",\nYou are still invited to join us for dinner. Looking forward to seeing you!\n");

// Number of people invited to dinner
let numberOfGuestsInvited = guestList.length;

// Print the number of people invited to dinner
console.log("\nNumber of people invited to dinner: " + numberOfGuestsInvited);
