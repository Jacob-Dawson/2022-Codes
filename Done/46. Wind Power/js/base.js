// js goes here

var w = window.innerWidth;
var h = window.innerHeight - 50;
var fr = 60;
var frames = 0;

function setup(){

    createCanvas(w,h);
    frameRate(fr);

}

function draw(){

    clear();

    noStroke();

    // background

    fill("skyblue");
    rect(0,0,w,h*0.5);

    fill("green");
    rect(0,h*0.5,w,h*0.5);

    drawWindTurbine(false,frames,0.5,w/10,0);
    drawWindTurbine(false,frames,0.75,w/4,0);
    drawWindTurbine(false,frames,0.65,-w/6,0);
    drawWindTurbine(false,frames,0.55,-w/3,h/20);
    drawWindTurbine(true,frames,1,0,0);

    frames++;

}

function drawWindTurbine(mainObj,f,scaleFactor,posX,posY){

    fill("white");

    push();
    translate((w/2)+posX,(h/2)+posY);
    scale(scaleFactor);

    // side wire (along the tower)

    strokeWeight(3);
    stroke("black");
    line(8,-100,8,50);

    // turbine (tower)

    strokeWeight(1);
    stroke("black");

    var rectH = 150;
    var rectW = 15;
    rect(-(rectW/2),-100,rectW,rectH);

    noStroke();

    push();
    translate(0,-100);
    rotate((f)*Math.PI/180);

    // outer circle

    fill("black");
    circle(0,0,22);

    // wings

    stroke("black");
    fill("white");

    for(let i=0; i<3; i++){

        var r = 85;
        var ang = (i/3)*360*Math.PI/180;
        var pX = Math.cos(ang);
        var pY = Math.sin(ang);

        push();
        strokeJoin(ROUND);
        rotate(ang);

        beginShape();
        vertex(pX,pY+2);
        vertex(pX+15,pY+0);
        vertex(pX+20,pY-5);
        vertex(pX+r+2.5,pY-5);
        vertex(pX+r,pY+5);
        vertex(pX,pY+5);
        endShape(CLOSE);

        pop();

    }

    noStroke();

    // inner circle / generator

    fill("grey");
    circle(0,0,18);

    fill("black");
    circle(0,0,15);

    pop();

    if(mainObj === true){

        // transformer

        strokeWeight(1);
        stroke("black");
        fill("grey");
        rect(10,-0,40,50);

        // wire

        strokeWeight(3);
        line(50,49,(w/2),49);

        // pulse
        noStroke();
        fill("yellow");
        circle(50+(f%(w/2)),49,3);

        fill("yellow");
        circle(55+(f%(w/2)),49,3);

    }

    pop();

}

function windowResized(){

    w = window.innerWidth;
    h = window.innerHeight - 50;
    resizeCanvas(w,h);

}