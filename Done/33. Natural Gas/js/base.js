// js goes here

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var w = canvas.width;
var h = canvas.height;
var frames = 0;
var anInterval;

anInterval = setInterval(function(){

    draw(frames);
    frames++;

},5);

function draw(fr){

    context.clearRect(0,0,w,h);

    context.lineWidth = "1";

    // background

        // top bg

        context.fillStyle = "skyblue";

        context.beginPath();
        context.rect(0,0,w,0.55*h);
        context.fill();

        context.fillStyle = "green";

        context.beginPath();
        context.rect(0,0.55*h,w,0.45*h);
        context.fill();

    // gas store

    context.save();
    context.translate(120,0.6*h);

    for(let i=3; i<6; i++){

        var ang = (i*360/6)+15;
        var radiusX = 100;
        var radiusY = 25;

        context.beginPath();
        context.moveTo(radiusX*Math.cos((ang)*Math.PI/180),radiusY*Math.sin((ang)*Math.PI/180));
        context.lineTo(radiusX*Math.cos((ang)*Math.PI/180),-50+radiusY*Math.sin((ang)*Math.PI/180));
        context.stroke();

    }

    context.beginPath();
    context.ellipse(0,0,100,25,0,0,Math.PI);
    context.stroke();
    
    context.fillStyle = "beige";

    context.beginPath();
    context.ellipse(0,0,100,25,0,0,Math.PI);
    context.fill();
    context.stroke();

    context.beginPath();
    context.ellipse(0,0,100,45,0,-Math.PI,0);
    context.fill();
    context.stroke();

    for(let i=0; i<3; i++){

        var ang = (i*360/6)+15;
        var radiusX = 100;
        var radiusY = 25;

        context.beginPath();
        context.moveTo(radiusX*Math.cos((ang)*Math.PI/180),radiusY*Math.sin((ang)*Math.PI/180));
        context.lineTo(radiusX*Math.cos((ang)*Math.PI/180),-50+radiusY*Math.sin((ang)*Math.PI/180));
        context.stroke();

    }

    context.restore();

    // smaller gas stores

    context.save();
    context.translate(300,0.55*h);

    context.fillStyle = "silver";

    for(let i=0; i<4; i++){

        context.beginPath();
        context.arc(i*50,0,30,-230*Math.PI/180,50*Math.PI/180);
        context.closePath();
        context.fill();
        context.stroke();

        context.beginPath();
        context.moveTo(i*50 - 5,20);
        context.lineTo(i*50 + 5,20);
        context.lineTo(i*50 - 10,50);
        context.lineTo(i*50 - 20,50);
        context.closePath();
        context.fill();
        context.stroke();

    }

    context.restore();

    // transformer / office

    context.save();
    context.translate(160,0.6*h);

    context.fillStyle = "grey";

    context.beginPath();
    context.rect(0,0,50,60);
    context.fill();
    context.stroke();
    context.closePath();

    context.fillStyle = "black";

    context.beginPath();
    context.rect(5,5,15,15);
    context.fill();
    context.closePath();

    context.beginPath();
    context.rect(30,5,15,15);
    context.fill();
    context.closePath();

    context.beginPath();
    context.rect(5,30,15,15);
    context.fill();
    context.closePath();

    context.beginPath();
    context.rect(30,30,15,15);
    context.fill();
    context.closePath();

    context.restore();

    // electric wire

    context.save();
    context.translate(210,(0.6*h)+55);

    context.lineWidth = "5";
    context.fillStyle = "yellow";

    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(w,0);
    context.stroke();

    context.beginPath();
    context.arc(fr%(w-210),0,2.5,0,Math.PI*2);
    context.fill();

    context.beginPath();
    context.arc((fr+10)%(w-210),0,2.5,0,Math.PI*2);
    context.fill();

    context.restore();

    // gas pipeline

    context.fillStyle = "silver";

    context.save();
    context.translate(210,(h*0.6)+20);

    context.beginPath();
    context.rect(0,0,(w-210),17.5);
    context.closePath();
    context.fill();
    context.stroke();

    context.restore();


}