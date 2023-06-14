// js goes here

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var w = canvas.width;
var h = canvas.height;
var frames = 0;
var sampleSize = 500;
var numSet = buildArr(0,190,sampleSize);
var colors = ["red","blue","green","yellow","orange","grey","purple","cyan","black"];
var randCol = colors[Math.floor(Math.random()*colors.length)];

anInterval = setInterval(function(){

    draw();
    frames++;

    if(frames == 1000){

        frames = 0;
        numSet = buildArr(0,Math.ceil(Math.random()*150)+50,sampleSize);
        randCol = colors[Math.floor(Math.random()*colors.length)];

    }

},10);

function draw(){

    context.clearRect(0,0,w,h);

    context.strokeStyle = "black";
    context.lineWidth = "2";

    context.beginPath();
    context.moveTo(50,h-50);
    context.lineTo(550,h-50);
    context.stroke();

    context.beginPath();
    context.moveTo(50,50);
    context.lineTo(50,h-50);
    context.stroke();

    for(let i=0; i<=10; i++){

        context.beginPath();
        context.moveTo(50,550-(i*50));
        context.lineTo(40,550-(i*50));
        context.stroke();

        context.beginPath();
        context.moveTo(50+(i*50),550);
        context.lineTo(50+(i*50),560);
        context.stroke();

    }

    var avNumSet = getAverage(numSet,1+(frames));

    context.save();
    context.translate(50,550);

    context.strokeStyle = ""+randCol;
    context.fillStyle = ""+randCol;

    context.beginPath();
    context.moveTo(0,0);

    for(let i=0; i<(numSet.length-1); i++){

        var percent = ((i+1)/numSet.length)*(sampleSize);
        context.lineTo(0+percent,0-(avNumSet[i+1]*5));

    }

    context.lineTo(500,0);
    context.lineTo(0,0);
    context.fill();

    context.restore();

    for(let i=0; i<=10; i++){

        var xBuffer = 50;
        var yBuffer = 50;

        // y axis
        
        context.beginPath();
        context.textBaseline = "middle";
        context.textAlign = "right";
        context.font = "25px Arial";
        context.fillText(""+(i*10),xBuffer-10,-(50*i)+(h-yBuffer));
        context.closePath();

        // x axis

        context.beginPath();
        context.textBaseline = "middle";
        context.textAlign = "center";
        context.font = "25px Arial";
        context.fillText(""+(i*10),(50*i)+(xBuffer),(h-yBuffer)+25);
        context.closePath();

    }

}

function buildArr(min,max,amount){

    var result = [];

    for(let i=0; i<amount; i++){

        var randNum = Math.floor(Math.random()*(max-min+1))+min;
        result.push(randNum);

    }

    return result;

}

function getAverage(arr,scope){

    if(scope > arr.length){

        scope = arr.length;

    }

    var result = [];

    for(let i=0; i<(arr.length); i++){
        
        var startIndex = (i+1-scope) < 0 ? 0 : (i+1-scope);
        var endIndex = i+1;

        var roundResult = Math.round(arr.slice(startIndex,endIndex).reduce(getSum)/scope);

        result.push(roundResult);

    }

    return result;

}

function getSum(a,b){

    return (a+b);

}