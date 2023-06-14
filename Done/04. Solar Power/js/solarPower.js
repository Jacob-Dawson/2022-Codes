// js goes here

var w = window.innerWidth;
var h = window.innerHeight - 50;
var fr = 60;
var frames = 0;
var colorArr;

function setup(){

    createCanvas(w,h);
    frameRate(fr);

}

function draw(){

    clear();

    strokeWeight(1);

    // skyline

    fill("skyblue");
    rect(0,0,w,h/2);

    fill("forestgreen");
    rect(0,h/2,w,h/2);

    // sun

    push();
    translate(0,-h/2.5);

    stroke("rgba(0,0,0,0.35)")
    fill("yellow");

    circle(w/2,h/2,50);

    // sun rays

    for(let i=0; i<8; i++){

        push();
        translate(w/2,h/2);
        rotate(((i*45)+((frames/2)%360))*Math.PI/180);
        translate(-w/2,-h/2);
        triangle((w/2)-8,(h/2)-30,(w/2),(h/2)-45,(w/2)+8,(h/2)-30);
        pop();

    }

    pop();

    

    // solar panel

    stroke("black");
    fill("rgb(192,192,192)");
    rect((w/2)-20,h/2,30,80);

    push();

    translate(w/2,h/2);
    shearX(Math.PI/5);
    translate(-w/2,-h/2);

    stroke("black");
    fill("white");
    rect((w/2)-50,(h/2)-50,100,100,5);

    var buffer = 2;
    var panelStartX = (w/2)-50;
    var panelStartY = (h/2)-50;
    var sPanelWidth = (100/10)-1;

    fill("blue");
    noStroke();

    var counter = 0;
    
    if(frames%300 == 0){

        colorArr = loadColours();

    }

    for(let i=0; i<9; i++){

        for(let j=0; j<9; j++){

            fill(""+colorArr[counter]);

            rect(panelStartX+2+(buffer+sPanelWidth)*i,panelStartY+2+(buffer+sPanelWidth)*j,sPanelWidth,sPanelWidth);

            counter++;

        }

    }

    pop();

    // wire

    strokeWeight(3.5);
    strokeCap("butt");
    stroke("black");
    line((w/2)+10,(h/2)+79,w,(h/2)+79);

    // charges

    fill("yellow");
    strokeWeight(1);
    noStroke();
    rect(((w/2)+10)+(((frames%300)/300)*((w/2)-10)),(h/2)+77,2,3.5);
    rect(((w/2)+10)+(((frames%300)/300)*((w/2)-10))+5,(h/2)+77,2,3.5);

    rect(((w/2)+10)+((((frames+150)%300)/300)*((w/2)-10)),(h/2)+77,2,3.5);
    rect(((w/2)+10)+((((frames+150)%300)/300)*((w/2)-10))+5,(h/2)+77,2,3.5);

    // sun energy

    fill("rgba(255,255,0,0.3)");
    noStroke();

    rect((w/2)-25,(h/2)-(h/2.5),50,(h/2.5)*((frames%300)/300));

    frames++;

}

function loadColours(){

    var result = [];

    for(let i=0; i<9; i++){

        for(let j=0; j<9; j++){

            result.push(""+possibleColours());

        }

    }

    return result;

}

function possibleColours(){

    var cols = ["blue","midnightblue","navy"];

    return cols[Math.floor(Math.random()*cols.length)];

}

function windowResized(){

    w = window.innerWidth;
    h = window.innerHeight - 50;
    resizeCanvas(w,h);

}