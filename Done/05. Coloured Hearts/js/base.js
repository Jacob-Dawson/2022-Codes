// js goes here

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var w = canvas.width = 200;
var h = canvas.height = 200;
var currPosn = [0,0];
var anInterval;
var frames = 0;
var factor = 0.5;
var heartInfo = getHeartInfo();

populateInfo(heartInfo);

canvas.style.width = window.innerWidth+"px";
canvas.style.height = (window.innerHeight - 50)+"px";

window.addEventListener("resize",resizeCanvas,false);
canvas.addEventListener("mousemove",hoverEvent,false);
canvas.addEventListener("click",clickEvent,false);

resizeCanvas();

anInterval = setInterval(function(){

    draw();
    frames++;

},10);

function draw(){

    context.clearRect(0,0,w,h);

    for(let j=0; j<heartInfo.length; j++){

        makeShape(currPosn,heartInfo);

    }

}

function makeShape(coords,info){

    // obviously add hearts instead of squares and get multiple ones and make them slowly fly upwards in different (upward) directions

    for(let j=0; j<10; j++){

        var offset = info[j]["offsetH"];
        var ang = info[j]["angle"];
        var heartColour = info[j]["color"];
        var offsetSide = info[j]["offsetW"];

        if(offset <= frames){

            var pX = coords[0] + offsetSide;
            var pY = coords[1] - (frames-offset)%100;
            var r = 1.5;

            var opacity = (100-((frames-offset)%100))/100; 

            context.save();
            context.translate(coords[0],coords[1]);
            context.rotate(ang*Math.PI/180);
            context.translate(-coords[0],-coords[1]);

            context.fillStyle = "rgba("+heartColour+","+opacity+")";

            context.beginPath();

            for(let i=0; i<6.2; i+=0.1){

                var posnX = pX+(r*16*Math.pow(Math.sin(i),3));
                var posnY = pY+(-r*(13*Math.cos(i)-5*Math.cos(2*i)-2*Math.cos(3*i)-Math.cos(4*i)));

                if(i == 0){

                    context.moveTo(posnX,posnY);

                } else {

                    context.lineTo(posnX,posnY);

                }

            }
            context.closePath();
            context.fill();

            context.restore();

        }

    }

}

function getHeartInfo(){

    /*   template:
    {
                "#":"1",
                "name": "test",
                "language": "Web",
                "tags": "Canvas",
                "link": "(url)"
            },
    */

    var info = [
        {
            "#":1,
            "color":"",
            "angle":0,
            "offsetW":0,
            "offsetH":0
        },
        {
            "#":2,
            "color":"",
            "angle":0,
            "offsetW":0,
            "offsetH":0
        },
        {
            "#":3,
            "color":"",
            "angle":0,
            "offsetW":0,
            "offsetH":0
        },
        {
            "#":4,
            "color":"",
            "angle":0,
            "offsetW":0,
            "offsetH":0
        },
        {
            "#":5,
            "color":"",
            "angle":0,
            "offsetW":0,
            "offsetH":0
        },
        {
            "#":6,
            "color":"",
            "angle":0,
            "offsetW":0,
            "offsetH":0
        },
        {
            "#":7,
            "color":"",
            "angle":0,
            "offsetW":0,
            "offsetH":0
        },
        {
            "#":8,
            "color":"",
            "angle":0,
            "offsetW":0,
            "offsetH":0
        },
        {
            "#":9,
            "color":"",
            "angle":0,
            "offsetW":0,
            "offsetH":0
        },
        {
            "#":10,
            "color":"",
            "angle":0,
            "offsetW":0,
            "offsetH":0
        }
    ];


    return info;

}

function populateInfo(info){

    for(let i=0; i<info.length; i++){

        info[i]["color"] = ""+getColor(i);
        info[i]["angle"] = getAngle(i)*4;
        info[i]["offsetW"] = getOffset(i)*2;
        info[i]["offsetH"] = getOffset(i)*20;

    }

}

function getColor(num){

    var cols = ["255,0,0","0,0,0","255,255,0","0,255,0","255,0,255","0,128,255","128,0,0","128,128,128","0,0,255","0,255,255"];

    return cols[num];

}

function getAngle(num){

    var angs = [-5,-4,-3,-2,-1,0,1,2,3,4,5];

    return angs[num];

}

function getOffset(num){

    var offset = [-10,-8,-6,-4,-2,0,2,4,6,8,10];

    return offset[num];

}

function resizeCanvas(e){

    canvas.style.width = window.innerWidth+"px";
    canvas.style.height = (window.innerHeight - 50)+"px";

    w = canvas.width = Number(window.innerWidth)/factor;
    h = canvas.height = Number(window.innerHeight - 50)/factor;

    draw();

}

function hoverEvent(e){

    getCursorPosition(canvas,e);

}

function clickEvent(e){

    getCursorPosition(canvas,e);

}

function getCursorPosition(canvas, event) {

    const rect = canvas.getBoundingClientRect();
    const pX = (event.clientX - rect.left)/factor;
    const pY = (event.clientY - rect.top)/factor;

    currPosn = [pX,pY];

}