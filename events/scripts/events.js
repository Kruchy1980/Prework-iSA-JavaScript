//Couple examples of events:
// Firstly we always need to tke element we want tu give an event.
var el1 = document.getElementById('one');
var el2 = document.getElementById('two');
var el3 = document.getElementById('three');
var el4 = document.getElementById('four');
var el5 = document.getElementById('five');
var el6 = document.getElementById('six');
var el7 = document.getElementById('seven');

var el9 = document.getElementById('nine');
// We prepared all the divs we would like to change with event.
//1. onclick
el1.onclick = function() {
    el1.innerHTML = "I am changed by event coded in .js file.";
    console.log("We have just clicked one first div!");
};
//2. onmouseover
el2.onmouseover = function() {
    el2.innerText = " You hovered your coursor over me dude :)";
    el2.style.backgroundColor = 'red';
};
//3. ondblclick
el3.ondblclick = function() {
    let el8 = document.getElementById('eight');
    el8.style.fontSize = '64px';
    el8.innerText = "Hey Dude What have I done to you??!!!";
    el3.style.color = 'crimson';
    el3.innerText = "Ups you have done the mistake man!";
};
//4. onmouseout
el4.onmouseout = function() {
    el4.innerText = "Hey Dude don't you like me anymore??"
    el4.style.fontSize = '200%';
};
// How to change the style directly from css file
el5.onclick = function() {
    //firstly we need to prepare Css style and than we have to call it as a condition.
    if(el5.className == "color") {
        //take out the style
        el5.className = "";
    } else {
        //give the style
        el5.className = "color";
    }
}
//5. window onload event.
// The best way is to cretae separate function which will execute the js scripts only when the window will be fully loaded.
function startEvents() {
    // here we can put any function we want to be executed only when all of the page elements will downloaded.
}
// Now we will use the onload event for window
window.onload = function() {
    //Here we can put function which we want to be executed - her calling name:
    this.startEvents(); // with or without this.keyword
}

// Smth about Timers
// Everytime when we want to change smth manually by button or automaticly by timers we should prepare smth in css as well.
// Css in in file css
// Now start to set up timers
// First variable
var myDiv = document.getElementById("timers");
function showPar() {
    myDiv.className = "show";
}
// Now time to wet up timers
setTimeout(showPar, 4000); // first parameter is what function want to caling and the second parameter is a time in miliseconds.
// !!! Please do remember that setInterval function is calling functions all the time and than the time set in brackets is the time when it chould have change itself.
// How to stop interval
// Firstly we need to set the inteerval as variable
// var myInterval = setInterval(showPar, 3000);
// Than if we want to stop it we need to stop the vriable by this command
// clearInterval(myInterval); and that is it
// We can add it to any function or button or anything we want.
