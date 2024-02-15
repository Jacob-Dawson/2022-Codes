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

    // Background

    fill("skyblue");
    rect(0,0,w,h*0.5);

    fill("sandybrown");
    rect(0,h*0.5,w,h*0.5);
    
    // hole back

    fill("sienna");
    arc((w/2)+20,(h/2)+100,80,60,-205*Math.PI/180,20*Math.PI/180,CHORD);

    push();
    translate(0,-12.5+(25*Math.cos((frames*Math.PI/180))));
    // spade

    push();
    translate((w/2)+150,(h/2)-50);
    rotate(40*Math.PI/180);

    stroke("black");

    // spade shaft

    var shaftW = 10;
    var shaftH = 150;

    fill("burlywood");
    rect(-shaftW/2,0,shaftW,shaftH);

    // spade handle

    var handleW = 10;
    var handleH = 10;

    fill("rgb(90,90,90)");
    rect(-shaftW/2,0,shaftW,20);
    
    noFill();
    stroke("black");
    strokeWeight(5);
    beginShape();
    vertex(0,0);
    vertex(-shaftW/2,0);
    vertex(-4*shaftW/2,-25);
    vertex(-4*shaftW/2,-40);
    vertex(4*shaftW/2,-40);
    vertex(4*shaftW/2,-25);
    vertex(shaftW/2,0);
    endShape(CLOSE);

    stroke("rgb(90,90,90)");
    strokeWeight(3);
    beginShape();
    vertex(0,0);
    vertex(-shaftW/2,0);
    vertex(-4*shaftW/2,-25);
    vertex(-4*shaftW/2,-40);
    vertex(4*shaftW/2,-40);
    vertex(4*shaftW/2,-25);
    vertex(shaftW/2,0);
    endShape(CLOSE);

    // spade head

    var headW = 50;
    var headH = 65;
    
    stroke("black");
    fill("rgb(90,90,90)");
    strokeWeight(1);
    rect(-headW/2,shaftH,headW,headH,0,0,40,40);

    beginShape();
    vertex(-shaftW/2,shaftH-20);
    vertex(shaftW/2,shaftH-20);
    vertex(shaftW/2,shaftH+10);
    vertex(0,shaftH+30);
    vertex(-shaftW/2,shaftH+10);
    endShape(CLOSE);

    pop();

    pop();

    // dirt front

    fill("sandybrown");
    rect(0,(h/2)+115,w,h*0.5);

    // hole front

    fill("sienna");
    arc((w/2)+20,(h/2)+100,80,60,20*Math.PI/180,165*Math.PI/180,CHORD);

    

    frames++;

}

function windowResized(){

    w = window.innerWidth;
    h = window.innerHeight - 50;
    resizeCanvas(w,h);

}

/* Notes:

    - Draw background
    - Draw Hole (separate top and bottom)
    - Draw Spade (rotated at an angle)
    - Spade digs in an already existing hole, gets dirt onto the spade and then dumps it into a pile as an animation

*/