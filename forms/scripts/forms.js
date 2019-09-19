// There is easy method to get an elements from form
// how we can set the form we want:
document.forms.myForm; //- it is enough to get know that we eant elements from form.
// Now we can create the variable of form to have better acces
var myInfo = document.forms.myForm;
// Now we cn take any form element we want.
myInfo.name; // - it shows us a inforamation from input name.
// Now any of the elements we can get by name of the element
myInfo.colour; // etc.
// now we can use onfocus event eg. it works when some part is marked
myInfo.name.onfocus = function() {
    myInfo.name.style.border = "4px dashed orange";
}
// onblur when element is not focused its happen.
myInfo.name.onblur = function() {
    myInfo.name.style.border = "none";
}
//------------------------------------------------------
//How to validate forms. onSubmit - first variable the simplest validation that can be.
var messeageonsub = document.getElementById("messonsub");

myInfo.onsubmit = function() {
    if(myInfo.name.value == "") {
        messeageonsub.innerHTML = "Please Enter the name";
        return false;
    } else {
        messeageonsub.innerHTML = "";
        return true;gi
    }
}

