
// How to create object in JS
var myArray = new Array();
myArray[0] = 6; //etc;
//Or
var myCity = new Object();
myCity.name = "Gniew";
myCity.capacity = 6000;

console.log(myCity.capacity);
myCity.burns = function() {console.log("Not a chance for burning");};

myCity.burns();
// And now we willcreate dictionary
var myArray = {
    name: "Gniew",
    capacity: 6000,
    burns: function() {console.log("Not a chance for burning");
    }
};

myCity.burns();
console.log(myCity.capacity);

// How the keyword "this." works.
// Eg. if we use the command
console.log(this);
// In console directly it will show us every possible object which is implemented to the page.
// However using the keyword in here eg.

var myArray2 = {
    name: "Poznań",
    capacity: 600000,
    burns: function() {console.log("Will burn immediately");
    },
    test: function(){
        console.log(this);
        
    }
};
myCity.burns();
console.log(myCity.capacity);

myArray2.test();
// However if we create another object
var myArray3 = {
    name: "Lipnica",
    capacity: 10000,
    burns: function() {console.log("We will never give up!");
    },
    test: function(){
        console.log(this);
        
    }
};
myArray3.test();
// We can see that this takes the last element it is written to
// This can be user instead of calling up test function when:
var myArray3 = {
    name: "Lipnica",
    capacity: 10000,
    burns: function() {console.log("We will never give up!");
    },
    cityInfo: function(){
        console.log("The city name is " + this.name + ", and its population is " + this.capacity);
        
    }
};
myArray3.cityInfo();

