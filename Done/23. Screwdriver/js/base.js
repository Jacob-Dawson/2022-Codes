// js goes here

alert("Click on the items to start the animations");

var rightSide = document.getElementById("rightSide");
var leftSide = document.getElementById("leftSide");

rightSide.addEventListener("click",rightClickEvent,false);
leftSide.addEventListener("click",leftClickEvent,false);

function rightClickEvent(event){

    var screwTop = document.getElementById("screwTop");

    screwTop.style.animation = null; // reset animation
    screwTop.offsetWidth; // trigger reflow
    screwTop.style.animation = "3s rightAni infinite linear"; // start animation

}

function leftClickEvent(event){

    var screwdriver = document.getElementById("screwdriver");

    screwdriver.style.animation = null; // reset animation
    screwdriver.offsetWidth; // trigger reflow
    screwdriver.style.animation = "3s leftAni infinite linear"; // start animation

}


// Screw Top: https://cdn3.vectorstock.com/i/1000x1000/21/27/steel-screw-for-crosshead-screwdriver-top-view-vector-29762127.jpg
// Screwdriver: https://emojipedia.org/screwdriver/