// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
//  If you don’t have anything specific to write because your programs are too simple at this point, 
//  just add your name and the current date at the top of each program file.
//   Then write one sentence describing what the program does.
// this assigment is comments.
/*let personname :string ="samiullahkhan";
// show in lowercase:
let lowercaseName:string =personname.toLowerCase();
console.log(lowercaseName)
// show in uppwecase:

let uppercaseName:string =personname.toUpperCase();
console.log(uppercaseName);
// show in title case:
let words: string[] = personname.split(" ");

let titlecaseName: string = ""*/

for(let i = 0 ; i < words.length; i++) {

    titlecaseName +=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLocaleLowerCase()+" "
};
console.log(titlecaseName)