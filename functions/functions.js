// First function which calculates averages - user created.
function getAverage (a,b) { // We have created function with two parameters
    let average = (a + b) / 2;
    console.log(average);
}

// Now we want to call in the function
getAverage(7, 17); // We can not forget to use brqckets for calling the function
// If we want the function work well we need to set the parameters we declared to be inside the brackets.

// Returning value is to store the score in computer memory andlater call the result of function in wven other place.
function getSum (a,b) { // We have created function with two parameters
    let average = (a + b);
    console.log(average);
    return average;
}

// Now we want to call in the function
var myResult = getSum(8,10); // Now we called stored score of math action of function getSum
console.log("The sum of numbers equals to " + mySum);
