// js goes here
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

var nzStarPoints = [[225,30,12],[225+30*Math.cos(-8*Math.PI/180),60+30*Math.sin(-8*Math.PI/180),10],[225+35*Math.cos(172*Math.PI/180),60+35*Math.sin(172*Math.PI/180),12],[225,120,14]];
var ausStarPoints = [[75,112.5,22.5],[225,30,12],[225+30*Math.cos(-8*Math.PI/180),60+30*Math.sin(-8*Math.PI/180),10],[225+35*Math.cos(172*Math.PI/180),60+35*Math.sin(172*Math.PI/180),12],[225,120,14]];
var siStarPoints = [[0.25,0.25],[0.75,0.25],[0.5,0.5],[0.25,0.75],[0.75,0.75]];

makeStar(0,(4/5)*300,(13/24)*150,6.25,-90,true,"ausStarSVG",5);

for(let k=0; k<4; k++){

    makeStar(k,nzStarPoints[k][0],nzStarPoints[k][1],nzStarPoints[k][2],-90,true,"nzLargeStarSVG",5);

}

for(let k=0; k<4; k++){

    makeStar(k,nzStarPoints[k][0],nzStarPoints[k][1],nzStarPoints[k][2]-2,-90,true,"nzSmallStarSVG",5);

}

for(let k=0; k<5; k++){

    makeStar(k,ausStarPoints[k][0],ausStarPoints[k][1],ausStarPoints[k][2],-90,true,"ausSevenStarSVG",7);

}

for(let k=0; k<5; k++){

    makeStar(k,siStarPoints[k][0]*105,siStarPoints[k][1]*90,12.5,-90,true,"siStarPoints",5);

}

function clickEvent(event){

    var pallette;
    var text = "";
    var countryCode = "";

    switch(this.id){

        case "Australia":
            countryCode = "🇦🇺";
            pallette = ["#00008B","#FFFFFF","#FF0000"];
            text = colourText(this.id,pallette);
            break;
        case "New Zealand":
            countryCode = "🇳🇿";
            pallette = ["#00247D","#FFFFFF","#CC142B"];
            text = colourText(this.id,pallette);
            break;
        case "Fiji":
            countryCode = "🇫🇯";
            pallette = ["#002868","#68BFE5","#FFFFFF","#CE1126","#FFD100","#00A651"];
            text = colourText(this.id,pallette);
            break;
        case "Vanuatu":
            countryCode = "🇻🇺";
            pallette = ["#000000","#FDCE12","#D21034","#009543"];
            text = colourText(this.id,pallette);
            break;
        case "New Caledonia":
            countryCode = "🇳🇨";
            pallette = ["#0035AD","#ED4135","#009543","#FAE602","#000000"];
            text = colourText(this.id,pallette);
            break;
        case "Solomon Islands":
            countryCode = "🇸🇧";
            pallette = ["#000000","#007A3D","#FFFFFF","#CE1126"];
            text = colourText(this.id,pallette);
            break;
        case "Papua New Guinea":
            countryCode = "🇵🇬";
            pallette = ["#FFFFFF","#000000","#CE1126","#FCD116"];
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

function drawNZStar(){

    x = 300;
    y = 150;

    var smallR = 0;
    var angle = 360/5;

    var pX = [0,(y/5)*Math.cos(-8*Math.PI/180),0,(y/5)*Math.cos(172*Math.PI/180)];
    var pY = [-y*(36/120),-(y/10)+(y/5)*Math.sin(-8*Math.PI/180),(y*(3/10)),-(y/10)+(y*(28/120))*Math.sin(172*Math.PI/180)];
    var radius = [(16/240)*y,(14/240)*y,(18/240)*y,(16/240)*y];

    for(let j=0; j<4; j++){

        var counter = 0;
        var result = "";

        for(let i=0; i<5; i++){

            result += ((x*(3/4))+pX[j]+radius[j]*1.2*Math.cos((-90+(angle*counter))*Math.PI/180))+","+((y/2)+pY[j]+radius[j]*1.2*Math.sin((-90+(angle*counter))*Math.PI/180))+" ";
            counter += 2;

        }

        result = result.slice(0,-1);

        largeStar[j].setAttribute("points",""+result);

    }

    for(let j=0; j<4; j++){

        var counter = 0;
        var result = "";

        for(let i=0; i<5; i++){

            result += ((x*(3/4))+pX[j]+radius[j]*0.8*Math.cos((-90+(angle*counter))*Math.PI/180))+","+((y/2)+pY[j]+radius[j]*0.8*Math.sin((-90+(angle*counter))*Math.PI/180))+" ";
            counter += 2;

        }

        result = result.slice(0,-1);

        smallStar[j].setAttribute("points",""+result);

    }

}

function toggleOpacity(val){

    if(previousElem == val){

        return;

    } else if (previousElem == null){

        previousElem = val;

        for(let i=0; i<7; i++){

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

        for(let i=0; i<7; i++){

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

    if(previousElem != null){

        result.innerHTML = "";
        document.querySelectorAll("#countryBox > p")[1].style.display = "block";

        for(let i=0; i<7; i++){

            if(flagGroup[i].id != previousElem){

                myAni[i].beginElement();
                flagGroup[i].setAttribute("opacity","1");

            }

        }
        previousElem = null;

    }

}