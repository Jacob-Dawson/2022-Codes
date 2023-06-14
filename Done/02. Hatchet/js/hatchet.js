var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var w = canvas.width;
var h = canvas.height;
var anInterval;
var j = 0;
var k = 0;
var time = 0;

canvas.addEventListener("click",clickEvent,false);

drawCanvas(0,0);

function clickEvent(event){

    runAnimation();

}

function runAnimation(){

    j = 0;
    k = 0;
    time = 0;

    clearInterval(anInterval);

    anInterval = setInterval(function(){

        if(time < 90){

            drawCanvas(j,k);
            j++;

        } else if(time < 190){

            drawCanvas(j,k);
            k++;

        } else if(time >= 190 && time < 280){

            drawCanvas(j,k);
            j++;

        } else {

            drawCanvas(j,0);

        }

        time++;

    },1);

}

function drawCanvas(n,m){

    m = m*0.85;

    context.clearRect(0,0,w,h);

    context.globalAlpha = 1;

    // top half log

    context.save();
    context.translate(-140,100);

    context.fillStyle = "sienna";

    context.beginPath();
    context.ellipse((w/2)+m,(h/2),(h/18)+5,(h/9)+5,Math.PI/2,Math.PI/2,-Math.PI/2);
    context.closePath();
    context.fill();

    context.fillStyle = "sienna";

    context.beginPath();
    context.rect((w/2)-(((h/9)))-5+m,(h/2),2*((h/9)+5),175);
    context.closePath();
    context.fill();

    context.fillStyle = "burlywood";

    context.beginPath();
    context.ellipse((w/2)+m,h/2,h/18,h/9,Math.PI/2,Math.PI/2,-Math.PI/2);
    context.closePath();
    context.fill();

    context.fillStyle = "burlywood";

    context.beginPath();
    context.rect((w/2)-(((h/9)))+m,(h/2),2*((h/9)),175);
    context.closePath();
    context.fill();

    context.restore();

    context.save();
    context.translate(200,0);

    context.save();
    context.translate(290,410);
    context.rotate(-90*(Math.sqrt(Math.pow(Math.sin(n*Math.PI/180),2),2))*Math.PI/180);
    context.translate(-290,-410);

    // handle

    var handleW = 35;
    var handleH = 375;

    context.fillStyle = "burlywood";
    context.strokeStyle = "rgba(0,0,0,0.7)";

    context.beginPath();
    context.rect((w/2)-(handleW/2)-10,55,handleW,handleH);
    context.closePath();
    context.fill();
    context.stroke();

    // hatchet head outline

    var angStart = 160;
    var angEnd = 200;
    var angOffset = 2.5;

    context.fillStyle = "silver";
    context.strokeStyle = "rgba(0,0,0,0.7)";

    context.save();
    context.translate(0,-210);

    context.beginPath();
    context.moveTo((w/2)-40,(h/2)+30);
    context.lineTo((w/2)+(w/4)*Math.cos(angStart*Math.PI/180),(h/2)+(h/4)*Math.sin(angStart*Math.PI/180));
    context.arc(w/2,h/2,w/4,angStart*Math.PI/180,angEnd*Math.PI/180);
    context.lineTo((w/2)+(w/4)*Math.cos(angEnd*Math.PI/180),(h/2)+(h/4)*Math.sin(angEnd*Math.PI/180));
    context.lineTo((w/2)-40,(h/2)-30);
    context.lineTo((w/2)+20,(h/2)-30);
    context.lineTo((w/2)+20,(h/2)+30);
    context.closePath();
    context.fill();
    context.stroke();

    // hatchet head

    context.fillStyle = "red";

    context.beginPath();
    context.moveTo((w/2)-40,(h/2)+30);
    context.lineTo((w/2)+(w*0.2)*Math.cos((angStart-angOffset)*Math.PI/180),(h/2)+(h*0.2)*Math.sin((angStart-angOffset)*Math.PI/180));
    context.arc(w/2,h/2,w*0.2,(angStart-angOffset)*Math.PI/180,(angEnd+angOffset)*Math.PI/180);
    context.lineTo((w/2)+(w*0.2)*Math.cos((angEnd+angOffset)*Math.PI/180),(h/2)+(h*0.2)*Math.sin((angEnd+angOffset)*Math.PI/180));
    context.lineTo((w/2)-40,(h/2)-30);
    context.lineTo((w/2)+20,(h/2)-30);
    context.lineTo((w/2)+20,(h/2)+30);
    context.closePath();
    context.fill();

    context.restore();

    context.restore();

    context.restore();

    context.fillStyle = "rgb(117, 202, 84)";

    context.beginPath();
    context.arc(490,410,10,0,Math.PI*2);
    context.closePath();
    context.fill();
    context.stroke();

    // bottom half log

    context.globalAlpha = 1;

    context.save();
    context.translate(-140,100);

    context.fillStyle = "sienna";

    context.beginPath();
    context.rect((w/2)-(((h/9)))-5-m,(h/2),2*((h/9)+5),175);
    context.closePath();
    context.fill();

    context.fillStyle = "sienna";

    context.beginPath();
    context.ellipse((w/2)-m,(h/2),(h/18)+5,(h/9)+5,Math.PI/2,-Math.PI/2,Math.PI/2);
    context.closePath();
    context.fill();

    context.fillStyle = "burlywood";

    context.beginPath();
    context.ellipse((w/2)-m,h/2,h/18,h/9,Math.PI/2,-Math.PI/2,Math.PI/2);
    context.closePath();
    context.fill();

    context.restore();

    context.fillStyle = "black";

    context.font = "32px Open Sans";
    context.textBaseline = "bottom";
    context.textAlign = "right";
    context.fillText("Click on the image!",w,h-20);

}