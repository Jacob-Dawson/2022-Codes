// js goes here

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var w = 600;
var h = 600;
var frames = 0;

anInterval = setInterval(function(){

    draw();
    frames++;

},10);

function draw(){

    context.clearRect(0,0,w,h);

    // Background

    context.fillStyle = "skyblue";

    context.beginPath();
    context.rect(0,0,w,h/2);
    context.closePath();
    context.fill();

    context.fillStyle = "green";

    context.beginPath();
    context.rect(0,h/2,w,h/2);
    context.closePath();
    context.fill();

    // Dome

    context.fillStyle = "silver";
    
    context.beginPath();
    context.arc(w/2,h/2,100,-220*Math.PI/180,40*Math.PI/180);
    context.fill();
    context.closePath();
    context.stroke();

    // Conveyor Belt

    context.save();
    context.translate(0,-80);

    context.save();
    context.translate((w/2),(h/2));
    context.rotate(20*Math.PI/180);
    context.translate(-(w/2),-(h/2));

    var cBeltH = 10;
    var cBeltW = 400;

    context.fillStyle = "black";

    context.beginPath();
    context.rect(w/2,(h/2)-(cBeltH/2),cBeltW,cBeltH)
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc((w/2),(h/2)-(cBeltH/2),15,0,Math.PI*2);
    context.fill();
    context.closePath();

    context.restore();

    // Wood chips

    context.save();
    context.translate(w/2,h/2);
    context.rotate(20*Math.PI/180);
    context.translate(-(w/2),-(h/2));

    var chipH = 8;
    var chipW = 20;

    context.strokeStyle = "sienna";
    context.fillStyle = "sienna";

    for(let i=0; i<12; i++){

        context.beginPath();
        context.rect((w/2)+(chipW*i*1.5)-((frames*0.5)%15),(h/2)-15,chipW,chipH);
        context.closePath();
        context.fill();
        context.stroke();

        context.beginPath();
        context.rect((w/2)+(chipW*i*1.5)-((frames*0.5)%15)+chipW/1.5,(h/2)-(chipH/2)-16,chipW,chipH);
        context.closePath();
        context.fill();
        context.stroke();

    }

    context.restore();

    context.restore();

    // Electricity / wire

    context.save();

    context.lineWidth = 10;

    context.beginPath();
    context.moveTo((w/2)-100,(h/2)+50);
    context.lineTo(0,(h/2)+50);
    context.stroke();

    context.fillStyle = "yellow";

    context.beginPath();
    context.arc((w/2)-100-(frames%215),(h/2)+50,5,0,Math.PI*2);
    context.fill();
    context.closePath();

    context.beginPath();
    context.arc((w/2)-100-(frames%215)+15,(h/2)+50,5,0,Math.PI*2);
    context.fill();
    context.closePath();

    context.restore();    

    // Smoke

    context.save();
    context.translate(205,165);

    var smokeR = 15;

    context.fillStyle = "rgba(128,128,128,0.4)";

    for(let i=0; i<20; i++){

        if(i%2 == 0){

            var pX = i*6;
            var pY = i*6;

            context.beginPath();
            context.arc(-((pX+(0.5*frames))%120),-((pY+(0.5*frames))%120),smokeR,0,Math.PI*2);
            context.closePath();
            context.fill();

        } else {

            var pX = i*6;
            var pY = i*6;

            context.beginPath();
            context.arc(-((pX+(0.5*frames))%120)+10,-((pY+(0.5*frames))%120)-10,smokeR,0,Math.PI*2);
            context.closePath();
            context.fill();

        }

    }

    context.restore();

    // Chimney

    context.save();
    context.translate(200,170);

    var chimneyH = 200;
    var chimneyW = 30;

    context.strokeStyle = "black";
    context.fillStyle = "silver";

    context.beginPath();
    context.rect(0,0,chimneyW,chimneyH);
    context.closePath();
    context.fill();
    context.stroke();

    context.fillStyle = "red";

    context.beginPath();
    context.rect(0,0,chimneyW,chimneyH*0.15);
    context.closePath();
    context.fill();
    context.stroke();

    context.restore();

}

/*

https://www.idom.com/wp-content/uploads/2019/04/IBERDROLA_Detail_Engineering_Biomass_Canada_01_Idom.jpg

https://thumbs.dreamstime.com/z/cycle-biomass-energy-as-direct-combustion-power-plant-outline-diagram-cycle-biomass-energy-as-direct-combustion-power-226799932.jpg

*/