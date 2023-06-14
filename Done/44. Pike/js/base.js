// js goes here

alert("click on the options below and the image to view the animation")

var elem = document.querySelectorAll("#placeholder > div");
var ele = document.querySelectorAll("#buttonArea > button");

for(let i=0; i<elem.length; i++){

    elem[i].addEventListener("click",clickEvent,false);
    ele[i].addEventListener("click",clickEvent2,false);

}

function clickEvent(e){

    this.style.animation = "none";
    this.offsetHeight;
    this.style.animation = null;
    this.style.animation = "wepShove 3s forwards";

}

function clickEvent2(e){

    toggleVisibility(this.id);

}

function toggleVisibility(elID){

    for(let j=0; j<3; j++){

        if((elID)+"" == ele[j].id+""){

            elem[j].style.display = "block";

        } else {

            elem[j].style.display = "none";

        }

    }

}

/*

    Sources:

    - Lance: https://64.media.tumblr.com/6c794d8817e2272974c1806cf5ddc092/31e8a8e106911ffe-af/s1280x1920/f0a06e3dd6bbd0c864d3507c371a28ba068dd8f4.jpg
    - Spear: https://image.shutterstock.com/image-vector/spear-lance-weapon-vector-260nw-600081545.jpg
    - Other: https://img.freepik.com/premium-vector/magical-cartoon-steel-spears-lance-weapon_8071-6348.jpg?w=2000

*/