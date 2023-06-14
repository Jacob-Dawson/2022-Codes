// js goes here

//alert("epilepsy warning, please close this program if you have severe reactions to flashing lights");

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

var w = canvas.width;
var h = canvas.height;

var pendulumAmount = 1;

var pendumlumColours = ["blue","green","red","purple","yellow","orange","pink","khaki","black","white","brown","cyan"];
var r1 = (2/13)*w;
var r2 = (2/13)*w;
var r3 = (2/13)*w;
var m1 = 40; //40
var m2 = 10; //40
var m3 = 10; //40
var theta1 = 0.75*Math.PI;
var theta2 = 0.75*Math.PI;
var theta3 = 1*Math.PI;
var theta1Dot = 0;
var theta2Dot = 0;
var theta3Dot = 0;
var g = -0.005;
var frameNo = 0;

var prevX = buildArray(null,pendulumAmount);//[[],[],[]]; // needs 2d arr
var prevY = buildArray(null,pendulumAmount);//[[],[],[]]; // needs 2d arr

//a1 = buildRadians(a1);
//a2 = buildRadians(a2);

anInterval = setInterval(function(){

    draw(frameNo);
    frameNo++;

    if(frameNo >= 6000){

        frameNo = 0;
        theta1 = 0.75*Math.PI;
        theta2 = 0.75*Math.PI;
        theta3 = 1*Math.PI;
        theta1Dot = 0;
        theta2Dot = 0;
        theta3Dot = 0;
        prevX = buildArray(null,pendulumAmount);
        prevY = buildArray(null,pendulumAmount);

    }

},10);

function draw(frame){

    timeStep(frame*0.0005);
    var coords = getCoords();
    var rectW = 20;

    context.lineWidth = "3";

    context.clearRect(0,0,w,h);

    context.save();
    context.translate(w/2,h/2);

    for(let j=0; j<pendulumAmount; j++){

        // set conditions of the positions

        var x1 = r1 * coords["x1"];
        var y1 = r1 * coords["y1"];

        var x2 = r2 * coords["x2"];
        var y2 = r2 * coords["y2"];

        var x3 = r3 * coords["x3"];
        var y3 = r3 * coords["y3"];

        // trails

        context.globalCompositeOperation = "destination-over";

        context.strokeStyle = ""+pendumlumColours[j];

        prevX[j].push(x3); // x3
        prevY[j].push(y3); // y3

        if(prevX[j].length > 1){

            if(prevX[j].length > 800){ // creates the cut off for the trail

                prevX[j].shift();
                prevY[j].shift();

            }

            for(let i=1; i<prevX[j].length; i++){ // creates the longer trail

                context.beginPath();
                context.moveTo(prevX[j][i],prevY[j][i]);
                context.lineTo(prevX[j][i-1],prevY[j][i-1]);
                context.stroke();

            }

        }

        context.globalCompositeOperation = "source-over";

        // draw pendulum

        context.shadowBlur = 15;
        context.shadowColor = "black";
        context.strokeStyle = "black";
        context.fillStyle = "grey";

        context.save();
        context.rotate(-theta1);

        context.beginPath(); // first shaft
        context.rect(-rectW/2,-rectW/2,rectW,r1+(rectW/2));
        context.closePath();
        context.fill();
        context.stroke();

        context.restore();

        context.save(); // second shaft
        context.translate(x1,y1);
        context.rotate(-theta2);
        context.translate(-x1,-y1);
        context.beginPath();
        context.rect(-(rectW/2)+x1,y1-(rectW/2),rectW,r2+(rectW/2));
        context.fill();
        context.stroke();

        context.restore(); 
        
        context.save(); // third shaft
        context.translate(x2,y2);
        context.rotate(-theta3);
        context.translate(-x2,-y2);
        context.beginPath();
        context.rect(-(rectW/2)+x2,y2-(rectW/2),rectW,r3+(rectW/2));
        context.fill();
        context.stroke();

        context.restore();

        context.fillStyle = "white";

        context.beginPath(); // bolt on center point
        context.arc(0,0,5,0,Math.PI*2);
        context.closePath();
        context.fill();
        context.stroke();

        context.fillStyle = ""+pendumlumColours[j];
        context.strokeStyle = "black";

        context.beginPath(); // end circle
        context.arc(x3,y3,20,0,Math.PI*2);
        context.closePath();
        context.fill();
        context.stroke();

        context.fillStyle = "white";

        context.beginPath(); // 2nd bolt
        context.arc(x1,y1,5,0,Math.PI*2);
        context.closePath();
        context.fill();
        context.stroke();

        context.beginPath(); // 3rd bolt
        context.arc(x2,y2,5,0,Math.PI*2);
        context.closePath();
        context.fill();
        context.stroke();

    }

    

    context.restore();

}

function buildArray(v,amount){

    var result = [];

    for(var i=0; i<amount; i++){

        if(v == null){

            result.push([]);

        } else {
        
            result.push(v);

        }

    }

    return result;

}

function timeStep(dt){

    var y = [theta1,theta2,theta3,theta1Dot,theta2Dot,theta3Dot];
        
        var k1 = lagrangeRHS(y)
        var k2 = lagrangeRHS([
            y[0] + 0.5 * dt * k1[0], 
            y[1] + 0.5 * dt * k1[1], 
            y[2] + 0.5 * dt * k1[2], 
            y[3] + 0.5 * dt * k1[3],
            y[4] + 0.5 * dt * k1[4],
            y[5] + 0.5 * dt * k1[5]
        ])
        var k3 = lagrangeRHS([
            y[0] + 0.5 * dt * k2[0], 
            y[1] + 0.5 * dt * k2[1], 
            y[2] + 0.5 * dt * k2[2], 
            y[3] + 0.5 * dt * k2[3],
            y[4] + 0.5 * dt * k2[4],
            y[5] + 0.5 * dt * k2[5]
            
        ])
        var k4 = lagrangeRHS([
            y[0] + dt * k3[0], 
            y[1] + dt * k3[1], 
            y[2] + dt * k3[2], 
            y[3] + dt * k3[3],
            y[4] + dt * k3[4],
            y[5] + dt * k3[5]
        ])
        var R = [
            1/6 * dt * (k1[0] + 2*k2[0] + 2*k3[0] + k4[0]),
            1/6 * dt * (k1[1] + 2*k2[1] + 2*k3[1] + k4[1]),
            1/6 * dt * (k1[2] + 2*k2[2] + 2*k3[2] + k4[2]),
            1/6 * dt * (k1[3] + 2*k2[3] + 2*k3[3] + k4[3]),
            1/6 * dt * (k1[4] + 2*k2[4] + 2*k3[4] + k4[4]),
            1/6 * dt * (k1[5] + 2*k2[5] + 2*k3[5] + k4[5]),
        ]

        theta1 += R[0]
        theta2 += R[1]
        theta3 += R[2]
        theta1Dot += R[3] 
        theta2Dot += R[4] 
        theta3Dot += R[5] 

}

function lagrangeRHS([theta1,theta2,theta3,theta1Dot,theta2Dot,theta3Dot]) {

    var AinvB = math.multiply(Ainv(theta1, theta2, theta3),B(theta1, theta2, theta3, theta1Dot, theta2Dot, theta3Dot))
    return [theta1Dot, theta2Dot, theta3Dot, AinvB[0], AinvB[1], AinvB[2]]

}

function Ainv(theta1,theta2,theta3) {
    return math.inv(A(theta1, theta2, theta3));
}

function A(theta1,theta2,theta3) {
    return [
        [1, 2/3 * Math.cos(theta1 - theta2), 1/3 * Math.cos(theta1 - theta3)],
        [Math.cos(theta2 - theta1), 1, 1/2 * Math.cos(theta2 - theta3)],
        [Math.cos(theta3 - theta1), Math.cos(theta3 - theta2), 1]
    ];
}

function B(theta1, theta2, theta3, theta1Dot, theta2Dot, theta3Dot) {
    return [
        2/3 * Math.sin(theta2 - theta1) * theta2Dot ** 2 + 1/3 * Math.sin(theta3 - theta1) * theta3Dot ** 2 + g * Math.sin(theta1),
        Math.sin(theta1 - theta2) * theta1Dot ** 2 + 0.5 * Math.sin(theta3 - theta2) * theta3Dot ** 2 + g * Math.sin(theta2),
        Math.sin(theta1 - theta3) * theta1Dot ** 2 + Math.sin(theta2 - theta3) * theta2Dot ** 2 + g * Math.sin(theta3)
    ]
}

function getCoords(){

    return {
        'x1':Math.sin(theta1),
        'y1':Math.cos(theta1),
        'x2':Math.sin(theta1) + Math.sin(theta2),
        'y2':Math.cos(theta1) + Math.cos(theta2),
        'x3':Math.sin(theta1) + Math.sin(theta2) + Math.sin(theta3),
        'y3':Math.cos(theta1) + Math.cos(theta2) + Math.cos(theta3)
    }

}

// https://bl.ocks.org/travisdoesmath/3bb265c988c8c026b766e40181e9f398
// https://bl.ocks.org/travisdoesmath/32eea7d1cb47c18bfabcab65abc9b36c