// Changing Page Content in DOM
// Get Element
var el1 = document.getElementsByTagName('h1');

// Enter what text should be displayed.
el1[0].innerHTML =  "Below is couple information about dom ant taking out the page elements";

// Similar methot which changes only the text no HTML
var el2 = document.getElementsByTagName("p");
// Changing the text  or entering when empty box is.
el2[2].innerText = "That is a the text i wanted to add to the empty paragraph tags."
// -------------------------------------------------
// Changing element attributes.
var link = document.getElementById("test");
console.log(link);
//get the attribute by name
link.getAttribute("href");
// get attrigute by class
link.getAttribute("class");
// setAttribute
link.setAttribute("class", 'dog'); // set attribute class as dog.
// Check class Name
link.className; // Display class name which can be changed by adding  = "classname".
// There is many many more properties to discover and change.
// Smth about Style Changing Properties.
var el3 = document.getElementById('text');
el3.setAttribute('style', "color: red");
//------------------------------------------------
//Add elements to DOM:
var newLi = document.createElement("li");
console.log(newLi);
newLi.innerText = "That li was created thanks to JS";
// insert it below last div element on the page.
var el4 = document.getElementById("uli"); // It has to be Id in here 
console.log(el4);
el4.appendChild(newLi);

// Add Other element
var newdiv = document.createElement("div");
console.log(newdiv);
newdiv.innerText = "That li was created thanks to JS";
// insert it below last div element on the page.
var el5 = document.getElementById("added"); // It has to be Id in here 
console.log(el5);
el5.appendChild(newdiv);
newdiv.innerText = "That element was added here.";
// In the list insert before some element.
el4.insertBefore(newLi, el4.getElementsByTagName('li')[1]);
//-------------------------------------------------------
//Remove items from HTML
// Grab element
var remove = document.getElementById("test").remove();






