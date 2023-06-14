// js goes here

var w = window.innerWidth;
var h = window.innerHeight - 50;
var fr = 60;
var frames = 0;
var plankW = 60;
var plankH = 15;
var colorArr;
var plankAmount = 10;
var plankCols = buildPlankCols(plankAmount,(w/4),(h/2)+80,plankW,plankH);

function setup(){

    createCanvas(w,h);
    frameRate(fr);

}

function draw(){

    clear();

    background("rgba(220,240,220,1)");

    // Planks

    push();

    fill("burlywood");

    translate(w/4,0);

    for(let i=0; i<plankAmount; i++){

        if(frames/125 >= i){

            push();
            translate(plankCols[i][4],0);
            rect(plankCols[i][0],plankCols[i][1],plankCols[i][2],plankCols[i][3],2);
            pop();

        }

    }

    pop();

    // Table

    var tableW = 100;
    var tableH = 15;

    push();

    translate((w/2)-(tableW)-80,(h/2));

    // Table legs

    var tableLegW = 8;
    var tableLegH = 80;

    push();

    translate(17.5,10);
    translate(tableLegW/2,0);
    rotate(-45*Math.PI/180);
    translate(-tableLegW/2,-0);

    fill("rgb(64,64,64)");

    rect(0,0,tableLegW,tableLegH,5);

    pop();

    push();

    translate(77.5,10);
    translate(tableLegW/2,0);
    rotate(45*Math.PI/180);
    translate(-tableLegW/2,-0);

    fill("rgb(64,64,64)");

    rect(0,0,tableLegW,tableLegH,5);

    pop();

    // Table body

    fill("steelblue");

    rect(0,0,tableW,tableH,5);



    pop();
    
    // Back Wood

    var woodW = 60;
    var woodH = plankH;

    push();

    translate((w/2)-(tableW/2)-80-(woodW/2),(h/2)-woodH);

    fill("burlywood");

    rect(0,0,woodW,woodH,2);

    pop();

    // Saw

    var rectW = 100;
    var rectH = 30;

    push();

    translate(-(frames%125),0);

    push();

    translate((w/2)-(rectW)+10*Math.sin((frames*0.2)%50),(h/2)-5*(rectH/2)+10*Math.sin((frames*0.2)%50));
    translate(-rectW/8,-rectW/8);
    rotate(Math.PI/6);
    translate(rectW/8,rectW/8);

    // Main Saw Base

    fill("grey");

    beginShape();
    vertex(0,0);
    vertex(rectW,0);
    vertex(rectW,rectH);
    vertex(rectW+10,rectH+12.5);
    vertex(0,rectH);
    vertex(0,0);
    endShape(CLOSE);

    // Saw Teeth

    var toothW = 10;
    var toothH = 10;
    var angleDent = 6;

    push();

    translate(0,rectH);

    push();
    rotate(angleDent*Math.PI/180);

    for(let i=0; i<10; i++){

        triangle(i*toothW,0,toothW+(i*toothW),0,(toothW/2)+(i*toothW),toothH);

    }

    pop();
    fill("grey");

    pop();

    // Saw Handle

    push();
    translate(rectW-10,0);

    fill("firebrick");

    beginShape();
    vertex(5,0);
    curveVertex(5,0);
    curveVertex(0,5); 
    curveVertex(0,rectH);
    vertex(0,rectH);
    vertex(15,rectH+20);
    curveVertex(15,rectH+20);
    curveVertex(30,rectH+20);
    curveVertex(40,rectH+10);
    curveVertex(40,10);
    curveVertex(30,0);
    vertex(5,0);
    endShape(CLOSE);

    // Saw Handle Cut out

    fill("rgba(220,240,220,1)");

    rect(17.5,7.5,15,rectH,5);

    pop();

    pop();

    pop();

    // Front Wood

    push();

    translate(0,frames%125 > 75 ? (frames%125)-75 : 0);

    push();

    translate((w/2)-(tableW/2)-80-(woodW/2),(h/2)-woodH);

    fill("burlywood");

    rect(0,0,woodW,woodH,2);

    pop();

    pop();

    frames++;

}


function windowResized(){

    w = window.innerWidth;
    h = window.innerHeight - 50;
    resizeCanvas(w,h);

}

function buildPlankCols(amount,pX,pY,width,height){

    var result = [];

    for(let i=0; i<amount; i++){

        var shift = (Math.random()*10)-5;

        result.push([pX,pY-(i*height),width,height,shift]);

    }

    return result;
    
}