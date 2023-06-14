// js goes here

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var w = canvas.width;
var h = canvas.height;
var frameNo = 0;

anInterval = setInterval(function(){

    draw();
    frameNo++;

},25);

function draw(){

    context.clearRect(0,0,w,h);

    context.globalCompositeOperation = "source-over";
    
    // spanner

    context.save();
    context.translate(0,20);
    context.save();
    context.translate((w/2),(h/2)-25);
    context.rotate(-(frameNo%60)*Math.PI/180);
    context.translate(-((w/2)),-((h/2)-25));

    context.fillStyle = "rgb(192,192,192)";
    context.strokeStyle = "rgba(0,0,0,0.55)";

    var spannerHeadR = 40;
    var spannerW = 35;
    var spannerH = 270;

    // - spannerbody

    context.save();
    context.translate(-(spannerW/2)+w/2,h/2);

    context.beginPath();
    context.moveTo(0,0);
    context.lineTo(spannerW,0);
    context.lineTo(spannerW,spannerH);
    context.lineTo(0,spannerH);
    context.closePath();
    context.fill();
    context.stroke();

    context.restore();

    // - spannerhead

    context.save();
    context.translate(w/2,(h/2)-(spannerHeadR/2));

    context.beginPath();
    context.arc(0,0,spannerHeadR,0,Math.PI*2);
    context.closePath();
    context.fill();
    context.stroke();

    context.restore();

    // - spannercutout

    context.save();
    context.translate((w/2)+2.5,(h/2)-20);

    context.globalCompositeOperation = "destination-out";

    context.beginPath();
    context.moveTo(20,0);
    context.lineTo(20,15);
    context.arc(15,10,5,0,Math.PI*2);
    context.lineTo(-15,15);
    context.arc(-15,10,5,0,Math.PI*2);
    context.lineTo(-20,0);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.rect(-20,-42,40,42);
    context.closePath();
    context.fill();
    context.stroke();

    context.globalCompositeOperation = "source-over";

    context.beginPath();
    context.moveTo(20,0);
    context.lineTo(20,15);
    context.arc(15,10,5,0,Math.PI*2);
    context.lineTo(-15,15);
    context.arc(-15,10,5,0,Math.PI*2);
    context.lineTo(-20,0);
    context.closePath();
    context.stroke();

    context.beginPath();
    context.moveTo(20,-35);
    context.lineTo(20,0);
    context.moveTo(-20,-35);
    context.lineTo(-20,0);
    context.stroke();

    context.restore();

    // - spanner bottom

    context.save();

    context.globalCompositeOperation = "source-over";

    context.translate((w/2),(h/2)+(spannerH)-20);
    
    context.beginPath();
    context.arc(0,0,30,0,Math.PI*2);
    context.closePath();
    context.fill();
    context.stroke();

    context.restore();

    // - spannerhole

    context.save();
    context.translate((w/2),(h/2)+(spannerH)-20);

    context.globalCompositeOperation = "destination-out";

    context.beginPath();
    context.arc(0,0,25,0,Math.PI*2);
    context.closePath();
    context.fill();
    context.stroke();

    context.restore();

    context.save();

    context.globalCompositeOperation = "source-over";

    context.translate((w/2),(h/2)+(spannerH)-20);

    var amount = 18;
    var angle = 360/amount;
    var radius = 25;

    for(let i=0; i<amount; i++){

        var pX = radius*Math.cos((-90+(i*angle))*Math.PI/180);
        var pY = radius*Math.sin((-90+(i*angle))*Math.PI/180);

        context.beginPath();
        context.arc(pX,pY,4,0,Math.PI*2);
        context.fill();

    }
    
    context.beginPath();
    context.arc(0,0,25,0,Math.PI*2);
    context.closePath();
    context.stroke();

    context.restore();

    context.restore();


    context.restore();

    // nut

    context.save();

    context.translate(w/2,h/2);
    context.rotate(-(frameNo%60)*Math.PI/180);
    context.translate(-w/2,-h/2);

    context.save();

    context.globalCompositeOperation = "source-over";
    context.fillStyle = "rgb(100,100,100)";

    var nutRadius = 22;

    context.translate((w/2)+2.5,(h/2)-(nutRadius)+20);

    context.beginPath();

    var ang = 360/6;
    
    for(let i=0; i<6; i++){

        var pX = nutRadius*Math.cos((ang*i)*Math.PI/180);
        var pY = nutRadius*Math.sin((ang*i)*Math.PI/180);

        if(i == 0){

            context.moveTo(pX,pY);

        } else {

            context.lineTo(pX,pY);

        }

    }

    context.closePath();
    context.fill();

    context.globalCompositeOperation = "destination-out";

    context.beginPath();
    context.arc(0,0,nutRadius*0.5,0,Math.PI*2);
    context.closePath();
    context.fill();

    context.restore();

    context.restore();

    context.globalCompositeOperation = "destination-over";

    context.fillStyle = "burlywood";
    context.beginPath();
    context.rect(0,50,w,h-100);
    context.closePath();

    context.fill();
    context.stroke();

}