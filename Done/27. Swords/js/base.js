// js goes here

var mySVG = document.getElementById("mySVG");

setTimeout(function(){

    mySVG.addEventListener("click",clickEvent,false);

},3000);

function clickEvent(event){

    mySVG.removeEventListener("click",clickEvent,false);
    document.getElementById("slashLeft").beginElement();
    document.getElementById("slashRight").beginElement();

    setTimeout(function(){

        mySVG.addEventListener("click",clickEvent,false);
    
    },1100);

}