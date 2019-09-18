// Firstly make an global variable  which you want to compare.
// var myHeight = document.getElementById('bheight').value;
var check = document.getElementById('check');

// Examples will be about the 8 highest buildings in the world.
// 1. Burj Khalifa = 828m - short = BK 
// 2. Shanghai Tower = 632m - short = ST
// 3. Makkah Clock Tower = 601m - short = MCT
// 4. Ping An Finance Center = 555m - short = PAFC
// 5. WTC - one = 541.3m - short = WTC
// 6. CTF Finance Center = 527.7m - short = CTFFC
// 7. Taipei 101 = 508m - short =  T101
// 8. Shanghai World Finance Center = 492m - short = SWFC

// Above are only examples of buildings to Compare.

// Create If Statement with asigned button to it.


check.onclick = function () {
    // Just because we want to take value from input tag we can not defin the variable out of function so we need to create it here / below.
    let myHeight = document.getElementById('bheight').value;
    console.log(myHeight);
    if (myHeight > 828) {
        alert("There is no higher building than that you set")
    } else if (myHeight == 828) {
        alert("Burj Khalifa is as same hight as the height you set, and it is the heighest building in the world.");
    } else if (myHeight < 828 && myHeight > 632) {
        alert("That will be the second building in height in the world");
    } else if (myHeight < 828 || myHeight > 632 && myHeight < 828) {
        alert("That will be the second building in height in the world");
    }
//  And we can use as many logical operators as we want to make our site more interactive.
}

