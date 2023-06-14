// js goes here

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var w = canvas.width;
var h = canvas.height;
var dragging = false;
var pointsInfo = setPoints();
var snapInfo = [];
var targettedPattern = [];
var mouseX;
var mouseY;
var endToggle = false;

canvas.addEventListener("mousedown",dragPressEvent,false);
canvas.addEventListener("mousemove",dragMoveEvent,false);
canvas.addEventListener("mouseup",dragReleaseEvent,false);
canvas.addEventListener("mouseleave",dragLeaveEvent,false);

canvas.addEventListener("touchstart",dragPressEvent,false);
canvas.addEventListener("touchmove",dragMoveEvent,false);
canvas.addEventListener("touchend",dragReleaseEvent,false);
canvas.addEventListener("touchcancel",dragLeaveEvent,false);

anInterval = setInterval(function(){

    if(endToggle === false){

        draw();

    } else {

        setTimeout(function(){

            endToggle = false;

        },500);

    }

},10);

function draw(){

    context.clearRect(0,0,w,h);

    context.fillStyle = "black";

    for(let i=0; i<9; i++){

        var pX = pointsInfo[i][0];
        var pY = pointsInfo[i][1];

        context.beginPath();
        context.arc(pX,pY,10,0,Math.PI*2);
        context.closePath();
        context.fill();

    }

    if(dragging === true){

        context.save();
        context.lineWidth = "10";
        context.strokeStyle = "blue";
        context.lineJoin = "round";

        if(snapInfo.length > 0){

            for(let i=0; i<(snapInfo.length-1); i++){

                var x1 = pointsInfo[snapInfo[i]][0];
                var y1 = pointsInfo[snapInfo[i]][1];
                var x2 = pointsInfo[snapInfo[i+1]][0];
                var y2 = pointsInfo[snapInfo[i+1]][1];

                context.beginPath();
                context.moveTo(x1,y1);
                context.lineTo(x2,y2);
                context.closePath();
                context.stroke();

            }

            var lastIndex = (snapInfo.length - 1);

            context.beginPath();
            context.moveTo(pointsInfo[snapInfo[lastIndex]][0],pointsInfo[snapInfo[lastIndex]][1]);
            context.lineTo(mouseX,mouseY);
    
            context.stroke();

            identifyPoints(snapInfo,pointsInfo);

        }

        context.restore();

    }

}

function setPoints(){

    var arr = [];

    var buffer = 30;
    var wSpread = w-(buffer*2);
    var hSpread = h-(buffer*2);

    for(let i=0; i<3; i++){

        for(let j=0; j<3; j++){

            var pX = buffer+((j+0.5)*(wSpread/3));
            var pY = buffer+((i+0.5)*(hSpread/3));

            arr.push([pX,pY]);
        }

    }

    return arr;

}

function dragPressEvent(e){

    dragging = true;

}

function dragReleaseEvent(e){

    dragging = false;
    endToggle = true;
    pointsInfo = setPoints();
    snapInfo = [];

}

function dragLeaveEvent(e){

    dragging = false;
    endToggle = true;
    pointsInfo = setPoints();
    snapInfo = [];

}

function dragMoveEvent(e){

    if(dragging === true){

        var pX;
        var pY;
        var rect = canvas.getBoundingClientRect();

        if(isTouchDevice() === false){
            pX = (e.pageX - canvas.offsetLeft)*2;
            pY = (e.pageY - canvas.offsetTop)*2;
        } else {

            pX = (e.touches[0].pageX - canvas.offsetLeft)*2;
            pY = (e.touches[0].pageY - canvas.offsetTop)*2;

        }

        checkCoords(pointsInfo,pX,pY);

    }

}

function checkCoords(info,pX,pY){

    var range = 25;

    for(let i=0; i<9; i++){

        if(pX >= info[i][0]-range && pX <= info[i][0]+range && pY >= info[i][1]-range && pY <= info[i][1]+range){

            snapDotToInfo(pX,pY,i);
        }

    }

    if(snapInfo.length > 0){

        var lastIndex = (snapInfo.length - 1);

        context.save();

        context.lineWidth = "10";
        context.strokeStyle = "blue";
        context.lineJoin = "round";

        context.beginPath();
        context.moveTo(pointsInfo[snapInfo[lastIndex]][0],pointsInfo[snapInfo[lastIndex]][1]);
        context.lineTo(pX,pY);

        context.stroke();

        context.restore();

        mouseX = pX;
        mouseY = pY;

    }

}

function snapDotToInfo(pX,pY,n){

    if(snapInfo.indexOf(n) == -1){

        snapInfo.push(n);

    }

}

function identifyPoints(arr,arr2){

    for(let j=0; j<arr.length; j++){

        context.save();

        context.beginPath();
        context.arc(arr2[arr[j]][0],arr2[arr[j]][1],20,0,Math.PI*2);
        context.closePath();
        context.stroke();

        context.restore();

    }

}

function isTouchDevice(){

    try{

        document.createEvent("TouchEvent");
        return true;

    } catch (ev) {

        return false;

    }	

}