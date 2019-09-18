// Some other objects - Date 
var myDate = new Date();
console.log(myDate);

// Past Date
var myPastDate = new Date(1971,8,19);
// Future date
var myFutureDate = new Date(2423,0,28);
console.log(myPastDate, myFutureDate, myDate);
// Including time as well
var myFutureDate1 = new Date(2423,0,28, 12, 08, 32);
console.log(myFutureDate1);

// Separate boxes of date we can write as below
// Firstly set tje fixed time to not have any differences just for this module purpose.
var birthday = new Date(1264, 2, 24, 13, 14, 07);
//Year
console.log(birthday.getFullYear());
//Month
console.log(birthday.getMonth());
//Day
console.log(birthday.getDay());
//hour
console.log(birthday.getHours());
//minute
console.log(birthday.getMinutes());
//Second
console.log(birthday.getSeconds());
// The time only
console.log(birthday.getTime()); // it gives the number of miliseconds of time since january of 1970. It can be used to comparing dates.
