let block = document.getElementById("block");
let character = document.getElementById("character");
let hole = document.getElementById("hole");
let coin = document.getElementById("coin");
let counter=0;
let jumping=0;
hole.addEventListener('animationiteration', () => {
    let random = -((Math.random()*300)+150);
    hole.style.top = random + "px";
    setTimeout(function(){
        random = -((Math.random()*300)+200);
        coin.style.top = random + "px";
    },1000);
    counter++;
});
let gravity = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(jumping==0){
        character.style.top = (characterTop+3) + "px";
    }
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    let cTop = -(500-characterTop);
    if((characterTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>(holeTop+130))))){
    //    alert("game over. score: "+counter);
        character.style.top = 200 + "px";
        counter = 0;
    }
},10);

function jump(){
    let counter = 0;
    jumping=1;
    let jumpInterval = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
        if(counter>20){
            clearInterval(jumpInterval);
            jumping=0;
            counter=0;
        }
        if((characterTop>6)&&(counter<15)){
            character.style.top = (characterTop-5) + "px";
        }
        counter++;
    },10);
}