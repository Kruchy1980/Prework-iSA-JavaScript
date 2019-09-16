// If Statement
var isBetter = true;

if (isBetter) { // if we won't use any of other comparators it means if tne variable is true
// So if it is true than this should be done.
    document.write("1. Yes the BMW is better than bike:)");
}

// Of course it doesn't concern only strings but numbers abd actions on them as well.
// Second variable
var myNum = 6;

if (myNum >= 5) {
    document.write("2. Yes my number is more than 5:)");
}

// We can also use opposite condition for this statement adding onlu else in the statement 
// Example
// If and Else Statement
if (myNum <= 10) { // if my number is less than 10 than
    document.write("3. Yes my number is less than 10:)");
}
else{ // else print this.
    document.write("3a. No my number is not less than 10:)");
}


//If, else if and else Statement
var myAge = 30;

if (myAge > 30) {
    document.write("4. You are old Guy:( !");
} else if (myAge = 30) {
    document.write("4a. You are almost Old Man:| !");
} else if (myAge < 30) {
    document.write("4b. You have some time to get old:)");
} else {
    document.write("4c. You are not qualified to compare who is Old Guy !");
}
