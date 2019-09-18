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
// Constructor in JS is named starts from capital letter.
var City = function(name, capacity) {
    this.name = name;
    this.capacity = capacity;
    this.burns = function(cname, ccapacity) {
        console.log(cname + ccapacity);
    };    
    this.cityInfo = function(){ console.log("The city name is " + this.name + ", and its population is " + this.capacity);
    };
}
// Now we can create objects easly.
var myCity0 = new City("Warszawa", 1000000);
var myCity1 = new City("Wilno", 1000000);
var myCity2 = new City("Ottawa", 1000000);
var myCity3 = new City("Moskwa", 1000000);

myCity0.burns("Łeba", 5000);
myCity2.cityInfo();

