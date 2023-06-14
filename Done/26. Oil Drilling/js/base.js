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

    var swingAng = 5*Math.cos(frames*Math.PI/180);

    strokeWeight(1);

    fill("white");
    rect(0,0,w,h);

    // bg

    fill("rgb(250,200,50)");
    rect(0,0,w,h);

    // see saw bar + circle

    var rectH = 20;
    var rectW = 200;
    var rectR = 5;
    var circR = 12;

    var pX = (w/2);
    var pY = (h/2)-(rectH*1.5)+(circR/2);

    push();
    translate(pX,pY);
    rotate(swingAng*Math.PI/180);
    translate(-pX,-pY);

    fill("black");
    circle(pX,pY,circR);

    fill("sienna");
    circle(pX,pY,circR*0.75);

    // bar

    fill("black");
    rect((w/2)-(rectW/2),(h/2)-(rectH*2.5),rectW,rectH,rectR);

    // right hammer

    fill("sienna");

    beginShape();
    vertex((w/2)+(rectW/2)-2.5,(h/2)-(rectH*2.5));
    vertex((w/2)+(rectW/2)+10,(h/2)-(rectH*2.5)-20);
    vertex((w/2)+(rectW/2)+20,(h/2)-(rectH*2.5)-10);
    vertex((w/2)+(rectW/2)+20,(h/2)-(rectH*2.5)+30);
    vertex((w/2)+(rectW/2)+10,(h/2)-(rectH*2.5)+40);
    vertex((w/2)+(rectW/2)-2.5,(h/2)-(rectH*2.5)+20);
    endShape(CLOSE);

    pop();

    // right pulley

    stroke("black");
    strokeWeight(1);

    beginShape();
    vertex((w/2)+(rectW/2)+11.5,(h/2)-(rectH*2.5)+35+swingAng*1.85);
    vertex((w/2)+(rectW/2)+11.5,(h/2)+(h/3));
    endShape();

    beginShape();
    vertex((w/2)+(rectW/2)+8.5,(h/2)-(rectH*2.5)+35+swingAng*1.85);
    vertex((w/2)+(rectW/2)+8.5,(h/2)+(h/3));
    endShape();

    // left pulley

    push();
    translate(5,-(-17.5+swingAng*1.85));

    fill("grey");
    beginShape();
    vertex((w/2)-(rectW/2)-2.5,(h/2)-(rectH*2.5));
    vertex((w/2)-(rectW/2)+7.5,(h/2)-(rectH*2.5));
    vertex((w/2)-(rectW/2)+3,(h/2)-(rectH*2.5)+5);
    vertex((w/2)-(rectW/2)+3,(h/2)-(rectH*2.5)+15);
    vertex((w/2)-(rectW/2)-2.5,(h/2)-(rectH*2.5)+15);
    endShape(CLOSE);

    stroke("grey");
    strokeWeight(2);
    beginShape();
    vertex((w/2)-(rectW/2)+2.5,(h/2)-(rectH*2.5)+15);
    vertex((w/2)-(rectW/2)+2.5,(h/2)-(rectH*2.5)+30);
    endShape();

    beginShape();
    vertex((w/2)-(rectW/2)-2,(h/2)-(rectH*2.5)+15);
    vertex((w/2)-(rectW/2)-2,(h/2)-(rectH*2.5)+30);
    endShape();

    noStroke();
    beginShape();
    vertex((w/2)-(rectW/2)-4,(h/2)-(rectH*2.5)+30);
    vertex((w/2)-(rectW/2)+5,(h/2)-(rectH*2.5)+30);
    vertex((w/2)-(rectW/2)+5,(h/2)-(rectH*2.5)+55);
    vertex((w/2)-(rectW/2)-4,(h/2)-(rectH*2.5)+55);
    endShape(CLOSE);

    pop();

    // left section

    fill("black");
    rect((w/2)-(rectW/2)-5,(h/2)-(rectH*2.5)+55,20,5);
    rect((w/2)-(rectW/2)-5,(h/2)-(rectH*2.5)+55,5,35);
    rect((w/2)-(rectW/2)+10,(h/2)-(rectH*2.5)+55,5,35);
    rect((w/2)-(rectW/2)-25,(h/2)-(rectH*2.5)+90,40,50);

    fill("sienna");
    noStroke();
    triangle((w/2)-(rectW/2)-5,(h/2)-(rectH*2.5)+90,(w/2)-(rectW/2)-15,(h/2)-(rectH*2.5)+80,(w/2)-(rectW/2)-5,(h/2)-(rectH*2.5)+70);
    triangle((w/2)-(rectW/2)+15,(h/2)-(rectH*2.5)+75,(w/2)-(rectW/2)+25,(h/2)-(rectH*2.5)+65,(w/2)-(rectW/2)+15,(h/2)-(rectH*2.5)+55);

    // oil tower

    var sRectH = rectH/2;
    var sRectW = rectW/8;

    fill("black");
    rect((w/2)-(sRectW/2),(h/2)-(rectH*1.5)+(circR),sRectW,sRectH,2);

    var sideRectW = 4;
    var sideRectH = 100;

    push();

    translate((w/2)-(sRectW/2),(h/2)-(rectH*1.5)+(circR)+sRectH);
    rotate(10*Math.PI/180);
    translate(-((w/2)-(sRectW/2)),-((h/2)-(rectH*1.5)+(circR)+sRectH));

    rect((w/2)-(sRectW/2),(h/2)-(rectH*1.5)+(circR)+sRectH-10,sideRectW,sideRectH);

    pop();

    push();
    
    translate((w/2)+(sRectW/2),(h/2)-(rectH*1.5)+(circR)+sRectH);
    rotate(-10*Math.PI/180);
    translate(-((w/2)+(sRectW/2)),-((h/2)-(rectH*1.5)+(circR)+sRectH));

    rect((w/2)+(sRectW/2)-sideRectW,(h/2)-(rectH*1.5)+(circR)+sRectH-10,sideRectW,sideRectH);

    pop();

    rect((w/2)-(sRectW/2),(h/2)-(rectH*0.25)+(circR),sRectW,sRectH/2);

    rect((w/2)-(sRectW*1.25/2),(h/2)+(rectH*0.75)+(circR),sRectW*1.25,sRectH/2);

    rect((w/2)-(sRectW*1.7/2),(h/2)+(rectH*1.75)+(circR),sRectW*1.7,sRectH/2);

    // bottom sands

    noStroke();
    fill("burlywood");
    rect(0,(h/2)-(rectH*1.5)+(circR)+sRectH-15+sideRectH,w,h*0.4);

    // hole

    fill("black");
    arc(pX+(rectW/2)+10,pY+(rectH*5)+1,circR*2,circR*0.66,0,Math.PI);

    // wires

    noFill();
    strokeWeight(3);
    stroke("black");
    
    beginShape();
    vertex((w/2)-(rectW/2)-25,(h/2)-(rectH*2.5)+125);
    vertex(0,(h/2)-(rectH*2.5)+125);
    endShape();

    strokeWeight(1);
    noStroke();
    fill("yellow");

    arc((w/2)-(rectW/2)-25-frames%((w/2)-(rectW/2)-25),(h/2)-(rectH*2.5)+125,3,3,0,Math.PI*2);
    arc((w/2)-(rectW/2)-30-frames%((w/2)-(rectW/2)-25),(h/2)-(rectH*2.5)+125,3,3,0,Math.PI*2);

    frames++;

}

function windowResized(){

    w = window.innerWidth;
    h = window.innerHeight - 50;
    resizeCanvas(w,h);

}

// Source: https://cdn2.vectorstock.com/i/1000x1000/66/46/oil-well-cartoon-vector-11696646.jpg