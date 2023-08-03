"use strict";
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
// Original guest list
let guestList = ["ali", "uzair", "saad", "abdullah", "sami", "kamran"];
// Print messages inviting each person to dinner
console.log("Original Guest List:\n");
guestList.forEach(guest => {
    console.log("Dear " + guest + ",\nYou are invited to join us for a dinner filled with fascinating conversations and insights. Your presence would make this evening truly special.\n\n\n");
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
// Remove the last two names from the list to have an empty list
guestList.pop();
guestList.pop();
// Print the empty list to confirm it's empty
console.log("\nUpdated Guest List:\n");
console.log(guestList);
