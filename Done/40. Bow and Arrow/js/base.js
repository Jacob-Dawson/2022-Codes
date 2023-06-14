// js goes here

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var x;
var y;
var anInterval;
var time = 0;

anInterval = setInterval(function(){

    drawCanvas(time);
    time++;

    if(time >= 200){

        time = 0;

    }

},10);

function drawCanvas(t){

    var arrowT = 0;
    var bowStringsT = 0;
    var mult = 10;

    if(t >= 100){

        arrowT = t-100+((t*mult)%(mult*100));

        if(t >= 115){

            bowStringsT = 100;

        } else {

            bowStringsT = (t-100)+((t*mult)%(mult*100));

        }

    } else {

        arrowT = 100-t;
        bowStringsT = 100-t;

    }

    x = 600;
    y = 600;

    context.clearRect(0,0,x,y);

    context.save();
    context.translate(-x/3,-y/4);
    context.scale(1.5,1.5);
    context.translate(0,0);

    context.strokeStyle = "black";
    context.lineWidth = "2";

    // * bow

    var gHeight = 35;
    var gWidth = 18;

    var bowConnection = x/4;

    // grip

    context.fillStyle = "chocolate";

    context.beginPath();
    context.rect((x/2)+55,(y/2)-(gHeight/2),gWidth,gHeight);
    context.closePath();
    context.fill();
    context.stroke();

    // back / belly

    context.fillStyle = "brown";
    
    context.beginPath();
    context.moveTo((x/2)+55,(y/2)-(gHeight/2));
    context.lineTo((x/2)+65,(y/2)-(gHeight/2)-15);
    context.lineTo((x/2)+5,(y/2)-(x/4)+20);
    context.lineTo((x/2),(y/2)-(x/4));
    context.lineTo((x/2)+20,(y/2)-(x/4)+30);
    context.lineTo((x/2)+80,(y/2)-(gHeight/2)-15);
    context.lineTo((x/2)+55+gWidth,(y/2)-(gHeight/2));
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo((x/2)+55,(y/2)+(gHeight/2));
    context.lineTo((x/2)+65,(y/2)+(gHeight/2)+15);
    context.lineTo((x/2)+5,(y/2)+(x/4)-20);
    context.lineTo((x/2),(y/2)+(x/4));
    context.lineTo((x/2)+20,(y/2)+(x/4)-30);
    context.lineTo((x/2)+80,(y/2)+(gHeight/2)+15);
    context.lineTo((x/2)+55+gWidth,(y/2)+(gHeight/2));
    context.closePath();
    context.fill();
    context.stroke();

    // string (front)

    context.strokeStyle = "rgba(0,0,0,0.8)";
    context.lineWidth = "3";

    context.beginPath();
    context.moveTo((x/2),(y/2)-bowConnection+5);
    context.lineTo((x/2)-(x/6)-8+bowStringsT,(y/2)); // +8
    context.stroke();

    // * Arrow

    context.lineWidth = "2";

    context.strokeStyle = "black";

    var sLength = x/3;
    var sHeight = 8;

    var hHeight = 30;
    var hWidth = hHeight*0.75;
    var hBuffer = 30;

    var tAngle = 120;
    var tLength = 30;
    var tBuffer = 8;
    var tHeight = 10;
    
    context.save();
    context.translate(arrowT-16,0);

    context.fillStyle = "sienna";

    // -- shaft

    context.beginPath();
    context.rect((x/2)-(0.5*sLength),(y/2)-(0.5*sHeight),sLength,sHeight);
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo((x/2)-(0.5*sLength),(y/2));
    context.lineTo((x/2)-(0.5*sLength)+10,(y/2));
    context.closePath();
    context.stroke();

    // -- tail / fletching

    context.fillStyle = "red";

    context.beginPath();
    context.moveTo((x/2)-(0.5*sLength)+tBuffer,(y/2)-(0.5*sHeight));
    context.lineTo((x/2)-(0.5*sLength),(y/2)-(0.5*sHeight)-tHeight);
    context.lineTo((x/2)-(0.5*sLength)+tLength,(y/2)-(0.5*sHeight)-tHeight);
    context.lineTo((x/2)-(0.5*sLength)+tLength+tBuffer,(y/2)-(0.5*sHeight));
    context.closePath();
    context.fill();
    context.stroke();

    context.beginPath();
    context.moveTo((x/2)-(0.5*sLength)+tBuffer,(y/2)+(0.5*sHeight));
    context.lineTo((x/2)-(0.5*sLength),(y/2)+(0.5*sHeight)+tHeight);
    context.lineTo((x/2)-(0.5*sLength)+tLength,(y/2)+(0.5*sHeight)+tHeight);
    context.lineTo((x/2)-(0.5*sLength)+tLength+tBuffer,(y/2)+(0.5*sHeight));
    context.closePath();
    context.fill();
    context.stroke();

    for(let i=1; i<=3; i++){

        context.save();
        context.translate(7.5*i,0);
        context.beginPath();
        context.moveTo((x/2)-(0.5*sLength)+tBuffer,(y/2)-(0.5*sHeight));
        context.lineTo((x/2)-(0.5*sLength),(y/2)-(0.5*sHeight)-tHeight);
        context.stroke();
        context.restore();

        context.save();
        context.translate(7.5*i,0);
        context.beginPath();
        context.moveTo((x/2)-(0.5*sLength)+tBuffer,(y/2)+(0.5*sHeight));
        context.lineTo((x/2)-(0.5*sLength),(y/2)+(0.5*sHeight)+tHeight);
        context.stroke();
        context.restore();

    }

    // -- head

    context.fillStyle = "silver";

    context.beginPath();
    context.moveTo((x/2)+(sLength/2)+hBuffer,(y/2));
    context.lineTo((x/2)+(sLength/2)-(hHeight)+hBuffer,(y/2)+(hWidth/2));
    context.lineTo((x/2)+(sLength/2)-(hHeight)+hBuffer,(y/2)-(hWidth/2));
    context.closePath();
    context.fill();
    context.stroke();

    context.restore();

    // string (back)
    
    context.strokeStyle = "rgba(0,0,0,0.8)";
    context.lineWidth = "3";

    context.beginPath();
    context.moveTo((x/2),(y/2)+bowConnection-5);
    context.lineTo((x/2)-(x/6)-8+bowStringsT,(y/2)); // +8
    context.stroke();

    context.restore();
    

}