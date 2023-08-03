// Names: Store the names of a few of your friends in a array called names.
//  Print each person’s name by accessing each element in the list, one at a time.

  // Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.  

  let names: string[]=['Muhummad', 'Yawar', 'Danish', 'Zain'];

  console.log(names[0]);
  console.log(names[1]);
  console.log(names[2]);
  console.log(names[3]);
 
  // loop through each name in the array
 
  for(let name of names){
 // print a personalize message for each friend
 
 console.log(`hello${name}, I hope you are having a fantastic day!` )
 
  }