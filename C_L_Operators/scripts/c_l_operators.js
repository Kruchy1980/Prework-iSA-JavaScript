// Firstly make an global variable  which you want to compare.
var myHeight = doocument.getElementById('bheight').value();
console.log(myHeight);

var check = document.getElementById('check');

check.onclick = function () {
    console.log(myHeight);
}
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

// Create If Statement
