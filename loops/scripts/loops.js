// MAke a variable:
var age = 5;

while (age < 10) { // our condirion so while age will be below 10
    console.log("Your age is less than 10!");
    age++; // We are using incremenal Math operator
    
}
// This will show to document when the count come to 10.
document.write("You are now over 10");

// For Loops:
// As we can see first parameter of for loop is variable(no need to write it separately but the name can not be complex - in general the "i is ussed for that.")
// Second parameter is a condition until it wont be fullfilled, than:
// Third parameter is what to do with variable myHight
// What to do is in curly brackets - we want it to appeare in console the message
for (var i = 175; i <= 200; i++) {
    console.log("Your Height is " + i + " cm");
}
// And this will happen when the condition will be met
alert("You are finally 2m hight!");

// Do while loop
// Remember to set what is going to be done
var speed = 120;
do {
    console.log("That is speed"); 
    speed--;  
}
// Now we create the condition
while (speed  > 100);