// js goes here

buildWord("SOLOLEARN");

var anInterval;
var j;
var colours = ["#FF0000","#FFA500","#FFFF00","#DFFF00","#00FF00","#00FF7F","#00FFFF","#007FFF","#0000FF","#8F00FF","#FF00FF","#F33A6A"];
var colStart;
var colMid;
var colEnd;
var counter;
var myTextInput = document.getElementById("myTextInput");
myTextInput.addEventListener("input",checkInput,false);
var myTimeout;
var dir;

reload();

anInterval = setInterval(function(){

    var spanGroup = document.querySelectorAll("#textBase > span");

    for(let i=0; i<spanGroup.length; i++){

        if(i < (j%(spanGroup.length+15))){

            spanGroup[i].style.color = ""+colours[colStart];

        } else if (i == (j%(spanGroup.length+15))){

            spanGroup[i].style.color = ""+colours[colMid];

        } else {

            spanGroup[i].style.color = ""+colours[colEnd];

        }

    }

    j++;

    if(counter == 200){
        
        reload();

    } else {

        counter++;

    }

},120);

function buildWord(word){

    document.getElementById("textBase").innerHTML = "";

    for(let i=0; i<word.length; i++){

        var spanElem = document.createElement("span");
        var newText = document.createTextNode(""+word[i]);

        spanElem.appendChild(newText);
        document.getElementById("textBase").appendChild(spanElem);

    }

}

function reload(){

    j = 0;
    counter = 0;
    dir = Math.floor(Math.random()*2);
    colStart = Math.floor(Math.random()*colours.length);

    if(dir == 0){

        colMid = (colStart+1)%(colours.length);
        colEnd = (colStart+2)%(colours.length);

    } else {

        colMid = (colStart-1)%(colours.length);
        colEnd = (colStart-2)%(colours.length);

    }
    


}

function checkInput(event){

    clearTimeout(myTimeout);

    myTimeout = setTimeout(makeTimeout,2000);

}

function makeTimeout(){

    buildWord(""+(myTextInput.value.toUpperCase()));
    reload();

}

/*

red > orange > yellow > chartreuse > green > spring green > cyan > azure > blue > violet > magenta > rose > red

#FF0000 > #FFA500 > #FFFF00 > #DFFF00 > #00FF00 > #00FF7F > #00FFFF > #007FFF > #0000FF > #8F00FF > #FF00FF > #F33A6A > #FF0000

*/