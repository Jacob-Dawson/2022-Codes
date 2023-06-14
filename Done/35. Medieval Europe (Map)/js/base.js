// js goes here

// Source: https://vividmaps.com/map-of-europe-in-1000-ad/

var flagGroup = document.getElementsByClassName("flags");
var outline = document.getElementsByClassName("outline");
var polygonSVG = document.getElementsByClassName("polygonSVG");
var result = document.querySelectorAll("#countryBox > p")[0];
var myAni = document.getElementsByClassName("myAni");
var myAniRev = document.getElementsByClassName("myAniRev");
var baseRect = document.getElementById("baseRect");
var previousElem = null;

for(let i=0; i<flagGroup.length; i++){

    flagGroup[i].addEventListener("click",clickEvent,false);

}

baseRect.addEventListener("click",resetAni,false);

function clickEvent(event){

    var pallette;
    var text = "";
    var countryCode = "";

    switch(this.id){

        case "Byzantine Empire":
            pallette = ["#BA0E09","#FFBF00"];
            text = colourText(this.id,pallette);
            break;
        case "Kievan Rus":
            pallette = ["black","yellow"];
            text = colourText(this.id,pallette);
            break;
        case "Kingdom of France":
            pallette = ["#10069F","#FEDD00"];
            text = colourText(this.id,pallette);
            break;
        case "Duchy of Brittany":
            pallette = ["#000000","#FFFFFF"];
            text = colourText(this.id,pallette);
            break;
        case "Duchy of Normandy":
            pallette = ["#D90D16","#FCD41C"];
            text = colourText(this.id,pallette);
            break;
        case "County of Barcelona":
            pallette = ["#C80000","#FFDC00"];
            text = colourText(this.id,pallette);
            break;
        case "County of Ribagorza":
            pallette = ["#FCDD09","#DA121A"];
            text = colourText(this.id,pallette);
            break;
        case "Kingdom of Navarre":
            pallette = ["#eac102","#da121a","green"];
            text = colourText(this.id,pallette);
            break;
        case "Kingdom of Castile":
            pallette = ["#FCDD09","#DA121A","#0F47AF"];
            text = colourText(this.id,pallette);
            break;
        case "Kingdom of León":
            pallette = ["#FFFFFF","#742C64","#FCDD09"];
            text = colourText(this.id,pallette);
            break;
        case "First Bulgarian Empire":
            pallette = ["#000000","red"];
            text = colourText(this.id,pallette);
            break;
        case "Kingdom of Burgundy":
            pallette = ["#DA291C","#FEDD00"];
            text = colourText(this.id,pallette);
            break;
        case "Duchy of Bohemia":
            pallette = ["#FFFFFF","#000000"];
            text = colourText(this.id,pallette);
            break;
        case "Holy Roman Empire":
            pallette = ["red","black","yellow"];
            text = colourText(this.id,pallette);
            break;
        case "Papal States":
            pallette = ["#FFE000","#FF0000","#FFFFFF"];
            text = colourText(this.id,pallette);
            break;
        case "Italian Principalities":
            pallette = ["#008C45","#CD212A","#F4F9FF"];
            text = colourText(this.id,pallette);
            break;
        case "Kingdom of Hungary":
            pallette = ["#CD2A3E","#FFFFFF","#436F4D"];
            text = colourText(this.id,pallette);
            break;
        case "Kingdom of Servia":
            pallette = ["#D40000","#0000FF"];
            text = colourText(this.id,pallette);
            break;
        case "Kingdom of Croatia":
            pallette = ["#ff0000","#FFFFFF"];
            text = colourText(this.id,pallette);
            break;
        case "Kingdom of Poland":
            pallette = ["#FFFFFF","#DC143C"];
            text = colourText(this.id,pallette);
            break;
        case "Prussians":
            pallette = ["#FFFFFF","#000000"];
            text = colourText(this.id,pallette);
            break;
        case "Lithuanians":
            pallette = ["yellow","green","red"];
            text = colourText(this.id,pallette);
            break;
        case "Livonians":
            pallette = ["green","#FFFFFF","blue"];
            text = colourText(this.id,pallette);
            break;
        case "Estonians":
            pallette = ["#000000","#FFFFFF","blue"];
            text = colourText(this.id,pallette);
            break;
        case "Kingdom of Denmark":
            pallette = ["#C8102E","#FFFFFF"];
            text = colourText(this.id,pallette);
            break;
        case "Kingdom of Norway":
            pallette = ["#d69f5f","#c60c31"];
            text = colourText(this.id,pallette);
            break;
        case "Kingdom of Sweden":
            pallette = ["#006AA7","#d69f5f","#FFFFFF"];
            text = colourText(this.id,pallette);
            break;
        case "Irish Kingdoms":
            pallette = ["#009A49","#FFDF00","#FFFFFF","#000000"];
            text = colourText(this.id,pallette);
            break;
        case "Kingdom of England":
            pallette = ["#cc2647","#f7d417"];
            text = colourText(this.id,pallette);
            break;
        case "Welsh Kingdoms":
            pallette = ["red","gold"];
            text = colourText(this.id,pallette);
            break;
        case "Kingdom of Scotland":
            pallette = ["#FFD228","#B4001E"];
            text = colourText(this.id,pallette);
            break;
        case "Kingdom of the Isles":
            pallette = ["purple","white","yellow"];
            text = colourText(this.id,pallette);
            break;
        case "Caliphate of Cordoba":
            pallette = ["#0A642B","white"];
            text = colourText(this.id,pallette);
            break;
        case "Sardinian Kingdoms":
            pallette = ["#D81921","#FFFFFF","#000000"];
            text = colourText(this.id,pallette);
            break;
        case "Corsica":
            pallette = ["#FFFFFF","#000000"];
            text = colourText(this.id,pallette);
            break;
        case "Emirate of Sicily":
            pallette = ["#0A642B"];
            text = colourText(this.id,pallette);
            break;
        default:
            text = "";

    }

    toggleOpacity(this.id);

    result.innerHTML =  countryCode+" "+text;

}

function colourText(input,colours){

    var inputResult = "";
    var counter = 0;

    for(let i=0; i<input.length; i++){

        if(input[i] == " "){

            counter++;

        }

        inputResult += "<span style='color:"+colours[(i-counter)%colours.length]+";'>"+input.charAt(i)+"</span>";

    }

    return inputResult;

}

function toggleOpacity(val){

    var elems = 36;

    if(previousElem == val){

        return;

    } else if (previousElem == null){

        previousElem = val;

        for(let i=0; i<elems; i++){

            if(flagGroup[i].id == val){

                flagGroup[i].setAttribute("opacity","1");

            } else {

                if(flagGroup[i].getAttribute("opacity") == "1"){

                    myAniRev[i].beginElement();
                    flagGroup[i].setAttribute("opacity","0.35");

                }

            }

        }

        
    } else {

        previousElem = val;

        for(let i=0; i<elems; i++){

            if(flagGroup[i].id == val){

                myAni[i].beginElement();
                flagGroup[i].setAttribute("opacity","1");

            } else {

                if(flagGroup[i].getAttribute("opacity") == "1"){

                    myAniRev[i].beginElement();
                    flagGroup[i].setAttribute("opacity","0.35");

                }

            }

        }

    }

}

function resetAni(event){

    var elems = 36;

    if(previousElem != null){

        result.innerHTML = "";
        document.querySelectorAll("#countryBox > p")[1].style.display = "block";

        for(let i=0; i<elems; i++){

            if(flagGroup[i].id != previousElem){

                myAni[i].beginElement();
                flagGroup[i].setAttribute("opacity","1");

            }

        }
        previousElem = null;

    }

}