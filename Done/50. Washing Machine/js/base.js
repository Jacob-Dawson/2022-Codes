// js goes here

// https://pics.clipartpng.com/midle/White_Washing_Machine_PNG_Clip_Art-3183.png

let w;
let h;
let time = 0;
let spinMax = 10;
let spinMin = 1;
let spinSpeed = Math.ceil(Math.random()*spinMax);
let spinPos = 0;

function setup(){

    createCanvas(windowWidth, windowHeight-50);
    w = windowWidth;
    h = windowHeight-50;

}

function draw(){

    clear();

    background("black");

    let wMachineW = 100;
    let wMachineH = 100;
    let wMachineX = (w/2)-wMachineW/2;
    let wMachineY = (h/2)-wMachineH/2;
    let doorR = 60;
    let powderW = 25;
    let powderH = 7.5;
    let powderX = 5;
    let powderY = 12.5;
    let dialR = 12;
    let screenW = 35;
    let screenH = 15;
    let screenX = (wMachineX+wMachineW-screenW)-2.5;
    let screenY = (wMachineY+7.5);
    let scaleF = 1.25;

    push();
    translate(wMachineX*(scaleF),wMachineY*(scaleF));
    scale(scaleF);
    translate(-wMachineX*(scaleF),-wMachineY*(scaleF));

    // base

    fill(255);
    stroke(0);

    // machine

    fill("white");
    rect(wMachineX,wMachineY,wMachineW,wMachineH);

    // door

    circle(w/2,(h/2)+10,doorR);

    fill("rgba(128,128,128,0.5)")
    circle((w/2),(h/2)+10,doorR-10);

    fill("white");

    // view

    push();

    fill("white");
    clip(mask);


    circle(w/2,(h/2)+10,doorR);
    pop();

    push();

    fill("rgba(255,255,255,0.9");
    clip(mask2);

    circle(w/2,(h/2)+10,doorR-10);
    pop();

    fill("rgba(0,255,255,0.05)");

    circle(w/2,(h/2)+10,doorR-10);

    // handle

    fill("white");
    arc((w/2)+30,(h/2)+10,35,35,105*Math.PI/180,255*Math.PI/180);

    // top panel

    line(wMachineX,wMachineY+(wMachineH*0.05),wMachineX+wMachineW,wMachineY+(wMachineH*0.05));
    line(wMachineX,wMachineY+(wMachineH*0.25),wMachineX+wMachineW,wMachineY+(wMachineH*0.25));
    
    line(wMachineX+(wMachineW*0.35),wMachineY+wMachineH*0.05,wMachineX+(wMachineW*0.35),wMachineY+wMachineH*0.25);

    // powder input

    rect(wMachineX+powderX,wMachineY+powderY,powderW,powderH);

    // dial

    fill("grey");
    circle(wMachineX+(wMachineW*0.5),wMachineY+15,dialR)

    // screen

    fill("black");
    rect(screenX,screenY,screenW,screenH,5)

    //

    time+=2;

    if(time%100 == 0){

        changeSpeed(spinSpeed,spinMax,spinMin);

    }


    spinPos = spinPos + spinSpeed;

    pop();

}

function mask(){

    let doorR = 60;
  
    for(let i=0; i<4; i++){

        fill("grey");

        push();
        translate((w/2),(h/2)+10);
        rotate((i*(360/4)+spinPos)*Math.PI/180);
        translate(-(w/2),-((h/2)+10));
        rect((w/2),(h/2)+7.5,(doorR-10)/2,5);
        pop();

    }

    fill("grey");

    circle(w/2,(h/2)+10,10);

}

function mask2(){

    let doorR = 60;
    let heightDiff = 5*Math.sin((time/4)*Math.PI/180);

    fill("rgba(0,255,255,0.4)");

    rect((w/2)-((doorR-10)/2),(h/2)+10+heightDiff,doorR-10,doorR+20);

}

function changeSpeed(sp,maxSpeed,minSpeed){

    let result;
    let possibleSpeeds = [-1,0,1];

    result = sp + possibleSpeeds[Math.floor(Math.random()*possibleSpeeds.length)]

    if(result > maxSpeed){

        result = maxSpeed;

    } else if(result < minSpeed){

        result = minSpeed

    }


    return result;

}

function windowResized(){

    resizeCanvas(windowWidth, windowHeight-50);
    w = windowWidth;
    h = windowHeight-50;

}
