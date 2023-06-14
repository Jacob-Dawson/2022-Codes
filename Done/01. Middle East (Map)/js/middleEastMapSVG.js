var flagGroup = document.getElementsByClassName("flags");
var outline = document.getElementsByClassName("outline");
var polygonSVG = document.getElementsByClassName("polygonSVG");
var result = document.querySelectorAll("#countryBox > p")[0];
var myAni = document.getElementsByClassName("myAni");
var myAniRev = document.getElementsByClassName("myAniRev");
var previousElem = null;

var x = 300;
var y = 200;

makeStar("starTurkey",164.17,(y/2),25,-36,false,"",5);
makeStar("leftSyriaStar",100,100,33.33,-90,false,"",5);
makeStar("rightSyriaStar",200,100,33.33,-90,false,"",5);
makeStar("jordanStar",50,75,25,-90,false,"",7);
makeStarOfDavid("starOfDavidUp",165,120,40,-90,false,"",3);
makeStarOfDavid("starOfDavidDown",165,120,40,90,false,"",3);


for(let i=0; i<flagGroup.length; i++){

    flagGroup[i].addEventListener("click",clickEvent,false);

}

function clickEvent(event){

    var pallette;
    var text = "";

    switch(this.id){

        case "Oman":
            pallette = ["#FFFFFF","#DB161B","#008000"];
            text = colourText(this.id,pallette);
            break;
        case "Turkey":
            pallette = ["#E30A17","#FFFFFF"];
            text = colourText(this.id,pallette);
            break;
        case "Iran":
            pallette = ["#239F40","#FFFFFF","#DA0000"];
            text = colourText(this.id,pallette);
            break;
        case "Iraq":
            pallette = ["#CE1126","#FFFFFF","#007A3D","#000000"];
            text = colourText(this.id,pallette);
            break;
        case "Saudi Arabia":
            pallette = ["#006C35","#FFFFFF"];
            text = colourText(this.id,pallette);
            break;
        case "Kuwait":
            pallette = ["#000000","#007A3D","#FFFFFF","#CE1126"];
            text = colourText(this.id,pallette);
            break;
        case "Bahrain":
            pallette = ["#FFFFFF","#CE1126"];
            text = colourText(this.id,pallette);
            break;
        case "Qatar":
            pallette = ["#8D1B3D","#FFFFFF"];
            text = colourText(this.id,pallette);
            break;
        case "UAE":
            pallette = ["#FF0000","#00732F","#FFFFFF","#000000"];
            text = colourText(this.id,pallette);
            break;
        case "Syria":
            pallette = ["#007A3D","#FFFFFF","#000000","#CE1126"];
            text = colourText(this.id,pallette);
            break;
        case "Lebanon":
            pallette = ["#ED1C24","#FFFFFF","#00A651"];
            text = colourText(this.id,pallette);
            break;
        case "Cyprus":
            pallette = ["#D57800","#FFFFFF","#4E5B31"];
            text = colourText(this.id,pallette);
            break;
        case "Jordan":
            pallette = ["#CE1126","#000000","#FFFFFF","#007A3D"];
            text = colourText(this.id,pallette);
            break;
        case "Israel":
            pallette = ["#FFFFFF","#0038B8"];
            text = colourText(this.id,pallette);
            break;
        case "Egypt":
            pallette = ["#CE1126","#FFFFFF","#C09300","#000000"];
            text = colourText(this.id,pallette);
            break;
        case "Yemen":
            pallette = ["#CE1126","#FFFFFF","#000000"];
            text = colourText(this.id,pallette);
            break;
        case "Palestine":
            pallette = ["#000000","#FFFFFF","#00732F","#FF0000"];
            text = colourText(this.id,pallette);
            break;
        case "Northern Cyprus":
            pallette = ["#FFFFFF","#E30A17"];
            text = colourText(this.id,pallette);
            break;
        default:
            text = "";

    }

    toggleOpacity(this.id);

    result.innerHTML = ""+text;

}

function colourText(input,colours){

    var inputResult = "";

    for(let i=0; i<input.length; i++){

        inputResult += "<span style='color:"+colours[i%colours.length]+";'>"+input.charAt(i)+"</span>";

    }

    return inputResult;

}

function makeStar(id,pX,pY,r,step,multi,className,sides){

    var result = "";
    var angle = 360/(sides*2);

    for(let i=0; i<(sides*2); i++){

        if(i%2 == 0){

            result += ""+(pX+r*Math.cos((step+(i*angle))*Math.PI/180))+","+(pY+r*Math.sin((step+(i*angle))*Math.PI/180))+" ";

        } else if(i%2 == 1){

            result += ""+(pX+0.4*r*Math.cos((step+(i*angle))*Math.PI/180))+","+(pY+0.4*r*Math.sin((step+(i*angle))*Math.PI/180))+" ";

        }

    }

    result = result.slice(0,-1);

    if(multi == false){

        document.getElementById(""+id).setAttribute("points",""+result);

    } else if(multi == true){

        document.getElementsByClassName(""+className)[id].setAttribute("points",""+result);
    
    }

}

function makeStarOfDavid(id,pX,pY,r,step,multi,className,sides){

    var result = "";
    var angle = 360/(sides);

    for(let i=0; i<(sides); i++){

        result += ""+(pX+r*Math.cos((step+(i*angle))*Math.PI/180))+","+(pY+r*Math.sin((step+(i*angle))*Math.PI/180))+" ";

    }

    result = result.slice(0,-1);

    if(multi == false){

        document.getElementById(""+id).setAttribute("points",""+result);

    } else if(multi == true){

        document.getElementsByClassName(""+className)[id].setAttribute("points",""+result);
    
    }

}

function toggleOpacity(val){

    if(previousElem == val){

        return;

    } else if (previousElem == null){

        previousElem = val;

        for(let i=0; i<flagGroup.length; i++){

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

        for(let i=0; i<flagGroup.length; i++){

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