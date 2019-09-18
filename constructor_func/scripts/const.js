// Create object first:
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

// How to create similar objects by using constructor function

var myArray3