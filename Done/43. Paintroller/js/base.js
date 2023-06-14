// js goes here

var rollerColor = document.getElementById("rollerColor");
var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var canvas2 = document.getElementById("myCanvas2");
var context2 = canvas2.getContext("2d");
var w = canvas.width;
var h = canvas.height;

var firstMsg = true;
var painting = false;
var pMouseX,pMouseY;
var factor = 2; // resolution factor
var thickness = 10*factor;
var paintrollerColor = rollerColor.value;

rollerColor.addEventListener("change",selectColor,false);

drawCanvas(w/2,h/2);

function drawCanvas(pX,pY,p){

    var dir = 0; // direction

    context.clearRect(0,0,w,h);

    if(firstMsg === true){

        if(isTouchDevice() === false){

            context.textAlign = "center";
            context.textBaseline = "middle";
            context.font = "30px Arial";

            context.fillText("Click on the canvas and move the mouse",w/2,h*0.2);

        } else if(isTouchDevice() === true){

            context.textAlign = "center";
            context.textBaseline = "middle";
            context.font = "30px Arial";

            context.fillText("Drag on the canvas to paint",w/2,h*0.2);

        }

    }

    context.save();
    context.translate(pX,pY + 50);

    context.save();
    context.translate(-0,-60);
    context.rotate(dir*Math.PI/180);
    context.translate(0,60);

    // roller

    context.fillStyle = ""+paintrollerColor;
    context.strokeStyle = "rgba(0,0,0,0.8)";
    context.lineWidth = "2";

    var rWidth = 100;
    var rHeight = 30;

    context.beginPath();
    context.rect(-rWidth/2,-60-(rHeight/2),rWidth,rHeight);
    context.closePath();
    context.fill();
    context.stroke();

    // connector

    context.strokeStyle = "silver";
    context.lineWidth = "5";

    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(0,-20);
    context.lineTo(60,-30);
    context.lineTo(60,-60);
    context.lineTo(50,-60);
    context.stroke();

    // handle

    var hWidth = 15;
    var hHeight = 70;

    context.fillStyle = "black";

    context.beginPath();
    context.rect(-hWidth/2,0,hWidth,hHeight);
    context.closePath();
    context.fill();

    context.restore();

    context.restore();

    // 

    if(p === true){

        context2.fillStyle = ""+paintrollerColor;
        context2.globalAlpha = "0.15";
        context2.save();
        context2.translate(pX,pY + 50);

        var paintW = rWidth;
        var paintH = rHeight;

        context2.save();
        context2.translate(0,-paintH-30);
        context2.rotate(dir*Math.PI/180);
        context2.translate(0,paintH+30);

        context2.beginPath();
        context2.rect(-paintW/2,-60-(paintH/2),paintW,paintH);
        context2.closePath();
        context2.fill();

        context2.restore();

        context2.restore();

    }

}

function togglePainting(e){

    if(isTouchDevice() === false){

        if(painting === false){

            painting = true;
            firstMsg = false;

        } else if(painting === true){

            painting = false;

        }

    }

}

function startPaint(e) { //When you drag the object

    context.strokeStyle='rgb(255,255,255,0.4)';
    context.lineWidth = thickness;
    context.lineJoin = "round";

    var rect = canvas.getBoundingClientRect();

    if(isTouchDevice() == false){
        pMouseX = (e.pageX - rect.left)*factor;
        pMouseY = (e.pageY - rect.top)*factor;
    } else {

        firstMsg = false;
        pMouseX = (e.touches[0].pageX - canvas.offsetLeft)*factor;
        pMouseY = (e.touches[0].pageY - canvas.offsetTop)*factor;

    }

}

function doPaint(e) { // When you drag the object
    if(painting) {

        var rect = canvas.getBoundingClientRect();

        if(isTouchDevice() == false){
            var mouseX = (e.clientX - rect.left)*factor;
            var mouseY = (e.clientY - rect.top)*factor;
        } else {

            var mouseX = (e.touches[0].pageX - canvas.offsetLeft)*factor;
            var mouseY = (e.touches[0].pageY - canvas.offsetTop)*factor;

        }
        context.beginPath();

        context.arc(mouseX,mouseY,(thickness/2),0,Math.PI*2);

        context.closePath();
        context.stroke(); 
        pMouseX=mouseX;
        pMouseY=mouseY;

        drawCanvas(pMouseX,pMouseY,painting);

    }


}

function selectColor(e){

    paintrollerColor = rollerColor.value;

}

function isTouchDevice(){

    try{

        document.createEvent("TouchEvent");
        return true;

    } catch (ev) {

        return false;

    }	

}

function clearCanvas(){

    context2.clearRect(0,0,w,h);
    firstMsg = true;
    painting = false;
    drawCanvas(w/2,h/2);

}

/*

    Tasks:
    ------

    - Draw paintroller object (DONE)
    - Engineer the paintroller function (ie: Moving the cursor in a direction makes the paintroller object do the same and then the paint is made) (too hard)
    - Maybe immitate the paint product made just like as a real paintroller does (Basic DONE) - Patterns perhaps?


*/