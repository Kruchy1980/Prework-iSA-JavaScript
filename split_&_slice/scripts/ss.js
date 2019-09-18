// Slice Method - The slice() method returns the selected elements in an array, as a new array object.
// Firstly we needd to prepare some string to edit it later

var myString = "hello, world";
// To slice the string we need to declare new one first
var myString2 = myString.slice(2,9); // That will divide the string starting from index[2] letter, and ends on index[8] letter
console.log(myString2); // will print us "llo, wo";

var myString3 = myString.slice(2); // Cuts the string from  i[2] letter

console.log(myString3); // Prints "llo, world"

// Split Method - The split() method is used to split a string into an array of substrings, and returns the new array.
var tags = "meat, ham, salami, pork, beef, chicken"
console.log(tags);
// If we want to split the string, a d create array from it we can do such a thing.
var tagsArray = tags.split(","); //Pits all the string in elements divided by coma.
console.log(tagsArray);
var tagsArray1 = tags.split("a"); //Pits all the string in elements divided by coma.
console.log(tagsArray1);




