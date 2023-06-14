// js goes here

var placeholder = document.getElementById("placeholder");
placeholder.addEventListener("click",clickEvent,false);

function clickEvent(event){

    var bladeRight = document.getElementById("bladeRight");
    var bladeLeft = document.getElementById("bladeLeft");

    bladeRight.style.animation = "none";
    bladeRight.offsetHeight;
    bladeRight.style.animation = null;

    bladeLeft.style.animation = "none";
    bladeLeft.offsetHeight;
    bladeLeft.style.animation = null;

}