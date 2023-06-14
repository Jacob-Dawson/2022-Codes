// js goes here

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

cssCheck.addEventListener("change",cssCheckEvent,false);
svgCheck.addEventListener("change",svgCheckEvent,false);
canvasCheck.addEventListener("change",canvasCheckEvent,false);
p5Check.addEventListener("change",p5CheckEvent,false);

anInterval = setInterval(function(){

    drawCanvas(time);
    time++;

},50);

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

    // building

    context.fillStyle = "sienna";

    var topW = 70;
    var topH = 60;

    context.beginPath();
    context.moveTo(w/2,(h/2)-topH);
    context.lineTo((w/2)+topW,(h/2));
    context.lineTo((w/2)-topW,(h/2));
    context.closePath();
    context.fill();

    var bottomW = topW*2;
    var bottomH = 160;

    context.beginPath();
    context.moveTo((w/2)+(bottomW/2),(h/2));
    context.lineTo((w/2)+(bottomW/2),(h/2)+bottomH);
    context.lineTo((w/2)-(bottomW/2),(h/2)+bottomH);
    context.lineTo((w/2)-(bottomW/2),(h/2));
    context.closePath();
    context.fill();

    context.fillStyle = "burlywood";

    context.beginPath();
    context.rect((w/2)-(bottomW/2),(h/2),bottomW,10);
    context.closePath();
    context.fill();

    // spokes

    context.fillStyle = "black";

    context.save();
    context.translate((w/2),(h/2));
    context.rotate(t*Math.PI/180);
    context.translate(-(w/2),-(h/2));

    var r = 200;
    var spokeW = r;
    var spokeH = 10;

    for(let i=0; i<4; i++){

        var ang = 90*i;

        context.save();
        context.translate((w/2),(h/2));
        context.rotate(ang*Math.PI/180);
        context.translate(-(w/2),-(h/2));

        var pX = (w/2)+r*Math.cos(ang*Math.PI/180);
        var pY = (h/2)+r*Math.sin(ang*Math.PI/180);
        
        context.beginPath();
        context.rect(w/2,(h/2)-(spokeH/2),spokeW,spokeH);
        context.fill();

        context.lineWidth = "2";

        for(let j=0; j<=20; j++){

            context.beginPath();

            context.moveTo((w/2)+((19+(j*4))*r/100),(h/2));
            context.lineTo((w/2)+((19+(j*4))*r/100),(h/2)+35);
            context.stroke();

            
        }

        for(let k=0; k<3; k++){

            context.beginPath();

            context.moveTo((w/2)+((19)*r/100),(h/2)+15+(k*10));
            context.lineTo((w/2)+((99)*r/100),(h/2)+15+(k*10));

            context.stroke();

        }

        context.restore();

    }

    context.restore();

    //

    context.fillStyle = "black";

    context.textAlign = "left";
    context.textBaseline = "top";
    context.font = "40px Roboto";
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

    // building

    fill("sienna");

    var topW = 35;
    var topH = 30;

    beginShape();
    vertex(w/2,(h/2)-topH);
    vertex((w/2)+topW,(h/2));
    vertex((w/2)-topW,(h/2));
    endShape(CLOSE);

    var bottomW = topW*2;
    var bottomH = 80;

    beginShape();
    vertex((w/2)+(bottomW/2),(h/2));
    vertex((w/2)+(bottomW/2),(h/2)+bottomH);
    vertex((w/2)-(bottomW/2),(h/2)+bottomH);
    vertex((w/2)-(bottomW/2),(h/2));
    endShape(CLOSE);

    fill("burlywood");

    rect((w/2)-(bottomW/2),(h/2),bottomW,5);

    // spokes

    fill("black");

    push();
    translate((w/2),(h/2));
    rotate(p5t*Math.PI/180);
    translate(-(w/2),-(h/2));

    var r = 100;
    var spokeW = r;
    var spokeH = 5;

    for(let i=0; i<4; i++){

        var ang = 90*i;

        push();
        translate((w/2),(h/2));
        rotate(ang*Math.PI/180);
        translate(-(w/2),-(h/2));

        var pX = (w/2)+r*Math.cos(ang*Math.PI/180);
        var pY = (h/2)+r*Math.sin(ang*Math.PI/180);
        
        rect(w/2,(h/2)-(spokeH/2),spokeW,spokeH);

        strokeWeight(1);

        noFill();

        for(let j=0; j<=20; j++){

            beginShape();
            vertex((w/2)+((19+(j*4))*r/100),(h/2));
            vertex((w/2)+((19+(j*4))*r/100),(h/2)+17.5);
            endShape();

            
        }

        for(let k=0; k<3; k++){

            beginShape();

            vertex((w/2)+((19)*r/100),(h/2)+7.5+(k*5));
            vertex((w/2)+((99)*r/100),(h/2)+7.5+(k*5));

            endShape();

        }

        pop();

    }

    pop();

    //

    fill("black");
    textSize(20);
    textFont("Roboto");
    textAlign(LEFT,TOP);
    text("p5:",5,5);

    p5t++;

}

// https://i.pinimg.com/originals/9a/a9/cf/9aa9cf8e8508d6887b92183df586163f.jpg