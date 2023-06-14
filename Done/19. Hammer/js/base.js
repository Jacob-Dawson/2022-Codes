// js goes here

var anInterval;
var p5Interval;
var frames = 0;
var opening = 0;
var p5Canvas;

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var x;
var y;

function setup(){

    p5Canvas = createCanvas(300,300);
    p5Canvas.parent("p5Div");

}

function draw(){

    noFill();

    clear();

    x = p5Canvas.width;
    y = p5Canvas.height;

    clear(0,0,x,y);

    stroke("rgba(0,0,0,0.6)");

    push();
    translate(90,-35);
    
    push();
    translate(90,-35);
    scale(0.85,0.85);
    translate(-90,35);

    push();
    translate(150,y-40);
    rotate(-((frames%45)+50)*Math.PI/180);
    translate(-150,-(y-40));

    // -- Hammer

    // Hammer Head

    fill("darkgrey");

    beginShape();
    vertex(140,80);

    vertex(130,75);
    vertex(130,80);
    vertex(115,80);
    vertex(115,45);
    vertex(130,45);
    vertex(130,50);

    vertex(140,50);
    vertex(160,50);

    vertex(180,50);
    vertex(200,80);
    vertex(180,65);
    vertex(170,65);

    vertex(160,80);
    endShape(CLOSE);

    // Hammer Handle

    fill("goldenrod");

    rect(140,80,20,170,0,0,10,10);

    pop();

    pop();

    pop();

    // anvil

    push();
    translate(20,210);

    fill("grey");

    beginShape();
    vertex(0,0);
    vertex(60,0);
    vertex(60,8);
    vertex(90,6);
    vertex(60,30);
    vertex(52,35);
    vertex(52,40);
    vertex(60,50);
    vertex(20,50);
    vertex(28,40);
    vertex(30,35);
    vertex(30,22);
    vertex(30,15);
    vertex(15,8);
    endShape(CLOSE);

    pop();

    // sparks

    noStroke();

    push();
    translate(60,200);

    for(let i=0; i<7; i++){

        push();
        translate(2.5,10);
        rotate((-75+25*i)*Math.PI/180);
        translate(-2.5,-10);

        push();
        translate(0,-(frames%45)/2);

        fill("rgba(255,69,0,"+((frames%45)/45)+")");

        triangle(0,10,2.5,0,5,10);

        pop();

        pop();

    }

    pop();

    frames++;

}