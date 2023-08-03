// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function make_sandwich(items: string | any[]) {
    console.log("Sandwich Summary:");
    console.log("Bread with:");
    for (let i = 0; i < items.length; i++) {
      console.log("- " + items[i]);
    }
    console.log("Enjoy your sandwich!\n");
  }
  
  // Call the function three times with different numbers of arguments
  make_sandwich(["Ham", "Cheese", "Lettuce"]);
  make_sandwich(["Turkey", "Swiss Cheese"]);
  make_sandwich(["Chicken", "Tomato", "Mayonnaise", "Pickles"]);
  