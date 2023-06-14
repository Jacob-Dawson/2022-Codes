// js goes here

// Source: https://i.pinimg.com/originals/39/4d/36/394d36bb40c5f53d7730c6f5ec5c2955.png

var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");
var w;
var h;
var anInterval;
var p5Interval;
var p5t = 0;
var time = 0;
var cssCheck = document.getElementById("cssCheck");
var svgCheck = document.getElementById("svgCheck");
var canvasCheck = document.getElementById("canvasCheck");
var p5Check = document.getElementById("p5Check");
var levelLimit = 0;

cssCheck.addEventListener("change",cssCheckEvent,false);
svgCheck.addEventListener("change",svgCheckEvent,false);
canvasCheck.addEventListener("change",canvasCheckEvent,false);
p5Check.addEventListener("change",p5CheckEvent,false);

anInterval = setInterval(function(){

    drawCanvas(time);
    levelLimit = Math.floor(time/10)-1;
    time++;

    if(time > 200){

        time = 0;

    }

},20);

function cssCheckEvent(e){

    if(cssCheck.checked){

        document.getElementById("cssSection").style.display = "flex";

    } else {

        document.getElementById("cssSection").style.display = "none";

    }

}

function svgCheckEvent(e){

    if(svgCheck.checked){

        document.getElementById("svgSection").style.display = "flex";

    } else {

        document.getElementById("svgSection").style.display = "none";

    }

}

function canvasCheckEvent(e){

    if(canvasCheck.checked){

        document.getElementById("canvasSection").style.display = "flex";

    } else {

        document.getElementById("canvasSection").style.display = "none";

    }

}

function p5CheckEvent(e){

    if(p5Check.checked){

        document.getElementById("p5Section").style.display = "flex";

    } else {

        document.getElementById("p5Section").style.display = "none";

    }

}

function drawCanvas(t){

    w = myCanvas.width;
    h = myCanvas.height;

    context.clearRect(0,0,w,h);

    context.strokeStyle = "black";
    context.lineWidth = 5;

    drawFractal(w/2,h,225,0,0);

    //

    context.fillStyle = "black";

    context.textAlign = "left";
    context.textBaseline = "top";
    context.font = "40px Arial";
    context.fillText("Canvas:",10,10);

}

function setup(){

    p5Canvas = createCanvas(300,300);
    p5Canvas.parent("p5Div");

}

function draw(){

    clear();

    w = 300;
    h = 300;

    var xLimit = 10;
    var yLimit = 10;

    push();

    blendMode(MULTIPLY);
    strokeWeight(15);

    for(let i=0; i<xLimit; i++){

        stroke("rgb(220,100,100)");
        line(((i+0.5)/xLimit)*w,0,((i+0.5)/xLimit)*w,h);

    }

    for(let j=0; j<yLimit; j++){

        stroke("rgb(100,100,220)");
        line(0,((j+0.5)/yLimit)*h,w,((j+0.5)/yLimit)*h);

    }

    pop();

    //

    fill("black");
    textSize(20);
    textFont("Arial");
    textAlign(LEFT,TOP);
    text("p5:",5,5);

    p5t++;

}

function drawFractal(n,m,factor,ang,level){

    var pX = n+factor*0.7*Math.cos((-90+ang)*Math.PI/180);
    var pY = m+factor*Math.sin((-90+ang)*Math.PI/180);

    context.strokeStyle = "rgb(100,150,"+(1-(factor/100))*225+")";

    context.beginPath();
    context.moveTo(n,m);
    context.lineTo(pX,pY);
    context.stroke();
    context.closePath();

    if(factor > 0.5 && level <= levelLimit){

        for(let i=0; i<2; i++){

            drawFractal(pX,pY,factor*0.625,ang+(40*Math.pow(-1,(i+1))),level+1);

        }
    }

}